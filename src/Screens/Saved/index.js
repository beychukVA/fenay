import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useStyles } from "../../constant/customStyle";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import ArrowLeftWhite from "../../assets/ArrowLeftWhite.svg";
import { SongsTab } from "./components/Tabs/SongsTab";
import { MerchTab } from "./components/Tabs/MerchTab";
import { EventsTab } from "./components/Tabs/EventsTab";
import { BackstagePassTab } from "./components/Tabs/BackstagePassTab";

const tabs = [
  {
    id: 1,
    name: "Songs",
  },
  {
    id: 2,
    name: "Merch",
  },
  {
    id: 3,
    name: "Events",
  },
  {
    id: 4,
    name: "Backstage Pass",
  },
];

export const Saved = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState(tabs[0]);

  // eslint-disable-next-line no-unused-vars
  const blurStatus = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ position: "relative" }} className={open ? classes.blur : ""}>
      <Box
        sx={{
          position: "absolute",
          top: "408px",
          left: "-102px",
          width: "257.54px",
          height: "261.76px",
          background: "#FF8200",
          opacity: "0.15",
          filter: "blur(100px)",
          zIndex: "0",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "805px",
          right: "0",
          width: "257.54px",
          height: "261.76px",
          background: "#FF8200",
          opacity: "0.2",
          filter: "blur(100px)",
          zIndex: "0",
        }}
      />
      <HeaderComponent
        style={{ position: "fixed" }}
        // setSongUrl={setSongUrl}
        // setSongDetails={setSongDetails}
        setLeftSidebarOpen={setLeftSidebarOpen}
      />
      <Box
        className={`${classes.homeContainer} ${
          isLeftSidebarOpen ? "" : matches ? "" : classes.sidebarOpen
        }`}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "100%",
          //   minHeight: "calc(100vh - 336px)",
          width: isLeftSidebarOpen
            ? "100%"
            : { xs: "100%", md: "calc(100% - 235px)" },
          padding: isLeftSidebarOpen
            ? {
                xs: "0 15px 137px 15px !important",
                lg: "0 0 137px 78px !important",
              }
            : {
                xs: "0 15px 137px 15px !important",
              },
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: "0",
        }}
      >
        {/** Back */}
        <Box
          onClick={() => {}}
          sx={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "48px",
            marginBottom: "32px",
            cursor: "pointer !important",
            color: "#fff",
            transition: "all 250ms ease",
            "&:hover": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "&:hover div": {
              background: "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              transition: "all 250ms ease",
              background: "#fff",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "140%",
              color: "inherit",
              letterSpacing: "0.2px",
              marginLeft: "16px",
              transition: "all 250ms ease",
            }}
          >
            Back
          </Typography>
        </Box>
        {/** Tabs */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            marginBottom: "32px",
            "& :not(:first-of-type)": {
              marginLeft: "15px",
            },
          }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setCurrentTabSelected(tab)}
              sx={{
                padding: "10px 15px",
                border: "1px solid #FF8200",
                borderRadius: "40px",
                background:
                  currentTabSelected?.id === tab?.id
                    ? "#FF8200"
                    : "transparent",
                "&:hover": {
                  background: "rgba(255, 130, 0, 0.3)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#fff",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.name}
              </Typography>
            </Button>
          ))}
        </Box>
        {/** Tabs Content */}

        {currentTabSelected.id === 1 && <SongsTab />}
        {currentTabSelected.id === 2 && <MerchTab />}
        {currentTabSelected.id === 3 && <EventsTab />}
        {currentTabSelected.id === 4 && <BackstagePassTab />}
      </Box>
      <FooterComponent />
    </Box>
  );
};
