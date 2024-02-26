import React from "react";
import { Box, MenuItem, TextField } from "@mui/material";
import ArrowChevronDownIcon from "../../../assets/ArrowChevronDownIcon.svg";

export const Select = ({
  options,
  selectedOption,
  handleOptionChange,
  borderRadius = "8px",
  padding = "9px 36px 9px 10px",
  border = true,
  fontFamily = "Urbanist",
  fontStyle = "normal",
  fontWeight = "600",
  fontSize = "12px",
  lineHeight = "14px",
  color = "#fff",
}) => {
  return (
    <Box
      sx={{
        // width: { xs: "100%", lg: "366px" },
        width: "fit-content",
        "& .MuiFormControl-root": {
          //   width: "100%",
        },
        "& #outlined-gender-input": {
          padding: padding,
          fontFamily: fontFamily,
          fontStyle: fontStyle,
          fontWeight: fontWeight,
          fontSize: fontSize,
          lineHeight: lineHeight,
          color: color,
        },
      }}
    >
      <TextField
        id="outlined-gender-input"
        select
        value={selectedOption}
        variant="outlined"
        onChange={handleOptionChange}
        sx={{
          "& label.MuiFormLabel-filled": {
            top: "-16px !important",
            left: "-16px !important",
            fontFamily: "Work Sans !important",
            fontStyle: "normal !important",
            fontWeight: "500 !important",
            fontSize: "16px !important",
            lineHeight: "140% !important",
            letterSpacing: "0.2px !important",
          },
          "& label.Mui-focused": {
            color: "#FF8200 !important",
            top: "-16px !important",
            left: "-16px !important",
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "140%",
            letterSpacing: "0.2px",
          },
          "& input": {
            padding: "0",
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "14px",
            color: "#fff",
          },
          "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
            {
              marginLeft: "0",
            },
          "& .MuiSvgIcon-root": {
            width: "16px",
            height: "16px",
            marginTop: "4px",
            WebkitMask: `url(${ArrowChevronDownIcon}) center center / 16px 16px no-repeat`,
            mask: `url(${ArrowChevronDownIcon}) center center / 16px 16px no-repeat`,
            "&:not(:hover)": {
              background: "rgba(255, 255, 255, 1)",
            },
            "&:hover": {
              background: "#FF8200",
            },
          },
          //   padding: "9px 0 9px 10px",
          border: border ? "1px solid rgba(255, 255, 255, 0.4)" : "none",
          borderRadius: borderRadius,
        }}
      >
        {options.map((option) => (
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
  );
};
