import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  IconButton,
  InputAdornment,
  FormControl,
  Typography,
  List,
  ListItem,
  ListItemText,
  InputBase,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { FaShopify } from "react-icons/fa";
import { useStyles } from "../../constant/customStyle";
import CloseIcon from "@mui/icons-material/Close";
import TabComponentCarts from "../../tabsCompoent/TabComponentCarts";
import TabComponentBidding from "../../tabsCompoent/TabComponentBidding";
import TabComponentWishList from "../../tabsCompoent/TabComponentWishList";
import TabComponentRecently from "../../tabsCompoent/TabComponentRecently";
import chatImage from "../../assets/chat-image-user.jpg";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Sender from "../../assets/sender.png";
import CustomTabsComponent from "../../component/Tabs";
import { ChatTextField } from "../../component/Textfield/ChatTextField";
import { Email, Lock } from "@mui/icons-material";
import { BsEmojiSmile } from "react-icons/bs";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Picker from "emoji-picker-react";
import SendIcon from "@mui/icons-material/Send";
import Shopify from "../../assets/icon-shopify.svg";
import CalendarComponent from "../Calendar";
import { GiShoppingBag } from "@react-icons/all-files/gi/GiShoppingBag";
import messicon from "../../assets/messicon.svg";
import {
  FetchConversations,
  FetchExistingConversation,
  CreateConversation,
  GetMessage,
  CreateMessage,
} from "../../Services/Chat";
import { GetUser } from "../../Services/User";
import queryString from "query-string";
import { useLocation } from "react-router";
import { parseJwt } from "../../helpers/getId";
import { get_time_diff } from "../../helpers/timeDiff";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: "rgba(255,255,255,0.12)",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginBottom: "10px",
  color: "rgba(255,255,255,0.50)",
  border: "1px solid #fff",
  fontFamily: "poppins !important",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    padding: "20px 10px 20px 20px",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const tabs = [
  {
    name: "Cart",
    value: "1",
  },
  {
    name: "Bidding",
    value: "2",
  },
  {
    name: "Wishlist",
    value: "3",
  },
  {
    name: "Recently Purchased",
    value: "4",
  },
];

