import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Carousel, { consts } from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import carousel1 from "../../assets/caraousal1.png";
import caraousal2 from "../../assets/caraousal2.png";
import carousel4 from "../../assets/carousel4.png";
import fineyImg from "../../assets/fineyImg.png";
import fineyImg2 from "../../assets/fineyImg2.png";
import Group from "../../assets/Group 598.png";
import Group2 from "../../assets/Group2 597.png";
import Group3 from "../../assets/Group3 781.png";
import studioImg from "../../assets/studioImg.jpg";
import HeroVideo from "../../assets/video/HeroVideo.mp4";
import LandingHeader from "../../component/LandingHeader";
import { CustomInputField } from "../../component/Textfield/Textfield";
import { theme, useStyles } from "../../constant/customStyle";
import { show_toast } from "../../helpers/toast";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import Footer from "../Footer/Footer";
import ExploreTitle from "../Home/components/ExploreTitle";
import Aweber from "./component/Aweber";
import HeroBox from "./component/HeroBox";

const useMountEffect = (fun) => useEffect(fun, []);

const HomeScreen = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");

  const { credentials } = useContext(AuthContext);
  const [scrollY, setScrollY] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (credentials) {
      navigate("/");
    }
  }, [credentials]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <KeyboardArrowLeftIcon sx={{ color: "#FF1C51", fontSize: "36px" }} />
      ) : (
        <KeyboardArrowRightIcon sx={{ color: "#FF1C51", fontSize: "36px" }} />
      );
    return (
      <Button
        onClick={onClick}
        disabled={isEdge}
        style={isEdge ? { visibility: "hidden" } : {}}
      >
        {pointer}
      </Button>
    );
  };

  const [email, setEmail] = useState("");

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
      console.log("offset", window.pageYOffset);

      if (window.pageYOffset > 100) {
        document.getElementById("navbar-header").classList.add("scrolled");
      } else {
        document.getElementById("navbar-header").classList.remove("scrolled");
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => {
  //   if (offset > 100) {
  //     document.getElementById("navbar-header").classList.add("scrolled");
  //   }
  //   if (offset < 100) {
  //     document.getElementById("navbar-header").classList.remove("scrolled");
  //   }
  // }, [offset]);

  return (
    <>
      {/* <ScrollToTopOnMount /> */}
      <LandingHeader />
      <Box
        className={classes.mainHero}
        minHeight={matches ? "100vh" : "100vh"}
        minWidth="100vw"
      >
        <video autoPlay loop muted playsInline className={classes.HeroVideo}>
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <HeroBox />
      </Box>
      <Box className={classes.finey}>
        <Container
          className={[classes.fineyContainer, classes.fineyContainer2]}
        >
          <Box className={classes.fineyLeft}>
            {" "}
            <ScrollAnimation animateIn="bounceInLeft" duration={0.5}>
              <Divider className={classes.fineyHr} />
              <Typography className={classes.fineyH3} variant="h3">
                Mic Check One. Two.
              </Typography>
              <Typography className={classes.fineyP}>
                Finay is a community for musicians and music lovers to connect,
                share, access exclusive content, and support one another.
              </Typography>
              <Button
                onClick={() => navigate("/signup")}
                className={classes.fineyButton}
                variant="contained"
              >
                Register now
              </Button>
            </ScrollAnimation>{" "}
          </Box>

          <ScrollAnimation
            animateIn="bounceInRight"
            duration={0.5}
            className={classes.fineyRight}
          >
            <img className={classes.fineyImg} src={fineyImg} />
          </ScrollAnimation>
        </Container>
      </Box>

      <Box id="moveDown" className={classes.homeSlider}>
        <Container>
          <ExploreTitle title="Phase One" />
          <Box
            sx={{
              [theme.breakpoints.up("md")]: {
                display: "flex",
              },
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <Box display={"flex"}>
              <Grid flex="1" xs={12}>
                <Box className={classes.mainb}>
                  <Box>
                    <img className={classes.homeSliderImg} src={carousel1} />
                  </Box>
                  <Box className={classes.homeSlidercontent}>
                    <Typography variant="h5" className={classes.homeSliderH5}>
                      Community
                    </Typography>
                    <Typography className={classes.homeSliderP}>
                      Connect with music lovers around the world
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid flex="1" xs={12}>
                <Box className={classes.mainb}>
                  <Box>
                    <img className={classes.homeSliderImg} src={caraousal2} />
                  </Box>
                  <Box className={classes.homeSlidercontent}>
                    <Typography variant="h5" className={classes.homeSliderH5}>
                      Marketplace
                    </Typography>
                    <Typography className={classes.homeSliderP}>
                      Buy and sell exclusive content from your favorite artists
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid flex="1" xs={12}>
                <Box className={classes.mainb}>
                  <Box>
                    <img className={classes.homeSliderImg} src={carousel4} />
                  </Box>
                  <Box className={classes.homeSlidercontent}>
                    <Typography variant="h5" className={classes.homeSliderH5}>
                      Fair Pay
                    </Typography>
                    <Typography className={classes.homeSliderP}>
                      Put control in the hands of creators with royalty shares
                      and custom pricing
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Box>
            {/* <Box className={classes.homeBox} >
                            <img className={classes.homeSliderImg} src={carousel1} />
                            <Box className={classes.homeSliderTxt}>
                                <Typography className={classes.homeSliderH5} variant="h5">Community</Typography>
                                <Typography className={classes.homeSliderP}>Connect with music lovers around the world</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.homeBox} >
                            <img className={classes.homeSliderImg} src={caraousal2} />
                            <Box className={classes.homeSliderTxt}>
                                <Typography className={classes.homeSliderH5} variant="h5">Marketplace</Typography>
                                <Typography className={classes.homeSliderP}>Buy and sell exclusive content from your favorite artists</Typography>
                            </Box>
                        </Box>

                        <Box className={classes.homeBox} >
                            <img className={classes.homeSliderImg} src={carousel4} />
                            <Box className={classes.homeSliderTxt}>
                                <Typography className={classes.homeSliderH5} variant="h5">Fair Pay</Typography>
                                <Typography className={classes.homeSliderP1}>Put control in the hands of creators with royalty shares and custom pricing.</Typography>
                            </Box>
                        </Box> */}

            {/* <Box className={classes.homeBox} >
                            <img className={classes.homeSliderImg} src={carousel3} />
                            <Box className={classes.homeSliderTxt}>
                                <Typography className={classes.homeSliderH5} variant="h5">Community</Typography>
                                <Typography className={classes.homeSliderP}>Connect with music lovers around the world</Typography>
                            </Box>
                        </Box> */}
          </Box>

          <Box
            sx={{
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
              [theme.breakpoints.down("md")]: {
                display: "block",
              },
            }}
          >
            <Carousel
              itemsToScroll={1}
              enableAutoPlay={false}
              renderArrow={myArrow}
              breakPoints={breakPoints}
              enableMouseSwipe={false}
              // onResize={(currentBreakPoint) => console.log(currentBreakPoint)}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <Box direction="row">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        // <KeyboardArrowLeftIcon sx={{ color: '#FF1C51', fontSize: '36px' }} />
                        <KeyboardArrowLeftIcon
                          key={page}
                          onClick={() => onClick(page)}
                          active={isActivePage}
                          sx={{ display: "none" }}
                        />
                      );
                    })}
                  </Box>
                );
              }}
            >
              <Box className={classes.min} display={"flex"}>
                <Box>
                  <img className={classes.homeSliderImg} src={carousel1} />
                </Box>
                <Box className={classes.homeSlidercontent}>
                  <Typography variant="h5" className={classes.homeSliderH5}>
                    Community
                  </Typography>
                  <Typography className={classes.homeSliderP}>
                    Connect with music lovers around the world
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.min} display={"flex"}>
                <Box>
                  <img className={classes.homeSliderImg} src={caraousal2} />
                </Box>
                <Box className={classes.homeSlidercontent}>
                  <Typography variant="h5" className={classes.homeSliderH5}>
                    Marketplace
                  </Typography>
                  <Typography className={classes.homeSliderP}>
                    Buy and sell exclusive content from your favorite artists
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.min} display={"flex"}>
                <Box>
                  <img className={classes.homeSliderImg} src={carousel4} />
                </Box>
                <Box className={classes.homeSlidercontent}>
                  <Typography variant="h5" className={classes.homeSliderH5}>
                    Fair Pay
                  </Typography>
                  <Typography className={classes.homeSliderP}>
                    Put control in the hands of creators with royalty shares and
                    custom pricing
                  </Typography>
                </Box>
              </Box>
              {/* <Box className={classes.homeBox}>
                                <img className={classes.homeSliderImg} src={carousel3} />

                                <Box className={classes.homeSliderTxt}>
                                    <Typography className={classes.homeSliderH5} variant="h5">Community</Typography>
                                    <Typography className={classes.homeSliderP}>Put control in the hands of creators with royalty shares, custom pricing, and subscriptions</Typography>
                                </Box>
                            </Box> */}
            </Carousel>
          </Box>
        </Container>
      </Box>
      <Box className={[classes.finey, classes.finey2]}>
        <Container className={classes.fineyContainer}>
          <ScrollAnimation
            animateIn="bounceInLeft"
            duration={0.5}
            className={classes.fineyRight}
          >
            <img className={classes.fineyImg} src={fineyImg2} />
          </ScrollAnimation>
          <Box className={classes.fineyLeft}>
            <ScrollAnimation animateIn="bounceInRight" duration={0.5}>
              <Divider className={[classes.fineyHr, classes.fineyHr2]} />
              <Typography className={classes.fineyH3} variant="h3">
                Let’s take it from the top
              </Typography>
              <Typography className={classes.fineyP}>
                In music,“fine” [Finay] represents the end of a composition or
                movement. As the era of traditional music mediums draw to a
                close, Finay offers a new way for us to enjoy the music we
                cherish by creating a more harmonious musical community through
                technological innovation. Being musicians ourselves, we are
                committed to maintaining a healthy online home for those who
                inspire us.
              </Typography>
              <Button
                className={[classes.fineyButton, classes.fineyButton2]}
                variant="contained"
                onClick={() => navigate("/signup")}
              >
                Register now
              </Button>
            </ScrollAnimation>
          </Box>
        </Container>
      </Box>

      <Box className={classes.homeStudio}>
        <img
          style={{ position: "fixed", top: "0", zIndex: -999 }}
          src={studioImg}
        />
      </Box>
      <Box className={classes.homeProducts}>
        <Container sx={{ mb: 3 }}>
          <ExploreTitle title="What's Next?" />
        </Container>
        <Container className={classes.productContainer}>
          <Box className={classes.productBox}>
            <Typography className={classes.productH5} variant="h5">
              Phase Two
            </Typography>
            <Box className={classes.productImgBox}>
              <ScrollAnimation animateIn="bounceInUp" duration={0.5}>
                <img src={Group} className={classes.productImg} />
              </ScrollAnimation>
            </Box>
            <Typography className={classes.fineyP}>
              Streaming Services - By adding live-streaming functionality to our
              platform, we will be able to facilitate a number of useful
              services for musicians, such as:
            </Typography>
            <Typography className={classes.productP}>
              - FinStage - Bands can stream their concerts live to their fans.
            </Typography>
            <Typography className={classes.productP}>
              - FinShed - Teachers and students can easily connect through our
              platform with features tailored for educational seminars, clinics
              and workshops, as well as one-on-one lessons.
            </Typography>
            <Typography className={classes.productP}>
              - FinCure - Music Therapists and patients will be able to use
              Finay to find each other and connect remotely or in-person.
            </Typography>
            {/* <Typography className={classes.productP}>Vendors</Typography>
                        <Typography className={classes.productP}>Merchandise</Typography> */}
          </Box>
          <Box className={classes.productBox}>
            <Typography className={classes.productH5} variant="h5">
              Phase Three
            </Typography>
            <Box className={classes.productImgBox}>
              <ScrollAnimation animateIn="bounceInUp" duration={0.5}>
                <img src={Group2} className={classes.productImg} />
              </ScrollAnimation>
            </Box>
            <Typography className={classes.productP}>
              FinForum - Finay will introduce a place for the community to buy,
              sell, and discuss music-related content and real world items.
              Vendors will be able to conduct secure transactions through our
              platform to sell musical instruments, equipment, and merchandise.
            </Typography>
            {/* <Typography className={classes.productP}>Streaming</Typography>
                        <Typography className={classes.productP}>Online lessons</Typography>
                        <Typography className={classes.productP}>Therapy sessions</Typography> */}
          </Box>
          <Box className={classes.productBox}>
            <Typography className={classes.productH5} variant="h5">
              Phase Four
            </Typography>
            <Box className={classes.productImgBox}>
              <ScrollAnimation animateIn="bounceInUp" duration={0.5}>
                <img src={Group3} className={classes.productImg} />
              </ScrollAnimation>
            </Box>
            <Typography className={classes.productP}>
              -FinWorld- As virtual reality becomes more of a commonplace
              experience, we’ll explore introducing a number of our features
              into{" "}
              <span className={classes.virtual_reality}>virtual reality,</span>{" "}
              such as live performances, lessons, and studio time.{" "}
            </Typography>
            {/* <Typography className={classes.productP}>Virtual concerts</Typography>
                        <Typography className={classes.productP}>Virtual collaborations</Typography>
                        <Typography className={classes.productP}>Virtual studio sessions</Typography> */}
          </Box>
        </Container>
      </Box>

      <Box className={classes.newsLetter}>
        <div style={{ display: "none" }}>
          <Aweber email={email} />
        </div>
        <Container className={classes.newsLetterContainer}>
          <Typography className={classes.newsLetterText} variant="h5">
            Tune in for the latest updates.
          </Typography>
          <Box className={classes.newsLetterForm}>
            <CustomInputField
              placeholder="Enter your email address..."
              className={classes.newsLetterInput}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              InputProps={{
                style: {
                  height: 55,
                },
                classes: {
                  input: classes.multilineColor,
                },
              }}
            />
            <Button
              onClick={() => {
                if (!email) {
                  show_toast("Please enter email address");
                  return;
                }

                document.querySelector(".submit").click();
              }}
              className={classes.newsLetterButton}
              variant="contained"
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .rec.rec-carousel-wrapper {
            width: 100% !important;
          }

          .rec-carousel > button {
            margin-top: -6em;
          }
        }
      `}</style>
    </>
  );
};

export default HomeScreen;
