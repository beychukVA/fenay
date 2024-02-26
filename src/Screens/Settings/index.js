import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import ChatComponent from "../../component/Chat";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import { useStyles } from "../../constant/customStyle";
import { categoryData1 } from "../../constant/dropdown/category";
import { show_success, show_toast } from "../../helpers/toast";
import { CreatBackStagePass } from "../../Services/Pass";
import {
  GetUser,
  UpdatePassword,
  UpdateUser,
  GetBlockUser,
} from "../../Services/User";
import ArrowLeftWhite from "../../assets/ArrowLeftWhite.svg";
import { get_token, get_signup_url } from "../../Services/Paypal";
import { AccountTab } from "./component/Tabs/AccountTab";
import { SecurityTab } from "./component/Tabs/SecurityTab";
import { WalletTab } from "./component/Tabs/WalletTab";
import { SocialMediaTab } from "./component/Tabs/SocialMediaTab";
import { PrivacyAndSafetyTab } from "./component/Tabs/PrivacyAndSafetyTab";
import { NotificationTab } from "./component/Tabs/NotificationTab";
const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const pricingData = [
  {
    value: {
      price: 1.99,
      productId: "org.reactjs.native.example.social_media.nft_1",
    },
    name: "$1.99",
  },
  {
    value: {
      price: 4.99,
      productId: "org.reactjs.native.example.social_media.nft_2",
    },
    name: "$4.99",
  },
  {
    value: {
      price: 9.99,
      productId: "org.reactjs.native.example.social_media.nft_3",
    },
    name: "$9.99",
  },
  {
    value: {
      price: 14.99,
      productId: "org.reactjs.native.example.social_media.nft_4",
    },
    name: "$14.99",
  },
  {
    value: {
      price: 19.99,
      productId: "org.reactjs.native.example.socialmedia.nft5",
    },
    name: "$19.99",
  },
  {
    value: {
      price: 24.99,
      productId: "org.reactjs.native.example.socialmedia.nft6",
    },
    name: "$24.99",
  },
  {
    value: {
      price: 29.99,
      productId: "org.reactjs.native.example.socialmedia.nft7",
    },
    name: "$29.99",
  },
  {
    value: {
      price: 39.99,
      productId: "org.reactjs.native.example.socialmedia.nft8",
    },
    name: "$39.99",
  },
  {
    value: {
      price: 49.99,
      productId: "org.reactjs.native.example.socialmedia.nft9",
    },
    name: "$49.99",
  },
  {
    value: {
      price: 59.99,
      productId: "org.reactjs.native.example.socialmedia.nft10",
    },
    name: "$59.99",
  },
  {
    value: {
      price: 69.99,
      productId: "org.reactjs.native.example.socialmedia.nft11",
    },
    name: "$69.99",
  },
  {
    value: {
      price: 79.99,
      productId: "org.reactjs.native.example.socialmedia.nft12",
    },
    name: "$79.99",
  },
  {
    value: {
      price: 89.99,
      productId: "org.reactjs.native.example.socialmedia.nft13",
    },
    name: "$89.99",
  },
  {
    value: {
      price: 99.99,
      productId: "org.reactjs.native.example.socialmedia.nft14",
    },
    name: "$99.99",
  },
  {
    value: {
      price: 119.99,
      productId: "org.reactjs.native.example.socialmedia.nft15",
    },
    name: "$119.99",
  },
  {
    value: {
      price: 139.99,
      productId: "org.reactjs.native.example.socialmedia.nft16",
    },
    name: "$139.99",
  },
  {
    value: {
      price: 159.99,
      productId: "org.reactjs.native.example.socialmedia.nft17",
    },
    name: "$159.99",
  },
  {
    value: {
      price: 179.99,
      productId: "org.reactjs.native.example.socialmedia.nft18",
    },
    name: "$179.99",
  },
  {
    value: {
      price: 199.99,
      productId: "org.reactjs.native.example.socialmedia.nft19",
    },
    name: "$199.99",
  },
  {
    value: {
      price: 249.99,
      productId: "org.reactjs.native.example.socialmedia.nft20",
    },
    name: "$249.99",
  },
  {
    value: {
      price: 299.99,
      productId: "org.reactjs.native.example.socialmedia.nft21",
    },
    name: "$299.99",
  },
  {
    value: {
      price: 349.99,
      productId: "org.reactjs.native.example.socialmedia.nft22",
    },
    name: "$349.99",
  },
  {
    value: {
      price: 399.99,
      productId: "org.reactjs.native.example.socialmedia.nft23",
    },
    name: "$399.99",
  },
  {
    value: {
      price: 449.99,
      productId: "org.reactjs.native.example.socialmedia.nft24",
    },
    name: "$449.99",
  },
  {
    value: {
      price: 499.99,
      productId: "org.reactjs.native.example.socialmedia.nft25",
    },
    name: "$499.99",
  },
  {
    value: {
      price: 599.99,
      productId: "org.reactjs.native.example.socialmedia.nft26",
    },
    name: "$599.99",
  },
  {
    value: {
      price: 699.99,
      productId: "org.reactjs.native.example.socialmedia.nft27",
    },
    name: "$699.99",
  },
  {
    value: {
      price: 799.99,
      productId: "org.reactjs.native.example.socialmedia.nft28",
    },
    name: "$799.99",
  },
  {
    value: {
      price: 899.99,
      productId: "org.reactjs.native.example.socialmedia.nft29",
    },
    name: "$899.99",
  },
  {
    value: {
      price: 999.99,
      productId: "org.reactjs.native.example.socialmedia.nft30",
    },
    name: "$999.99",
  },
];

