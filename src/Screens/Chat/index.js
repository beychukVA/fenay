import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import { useStyles } from "../../constant/customStyle";
import MessageContentImg from "../../assets/MessageContentImg.png";
import { ContactCard } from "./components/ContactCard";
import { ChatContainer } from "./components/ChatContainer";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const contacts = [
  {
    id: 1,
    icon: dummyImage,
    name: "Test",
    status: "online",
    statusTime: "06/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "read",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Me",
        status: "read",
        type: "text",
        content: "Awesome looking pictures.",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 2,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "as away",
    statusTime: "05/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 3,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "offline",
    statusTime: "06/12/2022",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Darlene Steward",
        status: "new",
        type: "text",
        content: "Please look at this picture, how do you like it?",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 4,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "online",
    statusTime: "06/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "read",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Me",
        status: "read",
        type: "text",
        content: "Awesome looking pictures.",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 5,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "as away",
    statusTime: "05/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 6,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "offline",
    statusTime: "06/12/2022",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Darlene Steward",
        status: "new",
        type: "text",
        content: "Please look at this picture, how do you like it?",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 7,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "online",
    statusTime: "06/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "read",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Me",
        status: "read",
        type: "text",
        content: "Awesome looking pictures.",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 8,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "as away",
    statusTime: "05/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 9,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "offline",
    statusTime: "06/12/2022",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Darlene Steward",
        status: "new",
        type: "text",
        content: "Please look at this picture, how do you like it?",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 10,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "online",
    statusTime: "06/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "read",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Me",
        status: "read",
        type: "text",
        content: "Awesome looking pictures.",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 11,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "as away",
    statusTime: "05/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 12,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "offline",
    statusTime: "06/12/2022",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Darlene Steward",
        status: "new",
        type: "text",
        content: "Please look at this picture, how do you like it?",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 13,
    icon: dummyImage,
    name: "Test",
    status: "online",
    statusTime: "06/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "read",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Me",
        status: "read",
        type: "text",
        content: "Awesome looking pictures.",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 14,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "as away",
    statusTime: "05/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 15,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "offline",
    statusTime: "06/12/2022",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Darlene Steward",
        status: "new",
        type: "text",
        content: "Please look at this picture, how do you like it?",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 16,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "online",
    statusTime: "06/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "read",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Me",
        status: "read",
        type: "text",
        content: "Awesome looking pictures.",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 17,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "as away",
    statusTime: "05/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 18,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "offline",
    statusTime: "06/12/2022",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Darlene Steward",
        status: "new",
        type: "text",
        content: "Please look at this picture, how do you like it?",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 19,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "online",
    statusTime: "06/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "read",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Me",
        status: "read",
        type: "text",
        content: "Awesome looking pictures.",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 20,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "as away",
    statusTime: "05/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 21,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "offline",
    statusTime: "06/12/2022",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Darlene Steward",
        status: "new",
        type: "text",
        content: "Please look at this picture, how do you like it?",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 22,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "online",
    statusTime: "06/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "read",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Me",
        status: "read",
        type: "text",
        content: "Awesome looking pictures.",
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 23,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "as away",
    statusTime: "05/01/2023",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
    ],
  },
  {
    id: 24,
    icon: dummyImage,
    name: "Darlene Steward",
    status: "offline",
    statusTime: "06/12/2022",
    messages: [
      {
        id: 1,
        sender: "Me",
        status: "read",
        type: "text",
        content:
          "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        date: "16/04/2022",
      },
      {
        id: 2,
        sender: "Darlene Steward",
        status: "new",
        type: "file",
        content: MessageContentImg,
        date: "16/04/2022",
      },
      {
        id: 3,
        sender: "Darlene Steward",
        status: "new",
        type: "text",
        content: "Please look at this picture, how do you like it?",
        date: "16/04/2022",
      },
    ],
  },
];

export const Chat = ({ setSongUrl, setSongDetails }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <Box
      sx={{ position: "relative", overflow: "hidden" }}
      className={open ? classes.blur : ""}
    >
      <HeaderComponent
        style={{ position: "fixed" }}
        setSongUrl={setSongUrl}
        setSongDetails={setSongDetails}
        setLeftSidebarOpen={setLeftSidebarOpen}
      />
      <Box
        className={`${
          isLeftSidebarOpen ? "" : matches ? "" : classes.sidebarOpen
        }`}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: matches ? "center" : "flex-start",
          //   height: "100%",
          //   minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 72px)" },
          height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 72px)" },
          width: isLeftSidebarOpen
            ? "100%"
            : { xs: "100%", md: "calc(100% - 235px)" },
          padding: isLeftSidebarOpen
            ? {
                xs: "15px",
                sm: "32px 48px 20px 48px",
                lg: "32px 126px 20px 48px",
              }
            : {
                xs: "15px",
                sm: "32px 48px 20px 48px",
                lg: "32px 48 20px 48px",
              },
          background: "#000",
          zIndex: "0",
        }}
      >
        {/**Contact List */}
        {(!matches || !selectedContact) && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              maxWidth: "415px",
              height: "100%",
              overflow: "auto",
              paddingRight: "32px",
            }}
          >
            {contacts &&
              contacts.map((contact) => (
                <ContactCard
                  selectedContact={selectedContact}
                  onSelect={setSelectedContact}
                  contact={contact}
                />
              ))}
          </Box>
        )}
        {/**Chat Container */}
        {(!matches || selectedContact) && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
            }}
          >
            {selectedContact ? (
              <ChatContainer
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
                contact={selectedContact}
              />
            ) : (
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
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "18px",
                    color: "#fff",
                  }}
                >
                  No chat selected...
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};
