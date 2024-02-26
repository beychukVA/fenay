import React from "react";
import { Box, Typography } from "@mui/material";

export const CommentCard = ({ comment }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: "16px",
      }}
    >
      {/** User */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "14px",
        }}
      >
        <img
          src={comment?.user?.icon}
          alt={comment?.user?.name}
          style={{
            width: "24px",
            height: "24px",
            minWidth: "24px",
            minHeight: "24px",
            marginRight: "8px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "18px",
              color: "#fff",
              marginBottom: "4px",
            }}
          >
            {comment?.user?.name}
          </Typography>
        </Box>
      </Box>
      {/** Desc */}
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "16px",
          letterSpacing: "0.2px",
          color: "rgba(255, 255, 255, 0.9)",
          marginBottom: "14px",
        }}
      >
        {comment?.desc}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          paddingBottom: "14px",
          borderBottom: "1px solid #2A2B2F",
        }}
      ></Box>
    </Box>
  );
};
