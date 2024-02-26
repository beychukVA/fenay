import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SuccessfulIcon from "../../assets/SuccessfulIcon.svg";
import { useNavigate } from "react-router";

export const ResetPasswordSuccess = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.25)",
        zIndex: "0",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "-23px",
          bottom: "0",
          width: "282.54px",
          height: "287.17px",
          background: "#FF8200",
          opacity: "0.15",
          filter: "blur(109.707px)",
          zIndex: "1",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "-64px",
          right: "15%",
          width: "282.54px",
          height: "287.17px",
          background: "#FF8200",
          opacity: "0.15",
          filter: "blur(109.707px)",
          zIndex: "1",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "-31px",
          left: "15%",
          width: "282.54px",
          height: "287.17px",
          background: "#AD00FF",
          opacity: "0.15",
          filter: "blur(109.707px)",
          zIndex: "1",
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "382px",
          height: "100%",
        }}
      >
        <img style={{ marginBottom: "24px" }} src={SuccessfulIcon} alt="" />
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "36px",
            lineHeight: "130%",
            color: "#fff",
            marginBottom: "13px",
          }}
        >
          Successful
        </Typography>
        <Typography
          sx={{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#D4CED9",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Your passward has been successfully reset. <br />
          Click below to log in.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: "112px",
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 0",
              width: "100%",
              background: "#FF8200",
              borderRadius: "6px",
              transition: "all 250ms ease",
              "&:hover": {
                background: "#FF8200",
                opacity: "0.8",
              },
            }}
            onClick={() => navigate("/login")}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#341B00",
                textTransform: "none",
              }}
            >
              Continue
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "130%",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            © 2022 Finay. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
