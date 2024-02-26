import ChatIcon from '@mui/icons-material/Chat';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {
	Box,
	Button,
	Container,
	Dialog,
	DialogContent,
	Grid,
	Hidden,
	IconButton,
	Typography,
	useMediaQuery,
	DialogTitle,
	ListItem,
	ListItemAvatar,
	ListItemText,
	List,
	Avatar,
	FormControl,
	TextareaAutosize,
} from '@mui/material';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { HiLink } from 'react-icons/hi';
import { Mention, MentionsInput } from 'react-mentions';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Cover from '../../assets/cover.png';
import ChatComponent from '../../component/Chat';
import CropModal from '../../component/CropModal/cropModal';
import HeaderComponent from '../../component/Header';
import FooterComponent from '../../component/Footer';
import classForMentions from '../../component/PostModal/mention.module.css';
import PostModal from '../../component/PostModal/PostModal';
import CustomTabsComponent from '../../component/Tabs';
import { useStyles } from '../../constant/customStyle';
import { parseJwt } from '../../helpers/getId';
import { get_time_diff } from '../../helpers/timeDiff';
import BlockIcon from '@mui/icons-material/Block';
import {
	GetUserAccessSongNFTs,
	GetUserRegularEventNFTs,
	GetUserRegularSongNFTs,
} from '../../Services/Nfts';
import { GetBackStagePrice } from '../../Services/Pass';
import { UploadFile } from '../../Services/UploadFile';
import {
	CreateComment,
	FollowUser,
	GetCommnetsFromPost,
	GetFollowers,
	getFollowings,
	GetPosts,
	GetTagUsers,
	GetUser,
	SubscribeUser,
	UnFollowUser,
	UpdateUser,
	BlockUser,
	GetPostsByUser,
	CreatePost,
	GetLikesFromPost,
} from '../../Services/User';
import TabComponentAbout from '../../tabsCompoent/TabComponentAbout';
import TabComponentMedia from '../../tabsCompoent/TabComponentMedia';
import './profile.css';
import { useTheme } from '@mui/styles';
import { AiOutlineClose } from 'react-icons/ai';
import ConfirmedProfileIcon from '../../assets/ConfirmedProfileIcon.svg';
import FeedEmptyIcon from '../../assets/FeedEmptyIcon.svg';
import ImportImageIcon from '../../assets/ImportImageIcon.svg';
import LikeIcon from '../../assets/LikeIcon.svg';
import CommentIcon from '../../assets/CommentIcon.svg';
import ShareIcon from '../../assets/ShareIcon.svg';
import ReadingListIcon from '../../assets/ReadingListIcon.svg';
import ArrowLeft from '../../assets/ArrowLeft.svg';
import PencilIcon from '../../assets/PencilIcon.svg';
import CloseXIcon from '../../assets/CloseXIcon.svg';
import AddPhotoIcon from '../../assets/AddPhotoIcon.svg';
import ArrowLeftWhite from '../../assets/ArrowLeftWhite.svg';
import EditProfile from '../../component/EditProfile';
import { UploadFiles } from '../../Services/UploadFiles';
import { useRef } from 'react';
import { show_toast } from '../../helpers/toast';
import DeleteIco from '../../assets/CloseBorderedIcon.svg';

const dummyImage =
	'https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png';

const validAudioFormats = ['mp3', 'acc', 'mp4', 'ogg', 'wav', 'mpeg'];
const validImageFormats = ['jpeg', 'jpg', 'png'];

