import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

export const TrackCard = ({ track }) => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: "24px",
      }}
    >
      <img
        style={{
          width: matches ? "59px" : "79px",
          height: matches ? "59px" : "79px",
          borderRadius: "4px",
          marginRight: "18px",
        }}
        src={track?.img}
        alt={track?.name}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: "19px",
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          {track?.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: { xs: "12px", sm: "14px" },
            lineHeight: "16px",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          {track?.author}
        </Typography>
      </Box>
    </Box>
  );
};
