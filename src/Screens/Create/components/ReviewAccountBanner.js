import React from "react";
import { Box, Typography } from "@mui/material";
import ConfirmedProfileIcon from "../../../assets/ConfirmedProfileIcon.svg";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

export const ReviewAccountBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        background: "#FFF2E5",
        borderRadius: "4px",
        padding: "24px 137px 24px 20px",
        maxWidth: "746px",
        width: "100%",
        marginBottom: "84px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "0",
          width: "63px",
          height: "63px",
          minWidth: "63px",
          minHeight: "63px",
          backgroundImage: `url(${dummyImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          borderRadius: "50%",
          marginRight: "24px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            right: "-9px",
            zIndex: "1",
            width: "18px",
            height: "18px",
            WebkitMask: `url(${ConfirmedProfileIcon}) center center / 18px 18px no-repeat`,
            mask: `url(${ConfirmedProfileIcon}) center center / 18px 18px no-repeat`,
            background: "#EA3B56",
            backgroundSize: "cover",
            borderRadius: "50%",
          }}
        />
      </Box>
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
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#181A20",
            letterSpacing: "0.2px",
            marginBottom: "12px",
          }}
        >
          Your artist account is under review! 
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "24px",
            color: "rgba(24, 26, 32, 0.85)",
            letterSpacing: "0.2px",
          }}
        >
          Once you create songs, events, merch, and backstage passes, we will
          include this information as well to verify. Once your account is
          verified, your items will be visible on the My Store page.
        </Typography>
      </Box>
    </Box>
  );
};
