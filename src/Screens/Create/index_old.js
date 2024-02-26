import { Box, Container, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatComponent from "../../component/Chat";
import HeaderComponent from "../../component/Header";
import CustomStepper from "../../component/Stepper";
import { useStyles } from "../../constant/customStyle";
import { GetUser } from "../../Services/User";

const Create = ({ setSongDetails, setSongUrl }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  const blurStatus = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.title = "Create | Finay";
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await GetUser();
    setUser(response);
    setIsLoading(false);
  };

  const renderLoading = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 150px)",
        }}
      >
        <Typography sx={{ color: "gray", fontSize: 14 }}>Loading...</Typography>
      </Box>
    );
  };

  const renderNotVerified = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 150px)",
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: 24 }}>
          Not Verified
        </Typography>
        <Typography sx={{ color: "lightgray", fontSize: 14, marginBottom: 5 }}>
          Only verified users are allowed to create content
        </Typography>
        <Link
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/request-verification")}
        >
          <Typography>Request Verification</Typography>
        </Link>
      </Box>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return renderLoading();
    }

    // if (!user?.is_verified) {
    //   return renderNotVerified();
    // }

    return (
      <>
        <Container className={classes.createContainer}>
          <Box style={{ position: "relative" }} className={classes.tabFeedBox}>
            <div>
              <CustomStepper setPlayAudio={setPlayAudio} />
            </div>
          </Box>
        </Container>
        <Box
          style={{
            width: "auto",
            position: "fixed",
            bottom: 200,
            left: 0,
            zIndex: 99,
          }}
        >
          <ChatComponent
            blur={blurStatus}
            setSongDetails={setSongDetails}
            setSongUrl={setSongUrl}
          />
        </Box>
        {playAudio && (
          <Box
            sx={{
              marginTop: "20px",
              marginBottom: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        )}
      </>
    );
  };

  return (
    <Box sx={{ position: "relative" }} className={open ? classes.blur : ""}>
      <HeaderComponent
        style={{ position: "fixed" }}
        setSongUrl={setSongUrl}
        setSongDetails={setSongDetails}
      />
      {renderContent()}
    </Box>
  );
};

export default Create;
