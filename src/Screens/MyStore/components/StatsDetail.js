import React from "react";
import { Box, Typography } from "@mui/material";

const stats = [
  {
    id: Math.random(),
    title: "Songs",
    value: "21 ($219)",
    color: "#88D5D5",
  },
  {
    id: Math.random(),
    title: "Events",
    value: "21 ($219)",
    color: "#FF9628",
  },
  {
    id: Math.random(),
    title: "Merch",
    value: "21 ($219)",
    color: "#5479FE",
  },
  {
    id: Math.random(),
    title: "Backstage Pass",
    value: "21 ($219)",
    color: "#9747FF",
  },
];

export const StatsDetail = ({ refChart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flex: "1.5",
        width: "100%",
        height: "100%",
        minHeight: refChart?.offsetHeight,
        background: "#2A2B2F",
        borderRadius: "8px",
        padding: "64px 28px",
        marginLeft: { xs: "0", md: "16px" },
        marginTop: { xs: "16px", md: "0" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          width: "100%",
          marginLeft: "-15px",
          marginTop: "-30px",
        }}
      >
        {stats?.map((stat) => (
          <Box
            key={stat.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              flexBasis: {
                xs: "calc(100% / 1 - 30px)",
                sm: "calc(100% / 2 - 30px)",
              },
              marginTop: "30px",
              marginLeft: "30px",
              padding: "10% 20px 10% 20px",
              border: `1px solid ${stat?.color}`,
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "24px",
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              {stat?.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
                color: stat?.color,
              }}
            >
              {stat?.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
