import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Slider,
  MenuItem,
  Menu,
} from "@mui/material";
import { useStyles } from "../../constant/customStyle";
import MoreIcon from "@mui/icons-material/MoreVert";
import PreviousIcon from "../../assets/PreviousIcon.svg";
import NextIcon from "../../assets/NextIcon.svg";
import PlayIcon from "../../assets/PlayIcon.svg";
import PauseIcon from "../../assets/PauseIcon.svg";
import SoundVolumeIcon from "../../assets/SoundVolumeIcon.svg";
import ShareIcon from "../../assets/ShareIcon.svg";
import DownloadIcon from "../../assets/DownloadIcon.svg";

export default function SongPlayer({
  blur,
  playlistUrls,
  SongDetails,
  setSongUrl,
  setSongDetails,
}) {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  const [showSound, setShowSound] = React.useState(false);
  const [Volume, setVolume] = useState(100);
  const [File, setFile] = React.useState(new Audio());
  const [intervalId, setintervalId] = React.useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleVolume = (vol) => {
    File.volume = vol / 100;
    setVolume(vol);
  };

  useEffect(() => {
    play ? File?.play() : File?.pause();
  }, [File, play]);

  useEffect(() => {
    // setPosition(0);
    File.pause();
    File.currentTime = 0;
    const newFile = new Audio(playlistUrls);
    newFile.volume = Volume / 100;
    setFile(newFile);
    newFile.addEventListener("loadeddata", (data) => {
      // let duration = newFile.duration;
      // setduration(duration);
    });

    newFile.play();
    playlistUrls && setPlay(true);

    if (intervalId) {
      clearInterval(intervalId);
    }
    if (newFile) {
      const intervalid = setInterval(() => {
        // setPosition(newFile.currentTime);
      }, 2000);
      setintervalId(intervalid);
    }
    if (SongDetails?.isPurchased === false) {
      setTimeout(() => {
        console.log("Stop FILE");
        newFile.pause();
        newFile.currentTime = 0;
      }, 10000);
    }
  }, [File, SongDetails?.isPurchased, Volume, intervalId, playlistUrls]);

  const toggleShowSound = () => setShowSound(!showSound);

  const menuId = "primary-sound-player-menu";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "fixed",
        zIndex: "999",
        left: "0",
        bottom: "-2px",
        width: "100%",
        // height: "96px",
        background: "#000",
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0px 2px 12px 4px rgba(255, 255, 255, 0.2)",
        padding: { xs: "20px", sm: "20px 48px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/** Song Details */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: { xs: "20px", sm: "0" },
          }}
        >
          <img
            style={{ borderRadius: "8px", marginRight: "17px" }}
            width="56"
            height="56"
            src={SongDetails?.imgFile}
            alt="preview_image"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "12px",
                lineHeight: "14px",
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              {SongDetails?.song_name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "10px",
                lineHeight: "12px",
                color: "rgba(255, 255, 255, 0.85)",
              }}
            >
              {SongDetails?.artist?.artist_name}
            </Typography>
          </Box>
        </Box>
        {/** Player */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            // marginLeft: { xs: "auto", sm: "0" },
          }}
        >
          <Box
            onClick={() => {}}
            sx={{
              width: "20px",
              height: "20px",
              WebkitMask: `url(${PreviousIcon}) center center / 20px 20px no-repeat`,
              mask: `url(${PreviousIcon}) center center / 20px 20px no-repeat`,
              transition: "all 250ms ease",
              cursor: "pointer",
              "&:not(:hover)": {
                background: "#fff",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
          <Box
            onClick={handlePlay}
            sx={{
              cursor: "pointer",
              width: "48px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              background: "#FF8200",
              margin: "0 32px",
              transition: "all 250ms ease",
              "&:hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
            }}
          >
            {play ? (
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  WebkitMask: `url(${PauseIcon}) center center / 20px 20px no-repeat`,
                  mask: `url(${PauseIcon}) center center / 20px 20px no-repeat`,
                  transition: "all 250ms ease",
                  cursor: "pointer",
                  "&:not(:hover)": {
                    background: "#fff",
                  },
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "3px",
                  WebkitMask: `url(${PlayIcon}) center center / 20px 20px no-repeat`,
                  mask: `url(${PlayIcon}) center center / 20px 20px no-repeat`,
                  transition: "all 250ms ease",
                  cursor: "pointer",
                  "&:not(:hover)": {
                    background: "#fff",
                  },
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              />
            )}
          </Box>
          <Box
            onClick={() => {}}
            sx={{
              width: "20px",
              height: "20px",
              WebkitMask: `url(${NextIcon}) center center / 20px 20px no-repeat`,
              mask: `url(${NextIcon}) center center / 20px 20px no-repeat`,
              transition: "all 250ms ease",
              cursor: "pointer",
              "&:not(:hover)": {
                background: "#fff",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
      </Box>
      {/** Menu */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          marginLeft: { xs: "auto", md: "0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              marginRight: { xs: "24px", sm: "48px" },
            }}
            // onMouseEnter={() => setShowSound(true)}
            // onMouseLeave={() => setShowSound(false)}
          >
            <Box
              onClick={() => toggleShowSound()}
              sx={{
                width: "28px",
                height: "28px",
                WebkitMask: `url(${SoundVolumeIcon}) center center / 28px 28px no-repeat`,
                mask: `url(${SoundVolumeIcon}) center center / 28px 28px no-repeat`,
                transition: "all 250ms ease",
                cursor: "pointer",
                "&:not(:hover)": {
                  background: "#fff",
                },
                "&:hover": {
                  background: "#FF8200",
                },
              }}
            />
            <Box
              style={{
                display: `${showSound ? "flex" : "none"}`,
                position: "absolute",
                top: "-110px",
                left: "0",
                height: "100px",
                alignItems: "center",
                justifyContent: "center",
                background: "#2A2B2F",
                padding: "20px 5px",
                borderRadius: "8px",
              }}
            >
              <Slider
                orientation="vertical"
                value={Volume}
                aria-labelledby="vertical-slider"
                onChange={(_, value) => handleVolume(value)}
                className={classes.volumeCutomSlider}
              />
            </Box>
          </Box>
          <IconButton
            sx={{
              marginRight: { xs: "0", md: "84px" },
              "&:hover": {
                background: "transparent",
              },
            }}
            size="large"
            edge="end"
            aria-label="sound player menu"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MoreIcon
              sx={{
                fontSize: "28px",
                color: "#fff",
                transition: "all 250ms ease",
                "&:hover": {
                  color: "#FF8200 !important",
                },
              }}
            />
          </IconButton>
          <Menu
            className={classes.menuSoundPlayer}
            id="menu-player"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => {}}>
              <Box
                sx={{
                  width: "18px",
                  height: "18px",
                  WebkitMask: `url(${ShareIcon}) center center / 18px 18px no-repeat`,
                  mask: `url(${ShareIcon}) center center / 18px 18px no-repeat`,
                  transition: "all 250ms ease",
                  cursor: "pointer",
                  marginRight: "13px",
                  "&:not(:hover)": {
                    background: "#fff",
                  },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "83%",
                  color: "#fff",
                  transition: "all 250ms ease",
                }}
              >
                Share
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <Box
                sx={{
                  width: "18px",
                  height: "18px",
                  WebkitMask: `url(${DownloadIcon}) center center / 18px 18px no-repeat`,
                  mask: `url(${DownloadIcon}) center center / 18px 18px no-repeat`,
                  transition: "all 250ms ease",
                  cursor: "pointer",
                  marginRight: "13px",
                  "&:not(:hover)": {
                    background: "#fff",
                  },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "83%",
                  color: "#fff",
                  transition: "all 250ms ease",
                }}
              >
                Download
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#D9D9D9",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            UP NEXT
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#fff",
              width: "131px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            Sira 2 (feat.wasimwasimwasimwasimwasim)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
