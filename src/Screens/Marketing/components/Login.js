import { Visibility, VisibilityOff } from "@mui/icons-material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Box,
  Button,
  ButtonBase,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  useMediaQuery,
  InputAdornment,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { show_toast } from "../../../helpers/toast";
import { AuthContext } from "../../../provider/AuthProvider/AuthContext";
import { VerificationSmsCode } from "../../../Services/2Fa";
import { Login as Signin } from "../../../Services/Auth";
import { MarketingInput } from "./MarketingInput";
import ForgetPassword from "../../Signin/components/forget-password";
import { GoogleAuthLogin } from "../../../Services/User";
import { useNavigate } from "react-router-dom";
import AppleLogin from "react-apple-login";
import AppleIcon from "../../../assets/Marketing/apple-icon.png";
import { useStyles } from "../../../constant/customStyle";
import CloseIcon from "@mui/icons-material/Close";

function Login({ setCurrentModalView }) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  const foldMatches = useMediaQuery("(max-width:350px)");
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();
  const { setCredentials } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [twoFactor, settwoFactor] = useState(false);
  const [twoFactorModal, settwoFactorModal] = useState(false);
  const [code, setcode] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [codeFromLogin, setcodeFromLogin] = useState("");
  const [rememberMe, setrememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgetPasswordOpen, setForgetPasswordOpen] = useState(false);

  // const options = {
  //   width: 200,
  //   height: 50,
  //   theme: "dark",
  //   onsuccess: async (res) => {
  //       console.log(res);
  //     const resGoogle = await GoogleAuthLogin({
  //       user: res.Ba,
  //       token: res.zc.id_token,
  //     });
  //     if (resGoogle.status_code == 200) {
  //       if (resGoogle.token) {
  //         setLocalStorage(resGoogle.token, res.Ru.Iv);
  //       }
  //       window.location.reload();
  //     }
  //   },
  //   onfailure: () => show_toast("Error in Google Login"),
  // };

  useEffect(() => {
    document.title = "Finay";
    window.gapi.signin2.render("google_auth_button2", {
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
    getRememberMe();
  }, []);

  const getRememberMe = () => {
    const rememberMeObj = JSON.parse(localStorage.getItem("rememberMe"));
    if (rememberMeObj && rememberMeObj.email && rememberMeObj.password) {
      setForm(rememberMeObj);
      setrememberMe(true);
    }
  };

  const handleLogin = async () => {
    if (form.email === "" || form.password === "") {
      show_toast("Email or password field is empty.");
      return;
    }
    const res = await Signin(form.email, form.password);
    if (res.twofactor) {
      settwoFactorModal(true);
      const code = res.status_msg.split(":")[1];
      setcodeFromLogin(code);
    }
    if (res.status_msg === "User logged in successfully") {
      if (res.token) {
        setLocalStorage(res.token, form.email);
        setCredentials(res.token);
        rememberMe && handleRememberMe(form.email, form.password);
        window.location.href = "/";
      }
    }
  };

  const handleRememberMe = (email, password) => {
    localStorage.setItem("rememberMe", JSON.stringify({ email, password }));
  };

  const setLocalStorage = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("login", true);
    localStorage.setItem("rememberMe", true);
    localStorage.setItem("email", email);
  };

  const twoFactorVerification = async () => {
    try {
      const res = await VerificationSmsCode(form.email, code);
      if (res.status_msg === "Successfully verified") {
        if (res.token) {
          setLocalStorage(res.token, form.email);
        }
        rememberMe && handleRememberMe(form.email, form.password);
        window.location.href = "/";
      }
    } catch (e) {
      show_toast("Verification of code failed.");
    }
  };

  const label = { inputProps: { "aria-label": "Remember Me" } };

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
          Welcome Back
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

        <Box sx={{ mt: matches ? 4 : 7 }}>
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
            autoComplete="current-password"
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                checked={rememberMe}
                onChange={(e) => setrememberMe(e.target.checked)}
                icon={<CircleOutlinedIcon color="primary" fontSize="small" />}
                checkedIcon={<CircleIcon fontSize="small" />}
              />
            }
            sx={{
              color: "black",
            }}
            label={
              <Typography fontSize={foldMatches ? 6 : matches ? 12 : 13}>
                Remember Me
              </Typography>
            }
          />
          <ButtonBase
            onClick={() => setForgetPasswordOpen(true)}
            sx={{ p: 0.5 }}
          >
            <Typography
              color="primary"
              fontWeight="400"
              fontSize={foldMatches ? 6 : matches ? 11 : 15}
            >
              Forgot Password?
            </Typography>
          </ButtonBase>
        </Stack>
        <Button
          onClick={handleLogin}
          fullWidth
          variant="contained"
          sx={{ mt: 3, borderRadius: 10 }}
        >
          <Typography fontSize={foldMatches ? 11 : 16}>Log In</Typography>
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
                  Sign in with Apple
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
          <Box id="google_auth_button2" />
        </Stack>

        <Stack
          direction={matches ? "column" : "row"}
          alignItems="center"
          justifyContent={"center"}
          sx={{ mt: 2 }}
          spacing={1}
        >
          <Typography fontSize={foldMatches ? 11 : 16}>
            Don't have an account?
          </Typography>
          <ButtonBase onClick={() => setCurrentModalView("signup")}>
            <Typography
              fontSize={foldMatches ? 11 : 16}
              color="primary"
              textTransform="uppercase"
            >
              Register
            </Typography>
          </ButtonBase>
        </Stack>
      </Box>
      <ForgetPassword
        forgetPasswordOpen={forgetPasswordOpen}
        setForgetPasswordOpen={setForgetPasswordOpen}
      />
      <Dialog
        classes={{ paper: classes.paper }}
        open={twoFactorModal}
        onClose={() => {
          settwoFactorModal(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "24px",
            backgroundColor: "#434343",
            maxWidth: 870,
          },
        }}
      >
        <DialogContent
          sx={{ padding: 0, borderRadius: "24px", border: "3px solid #434343" }}
        >
          <Box
            sx={{
              padding: "31px 36px",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            <Box
              display={"flex"}
              sx={{
                borderBottom: "2px solid #FF1C51",
                paddingBottom: "5.5px",
                width: "70%",
                marginBottom: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Two Factor Authentication Code
              </Typography>
            </Box>
            <Box display={"flex"} sx={{ marginBottom: "28px" }}>
              <TextField
                value={code}
                type="number"
                onChange={(e) => setcode(e.target.value)}
                sx={{
                  border: "solid 1px #FF1C51",
                  borderRadius: "5px",
                  width: "100%",
                  input: { color: "white" },
                }}
              />
            </Box>

            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF1C51",
                  padding: "5px 50px",
                  borderRadius: "30px",
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  fontSize: "20px",
                  fontWeight: "500",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#FF1C51 !important",
                    boxShadow: "none",
                  },
                }}
                onClick={() => twoFactorVerification()}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <IconButton
          onClick={() => {
            settwoFactorModal(false);
          }}
          className={classes.customizedButton}
        >
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>
    </Box>
  );
}

export default Login;
