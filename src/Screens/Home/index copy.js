import React, { useState } from "react";
import CustomTabsComponent from "../../component/Tabs";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Box,
  IconButton,
  Divider,
  Typography,
  Grid,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useStyles } from "../../constant/customStyle";
import CustomBiddingCard from "../../component/BiddingCard";
import CloseIcon from "@mui/icons-material/Close";
import CustomRecentlyPurchasedCard from "../../component/RecentlyPurchasedCard";
import CutomCartCard from "../../component/Carts";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { categoryData } from "../../constant/dropdown/category";
import CustomSubscriberCard from "../../component/Subscriber";
import profile from "../../assets/profile.png";
import CustomOnSaleCard from "../../component/OnSaleCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Carousel, { consts } from "react-elastic-carousel";

export const TabComponentCarts = () => {
  const classes = useStyles();

  return <CutomCartCard />;
};

export const TabComponentBidding = () => {
  const classes = useStyles();

  return (
    <>
      <CustomBiddingCard />
      <CustomBiddingCard />
      <CustomBiddingCard />
      <Box sx={{ marginBottom: 5, marginTop: 5, padding: "10px 50px" }}>
        <Button
          variant="contained"
          size="large"
          className={classes.checkButton}
        >
          Check
        </Button>
        <Button variant="text" className={classes.closeButton}>
          Close
        </Button>
      </Box>
    </>
  );
};

export const TabComponentRecently = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CustomRecentlyPurchasedCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomRecentlyPurchasedCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomRecentlyPurchasedCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomRecentlyPurchasedCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomRecentlyPurchasedCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomRecentlyPurchasedCard />
        </Grid>
        <Box sx={{ marginBottom: 5, marginTop: 5, padding: "10px 50px" }}>
          <Button variant="text" className={classes.recentlyButton}>
            Close
          </Button>
        </Box>
      </Grid>
    </>
  );
};

const tabs = [
  {
    name: "Cart",
    value: "1",
  },
  {
    name: "Bidding",
    value: "2",
  },
  {
    name: "Wishlist",
    value: "3",
  },
  {
    name: "Recently Purchased",
    value: "4",
  },
];

const tabsPanel = [
  {
    component: <TabComponentBidding />,
    value: "1",
  },
  {
    component: <TabComponentBidding />,
    value: "2",
  },
  {
    component: <TabComponentRecently />,
    value: "3",
  },
  {
    component: <TabComponentRecently />,
    value: "4",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    // breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    // breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    // breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    // breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = () => {};

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <KeyboardArrowLeftIcon sx={{ color: "#FF1C51", fontSize: "36px" }} />
      ) : (
        <KeyboardArrowRightIcon sx={{ color: "#FF1C51", fontSize: "36px" }} />
      );
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      {/* <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth PaperProps={{ style: { borderRadius: 20, backgroundColor: '#1D1D1D', border: '2px solid #707070', maxWidth: 1073 } }}> */}
      <Dialog
        classes={{ paper: classes.paper }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: 20,
            backgroundColor: "#1D1D1D",
            border: "2px solid #707070",
            maxWidth: 1073,
          },
        }}
      >
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6} md={6} sx={{ marginBottom: 1 }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontWeight: 400,
                  color: "#fff",
                  fontSize: 20,
                  marginBottom: 0.5,
                }}
              >
                Choose Media Type
              </Typography>
              <FormControl fullWidth>
                <Select
                  onChange={handleChange}
                  size="small"
                  MenuProps={{ classes: { paper: classes.select } }}
                  inputProps={{ classes: { icon: classes.icon } }}
                  className={classes.root}
                >
                  {categoryData.map((data, index) => {
                    return (
                      <MenuItem value={data.value} key={index++}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6} md={6} sx={{ marginBottom: 1 }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#fff",
                  fontSize: 20,
                  marginBottom: 0.5,
                  fontWeight: 600,
                }}
              >
                Subscribers
              </Typography>
              <Divider
                sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 1, marginBottom: 5 }}>
            <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1 }}>
              <CustomSubscriberCard name={"Black Glass"} image={profile} />
            </Grid>
            <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1 }}>
              <CustomSubscriberCard name={"Black Glass"} image={profile} />
            </Grid>
            <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1 }}>
              <CustomSubscriberCard name={"Black Glass"} image={profile} />
            </Grid>
            <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1 }}>
              <CustomSubscriberCard name={"Black Glass"} image={profile} />
            </Grid>
            <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1 }}>
              <CustomSubscriberCard name={"Black Glass"} image={profile} />
            </Grid>
            <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1 }}>
              <CustomSubscriberCard name={"Black Glass"} image={profile} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6} md={6} sx={{ marginBottom: 1 }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#fff",
                  fontSize: 20,
                  marginBottom: 0.5,
                  fontWeight: 600,
                }}
              >
                On-Sale
              </Typography>
              <Divider
                sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 5, marginBottom: 5 }}>
            <Carousel
              itemsToScroll={1}
              itemsToShow={3}
              enableAutoPlay={true}
              renderArrow={myArrow}
            >
              {Array.from({ length: 41 }).map((item, index) => (
                <CustomOnSaleCard />
              ))}
            </Carousel>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1 }}>
              <Divider
                sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
              />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "20px" }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6} md={6} sx={{ marginBottom: 1 }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#fff",
                  fontSize: 20,
                  marginBottom: 0.5,
                  fontWeight: 600,
                }}
              >
                Bidding
              </Typography>
              <Divider
                sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 5, marginBottom: 5 }}>
            <Carousel
              itemsToScroll={1}
              itemsToShow={3}
              enableAutoPlay={true}
              renderArrow={myArrow}
            >
              {Array.from({ length: 41 }).map((item, index) => (
                <CustomOnSaleCard />
              ))}
            </Carousel>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1 }}>
              <Divider
                sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <IconButton onClick={handleClose} className={classes.customizedButton}>
          {/* <CancelIcon fontSize={'large'} /> */}
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>
    </div>
  );
};

export default HomeScreen;
