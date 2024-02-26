import { Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { show_toast } from "../../helpers/toast";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import { Login, Register } from "../../Services/Auth";
import SpiralIcon from "../../assets/SpiralIcon.svg";
import SignupContentImg from "../../assets/SignupContentImg.jpg";
import { CreateAccount } from "./SignupStep/CreateAccount";

function Signup() {
  const { setCredentials } = useContext(AuthContext);
  // const { googleAuth } = useGoogleAuth();
  // const { currentUser } = useGoogleUser();

  // eslint-disable-next-line no-unused-vars
  const [Username, setUsername] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [Password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [Confirm, setConfirm] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [TestingCode, setTestingCode] = useState("finay");
  // eslint-disable-next-line no-unused-vars
  const [termsAndCondition, setTermsAndCondition] = useState(false);

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

  // eslint-disable-next-line no-unused-vars
  const handleSignup = async () => {
    if (
      Username === "" ||
      email === "" ||
      Password === "" ||
      Confirm === "" ||
      TestingCode === ""
    ) {
      show_toast("Please enter all fields");
      return;
    }

    // if (TestingCode !== process.env.REACT_APP_SIGNUP_CODE) {
    //   show_toast("Beta Testing Code is not correct.");
    //   return;
    // }

    if (!termsAndCondition) {
      show_toast("Please accept Terms and Conditions");
      return;
    }

    if (handleValidation(Password)) {
      return;
    }

    const res = await Register(Username, email, Password);
    if (res?.message === "User successfully registered") {
      // navigate("/login");
      const login_res = await Login(email, Password);
      if (login_res) {
        if (login_res?.user.password) {
          setLocalStorage(login_res?.user.password, Username);
          setCredentials(login_res?.user.password);

          // navigate("/", { replace: true });
          window.location.href = "/";
        }
      }
    }
  };

  const setLocalStorage = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("login", true);
    localStorage.setItem("email", email);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#181A20",
            width: "100%",
            height: "100vh",
            padding: "150px 98px 157px 210px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "23px",
              marginBottom: "13px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "125%",
                letterSpacing: "0.2px",
                color: "#fff",
              }}
            >
              Get your free&nbsp;
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "125%",
                letterSpacing: "0.2px",
                color: "#FF8200",
              }}
            >
              NFT
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "140%",
              letterSpacing: "0.2px",
              color: "#D5D4D8",
              width: "340px",
            }}
          >
            Get your first NFT free! Create an account and be entered to win one
            of 5,000 limited edition songs.
          </Typography>
          <Box
            sx={{
              position: "relative",
              marginTop: "48px",
              zIndex: 1,
            }}
          >
            <Box
              sx={{ position: "absolute", top: 0, left: "-50%", zIndex: -1 }}
            >
              <img src={SpiralIcon} alt="" />
            </Box>
            <Box
              sx={{
                zIndex: 1,
                overflow: "hidden",
                borderRadius: "4px",
                minWidth: "315px",
                minHeight: "315px",
              }}
            >
              <img
                src={SignupContentImg}
                alt="Be Yourself"
                style={{
                  display: "block",
                  minWidth: "100%",
                  minHeight: "100%",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "-50%",
                zIndex: -1,
                width: "257px",
                height: "261px",
                background: "#FF8200",
                opacity: 0.15,
                filter: "blur(100px)",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.25);",
            width: "100%",
            height: "100vh",
            padding: "128px 177px",
          }}
        >
          <CreateAccount />
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
