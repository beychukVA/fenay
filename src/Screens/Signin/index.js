import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
	FormControl,
	InputLabel,
	OutlinedInput,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { show_toast, show_success } from '../../helpers/toast';
import { AuthContext } from '../../provider/AuthProvider/AuthContext';
import { Login } from '../../Services/Auth';
import ArrowRightOrange from '../../assets/ArrowRightOrange.svg';
import ForgotPasswordDialog from './components/forget-password';
import { Google } from '../../Services/Google';
import { Apple } from '../../Services/Apple';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Signin() {
	const { auth, setCredentials } = useContext(AuthContext);
	let navigate = useNavigate();
	const [values, setValues] = useState({
		email: '',
		password: '',
		showPassword: false,
	});
	const [isActiveForgotPasswordDialog, setForgotPasswordDialogActive] =
		useState(false);

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = (prop) => {
		setValues({ ...values, [prop]: !values[prop] });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	// eslint-disable-next-line no-unused-vars
	const [Username, setUsername] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [Password, setPassword] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [twoFactor, settwoFactor] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [twoFactorModal, settwoFactorModal] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [code, setcode] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [codeFromLogin, setcodeFromLogin] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = async () => {
		if (!values.email || !values.password) {
			show_toast('Please enter all fields');
			return;
		}
		signInWithEmailAndPassword(auth, values.email, values.password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;
				await Login(user.email, user.uid)
					.then((res) => {
						show_success('You have successfully logged in!');
						setLocalStorage(res.token, values.email);
						setCredentials(res.token);
						navigate('/', { replace: true });
					})
					.catch((error) => {
						show_toast(error.message);
					});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				show_toast(`${errorCode} - ${errorMessage}`);
			});
	};

	const setLocalStorage = (token, email) => {
		localStorage.setItem('token', token);
		localStorage.setItem('login', true);
		localStorage.setItem('email', email);
	};

	if (isActiveForgotPasswordDialog) {
		return (
			<ForgotPasswordDialog
				forgetPasswordOpen={isActiveForgotPasswordDialog}
				setForgetPasswordOpen={setForgotPasswordDialogActive}
			/>
		);
	}

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				width: '100%',
				height: '100vh',
				background: 'rgba(0, 0, 0, 0.25)',
				zIndex: '0',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					left: '-23px',
					bottom: '0',
					width: '282.54px',
					height: '287.17px',
					background: '#AD00FF',
					opacity: '0.15',
					filter: 'blur(109.707px)',
					zIndex: '1',
				}}
			></Box>
			<Box
				sx={{
					position: 'absolute',
					top: '9px',
					right: '0',
					width: '282.54px',
					height: '287.17px',
					background: '#FF8200',
					opacity: '0.15',
					filter: 'blur(109.707px)',
					zIndex: '1',
				}}
			></Box>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'center',
					width: '382px',
					height: '100%',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Urbanist',
						fontStyle: 'normal',
						fontWeight: '700',
						fontSize: '48px',
						lineHeight: '125%',
						letterSpacing: '0.2px',
						color: '#fff',
						marginBottom: '16px',
					}}
				>
					Welcome back,
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: '41px',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Urbanist',
							fontStyle: 'normal',
							fontWeight: '600',
							fontSize: '16px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#D5D4D8',
						}}
					>
						Don’t have an account?&nbsp;
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
						}}
						onClick={() => navigate('/signup')}
					>
						<Typography
							sx={{
								fontFamily: 'Urbanist',
								fontStyle: 'normal',
								fontWeight: '600',
								fontSize: '16px',
								lineHeight: '140%',
								letterSpacing: '0.2px',
								color: '#FF8200',
							}}
						>
							Signup
						</Typography>
						<img
							style={{
								width: '24px',
								height: '24px',
								marginLeft: '8px',
							}}
							src={ArrowRightOrange}
							alt=''
						/>
					</Box>
				</Box>
				<FormControl
					sx={{
						marginBottom: '20px',
						width: '382px',
					}}
					variant='outlined'
				>
					<TextField
						id='outlined-email-input'
						label='Email'
						type='email'
						variant='outlined'
						onChange={handleChange('email')}
						sx={{
							'& label.Mui-focused': {
								color: '#FF8200',
							},
							'& input': {
								padding: '0',
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
						marginBottom: '20px',
						width: '382px',
					}}
					variant='outlined'
				>
					<InputLabel
						htmlFor='outlined-adornment-password'
						sx={{
							'&.Mui-focused': {
								color: '#FF8200',
							},
						}}
					>
						Password
					</InputLabel>
					<OutlinedInput
						sx={{
							padding: '15px 20px',
							border: '1px solid #515151',
							borderRadius: '10px',
							background: 'rgba(255, 255, 255, 0.05)',
							'& .MuiSvgIcon-root': {
								fill: '#9E9E9E',
							},
							'& input': {
								padding: '0',
							},
							'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
								{
									marginLeft: '0',
								},
						}}
						id='outlined-adornment-password'
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={() => handleClickShowPassword('showPassword')}
									onMouseDown={(e) => handleMouseDownPassword(e)}
									edge='end'
								>
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						labelwidth={70}
					/>
				</FormControl>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						width: '100%',
						cursor: 'pointer',
						marginBottom: '32px',
					}}
					onClick={() => setForgotPasswordDialogActive(true)}
				>
					<Typography
						sx={{
							fontFamily: 'Urbanist',
							fontStyle: 'normal',
							fontWeight: '600',
							fontSize: '16px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#FF8200',
						}}
					>
						Forgot password?
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						marginBottom: '32px',
					}}
				>
					<Button
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '16px 0',
							width: '175px',
							background: '#FF8200',
							borderRadius: '30px',
							transition: 'all 250ms ease',
							'&:hover': {
								background: '#FF8200',
								opacity: '0.8',
							},
						}}
						onClick={() => handleLogin()}
					>
						<Typography
							sx={{
								fontFamily: 'Work Sans',
								fontStyle: 'normal',
								fontWeight: 500,
								fontSize: '14px',
								lineHeight: '20px',
								color: '#341B00',
								textTransform: 'none',
							}}
						>
							Login
						</Typography>
					</Button>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						marginBottom: '44px',
					}}
				>
					<Box
						sx={{
							width: '99px',
							height: '1px',
							background: '#454343',
						}}
					></Box>
					<Box
						sx={{
							margin: '0 36px 0 34px',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Urbanist',
								fontStyle: 'normal',
								fontWeight: 500,
								fontSize: '16px',
								lineHeight: '140%',
								letterSpacing: '0.2px',
								color: '#D5D4D8',
								textTransform: 'none',
							}}
						>
							or continue with
						</Typography>
					</Box>
					<Box
						sx={{
							width: '99px',
							height: '1px',
							background: '#454343',
						}}
					></Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						marginBottom: '48px',
						zIndex: 2,
					}}
				>
					<Google />
					<Apple />
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '12px',
							lineHeight: '130%',
							color: 'rgba(255, 255, 255, 0.6)',
						}}
					>
						© 2022 Finay. All Rights Reserved.
					</Typography>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						right: '-25%',
						bottom: '5%',
						width: '282.54px',
						height: '287.17px',
						background: '#FF8200',
						opacity: '0.15',
						filter: 'blur(109.707px)',
						zIndex: '1',
					}}
				></Box>
			</Box>
		</Box>
	);
}

export default Signin;
