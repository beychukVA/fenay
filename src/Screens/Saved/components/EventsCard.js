import React from "react";
import { Box, Typography } from "@mui/material";

export const EventsCard = ({ event }) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "12.88px",
          right: "11.44px",
          zIndex: "2",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "29px",
          padding: "3px 6px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "17px",
            lineHeight: "21px",
            color: "#1F222A",
            textTransform: "none",
          }}
        >
          {event?.price}
        </Typography>
      </Box>
      <img
        style={{
          borderRadius: "12px",
          marginBottom: "16px",
          width: "100%",
          height: "202px",
        }}
        src={event?.img}
        alt={event?.title}
      />
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "19px",
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
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "17px",
          color: "rgba(255, 255, 255, 0.65)",
        }}
      >
        {event?.date}
      </Typography>
    </Box>
  );
};
