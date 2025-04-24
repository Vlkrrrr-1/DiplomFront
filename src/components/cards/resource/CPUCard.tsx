import * as React from "react";
import { useNavigate } from "react-router";
import ResCard from "./ResCard";

interface CPULoadProps {
  cpuLoad: number | undefined;
}

const CPUCard: React.FC<CPULoadProps> = ({ cpuLoad }) => {
  const navigate = useNavigate();

  const getColor = (load: number | undefined) => {
    if (load === undefined) return "gray";
    if (load <= 20) return "linear-gradient(135deg, #00c853, #b2ff59)";
    if (load <= 50) return "linear-gradient(135deg, #ffeb3b, #ff9800)";
    if (load <= 80) return "linear-gradient(135deg, #ff9800, #ff5722)";
    return "linear-gradient(135deg, #ff5722, #d32f2f)";
  };

  return (
    <ResCard
      title="CPU"
      imageSrc="/images/resourceLogo/CpuLogo.png"
      imageAlt="CPU image"
      usageValue={cpuLoad}
      usageLabel="Processor load"
      buttonText="View the CPU graph"
      getColor={getColor}
      buttonAction={() => {
        navigate("/history");
      }}
    />
  );
};

export default CPUCard;
