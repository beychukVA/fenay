import React from "react";
import { Box, Typography } from "@mui/material";
import BiPassIcon from "../../../assets/BiPassIcon.svg";

export const BackstagePassCard = ({ backstage }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "24px 34px",
        width: "270px",
        maxHeight: "203px",
        borderRadius: "8px",
        background: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "24px",
          height: "24px",
          background: `url(${BiPassIcon})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        sx={{
          width: "72px",
          height: "72px",
          background: `url(${backstage?.icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          marginBottom: "24px",
        }}
      />
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "19px",
          color: "#FDFEFA",
          marginBottom: "8px",
        }}
      >
        {backstage?.type}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "16px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {backstage?.access}
      </Typography>
    </Box>
  );
};
