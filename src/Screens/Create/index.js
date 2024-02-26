import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../../constant/customStyle";
import { Box, useMediaQuery } from "@mui/material";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import { Menu } from "./components/Menu";
import { CreateSong } from "./components/Song/CreateSong";
import { CreateEvent } from "./components/Event/CreateEvent";
import { CreateMerch } from "./components/Merch/CreateMerch";
import { CreateBackstagePass } from "./components/BackstagePass/CreateBackstagePass";

const menu = [
  {
    id: 1,
    name: "Songs",
    desc: "Upload and share your Songs for fan.",
  },
  {
    id: 2,
    name: "Event",
    desc: "Post an upcoming event for fans.",
  },
  {
    id: 3,
    name: "Merch",
    desc: "Sell your Merch in the marketplace.",
  },
  {
    id: 4,
    name: "Backstage Pass",
    desc: "Sell your fan only content.",
  },
];

export const CreatePage = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [menuSelected, setMenuSelected] = useState(menu[0]);
  const [showMenu, setShowMenu] = useState(true);

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
          minHeight: "calc(100vh - 336px)",
          width: isLeftSidebarOpen
            ? "100%"
            : { xs: "100%", md: "calc(100% - 235px)" },
          padding: isLeftSidebarOpen
            ? {
                xs: "44px 15px 137px 15px !important",
                lg: "78px 153px 227px 153px !important",
              }
            : {
                xs: "44px 15px 137px 15px !important",
                lg: "78px 15px 227px 15px !important",
              },
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: "0",
        }}
      >
        {showMenu ? (
          <Menu
            menu={menu}
            menuSelected={menuSelected}
            setMenuSelected={setMenuSelected}
            setShowMenu={setShowMenu}
          />
        ) : (
          <>
            {!showMenu && menuSelected?.id === 1 && (
              <CreateSong setShowMenu={setShowMenu} />
            )}
            {!showMenu && menuSelected?.id === 2 && (
              <CreateEvent setShowMenu={setShowMenu} />
            )}
            {!showMenu && menuSelected?.id === 3 && (
              <CreateMerch setShowMenu={setShowMenu} />
            )}
            {!showMenu && menuSelected?.id === 4 && (
              <CreateBackstagePass setShowMenu={setShowMenu} />
            )}
          </>
        )}
      </Box>
      <FooterComponent />
    </Box>
  );
};
