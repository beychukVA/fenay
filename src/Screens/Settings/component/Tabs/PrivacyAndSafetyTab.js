import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDownIcon from "../../../../assets/ArrowDownIcon.svg";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const blockedUsers = [
  {
    img: dummyImage,
    name: "Yolotli Bailey",
    username: "@yolotli_bailey",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis laborum obcaecati quidem quam minus minima fugit facere sint? Eos sequi animi temporibus amet illo perspiciatis cupiditate fugit est iusto sapiente! Repellat vero aliquid earum, odio ratione porro sit dolorum possimus, vel quas eligendi veniam? Veniam ipsum numquam dolore ullam? Et obcaecati eius voluptatem blanditiis tempore modi quidem illum distinctio repudiandae. Doloribus nihil nobis earum. Itaque molestias, minus atque illo reiciendis veniam nihil quisquam eos corporis reprehenderit ipsum tempore delectus quas. Deserunt placeat pariatur distinctio facere, accusamus quae adipisci delectus culpa! Hic molestias, necessitatibus assumenda at odio fuga amet quo quisquam aperiam libero iure, quasi dignissimos nostrum sapiente sint eum vel facere ad dolore quos excepturi dicta saepe voluptates!In, ratione? Voluptate, aliquid quisquam deleniti vitae quas perferendis quibusdam fugit blanditiis eius excepturi praesentium quaerat voluptatem nisi ab hic voluptatibus cum sit modi ad provident veritatis ea accusamus tempore? Hic, labore?",
  },
  {
    img: dummyImage,
    name: "Yolotli Bailey",
    username: "@yolotli_bailey",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis laborum obcaecati quidem quam minus minima fugit facere sint? Eos sequi animi temporibus amet illo perspiciatis cupiditate fugit est iusto sapiente! Repellat vero aliquid earum, odio ratione porro sit dolorum possimus, vel quas eligendi veniam? Veniam ipsum numquam dolore ullam? Et obcaecati eius voluptatem blanditiis tempore modi quidem illum distinctio repudiandae. Doloribus nihil nobis earum. Itaque molestias, minus atque illo reiciendis veniam nihil quisquam eos corporis reprehenderit ipsum tempore delectus quas. Deserunt placeat pariatur distinctio facere, accusamus quae adipisci delectus culpa! Hic molestias, necessitatibus assumenda at odio fuga amet quo quisquam aperiam libero iure, quasi dignissimos nostrum sapiente sint eum vel facere ad dolore quos excepturi dicta saepe voluptates!In, ratione? Voluptate, aliquid quisquam deleniti vitae quas perferendis quibusdam fugit blanditiis eius excepturi praesentium quaerat voluptatem nisi ab hic voluptatibus cum sit modi ad provident veritatis ea accusamus tempore? Hic, labore?",
  },
  {
    img: dummyImage,
    name: "Yolotli Bailey",
    username: "@yolotli_bailey",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis laborum obcaecati quidem quam minus minima fugit facere sint? Eos sequi animi temporibus amet illo perspiciatis cupiditate fugit est iusto sapiente! Repellat vero aliquid earum, odio ratione porro sit dolorum possimus, vel quas eligendi veniam? Veniam ipsum numquam dolore ullam? Et obcaecati eius voluptatem blanditiis tempore modi quidem illum distinctio repudiandae. Doloribus nihil nobis earum. Itaque molestias, minus atque illo reiciendis veniam nihil quisquam eos corporis reprehenderit ipsum tempore delectus quas. Deserunt placeat pariatur distinctio facere, accusamus quae adipisci delectus culpa! Hic molestias, necessitatibus assumenda at odio fuga amet quo quisquam aperiam libero iure, quasi dignissimos nostrum sapiente sint eum vel facere ad dolore quos excepturi dicta saepe voluptates!In, ratione? Voluptate, aliquid quisquam deleniti vitae quas perferendis quibusdam fugit blanditiis eius excepturi praesentium quaerat voluptatem nisi ab hic voluptatibus cum sit modi ad provident veritatis ea accusamus tempore? Hic, labore?",
  },
];

