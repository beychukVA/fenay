import React, { useState } from "react";
import { useStyles } from "../../../../constant/customStyle";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const SocialMediaTab = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  const [values, setValues] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
    soundCloud: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
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
          marginBottom: "48px",
        }}
      >
        Social media
      </Typography>
      {/** Inputs 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-instagram-input"
            label="Instagram"
            type="text"
            variant="outlined"
            onChange={handleChange("instagram")}
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
                color: "#FF8200",
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
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            marginBottom: "48px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-facebook-input"
            label="Facebook"
            type="text"
            variant="outlined"
            onChange={handleChange("facebook")}
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
                color: "#FF8200",
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
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />
        </FormControl>
      </Box>
      {/** Inputs 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-twitter-input"
            label="Twitter"
            type="text"
            variant="outlined"
            onChange={handleChange("twitter")}
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
                color: "#FF8200",
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
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            marginBottom: "48px",
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-youtube-input"
            label="Youtube"
            type="text"
            variant="outlined"
            onChange={handleChange("youtube")}
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
                color: "#FF8200",
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
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />
        </FormControl>
      </Box>
      {/** Inputs 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-soundCloud-input"
            label="SoundCloud"
            type="text"
            variant="outlined"
            onChange={handleChange("soundCloud")}
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
                color: "#FF8200",
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
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />
        </FormControl>
        <Box
          sx={{
            marginLeft: matches ? "0" : "16px",
            width: { xs: "100%", lg: "366px" },
          }}
        />
      </Box>
      <Button
        sx={{
          width: "175px",
          height: "52px",
          padding: "16px 71px",
          background: "rgba(255, 130, 0, 1)",
          borderRadius: "50px",
          transition: "all 250ms ease",
          "&:hover": {
            background: "rgba(255, 130, 0, 0.8)",
          },
          marginBottom: "64px",
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
            textTransform: "capitalize",
          }}
        >
          Save
        </Typography>
      </Button>
    </Box>
  );
};
