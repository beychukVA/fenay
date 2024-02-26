import React from "react";
import { Box, Button, Typography } from "@mui/material";

export const UpcomingEventsCard = ({
  handleModalOpen,
  regularNft,
  MyId,
  handleNftLike,
  isProfile = false,
}) => {
  return (
    <Box
      onClick={() => handleModalOpen(regularNft)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        borderRadius: "4px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <img
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          borderTopRightRadius: "4px",
          borderTopLeftRadius: "4px",
          padding: "0.5px",
        }}
        src={regularNft?.imgFile}
        alt={regularNft?.album}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          background: "rgba(24, 26, 32, 0.06)",
          backdropFilter: "blur(25px)",
          padding: "16px",
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
          position: "absolute",
          left: "0",
          bottom: "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              marginBottom: "12px",
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                backgroundImage: `url(${regularNft?.artist?.artist_icon})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginRight: "8px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "400 !important",
                fontSize: "14px !important",
                lineHeight: "14px !important",
                color: "#fff !important",
              }}
            >
              {regularNft?.artist?.artist_name}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Work Sans !important",
              fontStyle: "normal !important",
              fontWeight: "600 !important",
              fontSize: "24px !important",
              lineHeight: "19px !important",
              color: "#fff !important",
            }}
          >
            {regularNft?.album}
          </Typography>
        </Box>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "32px",
            minWidth: "144px",
            maxWidth: "144px",
            padding: "4px 22px",
            marginLeft: "auto",
            background: "transparent",
            borderRadius: "16px",
            border: "1px solid #FF8200",
            transition: "all 250ms ease",
            "&:hover": {
              background: "rgba(255, 130, 0, 0.2)",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans !important",
              fontStyle: "normal !important",
              fontWeight: "600 !important",
              fontSize: "16px !important",
              lineHeight: "150% !important",
              color: "#FF8200 !important",
              textTransform: "uppercase",
            }}
          >
            TOMMOROW
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
