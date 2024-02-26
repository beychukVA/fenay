import React, { useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  let navigate = useNavigate();
  const matches = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    document.title = "Finay";
  }, []);

  return (
    <Box
      sx={
        !matches
          ? { padding: "205px 135px", display: "flex", columnGap: "80px" }
          : {
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }
      }
    >
      <Box
        sx={
          !matches ? { display: "flex", width: "50%" } : { padding: "0em 5em" }
        }
      >
        <Box
          sx={
            !matches
              ? { paddingRight: "10px", width: "40%", paddingTop: "30px" }
              : {}
          }
        >
          <Typography
            sx={
              !matches
                ? {
                    fontSize: "49px",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
                : {
                    fontSize: "2em",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
            }
            comonent={"span"}
          >
            Let’s{" "}
          </Typography>
          <Typography
            sx={
              !matches
                ? {
                    fontSize: "38px",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
                : {
                    fontSize: "2em",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
            }
            comonent={"span"}
          >
            take it{" "}
          </Typography>
          <Typography
            sx={
              !matches
                ? {
                    fontSize: "38px",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
                : {
                    fontSize: "2em",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
            }
            comonent={"span"}
          >
            from the{" "}
          </Typography>
          <Typography
            sx={
              !matches
                ? {
                    fontSize: "49px",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
                : {
                    fontSize: "2em",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
            }
            comonent={"span"}
          >
            TOP
          </Typography>
        </Box>
        <Box
          sx={
            !matches
              ? {
                  borderLeft: "2px solid #FF1C51",
                  paddingLeft: "40px",
                  width: "60%",
                  paddingTop: "30px",
                }
              : { fontWeight: "600", fontFamily: "poppins", color: "#fff" }
          }
        >
          <Typography
            sx={
              !matches
                ? {
                    fontSize: "46px",
                    fontWeight: "600",
                    fontFamily: "poppins",
                    color: "#fff",
                  }
                : {}
            }
          >
            Create Collaborate Curate
          </Typography>
          <Typography
            sx={
              !matches
                ? { fontSize: "14px", fontFamily: "poppins", color: "#fff" }
                : {}
            }
          >
            Get closer to the community that inspires you
          </Typography>
          <Box
            style={
              matches
                ? {
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "1em 0px",
                  }
                : {}
            }
          >
            <Button
              variant="contained"
              onClick={() => navigate("/signup")}
              sx={
                !matches
                  ? {
                      marginTop: "23px",
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
                    }
                  : {}
              }
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              sx={
                !matches
                  ? {
                      marginTop: "23px",
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
                    }
                  : {}
              }
            >
              {" "}
              Sign in{" "}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={!matches ? { width: "50%" } : {}}>
        <video
          controls="true"
          style={!matches ? { width: "100%", height: "100%" } : {}}
        >
          <source src="www.youtube.com/watch?v=IEDEtZ4UVtI" type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
}

export default Logout;
