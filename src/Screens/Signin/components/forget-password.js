import React, { useState } from 'react';
import { Box, Button, TextField, Typography, FormControl } from '@mui/material';
import {
	forgetPasswordMail,
	verifyMail,
	changePassword,
} from '../../../Services/ForgetPassword';
import { show_success, show_toast } from '../../../helpers/toast';
import { CheckYourEmail } from './CheckYourEmail';
import { sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../../provider/AuthProvider/AuthContext';
import { useContext } from 'react';

const ForgetPassword = ({ forgetPasswordOpen, setForgetPasswordOpen }) => {
	const { auth } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [code, setCode] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [codePage, setCodePage] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [passwordChange, setPasswordChange] = useState(false);
	const [password, setPassword] = useState('');
	const [values, setValues] = useState({
		email: '',
	});
	const [isLinkSentSuccessfully, setLinkSentSuccessfully] = useState(false);

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const forgetPasswordHandle = async () => {
		if (!values.email) {
			show_toast('Please enter all fields');
			return;
		}
		sendPasswordResetEmail(auth, values.email)
			.then(() => {
				show_success(
					`Link successfully sent to ${values.email}, please check your email!`
				);
				setLinkSentSuccessfully(true);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				show_toast(`${errorCode} - ${errorMessage}`);
			});
	};

	// eslint-disable-next-line no-unused-vars
	const verifyMailHandle = async () => {
		const response = await verifyMail(email, code);
		if (response?.data) {
			if (response.data.status_msg === 'Code verified') {
				setPasswordChange(true);
			}
		}
	};

	// eslint-disable-next-line no-unused-vars
	const changePasswordHandle = async () => {
		const response = await changePassword(email, password);
		if (response?.data) {
			setEmail('');
			setCode('');
			setPassword('');
			setPasswordChange(false);
			setCodePage(false);
			setForgetPasswordOpen(false);
			show_success('Password updated');
		}
	};

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
					background: '#FF8200',
					opacity: '0.15',
					filter: 'blur(109.707px)',
					zIndex: '1',
				}}
			></Box>
			<Box
				sx={{
					position: 'absolute',
					top: '-64px',
					right: '15%',
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
					position: 'absolute',
					top: '-31px',
					left: '15%',
					width: '282.54px',
					height: '287.17px',
					background: '#AD00FF',
					opacity: '0.15',
					filter: 'blur(109.707px)',
					zIndex: '1',
				}}
			></Box>
			{isLinkSentSuccessfully ? (
				<CheckYourEmail
					email={values.email}
					resendLink={forgetPasswordHandle}
				/>
			) : (
				<Box
					sx={{
						position: 'relative',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '382px',
						height: '100%',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Urbanist',
							fontStyle: 'normal',
							fontWeight: '600',
							fontSize: '32px',
							lineHeight: '130%',
							color: '#fff',
							marginBottom: '13px',
						}}
					>
						Forgot Password?
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: '400',
							fontSize: '16px',
							lineHeight: '150%',
							color: '#D5D4D8',
							textAlign: 'center',
							marginBottom: '32px',
						}}
					>
						Enter your account's email and we'll send you an email to reset the
						password
					</Typography>
					<FormControl
						sx={{
							marginBottom: '48px',
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
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '100%',
							marginBottom: '128px',
						}}
					>
						<Button
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: '16px 0',
								width: '100%',
								background: '#FF8200',
								borderRadius: '30px',
								transition: 'all 250ms ease',
								'&:hover': {
									background: '#FF8200',
									opacity: '0.8',
								},
							}}
							onClick={() => forgetPasswordHandle()}
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
								Send Email
							</Typography>
						</Button>
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
				</Box>
			)}
		</Box>
	);
};

export default ForgetPassword;