const permissions = [
  {
    value: "Public",
    label: "Public",
  },
  {
    value: "Private",
    label: "Private",
  },
];

export const PrivacyAndSafetyTab = () => {
  const [audience, setAudience] = useState({
    isAudienceOpen: false,
    protectPosts: false,
  });
  const [block, setBlock] = useState({
    isBlockOpen: false,
  });
  const [message, setMessage] = useState({
    isMessageOpen: false,
    fromEveryone: false,
    readReceipts: true,
  });
  const [live, setLive] = useState({
    isLiveOpen: false,
    saveLiveStream: true,
  });
  const [profile, setProfile] = useState({
    isProfileOpen: false,
    showPosts: "Public",
    showMedia: "Public",
    showSupporterList: "Public",
    showContactInfo: "Public",
  });
  const [discoverability, setDiscoverability] = useState({
    isDiscoverabilityOpen: false,
    anyoneRequest: false,
    onlyMitualConnection: true,
    syncAddressBook: false,
  });

  console.log("discoverability: ", discoverability);

  const toggleAudienceTab = () =>
    setAudience({ ...audience, isAudienceOpen: !audience?.isAudienceOpen });

  const handleAudienceChange = (prop) => (event) =>
    setAudience({ ...audience, [prop]: event.target.checked });

  const toggleBlockTab = () =>
    setBlock({ ...block, isBlockOpen: !block?.isBlockOpen });

  const toggleMessageTab = () =>
    setMessage({ ...message, isMessageOpen: !message?.isMessageOpen });

  const handleMessageChange = (prop) => (event) =>
    setMessage({ ...message, [prop]: event.target.checked });

  const toggleLiveTab = () =>
    setLive({ ...live, isLiveOpen: !live?.isLiveOpen });

  const handleLiveChange = (prop) => (event) =>
    setLive({ ...live, [prop]: event.target.checked });

  const toggleProfileTab = () =>
    setProfile({ ...profile, isProfileOpen: !profile?.isProfileOpen });

  const handleProfileChange = (prop) => (event) =>
    setProfile({ ...profile, [prop]: event.target.value });

  const toggleDiscoverabilityTab = () =>
    setDiscoverability({
      ...discoverability,
      isDiscoverabilityOpen: !discoverability?.isDiscoverabilityOpen,
    });

  const handleDiscoverabilityChange = (prop) => (event) =>
    setDiscoverability({ ...discoverability, [prop]: event.target.checked });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "521px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "140%",
          color: "#fff",
          letterSpacing: "0.2px",
          marginBottom: "22px",
        }}
      >
        Privacy
      </Typography>

      {/** Audience */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: audience?.isAudienceOpen
            ? { xs: "240px", sm: "220px", md: "215px" }
            : "68px",
        }}
      >
        <Box
          onClick={() => toggleAudienceTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Audience and tagging
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                audience?.isAudienceOpen ? "rotateX(-180deg)" : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "25px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.1em",
              marginBottom: "15px",
              maxWidth: "333px",
            }}
          >
            Manage what information you allow other people on Finay to see.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              checked={audience?.protectPosts}
              onChange={handleAudienceChange("protectPosts")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "140%",
                  color: "#fff",
                  letterSpacing: "0.1em",
                }}
              >
                Protect your posts
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "13px",
                  lineHeight: "140%",
                  color: "#fff",
                  letterSpacing: "0.1em",
                }}
              >
                Only show your posts to people who follow you
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/** Block */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          background: "#2A2B2F",
          borderRadius: "10px",
          overflow: "hidden",
          padding: "20px 25px 20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          maxHeight: "364px",
          height: block?.isBlockOpen
            ? blockedUsers?.length > 0
              ? blockedUsers?.length === 1
                ? "265px"
                : "364px"
              : "163px"
            : "68px",
        }}
      >
        <Box
          onClick={() => toggleBlockTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Block
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                block?.isBlockOpen ? "rotateX(-180deg)" : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "14px",
            width: "100%",
            maxHeight: "280px",
            height: "fit-content",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.1em",
              marginBottom: "20px",
            }}
          >
            Manage the accounts that you’ve blocked.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
              overflowX: "hidden",
              overflowY: blockedUsers?.length === 1 ? "hidden" : "auto",
              paddingRight: "5px",
            }}
          >
            {blockedUsers && blockedUsers.length > 0 ? (
              blockedUsers.map((user) => (
                <Box
                  sx={{
                    width: "100%",
                    borderBottom: "1px solid rgba(71, 70, 70, 0.56)",
                    marginBottom: "18px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: "100%",
                      marginBottom: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "48px",
                        height: "48px",
                        background: `url(${user?.img})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Urbanist",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "18px",
                          lineHeight: "140%",
                          color: "#fff",
                          letterSpacing: "0.2px",
                        }}
                      >
                        {user?.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Urbanist",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "13px",
                          lineHeight: "140%",
                          color: "#fff",
                          letterSpacing: "0.2px",
                        }}
                      >
                        {user?.username}
                      </Typography>
                    </Box>
                    <Button
                      sx={{
                        padding: "8px 20px",
                        border: "1px solid rgba(234, 67, 53, 0.6)",
                        borderRadius: "80px",
                        marginLeft: "auto",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Urbanist",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "140%",
                          color: "#EA3B56",
                          letterSpacing: "0.2px",
                          textTransform: "capitalize",
                        }}
                      >
                        Blocked
                      </Typography>
                    </Button>
                  </Box>
                  <Typography
                    sx={{
                      width: { xs: "335px", sm: "400px" },
                      height: "40px",
                      fontFamily: "Work Sans",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.6)",
                      letterSpacing: "0.1em",
                      marginBottom: "19px",
                      overflow: "hidden",
                      position: "relative",
                      lineHeight: "20px",
                      maxHeight: "40px",
                      textOverflow: "ellipsis",
                      textAlign: { xs: "left", md: "justify" },
                      paddingRight: "15px",
                      "&:before": {
                        content: "'…'",
                        position: "absolute",
                        right: "0",
                        bottom: "0",
                      },
                      "&:after": {
                        content: "''",
                        position: "absolute",
                        right: "0",
                        width: "5px",
                        height: "5px",
                        marginTop: "10px",
                        background: "#fff",
                      },
                    }}
                  >
                    {user?.desc}
                  </Typography>
                </Box>
              ))
            ) : (
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "140%",
                    color: "#EA3B56",
                    letterSpacing: "0.2px",
                  }}
                >
                  Block list is empty
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {/** Message */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: message?.isMessageOpen
            ? { xs: "245px", sm: "220px", md: "215px" }
            : "68px",
        }}
      >
        <Box
          onClick={() => toggleMessageTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Message
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                message?.isMessageOpen ? "rotateX(-180deg)" : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "14px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.1em",
              marginBottom: "20px",
              maxWidth: "333px",
            }}
          >
            Manage who can message you directly
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              checked={message?.fromEveryone}
              onChange={handleMessageChange("fromEveryone")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.1em",
              }}
            >
              Allow message requests from everyone
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              checked={message?.readReceipts}
              onChange={handleMessageChange("readReceipts")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.1em",
              }}
            >
              Show read receipts
            </Typography>
          </Box>
        </Box>
      </Box>
      {/** Live */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: live?.isLiveOpen
            ? { xs: "310px", sm: "250px", md: "229px" }
            : "68px",
        }}
      >
        <Box
          onClick={() => toggleLiveTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Live
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                live?.isLiveOpen ? "rotateX(-180deg)" : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "14px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.1em",
              marginBottom: "21px",
              maxWidth: "333px",
            }}
          >
            Manage your live streaming recordings
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              checked={live?.saveLiveStream}
              onChange={handleLiveChange("saveLiveStream")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "140%",
                  color: "#fff",
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                }}
              >
                Save the live stream to the Recorded
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "140%",
                  color: "rgba(255, 255, 255, 0.85)",
                  letterSpacing: "0.1em",
                }}
              >
                Save the live stream to the recorded section of Backstage Pass.
                From there who ever have access to backstage password they can
                see the recorded video anytime.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/** Profile */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: profile?.isProfileOpen
            ? { xs: "565px", sm: "550px" }
            : "68px",
        }}
      >
        <Box
          onClick={() => toggleProfileTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Profile
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                profile?.isProfileOpen ? "rotateX(-180deg)" : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "14px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.1em",
              marginBottom: "50px",
            }}
          >
            Manage who can see your profile information
          </Typography>
          {/** Posts */}
          <Box
            sx={{
              marginBottom: "50px",
              width: "100%",
              "& .MuiFormControl-root": {
                width: "100%",
              },
              "& #outlined-posts-input": {
                padding: "0",
              },
            }}
          >
            <TextField
              id="outlined-posts-input"
              label="Who can see your posts?"
              select
              value={profile?.showPosts}
              variant="outlined"
              onChange={handleProfileChange("showPosts")}
              sx={{
                "& label.MuiFormLabel-filled": {
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans !important",
                  fontStyle: "normal !important",
                  fontWeight: "500 !important",
                  fontSize: "16px !important",
                  lineHeight: "130% !important",
                },
                "& label.Mui-focused": {
                  color: "#FF8200 !important",
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "130%",
                },
                "& input": {
                  padding: "0",
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "rgba(255, 255, 255, 0.8)",
                },
                "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                  {
                    marginLeft: "0",
                  },
                padding: "14px 20px",
                border: "1px solid #515151",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              {permissions.map((option) => (
                <MenuItem
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "rgba(255, 130, 0, 0.16)",
                    },
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/** Media */}
          <Box
            sx={{
              marginBottom: "50px",
              width: "100%",
              "& .MuiFormControl-root": {
                width: "100%",
              },
              "& #outlined-media-input": {
                padding: "0",
              },
            }}
          >
            <TextField
              id="outlined-media-input"
              label="Who can see your media?"
              select
              value={profile?.showMedia}
              variant="outlined"
              onChange={handleProfileChange("showMedia")}
              sx={{
                "& label.MuiFormLabel-filled": {
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans !important",
                  fontStyle: "normal !important",
                  fontWeight: "500 !important",
                  fontSize: "16px !important",
                  lineHeight: "130% !important",
                },
                "& label.Mui-focused": {
                  color: "#FF8200 !important",
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "130%",
                },
                "& input": {
                  padding: "0",
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "rgba(255, 255, 255, 0.8)",
                },
                "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                  {
                    marginLeft: "0",
                  },
                padding: "14px 20px",
                border: "1px solid #515151",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              {permissions.map((option) => (
                <MenuItem
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "rgba(255, 130, 0, 0.16)",
                    },
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/** Supporter List */}
          <Box
            sx={{
              marginBottom: "50px",
              width: "100%",
              "& .MuiFormControl-root": {
                width: "100%",
              },
              "& #outlined-supporter-list-input": {
                padding: "0",
              },
            }}
          >
            <TextField
              id="outlined-supporter-list-input"
              label="Who can see your supporter list?"
              select
              value={profile?.showSupporterList}
              variant="outlined"
              onChange={handleProfileChange("showSupporterList")}
              sx={{
                "& label.MuiFormLabel-filled": {
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans !important",
                  fontStyle: "normal !important",
                  fontWeight: "500 !important",
                  fontSize: "16px !important",
                  lineHeight: "130% !important",
                },
                "& label.Mui-focused": {
                  color: "#FF8200 !important",
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "130%",
                },
                "& input": {
                  padding: "0",
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "rgba(255, 255, 255, 0.8)",
                },
                "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                  {
                    marginLeft: "0",
                  },
                padding: "14px 20px",
                border: "1px solid #515151",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              {permissions.map((option) => (
                <MenuItem
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "rgba(255, 130, 0, 0.16)",
                    },
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/** Contact info */}
          <Box
            sx={{
              marginBottom: "50px",
              width: "100%",
              "& .MuiFormControl-root": {
                width: "100%",
              },
              "& #outlined-contact-info-input": {
                padding: "0",
              },
            }}
          >
            <TextField
              id="outlined-contact-info-input"
              label="Who can see your contact info?"
              select
              value={profile?.showContactInfo}
              variant="outlined"
              onChange={handleProfileChange("showContactInfo")}
              sx={{
                "& label.MuiFormLabel-filled": {
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans !important",
                  fontStyle: "normal !important",
                  fontWeight: "500 !important",
                  fontSize: "16px !important",
                  lineHeight: "130% !important",
                },
                "& label.Mui-focused": {
                  color: "#FF8200 !important",
                  top: "-16px !important",
                  left: "-16px !important",
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "130%",
                },
                "& input": {
                  padding: "0",
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.2px",
                  color: "rgba(255, 255, 255, 0.8)",
                },
                "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                  {
                    marginLeft: "0",
                  },
                padding: "14px 20px",
                border: "1px solid #515151",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              {permissions.map((option) => (
                <MenuItem
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "rgba(255, 130, 0, 0.16)",
                    },
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </Box>
      {/** Discoverability and contacts */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "hidden",
          background: "#2A2B2F",
          borderRadius: "10px",
          padding: "20px 32px",
          marginBottom: "24px",
          width: "100%",
          transition: "height 500ms ease",
          height: discoverability?.isDiscoverabilityOpen
            ? { xs: "565px", sm: "480px" }
            : "68px",
        }}
      >
        <Box
          onClick={() => toggleDiscoverabilityTab()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid #474646",
            paddingBottom: "20px",
            width: "100%",
            cursor: "pointer",
            "&:hover .arrow-down": {
              background: "#FF8200",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
            }}
          >
            Discoverability and contacts
          </Typography>
          <Box
            className="arrow-down"
            sx={{
              marginLeft: "auto",
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowDownIcon}) center center / 24px 24px no-repeat`,
              transition: "all 250ms ease",
              transform: `${
                discoverability?.isDiscoverabilityOpen
                  ? "rotateX(-180deg)"
                  : "rotateX(0deg)"
              }`,
              "&:not(:hover)": {
                background: "rgba(255, 255, 255, 1)",
              },
              "&:hover": {
                background: "#FF8200",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: "14px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.1em",
              marginBottom: "20px",
              maxWidth: "333px",
            }}
          >
            Control your discoverability setting and manage contacts you’ve
            imported.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              checked={discoverability?.anyoneRequest}
              onChange={handleDiscoverabilityChange("anyoneRequest")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.1em",
              }}
            >
              Anyone can send me a request
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Checkbox
              checked={discoverability?.onlyMitualConnection}
              onChange={handleDiscoverabilityChange("onlyMitualConnection")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.1em",
              }}
            >
              Only a mitual connection can send me a request
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "34px",
            }}
          >
            <Checkbox
              checked={discoverability?.syncAddressBook}
              onChange={handleDiscoverabilityChange("syncAddressBook")}
              sx={{
                "&.MuiCheckbox-root .MuiSvgIcon-root": {
                  color: "#FF8200",
                },
                "&": {
                  padding: "0",
                  marginRight: "8px",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "140%",
                color: "#fff",
                letterSpacing: "0.1em",
              }}
            >
              Sync address book contacts
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{
            width: "100%",
            padding: "15px 0",
            maxWidth: "409px",
            background: "#FF8200",
            border: "1px solid #FF8200",
            borderRadius: "30px",
            marginBottom: "24px",
            "&:hover": {
              background: "rgba(255, 130, 0, 0.8)",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "140%",
              color: "#fff",
              letterSpacing: "0.2px",
              textTransform: "none",
            }}
          >
            Remove all contacts
          </Typography>
        </Button>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "140%",
            color: "#fff",
            letterSpacing: "0.1em",
          }}
        >
          Remove any contacts you’ve previously uploaded and turn off syncing
          with Finay on all devices. Please be aware that this takes a little
          time.
        </Typography>
      </Box>
    </Box>
  );
};
