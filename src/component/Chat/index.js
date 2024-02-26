import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Picker from "emoji-picker-react";
import moment from "moment";
import queryString from "query-string";
import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile, BsPlayCircle } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { useLocation } from "react-router";
import socketIOClient from "socket.io-client";
import CustomTabsComponent from "../../component/Tabs";
import { ChatTextField } from "../../component/Textfield/ChatTextField";
import { baseURL } from "../../constant/constants";
import { useStyles } from "../../constant/customStyle";
import { parseJwt } from "../../helpers/getId";
import { show_toast } from "../../helpers/toast";
import { useClickOutside } from "../../helpers/UseClickOutside";
import {
  CreateConversation,
  CreateMessage,
  FetchConversations,
  FetchExistingConversation,
  GetMessage,
} from "../../Services/Chat";
import { UploadFile } from "../../Services/UploadFile";
import { GetUser } from "../../Services/User";
import TabComponentBidding from "../../tabsCompoent/TabComponentBidding";
import TabComponentCarts from "../../tabsCompoent/TabComponentCarts";
import TabComponentRecently from "../../tabsCompoent/TabComponentRecently";
import TabComponentWishList from "../../tabsCompoent/TabComponentWishList";
import CalendarComponent from "../Calendar";
import ConversationsContainer from "./components/Conversations";
import UserSearch from "./components/UserSearch";
import ImageModal from "./ImageModal";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const tabs = [
  {
    name: "Cart",
    value: "1",
  },

  {
    name: "Wishlist",
    value: "3",
  },
];

