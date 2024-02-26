import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeadphonesNFTIcon from "../../../assets/HeadphonesNFTIcon.svg";

export const SongCard = ({ song }) => {
  return (
    <Box
      onClick={() => {}}
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
        src={song?.imgFile}
        alt={song?.album}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          background: "rgba(24, 26, 32, 0.44)",
          backdropFilter: "blur(25px)",
          padding: "16px 16px 22px 16px",
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
          position: "absolute",
          left: "0",
          bottom: "0",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-48px",
            left: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            backdropFilter: "blur(5px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #FFFFFF",
              background: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                background: `url(${HeadphonesNFTIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              backgroundImage: `url(${song?.artist?.artist_icon})`,
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
            {song?.artist?.artist_name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans !important",
              fontStyle: "normal !important",
              fontWeight: "400 !important",
              fontSize: "12px !important",
              lineHeight: "14px !important",
              color: "#fff !important",
              marginLeft: "auto",
            }}
          >
            {song?.category}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            marginBottom: "25px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans !important",
              fontStyle: "normal !important",
              fontWeight: "600 !important",
              fontSize: "28px !important",
              lineHeight: "28px !important",
              color: "#fff !important",
            }}
          >
            {song?.album}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans !important",
              fontStyle: "normal !important",
              fontWeight: "700 !important",
              fontSize: "24px !important",
              lineHeight: "24px !important",
              color: "#fff !important",
              marginLeft: "auto",
            }}
          >
            {song?.price}
          </Typography>
        </Box>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px auto",
            width: "100%",
            background: "transparent",
            borderRadius: "6px",
            border: "1px solid #FFFFFF",
            transition: "all 250ms ease",
            "&:hover": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter !important",
              fontStyle: "normal !important",
              fontWeight: "600 !important",
              fontSize: "14px !important",
              lineHeight: "20px !important",
              color: "#fff !important",
              textTransform: "capitalize",
            }}
          >
            Buy
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
