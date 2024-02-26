import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  ButtonBase,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import DownloadAppstore from "../../assets/Marketing/download-appstore.png";
import HamburgerIcon from "../../assets/Marketing/hamburger.png";
import GuideBookFile from "../../assets/files/NAMM_Contest_Rules_2022.docx";
import MarketingDialog from "./components/DialogBox";
import Login from "./components/Login";
import Header from "./components/ResponsiveComponents/Header";
import Signup from "./components/Signup";
import { useStyles } from "./styles";
import FileViewer from "react-file-viewer";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

function Marketing() {
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:1024px)");
  const smallMatches = useMediaQuery("(max-width:768px)");
  const mobileMatches = useMediaQuery("(max-width:600px)");
  const foldMatches = useMediaQuery("(max-width:350px)");

  const classes = useStyles();
  const [open, setopen] = useState(false);
  const [currentModalView, setCurrentModalView] = useState(null);
  const [openDoc, setOpenDoc] = useState(false);

  const openDialog = (type) => {
    setCurrentModalView(type);
    setopen(true);
  };

  const socialItems = [
    {
      label: "Facebook",
      onClick: () => window.open("https://facebook.com/finayinc", "_blank"),
    },
    {
      label: "Instagram",
      onClick: () =>
        window.open(
          "https://instagram.com/finayinc?igshid=YmMyMTA2M2Y=",
          "_blank"
        ),
    },
    {
      label: "Twitter",
      onClick: () => window.open("https://twitter.com/finay", "_blank"),
    },
    {
      label: "Free NFT Guide Book",
      onClick: () => setOpenDoc(true),
      // onClick: () => window.open(GuideBookFile, "_blank")
    },
  ];

  return (
    <Box
      minHeight={smallMatches ? "90vh" : "100vh"}
      className={[classes.mainBg]}
    >
      <MarketingDialog open={open} handleClose={() => setopen(false)}>
        {currentModalView === "login" ? (
          <Login setCurrentModalView={(view) => setCurrentModalView(view)} />
        ) : (
          currentModalView === "signup" && (
            <Signup setCurrentModalView={(view) => setCurrentModalView(view)} />
          )
        )}
      </MarketingDialog>
      {smallMatches && (
        <Header
          socialItems={socialItems}
          openDialog={(value) => openDialog(value)}
        />
      )}
      {!smallMatches && (
        <Box position="absolute" top={50} right={50} sx={{ zIndex: 11 }}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <ButtonBase
              disableRipple
              sx={{ p: 1 }}
              // onClick={() => openDialog("login")}
              onClick={() => navigate("/login")}
            >
              <Typography
                fontWeight={"500"}
                fontSize={matches ? 14 : 18}
                letterSpacing={1.2}
                textTransform="uppercase"
                color="white"
              >
                Login
              </Typography>
            </ButtonBase>
            <img src={HamburgerIcon} />
          </Stack>
        </Box>
      )}
      {!smallMatches && (
        <Box position="absolute" top={"50%"} right={10} sx={{ zIndex: 9 }}>
          <Typography
            className={[classes.rotate]}
            fontSize={matches ? 11 : 13}
            color="white"
            fontWeight="500"
          >
            Scroll Down
          </Typography>
        </Box>
      )}
      <Stack
        direction={"row"}
        alignItems="flex-start"
        spacing={1}
        sx={{ zIndex: 9 }}
      >
        {!smallMatches && (
          <Box sx={{ p: 3, zIndex: 9 }}>
            <img src={Logo} className={classes.logo} />
            <Stack direction={"column"} alignItems="center" spacing={7}>
              {socialItems.map((item, index) => (
                <ButtonBase
                  key={index}
                  disableRipple
                  onClick={() => item.onClick()}
                >
                  <Box className={classes.socialLinkContainer}>
                    <Typography
                      className={[classes.rotate]}
                      fontSize={matches ? 14 : 18}
                      color="white"
                      fontWeight="500"
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </ButtonBase>
              ))}
            </Stack>
          </Box>
        )}
        <Box
          sx={{
            zIndex: 9,
            borderLeft: smallMatches ? 0 : "1px solid #ffffff42",
            minHeight: smallMatches ? "90vh" : "100vh",
          }}
        >
          <Box>
            <Stack
              direction="column"
              justifyContent={"space-between"}
              sx={{
                pr: 1.2,
                pt: 9,
                pl: foldMatches ? 1.5 : smallMatches ? 4 : matches ? 2.5 : 9,
                minHeight: matches ? "83vh" : "95vh",
                minWidth: "80vw",
              }}
            >
              <Box>
                <Typography
                  color="white"
                  fontSize={matches ? 22 : 35}
                  sx={{ width: foldMatches ? 200 : 275 }}
                >
                  Redefining how musicians connect with their{" "}
                  <span style={{ color: "#FF1C51" }}>audience</span>
                </Typography>
                <Typography
                  color="white"
                  fontSize={matches ? 14 : 20}
                  sx={{ width: 200, mt: 2 }}
                >
                  Create, Promote, & Sell music your way
                </Typography>
                <Box marginTop={4} marginBottom={2.5}>
                  <img
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/us/app/finay/id1613395121",
                        "_blank"
                      )
                    }
                    src={DownloadAppstore}
                    width={matches ? "30%" : "inherit"}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
              <Stack
                direction={mobileMatches ? "column" : "row"}
                alignItems={mobileMatches ? "center" : "flex-end"}
                justifyContent={"space-between"}
                sx={{ zIndex: 9 }}
              >
                <Box>
                  <Typography
                    color="white"
                    fontSize={matches ? 19 : 27}
                    sx={{
                      mb: smallMatches ? 3 : 0,
                      width: foldMatches ? 200 : smallMatches ? 300 : 200,
                    }}
                  >
                    <span style={{ color: "#FF1C51" }}>NAMM's</span> first and
                    Only music NFT company
                  </Typography>
                </Box>
                <Box className={classes.winPrizeContainer}>
                  <Stack direction={"row"} alignItems="center" spacing={3}>
                    <Box sx={{ ml: matches ? 2.4 : 4 }}>
                      <Typography
                        color="white"
                        fontSize={
                          foldMatches
                            ? 10
                            : smallMatches
                            ? 12
                            : matches
                            ? 14
                            : 18
                        }
                      >
                        Sign up for a chance to win $1,000!
                      </Typography>
                      <Typography
                        color="white"
                        fontSize={
                          foldMatches ? 7 : smallMatches ? 9 : matches ? 12 : 14
                        }
                      >
                        (No purchase necessary)
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => {
                        // openDialog("signup")
                        navigate("/signup");
                      }}
                    >
                      <Box
                        sx={{
                          cursor: "pointer",
                          width: foldMatches ? 40 : smallMatches ? 50 : 75,
                          height: foldMatches ? 40 : smallMatches ? 50 : 75,
                          background: "#FF1C51",
                          borderRadius: 10,
                        }}
                      >
                        <ArrowForwardIosIcon
                          fontSize={foldMatches ? "small" : "medium"}
                          sx={{ mt: smallMatches ? 1.3 : 3 }}
                          htmlColor="#fff"
                        />
                      </Box>
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Box>
          {smallMatches && (
            <Typography
              fontSize={matches ? 11 : 13}
              sx={{ zIndex: 9, mt: 3 }}
              align="center"
              color="white"
              fontWeight="500"
            >
              Scroll Down
            </Typography>
          )}
        </Box>
      </Stack>

      <Dialog fullScreen open={openDoc} onClose={() => setOpenDoc(false)}>
        <DialogTitle id="responsive-dialog-title">
          <Box display="flex" alignItems="center">
            Free NFT Guide Book{" "}
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpenDoc(false)}
              aria-label="close"
              sx={{ marginLeft: "auto" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <FileViewer
            fileType={"docx"}
            filePath={GuideBookFile}
            // errorComponent={CustomErrorComponent}
            // onError={this.onError}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Marketing;
