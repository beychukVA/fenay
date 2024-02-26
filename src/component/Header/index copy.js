import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, Dialog, DialogContent, Divider, Drawer, FormControl, Grid, IconButton, InputBase, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import { HiOutlineDotsVertical } from "react-icons/hi";
import Notifications from "react-notifications-menu";
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Notification from '../../assets/notification.svg';
import profile from '../../assets/profile.png';
import Store from '../../assets/store.svg';
import User from '../../assets/user.svg';
import CustomOnSaleCard from '../../component/OnSaleCard';
import CustomSubscriberCard from '../../component/Subscriber';
import { useStyles } from '../../constant/customStyle';
import { categoryData } from '../../constant/dropdown/category';
import { get_time_diff } from '../../helpers/timeDiff';
import { GetNotifications } from '../../Services/Notifications';

const DEFAULT_NOTIFICATION = {
    image:
        "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
    message: "Notification one.",
    detailPage: "/events",
    receivedTime: "12h ago"
};

const pages = [
    {
        id: 1,
        name: 'Explore',
        link: 'Explore'
    },
    {
        id: 2,
        name: 'Community',
        link: 'community'
    },
    {
        id: 3,
        name: 'Create',
        link: 'create'
    }
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '25px',
    backgroundColor: '#fff',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    color: '#000',
    [theme.breakpoints.up('sm')]: {
        width: '100%',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        padding: '20px 10px 20px 20px',
        transition: theme.transitions.create('width'),
        // width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '90%',
        },
    },
}));

const SearchIconWrapper = styled('span')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%'
}));

