import React, { useContext, useEffect } from "react";
import { useGoogleAuth } from "react-gapi-auth2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { signOut } = useContext(AuthContext);
  const { googleAuth } = useGoogleAuth();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleLogoutRoute(), []);

  const handleLogoutRoute = async () => {
    // try {
    //   const response = await UpdateUser({ isOnline: false });
    // } catch (error) {
    //   console.log(
    //     `🚀 ~ file: index.js ~ line 296 ~ handleLogoutRoute ~ error`,
    //     error
    //   );
    // }
    var rememberMe = localStorage.getItem("rememberMe");
    localStorage.clear();
    localStorage.setItem("rememberMe", rememberMe);
    googleAuth && googleAuth.signOut();
    signOut();
    navigate(`/`);
  };
  return <></>;
};
