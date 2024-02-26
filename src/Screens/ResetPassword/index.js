import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ResetPasswordSuccess } from "./ResetPasswordSuccess";
import { show_success, show_toast } from "../../helpers/toast";
import { useSearchParams } from "react-router-dom";

export const ResetPassword = () => {
  const [isResetPasswordSuccessfully, setResetPasswordSuccessfully] =
    useState(false);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [values, setValues] = useState({
    email: searchParams.get("email"), //get from link parameters
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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

  const changePasswordHandle = async () => {
    if (!values.email || !values.password) {
      show_toast("Please enter all fields");
      return;
    }
    if (handleValidation(values.password)) {
      return;
    }
    show_success("Password updated successfully!");
    setResetPasswordSuccessfully(true);

    // const response = await changePassword(values.email, values.password);
    // if (response?.data) {
    //   show_success("Password updated");
    // }
  };

  const handleClickShowPassword = (prop) => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.25)",
        zIndex: "0",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "-23px",
          bottom: "0",
          width: "282.54px",
          height: "287.17px",
          background: "#FF8200",
          opacity: "0.15",
          filter: "blur(109.707px)",
          zIndex: "1",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "-64px",
          right: "15%",
          width: "282.54px",
          height: "287.17px",
          background: "#FF8200",
          opacity: "0.15",
          filter: "blur(109.707px)",
          zIndex: "1",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "-31px",
          left: "15%",
          width: "282.54px",
          height: "287.17px",
          background: "#AD00FF",
          opacity: "0.15",
          filter: "blur(109.707px)",
          zIndex: "1",
        }}
      ></Box>
      {isResetPasswordSuccessfully ? (
        <ResetPasswordSuccess />
      ) : (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "382px",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "130%",
              color: "#fff",
              marginBottom: "13px",
            }}
          >
            Reset your password
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "150%",
              color: "#D5D4D8",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Your new password must be different to previously used passwords.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginBottom: "48px",
            }}
          >
            <FormControl
              sx={{
                marginBottom: "13px",
                width: "382px",
              }}
              variant="outlined"
            >
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{
                  "&.Mui-focused": {
                    color: "#FF8200",
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
                  "& .MuiSvgIcon-root": {
                    fill: "#9E9E9E",
                  },
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
            <Typography
              sx={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "130%",
                color: "#9E9E9E",
              }}
            >
              It should be more than 6+ characters
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginBottom: "128px",
            }}
          >
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 0",
                width: "100%",
                background: "#FF8200",
                borderRadius: "6px",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "#FF8200",
                  opacity: "0.8",
                },
              }}
              onClick={() => changePasswordHandle()}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#341B00",
                  textTransform: "none",
                }}
              >
                Reset
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "130%",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              © 2022 Finay. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