const Header = ({ blur }) => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const [value, setValue] = useState(1)
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
    ];

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    }

    let navigate = useNavigate()


    const [data, setData] = useState([DEFAULT_NOTIFICATION]);
    const [message, setMessage] = useState("");


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleClickOpen = () => {
        setOpen(true)
        blur(true)
    }

    const handleClose = () => {
        setOpen(false)
        blur(false)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleProfileRoute = () => {
        navigate(`/profile`)
    }

    const handleSettingRoute = () => {
        navigate(`/settings`)
    }

    const handleLogoutRoute = () => {
        var rememberMe = localStorage.getItem('rememberMe');
        localStorage.clear()
        localStorage.setItem('rememberMe',rememberMe);
        window.location.reload()
        navigate(`/logout`)
    }

    const handleRouteTerms = () => {
        navigate('/terms')
    }


    useEffect(() => {
        getNotifications()
    }, [])


    const getNotifications = async () => {
        const res = await GetNotifications()
        const notiData = res.map(not => {
            const obj = {
                image:
                    "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
                message: not.message,
                receivedTime: `${get_time_diff(not.createdAt)}`,
                detailPage: "/"
            }
            return obj
        })

        setData(notiData)
    }


    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <KeyboardArrowLeftIcon sx={{ color: '#FF1C51', fontSize: '36px' }} /> : <KeyboardArrowRightIcon sx={{ color: '#FF1C51', fontSize: '36px' }} />
        return (
            <Button onClick={onClick} disabled={isEdge} sx={{ minWidth: '10px', padding: 0 }}>
                {pointer}
            </Button>
        )
    }

    const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose} >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // )

    const mobileMenuId = 'primary-search-account-menu-mobile';
    // const renderMobileMenu = (
    //     <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose} >
    //         <MenuItem>
    //             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
    //                 <Badge badgeContent={4} color="error">
    //                     <MailIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Messages</p>
    //         </MenuItem>
    //         <MenuItem>
    //             <IconButton size="large"  aria-label="show 17 new notifications" color="inherit" >
    //                 <Badge badgeContent={17} color="error">
    //                     <NotificationsIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Notifications</p>
    //         </MenuItem>
    //         <MenuItem onClick={handleProfileMenuOpen}>
    //             <IconButton size="large"  aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit" >
    //                 <AccountCircle />
    //             </IconButton>
    //             <p>Profile</p>
    //         </MenuItem>
    //     </Menu>
    // )

    const list = (anchor) => (
        <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" >
            <Box sx={{ padding: '10px 10px' }}>
                {/* <Search>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: '#8D8D8D' }} />
                        </SearchIconWrapper>
                    </Box>
                    <StyledInputBase placeholder="Search Collection" inputProps={{ 'aria-label': 'search' }} sx={{ paddingLeft: 0 }} />
                </Search> */}
            </Box>
            <List>
                {pages.map((page) => (
                    <ListItem button>
                        <Link to={`/${page.link}`} style={{ textDecoration: 'none' }}>
                            <ListItemText primary={<Typography sx={{ display: 'inline', fontSize: '20px', color: '#fff', textTransform: 'capitalize', fontFamily: 'poppins' }} component="span" variant="body2" color="text.primary" >
                                {page.name}
                            </Typography>} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }} className={open ? classes.blur : ''}>

            <AppBar position="static" sx={{ backgroundColor: "#1D1D1D", color: 'transparent', boxShadow: '0px 5px 24px -20px #ff1c51' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: 'auto', display: 'flex' }}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} onClick={handleRouteTerms} >
                            <HiOutlineDotsVertical style={{ color: '#FF1C51', fontSize: '39px' }} />
                        </IconButton>
                        <Box sx={{ width: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={handleProfileRoute}>
                            <img src={Logo} alt='' className={classes.img} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '37%' }}>
                        <Search sx={{ backgroundColor: "#4a4949 ", }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <SearchIconWrapper>
                                    <SearchIcon sx={{ color: '#FF1C51' }} />
                                </SearchIconWrapper>
                            </Box>
                            <StyledInputBase placeholder="Search Collection" inputProps={{ 'aria-label': 'search' }} sx={{ width: '100%', color: "#FFFFFF " }} />
                        </Search>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex', width: '25%', alignItems: "center", justifyContent: 'space-between', marginRight: '5%' } }}>
                        {/*<IconButton size="large" aria-label="show 17 new notifications" color="inherit" sx={{padding:'0px'}}>
                            <NotificationsIcon sx={{ color: '#FF1C51', fontSize: '43px;' }} />
    </IconButton> */}
                        <Notifications
                            data={data}
                            header={{
                                title: "Notifications",
                                option: { text: "View All", onClick: () => console.log("Clicked") },
                                textColor: "white"
                            }}
                            markAsRead={(data) => {
                            }}
                            icon={Notification}
                        />
                        <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleClickOpen} color="inherit" >
                            <Box sx={{ width: '35.64px', height: '33.76px' }}>
                                <img src={Store} alt={''} className={classes.img} />
                            </Box>
                        </IconButton>
                        <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleMenu} color="inherit" >
                            <Box sx={{ width: '31px', height: '31px' }}>
                                <img src={User} alt={''} className={classes.img} />
                            </Box>
                        </IconButton>
                        <IconButton sx={{ marginLeft: '15px' }} size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={toggleDrawer('right', true)} color="inherit" >
                            <MenuIcon sx={{ fontSize: '35px', color: '#707070' }} />
                        </IconButton>
                        <Menu className={classes.menu} id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem onClick={handleProfileRoute}>Profile</MenuItem>
                            <MenuItem className="menuItem" onClick={handleSettingRoute}>Settings</MenuItem>
                            <MenuItem className="menuItem" onClick={handleLogoutRoute}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit" >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* {renderMobileMenu}
            {renderMenu} */}
            {/* <Button onClick={toggleDrawer('right', true)}>DANIYAL</Button> */}
            <Drawer anchor={'right'} open={state['right']} classes={{ paper: classes.drawerPaper }} onClose={toggleDrawer('right', false)} >
                {list('right')}
            </Drawer>

            <Dialog className='header-scroll' classes={{ paper: classes.paper }} open={open} maxWidth={'lg'} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth PaperProps={{ style: { borderRadius: 20, backgroundColor: '#1D1D1D', border: '2px solid #707070' } }}>
                <DialogContent>
                    <Grid container spacing={2} sx={{ padding: '0px 40px', marginBottom: 5 }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography sx={{ fontFamily: 'poppins', fontWeight: 400, color: '#fff', fontSize: 20, marginBottom: 0.5, }}>Choose Media Type</Typography>
                            <FormControl fullWidth className={[classes.removeMarginTop, classes.socialFriendDropdown]}>
                                <Select
                                    inputProps={{ classes: { icon: classes.icon } }}
                                    size='small'
                                    className={classes.rootMedia}
                                    MenuProps={{ classes: { paper: classes.select }, }}
                                    value={value}
                                    onChange={handleChange}
                                >
                                    {categoryData.map((data, index) => {
                                        return (
                                            <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ marginBottom: 1, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography sx={{ fontFamily: 'poppins', color: '#fff', fontSize: 20, marginBottom: 0.5, fontWeight: 600 }}>Subscribers</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ marginTop: 1, marginBottom: 5, padding: '0px 20px' }}>
                        {Array.from({ length: 5 }).map((item, index) => (
                            <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1, }}>
                                <CustomSubscriberCard name={'Black Glass'} image={profile} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2} sx={{ marginBottom: 1, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography sx={{ fontFamily: 'poppins', color: '#fff', fontSize: 20, marginBottom: 0.5, fontWeight: 600 }}>On-Sale</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                        <Carousel itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints} itemPadding={[0, 20]} outerSpacing={-15}
                            onResize={currentBreakPoint => } pagination={false}>
                            {Array.from({ length: 41 }).map((item, index) => (
                                <CustomOnSaleCard />
                            ))}
                        </Carousel>
                    </Box>
                    <Grid container spacing={2} sx={{ marginBottom: 1, marginTop: 5, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1, }}>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: '20px' }} />
                    <Grid container spacing={2} sx={{ marginBottom: 1, marginTop: 5, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography sx={{ fontFamily: 'poppins', color: '#fff', fontSize: 20, marginBottom: 0.5, fontWeight: 600 }}>Bidding</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                        <Carousel itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints} itemPadding={[0, 20]} outerSpacing={-15}
                            onResize={currentBreakPoint => null} renderPagination={({ pages, activePage, onClick }) => {
                                return (
                                    <Box direction="row">
                                        {pages.map(page => {
                                            const isActivePage = activePage === page
                                            return (
                                                <KeyboardArrowLeftIcon
                                                    key={page}
                                                    onClick={() => onClick(page)}
                                                    active={isActivePage}
                                                    sx={{ display: 'none' }}
                                                />
                                            )
                                        })}
                                    </Box>
                                )
                            }}>
                            {Array.from({ length: 41 }).map((item, index) => (
                                <CustomOnSaleCard />
                            ))}
                        </Carousel>
                    </Box>

                    <Grid container spacing={2} sx={{ marginBottom: 5, marginTop: 5, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1, }}>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <IconButton className={classes.customizedButton}>
                    <CloseIcon fontSize={'large'} onClick={handleClose} />
                </IconButton>
            </Dialog>
        </Box>

    )
}

export default Header