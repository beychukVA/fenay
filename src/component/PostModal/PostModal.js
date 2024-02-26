import CloseIcon from '@mui/icons-material/Close';
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	Divider,
	IconButton,
	InputBase,
	Typography,
	useMediaQuery,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { HiLink } from 'react-icons/hi';
import { Mention, MentionsInput } from 'react-mentions';
import { useStyles } from '../../constant/customStyle';
import { show_toast } from '../../helpers/toast';
import { UploadFiles } from '../../Services/UploadFiles';
import { CreatePost, GetTagUsers, GetUser } from '../../Services/User';
import classForMentions from './mention.module.css';
import DeleteIco from '../../assets/CloseBorderedIcon.svg';
import LikeIcon from '../../assets/LikeIcon.svg';
import CommentIcon from '../../assets/CommentIcon.svg';
import ShareIcon from '../../assets/ShareIcon.svg';
import ReadingListIcon from '../../assets/ReadingListIcon.svg';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SlideshowIcon from '@mui/icons-material/Slideshow';

const dummyImage =
	'https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png';

const validAudioFormats = [
	'audio/mp3',
	'audio/acc',
	'video/mp4',
	'audio/ogg',
	'audio/wav',
	'audio/mpeg',
];
const validImageFormats = ['image/jpeg', 'image/jpg', 'image/png'];
const MAX_FILE_SIZE = 52428800; //50MB

