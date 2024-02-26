import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import HeaderComponent from "../../component/Header";

const RequestVerificationScreen = () => {
  const remoteOrigin = "https://admin.finay.com";

  useEffect(() => {
    window.addEventListener("message", onMessage, false);

    return () => {
      window.removeEventListener("message", onMessage, false);
    };
  }, []);

  const onMessage = (event) => {
    // Check if the sender origin to be trusted
    if (event.origin !== remoteOrigin) return;

    const { status } = event.data;

    if (status === "success") {
      console.log("Success, now reidrecting back");
      window.history.back();
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <HeaderComponent />
      <Container maxWidth="lg" sx={{ marginBottom: "150px" }}>
        <iframe
          title="Get Verified"
          width="100%"
          height="100vh"
          src={`${remoteOrigin}/get-verified`}
          style={{
            width: "100%",
            height: "100vh",
            border: "none",
          }}
        />
      </Container>
    </Box>
  );
};

export default RequestVerificationScreen;
