import React from "react";
import { Box, Typography } from "@mui/material";
import LikeIcon from "../../../assets/LikeIcon.svg";
import PlayIcon from "../../../assets/PlayIcon.svg";

export const RecommendedSongsCard = ({ song }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexBasis: { xs: "calc(100% / 1 - 16px)", md: "calc(100% / 2 - 16px)" },
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        padding: "12px",
        marginLeft: { xs: "0", sm: "16px" },
        marginTop: "24px",
      }}
    >
      <Box
        sx={{
          width: "84px",
          height: "84px",
          minWidth: "84px",
          minHeight: "84px",
          backgroundImage: `url(${song?.icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          borderRadius: "50%",
          marginRight: "8px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          whiteSpace: "nowrap",
          //   marginRight: "43px",
          width: "100%",
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
            marginBottom: "4px",
          }}
        >
          {song?.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "rgba(255, 255, 255, 0.6)",
            marginBottom: "4px",
          }}
        >
          {song?.artist}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#fff",
          }}
        >
          {song?.duration}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-end", sm: "center" },
          justifyContent: "flex-end",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            marginRight: { xs: "0", sm: "16px" },
            "&:not(:first-of-type)": {
              marginTop: { xs: "4px", sm: "0" },
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#fff",
            }}
          >
            {song?.price}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            marginRight: { xs: "0", sm: "16px" },
            "&:not(:first-of-type)": {
              marginTop: { xs: "4px", sm: "0" },
            },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${LikeIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${LikeIcon}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              transition: "all 250ms ease",
              cursor: "pointer",
              "&:hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            "&:not(:first-of-type)": {
              marginTop: { xs: "4px", sm: "0" },
            },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${PlayIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${PlayIcon}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              transition: "all 250ms ease",
              cursor: "pointer",
              "&:hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