const ChatComponent = ({
  blur,
  modal,
  calendarModal,
  cartOpen,
  setCartOpen,
  setCalendarStatus,
  chatModalState,
  createChat,
  setSongUrl,
  setSongDetails,
}) => {
  const classes = useStyles();
  const location = useLocation();
  const matches = useMediaQuery("(max-width:768px)");

  const [open, setOpen] = useState(cartOpen || false);
  const [chatOpen, setChatOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(calendarModal);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const emojiPicker = React.createRef();
  // eslint-disable-next-line no-unused-vars
  const [chosenEmoji, setChosenEmoji] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [showIcons, setShowIcons] = useState(false);

  const [Conversations, setConversations] = useState([]);
  const [loadingConversation, setLoadingConversation] = useState(true);
  const [CurrentConversationId, setCurrentConversationId] = useState("");
  const [Messages, setMessages] = useState([]);
  const [OtherProfileId, setOtherProfileId] = useState("");
  const [OtherProfile, setOtherProfile] = useState({});
  const [MyId, setMyId] = useState("");
  const [newMessage, setnewMessage] = useState("");
  const [ChartIntervalState, setChartIntervalState] = useState();
  const [chatImage, setchatImage] = useState();
  const [chatAudio, setchatAudio] = useState();
  const [ImageModalStatus, setImageModalStatus] = useState(false);
  const [imageUrl, setimageUrl] = useState(false);

  const scrollRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const handleChatOpen = async () => {
    // blur(true);
    setChatOpen(true);
  };

  const handleUploadFile = (e) => {
    if (
      ["jpg", "JPG", "png", "PNG", "jpeg", "JPEG"].includes(
        e.target.files[0].name.split(".")[1]
      )
    ) {
      setchatImage(e.target.files[0]);
      setchatAudio();
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
      setchatImage();
      setchatAudio(e.target.files[0]);
    } else {
      show_toast("Please Select Specified Format File.");
    }
  };

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setEmojiOpen(false));

  // eslint-disable-next-line no-unused-vars
  const createChatOpen = async () => {
    const res1 = await FetchExistingConversation(OtherProfileId);
    if (Object.entries(res1).length === 0) {
      const { _id } = await parseJwt();
      const res = await CreateConversation({
        receiverId: OtherProfileId,
        senderId: _id,
      });
      res && getConversations();
    }
  };

  const handleChatClose = () => {
    clearInterval(ChartIntervalState);
    setChatOpen(false);
    // blur(false);
    chatModalState(false);
  };

  // eslint-disable-next-line no-unused-vars
  const handleCalendarOpen = () => {
    setCalendarOpen(true);
    // blur(true);
  };

  const handleCalendarClose = () => {
    setCalendarOpen(false);
    setCalendarStatus(false);
    // blur(false);

    chatModalState(false);
  };

  // eslint-disable-next-line no-unused-vars
  const handleClickOpen = () => {
    // blur(true);
    setOpen(true);
  };

  const handleClose = () => {
    clearInterval(ChartIntervalState);
    setOpen(false);
    setCartOpen(false);
    // blur(false);
  };

  const modalStatus = () => {
    clearInterval(ChartIntervalState);
    setOpen(false);
    // blur(false);
  };

  const handleEmojiOpen = () => {
    setEmojiOpen(!emojiOpen);
  };

  const onEmojiClick = (event, emojiObject) => {
    setnewMessage(newMessage + emojiObject.emoji);
    setChosenEmoji(emojiObject);
  };

  const tabsPanel = [
    {
      component: <TabComponentCarts modalState={modalStatus} />,
      value: "1",
    },
    {
      component: <TabComponentBidding modalState={modalStatus} />,
      value: "2",
    },
    {
      component: <TabComponentWishList modalState={modalStatus} />,
      value: "3",
    },
    {
      component: <TabComponentRecently modalState={modalStatus} />,
      value: "4",
    },
  ];

  const scroll = () => {
    return (
      // console.log('scrollRef', scrollRef.current.scrollIntoView({ behavior: 'smooth' }))
      scrollRef.current?.scrollIntoView({ behavior: "smooth" })
      // .scrollIntoView({ behavior: 'smooth' })
      // scrollRef.current?.scrollIntoView(alignToTop)
      // scrollRef.current?.scrollIntoView({beha})
    );
  };

  useEffect(() => {
    scroll();
  }, []);

  useEffect(() => {
    // chatOpen && getConversations();

    const value = queryString.parse(location.search);
    if (value && value.id) {
      setOtherProfileId(value.id);
    }
    return () => !chatOpen && clearInterval(ChartIntervalState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatOpen]);

  useEffect(() => {
    clearInterval(ChartIntervalState);
    const chatInterval =
      CurrentConversationId &&
      setInterval(() => {
        getMessages();
      }, 4000);
    setChartIntervalState(chatInterval);
    return () => clearInterval(chatInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentConversationId]);

  useEffect(() => {
    setChatOpen(modal);
    if (createChat) {
      // createChatOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  // useEffect(() => {
  //   // setChatOpen(modal)
  //   setCalendarOpen(calendarModal);
  // }, [calendarModal]);

  // useEffect(() => {
  //     console.log('calendarModal', calendarModal, modal)
  //     setCalendarOpen(calendarModal)
  //     setChatOpen(false)
  // }, [calendarModal])

  const getConversations = async () => {
    const { _id } = await parseJwt();
    setMyId(_id);
    const res = await FetchConversations();
    setConversations(res);
    setLoadingConversation(false);
    const otherUserId =
      res.length && res[0].members.filter((item) => item !== _id);
    const otherUser = otherUserId.length && (await GetUser(otherUserId[0]));
    setOtherProfile(otherUser);
    res.length && setCurrentConversationId(res[0]._id);
    res.length && getMessages(res[0]._id);
  };

  const getMessages = async (coversationId, members) => {
    if (coversationId) {
      setCurrentConversationId(coversationId);
      const res = await GetMessage(coversationId);
      res.reverse();
      setMessages(res);
      const otherUserId =
        members?.length && members.filter((item) => item !== MyId);
      const otherUser = otherUserId?.length && (await GetUser(otherUserId[0]));
      otherUser && setOtherProfile(otherUser);
    } else if (CurrentConversationId) {
      const res = await GetMessage(CurrentConversationId);
      res.reverse();
      setMessages(res);
    }
    var element = document && document.getElementById("box");
    element && element.scrollIntoView();
  };

  const sendMessage = async () => {
    if (!chatAudio && !chatImage && !newMessage) {
      return;
    }

    const file = chatImage ? chatImage : chatAudio ? chatAudio : null;

    const type = chatImage ? "image" : chatAudio ? "audio" : "text";

    const result = file && (await UploadFile(file));

    const socket = socketIOClient(baseURL);

    const newMessageObj = result?.data?.Location
      ? {
          conversationId: CurrentConversationId,
          text: newMessage,
          sender: MyId,
          receiver: OtherProfile._id,
          type: type,
          file: result.data.Location,
        }
      : {
          conversationId: CurrentConversationId,
          text: newMessage,
          sender: MyId,
          receiver: OtherProfile._id,
          type: "text",
        };
    const res = await CreateMessage(newMessageObj);
    socket.emit("new message", res.data);
    getMessages(CurrentConversationId);
    setnewMessage("");
    setchatAudio();
    setchatImage();
  };

  return (
    <>
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
            border: "3px solid #434343;",
            maxWidth: 870,
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
            top: "10px",
            right: "17px",
            zIndex: " 999999",
          }}
        />
        <DialogContent>
          <CustomTabsComponent tabs={tabs} tabsPanel={tabsPanel} />
        </DialogContent>
        <IconButton className={classes.customizedButton} onClick={handleClose}>
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>

      <Dialog
        classes={{ paper: classes.paper }}
        open={calendarOpen}
        onClose={handleCalendarClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "24px",
            backgroundColor: "#434343",
            maxWidth: 870,
            position: "relative",
          },
        }}
      >
        <CloseIcon
          onClick={handleCalendarClose}
          sx={{
            cursor: "pointer",
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "inter",
            color: "#fff",
            position: "absolute",
            top: "10px",
            right: "17px",
            zIndex: " 999999",
          }}
        />

        <DialogContent
          sx={{
            padding: 0,
            borderRadius: "24px",
            border: "3px solid #434343",
          }}
        >
          <Box>
            <CalendarComponent userId={MyId} />
          </Box>
        </DialogContent>
        <IconButton
          className={classes.customizedButton}
          onClick={handleCalendarClose}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>

      <Dialog
        className="header-scroll"
        classes={{ paper: [classes.paper1] }}
        open={chatOpen}
        maxWidth={"lg"}
        onClose={handleChatClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: 20,
            backgroundColor: "#1D1D1D",
            border: "3px solid #434343;",
          },
        }}
      >
        <IconButton
          onClick={handleChatClose}
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "3px",
            right: "8px",
            zIndex: " 999999",
          }}
        >
          <CloseIcon
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "inter",
              color: "#fff",
            }}
          />
        </IconButton>
        <DialogContent className={classes.removePaddingChat}>
          <Grid
            container
            sx={{ display: matches ? "block !important" : "flex" }}
          >
            <Grid item md={3}>
              <Box
                className={classes.leftChat}
                height={matches ? "25vh" : "90vh"}
              >
                <UserSearch />
                {loadingConversation ? (
                  <Box display="flex" justifyContent="center">
                    <CircularProgress sx={{ color: "#FF1C51" }} />
                  </Box>
                ) : (
                  <ConversationsContainer
                    getMessages={getMessages}
                    data={Conversations}
                  />
                )}
              </Box>
            </Grid>
            <Grid item md={9}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                  padding: "1em",
                }}
              >
                <Box
                  className={classes.rightChat}
                  height={matches ? "50vh !important" : "84vh"}
                >
                  <Box style={{ flex: "1" }}>
                    {Messages.length ? (
                      Messages.map((message, index, messages) => {
                        if (message.sender === MyId) {
                          return (
                            <Box>
                              {message.text && (
                                <Box
                                  Sx={{ border: "1px solid red" }}
                                  className={classes.reciverBox}
                                  key={index}
                                >
                                  <Box className={classes.messageBox}>
                                    <Box
                                      style={{
                                        display: "flex",
                                        flexDirection: "column-reverse",
                                        alignItems: "flex-end",
                                      }}
                                      className={classes.kuchBhi1}
                                    >
                                      <Typography
                                        style={{ marginRight: "10px" }}
                                        className={classes.reciverMessageTime}
                                      >
                                        {moment(message.updatedAt).fromNow()}
                                      </Typography>
                                      <Typography
                                        className={classes.reciverMessage}
                                      >
                                        {message.text}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                              )}
                              {message.type === "image" && (
                                <Box
                                  sx={{ marginBottom: "10px" }}
                                  className={classes.feedbackSpaceBottom}
                                  onClick={() => {
                                    setImageModalStatus(true);
                                    setimageUrl(message.file);
                                  }}
                                >
                                  <Box
                                    className={classes.img}
                                    sx={{ marginLeft: "651px" }}
                                  >
                                    <Typography
                                      style={{ marginRight: "10px" }}
                                      className={classes.reciverMessageTime}
                                    >
                                      {moment(message.updatedAt).fromNow()}
                                    </Typography>
                                    <img
                                      src={message.file}
                                      alt=""
                                      width="15%"
                                    />
                                  </Box>
                                </Box>
                              )}

                              {message.type === "audio" && (
                                <Box
                                  Sx={{ border: "1px solid red" }}
                                  className={classes.reciverBox}
                                  key={index}
                                  onClick={() => setSongUrl(message.file)}
                                >
                                  <Typography
                                    style={{ marginRight: "10px" }}
                                    className={classes.reciverMessageTime}
                                  >
                                    {moment(message.updatedAt).fromNow()}
                                  </Typography>
                                  <IconButton
                                    sx={{
                                      backgroundColor: "#fff",
                                      padding: 0,
                                      marginleft: "20px",
                                      float: "right",
                                    }}
                                  >
                                    <BsPlayCircle
                                      style={{
                                        color: "#FF1C51",
                                        fontSize: "40px",
                                      }}
                                    />
                                  </IconButton>
                                </Box>
                              )}
                            </Box>
                          );
                        } else {
                          return (
                            <Box>
                              {message.text && (
                                <Box key={index} className={classes.senderBox}>
                                  <Box
                                    style={{
                                      width: "52px",
                                      height: "52px",
                                      background: `url(${
                                        OtherProfile.profilePicture
                                          ? OtherProfile.profilePicture
                                          : dummyImage
                                      })`,
                                      backgroundSize: "cover",
                                      backgroundPosition: "center center",
                                      backgroundRepeat: "no-repeat",
                                      borderRadius: "100%",
                                    }}
                                    className={classes.senderBoxImage}
                                  ></Box>
                                  <Box className={classes.messageBox}>
                                    <Typography className={classes.senderName}>
                                      {OtherProfile.name}
                                    </Typography>
                                    <Box
                                      style={{
                                        display: "flex",
                                        flexDirection: "column-reverse",
                                        alignItems: "flex-end",
                                      }}
                                      className={classes.kuchBhi2}
                                    >
                                      <Typography
                                        className={classes.senderMessage}
                                      >
                                        {message.text}
                                      </Typography>
                                      <Typography
                                        className={classes.senderMessageTime}
                                      >
                                        {moment(message.updatedAt).fromNow()}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                              )}

                              <Box key={index} className={classes.senderBox}>
                                <Box
                                  style={{
                                    width: "52px",
                                    height: "52px",
                                    background: `url(${
                                      OtherProfile.profilePicture
                                        ? OtherProfile.profilePicture
                                        : dummyImage
                                    })`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: "no-repeat",
                                    borderRadius: "100%",
                                  }}
                                  className={classes.senderBoxImage}
                                ></Box>
                                <Box className={classes.messageBox}>
                                  <Typography className={classes.senderName}>
                                    {OtherProfile.name}
                                  </Typography>

                                  {message.type === "image" && (
                                    <Box
                                      sx={{ marginBottom: "10px" }}
                                      className={classes.feedbackSpaceBottom}
                                      onClick={() => {
                                        setImageModalStatus(true);
                                        setimageUrl(message.file);
                                      }}
                                    >
                                      <Box className={classes.img}>
                                        <img
                                          src={message.file}
                                          alt=""
                                          width="15%"
                                        />
                                        <Typography
                                          style={{ marginRight: "10px" }}
                                          className={classes.senderMessageTime}
                                        >
                                          {moment(message.updatedAt).fromNow()}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  )}

                                  {message.type === "audio" && (
                                    <Box
                                      onClick={() => setSongUrl(message.file)}
                                      className={classes.songSection}
                                    >
                                      <IconButton
                                        sx={{
                                          backgroundColor: "#fff",
                                          padding: 0,
                                        }}
                                      >
                                        <BsPlayCircle
                                          style={{
                                            color: "#FF1C51",
                                            fontSize: "40px",
                                          }}
                                        />
                                      </IconButton>
                                      <Typography className={classes.songSize}>
                                        <Typography
                                          style={{ marginLeft: "10px" }}
                                          className={classes.senderMessageTime}
                                        >
                                          {moment(message.updatedAt).fromNow()}
                                        </Typography>
                                      </Typography>
                                    </Box>
                                  )}
                                </Box>
                              </Box>
                            </Box>
                          );
                        }
                      })
                    ) : (
                      <Typography className={classes.senderMessage}>
                        Start your chat!
                      </Typography>
                    )}
                    <Box id="box"></Box>
                  </Box>
                </Box>
                <Box>
                  {chatImage && (
                    <Box
                      sx={{ marginBottom: "10px" }}
                      className={classes.feedbackSpaceBottom}
                    >
                      <Box className={classes.img}>
                        <img
                          src={URL.createObjectURL(chatImage)}
                          alt=""
                          width="15%"
                        />
                      </Box>
                    </Box>
                  )}

                  {chatAudio && (
                    <Box
                      sx={{ marginTop: "60px" }}
                      className={classes.songSection}
                    >
                      <Box className={classes.songLinkSection}>
                        <HiLink className={classes.linkIcon} />
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        marginRight={"20px"}
                      >
                        <Typography className={classes.songName}>
                          {chatAudio?.name}
                        </Typography>
                        <Typography className={classes.songSize}>
                          {Math.round(
                            Number(chatAudio?.size) / (1024 * 1024).toFixed(2)
                          )}
                          mb
                        </Typography>
                      </Box>
                      <IconButton
                        onClick={() => {
                          setSongUrl &&
                            setSongUrl(URL.createObjectURL(chatAudio));
                          setSongDetails &&
                            setSongDetails({
                              title: chatAudio?.name,
                              thumbnail: OtherProfile.profilePicture
                                ? OtherProfile.profilePicture
                                : dummyImage,
                              artist: OtherProfile.name,
                              isPurchased: true,
                            });
                        }}
                        sx={{
                          backgroundColor: "#fff",
                          padding: 0,
                        }}
                      >
                        <BsPlayCircle
                          style={{ color: "#FF1C51", fontSize: "40px" }}
                        />
                      </IconButton>
                    </Box>
                  )}
                </Box>
                <Box className={classes.messageSendTextFieldBox}>
                  <Box className={classes.messageTextFieldBox}>
                    <ChatTextField
                      className={classes.newsLetterInput}
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={newMessage}
                      onKeyPress={(e) => e.code === "Enter" && sendMessage()}
                      onClick={() => {
                        emojiOpen && handleEmojiOpen(false);
                      }}
                      onChange={(e) => setnewMessage(e.target.value)}
                      sx={{
                        input: {
                          height: "50px",
                          paddingLeft: "0.1em !important",
                          paddingRight: "0.1em !important",
                        },
                      }}
                      InputProps={{
                        classes: {
                          input: classes.multilineColor,
                        },
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ cursor: "pointer" }}
                            onClick={handleEmojiOpen}
                          >
                            <BsEmojiSmile />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <AttachFileIcon
                                sx={{ color: "#fff", cursor: "pointer" }}
                              />
                              <input
                                type="file"
                                style={{
                                  position: "absolute",
                                  width: "100%",
                                  opacity: 0,
                                }}
                                accept="image/*,audio/*"
                                onChange={handleUploadFile}
                              />
                            </IconButton>
                            {/* <AttachFileIcon><input type="file" hidden style={{ position: 'relative' }} /></AttachFileIcon> */}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box className={classes.messageSendBox}>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={sendMessage}
                    >
                      <SendIcon sx={{ color: "#FF1C51" }} />
                    </IconButton>
                  </Box>
                </Box>
                {emojiOpen ? (
                  <Picker
                    onEmojiClick={onEmojiClick}
                    ref={emojiPicker}
                    pickerStyle={{ width: "100%", marginTop: "5px" }}
                  ></Picker>
                ) : null}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <IconButton
          className={classes.customizedButton}
          onClick={handleChatClose}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>

      <ImageModal
        ImageModalStatus={ImageModalStatus}
        setImageModalStatus={setImageModalStatus}
        imageUrl={imageUrl}
      />
    </>
  );
};

export default ChatComponent;
