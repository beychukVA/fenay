import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LiveStreamingImg from "../../../assets/LiveStreamingImg.jpg";
import CameraRotateIcon from "../../../assets/CameraRotateIcon.svg";
import GoLiveIcon from "../../../assets/GoLiveIcon.svg";
import ViewersIcon from "../../../assets/ViewersIcon.svg";
import CommentsIcon from "../../../assets/CommentsIcon.svg";
import ReactionIcon from "../../../assets/ReactionIcon.svg";
import ShareArrowIcon from "../../../assets/ShareArrowIcon.svg";
import MessagesIcon from "../../../assets/MessagesIcon.svg";
import UserExampleIcon from "../../../assets/UserExampleIcon.svg";
import { CommentCard } from "./CommentCard";

export const LiveStreaming = ({
  event,
  setLiveStreaming,
  setCurrentAsset,
  setLiveStreamingResult,
  setShowLiveStreamingResult,
  setAssetsFilter,
}) => {
  const [isSreamingStarted, setSreamingStarted] = useState(false);

  //for testing
  const streameResult = {
    img: LiveStreamingImg,
    stream_title: "Diam aliquet nunc.",
    streamer: "Yolotli Bailey",
    viewers: 0,
    reaction: 0,
    comments: [
      {
        id: 1,
        user_icon: UserExampleIcon,
        user_name: "Mike Mazowski",
        comment:
          "Hello guys, we have discussed about post-corona vacation plan and our decision.",
      },
      {
        id: 2,
        user_icon: UserExampleIcon,
        user_name: "Mike Mazowski",
        comment: "😅 😂 🤣 hahahahha",
      },
      {
        id: 3,
        user_icon: UserExampleIcon,
        user_name: "Evan husky",
        comment:
          "Hello guys, we have discussed about post-corona vacation plan and our decision.",
      },
      {
        id: 4,
        user_icon: UserExampleIcon,
        user_name: "Nitesh yadav",
        comment: "😅 😂 🤣 Are you alright?",
      },
      {
        id: 1,
        user_icon: UserExampleIcon,
        user_name: "Mike Mazowski",
        comment:
          "Hello guys, we have discussed about post-corona vacation plan and our decision.",
      },
      {
        id: 2,
        user_icon: UserExampleIcon,
        user_name: "Mike Mazowski",
        comment: "😅 😂 🤣 hahahahha",
      },
      {
        id: 3,
        user_icon: UserExampleIcon,
        user_name: "Evan husky",
        comment:
          "Hello guys, we have discussed about post-corona vacation plan and our decision.",
      },
      {
        id: 4,
        user_icon: UserExampleIcon,
        user_name: "Nitesh yadav",
        comment: "😅 😂 🤣 Are you alright?",
      },
    ],
    shares: 0,
    peak_concurrents: "54K",
    views: "243K",
    total_watch_time: "3:58:04",
    chat_rate: 25,
    avg_view_duration: "5:04",
    duration: "58:04",
  };

  const handleFinishStream = () => {
    setLiveStreaming(false);
    setCurrentAsset(null);
    setAssetsFilter("All assets");
    setLiveStreamingResult(streameResult);
    setShowLiveStreamingResult(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "140%",
          letterSpacing: "0.2px",
          color: "#fff",
          marginBottom: "16px",
        }}
      >
        Live streaming
      </Typography>
      <Box sx={{ position: "relative", zIndex: "0", marginBottom: "24px" }}>
        <img
          src={LiveStreamingImg}
          alt="Live streaming"
          style={{
            borderRadius: "8px",
            width: "100%",
            maxWidth: "1004px",
            height: "100%",
            maxHeight: "454px",
            zIndex: "1",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: { xs: "5px", sm: "27px" },
            left: { xs: "5px", sm: "38px" },
            zIndex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              background: "#EA3B56",
              borderRadius: "30px 0px 0px 30px",
              padding: { xs: "3px 6px", sm: "14px 25px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: { xs: "7px", sm: "12px" },
                lineHeight: "14px",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              LIVE
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#1F222A",
              borderRadius: "0px 30px 30px 0px",
              padding: { xs: "3px 6px", sm: "14px 25px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "12px",
                lineHeight: "14px",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              0:05
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "5px", sm: "24px" },
            right: { xs: "5px", sm: "34px" },
            zIndex: "2",
            width: "32px",
            height: "32px",
            WebkitMask: `url(${CameraRotateIcon}) center center / 32px 32px no-repeat`,
            mask: `url(${CameraRotateIcon}) center center / 32px 32px no-repeat`,
            backgroundSize: "cover",
            background: "#fff",
            cursor: "pointer",
            transition: "all 250ms ease",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.5)",
              transform: "rotateY(380deg)",
            },
          }}
        />
        {/** This button is for testing the modal window about the end of the stream */}
        {isSreamingStarted && (
          <Button
            onClick={() => handleFinishStream()}
            sx={{
              position: "absolute",
              right: "24px",
              bottom: "24px",
              padding: { xs: "2px 10px", sm: "10px" },
              borderRadius: "40px",
              background: "#EA3B56",
              transition: "all 250ms ease",
              "&: hover": {
                background: "rgba(234, 59, 86, 0.8)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: { xs: "10px", sm: "17px" },
                lineHeight: "20px",
                color: "#fff",
                textTransform: "none",
              }}
            >
              Finish Stream
            </Typography>
          </Button>
        )}
        {!isSreamingStarted && (
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "3",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(snnjd.png)",
              backdropFilter: "blur(2px)",
              borderRadius: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: { xs: "16px", sm: "20px" },
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: { xs: "10px", sm: "24px" },
              }}
            >
              Rotate to stream in landscape
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: { xs: "28px", sm: "32px" },
                lineHeight: "28px",
                color: "#fff",
              }}
            >
              Stream set for
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: { xs: "16px", sm: "20px" },
                lineHeight: "28px",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: { xs: "12px", sm: "48px" },
              }}
            >
              {event?.date}
            </Typography>
            <Button
              onClick={() => setSreamingStarted(true)}
              sx={{
                padding: { xs: "5px 40px", sm: "19px 145px" },
                borderRadius: "40px",
                background: "#FF8200",
                transition: "all 250ms ease",
                "&: hover": {
                  background: "rgba(255, 130, 0, 0.8)",
                },
              }}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  background: `url(${GoLiveIcon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  marginRight: "4px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "17px",
                  lineHeight: "20px",
                  color: "#000",
                  textTransform: "none",
                }}
              >
                Go Live
              </Typography>
            </Button>
          </Box>
        )}
      </Box>
      {/**Stats */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            background: "#2A2B2F",
            borderRadius: "8px",
            padding: { xs: "24px 24px 32px 24px", sm: "24px 69px 32px 24px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Insights
          </Typography>
          {/** Views, Comments */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              marginBottom: "33px",
            }}
          >
            {/** Views */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  background: `url(${ViewersIcon})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginRight: "12px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  {streameResult?.viewers}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#fff",
                  }}
                >
                  Viewers
                </Typography>
              </Box>
            </Box>
            {/** Comments */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: { xs: "62px", sm: "124px" },
              }}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  background: `url(${CommentsIcon})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginRight: "12px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  {streameResult?.comments?.length}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#fff",
                  }}
                >
                  Comments
                </Typography>
              </Box>
            </Box>
          </Box>
          {/** Reaction, Shares */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            {/** Reaction */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  background: `url(${ReactionIcon})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginRight: "12px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  {streameResult?.reaction}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#fff",
                  }}
                >
                  Reaction
                </Typography>
              </Box>
            </Box>
            {/** Share */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: { xs: "62px", sm: "124px" },
              }}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  background: `url(${ShareArrowIcon})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginRight: "12px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  {streameResult?.shares}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#fff",
                  }}
                >
                  Shares
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/** Comments Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            background: "#2A2B2F",
            borderRadius: "8px",
            width: "100%",
            maxWidth: "556px",
            minHeight: "428px",
            maxHeight: "828px",
            padding: { xs: "24px 24px 32px 24px", sm: "24px 69px 32px 24px" },
            marginLeft: { xs: "0", md: "11px" },
            marginTop: { xs: "11px", md: "0" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#fff",
            }}
          >
            Comments
          </Typography>
          {streameResult?.comments.length > 0 ? (
            <Box
              sx={{
                width: "100%",
                height: "400px",
                marginTop: "24px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  height: "100%",
                  overflow: "auto",
                  paddingRight: "5px",
                }}
              >
                {streameResult?.comments.map((comment) => (
                  <CommentCard key={comment?.id} comment={comment} />
                ))}
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                marginTop: "32px",
              }}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  background: `url(${MessagesIcon})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  marginBottom: "12px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#fff",
                  marginBottom: "13px",
                }}
              >
                No comments yet
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "rgba(255, 255, 255, 0.75)",
                  maxWidth: "332px",
                }}
              >
                Comments will appear after the people will join the live.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
