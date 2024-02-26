import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PencilIcon from "../../../assets/PencilIcon.svg";

const genres = [
  {
    value: "Alternative",
    label: "Alternative",
  },
  {
    value: "Blues",
    label: "Blues",
  },
  {
    value: "Bollywood",
    label: "Bollywood",
  },
  {
    value: "Classical",
    label: "Classical",
  },
  {
    value: "Country",
    label: "Country",
  },
  {
    value: "EDM",
    label: "EDM",
  },
  {
    value: "Folk",
    label: "Folk",
  },
  {
    value: "Funk",
    label: "Funk",
  },
  {
    value: "Fusion",
    label: "Fusion",
  },
  {
    value: "HipHop",
    label: "HipHop",
  },
  {
    value: "Indie",
    label: "Indie",
  },
  {
    value: "Instrumental",
    label: "Instrumental",
  },
  {
    value: "Jazz",
    label: "Jazz",
  },
  {
    value: "K-Pop",
    label: "K-Pop",
  },
  {
    value: "Latin",
    label: "Latin",
  },
  {
    value: "Metal",
    label: "Metal",
  },
  {
    value: "Pop",
    label: "Pop",
  },
  {
    value: "Punk",
    label: "Punk",
  },
  {
    value: "R&B",
    label: "R&B",
  },
];

const prices = [
  {
    value: "$4.95",
    label: "$4.95",
  },
  {
    value: "$9.95",
    label: "$9.95",
  },
  {
    value: "$19.95",
    label: "$19.95",
  },
  {
    value: "$29.95",
    label: "$29.95",
  },
  {
    value: "$39.95",
    label: "$39.95",
  },
];

export const EditAssetsEvent = ({ event, setEditAssetsEvent }) => {
  const matches = useMediaQuery("(max-width:768px)");
  const [values, setValues] = useState({
    genre: "",
    songsName: "",
    artist: "",
    description: "",
    price: "",
    quantity: "",
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
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "140%",
          letterSpacing: "0.2px",
          color: "#fff",
          marginBottom: "27px",
        }}
      >
        Edit event
      </Typography>
      {/** Img */}
      <Box
        sx={{
          position: "relative",
          zIndex: "0",
          width: "175px",
          height: "168px",
          marginBottom: "48px",
        }}
      >
        <img
          src={event?.img}
          alt={event?.title}
          style={{
            width: "175px",
            height: "168px",
            zIndex: "1",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: "-12px",
            bottom: "0",
            zIndex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "39px",
            height: "38px",
            background: "#FF8200",
            borderRadius: "4px",
            transition: "all 250ms ease",
            cursor: "pointer",
            "&:hover": {
              background: "rgba(255, 130, 0, 0.8)",
            },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${PencilIcon}) center center / 24px 24px no-repeat`,
              mask: `url(${PencilIcon}) center center / 24px 24px no-repeat`,
              background: "#fff",
            }}
          />
        </Box>
      </Box>
      {/** Fields */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {/** Genre, Songs Name */}
        <Box
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
            "& .MuiFormControl-root": {
              width: "100%",
            },
            "& #outlined-genre-input": {
              padding: "0",
            },
          }}
        >
          <TextField
            id="outlined-genre-input"
            label="Genre"
            select
            value={values?.genre}
            variant="outlined"
            onChange={handleChange("genre")}
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
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
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
            {genres.map((option) => (
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
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
            marginLeft: { xs: "0", md: "16px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-songs-name-input"
            label="Songs Name"
            type="text"
            variant="outlined"
            onChange={handleChange("songsName")}
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
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {/** Artist, Description */}
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-artist-input"
            label="Artist"
            type="text"
            variant="outlined"
            onChange={handleChange("artist")}
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
            width: { xs: "100%", lg: "366px" },
            marginLeft: { xs: "0", md: "16px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-description-input"
            label="Description"
            type="text"
            variant="outlined"
            onChange={handleChange("description")}
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
      {/** Price, Quantity */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
            "& .MuiFormControl-root": {
              width: "100%",
            },
            "& #outlined-price-input": {
              padding: "0",
            },
          }}
        >
          <TextField
            id="outlined-price-input"
            label="Price"
            select
            value={values?.price}
            variant="outlined"
            onChange={handleChange("price")}
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
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#9E9E9E",
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
            {prices.map((option) => (
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
        <FormControl
          sx={{
            marginBottom: "48px",
            width: { xs: "100%", lg: "366px" },
            marginLeft: { xs: "0", md: "16px" },
          }}
          variant="outlined"
        >
          <TextField
            id="outlined-quantity-input"
            label="Quantity"
            type="text"
            variant="outlined"
            onChange={handleChange("quantity")}
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
      {/** Button Save */}
      <Button
        onClick={() => setEditAssetsEvent(false)}
        sx={{
          width: "100%",
          maxWidth: "380px",
          padding: "19px",
          background: "#FF8200",
          borderRadius: "40px",
          transition: "all 250ms ease",
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
            fontSize: "17px",
            lineHeight: "20px",
            color: "#000",
            textTransform: "none",
          }}
        >
          Save
        </Typography>
      </Button>
    </Box>
  );
};