export default function PostModal({
	PostModalStatus,
	setPostModalStatus,
	refresh,
}) {
	const inputImageFileRef = useRef(null);
	const inputVideoFileRef = useRef(null);
	const inputAudioFileRef = useRef(null);
	const [CreatePostDesctiption, setCreatePostDesctiption] = useState('');
	const [CreatePostImage, setCreatePostImage] = useState(null);
	const [CreatePostAudio, setCreatePostAudio] = useState(null);
	const [Topic, setTopic] = useState('');
	const [Name, setName] = useState('');
	const [PrName, setPrName] = useState('');
	const [users, setusers] = useState([]);
	const [ProfilePicPrev, setProfilePicPrev] = useState(
		'https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png'
	);

	useEffect(() => {
		if (!PostModalStatus) {
			setCreatePostDesctiption('');
			setTopic('');
			setCreatePostImage(null);
			setCreatePostAudio(null);
		}
	}, [PostModalStatus]);

	const handleSelectFile = (type) => {
		switch (type) {
			case 'image':
				inputImageFileRef.current.click();
				return;
			case 'audio':
				inputAudioFileRef.current.click();
				return;
			case 'video':
				inputVideoFileRef.current.click();
				return;

			default:
				return;
		}
	};

	const handleUploadFile = (e) => {
		const file = e.target.files[0];
		console.log('FILE: ', file);
		if (file.size > MAX_FILE_SIZE) {
			show_toast('File size is too large');
			return;
		}
		if (validImageFormats.includes(file.type)) {
			setCreatePostImage(file);
			setCreatePostAudio(null);
		} else if (validAudioFormats.includes(file.type)) {
			setCreatePostAudio(file);
			setCreatePostImage(null);
		} else {
			show_toast('Please Select Specified Format File.');
		}

		inputImageFileRef.current.value = '';
		inputVideoFileRef.current.value = '';
		inputAudioFileRef.current.value = '';
	};

	const createPost = async () => {
		const file = CreatePostImage
			? CreatePostImage
			: CreatePostAudio
			? CreatePostAudio
			: null;
		if (!file) {
			if (CreatePostDesctiption.trim() === '') {
				show_toast('Post can not be empty.');
				return;
			}
		}
		const result = file && (await UploadFiles(file));
		console.log('Posts file: ', result);
		const postObject = result?.fileUrl?.Location
			? {
					topic: Topic,
					content: CreatePostDesctiption,
					mediaUrl: result.fileUrl.Location,
			  }
			: { topic: Topic, content: CreatePostDesctiption };
		const res = await CreatePost(postObject);
		if (res) {
			setCreatePostAudio(null);
			setCreatePostImage(null);
			setCreatePostDesctiption('');
			setTopic('');
			setPostModalStatus(false);
		}
	};
	const classes = useStyles();

	useEffect(() => {
		getUser();
		getUsers();
	}, []);

	const getUser = async () => {
		const res = await GetUser();
		setName(res.firstName ? res.firstName : res.email);
		setPrName(res.lastName ? res.lastName : '');
		setProfilePicPrev(
			res.profilePicture
				? res.profilePicture
				: 'https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png'
		);
	};
	const getUsers = async () => {
		const res = await GetTagUsers();
		const usersList = res.map((user) => ({
			id: user.user_id,
			display: user.user_name,
		}));
		setusers(usersList);
	};

	const matches = useMediaQuery('(max-width:768px)');

	return (
		<Dialog
			classes={{ paper: classes.paper }}
			open={PostModalStatus}
			onClose={() => {
				setPostModalStatus(false);
			}}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fullWidth
			PaperProps={{
				style: {
					position: 'relative',
					borderRadius: '10px',
					// backgroundColor: '#434343',
					background: '#181A20',
					maxWidth: 950,
				},
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: '-24px',
					right: '-24px',
					width: '24px',
					height: '24px',
					cursor: 'pointer',
					WebkitMask: `url(${DeleteIco}) center center / 24px 24px no-repeat`,
					mask: `url(${DeleteIco}) center center / 24px 24px no-repeat`,
					transition: 'all 250ms ease',
					'&:not(:hover)': {
						background: 'white',
					},
					'&:hover': {
						background: '#FF8200',
					},
				}}
				onClick={() => {
					setPostModalStatus(false);
				}}
				src={DeleteIco}
				alt='delete'
			/>
			<DialogContent
				sx={{
					padding: 0,
					borderRadius: '10px',
					border: '3px solid #434343',
				}}
			>
				<Box
					sx={{
						padding: { xs: '20px', sm: '31px 36px' },
						color: 'white',
						fontFamily: 'Poppins',
						display: 'flex',
						flexDirection: matches ? 'column' : 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box sx={{ width: '100%' }}>
						<Box
							display={'flex'}
							sx={{
								// borderBottom: '2px solid #FF8200',
								paddingBottom: '5.5px',
								width: '100%',
								marginBottom: '13px',
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Urbanist',
									fontStyle: 'normal',
									fontWeight: '700',
									fontSize: '24px',
									lineHeight: '125%',
									color: '#fff',
									letterSpacing: '0.2px',
									textShadow: '0px 0px 24px rgba(0, 0, 0, 0.1)',
									marginBottom: '8px',
								}}
							>
								Create a Post
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								paddingBottom: '5.5px',
								width: '100%',
								height: 'auto',
								marginBottom: '13px',
								alignItems: 'start',
								padding: '0px',
								'textarea::placeholder': {
									font: 'inherit',
									letterSpacing: 'inherit',
									color: 'currentColor',
									opacity: '0.6',
								},
							}}
						>
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
								<Typography
									sx={{
										fontFamily: 'Urbanist',
										fontStyle: 'normal',
										fontWeight: '700',
										fontSize: '20px',
										lineHeight: '19px',
										color: '#fff',
										marginLeft: '8px',
									}}
								>
									{Name} {PrName}
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									paddingBottom: '5.5px',
									width: '100%',
									marginBottom: '13px',
									marginTop: '20px',
									alignItems: 'start',
									padding: '0px',
								}}
							>
								<Typography
									sx={{
										fontFamily: 'Urbanist',
										fontStyle: 'normal',
										fontWeight: '700',
										fontSize: '16px',
										lineHeight: '125%',
										color: '#fff',
										letterSpacing: '0.2px',
										textShadow: '0px 0px 24px rgba(0, 0, 0, 0.1)',
										marginBottom: '15px',
									}}
								>
									Topic (Optional)
								</Typography>
								<InputBase
									sx={{
										width: matches ? '100%' : '400px',
										border: '1px solid #ffffff',
										color: '#ffffff',
										padding: '10px',
										opacity: '0.8',
									}}
									placeholder='Specify the topic of the post'
									inputProps={{ 'aria-label': 'Topic' }}
									onChange={(e) => setTopic(e.target.value)}
								/>
							</Box>
							<Typography
								sx={{
									fontFamily: 'Urbanist',
									fontStyle: 'normal',
									fontWeight: '700',
									fontSize: '16px',
									lineHeight: '125%',
									color: '#fff',
									letterSpacing: '0.2px',
									textShadow: '0px 0px 24px rgba(0, 0, 0, 0.1)',
									marginTop: '15px',
									marginBottom: '15px',
								}}
							>
								Description (Required)
							</Typography>
							<MentionsInput
								style={{
									width: matches ? '100%' : '400px',
									border: '1px solid #ffffff',
									padding: '10px',
									minHeight: '200px',
								}}
								placeholder={"What's on your mind?"}
								value={CreatePostDesctiption}
								onChange={(e) => setCreatePostDesctiption(e.target.value)}
								className='mentions1'
							>
								<Mention
									trigger='@'
									data={users}
									style={{ border: 'none' }}
									className={classForMentions.mentions1__mention}
								/>
							</MentionsInput>
						</Box>

						<Box
							sx={{
								width: matches ? '100%' : '400px',
								border: '1px solid rgba(255, 255, 255, 0.1)',
								margin: '40px 0 20px 0',
							}}
						/>

						<Box
							sx={{
								display: 'flex',
								marginBottom: '40px',
							}}
						>
							<Box>
								{/* <div class='upload-btn-wrapper'> */}
								<div>
									<CropOriginalIcon
										onClick={() => handleSelectFile('image')}
										sx={{
											width: '40px',
											height: '40px',
											transition: 'all 250ms ease',
											cursor: 'pointer',
											'&:not(:hover)': {
												color: '#fff',
											},
											'&:hover': {
												color: '#FF8200',
											},
										}}
									/>
									<SlideshowIcon
										onClick={() => handleSelectFile('video')}
										sx={{
											width: '40px',
											height: '40px',
											marginLeft: '40px',
											transition: 'all 250ms ease',
											cursor: 'pointer',
											'&:not(:hover)': {
												color: '#fff',
											},
											'&:hover': {
												color: '#FF8200',
											},
										}}
									/>
									<AttachFileIcon
										onClick={() => handleSelectFile('audio')}
										sx={{
											width: '40px',
											height: '40px',
											marginLeft: '40px',
											transition: 'all 250ms ease',
											cursor: 'pointer',
											'&:not(:hover)': {
												color: '#fff',
											},
											'&:hover': {
												color: '#FF8200',
											},
										}}
									/>
									<input
										ref={inputImageFileRef}
										type='file'
										name='myfile-image'
										accept='image/*'
										onChange={(e) => handleUploadFile(e)}
										hidden
									/>
									<input
										ref={inputVideoFileRef}
										type='file'
										name='myfile-video'
										accept='video/*'
										onChange={(e) => handleUploadFile(e)}
										hidden
									/>
									<input
										ref={inputAudioFileRef}
										type='file'
										name='myfile-audio'
										accept='audio/*'
										onChange={(e) => handleUploadFile(e)}
										hidden
									/>
								</div>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							height: '100%',
							width: '100%',
							background: '#303030',
							borderRadius: '33px',
							marginTop: matches ? 2 : 1,
							marginLeft: '10px',
						}}
					>
						<Box className={classes.paddingSpace}>
							<Box
								sx={{ marginBottom: '10px' }}
								className={classes.feedbackUserBox}
							>
								<Box
									sx={{ marginRight: '5px !important' }}
									className={classes.feedbackUserImage}
								>
									<Box
										style={{
											backgroundImage: `url(${
												ProfilePicPrev ? ProfilePicPrev : dummyImage
											})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center center',
											backgroundRepeat: 'no-repeat',
											borderRadius: '100%',
											border: '2px solid #1D1D1D',
											width: '50px',
											height: '50px',
										}}
										className={`${classes.profile}`}
									></Box>
								</Box>
								<Box>
									<Typography className={classes.feedbackUserName}>
										{Name} {PrName}
									</Typography>
									<Typography className={classes.feedbackUserTime}>
										{moment(new Date()).fromNow()}
									</Typography>
								</Box>
							</Box>
							{CreatePostImage && (
								<Box
									sx={{ marginBottom: '10px' }}
									className={classes.feedbackSpaceBottom}
								>
									<Box className={classes.img}>
										<img
											style={{ borderRadius: '5px' }}
											src={URL.createObjectURL(CreatePostImage)}
											alt=''
											width='100%'
										/>
									</Box>
								</Box>
							)}

							<Box
								sx={{ marginBottom: '45px', marginTop: '20px' }}
								className={classes.feedbackSpaceBottom}
							>
								<Typography
									sx={{
										fontSize: '15px !important',
										display: '-webkit-box',
										'-webkit-line-clamp': '3',
										'-webkit-box-orient': 'vertical',
										overflow: 'hidden',
										fontWeight: '400',
										'& textarea:disabled': {
											padding: '5px !important',
											color: '#ffffff !important',
											border: 'none !important',
											opacity: '0.8 !important',
										},
									}}
									className={classes.feedbackUserPost}
								>
									<MentionsInput
										style={{
											width: matches ? '100%' : '400px',
											padding: '5px !important',
											color: '#ffffff !important',
											border: 'none !important',
											opacity: '1 !important',
										}}
										placeholder={"What's on your mind?"}
										value={CreatePostDesctiption}
										disabled={true}
										// className='mentions1'
									>
										<Mention
											trigger='@'
											data={users}
											style={{ border: 'none !important' }}
											className={classForMentions.mentions3__mention}
											// renderSuggestion={this.renderUserSuggestion}
										/>
									</MentionsInput>
								</Typography>
							</Box>

							{CreatePostAudio && (
								<Box
									sx={{
										background: '#1d1d1d',
										padding: '10px',
										margin: '60px 0 10px 0 !important',
										borderRadius: '5px',
									}}
									className={classes.songSection}
								>
									<Box className={classes.songLinkSection}>
										<HiLink className={classes.linkIcon} />
									</Box>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: ' center',
											overflow: 'hidden',
										}}
									>
										<Typography
											className={classes.songName}
											sx={{
												width: '100%',
												overflow: 'hidden !important',
												position: 'relative !important',
												textAlign: 'justify !important',
												paddingRight: '1em !important',
												textOverflow: 'ellipsis !important',
												whiteSpace: 'nowrap !important',
											}}
										>
											{CreatePostAudio?.name}
										</Typography>
										<Typography className={classes.songSize}>
											{Math.round(
												Number(CreatePostAudio?.size) / (1024 * 1024).toFixed(2)
											)}
											mb
										</Typography>
									</Box>
								</Box>
							)}

							<Divider
								sx={{
									background: 'rgba(255,255,255,0.50)',
									height: 1,
									borderRadius: 20,
								}}
							/>
							<Box className={classes.feedbackSocial}>
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
									349
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
									22
								</Typography>
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
											marginLeft: '16px',
										}}
									/>
								</Box>
								{/* <Box className={classes.feedbackSocialDetails}>
									<MessageIcon className={classes.feedbackIcon} />
									<Typography className={classes.feedbackText}>22</Typography>
								</Box>
								<Box className={classes.feedbackSocialDetails}>
									<FavoriteIcon className={classes.feedbackIcon} />
									<Typography className={classes.feedbackText}>22</Typography>
								</Box> */}
							</Box>
						</Box>
					</Box>
				</Box>
				<Button
					variant='contained'
					onClick={createPost}
					sx={{
						marginBottom: '20px',
						float: 'right',
						marginRight: '35px',
						padding: '16px 62px',
						width: '172px',
						background: '#FF8200',
						borderRadius: '30px',
						transition: 'all 250ms ease',
						boxShadow: 'none',
						'&:hover': {
							background: 'rgba(255, 130, 0, 0.8)',
							boxShadow: 'none',
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
							color: '#000',
							textTransform: 'capitalize',
						}}
					>
						POST
					</Typography>
				</Button>
			</DialogContent>
			<IconButton
				className={classes.customizedButton}
				onClick={() => {
					setPostModalStatus(false);
					// setCreatePostDesctiption("")
					// setCreatePostImage("")
				}}
			>
				<CloseIcon fontSize={'large'} />
			</IconButton>
		</Dialog>
	);
}
