import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { get_time_diff } from "../../../helpers/timeDiff";

export const MessageCard = ({ contact, message }) => {
  const matches = useMediaQuery("(max-width:768px)");

  const statusColor = (status) => {
    switch (status) {
      case "online":
        return "#4CE417";
      case "as away":
        return "#F2C94C";
      case "offline":
        return "#BDBDBD";

      default:
        return "#fff";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: message?.sender === "Me" ? "row" : "row-reverse",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: message?.sender === "Me" ? "0 auto 32px 0" : "0 0 32px auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "0",
          width: "24px",
          minWidth: "24px",
          height: "24px",
          minHeight: "24px",
          borderRadius: "50%",
          background: `url(${contact?.icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          margin: message?.sender === "Me" ? "0px 16px 0 0" : "0px 0 0 16px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            zIndex: "1",
            width: "6px",
            height: "6px",
            border: "1px solid #FFFFFF",
            borderRadius: "50%",
            background: `${statusColor(contact?.status)}`,
          }}
        />
      </Box>
      {message?.type === "text" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            maxWidth: "366px",
            width: "100%",
            padding: "16px 14px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "20px",
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            {message?.content}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",
              color: "#fff",
              opacity: "0.6",
              marginBottom: "6px",
              whiteSpace: "nowrap",
              marginLeft: "auto",
            }}
          >
            {get_time_diff(contact?.statusTime)}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: matches ? "260px" : "365px",
              height: matches ? "187px" : "292px",
              borderRadius: "4px",
              background: `url(${message?.content})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              marginBottom: "8px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",
              color: "#fff",
              opacity: "0.6",
              marginBottom: "6px",
              whiteSpace: "nowrap",
              marginLeft: "auto",
            }}
          >
            {get_time_diff(contact?.statusTime)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
