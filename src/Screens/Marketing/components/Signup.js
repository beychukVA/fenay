import {
  Box,
  Button,
  ButtonBase,
  Stack,
  Typography,
  useMediaQuery,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AppleIcon from "../../../assets/Marketing/apple-icon.png";
import { show_toast } from "../../../helpers/toast";
import { AuthContext } from "../../../provider/AuthProvider/AuthContext";
import { Login, Register, VerifyEmail } from "../../../Services/Auth";
import { GoogleAuthLogin } from "../../../Services/User";
import { MarketingInput } from "./MarketingInput";
import AppleLogin from "react-apple-login";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Signup({ setCurrentModalView }) {
  const matches = useMediaQuery("(max-width:768px)");
  const foldMatches = useMediaQuery("(max-width:350px)");
  const { setCredentials } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [emailConfirmation, setEmailConfirmation] = useState(false);
  const [emailConfirmationCode, setemailConfirmationCode] = useState();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  const handleSignup = async () => {
    if (form.name === "" || form.email === "" || form.password === "") {
      show_toast("Please enter all fields");
      return;
    }

    // if (!termsAndCondition) {
    //     show_toast("Please accept Terms and Conditions");
    //     return;
    // }

    if (handleValidation(form.password)) {
      return;
    }
    try {
      const res = await Register(
        form.name,
        form.email,
        form.password,
        form.password
      );
      if (res?.status_msg === "User successfully registered") {
        // navigate("/login");
        setEmailConfirmation(true);
      }
    } catch (error) {
      show_toast(error.message);
    }
  };

  const handleEmailConfirmation = async () => {
    const res = await VerifyEmail(form.email, emailConfirmationCode);
    res.status_code === 200 && (await handleLogin(form.email, form.password));
  };

  const handleLogin = async () => {
    const login_res = await Login(form.email, form.password);
    if (login_res) {
      if (login_res.token) {
        setLocalStorage(login_res.token, form.name);
        // navigate("/", { replace: true });
        setCredentials(login_res.token);
        window.location.href = "/";
      }
    }
  };

  const setLocalStorage = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("login", true);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    document.title = "Finay";
    window.gapi.signin2.render("google_auth_button", {
      width: 180,
      height: 35,
      borderRadius: "16px",
      theme: "dark",
      onsuccess: async (res) => {
        const resGoogle = await GoogleAuthLogin({
          user: res.Ba,
          token: res.zc.id_token,
        });
        if (resGoogle.status_code === 200) {
          if (resGoogle.token) {
            setLocalStorage(resGoogle.token, res.Ru.Iv);
          }
          // navigate("/");
          window.location.href = "/";
        }
      },
      onfailure: () => show_toast("Error in Google Login"),
    });
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Box sx={{ p: matches ? 2.5 : 6, borderRadius: 2 }} bgcolor="white">
        <Typography
          align="center"
          sx={{ mb: 2 }}
          color="black"
          fontWeight="700"
          fontSize={foldMatches ? 14 : 21}
        >
          Create a new account!
        </Typography>
        <Typography
          align="center"
          color="#848484"
          fontWeight="400"
          fontSize={foldMatches ? 9 : 15}
        >
          Sign up for a chance to win $1,000!
        </Typography>
        <Typography
          align="center"
          color="#848484"
          fontWeight="400"
          fontSize={foldMatches ? 9 : 15}
        >
          (No purchase necessary)
        </Typography>

        <Box sx={{ mt: matches ? 1 : 7 }}>
          {!emailConfirmation ? (
            <Box>
              <MarketingInput
                fullWidth
                value={form.name}
                placeholder="Full name"
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
                sx={{ mb: 3 }}
              />
              <MarketingInput
                fullWidth
                value={form.email}
                placeholder="Email Address"
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                sx={{ mb: 3 }}
              />
              <MarketingInput
                fullWidth
                placeholder="Password"
                value={form.password}
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
                sx={{ mb: 2 }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
          ) : (
            <MarketingInput
              fullWidth
              value={emailConfirmationCode}
              placeholder="Email Confirmation Code"
              onChange={(e) => setemailConfirmationCode(e.target.value)}
              sx={{ mb: 3 }}
            />
          )}
        </Box>

        <Button
          onClick={emailConfirmation ? handleEmailConfirmation : handleSignup}
          fullWidth
          variant="contained"
          sx={{ mt: 3, borderRadius: 10 }}
        >
          <Typography fontSize={foldMatches ? 11 : 16}>
            {emailConfirmation ? "Verify Code" : "Create Account"}
          </Typography>
        </Button>

        <AppleLogin
          clientId="social-media.example.reactjs.native.org"
          redirectURI="https://finay.com/api/api/auth/appleAuthWeb"
          scope="name email"
          responseType="id_token code"
          responseMode="form_post"
          onSuccess={(response) => console.log("response: ", response)}
          onError={(error) => console.error("error: ", error)}
          usePopup={false}
          callback={(e) => console.log("e: ", e)}
          render={(props) => (
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ mt: 3, borderRadius: 10 }}
              {...props}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
                spacing={1.5}
              >
                <img src={AppleIcon} alt="" width="24px" />
                <Typography fontSize={foldMatches ? 11 : 16} color="black">
                  Sign up with Apple
                </Typography>
              </Stack>
            </Button>
          )}
        />

        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"center"}
          sx={{ overflow: "hidden", mt: "24px" }}
        >
          <Box id="google_auth_button" />
        </Stack>

        <Stack
          direction={matches ? "column" : "row"}
          alignItems="center"
          justifyContent={"center"}
          sx={{ mt: 2 }}
          spacing={1}
        >
          <Typography fontSize={foldMatches ? 11 : 16}>
            Already have an account?
          </Typography>
          <ButtonBase onClick={() => setCurrentModalView("login")}>
            <Typography
              fontSize={foldMatches ? 11 : 16}
              color="primary"
              textTransform="uppercase"
            >
              login
            </Typography>
          </ButtonBase>
        </Stack>
      </Box>
    </Box>
  );
}

export default Signup;
