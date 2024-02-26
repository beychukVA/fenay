import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { get_time_diff } from "../../../helpers/timeDiff";

export const ContactCard = ({ selectedContact, onSelect, contact }) => {
  const lastMessage = useMemo(
    () => contact?.messages[contact?.messages.length - 1],
    [contact?.messages]
  );
  const unreadMessages = useMemo(
    () => contact?.messages.filter((message) => message?.status === "new"),
    [contact?.messages]
  );

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
      onClick={() => onSelect(contact)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        background:
          selectedContact?.id === contact?.id
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(255, 255, 255, 0.1)",
        padding: "8px 15px 8px 8px",
        maxWidth: "378px",
        width: "100%",
        height: "64px",
        marginBottom: "16px",
        cursor: "pointer",
        transition: "all 250ms ease",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "0",
          width: "48px",
          minWidth: "48px",
          height: "48px",
          minHeight: "48px",
          borderRadius: "50%",
          background: `url(${contact?.icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          marginRight: "16px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            zIndex: "1",
            width: "12px",
            height: "12px",
            border: "2px solid #FFFFFF",
            borderRadius: "50%",
            background: `${statusColor(contact?.status)}`,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          marginRight: "16px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "18px",
            color: "#fff",
            marginBottom: "4px",
          }}
        >
          {contact?.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "18px",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          {lastMessage?.type === "text"
            ? lastMessage?.content
            : lastMessage?.type}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          marginLeft: "auto",
        }}
      >
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
          }}
        >
          {get_time_diff(contact?.statusTime)}
        </Typography>
        {unreadMessages && unreadMessages.length > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
              minWidth: "23px",
              height: "22px",
              borderRadius: "12px",
              background: "#2F80ED",
              padding: "4px 8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "14px",
                letterSpacing: "-0.02em",
                color: "#fff",
              }}
            >
              {unreadMessages.length}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
