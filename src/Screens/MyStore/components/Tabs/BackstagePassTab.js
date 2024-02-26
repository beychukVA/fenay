import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { BackstagePassChart } from "../BackstagePassChart";
import { BackstagePassDetail } from "../BackstagePassDetail";

export const BackstagePassTab = () => {
  const [refChart, setRefChart] = useState(null);

  useEffect(
    () => setRefChart(document.getElementById("backstage-pass-chart")),
    []
  );
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
        <BackstagePassDetail refChart={refChart} />
        <BackstagePassChart />
      </Box>
    </Box>
  );
};
