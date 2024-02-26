import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../../../../constant/customStyle";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import { doCopy } from "../../../../helpers/copyText";
import CloseXIcon from "../../../../assets/CloseXIcon.svg";
import CheckMarkIcon from "../../../../assets/CheckMarkIcon.svg";
import CopyIcon from "../../../../assets/CopyIcon.svg";
import facebook from "../../../../assets/SocialColored/facebook.svg";
import twitter from "../../../../assets/SocialColored/twitter.svg";
import instagram from "../../../../assets/SocialColored/instagram.svg";
import tiktok from "../../../../assets/SocialColored/tiktok.svg";
import snapchat from "../../../../assets/SocialColored/snapchat.svg";
import youtube from "../../../../assets/SocialColored/youtube.svg";
import whatsapp from "../../../../assets/SocialColored/whatsapp.svg";
import pinterest from "../../../../assets/SocialColored/pinterest.svg";

const socials = [
  {
    id: 1,
    name: "facebook",
    link: "https://facebook.com",
    icon: facebook,
  },
  {
    id: 2,
    name: "twitter",
    link: "https://twitter.com",
    icon: twitter,
  },
  {
    id: 3,
    name: "instagram",
    link: "https://instagram.com",
    icon: instagram,
  },
  {
    id: 4,
    name: "tiktok",
    link: "https://tiktok.com",
    icon: tiktok,
  },
  {
    id: 5,
    name: "snapchat",
    link: "https://snapchat.com",
    icon: snapchat,
  },
  {
    id: 6,
    name: "youtube",
    link: "https://youtube.com",
    icon: youtube,
  },
  {
    id: 7,
    name: "whatsapp",
    link: "https://whatsapp.com",
    icon: whatsapp,
  },
  {
    id: 8,
    name: "pinterest",
    link: "https://pinterest.com",
    icon: pinterest,
  },
];

const inviteCode = "3QH6WzL";

export const MerchCreatedDialog = ({
  isMerchCreatedDialogOpne,
  setMerchCreatedDialogOpne,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [hasCopied, setHasCopied] = useState(false);
  const [link, setLink] = useState("");

  const makeLink = (code) => `https://bit.ly/${code}`;

  useEffect(() => {
    if (inviteCode) {
      setLink(makeLink(inviteCode));
    }
  }, [inviteCode]);

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const onCopy = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    const copied = await doCopy(link);

    if (copied) setHasCopied(true);
  };

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={isMerchCreatedDialogOpne}
      maxWidth={"lg"}
      //   onClose={() => setMerchCreatedDialogOpne(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          width: "720px",
          height: "728px",
          borderRadius: "8px",
          background: "rgba(24, 26, 32, 0.7)",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.31)",
        },
      }}
    >
      <DialogContent
        sx={{
          position: "relative",
          padding: "20px !important",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "32px",
            right: "32px",
            width: "32px",
            height: "32px",
            transition: "all 250ms ease",
            WebkitMask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
            mask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
            cursor: "pointer",
            "&:not(:hover)": {
              background: "rgba(255, 255, 255, 1)",
            },
            "&:hover": {
              background: "rgba(255, 255, 255, 0.6)",
            },
          }}
          //   onClick={() => setMerchCreatedDialogOpne(false)}
          onClick={() => navigate("/")}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              background: "#4CAF50",
              borderRadius: "40px",
              marginBottom: { xs: "24px", lg: "48px" },
            }}
          >
            <Box
              sx={{
                width: "16px",
                height: "12px",
                background: `url(${CheckMarkIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#fff",
            }}
          >
            Your merch is under review.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#D5D4D8",
              marginBottom: "32px",
            }}
          >
            Once it is approved, you will be notified.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#D5D4D8",
              marginBottom: "18px",
            }}
          >
            Now share your post on social media.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              background: hasCopied
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
              padding: "10px",
              marginBottom: "48px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: hasCopied ? "#D5D4D8" : "#fff",
                marginRight: "59px",
              }}
            >
              {link}
            </Typography>
            <Box
              onClick={onCopy}
              sx={{
                width: "20px",
                height: "20px",
                WebkitMask: `url(${CopyIcon}) center center / 20px 20px no-repeat`,
                mask: `url(${CopyIcon}) center center / 20px 20px no-repeat`,
                background: hasCopied ? "#D5D4D8" : "#fff",
                backgroundSize: "cover",
                cursor: "pointer",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "#FF8200",
                },
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Share with your fans
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "256.31px",
              marginLeft: "-18.31px",
              marginTop: "-18.31px",
              marginBottom: "48px",
            }}
          >
            {socials?.map((social) => (
              <Box
                onClick={() => navigate(social?.link)}
                sx={{
                  width: "50.35px",
                  maxWidth: "50.35px",
                  height: "50.35px",
                  maxHeight: "50.35px",
                  flexBasis: "calc(100% / 4 - 18.31px)",
                  borderRadius: "4.57692px",
                  cursor: "pointer",
                  background: `url(${social?.icon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  marginLeft: "18.31px",
                  marginTop: "18.31px",
                }}
              />
            ))}
          </Box>
          <Button
            onClick={() => navigate("/")}
            sx={{
              padding: "19px 87px",
              background: "#FF8200",
              borderRadius: "40px",
              transition: "all 250ms ease",
              "&:hover": {
                background: "rgba(255, 130, 0, 0.8)",
              },
            }}
          >
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
              Done
            </Typography>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
