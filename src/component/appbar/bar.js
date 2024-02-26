import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import FiMoreVertical from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import CustomOnSaleCard from "../../component/OnSaleCard";
import CustomSubscriberCard from "../../component/Subscriber";
import { useStyles } from "../../constant/customStyle";
import { categoryData } from "../../constant/dropdown/category";
import { icon } from "../../constant/item";
import ExploreTitle from "../../Screens/Home/component/ExploreTitle";
import "./bar.css";

const pages = [
  {
    id: 1,
    name: "Explorer",
    link: "explorer",
  },
  {
    id: 2,
    name: "Community",
    link: "community",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  let navigate = useNavigate();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    navigate(`/${path}`);
    if (path !== "profile") setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        sx={{ minWidth: "10px", padding: 0 }}
      >
        {pointer}
      </Button>
    );
  };

  const handleChange = () => {};

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#1D1D1D" }}>
        <Container maxWidth="false">
          <Toolbar disableGutters>
            <IconButton
              aria-label="display more actions"
              edge="end"
              style={{ color: "#FF1C51", marginRight: 20 }}
            >
              <FiMoreVertical
                style={{ width: "28px", color: "rgb(255, 28, 81);" }}
              />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 1, flexGrow: 50, display: { xs: "none", md: "flex" } }}
            >
              <img style={{ width: "57px" }} src={logo} />
            </Typography>

            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img src={logo} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {icon.map((data) => {
                return (
                  <>
                    {data.link === "profile" ? (
                      <Button
                        key={data.id}
                        onClick={() => handleCloseNavMenu(data.link)}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {data.icon}
                      </Button>
                    ) : (
                      <Button
                        key={data.id}
                        onClick={handleClickOpen}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {data.icon}
                      </Button>
                    )}
                  </>
                );
              })}
            </Box>
            <Box sx={{ display: { xs: "flex" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ fontSize: 47, color: "#8E8E8E" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.id}
                    onClick={() => handleCloseNavMenu(page.link)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog
        classes={{ paper: classes.paper }}
        open={open}
        maxWidth={"lg"}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: 20,
            backgroundColor: "#1D1D1D",
            border: "2px solid #707070",
          },
        }}
      >
        <DialogContent>
          <Grid
            container
            spacing={2}
            sx={{ padding: "0px 40px", marginBottom: 5 }}
          >
            <Grid item xs={12} sm={12} lg={6} md={6}>
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
          <ExploreTitle title="Subsciber" />

          <Grid
            container
            spacing={2}
            sx={{ marginTop: 1, marginBottom: 5, padding: "0px 20px" }}
          >
            {Array.from({ length: 5 }).map((item, index) => (
              <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1 }}>
                <CustomSubscriberCard name={"Black Glass"} image={profile} />
              </Grid>
            ))}
          </Grid>
          <ExploreTitle title="On-Sale" />
          <Box sx={{ marginTop: 5, marginBottom: 5 }}>
            <Carousel
              itemsToScroll={1}
              enableAutoPlay={false}
              renderArrow={myArrow}
              breakPoints={breakPoints}
              itemPadding={[0, 20]}
              outerSpacing={-15}
              onResize={(currentBreakPoint) => null}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <Box direction="row">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
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
              {Array.from({ length: 41 }).map((item, index) => (
                <CustomOnSaleCard />
              ))}
            </Carousel>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ marginBottom: 1, marginTop: 5, padding: "0px 40px" }}
          >
            <Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1 }}>
              <Divider
                sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
              />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "20px" }} />
          <Grid
            container
            spacing={2}
            sx={{ marginBottom: 1, marginTop: 5, padding: "0px 40px" }}
          >
            <Grid item xs={12} sm={12} lg={6} md={6}>
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
              enableAutoPlay={false}
              renderArrow={myArrow}
              breakPoints={breakPoints}
              itemPadding={[0, 20]}
              outerSpacing={-15}
              onResize={(currentBreakPoint) => null}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <Box direction="row">
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
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
              {Array.from({ length: 41 }).map((item, index) => (
                <CustomOnSaleCard />
              ))}
            </Carousel>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{ marginBottom: 5, marginTop: 5, padding: "0px 40px" }}
          >
            <Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1 }}>
              <Divider
                sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <IconButton onClick={handleClose} className={classes.customizedButton}>
          <CloseIcon fontSize={"large"} />
        </IconButton>
      </Dialog>
    </>
  );
};
export default ResponsiveAppBar;
