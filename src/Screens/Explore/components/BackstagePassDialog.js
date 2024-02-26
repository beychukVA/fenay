import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../../constant/customStyle";
import CloseXIcon from "../../../assets/CloseXIcon.svg";
import BiPassIcon from "../../../assets/BiPassIcon.svg";

export const BackstagePassDialog = ({
  isBackstagePassDialogOpen,
  setBackstagePassDialogOpen,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={isBackstagePassDialogOpen}
      maxWidth={"lg"}
      onClose={() => setBackstagePassDialogOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          width: "556px",
          height: "454px",
          borderRadius: "8px",
          background: "rgba(24, 26, 32, 0.7)",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.31)",
        },
      }}
    >
      <DialogContent
        sx={{
          position: "relative",
          padding: {
            xs: "20px !important",
            sm: "64px 20px !important",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "24px",
            right: "24px",
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
          onClick={() => setBackstagePassDialogOpen(false)}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Box
            style={{
              width: "84px",
              height: "84px",
              backgroundImage: `url(${BiPassIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              marginBottom: "32px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
              marginBottom: "4px",
            }}
          >
            No Backstage Pass
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "140%",
              color: "#D5D4D8",
              letterSpacing: "0.2px",
              marginBottom: "48px",
            }}
          >
            You don’t have backstage pass of Yolotli Bailey.
          </Typography>
          <Button
            sx={{
              padding: "19px 26.5px",
              background: "#FF8200",
              borderRadius: "40px",
              transition: "all 250ms ease",
              marginBottom: "24px",
              "&:hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "17px",
                lineHeight: "20px",
                color: "#000",
                textTransform: "none",
              }}
            >
              Get Backstage Pass
            </Typography>
          </Button>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
              color: "#FF8200",
              letterSpacing: "0.2px",
              transition: "all 250ms ease",
              cursor: "pointer",
              "&:hover": {
                color: "rgba(255, 130, 0, 0.8)",
              },
            }}
          >
            Visit Artist Profile
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
