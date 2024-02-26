import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../../constant/customStyle";
import CloseXIcon from "../../../assets/CloseXIcon.svg";
import MoreIcon from "../../../assets/MoreIcon.svg";
import HeartIcon from "../../../assets/HeartIcon.svg";
import VRIcon from "../../../assets/VRIcon.svg";
import WatchIcon from "../../../assets/WatchIcon.svg";

export const EventsDetailDialog = ({
  isEventDetailOpne,
  currentEventSelected,
  setEventDetailOpne,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={isEventDetailOpne}
      maxWidth={"lg"}
      onClose={() => setEventDetailOpne(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          maxWidth: "645px",
          width: "100%",
          height: "744px",
          borderRadius: "8px",
          background: "rgba(24, 26, 32, 0.44)",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.31)",
        },
      }}
    >
      <DialogContent
        sx={{
          position: "relative",
          padding: "32px !important",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "33px",
            right: "32px",
            width: "32px",
            height: "32px",
            transition: "all 250ms ease",
            WebkitMask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
            mask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
            cursor: "pointer",
            "&:not(:hover)": {
              background: "rgba(255, 255, 255, 1)",
            },
            "&:hover": {
              background: "rgba(255, 255, 255, 0.6)",
            },
          }}
          onClick={() => setEventDetailOpne(false)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              marginBottom: "33px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#fff",
                marginRight: "29px",
              }}
            >
              Event details
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                borderRadius: "32px",
                background: "#EAEAEA",
              }}
            >
              <img src={MoreIcon} alt="more" />
            </Box>
          </Box>
          <Box
            sx={{
              maxHeight: "319px",
              width: "100%",
              height: "100%",
              background: `url(${currentEventSelected?.img})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "4px",
              marginBottom: "37px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "19px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
                color: "#fff",
              }}
            >
              {currentEventSelected?.title}
            </Typography>
            <Box
              sx={{
                width: "32px",
                height: "32px",
                WebkitMask: `url(${HeartIcon}) center center / 32px 32px no-repeat`,
                mask: `url(${HeartIcon}) center center / 32px 32px no-repeat`,
                backgroundSize: "cover",
                backgroundColor: "#fff",
                transition: "all 250ms ease",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(255, 130, 0, 1)",
                },
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#fff",
              maxWidth: "380px",
              width: "100%",
              marginBottom: "16px",
            }}
          >
            {currentEventSelected?.desc}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#fff",
              marginBottom: "5px",
            }}
          >
            Date
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            {currentEventSelected?.date}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#fff",
              marginBottom: "5px",
            }}
          >
            Live
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              marginBottom: "42px",
            }}
          >
            <Button
              sx={{
                padding: "10px 16px",
                background: "rgba(255, 130, 0, 1)",
                borderRadius: "40px",
                marginRight: "20px",
                "&:hover": {
                  background: "rgba(255, 130, 0, 0.8)",
                },
              }}
            >
              <Box
                sx={{
                  width: "18px",
                  height: "18px",
                  WebkitMask: `url(${VRIcon}) center center / 18px 18px no-repeat`,
                  mask: `url(${VRIcon}) center center / 18px 18px no-repeat`,
                  backgroundSize: "cover",
                  backgroundColor: "#000",
                  marginRight: "4px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#000",
                  textTransform: "none",
                }}
              >
                VR Experience
              </Typography>
            </Button>
            <Button
              sx={{
                padding: "10px 16px",
                background: "transparent",
                borderRadius: "40px",
                border: "1px solid #FFFFFF",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  width: "18px",
                  height: "18px",
                  WebkitMask: `url(${WatchIcon}) center center / 18px 18px no-repeat`,
                  mask: `url(${WatchIcon}) center center / 18px 18px no-repeat`,
                  backgroundSize: "cover",
                  backgroundColor: "#fff",
                  marginRight: "4px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Watch
              </Typography>
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
