import { Hidden } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";
import bannerbg from "../assets/bannerbg.jpg";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2E2E2E",
    },
    secondary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "2.1875rem",
      fontWeight: 600,
    },
    button: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export const useStyles = makeStyles((theme) => ({
  paper: {
    overflowY: "unset !important",
  },
  customizedButton: {
    position: "absolute !important",
    right: "-70px !important",
    top: "-20px !important",
    color: "#fff !important",
    background: "rgb(255 255 255 / 30%) !important",
  },
  indicator: {
    background: "#ff1c51 !important",
  },
  tabs: {
    padding: "0px 20px !important",
    "& button": {
      color: "#fff !important",
      fontSize: "500 !important",
      textAlign: "center !important",
      fontWeight: 500,
      // "&:last-child": {
      //     paddingRight: 0
      // }
    },
  },
  tabsPanel: {
    color: "#fff",
  },
  label: {
    fontSize: "20px !important",
    fontFamily: "Poppins !important",
    textTransform: "capitalize !important",
  },
  root: {
    backgroundColor: "#7070707a !important",
    color: "#fff !important",

    fontFamily: "Poppins !important",
    "&: focus": {
      border: "0px solid transparent !important ",
    },
    // outline: '5px dotted green'
  },
  icon: {
    fill: "#fff !important",
    color: "#fff",
  },
  select: {
    // marginTop: 75,
    "&:focus": {
      backgroundColor: "yellow",
    },
    "& ul": {
      // maxHeight: 150,
      backgroundColor: "#000",
    },
    "& li": {
      fontSize: 16,
      fontFamily: "Poppins",
      // borderBottom: '1px solid #ccc',
      textTransform: "capitalize",
      color: "#fff",
    },
    "& li:last-child": {
      // borderBottom: '0px solid #ccc',
    },
    "& div": {
      fontSize: 13,
      fontFamily: "Poppins",
      borderBottom: "1px solid #ccc",
      padding: "0 15px",
      "& p": {
        fontSize: 13,
        fontFamily: "Poppins",
        margin: "5px 0",
      },
    },
  },
  // divider: {
  //     background: '#C67B4D',
  // },
  dialog: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
  },
  dialogTitle: {
    textAlign: "center !important",
  },
  dialogContent: {
    textAlign: "center !important",
  },
  dialogAction: {
    justifyContent: "center !important",
  },
  dilogLabel: {
    color: "#fff !important",
    fontFamily: "Poppins !important",
    fontSize: "20px !important",
    fontWeight: "600 !important",
  },
  titleIcon: {
    backgroundColor: "#F85160 !important",
    color: theme.palette.secondary.main,
    "&:hover": {
      // backgroundColor: '#F85160',
      cursor: "default !important",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem !important",
    },
  },
  checkButton: {
    borderRadius: "30px !important",
    backgroundColor: "#FF1C51 !important",
    fontWeight: "600 !important",
    fontSize: "20px !important",
    fontFamily: "Poppins  !important",
    padding: "5px 50px !important",
    textTransform: "capitalize  !important",
    "&:hover": {
      backgroundColor: "#FF1C51  !important",
    },
  },
  closeButton: {
    // marginLeft: '50px !important',
    color: "#fff !important",
    fontFamily: "Poppins",
    textTransform: "capitalize  !important",
    fontSize: "20px !important",
  },
  title: {
    fontSize: "20px !important",
    fontWeight: "bold !important",
  },
  bidButton: {
    padding: "5px 20px !important",
    color: "#fff",
    background: "#FF1C51 !important",
    borderRadius: "15px !important",
    fontFamily: "Poppins !important",
    textTransform: "capitalize !important",
  },
  recentlyButton: {
    color: "#fff !important",
    fontFamily: "Poppins",
    textTransform: "capitalize  !important",
    fontSize: "20px !important",
  },
  carts: {
    backgroundColor: "rgb(29,29,2,0.9)",
    width: 1000,
    display: "flex",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    color: "red",
  },
  avtr: {
    width: "100%",
    height: "100%",
  },
  chip: {
    fontSize: 20,
  },
  titleAuthor: {
    fontSize: "20px !important",
    fontFamily: "poppins !important",
    fontWeight: "700 !important",
  },
  description: {
    fontSize: 18,
    color: "#707070",
    fontFamily: "poppins !important",
  },
  price: {
    fontSize: "16px !important",
    fontFamily: "poppins !important",
    fontWeight: "500 !important",
  },
  titleAuthor1: {
    fontSize: "16px !important",
    fontFamily: "poppins !important",
    fontWeight: "500 !important",
  },
  commentButton: {
    backgroundColor: "rgb(29 29 29 / 25%) !important",
    borderRadius: "10px !important",
    textTransform: "lowercase !important",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "rgb(29 29 29 / 60%)  !important",
    },
  },
  TfieldComent: {
    backgroundColor: "#A4A4A4",
    borderRadius: "10px",
    border: "none !important",
  },
  postCommentButton: {
    backgroundColor: "#FF1C51 !important",
    borderRadius: "10px !important",
    textTransform: "capitalize !important",
    boxShadow: "none !important",
    borderRadius: "50px !important",
    fontSize: "15px",
    fontFamily: "poppins !important",
    "&:hover": {
      backgroundColor: "#FF1C51  !important",
    },
  },
  readMore: {
    backgroundColor: "rgb(29 29 29 / 25%) !important",
    borderRadius: "10px !important",
    textTransform: "lowercase !important",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "rgb(29 29 29 / 60%)  !important",
    },
  },
  mainHero: {
    width: "100%",
    backgroundSize: "cover !important",
    padding: "250px 0 25px",
    position: "relative",
    [theme.breakpoints.between("md", "lg")]: {
      padding: "170px 0 25px",
    },
    [theme.breakpoints.between("xs", "md")]: {
      padding: "150px 0 25px",
    },
    "&:before": {
      content: '""',
      width: "100%",
      height: "100%",
      inset: "0",
      background: "linear-gradient(0deg, #1d1d1d 0%, rgba(29,29,29,0) 100%)",
      position: "absolute",
    },
  },
  HeroVideo: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    inset: "0",
    zIndex: "-1",
  },
  mainHeroContainer: {
    maxWidth: "1366px!important",
    display: "flex!important",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    top: "-68px",
    ["@media  (max-width:475px)"]: {
      top: "-183px !important",
    },
  },
  bannerH1: {
    fontSize: "71px!important",
    fontFamily: "Poppins!important",
    fontWeight: "600!important",
    color: "#fff",
    margin: "0 0 2px!important",
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "45px!important",
    },
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "32px!important",
    },
  },
  bannerH1_Top: {
    fontSize: "71px !important",
    fontFamily: "Poppins!important",
    fontWeight: "600!important",
    color: "#fff",
    margin: "-18px 0 -8px!important",
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "45px!important",
    },

    ["@media  (min-width:1024px)"]: {
      fontSize: "52px !important",
      margin: "0px 0 34px !important",
    },
    ["@media  (max-width:768px)"]: {
      fontSize: "52px !important",
      margin: "-64px 0 34px !important",
    },
    ["@media  (max-width:390px)"]: {
      fontSize: "36px !important",
      margin: "-64px 0 34px !important",
    },
    ["@media  (max-width:375px)"]: {
      fontSize: "36px !important",
      margin: "-64px 0 34px !important",
    },
    ["@media  (max-width:320px)"]: {
      fontSize: "36px !important",
      margin: "-64px 0 34px !important",
    },
  },
  bannerp: {
    fontSize: "27px!important",
    fontFamily: "Glacial Indifference!important",
    color: "#fff",
    margin: "0 0 90px!important",
    [theme.breakpoints.between("md", "lg")]: {
      width: "60%",
      margin: "0 0 50px!important",
    },
    [theme.breakpoints.between("xs", "md")]: {
      margin: "0 0 40px!important",
    },
  },
  bannerButton: {
    fontSize: "18px!important",
    padding: "10px 40px !important",
    margin: "32px 0 41px !important",
    fontFamily: "Glacial Indifference!important",
    textTransform: "none!important",
    borderRadius: "25px!important",
    background: "#FF1C51!important",
    transition: "0.3s all ease!important",
    "&:hover": {
      background: "#fff!important",
      color: "#0C0C0C!important",
      transform: "scale(1.1)",
    },

    [theme.breakpoints.between("xs", "lg")]: {
      margin: "0 0 50px!important",
    },
  },
  bannerLink: {
    width: "25px",
    height: "54px",
    border: "1px solid #fff",
    borderRadius: "17px",
    display: "flex",
    justifyContent: "center",

    // transition: '0.3s',
    // '&:hover': {
    //     transform: 'translate(0, -10px)'
    // },
  },
  bannerMouse: {
    width: "100%",
  },
  homeLogo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 0",
    [theme.breakpoints.between("xs", "lg")]: {
      padding: "80px 0",
    },
  },
  homeLogoImg: {
    width: "250px",
    transition: "0.3s all ease",
    marginTop: "22px",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.between("xs", "md")]: {
      width: "200px",
    },
  },
  homeLogoImg1: {
    width: "250px",
    transition: "0.3s all ease",
    // marginTop: '-200px',
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.between("xs", "md")]: {
      width: "200px",
    },
  },
  virtual_reality: {
    color: "#AABBFF",
  },
  vr_span: {
    textDecoration: "line-through !important",
    textDecorationColor: "#AABBFF !important",
    FontWeight: "bold",
  },
  homeLogoP: {
    fontFamily: "Glacial Indifference!important",
    fontSize: "20px!important",
    margin: "15px 0 0!important",
    color: "#fff",
  },
  finey: {
    width: "100%",
    padding: "100px 0",

    background: "#565656",
    [theme.breakpoints.between("xs", "md")]: {
      padding: "50px 0",
    },
  },
  finey2: {
    background: "#FF1C51",
  },
  fineyContainer: {
    display: "flex!important",
    flexWrap: "wrap",
    justifyContent: "space-between ",
    alignItems: "center",
  },
  fineyContainer2: {
    [theme.breakpoints.between("xs", "md")]: {
      flexDirection: "column-reverse",
    },
  },
  fineyLeft: {
    width: "calc(50% - 70px)",
    [theme.breakpoints.between("md", "lg")]: {
      width: "calc(50% - 25px)",
    },
    [theme.breakpoints.between("xs", "md")]: {
      width: "100%",
    },
  },
  fineyHr: {
    width: "70%",
    height: "2px",
    background: "#FF1C51",
  },
  fineyHr2: {
    background: "#1D1D1D",
  },
  fineyH3: {
    fontSize: "40px!important",
    fontWeight: "600!important",
    color: "#fff",
    margin: "30px 0!important",
    fontFamily: "Poppins!important",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "30px!important",
      margin: "30px 0 15px!important",
    },
  },
  fineyP: {
    fontSize: "16px!important",
    fontFamily: "Glacial Indifference!important",
    color: "#fff",
    margin: "0 0 25px!important",
  },
  fineyButton: {
    fontSize: "18px!important",
    padding: "10px 40px!important",
    fontFamily: "Glacial Indifference!important",
    textTransform: "none!important",
    borderRadius: "25px!important",
    background: "#FF1C51!important",
    transition: "0.3s all ease!important",
    "&:hover": {
      background: "#fff!important",
      color: "#0C0C0C!important",
      transform: "scale(1.1)",
    },
  },
  fineyButton2: {
    background: "#0C0C0C!important",
  },
  fineyRight: {
    width: "50%",
    [theme.breakpoints.between("xs", "md")]: {
      width: "100%",
      margin: "0 0 50px",
    },
  },
  fineyImg: {
    width: "100%",
    float: "left",
    transition: "0.3s all ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  homeSlider: {
    width: "100%",
    display: "inline-block",
    padding: "100px 0",
    background: "#1d1d1d",
    [theme.breakpoints.between("xs", "md")]: {
      padding: "50px 0",
    },
  },
  homeSliderH3: {
    width: "25%",
    fontSize: "20px!important",
    margin: "0 0 25px!important",
    padding: "0 0 2px",
    fontWeight: "600!important",
    fontFamily: "Poppins!important",
    borderBottom: "2px solid #FF1C51",
    color: "#fff",
  },
  homeBox: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    columnGap: "12px",
  },
  homeSliderImg: {
    width: "200px !important",
    padding: "10px !important",
  },
  homeSliderTxt: {
    width: "35%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
    },
  },
  homeSliderTxtt: {
    width: "35%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
    },
  },
  homeSliderH5: {
    fontSize: "16px!important",

    fontWeight: "500!important",
    fontFamily: "Poppins!important",
    color: "#fff",
  },
  fairpay: {
    fontSize: "16px!important",
    margin: "0 0 5px!important",
    fontWeight: "500!important",
    fontFamily: "Poppins!important",
    color: "#fff !important",
    backgroundColor: "red !important",
  },
  homeSliderP: {
    fontSize: "14px!important",
    fontWeight: "200!important",
    fontFamily: "Poppins!important",
    color: "#fff",

    // ['@media  (min-width:768px)']:{
    //    position:"relative",
    //    top:"6px"
    //   },
    //   ['@media  (min-width:768px)']:{
    //     position:"relative",
    //     top:"12px"
    //    },
  },
  homeSliderP1: {
    fontSize: "14px!important",
    fontWeight: "200!important",
    fontFamily: "Poppins!important",
    color: "#fff",
    marginLeft: "14px",
  },
  homeStudio: {
    width: "100%",
    float: "left",
    height: "675px",

    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    //    backgroundSize: 'cover',
    //    position: 'fixed',
    //    top: '0px',
    //   bottom: '0px',
    //   left: '0px',
    //   right: '0px',
    //   zIndex: '-1',
    //   WebkitTransform: 'translateZ(0)',
    background: "fixed",
    // backgroundRepeat:'no-repeat',
    // backgroundSize:'cover',
    // backgroundPosition:'letf top',
    // backgroundPosition: '20% !important',
    backgroundSize: "cover !important",
    // backgroundAttachment: 'fixed !important',
    // WebkitBackgroundSize:"cover !important",
    [theme.breakpoints.between("md", "lg")]: {
      height: "500px",
    },

    // ['@media (max-width:475px)']: {
    //     backgroundAttachment: 'unset !important',
    //   }
  },
  homeProducts: {
    width: "100%",
    float: "left",
    padding: "100px 0",
    background: "#1d1d1d",
    [theme.breakpoints.between("sm", "lg")]: {
      padding: "70px 0",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "50px 0",
    },
  },
  productContainer: {
    display: "flex!important",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  productH3: {
    width: "100%",
    fontSize: "20px!important",
    margin: "0 0 50px!important",
    fontWeight: "600!important",
    fontFamily: "Poppins!important",
    color: "#fff",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "25%",
      height: "2px",
      background: "#FF1C51",
      bottom: "-5px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 0 30px!important",
      "&::before": {
        width: "50%",
      },
    },
  },
  productBox: {
    width: "calc(33.33% - 20px)",
    padding: "65px 30px 50px",
    display: "flex",
    flexDirection: "column",
    background: "#565656",
    boxSizing: "border-box",
    borderRadius: "10px",
    transition: "0.3s all ease",
    "&:hover": {
      transform: "scale(1.03)",
      background: "#ff1c51",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "calc(33.33% - 10px)",
      padding: "40px 20px",
    },
    [theme.breakpoints.between("xs", "md")]: {
      width: "100%",
      padding: "40px 20px",
      margin: "0 0 30px",
      "&:last-child": {
        margin: "0",
      },
    },
  },
  productH5: {
    fontSize: "52px!important",
    color: "#fff",
    fontFamily: "Glacial Indifference!important",
    margin: "0 0 30px!important",
    textAlign: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      fontWeight: "700 !important",
      fontSize: "50px !important",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontWeight: "700 !important",
      fontSize: "30px !important",
    },
  },
  productImgBox: {
    display: "flex",
    justifyContent: "center",
    height: "200px",
    margin: "0 0 35px",
    overflow: "hidden",
  },
  productImg: {
    width: "100%",
    maxWidth: "max-content",
  },
  productP: {
    fontSize: "18px!important",
    color: "#fff",
    fontFamily: "Glacial Indifference!important",
    margin: "0 0 5px!important",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontWeight: "700 !important",
      fontSize: "26px !important",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontWeight: "700 !important",
      fontSize: "20px !important",
    },
  },
  newsLetter: {
    width: "100%",
    float: "left",
    padding: "0 24px 50px",
    background: "#1d1d1d",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "0 15px 30px",
    },
  },
  newsLetterContainer: {
    padding: "30px",
    background: "#565656",
    borderRadius: "20px",
    display: "flex!important",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  newsLetterText: {
    width: "calc(29% - 40px)",
    fontSize: "22px!important",
    fontFamily: "Glacial Indifference!important",
    color: "#fff",
    [theme.breakpoints.between("md", "lg")]: {
      width: "calc(40% - 25px)",
    },
    [theme.breakpoints.between("xs", "md")]: {
      width: "100%",
      fontSize: "20px!important",
      margin: "0 0 30px!important",
    },
  },
  newsLetterForm: {
    width: "71%",
    display: "flex!important",
    alignItems: "center",
    [theme.breakpoints.between("md", "lg")]: {
      width: "60%",
    },
    [theme.breakpoints.between("xs", "md")]: {
      width: "100%",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      flexWrap: "wrap",
    },
  },
  newsLetterInput: {
    width: "100%",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 0 15px!important",
    },
  },
  newsLetterButton: {
    fontSize: "16px!important",
    padding: "10px 40px!important",
    margin: "0 0 0 15px!important",
    fontFamily: "Glacial Indifference!important",
    textTransform: "none!important",
    borderRadius: "25px!important",
    background: "#FF1C51!important",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      margin: "0!important",
    },
    "&:hover": {
      background: "#fff!important",
      color: "#000!important",
    },
  },
  multilineColor: {
    color: "#fff !important",
    padding: "12.5px 40px !important",
    fontFamily: "poppins !important",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "12px!important",
      padding: "12.5px 20px !important",
    },
  },
  productBoxtypo: {
    marginTop: "30px !important",
  },
  // homeSliderImg2:{
  //     width: "160px important",
  // margin: " 0px 39px 13px !important"
  // },
  // homeSliderP12:{
  //     ['@media  (min-width:768px)']:{
  //     fontSize: "10px !important",
  // margin: "3px 0 48px 0 !important",}
  // }

  homeSlidercontent: {
    margin: "6px 94px 9px 10px !important",
    ["@media  (min-width:1024px)"]: {
      margin: "6px 35px 9px 10px !important",
    },
    ["@media  (max-width:768px)"]: {
      textAlign: "left",
      margin: "6px -3px 8px 9px !important",
    },
    ["@media  (max-width:475px)"]: {
      textAlign: "center",
      margin: "0 !important",
    },
  },
  mainb: {
    display: "flex !important",
    ["@media  (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  min: {
    ["@media  (max-width:768px)"]: {
      alignItems: "center",
    },
    ["@media  (max-width:475px)"]: {
      flexDirection: "column",
    },
  },
}));
