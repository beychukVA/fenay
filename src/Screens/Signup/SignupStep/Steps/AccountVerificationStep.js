import React, { useContext, useState } from 'react';
import { Box, Button, Typography, TextField, FormControl } from '@mui/material';
import { SignupStepsEnum } from '../lib/SignupStepsEnum';
import { VerifyEmail, Login } from '../../../../Services/Auth';
import { AuthContext } from '../../../../provider/AuthProvider/AuthContext';
import LoadingIcon from '../../../../assets/LoadingIcon.svg';
import './animation.css';
import { show_success, show_toast } from '../../../../helpers/toast';
import {
	signInWithEmailAndPassword,
	applyActionCode,
	checkActionCode,
	sendEmailVerification,
} from 'firebase/auth';

export const AccountVerificationStep = ({ setStep, setData, data }) => {
	const { auth } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const { setCredentials } = useContext(AuthContext);
	const [values, setValues] = React.useState({
		one: '',
		two: '',
		three: '',
		four: '',
	});

	const handleEmailConfirmation = async () => {
		setLoading(true);
		const res = await VerifyEmail(
			data.email,
			`${values.one}${values.two}${values.three}${values.four}`
		);
		// res.success && (await handleLogin(data.email, data.password));
		res.success && handleLogin();
	};

	const handleLogin = async () => {
		await Login(data.email, data.uid)
			.then((res) => {
				console.log('login: ', res);
				handleNext();
			})
			.catch((error) => {
				show_toast(error.message);
			});
	};

	const handleResendCode = async () => {
		await Login(data.email, data.uid)
			.then((res) => {
				console.log('Code resubmission was successful');
			})
			.catch((error) => {
				show_toast(error.message);
			});
	};

	// eslint-disable-next-line no-unused-vars
	const setLocalStorage = (token, email) => {
		localStorage.setItem('token', token);
		localStorage.setItem('login', true);
		localStorage.setItem('email', email);
	};
	const handleNext = () => {
		// if (isNextBtnDisabled) return;

		setData((prev) => {
			return { ...prev, verify: true };
		});
		setStep(SignupStepsEnum.ACCOUNT_COMPLETE);
	};

	const handleChange = (prop) => (event) => {
		setValues({
			...values,
			[prop]: event.target.value
				.charAt(event.target.value.length - 1)
				.replace(/[^\d]/g, ''),
		});
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
			}}
		>
			<Typography
				sx={{
					fontFamily: 'Urbanist',
					fontStyle: 'normal',
					fontWeight: 700,
					fontSize: '32px',
					lineHeight: '125%',
					letterSpacing: '0.2px',
					color: '#fff',
					textShadow: '0px 0px 24px rgba(0, 0, 0, 0.1)',
					marginBottom: '12px',
				}}
			>
				Enter your code
			</Typography>
			<Typography
				sx={{
					fontFamily: 'Work Sans',
					fontStyle: 'normal',
					fontWeight: 500,
					fontSize: '16px',
					lineHeight: '125%',
					letterSpacing: '0.2px',
					color: '#D5D4D8',
					marginBottom: '48px',
					width: '272px',
				}}
			>
				We’ve emailed you with four-digit code to i***@finay.com. Enter the code
				below to confirm your email address.
			</Typography>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					'& :not(:first-of-type)': {
						marginLeft: '28px',
					},
					marginBottom: '24px',
				}}
			>
				<FormControl variant='outlined'>
					<TextField
						id='outlined-number-1-input'
						label=''
						type='text'
						variant='outlined'
						value={values.one}
						onChange={handleChange('one')}
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
							background: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid #515151',
							borderRadius: '8px',
							padding: '18px 26px',
							width: '64px',
							height: '64px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: 600,
							fontSize: '20px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#fff',
						}}
					/>
				</FormControl>
				<FormControl variant='outlined'>
					<TextField
						id='outlined-number-2-input'
						label=''
						type='text'
						variant='outlined'
						value={values.two}
						onChange={handleChange('two')}
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
							background: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid #515151',
							borderRadius: '8px',
							padding: '18px 26px',
							width: '64px',
							height: '64px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: 600,
							fontSize: '20px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#fff',
						}}
					/>
				</FormControl>
				<FormControl variant='outlined'>
					<TextField
						id='outlined-number-3-input'
						label=''
						type='text'
						variant='outlined'
						value={values.three}
						onChange={handleChange('three')}
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
							background: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid #515151',
							borderRadius: '8px',
							padding: '18px 26px',
							width: '64px',
							height: '64px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: 600,
							fontSize: '20px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#fff',
						}}
					/>
				</FormControl>
				<FormControl variant='outlined'>
					<TextField
						id='outlined-number-1-input'
						label=''
						type='text'
						variant='outlined'
						value={values.four}
						onChange={handleChange('four')}
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
							background: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid #515151',
							borderRadius: '8px',
							padding: '18px 26px',
							width: '64px',
							height: '64px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: 600,
							fontSize: '20px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#fff',
						}}
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					marginBottom: '48px',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Urbanist',
						fontStyle: 'normal',
						fontWeight: 600,
						fontSize: '16px',
						lineHeight: '140%',
						letterSpacing: '0.2px',
						color: '#D5D4D8',
					}}
				>
					Didn’t receive code?
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						marginLeft: '3px',
						cursor: 'pointer',
					}}
					onClick={() => handleResendCode()}
				>
					<Typography
						sx={{
							fontFamily: 'Urbanist',
							fontStyle: 'normal',
							fontWeight: 600,
							fontSize: '16px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#FF8200',
						}}
					>
						Resend
					</Typography>
				</Box>
			</Box>
			<Button
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '16px 0',
					width: '175px',
					background: '#FF8200',
					// borderRadius: "30px",
					borderRadius: '6px',
					transition: 'all 250ms ease',
					'&:hover': {
						background: '#FF8200',
						opacity: '0.8',
					},
					marginBottom: '32px',
				}}
				onClick={() => handleEmailConfirmation()}
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
					Verify
				</Typography>
				{loading && (
					<img
						style={{
							width: '20px',
							height: '20px',
							marginLeft: '8px',
							animation: 'spin 5s linear 0s infinite',
						}}
						src={LoadingIcon}
						alt=''
					/>
				)}
			</Button>
		</Box>
	);
};
