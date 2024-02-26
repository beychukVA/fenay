import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  ButtonBase,
  Container,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import HeaderDrawer from "../../Screens/Landing/component/HeaderDrawer";
import DialogBox from "../../Screens/Marketing/components/DialogBox";
import Login from "../../Screens/Marketing/components/Login";
import Signup from "../../Screens/Marketing/components/Signup";
function LandingHeader() {
  let navigate = useNavigate();
  const location = useLocation();
  const [open, setopen] = useState(false);
  const [currentModalView, setCurrentModalView] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const matches = useMediaQuery("(max-width:550px)");

  const openDialog = (type) => {
    setCurrentModalView(type);
    setopen(true);
  };

  const links = [
    {
      label: "Login",
      onClick: () => {
        navigate("/login");
        // openDialog("login");
        // setDrawerOpen(false);
      },
    },
    {
      label: "Sign Up",
      onClick: () => {
        navigate("/signup");
        // openDialog("signup");
        // setDrawerOpen(false);
      },
    },
    {
      label: "About Us",
      onClick: () => navigate("/about-us"),
    },
    {
      label: "Contact Us",
      onClick: () => (window.location.href = `mailto:contact@finay.com`),
    },
    {
      label: "NAMM ‘22 Raffle",
      onClick: () => navigate("/namm"),
    },
  ];

  return (
    <AppBar
      id="navbar-header"
      sx={[
        {
          position: "fixed",
          // "backgroundColor": "transparent !important",
          WebkitTransition: "all ease-out .5s",
          MozTransition: "all ease-out .5s",
          OTransition: "all ease-out .5s",
          transition: "all ease-out .5s",
          "&.scrolled": {
            paddingTop: matches ? 1 : 0,
            backgroundColor: "#000 !important",
          },
        },
        location.pathname === "/" && {
          backgroundColor: "transparent !important",
        },
      ]}
    >
      <DialogBox open={open} handleClose={() => setopen(false)}>
        {currentModalView === "login" ? (
          <Login setCurrentModalView={(view) => setCurrentModalView(view)} />
        ) : (
          currentModalView === "signup" && (
            <Signup setCurrentModalView={(view) => setCurrentModalView(view)} />
          )
        )}
      </DialogBox>
      <HeaderDrawer
        open={drawerOpen}
        handleClose={() => setDrawerOpen(false)}
        links={links}
      />

      <Container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <ButtonBase
            disableRipple
            onClick={() => navigate("/")}
            underline="none"
            sx={{
              cursor: "pointer",
            }}
          >
            <img src={logo} width={matches ? 60 : 75} />
          </ButtonBase>

          {/* <Box display={{ xs: "inline-block", sm: "none" }}>
            <Link to="/namm" style={{ color: "#FF1C51", textDecoration: "none" }}>
              NAMM ‘22 Raffle
            </Link>
          </Box> */}

          {matches ? (
            <Box>
              <IconButton size="small" onClick={() => setDrawerOpen(true)}>
                <MenuIcon sx={{ color: "#FF1C51" }} />
              </IconButton>
            </Box>
          ) : (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly"
              minWidth={280}
            >
              {links.map((link, index) => (
                <ButtonBase
                  key={index}
                  disableRipple
                  onClick={link.onClick}
                  underline="none"
                  sx={(theme) => ({
                    color: "#fff",
                    borderBottom: "1px solid transparent",
                    fontWeight: "bold",
                    letterSpacing: 1.1,
                    cursor: "pointer",
                    padding: "10px",
                    ":hover": {
                      color: "#fff",
                      borderBottom: "1px solid #fff",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "14px",
                    },
                  })}
                >
                  {link.label}
                </ButtonBase>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </AppBar>
  );
}

export default LandingHeader;
