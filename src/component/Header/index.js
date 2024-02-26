import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import {
	AppBar,
	Autocomplete,
	Box,
	Button,
	Dialog,
	DialogContent,
	Divider,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Menu,
	MenuItem,
	TextField,
	Toolbar,
	Typography,
	InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext, useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import { useGoogleAuth } from 'react-gapi-auth2';
import Notifications from 'react-notifications-menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ChatIcon from '../../assets/ChatIcon.svg';
import Logo from '../../assets/LogoIcon.svg';
import NotificationIcon from '../../assets/NotificationIcon.svg';
import UserIcon from '../../assets/UserIcon.svg';
import CustomSubscriberCard from '../Subscriber';
import { useStyles } from '../../constant/customStyle';
import { AuthContext } from '../../provider/AuthProvider/AuthContext';
import ExploreTitle from '../../Screens/Home/components/ExploreTitle';
import { GetSearch } from '../../Services/Search';
import { UpdateUser } from '../../Services/User';
import ChatComponent from '../Chat';
import MusicLibrary from '../MusicLibrary';
import IconSearch from '../../assets/IconSearch.svg';
import WalletIcon from '../../assets/WalletIcon.svg';
import ChevronRightIcon from '../../assets/ChevronRightIcon.svg';
import ProfileIcon from '../../assets/ProfileIcon.svg';
import SettingsIcon from '../../assets/SettingsIcon.svg';
import SignOutIcon from '../../assets/SignOutIcon.svg';
import HomeIcon from '../../assets/HomeIcon.svg';
import CommunityIcon from '../../assets/CommunityIcon.svg';
import ExploreIcon from '../../assets/ExploreIcon.svg';
import MyStoreIcon from '../../assets/MyStoreIcon.svg';
import LibraryIcon from '../../assets/libraryIcon.svg';
import SavedIcon from '../../assets/SavedIcon.svg';
import CalendarIcon from '../../assets/CalendarIcon.svg';
import ProfileIcon2 from '../../assets/ProfileIcon2.svg';
import SettingsIcon2 from '../../assets/SettingsIcon2.svg';
import DiscordIcon from '../../assets/DiscordIcon.svg';
import LogOutIcon from '../../assets/LogOutIcon.svg';
import { Profile } from '../../Services/Auth';
const dummyImage =
	'https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png';

const pages = [
	{
		id: 1,
		name: 'Home',
		link: '/',
		image: HomeIcon,
	},
	{
		id: 2,
		name: 'Community',
		link: '/community',
		image: CommunityIcon,
	},
	{
		id: 3,
		name: 'Explore',
		link: '/explore',
		image: ExploreIcon,
	},
	{
		id: 4,
		name: 'My Store',
		link: '/my-store',
		image: MyStoreIcon,
	},
	{
		id: 5,
		name: 'Library',
		link: '/library',
		image: LibraryIcon,
	},
];

const sidebarMenu = [
	{
		id: 6,
		name: 'Saved',
		link: '/saved',
		image: SavedIcon,
	},
	{
		id: 7,
		name: 'Calendar',
		link: '/calendar',
		image: CalendarIcon,
	},
	{
		id: 8,
		name: 'Profile',
		link: '/profile',
		image: ProfileIcon2,
	},
	{
		id: 9,
		name: 'Settings',
		link: '/settings',
		image: SettingsIcon2,
	},
	{
		id: 10,
		name: 'Discord',
		link: '/discord',
		image: DiscordIcon,
	},
	{
		id: 11,
		name: 'Log out',
		link: '/log-out',
		image: LogOutIcon,
	},
];

const StyledInputBase = styled(TextField)(({ theme }) => ({
	color: '#fff',
	input: {
		color: '#fff',
	},
	'.MuiSvgIcon-root': {
		color: '#fff',
	},
	'& .MuiInputBase-input': {
		// padding: theme.spacing(1, 1, 1, 0),
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

const Header = ({ blur, setSongUrl, setSongDetails, setLeftSidebarOpen }) => {
	const classes = useStyles();
	const { signOut, credentials } = useContext(AuthContext);
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const [isLogin, setLogin] = useState(credentials);
	const [user, setUser] = useState(null);

	useEffect(() => setLogin(credentials), [credentials]);

	const getUserInfo = async () => {
		const token = localStorage.getItem('token');
		await Profile(token)
			.then((res) => {
				console.log('user info: ', res);
				setUser(res.user);
			})
			.catch((error) => {
				console.log('user info error: ', error);
			});
	};

	useEffect(() => getUserInfo(), []);

	const getUserName = () => {
		if (!credentials) {
			return '';
		}
		if (user?.firstName && user?.lastName) {
			return `${user.firstName} ${user.lastName}`;
		}
		return localStorage.getItem('email');
	};

	const [openMusicLibrary, setOpenMusicLibrary] = useState(false);

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	// eslint-disable-next-line no-unused-vars
	const [regularNfts, setregularNfts] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [MyId, setMyId] = useState(null);
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2, itemsToScroll: 1 },
		{ width: 768, itemsToShow: 5 },
		{ width: 1200, itemsToShow: 5 },
	];

	const checkCurrentSidebareTab = (link) => link === location.pathname;

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [anchor]: open });
		setLeftSidebarOpen(state.right);
	};

	let navigate = useNavigate();
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState([]);

	const [anchorEl, setAnchorEl] = React.useState(null);
	// eslint-disable-next-line no-unused-vars
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const [inputValue, setInputValue] = useState('');
	const [openSearch, setOpenSearch] = useState(false);
	const [searchedUsers, setSearchedUsers] = useState([]);
	const { googleAuth } = useGoogleAuth();

	// eslint-disable-next-line no-unused-vars
	const [subscribers, setSubscribers] = useState([]);
	const matches = useMediaQuery('(max-width:768px)');
	// const fetchNfts = async () => {
	//   const { _id } = await parseJwt();
	//   const res2 = await GetUserRegularSongNFTs(_id);
	//   if (res2) {
	//     for (let i = 0; i < res2.length; i++) {
	//       let rnu = await GetUser(res2[i].ownerId);
	//       res2[i].userProfile = rnu;
	//     }
	//     setregularNfts(res2);
	//   }
	// };

	const handleOpen = () => {
		if (inputValue.length > 0) {
			setOpenSearch(true);
		}
	};
	const handleInputChange = async (event, newInputValue) => {
		if (newInputValue !== 'undefined') {
			setInputValue(newInputValue);
		}
		// if (newInputValue.length > 0) {
		//   setOpenSearch(true);
		// } else {
		//   setOpenSearch(false);
		// }
	};
	useEffect(() => {
		const getSearch = async () => {
			if (inputValue !== '') {
				const response = await GetSearch(inputValue);
				setSearchedUsers(
					response.map((user) => ({
						id: user._id,
						title: `${user.name ? user.name : user.email}`,
						image: user.profilePicture ? user.profilePicture : dummyImage,
					}))
				);
			}
		};
		getSearch();
	}, [inputValue]);

	useEffect(() => {
		const checkOpenSearch = async () => {
			if (searchedUsers.length > 0) {
				setOpenSearch(true);
			} else {
				setOpenSearch(false);
			}
		};
		checkOpenSearch();
	}, [searchedUsers]);

	const clickSearchResult = (id) => {
		navigate('/profile?id=' + id);
		setOpenSearch(false);
		// window.location.reload();
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleClose = () => {
		setOpen(false);
		blur(false);
	};

	const handleCreateWallet = () => {};

	const handleProfileRoute = () => {
		navigate(`/profile`);
	};

	const handleHomeRoute = () => {
		navigate(`/`);
	};

	const handleSettingRoute = () => {
		navigate(`/settings`);
	};

	const handleLogoutRoute = async () => {
		// try {
		//   const response = await UpdateUser({ isOnline: false });
		// } catch (error) {
		//   console.log(
		//     `🚀 ~ file: index.js ~ line 296 ~ handleLogoutRoute ~ error`,
		//     error
		//   );
		// }
		var rememberMe = localStorage.getItem('rememberMe');
		localStorage.clear();
		localStorage.setItem('rememberMe', rememberMe);
		googleAuth && googleAuth.signOut();
		signOut();
		navigate(`/`);
	};

	const handleNotificationRead = async () => {
		if (data.length > 0) {
			const latestCreatedTime = data[0].createdTime;
			await UpdateUser({ lastNotificationRead: latestCreatedTime });
		}
	};

	// const getNotifications = async () => {
	//   const res = await GetNotifications();
	//   const userInfo = await GetUser();
	//   let filterNotifications = [];
	//   if (userInfo.lastNotificationRead) {
	//     filterNotifications = res.filter(
	//       (notification) =>
	//         new Date(notification.createdAt) >
	//         new Date(userInfo.lastNotificationRead)
	//     );
	//   } else {
	//     filterNotifications = res;
	//   }
	//   const notiData = filterNotifications.map((not, index) => {
	//     const obj = {
	//       key: not._id,
	//       image: dummyImage,
	//       message: <p key={not._id}> {not.message} </p>,
	//       receivedTime: `${get_time_diff(not.createdAt)}`,
	//       detailPage: "/profile?id=" + not.currentId,
	//       createdTime: not.createdAt,
	//     };
	//     return obj;
	//   });

	//   setData(notiData);
	// };

	const myArrow = ({ type, onClick, isEdge }) => {
		const pointer =
			type === consts.PREV ? (
				<KeyboardArrowLeftIcon sx={{ color: '#FF1C51', fontSize: '36px' }} />
			) : (
				<KeyboardArrowRightIcon sx={{ color: '#FF1C51', fontSize: '36px' }} />
			);
		return (
			<Button
				onClick={onClick}
				disabled={isEdge}
				sx={{ minWidth: '10px', padding: 0 }}
			>
				{pointer}
			</Button>
		);
	};

	const menuId = 'primary-search-account-menu';

	const mobileMenuId = 'primary-search-account-menu-mobile';

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%' }}
			role='presentation'
		>
			<List>
				{pages.map((page) => (
					<Link key={page.id} to={page.link} style={{ textDecoration: 'none' }}>
						{' '}
						<ListItem button>
							<ListItemText
								primary={
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<Box
											sx={{
												width: '24px',
												height: '24px',
												marginRight: '1rem',
												backgroundColor: checkCurrentSidebareTab(page.link)
													? '#FF8200'
													: 'rgba(255, 255, 255, 0.6)',
												WebkitMask: `url(${page.image}) center center / 24px auto no-repeat`,
												mask: `url(${page.image}) center center / 24px auto no-repeat`,
											}}
										></Box>
										<Typography
											sx={{
												display: 'inline',
												fontSize: '1rem',
												color: checkCurrentSidebareTab(page.link)
													? '#FF8200'
													: 'rgba(255, 255, 255, 0.6)',
												textTransform: 'capitalize',
												fontFamily: 'poppins',
												whiteSpace: 'nowrap',
											}}
											component='span'
											variant='body2'
											color='text.primary'
										>
											{page.name}
										</Typography>
									</div>
								}
							/>
						</ListItem>
					</Link>
				))}
				<Box
					sx={{
						width: '100%',
						height: '1px',
						background: '#3C3C3C',
						margin: '32px 0',
					}}
				></Box>
				{isLogin ? (
					sidebarMenu.map((page) => (
						<Link
							key={page.id}
							to={page.link}
							style={{ textDecoration: 'none' }}
						>
							{' '}
							<ListItem button>
								<ListItemText
									primary={
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<Box
												sx={{
													width: '24px',
													height: '24px',
													marginRight: '1rem',
													backgroundColor: checkCurrentSidebareTab(page.link)
														? '#FF8200'
														: 'rgba(255, 255, 255, 0.6)',
													WebkitMask: `url(${page.image}) center center / 24px auto no-repeat`,
													mask: `url(${page.image}) center center / 24px auto no-repeat`,
												}}
											></Box>
											<Typography
												sx={{
													display: 'inline',
													fontSize: '1rem',
													color: checkCurrentSidebareTab(page.link)
														? '#FF8200'
														: 'rgba(255, 255, 255, 0.6)',
													textTransform: 'capitalize',
													fontFamily: 'poppins',
													whiteSpace: 'nowrap',
												}}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{page.name}
											</Typography>
										</div>
									}
								/>
							</ListItem>
						</Link>
					))
				) : (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							justifyContent: 'flex-start',
							width: '100%',
							background:
								'linear-gradient(180deg, rgba(24, 26, 32, 0.44) 0%, rgba(255, 130, 0, 0.0176) 100%)',
							backdropFilter: 'blur(25px)',
							border: '1px solid rgba(126, 126, 126, 0.31)',
							borderRadius: '8px',
							padding: '21px 24px',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Work Sans',
								fontStyle: 'normal',
								fontWeight: '400',
								fontSize: '16px',
								lineHeight: '19px',
								letterSpacing: '0.2px',
								color: '#fff',
								marginBottom: '16px',
							}}
						>
							Sign in to buy, save, engage.
						</Typography>
						<Button
							onClick={() => navigate('/login')}
							sx={{
								padding: '10px 40px',
								background: '#FF8200',
								borderRadius: '30px',
								transition: 'all 250ms ease',
								'&:hover': {
									background: 'rgba(255, 130, 0, 0.8)',
								},
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Work Sans',
									fontStyle: 'normal',
									fontWeight: '500',
									fontSize: '14px',
									lineHeight: '20px',
									color: '#323232',
									textTransform: 'none',
									whiteSpace: 'nowrap',
								}}
							>
								Sign in
							</Typography>
						</Button>
					</Box>
				)}
			</List>
		</Box>
	);

	const [chatStatus, setChatStatus] = useState(false);
	const [calendarStatus, setCalendarStatus] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);

	const blurStatus = () => {
		setOpen(!open);
	};

	const modalStatus = () => {
		setChatStatus(false);
		setCalendarStatus(false);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				position: 'sticky',
				top: '0px',
				zIndex: '999',
			}}
			className={open ? classes.blur : ''}
		>
			<AppBar
				position='static'
				sx={{
					backgroundColor: '#000',
					color: 'transparent',
					boxShadow: '0px 5px 24px -20px #ff1c51',
					width: '100vw',
				}}
			>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						zIndex: '999',
						width: '100%',
						'@media (min-width: 600px)': { minHeight: '72px' },
					}}
				>
					<Box sx={{ width: 'auto', display: 'flex' }}>
						<IconButton
							sx={{
								marginLeft: matches ? '' : state.right ? '' : '84px',
								display: { xs: 'none', md: 'flex' },
								'&:hover': {
									background: 'transparent',
								},
							}}
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={toggleDrawer('right', !state.right)}
							color='inherit'
						>
							<MenuIcon
								sx={{
									fontSize: '24px',
									color: '#fff',
									transition: 'all 250ms ease',
									'&:hover': {
										color: '#FF8200 !important',
									},
								}}
							/>
						</IconButton>
						<Menu
							className={classes.menu}
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
							keepMounted
							transformOrigin={{ vertical: 'top', horizontal: 'right' }}
							open={Boolean(anchorEl)}
							onClose={handleMenuClose}
						>
							<MenuItem
								className='item-create-wallet'
								onClick={handleCreateWallet}
							>
								<img style={{ marginLeft: '18px' }} src={WalletIcon} alt='' />
								<Typography
									sx={{
										fontStyle: 'normal',
										fontWeight: '400',
										fontSize: '14px',
										lineHeight: '86%',
										color: '#000000 !important',
										marginLeft: '12px',
									}}
								>
									Create your wallet
								</Typography>
								<img
									style={{ marginLeft: 'auto', marginRight: '8px' }}
									src={ChevronRightIcon}
									alt=''
								/>
							</MenuItem>
							<Box
								sx={{
									width: '100%',
									height: '1px',
									background: '#5C5B5B',
									margin: '17px 0 24px 0',
								}}
							></Box>
							<MenuItem onClick={handleProfileRoute}>
								<Box
									sx={{
										width: '16px',
										height: '18px',
										WebkitMask: `url(${ProfileIcon}) center center / 16px 18px no-repeat`,
										mask: `url(${ProfileIcon}) center center / 16px 18px no-repeat`,
										transition: 'all 250ms ease',
										cursor: 'pointer',
										'&:not(:hover)': {
											background: '#fff',
										},
									}}
								/>
								<Typography
									sx={{
										fontStyle: 'normal',
										fontWeight: '400',
										fontSize: '14px',
										lineHeight: '86%',
										color: '#F3F3F3',
										marginLeft: '18px',
									}}
								>
									My profile
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleSettingRoute}>
								<Box
									sx={{
										width: '16px',
										height: '18px',
										WebkitMask: `url(${SettingsIcon}) center center / 16px 18px no-repeat`,
										mask: `url(${SettingsIcon}) center center / 16px 18px no-repeat`,
										transition: 'all 250ms ease',
										cursor: 'pointer',
										'&:not(:hover)': {
											background: '#fff',
										},
									}}
								/>
								<Typography
									sx={{
										fontStyle: 'normal',
										fontWeight: '400',
										fontSize: '14px',
										lineHeight: '86%',
										color: '#F3F3F3',
										marginLeft: '18px',
									}}
								>
									Settings
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleLogoutRoute}>
								<Box
									sx={{
										width: '16px',
										height: '18px',
										WebkitMask: `url(${SignOutIcon}) center center / 16px 18px no-repeat`,
										mask: `url(${SignOutIcon}) center center / 16px 18px no-repeat`,
										transition: 'all 250ms ease',
										cursor: 'pointer',
										'&:not(:hover)': {
											background: '#fff',
										},
									}}
								/>
								<Typography
									sx={{
										fontStyle: 'normal',
										fontWeight: '400',
										fontSize: '14px',
										lineHeight: '86%',
										color: '#F3F3F3',
										marginLeft: '18px',
									}}
								>
									Sign out
								</Typography>
							</MenuItem>
						</Menu>
						<Box
							sx={{
								flexDirection: 'row',
								alignItems: 'center',
								display: { xs: 'flex', md: 'none' },
							}}
						>
							<IconButton
								size='large'
								aria-label='show more'
								aria-controls={mobileMenuId}
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'
							>
								<MoreIcon style={{ fill: '#fff' }} />
							</IconButton>
							<IconButton
								size='large'
								onClick={toggleDrawer('right', true)}
								color='inherit'
							>
								<MenuIcon style={{ fill: '#fff' }} />
							</IconButton>
						</Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: 'pointer',
								marginLeft: { xs: '24px', md: '48px' },
							}}
							onClick={handleHomeRoute}
						>
							<img
								src={Logo}
								alt=''
								style={{ width: '16px', height: '41px' }}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							width: { xs: '100%', md: '461px' },
							background: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid #515151',
							borderRadius: '4px',
							marginLeft: { xs: '40px', md: state.right ? '115px' : '79px' },
						}}
					>
						<Autocomplete
							id='combo-box-demo'
							open={openSearch}
							onOpen={handleOpen}
							onClose={() => setOpenSearch(false)}
							inputValue={inputValue}
							onInputChange={handleInputChange}
							options={searchedUsers}
							getOptionLabel={(option) => option.title}
							renderOption={(props, option) => (
								<Box
									onClick={() => clickSearchResult(option.id)}
									style={{
										display: 'flex',
										alignItems: 'center',
										padding: '1em',
										cursor: 'pointer',
										background: '#1d1d1d',
										color: '#fff',
										borderBottom: 'solid 1px #3d3d3d',
									}}
								>
									<IconButton
										style={{
											width: '50px',
											height: '50px',
											backgroundImage: `url(${option.image})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center center',
											backgroundRepeat: 'no-repeat',
											borderRadius: '100%',
										}}
										size='small'
										color='primary'
									></IconButton>
									<div style={{ marginLeft: '1em' }}>{option.title}</div>
								</Box>
							)}
							freeSolo
							renderInput={(params) => (
								<StyledInputBase
									{...params}
									placeholder='Search music, artists, events...'
									InputProps={{
										...params.InputProps,
										startAdornment: (
											<InputAdornment position='start'>
												<img
													src={IconSearch}
													alt=''
													style={{ width: '24px', height: '24px' }}
												/>
											</InputAdornment>
										),
									}}
								/>
							)}
						/>
					</Box>
					<Box
						style={{ alignItems: 'center' }}
						sx={{
							display: {
								xs: 'none',
								md: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
							},
							marginRight: { md: '35px', lg: '150px' },
							marginLeft: 'auto',
						}}
					>
						{isLogin ? (
							<>
								<IconButton
									size='large'
									edge='end'
									aria-label='account of current user'
									aria-controls={menuId}
									aria-haspopup='true'
									onClick={() => navigate('/chat')}
									color='inherit'
									sx={{
										padding: '0',
										margin: '0',
										'&:hover': {
											background: 'transparent',
										},
									}}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											heigth: '100%',
										}}
									>
										<Box
											sx={{
												width: '24px',
												height: '24px',
												transition: 'all 250ms ease',
												WebkitMask: `url(${ChatIcon}) center center / 24px 24px no-repeat`,
												mask: `url(${ChatIcon}) center center / 24px 24px no-repeat`,
												'&:not(:hover)': {
													background: 'white',
												},
												'&:hover': {
													background: '#FF8200',
												},
											}}
										></Box>
									</Box>
								</IconButton>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										height: '100%',
										marginLeft: '32px',
										'& .notifications .icon': {
											width: '24px',
											height: '24px',
											transition: 'all 250ms ease',
											cursor: 'pointer',
											WebkitMask: `url(${NotificationIcon}) center center / 24px 24px no-repeat`,
											mask: `url(${NotificationIcon}) center center / 24px 24px no-repeat`,
											'&:not(:hover)': {
												background: 'white',
											},
											'&:hover': {
												background: '#FF8200',
											},
										},
										'& .notifications .icon .image': {
											width: '0px',
											height: '0px',
										},
									}}
									onClick={handleNotificationRead}
								>
									<Notifications
										data={data}
										header={{
											title: 'Notifications',
											option: {},
											textColor: 'white',
										}}
										icon={NotificationIcon}
									/>
								</Box>
								<IconButton
									size='large'
									edge='end'
									aria-label='account of current user'
									aria-controls={menuId}
									aria-haspopup='true'
									onClick={handleMenu}
									color='inherit'
									sx={{
										marginLeft: '32px',
										padding: '0',
										'&:hover': {
											background: 'none',
										},
									}}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											height: '100%',

											'&:hover p': {
												color: '#FF8200',
											},
										}}
									>
										<img
											src={`${user?.profilePicture}`}
											alt={''}
											style={{ width: '32px', height: '32px' }}
										/>
										<Typography
											sx={{
												fontFamily: 'Inter',
												fontStyle: 'normal',
												fontWeight: '600',
												fontSize: '14px',
												lineHeight: '20px',
												color: '#fff',
												marginLeft: '12px',
												transition: 'all 250ms ease',
											}}
										>
											Hi, {getUserName()}
										</Typography>
									</Box>
								</IconButton>
							</>
						) : (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-start',
								}}
							>
								<Button
									onClick={() => navigate('/signup')}
									sx={{
										padding: '10px 38px',
										background: '#FF8200',
										borderRadius: '30px',
										marginLeft: '20px',
										marginRight: '20px',
										transition: 'all 250ms ease',
										'&:hover': {
											background: 'rgba(255, 130, 0, 0.8)',
										},
									}}
								>
									<Typography
										sx={{
											fontFamily: 'Work Sans',
											fontStyle: 'normal',
											fontWeight: '500',
											fontSize: '14px',
											lineHeight: '20px',
											color: '#323232',
											textTransform: 'none',
											whiteSpace: 'nowrap',
										}}
									>
										Sign up
									</Typography>
								</Button>
								<Button
									onClick={() => navigate('/login')}
									sx={{
										padding: '10px 42.5px',
										background: 'transparent',
										borderRadius: '30px',
										border: '1px solid #FFFFFF',
										transition: 'all 250ms ease',
										'&:hover': {
											background: 'rgba(255, 255, 255, 0.2)',
										},
									}}
								>
									<Typography
										sx={{
											fontFamily: 'Work Sans',
											fontStyle: 'normal',
											fontWeight: '500',
											fontSize: '14px',
											lineHeight: '20px',
											color: '#fff',
											textTransform: 'none',
											whiteSpace: 'nowrap',
										}}
									>
										Log in
									</Typography>
								</Button>
							</Box>
						)}
					</Box>
				</Toolbar>
			</AppBar>

			<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '1px',
					zIndex: '999',
					background: 'transparent',
					'& .MuiDrawer-root': {
						position: 'absolute !important',
						top: '0',
						left: '0',
						height: '100vh',
					},
				}}
			>
				<Drawer
					variant={matches ? 'temporary' : 'persistent'}
					anchor={'left'}
					open={state['right']}
					classes={{ paper: classes.drawerPeper }}
					onClose={toggleDrawer('right', false)}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					{list('right')}
				</Drawer>
			</Box>

			{chatStatus || calendarStatus || cartOpen ? (
				<ChatComponent
					blur={blurStatus}
					modal={chatStatus}
					cartOpen={cartOpen}
					setCartOpen={setCartOpen}
					calendarModal={calendarStatus}
					setCalendarStatus={setCalendarStatus}
					chatModalState={modalStatus}
					createChat={true}
					setSongUrl={setSongUrl}
					setSongDetails={setSongDetails}
				/>
			) : (
				<Box />
			)}

			{/* <Drawer
        variant={matches ? "temporary" : "persistent"}
        anchor={"left"}
        open={state["right"]}
        classes={{ paper: classes.drawerPeper }}
        onClose={toggleDrawer("right", false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {list("right")}
      </Drawer> */}

			<Dialog
				className='header-scroll'
				classes={{ paper: classes.paper }}
				open={open}
				maxWidth={matches ? 'xl' : 'lg'}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
				PaperProps={{
					style: {
						borderRadius: 20,
						backgroundColor: '#1D1D1D',
						border: '2px solid #707070',
						width: matches ? '95%' : '50%',
					},
				}}
			>
				<CloseIcon
					onClick={handleClose}
					sx={{
						cursor: 'pointer',
						fontSize: '24px',
						fontWeight: '600',
						fontFamily: 'inter',
						color: '#fff',
						position: 'absolute',
						right: '11px',
						top: '11px',
					}}
				/>
				<DialogContent>
					<ExploreTitle title='Fans' />
					<Grid
						container
						spacing={2}
						sx={{ marginTop: 1, marginBottom: 5, padding: '0px 20px' }}
					>
						<Carousel
							itemsToScroll={1}
							enableAutoPlay={false}
							renderArrow={myArrow}
							breakPoints={breakPoints}
							onResize={(currentBreakPoint) => console.log(currentBreakPoint)}
							enableMouseSwipe={false}
							pagination={false}
						>
							{subscribers.length === 0 && (
								<Typography
									sx={{
										fontFamily: 'poppins',
										color: '#fff',
										fontSize: 20,
										marginBottom: 0.5,
										fontWeight: 600,
										textAlign: 'center',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										zIndex: '100',
										width: '100%',
										height: '100%',
										paddingTop: '1em',
									}}
								>
									No Subscribers
								</Typography>
							)}
							{subscribers.map((item, index) => (
								<Grid
									key={index}
									item
									xs={4}
									sm={4}
									lg={2}
									md={2}
									sx={{ marginBottom: 1 }}
								>
									<CustomSubscriberCard
										name={item.name}
										image={
											item.profilePicture ? item.profilePicture : dummyImage
										}
									/>
								</Grid>
							))}
						</Carousel>
					</Grid>
					<ExploreTitle title='On-Sale' />

					<Box sx={{ position: 'relative', marginTop: 5, marginBottom: 5 }}>
						{regularNfts.length === 0 && (
							<Typography
								sx={{
									fontFamily: 'poppins',
									color: '#fff',
									fontSize: 20,
									marginBottom: 0.5,
									fontWeight: 600,
									textAlign: 'center',
									position: 'absolute',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									zIndex: '100',
									width: '100%',
									height: '100%',
									top: '0px',
									left: '0px',
								}}
							>
								No NFTs on sale
							</Typography>
						)}
						<Carousel
							enableMouseSwipe={false}
							itemsToScroll={1}
							enableAutoPlay={false}
							renderArrow={myArrow}
							breakPoints={[
								{ width: 1, itemsToShow: 1 },
								{ width: 550, itemsToShow: 3, itemsToScroll: 1 },
								{ width: 768, itemsToShow: 3 },
								{ width: 1200, itemsToShow: 3 },
							]}
							itemPadding={[0, 20]}
							outerSpacing={-5}
							onResize={(currentBreakPoint) => console.log(currentBreakPoint)}
							pagination={false}
						>
							{regularNfts.map((song, index) => (
								<Grid key={index} item xs={12} sm={12} lg={3} md={3}>
									<Box
										key={index}
										display={'flex'}
										justifyContent={'flex-start'}
										alignItems={'center'}
										flexDirection={'column'}
										sx={{
											backgroundColor: 'rgba(255,255,255,0.18)',
											borderRadius: '19px',
											padding: '0px 8px',
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: 'rgba(25,25,25)',
											},
										}}
									>
										<Box
											display={'flex'}
											justifyContent={'space-between'}
											alignItems={'center'}
											sx={{
												width: '100%',
												marginBottom: '-2px',
												columnGap: '7px',
												marginLeft: '13px',
											}}
										>
											<Box>
												<br />
											</Box>
										</Box>
										<Box
											display={'flex'}
											flexDirection={'column'}
											justifyContent={'center'}
											alignItems={'center'}
											className={classes.img}
											sx={{ position: 'relative' }}
										>
											<Box
												style={{
													width: '143px',
													height: '173px',
													background: `url(${song.imgFile})`,
													backgroundSize: 'cover',
													backgroundPosition: 'center center',
													backgroundRepeat: 'no-repeat',
													borderRadius: '5px',
												}}
											></Box>
											<Box
												sx={{
													position: 'absolute',
													bottom: '0px',
													width: '143px',
													textAlign: 'center',
													padding: '0.5em 0em',
													background:
														'linear-gradient(180deg,transparent,rgba(0,0,0,.297) 15%,rgba(0,0,0,.438) 30%,#000)',
												}}
											>
												<Typography
													sx={{
														color: '#fff',
														fontSize: '10px',
														fontWeight: '500',
													}}
												>
													{song.album}
												</Typography>
												<Typography
													sx={{
														color: '#fff',
														fontSize: '10px',
														fontWeight: '500',
													}}
												>
													{song.artist}
												</Typography>
											</Box>
										</Box>
										<Box
											display={'flex'}
											justifyContent={'center'}
											alignItems={'center'}
											sx={{ width: '100%', columnGap: '35px' }}
										>
											<Box
												display={'flex'}
												justifyContent={'center'}
												alignItems={'center'}
											>
												<Typography sx={{ fontWeight: '900', color: '#fff' }}>
													$ {song.price}
												</Typography>
											</Box>
											<Box
												display={'flex'}
												justifyContent={'center'}
												alignItems={'center'}
											>
												<IconButton aria-label='settings'>
													{song?.likes.includes(MyId) ? (
														<FavoriteIcon />
													) : (
														<FavoriteBorderIcon />
													)}
												</IconButton>
												<Typography sx={{ fontWeight: '900', color: '#fff' }}>
													{song.likes.length}
												</Typography>
											</Box>
										</Box>
									</Box>
								</Grid>
							))}
						</Carousel>
					</Box>

					<Grid container spacing={2} sx={{ marginBottom: 5, marginTop: 5 }}>
						<Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1 }}>
							<Divider
								sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }}
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<IconButton onClick={handleClose} className={classes.customizedButton}>
					<CloseIcon fontSize={'large'} />
				</IconButton>
			</Dialog>

			<MusicLibrary
				setSongUrl={setSongUrl}
				setSongDetails={setSongDetails}
				open={openMusicLibrary}
				setOpen={setOpenMusicLibrary}
			/>

			<style jsx='true'>{`
				.notifications .icon .image {
					width: 42px;
					height: 42px;
				}
				.notifications .container .header .header-title {
					color: #fff;
				}
				.notifications .container .header {
					background: #ff1c51;
				}
				.notifications .card:hover {
					background: #1d1d1d !important;
				}
				.MuiAutocomplete-listbox {
					padding: 0px;
				}
				.empty-notifications {
					color: #fff !important;
				}
				@media screen and (max-width: 768px) {
					.rec.rec-carousel-wrapper {
						width: 100%;
						margin: 0px;
					}
				}
			`}</style>
		</Box>
	);
};

export default Header;
