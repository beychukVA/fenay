import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Select } from "../../../Library/components/Select";
import { StatsChart } from "../StatsChart";
import { StatsDetail } from "../StatsDetail";

const statsSelects = [
  {
    label: "Sales",
    value: "Sales",
  },
];

export const StatsTab = () => {
  const [selectedStats, setSelectedStats] = useState(statsSelects[0].value);
  const [refChart, setRefChart] = useState(null);

  useEffect(() => setRefChart(document.getElementById("stats-chart")), []);

  const handleAssetChange = (event) => {
    setSelectedStats(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Select
        fontWeight={"700"}
        fontSize={"18px"}
        lineHeight={"22px"}
        border={false}
        selectedOption={selectedStats}
        options={statsSelects}
        handleOptionChange={handleAssetChange}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          marginTop: "32px",
        }}
      >
        <StatsChart />
        <StatsDetail refChart={refChart} />
      </Box>
    </Box>
  );
};
