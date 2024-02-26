import React from "react";
import { Box, Typography } from "@mui/material";

export const MenuCard = ({ option, menuSelected, setMenuSelected }) => {
  const isSelected = option?.id === menuSelected?.id;

  return (
    <Box
      onClick={() => setMenuSelected(option)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "746px",
        background: isSelected ? "#121318" : "#2A2B2F",
        border: isSelected ? "2px solid #FF8200" : "none",
        cursor: "pointer",
        borderRadius: "10px",
        padding: "15px 20px",
        "&:not(:first-of-type)": {
          marginTop: "32px",
        },
        transition: "all 250ms ease",
        "&:hover": {
          background: isSelected ? "#121318" : "rgba(255, 130, 0, 0.8)",
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
          marginBottom: "4px",
        }}
      >
        {option?.name}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "140%",
          color: "#D5D4D8",
          letterSpacing: "0.2px",
        }}
      >
        {option?.desc}
      </Typography>
    </Box>
  );
};