const tabs = [
  {
    id: 1,
    name: "Account",
  },
  {
    id: 2,
    name: "Security",
  },
  {
    id: 3,
    name: "Wallet",
  },
  {
    id: 4,
    name: "Social media",
  },
  {
    id: 5,
    name: "Privacy and safety",
  },
  {
    id: 6,
    name: "Notification",
  },
];

const SettingScreen = ({ setSongUrl, setSongDetails }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(3);
  const [switchState, setSwitchState] = useState(false);
  const [followState, setFollowState] = useState(false);
  const [reivewState, setReviewState] = useState(false);
  const [locationState, setLocationState] = useState(false);
  const [notificationState, setNotificationState] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState(tabs[0]);
  // eslint-disable-next-line no-unused-vars
  const [postValue, setPostValue] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [mediaValue, setMediaValue] = useState(2);
  // eslint-disable-next-line no-unused-vars
  const [friendListValue, setFriendListValue] = useState(3);
  // eslint-disable-next-line no-unused-vars
  const [followerListvalue, setFollowerListValue] = useState(4);
  // eslint-disable-next-line no-unused-vars
  const [contactInfoValue, setContactInfoValue] = useState(5);

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [onlineStatus, setonlineStatus] = useState(true);
  const [PostPermission, setPostPermission] = useState("");
  const [MediaPermission, setMediaPermission] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [FriendsPermission, setFriendsPermission] = useState("");
  const [FollowersPermission, setFollowersPermission] = useState("");
  const [ContactPermission, setContactPermission] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isDeactive, setisDeactive] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [twoFactor, settwoFactor] = useState(false);
  const [twoFactorModal, settwoFactorModal] = useState(false);
  const [code, setcode] = useState("");
  const matches = useMediaQuery("(max-width:768px)");
  // eslint-disable-next-line no-unused-vars
  const [backPass, setbackPass] = useState(false);
  const [backStageModal, setbackStageModal] = useState(false);
  const [NFTPrice, setNFTPrice] = useState(0);

  const [blockUser, setblockUser] = useState(false);
  const [blockedUserList, setblockedUserList] = useState([]);
  const [CurrentBlockedUsers, setCurrentBlockedUsers] = useState([]);

  //social media links
  const [fbLink, setfbLink] = useState("");
  const [instaLink, setinstaLink] = useState("");
  const [twitterLink, settwitterLink] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [algorand, setAlgorand] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isVerified, setIsVerified] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isPaypal, setIsPaypal] = useState(undefined);

  const blurStatus = () => {
    setOpen(!open);
  };

  // eslint-disable-next-line no-unused-vars
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handlePostChange = (event) => {
    setPostValue(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handleMediaChange = (event) => {
    setMediaValue(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handleFriendListChange = (event) => {
    setFriendListValue(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handleFollowerListChange = (event) => {
    setFollowerListValue(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handleContactInfoChange = (event) => {
    setContactInfoValue(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSwitchChange = (event) => {
    setSwitchState(!switchState);
  };
  // eslint-disable-next-line no-unused-vars
  const handleFollowRequestChange = (event) => {
    setFollowState(!followState);
  };
  // eslint-disable-next-line no-unused-vars
  const handleReviewTagChange = (event) => {
    setReviewState(!reivewState);
  };
  // eslint-disable-next-line no-unused-vars
  const handleEnableLocationChange = (event) => {
    setLocationState(!locationState);
  };
  // eslint-disable-next-line no-unused-vars
  const handleEmailNotificationChange = (event) => {
    setNotificationState(!notificationState);
  };

  // eslint-disable-next-line no-unused-vars
  const updateSocialMedia = async (type) => {
    let res;
    if (type === "fb") {
      res = await UpdateUser({ facebook: fbLink });
      show_success("Facebook link updated.");
    } else if (type === "insta") {
      res = await UpdateUser({ instagram: instaLink });
      show_success("Insta link updated.");
    } else if (type === "twitter") {
      // eslint-disable-next-line no-unused-vars
      res = await UpdateUser({ twitter: twitterLink });
      show_success("Twitter link updated.");
    }
  };

  const handlePermissionUpdate = async (value, key) => {
    await UpdateUser({ [key]: value });
  };

  // eslint-disable-next-line no-unused-vars
  const updateUserInfo = async () => {
    if (userName.trim() === "") {
      show_toast("Name field can not be empty");
    }
    // eslint-disable-next-line no-unused-vars
    const res = await UpdateUser({
      // password,
      name: userName,
      number: phone,
      isOnline: onlineStatus,
      // deactive: isDeactive,
      isContact: ContactPermission,
      isFollowers: FollowersPermission,
      isMedia: MediaPermission,
      isPost: PostPermission,
    });
  };

  const handleValidation = (password) => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{6,}/;
    const passwordLength = password.length;
    const uppercasePassword = uppercaseRegExp.test(password);
    const lowercasePassword = lowercaseRegExp.test(password);
    const digitsPassword = digitsRegExp.test(password);
    const specialCharPassword = specialCharRegExp.test(password);
    const minLengthPassword = minLengthRegExp.test(password);
    let errMsg = false;
    if (passwordLength === 0) {
      show_toast("Password is empty");
      errMsg = true;
    }
    if (!uppercasePassword) {
      show_toast("At least one Uppercase");
      errMsg = true;
    }
    if (!lowercasePassword) {
      show_toast("At least one Lowercase");
      errMsg = true;
    }
    if (!digitsPassword) {
      show_toast("At least one digit");
      errMsg = true;
    }
    if (!specialCharPassword) {
      show_toast("At least one Special Characters");
      errMsg = true;
    }
    if (!minLengthPassword) {
      show_toast("At least minumum 6 characters");
      errMsg = true;
    }

    if (errMsg) {
      return true;
    } else {
      return false;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const updatePassword = async () => {
    if (handleValidation(password)) {
      return;
    }
    const res = await UpdatePassword({ password });
    res && show_success("Password Updated Successfully");
  };

  // eslint-disable-next-line no-unused-vars
  const handleDeactivation = async (is) => {
    const res = await UpdateUser({
      deactive: is,
    });
    res && setisDeactive(is);
  };

  // eslint-disable-next-line no-unused-vars
  const handleTwoFactor = async (is) => {
    if (is === true) {
      if (phone) {
        // settwoFactorModal(true)
        setTwoFactor(true);
        // const res = await CreateSandBoxNumber({
        //   number :phone
        // });
      } else {
        show_toast("Please enter phone in your profile.");
        return;
      }
    } else {
      setTwoFactor(false);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleBackPass = () => {
    setbackStageModal(true);
  };

  const createbackStagePass = async () => {
    if (NFTPrice === 0) {
      return;
    }
    const res = await CreatBackStagePass(NFTPrice);
    if (res) {
      const res = await UpdateUser({ backstagePass: true });
      res && setbackStageModal(false);
      res && setbackPass(true);
    }
  };

  const twoFactorVerification = async () => {
    try {
      // const res = await VerificationSandBoxNumber(phone , code);
      setTwoFactor(true);
      settwoFactorModal(false);
    } catch (e) {
      show_toast("Verification of code failed.");
    }
  };

  const setTwoFactor = async (is) => {
    const res = await UpdateUser({
      twofactor: is,
    });
    res && settwoFactor(is);
    show_success(
      `Two Factor Authentication successfully ${is ? "ON" : "OFF"}.`
    );
  };

  useEffect(() => {
    document.title = "Settings | Finay";
    fetchUserInfo();
    fetchBlockUserInfo();

    const current_url = new URL(window.location.href);
    const paypalMerchantId = current_url.searchParams.get("merchantIdInPayPal");
    if (paypalMerchantId) {
      handlePermissionUpdate(paypalMerchantId, "paypalId");
      setIsPaypal(paypalMerchantId);
      show_success("Paypal Connected");
    }
  }, []);

  const fetchBlockUserInfo = async () => {
    const res = await GetBlockUser();
    res && setblockedUserList(res);
  };

  const unblockUser = async (id) => {
    const filteredBlockList = CurrentBlockedUsers.filter((idB) => idB !== id);
    const filteredUsers = blockedUserList.filter((idB) => idB._id !== id);
    const res = await UpdateUser({
      blocked: filteredBlockList,
    });
    res && setblockedUserList(filteredUsers);
    res && setCurrentBlockedUsers(filteredBlockList);
  };

  // eslint-disable-next-line no-unused-vars
  const connectPaypal = async () => {
    const token_api = await get_token();
    const token = token_api.access_token;
    const generate_url = await get_signup_url(token, "123123");

    window.open(generate_url.links[1].href);
  };

  const fetchUserInfo = async () => {
    const res = await GetUser();
    res.facebook && setfbLink(res.facebook);
    res.instagram && setinstaLink(res.instagram);
    res.twitter && settwitterLink(res.twitter);
    console.log("TEST");
    setIsVerified(res.isVerified);
    setuserName(res.name);
    setpassword(res.password);
    setphone(res.number);
    setCurrentBlockedUsers(res.blocked);
    setPostPermission(
      categoryData1.filter(
        (cat) =>
          cat.name === res.isPost.charAt(0).toUpperCase() + res.isPost.slice(1)
      )[0].value
    );
    setMediaPermission(
      categoryData1.filter(
        (cat) =>
          cat.name ===
          res.isMedia.charAt(0).toUpperCase() + res.isMedia.slice(1)
      )[0].value
    );
    setContactPermission(
      categoryData1.filter(
        (cat) =>
          cat.name ===
          res.isContact.charAt(0).toUpperCase() + res.isContact.slice(1)
      )[0].value
    );
    setFollowersPermission(
      categoryData1.filter(
        (cat) =>
          cat.name ===
          res.isFollowers.charAt(0).toUpperCase() + res.isFollowers.slice(1)
      )[0].value
    );
    setonlineStatus(res.isOnline);
    setisDeactive(res.deactive);
    settwoFactor(res.twofactor);
    setbackPass(res.backstagePass);
    console.log(res);
    setAlgorand(res.algorand);
    setIsPaypal(res.paypalId);
  };

  // eslint-disable-next-line no-unused-vars
  const permissionArr = [
    {
      title: "Who can see your post? :",
      value: PostPermission,
      onChange: (e) => {
        setPostPermission(e.target.value);
        handlePermissionUpdate(
          categoryData1[e.target.value - 1].name.toLowerCase(),
          "isPost"
        );
      },
    },
    {
      title: "Who can see your media? :",
      value: MediaPermission,
      onChange: (e) => {
        setMediaPermission(e.target.value);
        handlePermissionUpdate(
          categoryData1[e.target.value - 1].name.toLowerCase(),
          "isMedia"
        );
      },
    },
    {
      title: "Who can see your follower list? :",
      value: FollowersPermission,
      onChange: (e) => {
        setFollowersPermission(e.target.value);
        handlePermissionUpdate(
          categoryData1[e.target.value - 1].name.toLowerCase(),
          "isFollowers"
        );
      },
    },
    {
      title: "Who can see your contact info? :",
      value: ContactPermission,
      onChange: (e) => {
        setContactPermission(e.target.value);
        handlePermissionUpdate(
          categoryData1[e.target.value - 1].name.toLowerCase(),
          "isContact"
        );
      },
    },
  ];

  return (
    <Box sx={{ position: "relative" }} className={open ? classes.blur : ""}>
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
        // className={classes.exploreContainer}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "100%",
          minHeight: "calc(100vh - 336px)",
          width: isLeftSidebarOpen ? "100%" : "calc(100% - 235px)",
          padding: isLeftSidebarOpen
            ? {
                xs: "78px 24px 78px 24px !important",
                sm: "78px 150px 78px 156px !important",
              }
            : {
                xs: "78px 24px 78px 24px !important",
                sm: "78px 150px 78px 156px !important",
                md: "78px 78px 78px 78px !important",
              },
        }}
      >
        <Box
          onClick={() => {}}
          sx={{
            marginLeft: "14px",
            marginBottom: "62px",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginRight: isLeftSidebarOpen ? "116px" : "30px",
              marginBottom: { xs: "30px", lg: "0" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "32px",
                lineHeight: "125%",
                color: "#fff",
                letterSpacing: "0.2px",
                marginBottom: "32px",
              }}
            >
              Settings
            </Typography>
            {tabs.map((tab) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  transition: "all 250ms ease",
                  width: "270px",
                  height: "52px",
                  padding: "13px 24px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background:
                    currentTabSelected?.id === tab?.id
                      ? "rgba(255, 130, 0, 1)"
                      : "trabsparent",
                  "&:hover": {
                    background:
                      currentTabSelected?.id === tab?.id
                        ? "rgba(255, 130, 0, 0.8)"
                        : "",
                  },
                  "&:hover p": {
                    color:
                      currentTabSelected?.id !== tab?.id
                        ? "rgba(255, 130, 0, 1)"
                        : "",
                  },
                }}
                onClick={() => setCurrentTabSelected(tab)}
                key={tab.id}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "140%",
                    transition: "all 250ms ease",
                    color:
                      currentTabSelected?.id === tab?.id ? "#000" : "#9E9E9E",
                    letterSpacing: "0.2px",
                  }}
                >
                  {tab?.name}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            {currentTabSelected?.id === 1 && <AccountTab />}
            {currentTabSelected?.id === 2 && <SecurityTab />}
            {currentTabSelected?.id === 3 && <WalletTab />}
            {currentTabSelected?.id === 4 && <SocialMediaTab />}
            {currentTabSelected?.id === 5 && <PrivacyAndSafetyTab />}
            {currentTabSelected?.id === 6 && <NotificationTab />}
          </Box>
        </Box>
      </Box>
      <FooterComponent />
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
      <Box sx={{ margin: " 0 0 0 154px" }}></Box>

      <Dialog
        classes={{ paper: classes.paper }}
        open={twoFactorModal}
        onClose={() => {
          settwoFactorModal(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "24px",
            backgroundColor: "#434343",
            maxWidth: 870,
          },
        }}
      >
        <DialogContent
          sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
        >
          <Box
            sx={{
              padding: "31px 36px",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "70%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Two Factor Authentication Code
              </Typography>
            </Box>
            <Box display={"flex"} sx={{ marginBottom: "28px" }}>
              <TextField
                value={code}
                type="number"
                onChange={(e) => setcode(e.target.value)}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
            </Box>

            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF1C51",
                  padding: "5px 50px",
                  borderRadius: "30px",
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  fontSize: "20px",
                  fontWeight: "500",
                  bosmhadow: "none",
                  "&:hover": {
                    backgroundColor: "#FF1C51 !important",
                    boxShadow: "none",
                  },
                }}
                onClick={() => twoFactorVerification()}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <IconButton
          onClick={() => {
            settwoFactorModal(false);
          }}
          className={classes.customizedButton}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>

      <Dialog
        classes={{ paper: classes.paper }}
        open={backStageModal}
        onClose={() => {
          setbackStageModal(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "24px",
            backgroundColor: "#434343",
            maxWidth: 870,
          },
        }}
      >
        <DialogContent
          sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
        >
          <Box
            sx={{
              padding: "31px 36px",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "70%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Back Stage Pass
              </Typography>
            </Box>
            <Box display={"flex"} sx={{ marginBottom: "28px" }}>
              <FormControl
                variant="standard"
                fullWidth
                className="steper-label"
              >
                <InputLabel shrink htmlFor="bootstrap-input">
                  Instant Price ($)
                </InputLabel>
                <Select
                  inputProps={{ classes: { icon: classes.icon } }}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={NFTPrice}
                  onChange={(e) => setNFTPrice(e.target.value)}
                  className="steper-select"
                  sx={{
                    background: "transparent",
                    border: "0px solid #ff1c51 !important",
                    borderRadius: "10px !important",
                    color: "#fff !important",
                    fontSize: "1em !important",
                    fontWeight: "500 !important",
                    "&:before": {
                      borderBottom: "1px solid #ff1c51",
                    },
                    "&:after": {
                      borderBottom: "1px solid #ff1c51",
                    },
                    "&:hover": {
                      "&& fieldset": {
                        border: "0px solid #ff1c51",
                        padding: "0px 5px",
                      },
                    },
                  }}
                  MenuProps={{ classes: { paper: classes.select } }}
                >
                  <MenuItem value={0}>Choose Pricing</MenuItem>
                  {pricingData.map((data, index) => {
                    return (
                      <MenuItem value={data.value} key={index++}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>

            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF1C51",
                  padding: "5px 50px",
                  borderRadius: "30px",
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  fontSize: "20px",
                  fontWeight: "500",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#FF1C51 !important",
                    boxShadow: "none",
                  },
                }}
                onClick={createbackStagePass}
              >
                Create
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <IconButton
          onClick={() => {
            setbackStageModal(false);
          }}
          className={classes.customizedButton}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>

      <Dialog
        classes={{ paper: classes.paper }}
        open={blockUser}
        onClose={() => {
          setblockUser(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "24px",
            backgroundColor: "#434343",
            maxWidth: 870,
          },
        }}
      >
        <DialogContent
          sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
        >
          <Box
            sx={{
              padding: "31px 36px",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "70%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Blocked User List
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {blockedUserList.map((artist, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.16)",
                      padding: "30px 35px",
                      borderRadius: "19px",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "rgb(24 24 24)",
                      },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "3px 3%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "110px",
                        position: "relative",
                        textAlign: "center",
                        height: "110px",
                        background: `url(${
                          artist.profilePicture
                            ? artist.profilePicture
                            : dummyImage
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "100%",
                        marginBottom: "0.4em",
                      }}
                    >
                      {/* <Box className={classes.online1} /> */}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        "& > div": {
                          margin: "0.2em",
                        },
                      }}
                    >
                      <Box>
                        {" "}
                        <Typography className={classes.userName}>
                          {artist.name
                            ? artist.name.length > 16
                              ? artist.name.slice(0, 13) + "..."
                              : artist.name
                            : artist.email.length > 10
                            ? artist.email.slice(0, 10) + "..."
                            : artist.email}
                        </Typography>
                      </Box>
                      <Box className={classes.followersButtonSection}>
                        <Button
                          onClick={() => unblockUser(artist._id)}
                          variant="contained"
                          className={classes.buttonFollow}
                        >
                          Unblock
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </DialogContent>
        <IconButton
          onClick={() => {
            setblockUser(false);
          }}
          className={classes.customizedButton}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>
    </Box>
  );
};

export default SettingScreen;
