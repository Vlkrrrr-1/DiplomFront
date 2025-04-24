import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import ResourcesService from "../../services/ResourcesService";
import { Context } from "../..";
import LoadingLogo from "../layout/LoadingLogo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CpuLoadChart = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) => {
  const [showAnalytics, setShowAnalytics] = useState(false);

  const average = (
    data.reduce((acc, val) => acc + val, 0) / data.length
  ).toFixed(2);
  const maxLoad = Math.max(...data);
  const overloadCount = data.filter((val) => val > 80).length;
  const overloadPercent = ((overloadCount / data.length) * 100).toFixed(1);

  const chartData = {
    labels,
    datasets: [
      {
        label: "CPU Load (%)",
        data,
        borderColor: "#9b59b6",
        backgroundColor: "rgba(30, 30, 47, 0.61)",
        tension: 0.4,
        fill: true,
        pointRadius: 2,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "CPU Usage Over Time",
        font: {
          size: 18,
          color: "white",
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "CPU Load (%)",
          font: {
            size: 14,
          },
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
        },
        backgroundColorZones: [
          { from: 0, to: 50, color: "rgb(46, 204, 112, 0.5)" },
          { from: 50, to: 80, color: "rgb(241, 196, 15, 0.5)" },
          { from: 80, to: 100, color: "rgb(231, 77, 60, 0.5)" },
        ],
      },
    },
  };

  const backgroundPlugin = {
    id: "backgroundPlugin",
    beforeDraw: (chart: any) => {
      const { ctx, chartArea, scales } = chart;
      if (!chartArea) return;

      const zones = options.scales.y.backgroundColorZones;
      zones.forEach((zone: any) => {
        const y1 = scales.y.getPixelForValue(zone.from);
        const y2 = scales.y.getPixelForValue(zone.to);
        ctx.save();
        ctx.fillStyle = zone.color;
        ctx.fillRect(
          chartArea.left,
          y2,
          chartArea.right - chartArea.left,
          y1 - y2
        );
        ctx.restore();
      });
    },
  };

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Box sx={{ height: { xs: 300, sm: 400, md: 500 } }}>
        <Line data={chartData} options={options} plugins={[backgroundPlugin]} />
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
        <Box
          sx={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f4f4f4",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">CPU Load Analytics:</Typography>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>
              📊 Average load: <strong>{average}%</strong>
            </li>
            <li>
              🚀 Peak Load: <strong>{maxLoad}%</strong>
            </li>
            <li>
              ⚠️ Time in overload (&gt;80%):{" "}
              <strong>
                {overloadCount} points ({overloadPercent}%)
              </strong>
            </li>
          </ul>
        </Box>
      )}
    </Box>
  );
};

const ChartForCPU = () => {
  const [dataMap, setDataMap] = useState<Record<string, number[]>>({});
  const [labelsMap, setLabelsMap] = useState<Record<string, string[]>>({});
  const { store } = useContext(Context);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async (range: string) => {
      const now = new Date();
      let interval = 2;
      let result: number[] = [];

      if (range === "10m") {
        interval = 1;
        result = await ResourcesService.getLast10MinutesCpu(store.selectedPC);
      } else if (range === "1h") {
        interval = 10;
        result = await ResourcesService.getLastHourCpu(store.selectedPC);
      } else if (range === "24h") {
        interval = 60;
        result = await ResourcesService.getLast24HoursCpu(store.selectedPC);
      }

      const generatedLabels = Array.from({ length: result.length }, (_, i) => {
        const minutesAgo = (result.length - i - 1) * interval;
        const time = new Date(now.getTime() - minutesAgo * 60000);

        if (range === "24h") {
          return time.toLocaleTimeString([], { hour: "2-digit" });
        } else {
          return time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
        }
      });

      setDataMap((prev) => ({ ...prev, [range]: result }));
      setLabelsMap((prev) => ({ ...prev, [range]: generatedLabels }));
    };

    ["10m", "1h", "24h"].forEach(fetchData);
  }, [store.selectedPC]);

  const ranges = [
    { label: "Last 10 Minutes", value: "10m" },
    { label: "Last Hour", value: "1h" },
    { label: "Last 24 Hours", value: "24h" },
  ];

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
        background:
          "linear-gradient(135deg, rgb(21, 21, 33) 100%, rgb(74, 74, 110) 0%)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, color: "white" }}>
        CPU Usage Overview
      </Typography>

      {ranges.map(({ label, value }) => (
        <Box key={value} sx={{ marginBottom: "50px" }}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", color: "white" }}
          >
            {label}
          </Typography>
          <CpuLoadChart
            labels={labelsMap[value] || []}
            data={dataMap[value] || []}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ChartForCPU;
