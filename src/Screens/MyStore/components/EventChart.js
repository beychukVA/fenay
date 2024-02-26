import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import { Select } from "../../Library/components/Select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: 1.5,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: {
          family: "Urbanist",
          style: "normal",
          weight: "600",
          lineHeight: "18px",
          size: 15,
        },
        padding: 25,
        usePointStyle: true,
        color: "#fff",
      },
    },
    title: {
      display: false,
      text: "",
    },
  },
  scales: {
    y: {
      min: 0,
      suggestedMax: 150,
      border: {
        color: "transparent",
      },
      ticks: {
        font: {
          family: "Urbanist",
          style: "normal",
          weight: "400",
          size: 14,
          lineHeight: "17px",
        },
        stepSize: 50,
        color: "#A3A3A3",
        textStrokeColor: "transparent",
      },
      grid: {
        drawOnChartArea: false,
      },
    },
    x: {
      border: {
        color: "transparent",
      },
      ticks: {
        font: {
          family: "Urbanist",
          style: "normal",
          weight: "400",
          size: 14,
          lineHeight: "17px",
        },
        color: "#A3A3A3",
      },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.5,
    },
    point: {
      radius: 5,
    },
  },
  layout: {},
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const times = [
  { label: "Today", value: "Today" },
  { label: "This week", value: "This week" },
  { label: "This month", value: "This month" },
];

export const EventChart = ({ id, event }) => {
  const [selectedTime, setSelectedTime] = useState(times[0].value);
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: event?.sales || [],
        borderColor: "#FF8200",
        backgroundColor: "#FF8200",
      },
      {
        label: "Visit",
        data: event?.visit || [],
        borderColor: "#FF9628",
        backgroundColor: "#FF9628",
      },
      {
        label: "Saved",
        data: event?.saved || [],
        borderColor: "#E09A51",
        backgroundColor: "#E09A51",
      },
    ],
  };

  const handleTimeChange = (event) => setSelectedTime(event.target.value);

  return (
    <Box
      id="event-chart"
      sx={{
        flex: "2",
        position: "relative",
        zIndex: "0",
        background: "#2A2B2F",
        borderRadius: "8px",
        width: "100%",
        height: "fit-content",
      }}
    >
      <Line
        style={{
          position: "relative",
          zIndex: "1",
          padding: "24px 32px",
          width: "100%",
          marginTop: "74px",
        }}
        options={options}
        data={data}
      />
      <Box
        sx={{
          position: "absolute",
          left: "32px",
          top: "24px",
          zIndex: "2",
        }}
      >
        <Select
          borderRadius="30px"
          padding="12.5px 36px 12.5px 19px"
          fontSize="14px"
          lineHeight="17px"
          selectedOption={selectedTime}
          options={times}
          handleOptionChange={handleTimeChange}
        />
      </Box>
    </Box>
  );
};
