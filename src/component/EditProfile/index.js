import React, { useState } from 'react';
import {
	Box,
	Button,
	FormControl,
	TextField,
	Typography,
	useMediaQuery,
} from '@mui/material';
import UploadCloudIcon from '../../assets/UploadCloudIcon.svg';
import DeleteIco from '../../assets/CloseBorderedIcon.svg';
import { show_success, show_toast } from '../../helpers/toast';
import { UpdateUser } from '../../Services/User';
import { useRef } from 'react';
import { useEffect } from 'react';
import { UploadFiles } from '../../Services/UploadFiles';

const MAX_FILE_SIZE = 52428800; //50MB
const validFileTypes = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'];

const EditProfile = ({ isLeftSidebarOpen, userInfo }) => {
	const matches = useMediaQuery('(max-width:767px)');
	const [dragActive, setDragActive] = useState(false);
	const [file, setFile] = useState(false);
	const [fileUrl, setFileUrl] = useState(false);
	const inputRef = useRef(null);
	const [values, setValues] = useState({
		firstName: userInfo.firstName,
		username: userInfo.username,
		tagline: userInfo.tagline,
		bio: userInfo.bio,
		contact: userInfo.contact,
		website: userInfo.website,
		profilePicture: file ? fileUrl : userInfo.profilePicture,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const uploadUserAvatar = async () => {
		if (!file) {
			show_toast('Choose File');
			return;
		}

		await UploadFiles(file)
			.then(async (res) => {
				const avatarUrl = res.fileUrl.Location;
				const data = {
					profilePicture: avatarUrl ? avatarUrl : values.profilePicture.trim(),
				};
				await UpdateUser(data)
					.then((res) => {
						if (res) {
							setFile(null);
							setFileUrl('');
							show_success('File uploaded successfully');
						}
					})
					.catch((error) => {
						show_toast(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const updateUserProfile = async () => {
		if (values.firstName.trim() === '') {
			show_toast('Name field can not be empty.');
			return;
		}

		const data = {
			firstName: values.firstName.trim(),
			lastName: values.username.trim(),
			tagline: values.tagline.trim(),
			bio: values.bio.trim(),
			contact: values.contact.trim(),
			personalSite: values.website.trim(),
		};
		await UpdateUser(data)
			.then((res) => {
				if (res) {
					show_success('Account has been updated');
				}
			})
			.catch((error) => {
				show_toast(error);
			});
	};

	useEffect(() => {
		if (file) {
			const fileReader = new FileReader();
			fileReader.onload = () => setFileUrl(fileReader.result);
			fileReader.readAsDataURL(file);
		}
	}, [file]);

	const handleDrag = (e) => {
		console.log('handleDrag');
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	const handleDrop = (e) => {
		console.log('handleDrop');
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const file = e.dataTransfer.files[0];
			if (file.size > MAX_FILE_SIZE) {
				show_toast('File size is too large');
				return;
			}
			if (!validFileTypes.includes(file.type)) {
				show_toast('Invalid file type');
				return;
			}
			setFile(e.dataTransfer.files[0]);
		}
	};

	const handleChangeImg = (e) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			if (file.size > MAX_FILE_SIZE) {
				show_toast('File size is too large');
				return;
			}
			if (!validFileTypes.includes(file.type)) {
				show_toast('Invalid file type');
				return;
			}
			setFile(e.target.files[0]);
		}
	};

	const onButtonClick = () => {
		inputRef.current.click();
	};

	const removeFile = () => {
		inputRef.current.value = '';
		setFile(null);
		setFileUrl('');
	};

	return (
		<Box
			sx={{
				// width: isLeftSidebarOpen ? "100%" : "calc(100% - 235px)",
				width: '100%',
				height: { xs: '100%', lg: '100vh' },
				padding: isLeftSidebarOpen
					? {
							xs: matches ? '32px 12px 0 12px' : '32px 32px 0 32px',
							lg: '32px 155px 0 156px',
					  }
					: '32px 0 0 0',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-start',
					width: '100%',
					height: '100%',
				}}
				// className={`${isLeftSidebarOpen ? "" : classes.sidebarOpen}`}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', lg: 'row' },
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							justifyContent: 'flex-start',
							height: { xs: 'auto', lg: '100%' },
							paddingTop: { xs: '0', lg: '112px' },
							marginBottom: { xs: '48px', lg: '0' },
							marginRight: isLeftSidebarOpen ? '111px' : '56px',
							width: { xs: '100%', lg: 'auto' },
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Urbanist',
								fontStyle: 'normal',
								fontWeight: '700',
								fontSize: '32px',
								lineHeight: '125%',
								color: '#fff',
								letterSpacing: '0.2px',
								marginBottom: '48px',
							}}
						>
							Edit profile
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-start',
								width: '270px',
								padding: '14px 23px',
								background: '#FF8200',
								borderRadius: '4px',
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Work Sans',
									fontStyle: 'normal',
									fontWeight: '500',
									fontSize: '18px',
									lineHeight: '140%',
									color: '#000',
									letterSpacing: '0.2px',
								}}
							>
								Profile
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
							overflow: 'hidden',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								justifyContent: 'flex-start',
								width: '100%',
								height: '100%',
								overflow: 'auto',
								paddingRight: '10px',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: matches ? 'column-reverse' : 'row',
									alignItems: 'center',
									justifyContent: matches ? 'flex-end' : 'center',
									minWidth: { xs: 'auto', lg: '748px' },
									minHeight: matches ? 'auto' : '344px',
									padding: matches
										? '32px 48px 43px 48px'
										: '32px 97px 43px 48px',
									background: 'rgba(255, 255, 255, 0.05)',
									borderRadius: '4px',
									marginBottom: '48px',
								}}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'flex-start',
										justifyContent: 'center',
										marginRight: matches ? '0' : '62px',
										marginTop: matches ? '48px' : '0',
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
										Upload a profile picture
									</Typography>
									<Typography
										sx={{
											fontFamily: 'Work Sans',
											fontStyle: 'normal',
											fontWeight: '400',
											fontSize: '14px',
											lineHeight: '125%',
											color: '#D5D4D8',
											letterSpacing: '0.2px',
											marginBottom: '48px',
											textAlign: 'start',
										}}
									>
										Show people who you are! <br />
										Recommended size: 400x400px. <br />
										JPG, PNG or GIF. 50MB max limit.
									</Typography>
									<Button
										sx={{
											padding: '16px 62px',
											width: '172px',
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
												color: '#000',
												textTransform: 'capitalize',
											}}
											onClick={uploadUserAvatar}
										>
											Upload
										</Typography>
									</Button>
								</Box>
								<form
									style={{
										width: '269px',
										height: '269px',
										textAlign: 'center',
										position: 'relative',
									}}
									onDragEnter={handleDrag}
									onSubmit={(e) => e.preventDefault()}
								>
									{file ? (
										<Box
											sx={{
												position: 'relative',
												width: '269px',
												height: '269px',
											}}
										>
											<img
												style={{
													width: '100%',
													height: '100%',
													borderRadius: '4px',
												}}
												src={fileUrl}
												alt={file.name}
											/>
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
														background: 'red',
													},
												}}
												onClick={() => {
													removeFile();
												}}
												src={DeleteIco}
												alt='delete'
											/>
										</Box>
									) : (
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
												justifyContent: 'center',
												padding: '32px',
												minWidth: '269px',
												minHeight: '269px',
												borderRadius: '4px',
												backgroundImage:
													"url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='rgba(107, 106, 106, 1.0)' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
											}}
										>
											<>
												<Box
													sx={{
														width: '64px',
														height: '64px',
														backgroundImage: `url(${UploadCloudIcon})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center center',
														backgroundRepeat: 'no-repeat',
														marginBottom: '32px',
													}}
												/>
												<Typography
													sx={{
														fontFamily: 'Work Sans',
														fontStyle: 'normal',
														fontWeight: '400',
														fontSize: '20px',
														lineHeight: '23px',
														color: '#D5D4D8',
														marginBottom: '8px',
													}}
												>
													Drag & Drop
												</Typography>
												<Typography
													sx={{
														fontFamily: 'Work Sans',
														fontStyle: 'normal',
														fontWeight: '400',
														fontSize: '16px',
														lineHeight: '19px',
														color: 'rgba(255, 255, 255, 0.3)',
														marginBottom: '43px',
														cursor: 'pointer',
													}}
													onClick={onButtonClick}
												>
													or select files from device
												</Typography>
												<Typography
													sx={{
														fontFamily: 'Work Sans',
														fontStyle: 'normal',
														fontWeight: '400',
														fontSize: '14px',
														lineHeight: '16px',
														color: 'rgba(255, 255, 255, 0.3)',
													}}
												>
													max. 50MB
												</Typography>
											</>
										</Box>
									)}
									{dragActive && (
										<div
											style={{
												position: 'absolute',
												width: '100%',
												height: '100%',
												borderRadius: '1rem',
												top: '0px',
												right: '0px',
												bottom: '0px',
												left: '0px',
											}}
											onDragEnter={handleDrag}
											onDragLeave={handleDrag}
											onDragOver={handleDrag}
											onDrop={handleDrop}
										/>
									)}
								</form>
								<input
									ref={inputRef}
									onChange={handleChangeImg}
									accept={validFileTypes.join(', ')}
									type='file'
									hidden
								/>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start',
									justifyContent: 'center',
									width: '100%',
									marginBottom: '48px',
								}}
							>
								<Typography
									sx={{
										fontFamily: 'Inter',
										fontStyle: 'normal',
										fontWeight: '600',
										fontSize: '24px',
										lineHeight: '125%',
										color: '#fff',
										letterSpacing: '0.2px',
										marginBottom: '8px',
									}}
								>
									Account Information
								</Typography>
								<Typography
									sx={{
										fontFamily: 'Work Sans',
										fontStyle: 'normal',
										fontWeight: '400',
										fontSize: '14px',
										lineHeight: '16px',
										color: '#D5D4D8',
										letterSpacing: '0.2px',
										textAlign: 'start',
										maxWidth: '380px',
									}}
								>
									We will use these information to verify your account. <br />{' '}
									We might contact you for confirmation.
								</Typography>
							</Box>
							{/** Inputs*/}
							<Box
								sx={{
									display: 'flex',
									flexDirection: matches ? 'column' : 'row',
									alignItems: 'flex-start',
									justifyContent: 'center',
									width: '100%',
								}}
							>
								<FormControl
									sx={{
										marginBottom: '48px',
										width: { xs: '100%', lg: '366px' },
									}}
									variant='outlined'
								>
									<TextField
										id='outlined-first-name-input'
										label='First name'
										type='text'
										value={values.firstName}
										variant='outlined'
										onChange={handleChange('firstName')}
										sx={{
											'& label.MuiFormLabel-filled': {
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans !important',
												fontStyle: 'normal !important',
												fontWeight: '500 !important',
												fontSize: '16px !important',
												lineHeight: '140% !important',
												letterSpacing: '0.2px !important',
												color: '#D5D4D8 !important',
											},
											'& label.Mui-focused': {
												color: '#FF8200',
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans',
												fontStyle: 'normal',
												fontWeight: '500',
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
											},
											'& input': {
												padding: '0',
												fontFamily: 'Urbanist',
												fontStyle: 'normal',
												fontWeight: '600',
												fontSize: '14px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
												color: '#9E9E9E',
											},
											'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
												{
													marginLeft: '0',
												},
											padding: '15px 20px',
											border: '1px solid #515151',
											borderRadius: '10px',
											background: 'rgba(255, 255, 255, 0.05)',
										}}
									/>
								</FormControl>
								<FormControl
									sx={{
										marginBottom: '48px',
										marginLeft: matches ? '0' : '16px',
										width: { xs: '100%', lg: '366px' },
									}}
									variant='outlined'
								>
									<TextField
										id='outlined-username-input'
										label='Username'
										type='text'
										variant='outlined'
										value={values.username}
										onChange={handleChange('username')}
										sx={{
											'& label.MuiFormLabel-filled': {
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans !important',
												fontStyle: 'normal !important',
												fontWeight: '500 !important',
												fontSize: '16px !important',
												lineHeight: '140% !important',
												letterSpacing: '0.2px !important',
												color: '#D5D4D8 !important',
											},
											'& label.Mui-focused': {
												color: '#FF8200',
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans',
												fontStyle: 'normal',
												fontWeight: '500',
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
											},
											'& input': {
												padding: '0',
												fontFamily: 'Urbanist',
												fontStyle: 'normal',
												fontWeight: '600',
												fontSize: '14px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
												color: '#9E9E9E',
											},
											'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
												{
													marginLeft: '0',
												},
											padding: '15px 20px',
											border: '1px solid #515151',
											borderRadius: '10px',
											background: 'rgba(255, 255, 255, 0.05)',
										}}
									/>
								</FormControl>
							</Box>
							{/** Inputs 2 */}
							<Box
								sx={{
									display: 'flex',
									flexDirection: matches ? 'column' : 'row',
									alignItems: 'flex-start',
									justifyContent: 'center',
									width: '100%',
								}}
							>
								<FormControl
									sx={{
										marginBottom: '48px',
										width: { xs: '100%', lg: '366px' },
									}}
									variant='outlined'
								>
									<TextField
										id='outlined-tagline-input'
										label='Tagline'
										type='text'
										variant='outlined'
										multiline={true}
										maxRows={2}
										value={values.tagline}
										onChange={handleChange('tagline')}
										sx={{
											'& label.MuiFormLabel-filled': {
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans !important',
												fontStyle: 'normal !important',
												fontWeight: '500 !important',
												fontSize: '16px !important',
												lineHeight: '140% !important',
												letterSpacing: '0.2px !important',
												color: '#D5D4D8 !important',
											},
											'& label.Mui-focused': {
												color: '#FF8200',
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans',
												fontStyle: 'normal',
												fontWeight: '500',
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
											},
											'& div.MuiOutlinedInput-root': {
												padding: '0',
											},
											'& textarea': {
												padding: '0',
												fontFamily: 'Urbanist',
												fontStyle: 'normal',
												fontWeight: '600',
												fontSize: '14px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
												color: '#9E9E9E',
											},
											'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
												{
													marginLeft: '0',
												},
											padding: '20px 20px',
											border: '1px solid #515151',
											borderRadius: '10px',
											background: 'rgba(255, 255, 255, 0.05)',
										}}
									/>
								</FormControl>
								<FormControl
									sx={{
										marginBottom: '48px',
										marginLeft: matches ? '0' : '16px',
										width: { xs: '100%', lg: '366px' },
									}}
									variant='outlined'
								>
									<TextField
										id='outlined-bio-input'
										label='Bio'
										type='text'
										variant='outlined'
										multiline={true}
										maxRows={2}
										value={values.bio}
										onChange={handleChange('bio')}
										sx={{
											'& label.MuiFormLabel-filled': {
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans !important',
												fontStyle: 'normal !important',
												fontWeight: '500 !important',
												fontSize: '16px !important',
												lineHeight: '140% !important',
												letterSpacing: '0.2px !important',
												color: '#D5D4D8 !important',
											},
											'& label.Mui-focused': {
												color: '#FF8200',
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans',
												fontStyle: 'normal',
												fontWeight: '500',
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
											},
											'& div.MuiOutlinedInput-root': {
												padding: '0',
											},
											'& textarea': {
												padding: '0',
												fontFamily: 'Urbanist',
												fontStyle: 'normal',
												fontWeight: '600',
												fontSize: '14px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
												color: '#9E9E9E',
											},
											'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
												{
													marginLeft: '0',
												},
											padding: '20px 20px',
											border: '1px solid #515151',
											borderRadius: '10px',
											background: 'rgba(255, 255, 255, 0.05)',
										}}
									/>
								</FormControl>
							</Box>
							{/** Inputs 3 */}
							<Box
								sx={{
									display: 'flex',
									flexDirection: matches ? 'column' : 'row',
									alignItems: 'flex-start',
									justifyContent: 'center',
									width: '100%',
								}}
							>
								<FormControl
									sx={{
										marginBottom: '48px',
										width: { xs: '100%', lg: '366px' },
									}}
									variant='outlined'
								>
									<TextField
										id='outlined-contact-input'
										label='Contact'
										type='text'
										variant='outlined'
										value={values.contact}
										onChange={handleChange('contact')}
										sx={{
											'& label.MuiFormLabel-filled': {
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans !important',
												fontStyle: 'normal !important',
												fontWeight: '500 !important',
												fontSize: '16px !important',
												lineHeight: '140% !important',
												letterSpacing: '0.2px !important',
												color: '#D5D4D8 !important',
											},
											'& label.Mui-focused': {
												color: '#FF8200',
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans',
												fontStyle: 'normal',
												fontWeight: '500',
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
											},
											'& input': {
												padding: '0',
												fontFamily: 'Urbanist',
												fontStyle: 'normal',
												fontWeight: '600',
												fontSize: '14px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
												color: '#9E9E9E',
											},
											'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
												{
													marginLeft: '0',
												},
											padding: '15px 20px',
											border: '1px solid #515151',
											borderRadius: '10px',
											background: 'rgba(255, 255, 255, 0.05)',
										}}
									/>
								</FormControl>
								<FormControl
									sx={{
										marginBottom: '48px',
										marginLeft: matches ? '0' : '16px',
										width: { xs: '100%', lg: '366px' },
									}}
									variant='outlined'
								>
									<TextField
										id='outlined-personal-website-input'
										label='Personal website'
										type='text'
										variant='outlined'
										value={values.website}
										onChange={handleChange('website')}
										sx={{
											'& label.MuiFormLabel-filled': {
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans !important',
												fontStyle: 'normal !important',
												fontWeight: '500 !important',
												fontSize: '16px !important',
												lineHeight: '140% !important',
												letterSpacing: '0.2px !important',
												color: '#D5D4D8 !important',
											},
											'& label.Mui-focused': {
												color: '#FF8200',
												top: '-16px !important',
												left: '-16px !important',
												fontFamily: 'Work Sans',
												fontStyle: 'normal',
												fontWeight: '500',
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
											},
											'& input': {
												padding: '0',
												fontFamily: 'Urbanist',
												fontStyle: 'normal',
												fontWeight: '600',
												fontSize: '14px',
												lineHeight: '140%',
												letterSpacing: '0.2px',
												color: '#9E9E9E',
											},
											'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
												{
													marginLeft: '0',
												},
											padding: '15px 20px',
											border: '1px solid #515151',
											borderRadius: '10px',
											background: 'rgba(255, 255, 255, 0.05)',
										}}
									/>
								</FormControl>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-start',
									width: '100%',
									marginBottom: '48px',
								}}
							>
								<Button
									onClick={updateUserProfile}
									sx={{
										width: '175px',
										padding: '16px 38px',
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
											color: '#000',
											textTransform: 'capitalize',
										}}
									>
										Update profile
									</Typography>
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default EditProfile;
