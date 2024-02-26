import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export const SecurityTab = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const [values, setValues] = useState({
    currentPassword: "",
    showCurrentPassword: false,
    password: "",
    showPassword: false,
    repeatPassword: "",
    showRepeatPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log("Security Values: ", values);

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
        Security
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
          <InputLabel
            htmlFor="outlined-adornment-current-password"
            sx={{
              "&.MuiInputLabel-root": {
                top: "0 !important",
                left: "0 !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#D5D4D8 !important",
              },
              "&.Mui-focused": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
              "&.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
            }}
          >
            Current Password
          </InputLabel>
          <OutlinedInput
            sx={{
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              "& input": {
                padding: "0",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
            }}
            autoComplete={false}
            id="outlined-adornment-current-password"
            type={values.showCurrentPassword ? "text" : "password"}
            value={values.currentPassword}
            onChange={handleChange("currentPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle current-password visibility"
                  onClick={() => handleClickShowPassword("showCurrentPassword")}
                  onMouseDown={(e) => handleMouseDownPassword(e)}
                  edge="end"
                >
                  {values.showCurrentPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelwidth={70}
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
          <InputLabel
            htmlFor="outlined-adornment-current-password"
            sx={{
              "&.MuiInputLabel-root": {
                top: "0 !important",
                left: "0 !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#D5D4D8 !important",
              },
              "&.Mui-focused": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
              "&.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
            }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            sx={{
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              "& input": {
                padding: "0",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
            }}
            autoComplete={false}
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword("showPassword")}
                  onMouseDown={(e) => handleMouseDownPassword(e)}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelwidth={70}
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
          marginBottom: "48px",
        }}
      >
        <FormControl
          sx={{
            width: { xs: "100%", lg: "366px" },
          }}
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-current-password"
            sx={{
              "&.MuiInputLabel-root": {
                top: "0 !important",
                left: "0 !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#D5D4D8 !important",
              },
              "&.Mui-focused": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
                color: "#FF8200 !important",
              },
              "&.MuiFormLabel-filled": {
                top: "-16px !important",
                left: "-16px !important",
                fontFamily: "Work Sans !important",
                fontStyle: "normal !important",
                fontWeight: "500 !important",
                fontSize: "16px !important",
                lineHeight: "140% !important",
                letterSpacing: "0.2px !important",
              },
            }}
          >
            Repeat Password
          </InputLabel>
          <OutlinedInput
            sx={{
              padding: "15px 20px",
              border: "1px solid #515151",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              "& input": {
                padding: "0",
              },
              "input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover":
                {
                  marginLeft: "0",
                },
            }}
            autoComplete={false}
            id="outlined-adornment-repeat-password"
            type={values.showRepeatPassword ? "text" : "password"}
            value={values.repeatPassword}
            onChange={handleChange("repeatPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle repeat-password visibility"
                  onClick={() => handleClickShowPassword("showRepeatPassword")}
                  onMouseDown={(e) => handleMouseDownPassword(e)}
                  edge="end"
                >
                  {values.showRepeatPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelwidth={70}
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
