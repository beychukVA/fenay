import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container, Hidden, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatComponent from "../../component/Chat";
import HeaderComponent from "../../component/Header";
import PostModal from "../../component/PostModal/PostModal";
import CustomTabsComponent from "../../component/Tabs";
import { useStyles } from "../../constant/customStyle";
import { GetAds } from "../../Services/Ad";
import { GetAllUsers } from "../../Services/User";
import TabComponentConnect from "../../tabsCompoent/TabComponentConnect";
import TabComponentFeed from "../../tabsCompoent/TabComponentFeed";
import TabComponentFollowers from "../../tabsCompoent/TabComponentFollowers";
const communityTabs = [
  {
    name: "Feed",
    value: "1",
  },
  // {
  //   name: "Supporters",
  //   value: "2",
  // },
  {
    name: "Connect",
    value: "3",
  },
];

const CommunityScreen = ({ setSongUrl, setSongDetails }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [Followers, setFollowers] = useState([]);
  const [ConnectUsers, setConnectUsers] = useState([]);
  const [PostModalStatus, setPostModalStatus] = React.useState(false);
  const [Ads, setAds] = useState([]);
  const blurStatus = () => {
    setOpen(!open);
  };

  const fetchAds = async () => {
    const res = await GetAds();
    if (res.data) {
      setAds(res.data.data);
    }
  };

  const tabsPanelCommunity = [
    {
      component: <TabComponentFeed setSongUrl={setSongUrl} />,
      value: "1",
    },
    {
      component: <TabComponentFollowers Followers={Followers} />,
      value: "2",
    },
    {
      component: <TabComponentConnect ConnectUsers={Ads} FetchAds={fetchAds} />,
      value: "3",
    },
  ];

  useEffect(() => {
    document.title = "Profile | Community";
    fetchUsers();
    fetchAds();
  }, []);

  const fetchUsers = async () => {
    const res = await GetAllUsers();
    const followers = res.slice(0, res.length / 2);
    const connectUser = res.slice(res.length / 2, res.length);
    setFollowers(followers);
    setConnectUsers(connectUser);
  };

  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{ position: "relative" }} className={open ? classes.blur : ""}>
      <HeaderComponent
        style={{ position: "fixed" }}
        setSongUrl={setSongUrl}
        setSongDetails={setSongDetails}
      />
      <Hidden mdUp>
        <Box display="flex" justifyContent={"center"} marginTop={3}>
          <Button
            variant="contained"
            onClick={() => setPostModalStatus(true)}
            sx={{
              width: "90%",
              backgroundColor: "#FF1C51",
              padding: "5px 15px",
              borderRadius: "30px",
              fontFamily: "poppins",
              textTransform: "capitalize",
              fontSize: "17px",
              fontWeight: "400",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#FF1C51 !important",
                boxShadow: "none",
              },
            }}
          >
            <AddIcon style={{ color: "#fff" }} /> <span> Create Post </span>
          </Button>
        </Box>
      </Hidden>
      <Container
        maxWidth="md"
        className={classes.exploreContainer}
        sx={{
          marginBottom: "150px",
          padding: matches ? 0 : "0px 60px !important",
        }}
      >
        <Hidden mdDown>
          <Button
            variant="contained"
            onClick={() => setPostModalStatus(true)}
            sx={{
              marginBottom: "20px",
              backgroundColor: "#FF1C51",
              padding: "5px 15px",
              borderRadius: "30px",
              fontFamily: "poppins",
              textTransform: "capitalize",
              fontSize: "17px",
              fontWeight: "400",
              boxShadow: "none",
              float: "right",
              "&:hover": {
                backgroundColor: "#FF1C51 !important",
                boxShadow: "none",
              },
            }}
          >
            <AddIcon style={{ color: "#fff" }} /> <span> Create Post </span>
          </Button>
        </Hidden>
        <CustomTabsComponent
          tabs={communityTabs}
          tabsPanel={tabsPanelCommunity}
        />
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
          setSongUrl={setSongUrl}
          setSongDetails={setSongDetails}
        />
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
      <PostModal
        PostModalStatus={PostModalStatus}
        setPostModalStatus={setPostModalStatus}
        refresh={true}
      />
    </Box>
  );
};

export default CommunityScreen;
