import React from "react";
import { Box, Typography } from "@mui/material";

export const NoteCard = ({ note }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "4px",
        padding: "17.51px",
        width: "100%",
        height: "auto",
        marginBottom: "22px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "24px",
          color: "#fff",
          marginBottom: "6px",
        }}
      >
        {note?.title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "16px",
          color: "#fff",
          opacity: "0.9",
          minHeight: "51px",
        }}
      >
        {note?.desc}
      </Typography>
    </Box>
  );
};
