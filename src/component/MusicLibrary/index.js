import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "../../constant/customStyle";

import ExploreTitle from "../../Screens/Home/components/ExploreTitle";
const MusicLibrary = ({ setSongUrl, setSongDetails, open, setOpen }) => {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const [userSongs, setUserSongs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [MyId, setMyId] = useState("");
  // useEffect(() => {
  //   const setData = async () => {
  //     const { _id } = await parseJwt();
  //     setMyId(_id);
  //     const user_songs = await GetSongs();
  //     setUserSongs(user_songs.data);
  //   };
  //   setData();
  // }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      className="header-scroll"
      classes={{ paper: classes.paper }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: 20,
          backgroundColor: "#1D1D1D",
          border: "2px solid #707070",
          maxWidth: 974,
        },
      }}
    >
      <CloseIcon
        onClick={handleClose}
        sx={{
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "600",
          fontFamily: "inter",
          color: "#fff",
          position: "absolute",
          right: "11px",
          top: "11px",
          zIndex: 2,
        }}
      />
      <DialogContent>
        <Box>
          <ExploreTitle title="Songs" />
          <br />
          <Grid container spacing={6} sx={{ marginBottom: "43px" }}>
            {userSongs.length === 0 && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  color: "#fff",
                  position: "relative",
                  top: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                  fontSize: "1em",
                }}
              >
                No songs purchased yet.
              </div>
            )}
            {userSongs.map((song, index) => (
              <Grid item xs={12} sm={12} lg={3} md={3}>
                <Box
                  onClick={() => {
                    setSongUrl(song.audioFile);
                    setSongDetails({
                      artist: song.artist,
                      title: song.album,
                      thumbnail: song.imgFile,
                      isPurchased: true,
                    });
                  }}
                  key={index}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.18)",
                    borderRadius: "19px",
                    padding: "0px 8px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "rgba(25,25,25)",
                    },
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{
                      width: "100%",
                      marginBottom: "-2px",
                      columnGap: "7px",
                      marginLeft: "13px",
                    }}
                  >
                    <Box>
                      <br />
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    className={classes.img}
                    sx={{ position: "relative" }}
                  >
                    <Box
                      style={{
                        width: "143px",
                        height: "173px",
                        background: `url(${song.imgFile})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "0px",
                        width: "143px",
                        textAlign: "center",
                        padding: "0.5em 0em",
                        background:
                          "linear-gradient(180deg,transparent,rgba(0,0,0,.297) 15%,rgba(0,0,0,.438) 30%,#000)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "10px",
                          fontWeight: "500",
                        }}
                      >
                        {song.album}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "10px",
                          fontWeight: "500",
                        }}
                      >
                        {song.artist}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ width: "100%", columnGap: "35px" }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Typography sx={{ fontWeight: "900", color: "#fff" }}>
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </DialogContent>
      <IconButton onClick={handleClose} className={classes.customizedButton}>
        <CloseIcon fontSize={"large"} />
      </IconButton>
    </Dialog>
  );
};

export default MusicLibrary;
