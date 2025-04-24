import React from "react";
import NavigationWrapper from "../components/layout/NavigationWrapper";
import ChartForTemperature from "../components/charts/ChartForTemperature";

const TemperatureChartPage = () => {
  return (
    <div>
      <NavigationWrapper />
      <ChartForTemperature />
    </div>
  );
};

export default TemperatureChartPage;
