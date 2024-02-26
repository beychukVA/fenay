import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";

const VerifyApple = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { setCredentials } = useContext(AuthContext);

  useEffect(() => {
    const query = new URLSearchParams(search);
    const token = query.get("token");
    const email = query.get("email");
    console.log("token: ", token);
    console.log("email: ", email);

    if (token) {
      setLocalStorage(token, email || "");
      setCredentials(token);

      return navigate("/");
    }
  }, []);

  const setLocalStorage = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("login", true);
    localStorage.setItem("email", email);
  };

  return <Box>VerifyApple</Box>;
};

export default VerifyApple;
