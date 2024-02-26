import React, { useContext, useEffect } from "react";
import AppleIcon from "../assets/AppleIcon.svg";
import AppleLogin from "react-apple-login";
import { gapi } from "gapi-script";
import { AuthContext } from "../provider/AuthProvider/AuthContext";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";

// Client ID and API key from the Developer Console
var CLIENT_ID =
  //   "692123031128-bashqe6e67b29cp5mgkuj7m8j0m7sa44.apps.googleusercontent.com";
  "440544890779-t01qtuodv65oblka5c54l282d6pklqqq.apps.googleusercontent.com";

export const Apple = () => {
  const { setCredentials } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        // discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    console.log("Apple res: ", res);
    // const token = await res?.getAuthResponse(true)?.access_token;
    // const response = await GoogleAuthLogin(token);
    // if (response) {
    //   const profile = res?.getBasicProfile();
    //   setLocalStorage(response.token, profile?.getEmail());
    //   setCredentials(response.token);
    //   navigate("/");
    // }
  };

  const onError = (error) => {
    console.log("Apple error: ", error);
  };

  const setLocalStorage = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("login", true);
    localStorage.setItem("email", email);
  };

  return (
    <AppleLogin
      clientId={CLIENT_ID}
      redirectURI=""
      scope="name email"
      responseType="id_token code"
      responseMode="form_post"
      onSuccess={onSuccess}
      onError={onError}
      usePopup={true}
      callback={(e) => console.log("Apple callback: ", e)}
      render={(props) => (
        <Box
          sx={{
            padding: "12px 28px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid #515151",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 250ms ease",
            marginLeft: "16px",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.1)",
            },
          }}
          {...props}
        >
          <img
            style={{
              display: "block",
              width: "24px",
              height: "24px",
            }}
            src={AppleIcon}
            alt="Apple"
          />
        </Box>
      )}
    />
  );
};
