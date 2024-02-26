import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ArrowDownIcon from "../../../../assets/ArrowDownIcon.svg";

export const NotificationTab = () => {
  const [notifications, setNotifications] = useState({
    pauseAll: false,
  });

  const [postsAndComments, setPostsAndComments] = useState({
    isPostsAndCommentsOpen: false,
    likes: "Off",
    comments: "Off",
    commentsWithMention: "Off",
    commentsLikes: "Off",
  });

  const [supportersAndSupporting, setSupportersAndSupporting] = useState({
    isSupportersAndSupportingOpen: false,
    newSupporter: "Off",
    acceptedSupportRequests: "Off",
    accountSuggestions: "Off",
  });

  const [messages, setMessages] = useState({
    isMessagesOpen: false,
    messageRequests: "Off",
    message: "Off",
  });

  const [liveStream, setLiveStream] = useState({
    isLiveStreamOpen: false,
    liveVideos: "Off",
    recentlyRecordedVideos: "Off",
    mostWatchedVideos: "Off",
  });

  const [fromFinay, setFromFinay] = useState({
    isFromFinayOpen: false,
    reminders: "Off",
    productAnnouncementsAndFeedback: "Off",
    supportRequests: "Off",
    unrecognizedLogins: "Off",
  });

  console.log("fromFinay: ", fromFinay);

  const handlePauseAllChange = (prop) => (event) =>
    setNotifications({ ...notifications, [prop]: event.target.checked });

  const togglePostsAndCommentsTab = () =>
    setPostsAndComments({
      ...postsAndComments,
      isPostsAndCommentsOpen: !postsAndComments?.isPostsAndCommentsOpen,
    });

  const handlePostsAndCommentsChange = (prop) => (event) =>
    setPostsAndComments({ ...postsAndComments, [prop]: event.target.value });

  const toggleSupportersAndSupportingTab = () =>
    setSupportersAndSupporting({
      ...supportersAndSupporting,
      isSupportersAndSupportingOpen:
        !supportersAndSupporting?.isSupportersAndSupportingOpen,
    });

  const handleSupportersAndSupportingChange = (prop) => (event) =>
    setSupportersAndSupporting({
      ...supportersAndSupporting,
      [prop]: event.target.value,
    });

  const toggleMessagesTab = () =>
    setMessages({
      ...messages,
      isMessagesOpen: !messages?.isMessagesOpen,
    });

  const handleMessagesChange = (prop) => (event) =>
    setMessages({
      ...messages,
      [prop]: event.target.value,
    });

  const toggleLiveStreamTab = () =>
    setLiveStream({
      ...liveStream,
      isLiveStreamOpen: !liveStream?.isLiveStreamOpen,
    });

  const handleLiveStreamChange = (prop) => (event) =>
    setLiveStream({
      ...liveStream,
      [prop]: event.target.value,
    });

  const toggleFromFinayTab = () =>
    setFromFinay({
      ...fromFinay,
      isFromFinayOpen: !fromFinay?.isFromFinayOpen,
    });

  const handleFromFinayChange = (prop) => (event) =>
    setFromFinay({
      ...fromFinay,
      [prop]: event.target.value,
    });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "521px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "140%",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "32px",
        }}
      >
        Notification
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "140%",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "20px",
        }}
      >
        Push notifications
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "20px",
        }}
      >
        <Checkbox
          checked={notifications?.pauseAll}
          onChange={handlePauseAllChange("pauseAll")}
          sx={{
            "&.MuiCheckbox-root .MuiSvgIcon-root": {
              color: "#FF8200",
            },
            "&": {
              padding: "0",
              marginRight: "8px",
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "140%",
            color: "#fff",
            letterSpacing: "0.2px",
          }}
        >
          Pause All
        </Typography>
      </Box>
      {/** Posts and Comments */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: postsAndComments?.isPostsAndCommentsOpen
            ? { xs: "800px" }
            : "68px",
        }}
      >
        <Box
          onClick={() => togglePostsAndCommentsTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Posts and Comments
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                postsAndComments?.isPostsAndCommentsOpen
                  ? "rotateX(-180deg)"
                  : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        {/** Likes */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
              marginBottom: "16px",
            }}
          >
            Likes
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              value="Off"
              checked={postsAndComments?.likes === "Off"}
              onChange={handlePostsAndCommentsChange("likes")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              Off
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              value="From People I support"
              checked={postsAndComments?.likes === "From People I support"}
              onChange={handlePostsAndCommentsChange("likes")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              From People I support
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              value="From Everyone"
              checked={postsAndComments?.likes === "From Everyone"}
              onChange={handlePostsAndCommentsChange("likes")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              From Everyone
            </Typography>
          </Box>
        </Box>
        {/** Comments */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
              marginBottom: "16px",
            }}
          >
            Comments
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              value="Off"
              checked={postsAndComments?.comments === "Off"}
              onChange={handlePostsAndCommentsChange("comments")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              Off
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              value="From People I support"
              checked={postsAndComments?.comments === "From People I support"}
              onChange={handlePostsAndCommentsChange("comments")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              From People I support
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              value="From Everyone"
              checked={postsAndComments?.comments === "From Everyone"}
              onChange={handlePostsAndCommentsChange("comments")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              From Everyone
            </Typography>
          </Box>
        </Box>
        {/** Comments with mention */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
              marginBottom: "16px",
            }}
          >
            Comments with mention
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              value="Off"
              checked={postsAndComments?.commentsWithMention === "Off"}
              onChange={handlePostsAndCommentsChange("commentsWithMention")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              Off
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              value="From People I support"
              checked={
                postsAndComments?.commentsWithMention ===
                "From People I support"
              }
              onChange={handlePostsAndCommentsChange("commentsWithMention")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              From People I support
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              value="From Everyone"
              checked={
                postsAndComments?.commentsWithMention === "From Everyone"
              }
              onChange={handlePostsAndCommentsChange("commentsWithMention")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              From Everyone
            </Typography>
          </Box>
        </Box>
        {/** Comments Likes */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
              marginBottom: "16px",
            }}
          >
            Comments Likes
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              value="Off"
              checked={postsAndComments?.commentsLikes === "Off"}
              onChange={handlePostsAndCommentsChange("commentsLikes")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              Off
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              value="From People I support"
              checked={
                postsAndComments?.commentsLikes === "From People I support"
              }
              onChange={handlePostsAndCommentsChange("commentsLikes")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              From People I support
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              value="From Everyone"
              checked={postsAndComments?.commentsLikes === "From Everyone"}
              onChange={handlePostsAndCommentsChange("commentsLikes")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                  transition: "all 250ms ease",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.2px",
              }}
            >
              From Everyone
            </Typography>
          </Box>
        </Box>
      </Box>
      {/** Supporters and Supporting */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: supportersAndSupporting?.isSupportersAndSupportingOpen
            ? { xs: "525px", sm: "510px" }
            : "68px",
        }}
      >
        <Box
          onClick={() => toggleSupportersAndSupportingTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Supporters and Supporting
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                supportersAndSupporting?.isSupportersAndSupportingOpen
                  ? "rotateX(-180deg)"
                  : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <FormControl
          sx={{ marginTop: "20px", marginBottom: "24px" }}
          component="fieldset"
        >
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            New Supporter
          </FormLabel>
          <RadioGroup
            aria-label="newSupporter"
            name="newSupporter1"
            value={supportersAndSupporting?.newSupporter}
            onChange={handleSupportersAndSupportingChange("newSupporter")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "24px" }} component="fieldset">
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Accepted Support Requests
          </FormLabel>
          <RadioGroup
            aria-label="acceptedSupportRequests"
            name="acceptedSupportRequests1"
            value={supportersAndSupporting?.acceptedSupportRequests}
            onChange={handleSupportersAndSupportingChange(
              "acceptedSupportRequests"
            )}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "24px" }} component="fieldset">
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Account Suggestions
          </FormLabel>
          <RadioGroup
            aria-label="accountSuggestions"
            name="accountSuggestions1"
            value={supportersAndSupporting?.accountSuggestions}
            onChange={handleSupportersAndSupportingChange("accountSuggestions")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {/** Messages */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: messages?.isMessagesOpen ? { xs: "365px" } : "68px",
        }}
      >
        <Box
          onClick={() => toggleMessagesTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Messages
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                messages?.isMessagesOpen ? "rotateX(-180deg)" : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <FormControl
          sx={{ marginTop: "20px", marginBottom: "24px" }}
          component="fieldset"
        >
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Message Requests
          </FormLabel>
          <RadioGroup
            aria-label="messageRequests"
            name="messageRequests1"
            value={messages?.messageRequests}
            onChange={handleMessagesChange("messageRequests")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "24px" }} component="fieldset">
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Message
          </FormLabel>
          <RadioGroup
            aria-label="message"
            name="message1"
            value={messages?.message}
            onChange={handleMessagesChange("message")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {/** Live Stream */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: liveStream?.isLiveStreamOpen ? { xs: "510px" } : "68px",
        }}
      >
        <Box
          onClick={() => toggleLiveStreamTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Live Stream
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                liveStream?.isLiveStreamOpen
                  ? "rotateX(-180deg)"
                  : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <FormControl
          sx={{ marginTop: "20px", marginBottom: "24px" }}
          component="fieldset"
        >
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Live Videos
          </FormLabel>
          <RadioGroup
            aria-label="liveVideos"
            name="liveVideos1"
            value={liveStream?.liveVideos}
            onChange={handleLiveStreamChange("liveVideos")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "24px" }} component="fieldset">
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Recently Recorded Videos
          </FormLabel>
          <RadioGroup
            aria-label="recentlyRecordedVideos"
            name="recentlyRecordedVideos1"
            value={liveStream?.recentlyRecordedVideos}
            onChange={handleLiveStreamChange("recentlyRecordedVideos")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "24px" }} component="fieldset">
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Most watched Videos
          </FormLabel>
          <RadioGroup
            aria-label="mostWatchedVideos"
            name="mostWatchedVideos1"
            value={liveStream?.mostWatchedVideos}
            onChange={handleLiveStreamChange("mostWatchedVideos")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {/** From Finay */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: fromFinay?.isFromFinayOpen
            ? { xs: "675px", sm: "655px" }
            : "68px",
        }}
      >
        <Box
          onClick={() => toggleFromFinayTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            From Finay
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                fromFinay?.isFromFinayOpen
                  ? "rotateX(-180deg)"
                  : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <FormControl
          sx={{ marginTop: "20px", marginBottom: "24px" }}
          component="fieldset"
        >
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Reminders
          </FormLabel>
          <RadioGroup
            aria-label="reminders"
            name="reminders1"
            value={fromFinay?.reminders}
            onChange={handleFromFinayChange("reminders")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "24px" }} component="fieldset">
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Product Announcements and Feedback
          </FormLabel>
          <RadioGroup
            aria-label="productAnnouncementsAndFeedback"
            name="productAnnouncementsAndFeedback1"
            value={fromFinay?.productAnnouncementsAndFeedback}
            onChange={handleFromFinayChange("productAnnouncementsAndFeedback")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "24px" }} component="fieldset">
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Support Requests
          </FormLabel>
          <RadioGroup
            aria-label="supportRequests"
            name="supportRequests1"
            value={fromFinay?.supportRequests}
            onChange={handleFromFinayChange("supportRequests")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: "24px" }} component="fieldset">
          <FormLabel
            sx={{
              "&": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
              },
              "&.Mui-focused": {
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "18px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
            }}
            component="legend"
          >
            Unrecognized Logins
          </FormLabel>
          <RadioGroup
            aria-label="unrecognizedLogins"
            name="unrecognizedLogins1"
            value={fromFinay?.unrecognizedLogins}
            onChange={handleFromFinayChange("unrecognizedLogins")}
          >
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="Off"
              control={<Radio />}
              label="Off"
            />
            <FormControlLabel
              sx={{
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                color: "#fff !important",
                letterSpacing: "0.2px !important",
                marginBottom: "16px !important",
                "& .PrivateSwitchBase-root": {
                  padding: "0 9px !important",
                  color: "#FF8200",
                },
              }}
              value="On"
              control={<Radio />}
              label="On"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
