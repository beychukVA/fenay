import React from "react";
import {
  Box,
  FormControl,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

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

export const SongDetailAlbum = ({ values, handleChange }) => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <>
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
            id="outlined-album-input"
            label="Album name"
            type="text"
            variant="outlined"
            value={values?.album}
            onChange={handleChange("album")}
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
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
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
            id="outlined-album-genre-input"
            label="Album Genre"
            type="text"
            variant="outlined"
            value={values?.albumGenre}
            onChange={handleChange("albumGenre")}
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
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& input": {
                padding: "0 !important",
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#9E9E9E !important",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
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
            id="outlined-song-name-input"
            label="Songs Name"
            type="text"
            variant="outlined"
            value={values?.songName}
            onChange={handleChange("songName")}
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
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
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
            id="outlined-artist-input"
            label="Artist"
            type="text"
            variant="outlined"
            value={values?.artist}
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
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
              "& input": {
                padding: "0 !important",
                fontFamily: "Urbanist !important",
                fontStyle: "normal !important",
                fontWeight: "600 !important",
                fontSize: "14px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#9E9E9E !important",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
              padding: "15px 20px",
              border: "1px solid #6B6A6A",
              borderRadius: "10px",
              background: "#2C2C3D",
            }}
          />
        </FormControl>
      </Box>
      {/** Genre */}
      <Box
        sx={{
          marginBottom: "48px",
          width: { xs: "100%", lg: "746px" },
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
            border: "1px solid #6B6A6A",
            borderRadius: "10px",
            background: "#2C2C3D",
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
      {/** Description */}
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "140%",
          color: "#D5D4D8",
          letterSpacing: "0.2px",
          marginBottom: "6px",
        }}
      >
        Description
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "746px",
          height: "181px",
          background: "#2C2C3D",
          border: "1px solid #6B6A6A",
          borderRadius: "10px",
          padding: "15px 20px",
          marginBottom: "48px",
        }}
      >
        <FormControl
          sx={{
            width: "100%",
            height: "100%",
            // margin: "0 10px",
            "textarea::placeholder": {
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "140%",
              color: "rgba(255, 255, 255, 0.6)",
            },
          }}
          variant="outlined"
        >
          <TextareaAutosize
            maxRows={7}
            minRows={1}
            value={values?.description}
            placeholder="Songs description"
            onChange={handleChange("description")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              border: "none",
              outline: "none",
              borderRadius: "0",
              background: "inherit",
              color: "#9E9E9E",
              resize: "none",
              padding: "0 5px 0 0",
            }}
          />
        </FormControl>
      </Box>
    </>
  );
};
