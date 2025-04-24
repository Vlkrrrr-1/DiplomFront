import * as React from "react";
import ResCard from "./ResCard";
import { useNavigate } from "react-router";

interface RamCardProps {
  ramLoad:
    | {
        totalMemory: number;
        usedMemory: number;
        remainingMemory: number;
      }
    | undefined;
}

const RamCard: React.FC<RamCardProps> = ({ ramLoad }) => {
  const navigate = useNavigate();

  let ramUsage = 0;
  if (ramLoad)
    ramUsage = parseFloat(
      ((ramLoad?.usedMemory / ramLoad?.totalMemory) * 100).toFixed(2)
    );

  const getColor = (load: number | undefined) => {
    if (load === undefined) return "gray";
    if (load <= 20) return "linear-gradient(135deg, #00c853, #b2ff59)";
    if (load <= 50) return "linear-gradient(135deg, #ffeb3b, #ff9800)";
    if (load <= 80) return "linear-gradient(135deg, #ff9800, #ff5722)";
    return "linear-gradient(135deg, #ff5722, #d32f2f)";
  };

  return (
    <ResCard
      title="RAM"
      imageSrc="/images/resourceLogo/RamLogo.png"
      imageAlt="RAM image"
      usageValue={ramUsage}
      usageLabel="Ram space used"
      buttonText="View the RAM graph"
      getColor={getColor}
      buttonAction={() => {
        navigate("/history");
      }}
    />
  );
};

export default RamCard;
