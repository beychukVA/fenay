import React from "react";
import { Box, Typography } from "@mui/material";
import CheckEmailIcon from "../../../assets/CheckEmailIcon.svg";

export const CheckYourEmail = ({ email = "", resendLink }) => {
  return (
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
      <img style={{ marginBottom: "32px" }} src={CheckEmailIcon} alt="" />
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "130%",
          color: "#FDFAFF",
          marginBottom: "16px",
        }}
      >
        Check your email
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
          color: "#D4CED9",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        We sent a password reset link to <br />
        {email}. Please check the email.
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          background: "#303030",
          marginBottom: "18px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: "106px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "15px",
            lineHeight: "160%",
            color: "#D4CED9",
          }}
        >
          Didn’t receive the email? &nbsp;
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "140%",
            letterSpacing: "0.2px",
            color: "#FF8200",
            cursor: "pointer",
          }}
          onClick={() => resendLink()}
        >
          Click to resend
        </Typography>
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
  );
};