const ChatComponent = ({
  blur = false,
  modal,
  calendarModal,
  chatModalState,
  createChat,
}) => {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [Conversations, setConversations] = useState([]);
  const [CurrentConversationId, setCurrentConversationId] = useState("");
  const [Messages, setMessages] = useState([]);
  const [OtherProfileId, setOtherProfileId] = useState("");
  const [OtherProfile, setOtherProfile] = useState({});
  const [MyId, setMyId] = useState("");
  const [newMessage, setnewMessage] = useState("");
  const [ChartIntervalState, setChartIntervalState] = useState();

  const handleChatOpen = async () => {
    blur(true);
    setChatOpen(true);
  };

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
    blur(false);
    chatModalState(false);
  };

  const handleCalendarOpen = () => {
    setCalendarOpen(true);
    blur(true);
  };

  const handleCalendarClose = () => {
    setCalendarOpen(false);
    blur(false);
    chatModalState(false);
  };

  const handleClickOpen = () => {
    blur(true);
    setOpen(true);
  };

  const handleClose = () => {
    clearInterval(ChartIntervalState);
    setOpen(false);
    blur(false);
  };

  const modalStatus = () => {
    clearInterval(ChartIntervalState);
    setOpen(false);
    blur(false);
  };

  const handleEmojiOpen = () => {
    setEmojiOpen(!emojiOpen);
  };

  const onEmojiClick = (event, emojiObject) => {
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

  useEffect(() => {
    chatOpen && getConversations();

    const value = queryString.parse(location.search);
    if (value && value.id) {
      setOtherProfileId(value.id);
    }
    return () => !chatOpen && clearInterval(ChartIntervalState);
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
  }, [CurrentConversationId]);

  useEffect(() => {
    setChatOpen(modal);
    if (createChat) {
      createChatOpen();
    }
  }, [modal]);

  useEffect(() => {
    // setChatOpen(modal)
    setCalendarOpen(calendarModal);
  }, [calendarModal]);

  // useEffect(() => {
  //     setCalendarOpen(calendarModal)
  //     setChatOpen(false)
  // }, [calendarModal])

  const getConversations = async () => {
    const { _id } = await parseJwt();
    setMyId(_id);
    const res = await FetchConversations();
    setConversations(res);
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
    if (newMessage) {
      const newMessageObj = {
        conversationId: CurrentConversationId,
        text: newMessage,
        sender: MyId,
        receiver: OtherProfile._id,
      };
      const res = await CreateMessage(newMessageObj);
      getMessages(CurrentConversationId);
      setnewMessage("");
    }
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className={classes.quickLinks1} onClick={handleChatOpen}>
          <img src={messicon} className={classes.img} />
        </Box>
        {/* <MessageIcon onClick={handleChatOpen} className={classes.quickLinks} /> */}
        <DateRangeIcon
          className={classes.quickLinks}
          onClick={handleCalendarOpen}
        />
        {/* <GiShoppingBag className={classes.quickLinks}  onClick={handleClickOpen}  /> */}
        <Box className={classes.quickLinks} onClick={handleClickOpen}>
          <img src={Shopify} className={classes.img} />
        </Box>
      </Box>
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
          },
        }}
      >
        <DialogContent
          sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
        >
          <Box>
            <CalendarComponent />
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
        <DialogContent className={classes.removePaddingChat}>
          <Box className={classes.leftChat}>
            <Box sx={{ padding: "10px 10px" }}>
              <Search sx={{ border: "1px solid #FFFFFF 0.5" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: "#FFFFFF , 0.1 " }} />
                  </SearchIconWrapper>
                </Box>
                <StyledInputBase
                  placeholder="Search.."
                  inputProps={{ "aria-label": "search" }}
                  sx={{ paddingLeft: 0, color: "#FFFFFF, 0.5" }}
                />
              </Search>
            </Box>
            {Conversations.map((item, index) => (
              <Box
                className={classes.chatUserSection}
                onClick={() => getMessages(item._id, item.members)}
              >
                <Box className={classes.imgBox}>
                  <img
                    src={
                      item.user_data.profilePicture
                        ? item.user_data.profilePicture
                        : dummyImage
                    }
                    alt={""}
                    className={classes.chatImg}
                    width="64px"
                    height="64px"
                  />
                </Box>
                <Box className={classes.chatFlex}>
                  <Box className={classes.parentChat}>
                    <Typography className={classes.chatUserName}>
                      {item.user_data.name}
                    </Typography>
                    <Typography className={classes.chatUserTime}>
                      {get_time_diff(item.updatedAt)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box className={classes.rightChat}>
            <Box>
              {Messages.length ? (
                Messages.map((message, index, messages) => {
                  return message.sender == MyId ? (
                    <Box
                      Sx={{ border: "1px solid red", width: "1000px" }}
                      className={classes.reciverBox}
                    >
                      <Box className={classes.messageBox}>
                        <Box className={classes.kuchBhi1}>
                          <Typography className={classes.reciverMessageTime}>
                            12:31
                          </Typography>
                          <Typography className={classes.reciverMessage}>
                            {message.text}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Box className={classes.senderBox}>
                      <Box className={classes.senderBoxImage}>
                        <img
                          src={
                            OtherProfile.profilePicture
                              ? OtherProfile.profilePicture
                              : dummyImage
                          }
                          alt={""}
                          className={classes.senderImage}
                        />
                      </Box>
                      <Box className={classes.messageBox}>
                        <Typography className={classes.senderName}>
                          {OtherProfile.name}
                        </Typography>
                        <Box className={classes.kuchBhi2}>
                          <Typography className={classes.senderMessage}>
                            {message.text}
                          </Typography>
                          <Typography className={classes.senderMessageTime}>
                            12:31
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Typography className={classes.senderMessage}>
                  Start your chat!
                </Typography>
              )}
              <Box id="box"></Box>
            </Box>

            <Box className={classes.messageSendTextFieldBox}>
              <Box className={classes.messageTextFieldBox}>
                <ChatTextField
                  className={classes.newsLetterInput}
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={newMessage}
                  onChange={(e) => setnewMessage(e.target.value)}
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
                pickerStyle={{ width: "100%", marginTop: "5px" }}
              ></Picker>
            ) : null}
          </Box>
        </DialogContent>
        <IconButton
          className={classes.customizedButton}
          onClick={handleChatClose}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>
    </>
  );
};

export default ChatComponent;
