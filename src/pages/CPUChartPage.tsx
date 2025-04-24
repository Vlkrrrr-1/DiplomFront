import React from "react";
import NavigationWrapper from "../components/layout/NavigationWrapper";
import ChartForCPU from "../components/charts/ChartForCpu";

const CPUChartPage = () => {
  return (
    <div>
      <NavigationWrapper />
      <ChartForCPU />
    </div>
  );
};

export default CPUChartPage;
