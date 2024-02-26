import React from "react";
import {
  Box,
  Button,
  TextareaAutosize,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { get_time_diff } from "../../../helpers/timeDiff";
import { MessageCard } from "./MessageCard";
import SmileIcon from "../../../assets/SmileIcon.svg";
import PictureIcon from "../../../assets/PictureIcon.svg";
import ScrapIcon from "../../../assets/ScrapIcon.svg";
import MicrophoneIcon from "../../../assets/MicrophoneIcon.svg";
import SendIcon from "../../../assets/SendIcon.svg";
import ArrowLeftWhite from "../../../assets/ArrowLeftWhite.svg";

export const ChatContainer = ({
  selectedContact,
  setSelectedContact,
  contact,
}) => {
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
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        padding: matches ? "8px 0 0 0" : "8px 0 0 31px",
        overflow: "hidden",
      }}
    >
      {matches && selectedContact && (
        <Box
          onClick={() => setSelectedContact(null)}
          sx={{
            position: "relative",
            zIndex: "2",
            marginBottom: "24px",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer !important",
            color: "#fff",
            transition: "all 250ms ease",
            "&:hover": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "&:hover div": {
              background: "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              transition: "all 250ms ease",
              background: "#fff",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "140%",
              color: "inherit",
              letterSpacing: "0.2px",
              marginLeft: "16px",
              transition: "all 250ms ease",
            }}
          >
            Back
          </Typography>
        </Box>
      )}
      {/** Chat Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          marginBottom: "32px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: "0",
            width: "55px",
            minWidth: "55px",
            height: "55px",
            minHeight: "55px",
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
              width: "13.75px",
              height: "13.75px",
              border: "2.29167px solid #FFFFFF",
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
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "18px",
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            {contact?.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "18px",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            {get_time_diff(contact?.statusTime)}
          </Typography>
        </Box>
      </Box>
      {/** Chat Body */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          height: "100%",
          overflow: "auto",
          paddingRight: "10px",
        }}
      >
        {contact?.messages &&
          contact?.messages.map((message) => (
            <MessageCard contact={contact} message={message} />
          ))}
      </Box>
      {/** Chat Footer */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          width: "100%",
          padding: "32px 24px 14px 32px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#878787",
            marginBottom: "20px",
          }}
        >
          Write a message...
        </Typography>
        <form
          noValidate
          autoComplete="off"
          style={{
            width: "100%",
            marginBottom: "14px",
          }}
        >
          <TextareaAutosize
            maxRows={2}
            minRows={1}
            onChange={() => {}}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              border: "none",
              outline: "none",
              borderRadius: "0",
              background: "inherit",
              color: "#FFFFFF",
              resize: "none",
              padding: "0 5px 0 0",
              width: "100%",
              borderBottom: "1px solid #DCDCDC",
            }}
          />
        </form>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          {/** Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                background: "#fff",
                borderRadius: "50%",
                cursor: "pointer",
                marginRight: "16px",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "#FF8200",
                },
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: `url(${SmileIcon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                background: "#fff",
                borderRadius: "50%",
                cursor: "pointer",
                marginRight: "16px",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "#FF8200",
                },
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: `url(${PictureIcon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                background: "#fff",
                borderRadius: "50%",
                cursor: "pointer",
                marginRight: "16px",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "#FF8200",
                },
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: `url(${ScrapIcon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                background: "#fff",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "#FF8200",
                },
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: `url(${MicrophoneIcon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Box>
          </Box>
          {/** Send */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginLeft: "auto",
            }}
          >
            <Button
              sx={{
                transition: "all 250ms ease",
                background: "transparent",
                "&:hover": {
                  background: "transparent",
                },
                "&:hover div": {
                  background: "#FF8200",
                },
                "&:hover p": {
                  color: "#FF8200",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "rgba(255, 255, 255, 0.8)",
                  marginRight: "8px",
                  textTransform: "none",
                  transition: "all 250ms ease",
                }}
              >
                Send
              </Typography>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  WebkitMask: `url(${SendIcon}) center center / 20px 20px no-repeat`,
                  mask: `url(${SendIcon}) center center / 20px 20px no-repeat`,
                  backgroundSize: "cover",
                  transition: "all 250ms ease",
                  "&:not(:hover)": {
                    background: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
