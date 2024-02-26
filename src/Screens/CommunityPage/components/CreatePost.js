import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import ImportImageIconTransparent from "../../../assets/ImportImageIconTransparent.svg";
import ArrowChevronRightIcon from "../../../assets/ArrowChevronRightIcon.svg";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

export const CreatePost = () => {
  // eslint-disable-next-line no-unused-vars
  const [ProfilePicPrev, setProfilePicPrev] = useState(
    "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png"
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        background: "#2A2B2F",
        borderRadius: "10px",
        padding: { xs: "15px", sm: "24px 32px" },
        marginBottom: "32px",
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
          marginBottom: "16px",
        }}
      >
        Create Post
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          height: "126px",
          background: "rgba(220, 220, 220, 0.1)",
          borderRadius: "10px",
          padding: { xs: "15px", sm: "32px" },
          marginBottom: "16px",
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
            height: "100%",
            margin: "7px 10px 0 10px",
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
            placeholder="Whats on your mind ?"
            onChange={() => {}}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              height: "100%",
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
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Button
          onClick={() => {}}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0",
            background: "transparent",
            borderRadius: "6px",
            transition: "all 250ms ease",
            "&:hover": {
              background: "transparent",
            },
            "&:hover p": {
              color: "#FF8200",
            },
            "&:hover div": {
              background: "#FF8200",
            },
            marginRight: { xs: "15px", sm: "40px" },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ImportImageIconTransparent}) center center / 24px 24px no-repeat`,
              mask: `url(${ImportImageIconTransparent}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              background: "rgba(255, 255, 255, 0.9)",
              transition: "all 250ms ease",
              marginRight: "8px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "rgba(255, 255, 255, 0.9)",
              textTransform: "none",
              transition: "all 250ms ease",
            }}
          >
            Image
          </Typography>
        </Button>
        <Button
          onClick={() => {}}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0",
            background: "transparent",
            borderRadius: "6px",
            transition: "all 250ms ease",
            "&:hover": {
              background: "transparent",
            },
            "&:hover p": {
              color: "#FF8200",
            },
            "&:hover div": {
              background: "#FF8200",
            },
            marginRight: { xs: "15px", sm: "40px" },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ImportImageIconTransparent}) center center / 24px 24px no-repeat`,
              mask: `url(${ImportImageIconTransparent}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              background: "rgba(255, 255, 255, 0.9)",
              transition: "all 250ms ease",
              marginRight: "8px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "rgba(255, 255, 255, 0.9)",
              textTransform: "none",
              transition: "all 250ms ease",
            }}
          >
            Video
          </Typography>
        </Button>
        <Button
          onClick={() => {}}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0",
            background: "transparent",
            borderRadius: "6px",
            transition: "all 250ms ease",
            "&:hover": {
              background: "transparent",
            },
            "&:hover p": {
              color: "#FF8200",
            },
            "&:hover div": {
              background: "#FF8200",
            },
            marginRight: { xs: "15px", sm: "40px" },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ImportImageIconTransparent}) center center / 24px 24px no-repeat`,
              mask: `url(${ImportImageIconTransparent}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              background: "rgba(255, 255, 255, 0.9)",
              transition: "all 250ms ease",
              marginRight: "8px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "rgba(255, 255, 255, 0.9)",
              textTransform: "none",
              transition: "all 250ms ease",
            }}
          >
            File
          </Typography>
        </Button>
        <Button
          onClick={() => {}}
          sx={{
            background: "#FF8200",
            padding: "10px 20px",
            borderRadius: "6px",
            transition: "all 250ms ease",
            "&:hover": {
              background: "rgba(255, 130, 0, 0.8)",
            },
            marginLeft: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#2B2B2B",
              textTransform: "none",
            }}
          >
            Post
          </Typography>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              WebkitMask: `url(${ArrowChevronRightIcon}) center center / 20px 20px no-repeat`,
              mask: `url(${ArrowChevronRightIcon}) center center / 20px 20px no-repeat`,
              backgroundSize: "cover",
              background: "#2B2B2B",
              transition: "all 250ms ease",
              marginLeft: "4px",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};
