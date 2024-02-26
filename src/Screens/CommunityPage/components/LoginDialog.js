import React from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import { useStyles } from "../../../constant/customStyle";
import LoginDialogBackgroundImage from "../../../assets/LoginDialogBackgroundImage.jpg";
import { useNavigate } from "react-router-dom";

export const LoginDialog = ({ isLoginDialogOpne, setLoginDialogOpne }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={isLoginDialogOpne}
      maxWidth={"lg"}
      onClose={() => setLoginDialogOpne(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          width: "488px",
          height: "524px",
          borderRadius: "16px",
          overflow: "hidden",
          background: `url(${LoginDialogBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0 !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            padding: "0 24px 24px 24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              marginBottom: "17px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "32px",
                lineHeight: "38px",
                letterSpacing: "0.2px",
                color: "#fff",
              }}
            >
              Be a part of the
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "32px",
                lineHeight: "38px",
                letterSpacing: "0.2px",
                color: "#FF8200",
                marginLeft: "10px",
              }}
            >
              Community
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.2px",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "40px",
            }}
          >
            Login with you account or signup for a new account to leave a
            comment.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Button
              onClick={() => navigate("/signup")}
              sx={{
                padding: "10px 20px",
                background: "#FF8200",
                borderRadius: "6px",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "rgba(255, 130, 0, 0.8)",
                },
                marginRight: "24px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Signup
              </Typography>
            </Button>
            <Button
              onClick={() => navigate("/login")}
              sx={{
                padding: "10px 20px",
                background: "transparent",
                borderRadius: "6px",
                border: "1px solid #FFFFFF",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.2)",
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
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Login
              </Typography>
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
