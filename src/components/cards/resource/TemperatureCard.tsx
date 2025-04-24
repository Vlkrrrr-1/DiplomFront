import * as React from "react";
import ResCard from "./ResCard";
import { useNavigate } from "react-router";

interface TemparatureCardProps {
  cpuTemperature: number | undefined;
}

const TemperatureCard: React.FC<TemparatureCardProps> = ({
  cpuTemperature,
}) => {
  const navigate = useNavigate();
  let temperature = 45;
  if (cpuTemperature) temperature = cpuTemperature;
  temperature = 0;

  const getColor = (load: number | undefined) => {
    if (load === undefined) return "gray";
    if (load <= 20) return "linear-gradient(135deg, #00c853, #b2ff59)";
    if (load <= 50) return "linear-gradient(135deg, #ffeb3b, #ff9800)";
    if (load <= 80) return "linear-gradient(135deg, #ff9800, #ff5722)";
    return "linear-gradient(135deg, #ff5722, #d32f2f)";
  };

  return (
    <ResCard
      title="Temperature"
      imageSrc="/images/resourceLogo/TempLogo.png"
      imageAlt="Temperature image"
      usageValue={temperature}
      usageLabel="Temperature load"
      buttonText="View the Temperature graph"
      getColor={getColor}
      buttonAction={() => {
        navigate("/history");
      }}
    />
  );
};

export default TemperatureCard;