function ProfileScreen({ SongUrl, setSongUrl, setSongDetails }) {
	const [open, setOpen] = useState(false);
	const [chatStatus, setChatStatus] = useState(false);
	const [calendarStatus, setCalendarStatus] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const [commentMore, setCommentMore] = useState(false);

	const [Name, setName] = useState('');
	const [PrName, setPrName] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [SocialLinks, setSocialLinks] = useState({});
	const [ProfilePicPrev, setProfilePicPrev] = useState(
		'"https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png"'
	);
	const [MyProfilePicPrev, setMyProfilePicPrev] = useState(
		'"https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png"'
	);
	const [userModal, setuserModal] = useState(false);
	const [eventsModal, seteventsModal] = useState(false);
	const matches = useMediaQuery('(max-width:768px)');
	const matches1440 = useMediaQuery('(min-width:1440px)');
	const [Bio, setBio] = useState(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A habitant commod'
	);
	const [PrBio, setPrBio] = useState('');
	const [tagline, settagline] = useState('');
	const [Prtagline, setPrtagline] = useState('');
	const [Experience, setExperience] = useState('');
	const [PrExperience, setPrExperience] = useState('');
	const [Education, setEducation] = useState('');
	const [Contact, setContact] = useState('');
	const [Followers, setFollowers] = useState(0);
	const [Following, setFollowing] = useState(0);
	const [isFollower, setIsFollower] = useState(false);
	const [isMyProfile, setIsMyProfile] = useState(false);
	const [otheruserId, setotheruserId] = useState('');
	const [Website, setWebsite] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [selectedSupportTab, setSelectedSupportTab] =
		useState('tab-supporters');
	const [FollowersList, setFollowersList] = useState([]);
	const [FollowingsList, setFollowingsList] = useState([]);
	const [Posts, setPosts] = useState([]);
	const [PostRecent, setPostRecent] = useState({});
	const [Comments, setComments] = useState([]);
	const [createComment, setcreateComment] = useState('');
	const [CurrentUserId, setCurrentUserId] = useState();
	const [PostModalStatus, setPostModalStatus] = useState(false);
	const [Events, setEvents] = useState([]);
	const [Media, setMedia] = useState([]);
	const [RegularMedia, setRegularMedia] = useState([]);
	const [coverPic, setCoverPic] = useState('');
	const [MyId, setMyId] = useState();
	const [ThisUserSubsscribed, setThisUserSubsscribed] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [isBackStagePass, setIsBackStagePass] = useState(false);
	const [BackStagePass, setBackStagePass] = useState(false);
	const [BackStagePrice, setBackStagePrice] = useState(0);
	const location = useLocation();

	const [cropModalStatus, setcropModalStatus] = useState(false);
	const [cropingImage, setcropingImage] = useState(false);
	const [cropMode, setcropMode] = useState();
	const [blockUserConfirmation, setblockUserConfirmation] = useState(false);
	const [users, setusers] = useState([]);

	const [openSubscribePay, setOpenSubscribePay] = useState(false);
	const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
	const [isEditProfile, setEditProfile] = useState(false);
	const inputCoverRef = useRef(null);

	const handleBlockUser = async () => {
		const res = await BlockUser({ id: otheruserId });
		res && navigate('/');
	};

	useEffect(() => {
		const value = queryString.parse(location.search);
		console.log('location.search: ', value);

		if (value && value.id) {
			setCurrentUserId(value.id);
			setProfilePicture();
			getUser(value.id);
			getFollowers(value.id);
			getFollowers(value.id);
			getPosts(value.id);
			getEvents(value.id);
			getMyNfts(value.id);
		} else {
			getUser();
			getFollowers();
			getPosts();
			getEvents();
			getMyNfts();
			getUsers();
		}

		getFollowingsList(value?.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.search, isEditProfile, PostModalStatus]);

	const getUsers = async () => {
		const res = await GetTagUsers();
		const usersList = res.map((user) => ({
			id: user.user_id,
			display: user.user_name,
		}));
		setusers(usersList);
	};

	const setProfilePicture = async () => {
		const res = await GetUser();
		setMyProfilePicPrev(res.profilePicture);
	};

	const getUser = async (id) => {
		const res = await GetUser(id);
		console.log('getUser: ', res);
		setBio(res.bio);
		setPrBio(res.bio);
		settagline(res.tagline);
		setPrtagline(res.tagline);
		setExperience(res.experience);
		setPrExperience(res.experience);
		setName(res.firstName ? res.firstName : res.email);
		setContact(res.contact ? res.contact : '');
		setWebsite(res.personalSite ? res.personalSite : '');
		setPrName(res.lastName ? res.lastName : '');
		setProfilePicPrev(res.profilePicture);
		!id && setMyProfilePicPrev(res.profilePicture);
		if (!id) {
			const { _id } = await parseJwt();
			setCurrentUserId(_id);
		}

		setCoverPic(res.coverPicture);
		setSocialLinks({
			fbLink: res.facebook,
			twitterLink: res.twitter,
			instaLink: res.instagram,
		});
		setFollowers(res.followers.length);
		setFollowing(res.followings.length);
		const { _id } = await parseJwt();
		setMyId(_id);
		console.log(res, _id);

		res.followers.includes(_id) && setIsFollower(true);
		id ? setIsMyProfile(false) : setIsMyProfile(true);
		id && setotheruserId(id);
		if (res.subscribers.includes(_id)) {
			setThisUserSubsscribed(true);
		}
		setIsBackStagePass(res.backstagePass);
		if (id && res.backstagePass) {
			setBackStagePass(true);
			const passData = await GetBackStagePrice(id);
			passData && setBackStagePrice(passData.data.price);
		}
	};

	const getFollowers = async (id) => {
		const res = await GetFollowers(id);
		setFollowersList(res);
	};

	const getFollowingsList = async (id) => {
		console.log('getFollowingsList', id);
		const res = await getFollowings(id);
		setFollowingsList(res);
	};

	useEffect(() => {
		const fetchComments = async () => {
			await getComments(PostRecent._id);
		};
		fetchComments();
		fetchAllComments();
	}, [PostRecent]);

	const getComments = async (postId) => {
		const res = await GetCommnetsFromPost(postId);

		const comments = res.map((comm) => {
			if (comm.desc.includes('@[')) {
				let commDesc = comm.desc;
				const regexCountUsers = /\\@.*?\)/g;
				const regexUser = /\\@.*?\)/;
				const regexSquare = /\[.*?\]/;
				const regexRound = /\(.*?\)/;
				const usersCount = commDesc.match(regexCountUsers);
				for (let i = 0; i < usersCount.length; i++) {
					if (commDesc.includes('@[')) {
						let name = commDesc.match(regexSquare)[0];
						let id = commDesc.match(regexRound)[0];
						commDesc.match(regexRound);
						name = name.replace('[', '');
						name = name.replace(']', '');

						id = id.replace('(', '');
						id = id.replace(')', '');
						commDesc = commDesc.replace(
							regexUser,
							`<a class='userLink' href="/profile?id=${id}"> <strong class='userLink'> ${name} </strong> </a>`
						);
					}
				}
				const modifiedCommObject = {
					...comm,
					desc: commDesc,
				};
				return modifiedCommObject;
			} else {
				return comm;
			}
		});

		setComments(comments);
	};

	const fetchAllComments = () => {
		const promises = [];
		Posts.map((post) => {
			const promise = GetCommnetsFromPost(post._id).then((comments) => {
				console.log('comments: ', comments);
				setPosts((prev) => {
					return prev.map((item) => {
						if (item._id === comments[0]?.postId) {
							return {
								...item,
								comments,
							};
						}
						return item;
					});
				});
			});
			promises.push(promise);
		});
		Promise.all(promises).then((res) => console.log('updated posts: ', Posts));
	};

	const getPosts = async (id) => {
		// const res = await GetPosts(id);
		const res = await GetPostsByUser(id);
		const posts = res?.posts.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		);
		setPosts(posts);
		fetchAllComments();

		let post = posts[0];
		if (post?.desc.includes('@[')) {
			let newDesc = post.desc;
			// const regexCountUsers = /\\@.*?\)/g;
			const regexUser = /\\@.*?\)/;
			const regexSquare = /\[.*?\]/;
			const regexRound = /\(.*?\)/;
			for (let i = 0; i < 3; i++) {
				if (newDesc.includes('@[')) {
					let name = newDesc.match(regexSquare)[0];
					let id = newDesc.match(regexRound)[0];
					newDesc.match(regexRound);
					name = name.replace('[', '');
					name = name.replace(']', '');

					id = id.replace('(', '');
					id = id.replace(')', '');
					newDesc = newDesc.replace(
						regexUser,
						`<a class='userLink' href="/profile?id=${id}"> <strong class='userLink'> ${name} </strong> </a>`
					);
				}
			}

			post = {
				...post,
				desc: newDesc,
			};
		}

		setPostRecent(post);
	};

	const postComment = async () => {
		if (createComment.trim() === '') {
			return;
		}
		const res = await CreateComment({
			userId: CurrentUserId,
			postId: PostRecent._id,
			desc: createComment,
		});
		res && setcreateComment('');
		await getComments(PostRecent._id);
	};

	const handleFollow = async () => {
		if (isFollower) {
			const res = await UnFollowUser(otheruserId);
			res.status_msg === 'You now unfollow user' && setIsFollower(false);
			// window.location.reload();
		} else {
			const res = await FollowUser(otheruserId);
			res.status_msg === 'You now follow user' && setIsFollower(true);
			// window.location.reload();
		}
	};

	const getEvents = async (id) => {
		const nfts = await GetUserRegularEventNFTs(id);
		nfts && nfts.length && setEvents(nfts);
	};
	const clickFollower = (id) => {
		navigate('/profile?id=' + id);
		// window.location.reload();
	};

	const getMyNfts = async (id) => {
		const nfts = await GetUserAccessSongNFTs(id);
		nfts && nfts.length && setMedia(nfts);

		const rnfts = await GetUserRegularSongNFTs(id);
		rnfts && rnfts.length && setRegularMedia(rnfts);
	};
	const tabsPanelProfile = [
		{
			component: (
				<TabComponentAbout
					Name={Name}
					setName={setName}
					ProfilePicPrev={ProfilePicPrev}
					setProfilePicPrev={setProfilePicPrev}
					userModal={userModal}
					setcropModalStatus={setcropModalStatus}
					setcropMode={setcropMode}
					setcropingImage={setcropingImage}
					setuserModal={setuserModal}
					Bio={Bio}
					PrBio={PrBio}
					tagline={tagline}
					settagline={settagline}
					setBio={setBio}
					Experience={Experience}
					PrExperience={PrExperience}
					setExperience={setExperience}
					Education={Education}
					setEducation={setEducation}
					Contact={Contact}
					setContact={setContact}
					isMyProfile={isMyProfile}
					eventsModal={eventsModal}
					seteventsModal={seteventsModal}
					Events={Events}
					getEvents={getEvents}
					getUser={getUser}
				/>
			),
			value: '2',
			sx: (theme) => ({
				[theme.breakpoints.down('md')]: {
					paddingX: '0px',
				},
			}),
		},
		{
			component: (
				<TabComponentMedia
					Media={Media}
					RegularMedia={RegularMedia}
					MyProfilePicPrev={MyProfilePicPrev}
					isMyProfile={isMyProfile}
					Name={Name}
					setSongUrl={setSongUrl}
					setSongDetails={setSongDetails}
					getMyNfts={getMyNfts}
					MyId={MyId}
				/>
			),
			value: '3',
			sx: (theme) => ({
				[theme.breakpoints.down('md')]: {
					paddingX: '0px',
				},
			}),
		},
		{
			component: () => renderFeedComponent(),
			value: '1',
			sx: (theme) => ({
				[theme.breakpoints.down('md')]: {
					paddingX: '0px',
				},
			}),
		},
	];
	const classes = useStyles();
	const navigate = useNavigate();

	const chatOpen = () => {
		setChatStatus(true);
		setCalendarStatus(false);
		setOpen(true);
	};

	const modalStatus = () => {
		setChatStatus(false);
		setCalendarStatus(false);
	};

	const calendarModalOpen = () => {
		setCalendarStatus(true);
		setChatStatus(false);
		setOpen(true);
	};

	const onFileChange = async (event) => {
		setcropMode('cover');
		const imgUrl = URL.createObjectURL(event.target.files[0]);
		if (imgUrl) {
			setcropModalStatus(true);
			setcropingImage(imgUrl);
		}
	};

	const onCropFile = async (image, setprofilePictureUpload) => {
		const res = await UploadFiles(image);
		console.log('onCropFile: ', res);
		if (res) {
			setprofilePictureUpload && setprofilePictureUpload(false);
			setcropModalStatus(false);
			if (cropMode === 'cover') {
				setCoverPic(res.fileUrl.Location);
				await UpdateUser({ coverPicture: res.fileUrl.Location });
			} else if (cropMode === 'profilePic') {
				setProfilePicPrev(res.fileUrl.Location);
				// await UpdateUser({ profilePicture: res.data.Location });
			}
		}
		inputCoverRef.current.value = '';
	};

	const subscribeUser = async () => {
		setOpenSubscribePay(true);
	};

	useEffect(() => {
		document.title = 'Profile | Finay';
	}, []);

	// eslint-disable-next-line no-unused-vars
	function _createOrder(data, actions) {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: BackStagePrice,
					},
				},
			],
		});
	}
	// eslint-disable-next-line no-unused-vars
	async function _onApprove(data, actions) {
		let order = await actions.order.capture();
		console.log(order);
		// await checkOutHandle();
		const res = await SubscribeUser({ id: CurrentUserId });
		if (res) {
			setOpenSubscribePay(false);
			setThisUserSubsscribed(true);
		}
		return order;
	}

	console.log('cropModal', cropModalStatus);

	const handleSupportersModalClose = () => {
		setShowMore(false);
	};

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const handleCreatePost = () => {
		setPostModalStatus(true);
	};

	const renderFeedComponent = () => {
		return (
			<Box
			//  className={classes.commentGrid}
			>
				{isMyProfile && (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							justifyContent: 'flex-start',
							width: '100%',
							background: '#2A2B2F',
							borderRadius: '10px',
							padding: '20px',
							marginBottom: '24px',
						}}
						onClick={handleCreatePost}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-start',
								width: '100%',
								height: '32px',
							}}
						>
							<Box
								sx={{
									backgroundImage: `url(${
										ProfilePicPrev ? ProfilePicPrev : dummyImage
									})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
									backgroundRepeat: 'no-repeat',
									borderRadius: '50%',
									maxWidth: '32px',
									width: '100%',
									maxHeight: '32px',
									height: '100%',
								}}
							/>
							<FormControl
								sx={{
									width: '100%',
									margin: '0 10px',
									'textarea::placeholder': {
										fontFamily: 'Urbanist',
										fontStyle: 'normal',
										fontWeight: '600',
										fontSize: '14px',
										lineHeight: '140%',
										letterSpacing: '0.2px',
										color: 'rgba(255, 255, 255, 0.4)',
									},
								}}
								variant='outlined'
							>
								<TextareaAutosize
									maxRows={2}
									minRows={1}
									placeholder='What’s on your mind?'
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-start',
										border: 'none',
										outline: 'none',
										borderRadius: '0',
										background: '#2A2B2F',
										color: '#FFFFFF',
										resize: 'none',
										padding: '0 5px 0 0',
									}}
								/>
							</FormControl>
							<Button
								sx={{
									width: '24px',
									height: '24px',
									padding: '0',
									margin: '0',
									minWidth: '24px',
									transition: 'all 250ms ease',
									'&:hover': {
										background: '#FF8200',
										opacity: '0.8',
									},
								}}
							>
								<img src={ImportImageIcon} alt='AddImage' />
							</Button>
						</Box>
					</Box>
				)}
				<Box
					sx={{
						width: '100%',
						height: { xs: '75vh', lg: '80vh' },
						overflow: 'hidden',
						paddingBottom: '24px',
					}}
				>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							overflow: 'auto',
							scrollBehavior: 'smooth',
							paddingRight: '5px',
						}}
					>
						{Posts ? (
							PostRecent && Object.keys(PostRecent).length > 0 ? (
								<>
									<Box className={classes.paddingSpace}>
										<Box
											onClick={() => setPostRecent({})}
											sx={{
												width: '24px',
												height: '24px',
												transition: 'all 250ms ease',
												WebkitMask: `url(${ArrowLeft}) center center / 24px 24px no-repeat`,
												mask: `url(${ArrowLeft}) center center / 24px 24px no-repeat`,
												'&:not(:hover)': {
													background: 'white',
												},
												'&:hover': {
													background: '#FF8200',
												},
												cursor: 'pointer',
												marginBottom: '20px',
											}}
										/>
										<Box className={classes.userDetails}>
											<Box className={classes.userImageSpace}>
												<Box
													style={{
														backgroundImage: `url(${ProfilePicPrev})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center center',
														backgroundRepeat: 'no-repeat',
														borderRadius: '100%',
														width: '48px',
														height: '48px',
													}}
													className={`${classes.profile}`}
												></Box>
											</Box>
											<Box
												display={'flex'}
												flexDirection={'column'}
												justifyContent={'center'}
											>
												<Typography
													sx={{
														fontFamily: 'Urbanist',
														fontStyle: 'normal',
														fontWeight: '700',
														fontSize: '16px',
														lineHeight: '19px',
														color: '#fff',
														marginBottom: '8px',
													}}
												>
													{Name} {PrName}
												</Typography>
												<Typography
													sx={{
														fontFamily: 'Work Sans',
														fontStyle: 'normal',
														fontWeight: '500',
														fontSize: '10px',
														lineHeight: '12px',
														color: '#fff',
														opacity: '0.6',
														marginBottom: '8px',
													}}
												>
													{get_time_diff(PostRecent?.createdAt)}
												</Typography>
											</Box>
										</Box>
										{PostRecent.mediaUrl &&
											validImageFormats.includes(
												PostRecent.mediaUrl.split('.')[
													PostRecent.mediaUrl.split('.').length - 1
												]
											) && (
												<Box
													className={classes.feedbackSpaceBottom}
													sx={{ marginBottom: '19px' }}
												>
													<Box className={classes.img}>
														<img
															style={{ width: '100%', borderRadius: '5px' }}
															src={PostRecent.mediaUrl}
															alt=''
														/>
													</Box>
												</Box>
											)}
										<Box className={classes.userTextBox}>
											<Typography
												sx={{
													fontFamily: 'Work Sans',
													fontStyle: 'normal',
													fontWeight: '400',
													fontSize: '14px',
													lineHeight: '16px',
													color: '#fff',
													opacity: '0.8',
													marginBottom: '8px',
													textAlign: 'justify',
												}}
											>
												{ReactHtmlParser(PostRecent?.content)}
											</Typography>
										</Box>
										<Box
											sx={{
												width: '100%',
												height: '1px',
												background: '#605F5F',
											}}
										/>
										{PostRecent.mediaUrl &&
											validAudioFormats.includes(
												PostRecent.mediaUrl.split('.')[
													PostRecent.mediaUrl.split('.').length - 1
												]
											) && (
												<Box
													style={{
														background: '#1d1d1d',
														padding: '10px',
														borderRadius: '5px',
														width: 'fit-content',
													}}
													className={classes.songSection}
													onClick={() => setSongUrl(PostRecent.mediaUrl)}
												>
													<Box className={classes.songLinkSection}>
														<HiLink className={classes.linkIcon} />
													</Box>
													<Box
														display={'flex'}
														flexDirection={'column'}
														justifyContent={'center'}
													>
														<Typography className={classes.songName}>
															{
																PostRecent.mediaUrl.split('/')[
																	PostRecent.mediaUrl.split('/').length - 1
																]
															}
														</Typography>
													</Box>
												</Box>
											)}
										<Box className={classes.commentButtonBox}>
											<Button
												variant='contained'
												fullWidth={true}
												className={classes.commentButton}
												onClick={() => setCommentMore(!commentMore)}
											>
												<Typography
													sx={{
														fontFamily: 'Work Sans !important',
														fontStyle: 'normal !important',
														fontWeight: '400 !important',
														fontSize: '14px !important',
														lineHeight: '16px !important',
														color: '#000 !important',
													}}
												>
													{!commentMore
														? `view all comments`
														: `hide last ${
																Comments.length - 3 < 0
																	? 0
																	: Comments.length - 3
														  } comments`}
												</Typography>
											</Button>
										</Box>
										{Comments?.map((item, index) => (
											<Box className={classes.followerCommentBox} key={index}>
												<Box className={classes.userImageSpace}>
													<Box
														style={{
															backgroundImage: `url(${
																item?.user?.user_img
																	? item.user.user_img
																	: dummyImage
															})`,
															backgroundSize: 'cover',
															backgroundPosition: 'center center',
															backgroundRepeat: 'no-repeat',
															borderRadius: '100%',
															width: '48px',
															height: '48px',
														}}
														className={`${classes.profile}`}
													></Box>
												</Box>
												<Box
													display={'flex'}
													flexDirection={'column'}
													justifyContent={'center'}
												>
													<Box
														sx={{
															display: 'flex',
															marginBottom: '8px',
														}}
													>
														<Typography
															className={[classes.songName, classes.spaceRight]}
														>
															{item?.user?.user_name}
														</Typography>
														<Typography
															className={[classes.songSize, classes.spaceTop]}
														>
															{get_time_diff(item.updatedAt)}
														</Typography>
													</Box>

													<Typography className={classes.followerComment}>
														{ReactHtmlParser(item.desc)}
													</Typography>
												</Box>
											</Box>
										))}
										{commentMore ? (
											<>
												{Comments.slice(3, Comments.length).map(
													(item, index) => (
														<Box
															className={classes.followerCommentBox}
															key={index}
														>
															<Box className={classes.userImageSpace}>
																<Box
																	style={{
																		backgroundImage: `url(${
																			item?.user?.user_img
																				? item.user.user_img
																				: dummyImage
																		})`,
																		backgroundSize: 'cover',
																		backgroundPosition: 'center center',
																		backgroundRepeat: 'no-repeat',
																		borderRadius: '100%',
																		width: '48px',
																		height: '48px',
																	}}
																	className={`${classes.profile}`}
																></Box>
															</Box>
															<Box
																display={'flex'}
																flexDirection={'column'}
																justifyContent={'center'}
															>
																<Box display={'flex'}>
																	<Typography
																		className={[
																			classes.songName,
																			classes.spaceRight,
																		]}
																	>
																		{item.user.user_name}
																	</Typography>
																	<Typography
																		className={[
																			classes.songSize,
																			classes.spaceTop,
																		]}
																	>
																		{get_time_diff(item.updatedAt)}
																	</Typography>
																</Box>
																<Typography className={classes.followerComment}>
																	{ReactHtmlParser(item.desc)}
																</Typography>
															</Box>
														</Box>
													)
												)}
											</>
										) : null}
									</Box>
									<Box
										sx={{
											marginTop: '-8px',
											background: '#2A2B2F',
											backdropFilter: 'blur(50px)',
											borderBottomLeftRadius: '8px',
											borderBottomRightRadius: '8px',
											width: '100%',
										}}
									>
										<Box sx={{ padding: 1.2 }}>
											<Box display={'flex'} sx={{ marginBottom: '14px' }}>
												<Box
													sx={{
														width: '49px',
														height: '49px',
														marginRight: '10px',
													}}
												>
													<Box
														style={{
															backgroundImage: `url(${
																isMyProfile
																	? ProfilePicPrev
																		? ProfilePicPrev
																		: dummyImage
																	: MyProfilePicPrev
															})`,
															backgroundSize: 'cover',
															backgroundPosition: 'center center',
															backgroundRepeat: 'no-repeat',
															borderRadius: '100%',
															width: '48px',
															height: '48px',
														}}
														className={`${classes.profile}`}
													></Box>
												</Box>
												<Box
													display={'flex'}
													flexDirection={'column'}
													justifyContent={'center'}
													width={'100%'}
													sx={{
														borderRadius: '8px',
														'& textarea::placeholder': {
															color: '#A4A4A4 !important',
															fontSize: '14px !important',
														},
													}}
												>
													<MentionsInput
														style={{
															background: '#6B5C5C',
															color: 'white',
															border: 'none',
															outline: 'none',
															resize: 'none',
															borderRadius: '8px',
														}}
														placeholder={'Comment...'}
														value={createComment}
														onChange={(e) => setcreateComment(e.target.value)}
														className='mentions2'
													>
														<Mention
															trigger='@'
															data={users}
															style={{ border: 'none' }}
															className={classForMentions.mentions2__mention}
														/>
													</MentionsInput>
												</Box>
											</Box>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'flex-end',
													width: '100%',
													marginBottom: '24px',
												}}
											>
												<Button
													variant='contained'
													fullWidth={true}
													className={classes.postCommentButton}
													onClick={postComment}
												>
													Post A Comment
												</Button>
											</Box>
										</Box>
									</Box>
								</>
							) : (
								Posts &&
								Posts.map((post) => (
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
											width: '100%',
											padding: '24px 16px 16px 16px',
											marginBottom: '24px',
											background: '#2A2B2F',
											backdropFilter: 'blur(50px)',
											borderRadius: '8px',
										}}
										onClick={() => setPostRecent(post)}
									>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'flex-start',
												justifyContent: 'flex-start',
												width: '100%',
											}}
										>
											<Box
												sx={{
													backgroundImage: `url(${ProfilePicPrev})`,
													backgroundSize: 'cover',
													backgroundPosition: 'center center',
													backgroundRepeat: 'no-repeat',
													borderRadius: '50%',
													maxWidth: '48px',
													width: '100%',
													maxHeight: '48px',
													height: '48px',
												}}
											/>
											<Box
												sx={{
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'flex-start',
													justifyContent: 'center',
													width: '100%',
													marginLeft: '12px',
												}}
											>
												<Typography
													sx={{
														fontFamily: 'Urbanist',
														fontStyle: 'normal',
														fontWeight: '700',
														fontSize: '16px',
														lineHeight: '19px',
														color: '#fff',
														marginBottom: '8px',
													}}
												>
													{Name} {PrName}
												</Typography>
												<Typography
													sx={{
														fontFamily: 'Work Sans',
														fontStyle: 'normal',
														fontWeight: '500',
														fontSize: '10px',
														lineHeight: '12px',
														color: '#fff',
														opacity: '0.6',
														marginBottom: '8px',
													}}
												>
													{get_time_diff(post?.createdAt)}
												</Typography>
												<Typography
													sx={{
														width: '100%',
														fontFamily: 'Work Sans',
														fontStyle: 'normal',
														fontWeight: '400',
														fontSize: '14px',
														lineHeight: '16px',
														color: '#fff',
														opacity: '0.8',
														marginBottom: '8px',
														maxHeight: '48px',
														overflow: 'hidden',
														position: 'relative',
														textAlign: 'justify',
														paddingRight: '1em',
														textOverflow: 'ellipsis',
														// '&:before': {
														// 	content: '"…"',
														// 	position: 'absolute',
														// 	right: '0',
														// 	bottom: '0',
														// },
														// '&:after': {
														// 	content: '""',
														// 	position: 'absolute',
														// 	right: '0',
														// 	width: '1em',
														// 	height: '1em',
														// 	marginTop: '0.2em',
														// 	background: 'white',
														// },
													}}
												>
													{post?.content}
												</Typography>
											</Box>
										</Box>
										<>
											{post?.mediaUrl &&
												validImageFormats.includes(
													post?.mediaUrl.split('.')[
														post?.mediaUrl.split('.').length - 1
													]
												) && (
													<Box className={classes.feedbackSpaceBottom}>
														<Box className={classes.img}>
															<img
																style={{
																	width: '100%',
																	maxHeight: '220px',
																	borderRadius: '5px',
																}}
																src={post?.mediaUrl}
																alt=''
															/>
														</Box>
													</Box>
												)}
											{post?.mediaUrl &&
												validAudioFormats.includes(
													post?.mediaUrl.split('.')[
														post?.mediaUrl.split('.').length - 1
													]
												) && (
													<Box
														style={{
															background: '#1d1d1d',
															padding: '10px',
															borderRadius: '5px',
															// alignSelf: "flex-start",
														}}
														className={classes.songSection}
														onClick={() => setSongUrl(post?.file)}
													>
														<Box className={classes.songLinkSection}>
															<HiLink className={classes.linkIcon} />
														</Box>
														<Box
															display={'flex'}
															flexDirection={'column'}
															justifyContent={'center'}
														>
															<Typography className={classes.songName}>
																{
																	post?.mediaUrl.split('/')[
																		post?.mediaUrl.split('/').length - 1
																	]
																}
															</Typography>
														</Box>
													</Box>
												)}
										</>
										<Box
											sx={{
												width: '100%',
												height: '1px',
												background: '#605F5F',
												marginTop: '31px',
												marginBottom: '16px',
											}}
										/>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'flex-start',
												width: '100%',
											}}
										>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'flex-start',
												}}
											>
												<Box
													sx={{
														width: '20px',
														height: '20px',
														transition: 'all 250ms ease',
														WebkitMask: `url(${LikeIcon}) center center / 20px 20px no-repeat`,
														mask: `url(${LikeIcon}) center center / 20px 20px no-repeat`,
														'&:not(:hover)': {
															background: 'white',
														},
														'&:hover': {
															background: '#FF8200',
														},
														cursor: 'pointer',
														marginRight: '8px',
													}}
												/>
												<Typography
													sx={{
														fontFamily: 'Inter',
														fontStyle: 'normal',
														fontWeight: '400',
														fontSize: '14px',
														lineHeight: '19px',
														letterSpacing: '0.2px',
														color: '#fff',
													}}
												>
													{post?.likes?.length}
												</Typography>
												<Box
													sx={{
														width: '20px',
														height: '20px',
														transition: 'all 250ms ease',
														WebkitMask: `url(${CommentIcon}) center center / 20px 20px no-repeat`,
														mask: `url(${CommentIcon}) center center / 20px 20px no-repeat`,
														'&:not(:hover)': {
															background: 'white',
														},
														'&:hover': {
															background: '#FF8200',
														},
														cursor: 'pointer',
														marginLeft: '16px',
														marginRight: '8px',
													}}
												/>
												<Typography
													sx={{
														fontFamily: 'Inter',
														fontStyle: 'normal',
														fontWeight: '400',
														fontSize: '14px',
														lineHeight: '19px',
														letterSpacing: '0.2px',
														color: '#fff',
													}}
												>
													{post?.comments?.length}
												</Typography>
											</Box>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'flex-start',
													marginLeft: 'auto',
												}}
											>
												<Box
													sx={{
														width: '20px',
														height: '20px',
														transition: 'all 250ms ease',
														WebkitMask: `url(${ShareIcon}) center center / 20px 20px no-repeat`,
														mask: `url(${ShareIcon}) center center / 20px 20px no-repeat`,
														'&:not(:hover)': {
															background: 'white',
														},
														'&:hover': {
															background: '#FF8200',
														},
														cursor: 'pointer',
													}}
												/>
												<Box
													sx={{
														width: '20px',
														height: '20px',
														transition: 'all 250ms ease',
														WebkitMask: `url(${ReadingListIcon}) center center / 20px 20px no-repeat`,
														mask: `url(${ReadingListIcon}) center center / 20px 20px no-repeat`,
														'&:not(:hover)': {
															background: 'white',
														},
														'&:hover': {
															background: '#FF8200',
														},
														cursor: 'pointer',
														marginLeft: '16px',
													}}
												/>
											</Box>
										</Box>
									</Box>
								))
							)
						) : (
							<>
								{isMyProfile && Object.keys(PostRecent).length === 0 && (
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: { xs: 'center', md: 'flex-start' },
											justifyContent: 'center',
											width: '100%',
										}}
									>
										<Box
											style={
												FollowersList.length === 0
													? {
															color: '#fff',
															justifyContent: 'center',
															marginBottom: '37px',
													  }
													: {}
											}
											className={classes.groupFollowers}
										>
											<Typography
												sx={{
													fontFamily: 'Urbanist',
													fontStyle: 'normal',
													fontWeight: '500',
													fontSize: '20px',
													lineHeight: '24px',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													zIndex: 1,
													width: '100%',
													height: '100%',
													color: '#fff',
													position: 'relative',
												}}
											>
												It’s looking a little empty around here.
											</Typography>
										</Box>
										<img src={FeedEmptyIcon} alt='feed empty icon' />
									</Box>
								)}
							</>
						)}
					</Box>
				</Box>
			</Box>
		);
	};

	// eslint-disable-next-line no-unused-vars
	const renderSupportersModal = () => {
		const users =
			selectedSupportTab === 'tab-supporters' ? FollowersList : FollowingsList;
		const title =
			selectedSupportTab === 'tab-supporters' ? 'Supporters' : 'Supporting';

		return (
			<Dialog
				open={showMore}
				onClose={handleSupportersModalClose}
				scroll='paper'
				fullWidth
				fullScreen={fullScreen}
				maxWidth='sm'
			>
				<DialogTitle
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						borderBottom: '1px solid gray',
						[theme.breakpoints.down('md')]: {
							position: 'fixed',
							left: 0,
							right: 0,
							backgroundColor: '#383838',
							zIndex: 99,
						},
					}}
				>
					<span>{`${title} (${users.length})`}</span>
					<IconButton onClick={handleSupportersModalClose}>
						<AiOutlineClose color='#fff' />
					</IconButton>
				</DialogTitle>
				<List
					sx={{
						// pt: 0,
						[theme.breakpoints.down('md')]: {
							marginTop: '84px',
						},
					}}
				>
					{users.map((item, index) => (
						<ListItem
							button
							key={index}
							onClick={() => clickFollower(item._id)}
						>
							<ListItemAvatar>
								<Avatar
									src={item.profilePicture ? item.profilePicture : dummyImage}
								/>
							</ListItemAvatar>
							<ListItemText primary={item.name ? item.name : 'no name'} />
						</ListItem>
					))}
				</List>
			</Dialog>
		);
	};

	return (
		<Box className={open ? '' : ''}>
			{console.log(MyId)}
			<HeaderComponent
				blur={false}
				style={{ position: 'fixed' }}
				setSongUrl={setSongUrl}
				setSongDetails={setSongDetails}
				setLeftSidebarOpen={setLeftSidebarOpen}
			/>
			{/* <ResponsiveAppBar /> */}
			<Box
				className={`${
					isLeftSidebarOpen ? '' : matches ? '' : classes.sidebarOpen
				}`}
				style={{
					height: '306px',
					position: 'relative',
					backgroundImage: `url(${coverPic ? coverPic : Cover})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{isEditProfile && (
					<Box
						onClick={() => setEditProfile(false)}
						sx={{
							position: 'absolute',
							top: '78px',
							left: isLeftSidebarOpen
								? { xs: '70px', md: '170px' }
								: { xs: '70px' },
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer !important',
							color: '#fff',
							transition: 'all 250ms ease',
							'&:hover': {
								color: 'rgba(255, 255, 255, 0.8)',
							},
							'&:hover div': {
								background: 'rgba(255, 255, 255, 0.8)',
							},
						}}
					>
						<Box
							sx={{
								width: '24px',
								height: '24px',
								WebkitMask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
								mask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
								backgroundSize: 'cover',
								transition: 'all 250ms ease',
								background: '#fff',
							}}
						/>
						<Typography
							sx={{
								fontFamily: 'Urbanist',
								fontStyle: 'normal',
								fontWeight: '600',
								fontSize: '16px',
								lineHeight: '140%',
								color: 'inherit',
								letterSpacing: '0.2px',
								marginLeft: '16px',
								transition: 'all 250ms ease',
							}}
						>
							Back
						</Typography>
					</Box>
				)}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						bottom: '32px',
						right: isLeftSidebarOpen
							? { xs: '54px', md: '154px' }
							: isEditProfile
							? { xs: '54px' }
							: { xs: '154px', md: '54px' },
						zIndex: 200,
					}}
				>
					{isEditProfile ? (
						<Box
							sx={{
								position: 'relative',
								width: '42px',
								height: '42px',
								borderRadius: '50%',
								background: '#FF8200',
								cursor: 'pointer',
								transition: 'all 250ms ease',
								'&:hover': {
									background: 'rgba(255, 130, 0, 0.8)',
								},
							}}
						>
							<input
								ref={inputCoverRef}
								style={{
									opacity: 0,
									position: 'absolute',
									bottom: '0',
									zIndex: 200,
									right: '0',
									borderRadius: '50%',
									height: '42px',
									width: '42px',
									cursor: 'pointer !important',
									'&:hover': {
										cursor: 'pointer !important',
									},
								}}
								type='file'
								id='coverPhotoChange'
								onChange={onFileChange}
							/>
							<Box
								sx={{
									position: 'absolute',
									left: '0',
									top: '0',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '42px',
									height: '42px',
								}}
							>
								<Box
									sx={{
										width: '16px',
										height: '14px',
										backgroundImage: `url(${AddPhotoIcon})`,
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'center center',
										color: '#000',
										cursor: 'pointer !important',
									}}
								/>
							</Box>
						</Box>
					) : (
						<Hidden mdDown>
							<Box sx={{ display: 'flex' }}>
								{!isMyProfile && (
									<Button
										disabled={
											BackStagePass && ThisUserSubsscribed ? true : false
										}
										variant='contained'
										onClick={subscribeUser}
										className={classes.topButtonSection}
									>
										{BackStagePass && !ThisUserSubsscribed
											? `Backstage Pass $${BackStagePrice}`
											: BackStagePass && ThisUserSubsscribed
											? 'Subscribed'
											: 'Backstage Pass'}
									</Button>
								)}
								{isMyProfile && (
									<Box onClick={() => setEditProfile(true)}>
										<Box
											sx={{
												position: 'relative',
												width: '45px',
												height: '45px',
												cursor: 'pointer !important',
												'&:hover div': {
													backgroundColor: '#FF8200 !important',
													opacity: '0.8 !important',
													cursor: 'pointer !important',
												},
											}}
										>
											<Box
												sx={{
													position: 'absolute',
													bottom: '0',
													right: '0',
													width: '42px',
													height: '42px',
													zIndex: 10,
													cursor: 'pointer !important',
												}}
												className={classes.editIconButton}
											>
												<Box
													sx={{
														width: '21px',
														height: '21px',
														backgroundImage: `url(${PencilIcon})`,
														backgroundSize: 'cover',
														backgroundRepeat: 'no-repeat',
														backgroundPosition: 'center center',
														color: '#000',
														cursor: 'pointer !important',
													}}
												/>
											</Box>
										</Box>
									</Box>
								)}
							</Box>
						</Hidden>
					)}
				</Box>
			</Box>
			<Box
				className={`${
					isLeftSidebarOpen ? '' : matches ? '' : classes.sidebarOpen
				}`}
			>
				<Box
					sx={{
						position: 'absolute',
						left: '-34px',
						bottom: '-68px',
						zIndex: '0',
						width: '297px',
						height: '288px',
						background: '#FF8200',
						borderRadius: '50%',
						opacity: '0.15',
						filter: 'blur(100px)',
					}}
				/>
				<Container maxWidth='xl' sx={{ position: 'relative' }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={3}></Grid>
						<Grid item xs={12} md={6}>
							<>
								<Dialog
									classes={{ paper: classes.paper }}
									open={openSubscribePay}
									maxWidth={'lg'}
									onClose={() => setOpenSubscribePay(false)}
									aria-labelledby='alert-dialog-title'
									aria-describedby='alert-dialog-description'
									fullWidth
									PaperProps={{
										style: {
											width: '438px',
											borderRadius: '8px',
											background: 'rgba(24, 26, 32, 0.44)',
											backdropFilter: 'blur(50px)',
											border: '1px solid rgba(255, 255, 255, 0.31)',
										},
									}}
								>
									<DialogContent
										sx={{
											position: 'relative',
											padding: '24px 36px 24px 24px !important',
										}}
									>
										<Box
											sx={{
												position: 'absolute',
												top: '25px',
												right: '24px',
												width: '32px',
												height: '32px',
												transition: 'all 250ms ease',
												WebkitMask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
												mask: `url(${CloseXIcon}) center center / 32px 32px no-repeat`,
												cursor: 'pointer',
												'&:not(:hover)': {
													background: 'rgba(255, 255, 255, 1)',
												},
												'&:hover': {
													background: 'rgba(255, 255, 255, 0.6)',
												},
											}}
											onClick={() => setOpenSubscribePay(false)}
										/>
										<Grid
											sx={{ padding: '0px !important' }}
											container
											spacing={1}
											className={classes.gridStepersSpacing}
										>
											<Grid item xs={12} sm={12} lg={12} md={12}>
												<Box className={classes.subHeadingStepersSection}>
													<Typography className={classes.subHeadingStepers}>
														Backstage pass
													</Typography>
												</Box>
											</Grid>
										</Grid>
										<Grid item xs={12} sm={12} lg={12} md={12}>
											<Grid
												sx={{
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'flex-start',
													justifyContent: 'center',
													width: '100%',
													height: '70px',
													background: 'rgba(255, 255, 255, 0.1)',
													padding: '12px',
													borderRadius: '8px',
													marginBottom: '24px',
													transition: 'all 250ms ease',
													cursor: 'pointer',
													'&:hover': {
														background: 'rgba(255, 255, 255, 0.3)',
													},
												}}
												item
											>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'flex-start',
														width: '100%',
														marginBottom: '4px',
													}}
												>
													<Typography
														sx={{
															fontFamily: 'Urbanist',
															fontStyle: 'normal',
															fontWeight: '700',
															fontSize: '18px',
															lineHeight: '22px',
															color: '#fff',
														}}
													>
														Basic - $10.99
													</Typography>
													<Box
														sx={{
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															background: 'rgba(255, 255, 255, 0.8)',
															borderRadius: '20px',
															marginLeft: '6px',
															padding: '4px 6px',
														}}
													>
														<Typography
															sx={{
																fontFamily: 'Urbanist',
																fontStyle: 'normal',
																fontWeight: '700',
																fontSize: '14px',
																lineHeight: '17px',
																color: '#000',
															}}
														>
															10 Passes
														</Typography>
													</Box>
												</Box>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'flex-start',
														width: '100%',
													}}
												>
													<Typography
														sx={{
															fontFamily: 'Urbanist',
															fontStyle: 'normal',
															fontWeight: '400',
															fontSize: '14px',
															lineHeight: '17px',
															color: '#fff',
														}}
													>
														Access to the Fan only posts.
													</Typography>
												</Box>
											</Grid>
											<Grid
												sx={{
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'flex-start',
													justifyContent: 'center',
													width: '100%',
													height: '70px',
													background: 'rgba(255, 255, 255, 0.1)',
													padding: '12px',
													borderRadius: '8px',
													marginBottom: '32px',
													transition: 'all 250ms ease',
													cursor: 'pointer',
													'&:hover': {
														background: 'rgba(255, 255, 255, 0.3)',
													},
												}}
												item
											>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'flex-start',
														width: '100%',
														marginBottom: '4px',
													}}
												>
													<Typography
														sx={{
															fontFamily: 'Urbanist',
															fontStyle: 'normal',
															fontWeight: '700',
															fontSize: '18px',
															lineHeight: '22px',
															color: '#fff',
														}}
													>
														Luxury - $10.99
													</Typography>
													<Box
														sx={{
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															background: 'rgba(255, 255, 255, 0.8)',
															borderRadius: '20px',
															marginLeft: '6px',
															padding: '4px 6px',
														}}
													>
														<Typography
															sx={{
																fontFamily: 'Urbanist',
																fontStyle: 'normal',
																fontWeight: '700',
																fontSize: '14px',
																lineHeight: '17px',
																color: '#000',
															}}
														>
															100 Passes
														</Typography>
													</Box>
												</Box>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'flex-start',
														width: '100%',
													}}
												>
													<Typography
														sx={{
															fontFamily: 'Urbanist',
															fontStyle: 'normal',
															fontWeight: '400',
															fontSize: '12px',
															lineHeight: '14px',
															color: '#fff',
														}}
													>
														Access to the Fan only posts, live stream, Songs,
														events & Merch.
													</Typography>
												</Box>
											</Grid>
											<Grid
												sx={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													width: '100%',
												}}
												item
											>
												<Button
													sx={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														width: '178px',
														height: '52px',
														padding: '15px 0',
														background: '#FF8200',
														border: '1px solid #FF8200',
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
															fontSize: '16px',
															lineHeight: '140%',
															color: '#000',
															textTransform: 'capitalize',
														}}
													>
														Buy Pass
													</Typography>
												</Button>
												<Button
													sx={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														width: '178px',
														height: '52px',
														padding: '15px 0',
														background: 'transparent',
														border: '1px solid #FFFFFF',
														borderRadius: '30px',
														transition: 'all 250ms ease',
														marginLeft: 'auto',
														'&:hover': {
															background: 'rgba(255, 255, 255, 0.1)',
														},
													}}
												>
													<Typography
														sx={{
															fontFamily: 'Urbanist',
															fontStyle: 'normal',
															fontWeight: '500',
															fontSize: '17px',
															lineHeight: '140%',
															color: '#fff',
															textTransform: 'capitalize',
														}}
													>
														Save
													</Typography>
												</Button>
											</Grid>
										</Grid>
									</DialogContent>
								</Dialog>
							</>
						</Grid>
					</Grid>
					<Grid container spacing={0}>
						{isEditProfile ? (
							<EditProfile
								userInfo={{
									firstName: Name,
									username: PrName,
									tagline: tagline,
									bio: Bio,
									contact: Contact,
									website: Website,
									profilePicture: ProfilePicPrev,
								}}
								isLeftSidebarOpen={isLeftSidebarOpen}
							/>
						) : (
							<>
								<Grid item xs={12} md={3} className={classes.top}>
									<Box
										sx={{
											width: '365px',
											height: 'fit-content',
											maxHeight: '535px',
											background: '#2A2B2F',
											borderRadius: '4px',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'flex-start',
											padding: '32px 0',
										}}
									>
										<Box
											style={{
												position: 'relative',
												marginBottom: '32px',
												backgroundImage: `url(${
													ProfilePicPrev ? ProfilePicPrev : dummyImage
												})`,
												backgroundSize: 'cover',
												backgroundPosition: 'center center',
												backgroundRepeat: 'no-repeat',
												borderRadius: '100%',
												width: '112px',
												height: '112px',
												minWidth: '112px',
												minHeight: '112px',
											}}
											className={`${classes.profile}`}
										>
											<Box
												sx={{
													position: 'absolute',
													top: '26px',
													right: '-2px',
													width: '15px',
													height: '15px',
													background: '#fff',
													borderRadius: '100%',
												}}
											>
												<Box
													sx={{
														position: 'absolute',
														top: '-4px',
														right: '-4px',
														backgroundImage: `url(${ConfirmedProfileIcon})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center center',
														backgroundRepeat: 'no-repeat',
														borderRadius: '100%',
														width: '24px',
														height: '24px',
													}}
												/>
											</Box>
										</Box>
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
												justifyContent: 'center',
												marginBottom: '12px',
											}}
										>
											<Typography
												sx={{
													fontFamily: 'Urbanist',
													fontStyle: 'normal',
													fontWeight: '600',
													fontSize: '24px',
													lineHeight: '140%',
													letterSpacing: '0.2px',
													color: '#fff',
												}}
											>
												{Name} {PrName}
											</Typography>
											<Typography
												sx={{
													fontFamily: 'Urbanist',
													fontStyle: 'normal',
													fontWeight: '600',
													fontSize: '16px',
													lineHeight: '140%',
													letterSpacing: '0.2px',
													color: '#fff',
												}}
											>
												{Prtagline}
											</Typography>
										</Box>
										<Typography
											sx={{
												fontFamily: 'Urbanist',
												fontStyle: 'normal',
												fontWeight: '400',
												fontSize: '14px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
												color: 'rgba(255, 255, 255, 0.6)',
												textAlign: 'center',
												marginBottom: '32px',
											}}
										>
											{Bio}
										</Typography>
										<Box className={classes.followerSection}>
											<Box
												sx={{
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'center',
													justifyContent: 'center',
													marginRight: '32px',
												}}
											>
												<Typography className={classes.followers}>
													{Followers}
												</Typography>
												<Typography
													sx={{
														fontFamily: 'Urbanist',
														fontStyle: 'normal',
														fontWeight: '600',
														fontSize: '16px',
														lineHeight: '140%',
														letterSpacing: '0.2px',
														color: 'rgba(255, 255, 255, 0.6)',
													}}
												>
													Supporters
												</Typography>
											</Box>
											<Box
												style={{
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												<Typography className={classes.followers}>
													{Following}
												</Typography>
												<Typography
													sx={{
														fontFamily: 'Urbanist',
														fontStyle: 'normal',
														fontWeight: '600',
														fontSize: '16px',
														lineHeight: '140%',
														letterSpacing: '0.2px',
														color: 'rgba(255, 255, 255, 0.6)',
													}}
												>
													Supporting
												</Typography>
											</Box>
										</Box>
										{!isMyProfile && (
											<>
												<Button
													sx={{
														background: '#FF8200',
														border: '1px solid #FF8200',
														borderRadius: '30px',
														padding: '15px 56px',
														transition: 'all 250ms ease',
														'&:hover': {
															background: '#FF8200',
															opacity: '0.8',
														},
													}}
												>
													<Typography
														sx={{
															fontFamily: 'Work Sans',
															fontStyle: 'normal',
															fontWeight: '500',
															fontSize: '16px',
															lineHeight: '140%',
															letterSpacing: '0.2px',
															color: '#000',
															textTransform: 'capitalize',
														}}
													>
														Support
													</Typography>
												</Button>
												<Box className={classes.followButton}>
													<IconButton onClick={chatOpen}>
														<ChatIcon className={classes.socialButtons} />
													</IconButton>
													<IconButton onClick={calendarModalOpen}>
														<DateRangeIcon className={classes.socialButtons} />
													</IconButton>
													<IconButton
														onClick={() => setblockUserConfirmation(true)}
													>
														<BlockIcon className={classes.socialButtons} />
													</IconButton>
												</Box>
											</>
										)}
									</Box>
									<Hidden mdUp>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												marginTop: '20px',
											}}
										>
											{!isMyProfile && (
												<Button
													disabled={
														BackStagePass && ThisUserSubsscribed ? true : false
													}
													variant='contained'
													onClick={subscribeUser}
													className={classes.topButtonSection}
												>
													{BackStagePass && !ThisUserSubsscribed
														? `Backstage Pass $${BackStagePrice}`
														: BackStagePass && ThisUserSubsscribed
														? 'Subscribed'
														: 'Backstage Pass'}
												</Button>
											)}
											{isMyProfile && (
												<Box onClick={() => setEditProfile(true)}>
													<Box
														sx={{
															position: 'relative',
															width: '45px',
															height: '45px',
															cursor: 'pointer !important',
															'&:hover div': {
																backgroundColor: '#FF8200 !important',
																opacity: '0.8 !important',
																cursor: 'pointer !important',
															},
														}}
													>
														<Box
															sx={{
																position: 'absolute',
																bottom: '0',
																right: '0',
																width: '42px',
																height: '42px',
																zIndex: 10,
																cursor: 'pointer !important',
															}}
															className={classes.editIconButton}
														>
															<Box
																sx={{
																	width: '21px',
																	height: '21px',
																	backgroundImage: `url(${PencilIcon})`,
																	backgroundSize: 'cover',
																	backgroundRepeat: 'no-repeat',
																	backgroundPosition: 'center center',
																	color: '#000',
																	cursor: 'pointer !important',
																}}
															/>
														</Box>
													</Box>
												</Box>
											)}
										</Box>
									</Hidden>
								</Grid>
								<Grid
									item
									xs={12}
									md={isLeftSidebarOpen ? 5 : matches1440 ? 5 : 0}
									sx={{
										position: 'relative',
										height: '100vh',
									}}
								>
									<Box
										sx={{
											position: 'absolute',
											top: '50%',
											right: '0',
											zIndex: '0',
											width: '297px',
											height: '288px',
											background: '#FF8200',
											borderRadius: '50%',
											opacity: '0.2',
											filter: 'blur(100px)',
										}}
									/>
									<CustomTabsComponent
										isLeftSidebarOpen={isLeftSidebarOpen}
										tabs={
											isMyProfile
												? [
														{
															name: 'Feed',
															value: '1',
														},
														{
															name: 'About',
															value: '2',
														},
														{
															name: 'My Store',
															value: '3',
														},
												  ]
												: ThisUserSubsscribed
												? [
														{
															name: 'Feed',
															value: '1',
														},
														{
															name: 'About',
															value: '2',
														},
														{
															name: 'My Store',
															value: '3',
														},
												  ]
												: [
														{
															name: 'Feed',
															value: '1',
														},
														{
															name: 'About',
															value: '2',
														},
												  ]
										}
										tabsPanel={tabsPanelProfile}
									/>
								</Grid>
							</>
						)}
					</Grid>
					<Box
						style={{
							width: 'auto',
							position: 'fixed',
							bottom: 200,
							left: 0,
							zIndex: 99,
						}}
					>
						<ChatComponent
							blur={false}
							modal={chatStatus}
							calendarModal={calendarStatus}
							chatModalState={modalStatus}
							createChat={true}
							setSongUrl={setSongUrl}
							setSongDetails={setSongDetails}
						/>
					</Box>
					<Box
						sx={{
							marginTop: '20px',
							marginBottom: '30px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					></Box>
				</Container>
			</Box>
			<FooterComponent />
			<PostModal
				PostModalStatus={PostModalStatus}
				setPostModalStatus={setPostModalStatus}
			/>
			<CropModal
				cropModalStatus={cropModalStatus}
				setcropModalStatus={setcropModalStatus}
				inputCoverRef={inputCoverRef}
				image={cropingImage}
				onCropFile={onCropFile}
				mode={cropMode}
			/>
			<Dialog
				classes={{ paper: classes.paper }}
				open={blockUserConfirmation}
				maxWidth={'lg'}
				onClose={() => setblockUserConfirmation(false)}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
				fullWidth
				PaperProps={{
					style: {
						width: '50%',
						borderRadius: 20,
						backgroundColor: '#1D1D1D',
						border: '2px solid #707070',
					},
				}}
			>
				<DialogContent>
					<Box className={classes.commentButtonBox}>
						<Box className={classes.subHeadingStepersSection}>
							<Typography className={classes.subHeadingStepers}>
								Are you sure ?
							</Typography>
						</Box>
						<Button
							variant='contained'
							fullWidth={true}
							className={classes.noPostButton}
							onClick={() => setblockUserConfirmation(false)}
							sx={{
								backgroundColor: '#FF1C51',
								padding: '5px 50px',
								borderRadius: '30px',
								fontFamily: 'poppins',
								textTransform: 'capitalize',
								fontSize: '20px',
								fontWeight: '500',
								boxShadow: 'none',
								'&:hover': {
									backgroundColor: '#FF1C51 !important',
									boxShadow: 'none',
								},
							}}
						>
							Cancel
						</Button>
						<Button
							variant='contained'
							fullWidth={true}
							className={classes.noPostButton}
							onClick={handleBlockUser}
							sx={{
								backgroundColor: '#FF1C51',
								padding: '5px 50px',
								borderRadius: '30px',
								fontFamily: 'poppins',
								textTransform: 'capitalize',
								fontSize: '20px',
								fontWeight: '500',
								boxShadow: 'none',
								marginTop: '20px',
								'&:hover': {
									backgroundColor: '#FF1C51 !important',
									boxShadow: 'none',
								},
							}}
						>
							Confirm
						</Button>
					</Box>
				</DialogContent>
			</Dialog>
		</Box>
	);
}

export default ProfileScreen;
