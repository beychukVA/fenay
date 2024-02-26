import React, { useState, useEffect } from "react";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation } from "react-router";
import Cover from "../../assets/cover.png";
import Profile from "../../assets/profile.png";
import ChatIcon from "@mui/icons-material/Chat";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import CustomTabsComponent from "../Tabs";
import { useStyles } from "../../constant/customStyle";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { HiLink } from "react-icons/hi";
import {
  GetUser,
  CreatePost,
  GetAllUsers,
  GetTagUsers,
} from "../../Services/User";
import { UploadFile } from "../../Services/UploadFile";
import { show_toast } from "../../helpers/toast";
import { MentionsInput, Mention } from "react-mentions";
import classForMentions from "./mention.module.css";
import { CustomTextField } from "../Textfield";
import { CreateAd } from "../../Services/Ad";

import {
  Button,
  Box,
  IconButton,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  TextField,
  Divider,
} from "@mui/material";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

export default function PostModal({
  AdModalStatus,
  setAdModalStatus,
  fetchAds,
  refresh,
}) {
  const [CreatePostDesctiption, setCreatePostDesctiption] = useState("");
  const [CreatePostSubject, setCreatePostSubject] = useState("");
  const [CreatePostImage, setCreatePostImage] = useState("");
  const [CreatePostAudio, setCreatePostAudio] = useState("");
  const [Name, setName] = useState("");
  const [users, setusers] = useState([]);
  const [ProfilePicPrev, setProfilePicPrev] = useState(
    "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png"
  );
  const handleUploadFile = (e) => {
    console.log("HANDLE UPLOAD", e);
    if (
      ["jpg", "JPG", "png", "PNG", "jpeg", "JPEG"].includes(
        e.target.files[0].name.split(".")[1]
      )
    ) {
      setCreatePostImage(e.target.files[0]);
      setCreatePostAudio();
    } else if (
      [
        "mp3",
        "acc",
        "mp4",
        "MP3",
        "MP4",
        "ACC",
        "ogg",
        "OGG",
        "wav",
        "WAV",
      ].includes(e.target.files[0].name.split(".")[1])
    ) {
      setCreatePostImage();
      setCreatePostAudio(e.target.files[0]);
    } else {
      show_toast("Please Select Specified Format File.");
    }
  };
  const createPost = async () => {
    const file = CreatePostImage
      ? CreatePostImage
      : CreatePostAudio
      ? CreatePostAudio
      : null;
    console.log("IS FILE", file);
    if (!file) {
      if (CreatePostSubject.trim() === "") {
        show_toast("Ad subject can not be empty");
        return;
      }

      if (CreatePostDesctiption.trim() === "") {
        show_toast("Ad description can not be empty.");
        return;
      }
    }

    const type = CreatePostImage ? "image" : CreatePostAudio ? "audio" : "text";
    const result = file && (await UploadFile(file));
    const postObject = result?.data?.Location
      ? {
          subject: CreatePostSubject,
          desc: CreatePostDesctiption,
          file: result.data.Location,
          type,
        }
      : { subject: CreatePostSubject, desc: CreatePostDesctiption, type };
    console.log("OBJECT", postObject);
    const res = await CreateAd(postObject);
    if (res) {
      setAdModalStatus(false);
      setCreatePostAudio(null);
      setCreatePostImage(null);
      setCreatePostSubject("");
      setCreatePostDesctiption("");
      fetchAds();
      // window.location.reload();
    }
  };
  const classes = useStyles();

  useEffect(() => {
    getUser();
    // getUsers();
  }, []);

  const getUser = async () => {
    const res = await GetUser();
    setName(res.name);
    setProfilePicPrev(
      res.profilePicture
        ? res.profilePicture
        : "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png"
    );
  };
  const getUsers = async () => {
    const res = await GetTagUsers();
    const usersList = res.map((user) => ({
      id: user.user_id,
      display: user.user_name,
    }));
    setusers(usersList);
  };
  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={AdModalStatus}
      onClose={() => {
        setAdModalStatus(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: "24px",
          backgroundColor: "#434343",
          maxWidth: 750,
        },
      }}
    >
      <DialogContent
        sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
      >
        <Box
          sx={{
            padding: "31px 36px",
            color: "white",
            fontFamily: "Poppins",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "100%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Create Ad
              </Typography>
            </Box>

            {/* <Box
              display={"flex"}
              sx={{
                paddingBottom: "5.5px",
                marginBottom: "13px",
                alignItems: "start",
                padding: "0px",
              }}
            >
              <TextField
                multiline
                maxRows={4}
                value={CreatePostDesctiption}
                placeholder={"What's on your mind?"}
                onChange={(e) => setCreatePostDesctiption(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": { width: "100%" },
                  width: "100%",
                  textarea: {
                    margin: "-10px",
                    width: "100%",
                    color: "#9e9797",
                    padding: "0px",
                  },
                  overflowWrap: "break-word",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "250",
                  marginRight: "10px",
                  marginTop: "12px",
                  color: "#cecece",
                  alignItems: "flex-start",
                  padding: "0px",
                }}
              />

             
              </Box> */}

            <Box
              display={"flex"}
              sx={{
                paddingBottom: "5.5px",
                width: "100%",
                marginBottom: "13px",
                alignItems: "start",
                padding: "0px",
              }}
            >
              <MentionsInput
                style={{ width: "100%", border: "none" }}
                placeholder={"Ad Subject"}
                value={CreatePostSubject}
                onChange={(e) => setCreatePostSubject(e.target.value)}
                className="mentions1"
              >
                <Mention
                  trigger="@"
                  data={users}
                  style={{ border: "none" }}
                  className={classForMentions.mentions1__mention}
                />
              </MentionsInput>
            </Box>
            <Box
              sx={{
                borderBottom: "solid 1px #9e9797",
                marginBottom: "1em",
              }}
            ></Box>
            <Box
              display={"flex"}
              sx={{
                paddingBottom: "5.5px",
                width: "100%",
                marginBottom: "13px",
                alignItems: "start",
                padding: "0px",
              }}
            >
              <MentionsInput
                style={{ width: "100%", border: "none" }}
                placeholder={"Ad Description"}
                value={CreatePostDesctiption}
                onChange={(e) => setCreatePostDesctiption(e.target.value)}
                className="mentions1"
              >
                <Mention
                  trigger="@"
                  data={users}
                  style={{ border: "none" }}
                  className={classForMentions.mentions1__mention}
                />
              </MentionsInput>
            </Box>
            <Box
              sx={{
                borderBottom: "solid 1px #9e9797",
              }}
            ></Box>

            <Box
              sx={{
                marginTop: "40px",
                display: "flex",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  Upload File
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    fontWeight: "200",
                    marginRight: "10px",
                    color: "#cecece",
                  }}
                >
                  PNG,GIF,WEBP,MP4 or MP3. MAX 30mb.
                </Typography>
              </Box>
              <Box>
                <div class="upload-btn-wrapper">
                  <Button
                    variant="contained"
                    sx={{
                      marginBottom: "20px",
                      marginLeft: "20px",
                      backgroundColor: "#FF1C51",
                      padding: "5px 40px",
                      borderRadius: "30px",
                      fontFamily: "poppins",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      fontWeight: "300",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#FF1C51 !important",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {!CreatePostImage && !CreatePostAudio
                      ? "Upload"
                      : "Change File"}
                  </Button>
                  <input
                    type="file"
                    name="myfile"
                    accept="image/*,audio/*"
                    onChange={handleUploadFile}
                  />
                </div>
              </Box>
            </Box>
          </Box>
          {/* <Box
            sx={{
              height: "100%",
              width: "400px",
              background: "#303030",
              borderRadius: "33px",
              marginLeft: "10px",
            }}
          >
            <Box className={classes.paddingSpace}>
              <Box
                sx={{ marginBottom: "10px" }}
                className={classes.feedbackUserBox}
              >
                <Box
                  sx={{ marginRight: "5px !important" }}
                  className={classes.feedbackUserImage}
                >
                  <Box
                    style={{
                      backgroundImage: `url(${
                        ProfilePicPrev ? ProfilePicPrev : dummyImage
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%",
                      border: "2px solid #1D1D1D",
                      width: "50px",
                      height: "50px",
                    }}
                    className={`${classes.profile}`}
                  ></Box>
                </Box>
                <Box>
                  <Typography className={classes.feedbackUserName}>
                    {Name}
                  </Typography>
                  <Typography className={classes.feedbackUserTime}>
                    2 hours ago
                  </Typography>
                </Box>
              </Box>
              {CreatePostImage && (
                <Box
                  sx={{ marginBottom: "10px" }}
                  className={classes.feedbackSpaceBottom}
                >
                  <Box className={classes.img}>
                    <img
                      src={URL.createObjectURL(CreatePostImage)}
                      alt=""
                      width="50%"
                    />
                  </Box>
                </Box>
              )}

              <Box
                sx={{ marginBottom: "45px", marginTop: "20px" }}
                className={classes.feedbackSpaceBottom}
              >
                <Typography
                  sx={{
                    fontSize: "15px !important",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "3",
                    "-webkit-box-orient": "vertical",
                    overflow: "hidden",
                    fontWeight: "400",
                  }}
                  className={classes.feedbackUserPost}
                >

                <MentionsInput 
                style={{  width : '100%' ,border : 'none' }} 
                placeholder={"What's on your mind?"}
                value={CreatePostDesctiption} 
                disabled={true}
                className='mentions1'
                
                >
                <Mention
                  trigger="@"
                  data={users}
                  style={{ border : 'none' }} 
                  className={classForMentions.mentions3__mention}
                  // renderSuggestion={this.renderUserSuggestion}
                />
             </MentionsInput>
                </Typography>
              </Box>

              {CreatePostAudio && (
                <Box sx={{ marginTop: "60px" }} className={classes.songSection}>
                  <Box className={classes.songLinkSection}>
                    <HiLink className={classes.linkIcon} />
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Typography className={classes.songName}>
                      {CreatePostAudio?.name}
                    </Typography>
                    <Typography className={classes.songSize}>
                      {Math.round(
                        Number(CreatePostAudio?.size) / (1024 * 1024).toFixed(2)
                      )}
                      mb
                    </Typography>
                  </Box>
                </Box>
              )}

              <Divider
                sx={{
                  background: "rgba(255,255,255,0.50)",
                  height: 1,
                  borderRadius: 20,
                }}
              />
              <Box className={classes.feedbackSocial}>
                <Box className={classes.feedbackSocialDetails}>
                  <MessageIcon className={classes.feedbackIcon} />
                  <Typography className={classes.feedbackText}>22</Typography>
                </Box>
                <Box className={classes.feedbackSocialDetails}>
                  <FavoriteIcon className={classes.feedbackIcon} />
                  <Typography className={classes.feedbackText}>22</Typography>
                </Box>
              </Box>
            </Box>
          </Box> */}
        </Box>
        <Button
          variant="contained"
          onClick={createPost}
          sx={{
            marginBottom: "20px",
            float: "right",
            marginRight: "35px",
            backgroundColor: "#FF1C51",
            padding: "5px 40px",
            borderRadius: "30px",
            fontFamily: "poppins",
            textTransform: "capitalize",
            fontSize: "17px",
            fontWeight: "500",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#FF1C51 !important",
              boxShadow: "none",
            },
          }}
        >
          POST
        </Button>
      </DialogContent>
      <IconButton
        onClick={() => {
          setAdModalStatus(false);
          // setCreatePostDesctiption("")
          // setCreatePostImage("")
        }}
        className={classes.customizedButton}
      >
        <CloseIcon fontSize={"large"} />
      </IconButton>
    </Dialog>
  );
}
