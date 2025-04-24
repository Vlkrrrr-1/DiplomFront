import * as React from "react";
import ResCard from "./ResCard";
import { useNavigate } from "react-router";

interface DiskCardProps {
  disk:
    | {
        totalMemory: number;
        usedMemory: number;
        remainingMemory: number;
      }[]
    | undefined;
}

const DiskCard: React.FC<DiskCardProps> = ({ disk }) => {
  const navigate = useNavigate();
  let usedMemoryInPerc = 0;
  let allUsedMemory = 0;
  let allMemory = 0;
  if (disk) {
    allUsedMemory = disk.reduce((acc, element) => acc + element.usedMemory, 0);
    allMemory = disk.reduce((acc, element) => acc + element.totalMemory, 0);
    usedMemoryInPerc = parseFloat(
      ((allUsedMemory / allMemory) * 100).toFixed(2)
    );
  }
  const getColor = (load: number | undefined) => {
    if (!load) return "gray";
    if (load <= 20) return "linear-gradient(135deg, #00c853, #b2ff59)";
    if (load <= 50) return "linear-gradient(135deg, #ffeb3b, #ff9800)";
    if (load <= 80) return "linear-gradient(135deg, #ff9800, #ff5722)";
    return "linear-gradient(135deg, #ff5722, #d32f2f)";
  };

  return (
    <ResCard
      title="Disk"
      imageSrc="/images/resourceLogo/DiskLogo.png"
      imageAlt="Disk image"
      usageValue={usedMemoryInPerc}
      usageLabel="Disk space used"
      buttonText="View the Disk graph"
      getColor={getColor}
      buttonAction={() => {
        navigate("/history");
      }}
    />
  );
};

export default DiskCard;
