import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Stack,
  Container,
  Link,
} from "@mui/material";
import OutboundIcon from '@mui/icons-material/Outbound';
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import MoveIcon from "../../../assets/move-icon.png";
import { useStyles } from "../../../constant/customStyle";
import AppleStoreIcon from "../../../assets/app-store.png";
import GetStarted from "./GetStarted";

function HeroBox() {
  const matches = useMediaQuery("(max-width:768px)");

  const classes = useStyles();
  let navigate = useNavigate();
  // const myRef = useRef(null);
  // const executeScroll = () => myRef.current.scrollIntoView();
  // const useMountEffect = (fun) => useEffect(fun, []);
  // useMountEffect(executeScroll); // Scroll on mount

  return (
    <Container>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid
          container
          flexDirection={"column"}
          sx={(theme) => ({
            minHeight: "95vh",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            [theme.breakpoints.down("lg")]: {
              minHeight: "80vh",
              alignItems: "center",
              justifyContent: "center",
            },
          })}
        >
          <Typography
            variant="h1"
            sx={(theme) => ({
              color: '#fff',
              textAlign: "left",
              fontWeight: 600,
              zIndex: 9,
              [theme.breakpoints.down("lg")]: {
                textAlign: "center",
                fontSize: 36,
              },
              [theme.breakpoints.down("md")]: {
                textAlign: "center",
                fontSize: 32,
              }
            })}
          >
            Where Musicians <br/> Meet Fans
          </Typography>
          <Typography
            mt={3}
            mb={4}
            variant="h6"
            sx={(theme) => ({
              color: '#fff',
              textAlign: "left",
              fontWeight: 600,
              zIndex: 9,
              maxWidth: 700,
              [theme.breakpoints.down("lg")]: {
                textAlign: "center",
                fontSize: 24,
              },
              [theme.breakpoints.down("md")]: {
                textAlign: "center",
                fontSize: 20,
              }
            })}
          >
          Create content. Connect with fans. Keep the sales.
        </Typography>
        <GetStarted />
        <Stack style={{zIndex: "1"}} direction="row" alignItems="center" spacing={3}>
          <Box sx={{ cursor: "pointer" }}>
            <img
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/finay/id1613395121",
                  "_blank"
                )
              }
              src={AppleStoreIcon}
              style={{ width: 150, borderRadius: 2 }}
            />
          </Box>
        </Stack>
        <br/>
        <a className={classes.bannerLink} href="#moveDown" style={{ alignSelf: 'center', position: 'absolute', bottom: 10, left: 'calc(50% - 12px)' }}>
          <Box sx={{ width: "17px", height: "30px" }}>
            <img
              className={`${classes.bannerMouse} drop-button`}
              src={MoveIcon}
            />
          </Box>
          </a>
          {/* <Link href="https://finay.com/NAMM" target="_blank" underline="none" sx={{ alignSelf: 'center', position: 'absolute', top: 100, right: 20 }}>
            <Typography color="#fff">
              <OutboundIcon sx={{ color: '#fff', verticalAlign: 'middle' }} /> NAMM '22 Raffle!!
            </Typography>
          </Link> */}
        </Grid>
      </Box>
    </Container>
  );
}

export default HeroBox;