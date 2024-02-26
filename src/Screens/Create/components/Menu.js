import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { MenuCard } from "./MenuCard";
import { ReviewAccountBanner } from "./ReviewAccountBanner";
import ArrowLeftWhite from "../../../assets/ArrowLeftWhite.svg";

export const Menu = ({ menu, menuSelected, setMenuSelected, setShowMenu }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Box
        onClick={() => navigate("/")}
        sx={{
          marginRight: "118px",
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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {/** Review Banner */}
        <ReviewAccountBanner />
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "42px",
            lineHeight: "50px",
            color: "#fff",
            letterSpacing: "0.2px",
            marginBottom: "32px",
            maxWidth: "398px",
            width: "100%",
          }}
        >
          Create your option as an artist
        </Typography>
        {/** Menu */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
            marginBottom: "48px",
          }}
        >
          {menu?.map((option) => (
            <MenuCard
              key={option?.id}
              option={option}
              menuSelected={menuSelected}
              setMenuSelected={setMenuSelected}
            />
          ))}
        </Box>
        {/** Button Create */}
        <Button
          onClick={() => setShowMenu(false)}
          sx={{
            padding: "16px 71.5px",
            background: "#FF8200",
            borderRadius: "50px",
            transition: "all 250ms ease",
            "&:hover": {
              background: "rgba(255, 130, 0, 0.8)",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "20px",
              color: "#000",
              textTransform: "none",
            }}
          >
            Next
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
