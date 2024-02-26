import React from "react";
import { Box, Typography } from "@mui/material";
import MoreIcon from "../../../assets/MoreIcon.svg";

export const CommentCard = ({ comment }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: "24px",
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          minWidth: "40px",
          minHeight: "40px",
          borderRadius: "50%",
          background: `url(${comment?.user_icon})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: "0 20px 5px 0",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "355px",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "12px",
          padding: "8px 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "17px",
              color: "#FF8200",
            }}
          >
            {comment?.user_name}
          </Typography>
          <Box
            sx={{
              width: "14px",
              height: "14px",
              WebkitMask: `url(${MoreIcon}) center center / 14px 14px no-repeat`,
              mask: `url(${MoreIcon}) center center / 14px 14px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              transform: "rotate(90deg)",
              transition: "all 250ms ease",
              cursor: "pointer",
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "18px",
            color: "#fff",
          }}
        >
          {comment?.comment}
        </Typography>
      </Box>
    </Box>
  );
};
