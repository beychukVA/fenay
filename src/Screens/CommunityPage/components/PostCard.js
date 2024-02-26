import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { get_time_diff } from "../../../helpers/timeDiff";
import ReadingListIcon from "../../../assets/ReadingListIcon.svg";
import LikeIcon from "../../../assets/LikeIcon.svg";
import CommentIcon from "../../../assets/CommentIcon.svg";
import ShareIcon from "../../../assets/ShareIcon.svg";
import { CommentCard } from "./CommentCard";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

export const PostCard = ({ post }) => {
  // eslint-disable-next-line no-unused-vars
  const [ProfilePicPrev, setProfilePicPrev] = useState(
    "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png"
  );
  const [showMoreComments, setShowMoreComments] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        maxHeight: "850px",
        background: "rgba(245, 245, 245, 0.05)",
        border: "1px solid #2A2B2F",
        borderRadius: "16px",
        padding: "32px 32px 33px 32px",
        marginBottom: "32px",
      }}
    >
      {/**Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "26px",
        }}
      >
        {/** User */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={post?.user?.icon}
            alt={post?.user?.name}
            style={{
              width: "40px",
              height: "40px",
              minWidth: "40px",
              minHeight: "40px",
              marginRight: "8px",
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
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "18px",
                color: "#fff",
                marginBottom: "6px",
              }}
            >
              {post?.user?.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "18px",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              {get_time_diff(post?.createdAt)}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "20px",
            height: "20px",
            WebkitMask: `url(${ReadingListIcon}) center center / 20px 20px no-repeat`,
            mask: `url(${ReadingListIcon}) center center / 20px 20px no-repeat`,
            backgroundSize: "cover",
            background: "#fff",
            cursor: "pointer",
            transition: "all 250ms ease",
            "&:hover": {
              background: "rgba(255, 130, 0, 1)",
            },
          }}
        />
      </Box>
      {/** Desc */}
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "19px",
          letterSpacing: "0.2px",
          color: "rgba(255, 255, 255, 0.9)",
          marginBottom: "24px",
        }}
      >
        {post?.desc}
      </Typography>
      {/** Stats */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          paddingBottom: "24px",
          marginBottom: showMoreComments ? "14px" : "47px",
          borderBottom: "1px solid #2A2B2F",
        }}
      >
        {/** Likes */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginRight: "24px",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              WebkitMask: `url(${LikeIcon}) center center / 20px 20px no-repeat`,
              mask: `url(${LikeIcon}) center center / 20px 20px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              cursor: "pointer",
              transition: "all 250ms ease",
              "&:hover": {
                background: "rgba(255, 130, 0, 1)",
              },
              marginRight: "8px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.2px",
              color: "#fff",
            }}
          >
            {post?.likes}
          </Typography>
        </Box>
        {/** Comments */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginRight: "24px",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              WebkitMask: `url(${CommentIcon}) center center / 20px 20px no-repeat`,
              mask: `url(${CommentIcon}) center center / 20px 20px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              cursor: "pointer",
              transition: "all 250ms ease",
              "&:hover": {
                background: "rgba(255, 130, 0, 1)",
              },
              marginRight: "8px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.2px",
              color: "#fff",
            }}
          >
            {post?.comments.length}
          </Typography>
        </Box>
        {/** Shares */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              WebkitMask: `url(${ShareIcon}) center center / 20px 20px no-repeat`,
              mask: `url(${ShareIcon}) center center / 20px 20px no-repeat`,
              backgroundSize: "cover",
              background: "#fff",
              cursor: "pointer",
              transition: "all 250ms ease",
              "&:hover": {
                background: "rgba(255, 130, 0, 1)",
              },
              marginRight: "8px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.2px",
              color: "#fff",
            }}
          >
            {post?.shares}
          </Typography>
        </Box>
      </Box>
      {/** Comments */}
      {post?.comments?.length > 0 ? (
        <>
          {showMoreComments ? (
            <>
              <Box
                sx={{
                  width: "100%",
                  height: "452px",
                  overflow: "hidden",
                  transition: "height 500ms ease",
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
                  {post?.comments?.map((comment) => (
                    <CommentCard comment={comment} />
                  ))}
                </Box>
              </Box>
              <Button
                onClick={() => setShowMoreComments(false)}
                sx={{
                  border: "1px solid #2A2B2F",
                  borderRadius: "6px",
                  padding: "10px 20px",
                  margin: "8px 0",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#888888",
                    textTransform: "none",
                  }}
                >
                  hide comments
                </Typography>
              </Button>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginBottom: post?.comments?.length >= 2 ? "16px" : "8px",
                }}
              >
                <img
                  src={post?.comments[0].user?.icon}
                  alt={post?.comments[0].user?.name}
                  style={{
                    width: "24px",
                    height: "24px",
                    minWidth: "24px",
                    minHeight: "24px",
                    marginRight: "8px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#fff",
                    whiteSpace: "nowrap",
                    marginRight: "16px",
                  }}
                >
                  {post?.comments[0].user?.name} :
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: "0.2px",
                    color: "rgba(255, 255, 255, 0.8)",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    marginRight: "16px",
                    width: "100%",
                  }}
                >
                  {post?.comments[0].desc}
                </Typography>
              </Box>
              {post?.comments?.length >= 2 && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src={post?.comments[1].user?.icon}
                    alt={post?.comments[1].user?.name}
                    style={{
                      width: "24px",
                      height: "24px",
                      minWidth: "24px",
                      minHeight: "24px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "18px",
                      color: "#fff",
                      whiteSpace: "nowrap",
                      marginRight: "16px",
                    }}
                  >
                    {post?.comments[1].user?.name} :
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "19px",
                      letterSpacing: "0.2px",
                      color: "rgba(255, 255, 255, 0.8)",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      marginRight: "16px",
                      width: "100%",
                    }}
                  >
                    {post?.comments[1].desc}
                  </Typography>
                </Box>
              )}
              <Button
                onClick={() => setShowMoreComments(true)}
                sx={{
                  border: "1px solid #2A2B2F",
                  borderRadius: "6px",
                  padding: "10px 20px",
                  marginBottom: "8px",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#888888",
                    textTransform: "none",
                  }}
                >
                  Show more
                </Typography>
              </Button>
            </Box>
          )}
        </>
      ) : (
        <></>
      )}
      {/** Add comment */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          height: "64px",
          background: "rgba(220, 220, 220, 0.1)",
          borderRadius: "10px",
          padding: "12px 16px 12px 24px",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${
              ProfilePicPrev ? ProfilePicPrev : dummyImage
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            minWidth: "32px",
            maxWidth: "32px",
            minHeight: "32px",
            maxHeight: "32px",
            width: "32px",
            height: "32px",
          }}
        />
        <FormControl
          sx={{
            width: "100%",
            margin: "0 10px",
            "textarea::placeholder": {
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
            },
          }}
          variant="outlined"
        >
          <TextareaAutosize
            maxRows={2}
            minRows={1}
            placeholder="Add a comment"
            onChange={() => {}}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              border: "none",
              outline: "none",
              borderRadius: "0",
              background: "inherit",
              color: "#FFFFFF",
              resize: "none",
              padding: "0 5px 0 0",
            }}
          />
        </FormControl>
        <Button
          onClick={() => {}}
          sx={{
            background: "transparent",
            padding: "10px 20px",
            borderRadius: "6px",
            transition: "all 250ms ease",
            "&:hover": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#fff",
              textTransform: "none",
            }}
          >
            Post
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
