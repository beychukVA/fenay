import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Logo from "../../assets/LogoIcon.svg";
import LinkedInIcon from "../../assets/Social/LinkedInIcon.svg";
import TelegramIcon from "../../assets/Social/TelegramIcon.svg";
import DiscordIcon from "../../assets/Social/DiscordIcon.svg";
import InstagramIcon from "../../assets/Social/InstagramIcon.svg";
import TwitterIcon from "../../assets/Social/TwitterIcon.svg";

const pages = [
  {
    id: 1,
    name: "Home",
    onClick: () => (window.location.href = "/"),
  },
  {
    id: 2,
    name: "Community",
    onClick: () => (window.location.href = "/community"),
  },
  {
    id: 3,
    name: "Explore",
    onClick: () => (window.location.href = "/explore"),
  },
  {
    id: 4,
    name: "Contact",
    link: "mailto:contact@finay.com",
    onClick: () => (window.location.href = `mailto:contact@finay.com`),
  },
  {
    id: 5,
    name: "Terms",
    onClick: () =>
      window.open("https://help.finay.com/pages/2/terms-of-service", "_blank"),
  },
  {
    id: 6,
    name: "Privacy",
    onClick: () =>
      window.open("https://help.finay.com/pages/1/privacy-policy", "_blank"),
  },
];

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    onClick: () => (window.location.href = "/"),
    icon: LinkedInIcon,
  },
  {
    id: 2,
    name: "Telegram",
    onClick: () => (window.location.href = "/"),
    icon: TelegramIcon,
  },
  {
    id: 3,
    name: "Discord",
    onClick: () => (window.location.href = "/"),
    icon: DiscordIcon,
  },
  {
    id: 4,
    name: "Instagram",
    onClick: () =>
      window.open(
        "https://instagram.com/finayinc?igshid=YmMyMTA2M2Y=",
        "_blank"
      ),
    icon: InstagramIcon,
  },
  {
    id: 5,
    name: "Twitter",
    onClick: () => window.open("https://twitter.com/finay", "_blank"),
    icon: TwitterIcon,
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        height: "264px",
        background: "#000",
        padding: { xs: "32px 32px 29px 32px", lg: "32px 156px 29px 156px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "16px",
        }}
      >
        <img src={Logo} alt="logo" />
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "140%",
            color: "#fff",
            letterSpacing: "0.2px",
            marginLeft: "16px",
          }}
        >
          Finay
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", lg: "flex-start" },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "140%",
            color: "rgba(255, 255, 255, 0.8)",
            letterSpacing: "0.2px",
            paddingBottom: "32px",
          }}
        >
          The only marketplace selling unreleased music, music videos, stems,
          remixes, royalty rights and more as downloadable files packed into
          NFTs
        </Typography>
        <Box
          sx={{
            padding: { xs: "0 0 0 0", lg: "0 147px 66px 147px" },
            marginLeft: { xs: "0", lg: "auto" },
          }}
        >
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& :not(:first-of-type)": {
                marginLeft: { xs: "17px", lg: "37px" },
              },
            }}
          >
            {pages.map((page) => (
              <Box
                key={`${page.name}${page.id}`}
                sx={{ cursor: "pointer" }}
                onClick={page?.onClick}
              >
                <ListItem sx={{ margin: "0", padding: "0" }}>
                  <ListItemText
                    sx={{ margin: "0" }}
                    primary={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Urbanist",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "14px",
                            lineHeight: "130%",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 250ms ease",
                            "&:hover": {
                              color: "#FF8200",
                            },
                          }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {page?.name}
                        </Typography>
                      </div>
                    }
                  />
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          borderTop: "1px solid rgba(255, 255, 255, 0.5)",
          paddingTop: { xs: "10px", lg: "24px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "130%",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          © 2022 Finay. All Rights Reserved.
        </Typography>
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& :not(:first-of-type)": {
              marginLeft: "32px",
            },
            marginTop: { xs: "0", lg: "5px" },
            marginLeft: "auto",
          }}
        >
          {socials.map((social) => (
            <Box
              key={`${social.name}${social.id}`}
              sx={{ cursor: "pointer" }}
              onClick={social?.onClick}
            >
              <ListItem sx={{ margin: "0", padding: "0" }}>
                <ListItemText
                  sx={{ margin: "0" }}
                  primary={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: "24px",
                          height: "24px",
                          transition: "all 250ms ease",
                          WebkitMask: `url(${social?.icon}) center center / 24px 24px no-repeat`,
                          mask: `url(${social?.icon}) center center / 24px 24px no-repeat`,
                          "&:not(:hover)": {
                            background: "#fff",
                          },
                          "&:hover": {
                            background: "#FF8200",
                          },
                        }}
                      />
                    </div>
                  }
                />
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
