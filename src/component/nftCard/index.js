import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";

import { useStyles } from "../../constant/customStyle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const NFTCard = ({
  handleModalOpen,
  regularNft,
  MyId,
  handleNftLike,
  isProfile = false,
}) => {
  const classes = useStyles();

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
      }}
    >
      <img
        style={{
          width: "100%",
          height: "309px",
          borderTopRightRadius: "4px",
          borderTopLeftRadius: "4px",
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
          background: "#2A2B2F",
          padding: "37px 16px 32px 16px",
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
        }}
      >
        <Box
          sx={{
            width: "54px",
            height: "54px",
            backgroundImage: `url(${regularNft?.artist?.artist_icon})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: "8px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans !important",
              fontStyle: "normal !important",
              fontWeight: "400 !important",
              fontSize: "16px !important",
              lineHeight: "150% !important",
              color: "#fff !important",
            }}
          >
            {regularNft?.artist?.artist_name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans !important",
              fontStyle: "normal !important",
              fontWeight: "500 !important",
              fontSize: "20px !important",
              lineHeight: "160% !important",
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
            padding: "11px 19px",
            background: "#FF8200",
            borderRadius: "20px",
            transition: "all 250ms ease",
            marginLeft: "auto",
            "&:hover": {
              background: "#FF8200",
              opacity: "0.8",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist !important",
              fontStyle: "normal !important",
              fontWeight: "700 !important",
              fontSize: "12px !important",
              lineHeight: "14px !important",
              color: "#000 !important",
            }}
          >
            {regularNft?.price}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NFTCard;
