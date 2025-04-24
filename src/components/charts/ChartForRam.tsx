import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Context } from "../..";
import ResourcesService from "../../services/ResourcesService";
import LoadingLogo from "../layout/LoadingLogo";

ChartJS.register(ArcElement, Tooltip, Legend);

type RamData = {
  usedMemory: number;
  totalMemory: number;
  remainingMemory: number;
};

const getColor = (usedPercent: number) => {
  if (usedPercent > 85) return "#e74c3c";
  if (usedPercent > 60) return "#f1c40f";
  return "#2ecc71";
};

const RamPieChart = ({ ram }: { ram: RamData }) => {
  const used = ram.usedMemory;
  const free = ram.remainingMemory;
  const usedPercent = ((used / ram.totalMemory) * 100).toFixed(1);
  const ramInfo =
    (used / ram.totalMemory) * 100 > 90
      ? "Warning: RAM utilization exceeds 90%. You may want to close unused applications or increase the amount of memory."
      : (used / ram.totalMemory) * 100 > 70
      ? "RAM utilization is at a high level. Pay attention to processes that may be consuming too many resources."
      : "Memory resources are optimally utilized. No signs of overload.";

  const data = {
    labels: ["Used", "Free"],
    datasets: [
      {
        label: "Disk Usage (GB)",
        data: [used, free],
        backgroundColor: [getColor(+usedPercent), "#ecf0f1"],
        borderWidth: 1,
      },
    ],
  };

  const [showAnalytics, setShowAnalytics] = useState(false);
  return (
    <Box
      sx={{
        width: "300px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Pie data={data} />
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1">
          📦 Total: <strong>{ram.totalMemory} GB</strong>
        </Typography>
        <Typography variant="body1">
          ✅ Free: <strong>{free} GB</strong>
        </Typography>
        <Typography variant="body1">
          🔥 Used: <strong>{used} GB</strong> ({usedPercent}%)
        </Typography>
      </Box>
      <button
        onClick={() => setShowAnalytics(!showAnalytics)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#9b59b6",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {showAnalytics ? "Hide analytics" : "Get analytics"}
      </button>

      {showAnalytics && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f4f4f4",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Ram Load Analytics:</h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
            }}
          >
            <li>{ramInfo}</li>
          </ul>
        </div>
      )}
    </Box>
  );
};

const ChartForRam = () => {
  const { store } = useContext(Context);
  const [ramDisk, setRamDisk] = useState<RamData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const getInfoForRam = async () => {
      const result = await ResourcesService.getRamInfo(store.selectedPC);
      setRamDisk(result);
    };
    getInfoForRam();
  }, [store.selectedPC]);
  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(135deg, rgb(21, 21, 33) 100%, rgb(74, 74, 110) 0%)",
      }}
    >
      <LoadingLogo />
    </Box>
  ) : (
    <Box
      sx={{
        padding: "30px",
        textAlign: "center",
        height: "93vh",
        background:
          "linear-gradient(135deg, rgb(21, 21, 33) 100%, rgb(74, 74, 110) 0%)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, color: "white" }}>
        RAM Usage Overview
      </Typography>
      <Box sx={{ display: "flex" }}>
        {ramDisk && <RamPieChart ram={ramDisk} />}
      </Box>
    </Box>
  );
};

export default ChartForRam;
