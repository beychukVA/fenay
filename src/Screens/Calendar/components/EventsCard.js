import React from "react";
import { Box, Typography } from "@mui/material";

export const EventsCard = ({ handleEventSelected, event }) => {
  return (
    <Box
      onClick={() => handleEventSelected(event)}
      sx={{
        position: "relative",
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        cursor: "pointer",
      }}
    >
      <img
        style={{
          borderRadius: "4px",
          marginBottom: "24px",
          width: "265px",
          height: "198px",
        }}
        src={event?.img}
        alt={event?.title}
      />
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "24px",
          letterSpacing: "-1px",
          color: "#fff",
          textTransform: "none",
          marginBottom: "8px",
        }}
      >
        {event?.title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "17px",
          color: "rgba(255, 255, 255, 0.6)",
        }}
      >
        {event?.date}
      </Typography>
    </Box>
  );
};
