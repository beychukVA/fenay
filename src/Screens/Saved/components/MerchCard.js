import React from "react";
import { Box, Typography } from "@mui/material";

export const MerchCard = ({ merch }) => {
  return (
    <Box
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
      <Box
        sx={{
          position: "absolute",
          top: "18.75px",
          right: "17.31px",
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
          {merch?.price}
        </Typography>
      </Box>
      <img
        style={{ borderRadius: "12px", marginBottom: "12px" }}
        src={merch?.img}
        alt={merch?.title}
      />
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "24px",
          color: "#fff",
          textTransform: "none",
          marginBottom: "3px",
        }}
      >
        {merch?.title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "17px",
          lineHeight: "21px",
          color: "rgba(255, 255, 255, 0.6)",
        }}
      >
        {merch?.date}
      </Typography>
    </Box>
  );
};
