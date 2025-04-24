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

const TemperatureLoadChart = ({
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
        label: "Temperature CPU",
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
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: "Temperature Usage Over Time.",
        font: { size: 18 },
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
          font: { size: 14 },
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature CPU",
          font: { size: 14 },
        },
        min: 0,
        max: 100,
        ticks: { stepSize: 10 },
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
    <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      <Line data={chartData} options={options} plugins={[backgroundPlugin]} />
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
          <h3>Temperature Load Analytics:</h3>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
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
            <li>
              If the temperature graph is not displayed, it may be due to a
              missing temperature sensor or insufficient permissions to access
              the CPU temperature data.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const ChartForTemperature = () => {
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const { store } = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      const result = await ResourcesService.getLastHourTemperature(
        store.selectedPC
      );
      const now = new Date();
      const interval = 10;

      const generatedLabels = Array.from({ length: result.length }, (_, i) => {
        const minutesAgo = (result.length - i - 1) * interval;
        const time = new Date(now.getTime() - minutesAgo * 60000);
        return time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      });

      setData(result);
      setLabels(generatedLabels);
    };

    fetchData();
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
        background:
          "linear-gradient(135deg, rgb(21, 21, 33) 100%, rgb(74, 74, 110) 0%)",
        minHeight: "93vh",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, color: "white" }}>
        Temperature Usage Overview - Last Hour
      </Typography>
      <TemperatureLoadChart labels={labels} data={data} />
    </Box>
  );
};

export default ChartForTemperature;
