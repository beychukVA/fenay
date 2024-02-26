import React from 'react';
import {
	Box,
	Button,
	Typography,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	TextField,
} from '@mui/material';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { SignupStepsEnum } from '../lib/SignupStepsEnum';
import { show_toast } from '../../../../helpers/toast';
import { Login } from '../../../../Services/Auth';
import { Google } from '../../../../Services/Google';
import { Apple } from '../../../../Services/Apple';
import { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AccountInformationStep = ({ setStep, setData, data }) => {
	const { auth } = useContext(AuthContext);
	const [values, setValues] = React.useState({
		email: '',
		password: '',
		showPassword: false,
		confirmPassword: '',
		showConfirmPassword: false,
		uid: '',
	});

	const handleValidation = (password) => {
		const uppercaseRegExp = /(?=.*?[A-Z])/;
		const lowercaseRegExp = /(?=.*?[a-z])/;
		const digitsRegExp = /(?=.*?[0-9])/;
		const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
		const minLengthRegExp = /.{6,}/;
		const passwordLength = password.length;
		const uppercasePassword = uppercaseRegExp.test(password);
		const lowercasePassword = lowercaseRegExp.test(password);
		const digitsPassword = digitsRegExp.test(password);
		const specialCharPassword = specialCharRegExp.test(password);
		const minLengthPassword = minLengthRegExp.test(password);
		let errMsg = false;
		if (passwordLength === 0) {
			show_toast('Password is empty');
			errMsg = true;
		}
		if (!uppercasePassword) {
			show_toast('At least one Uppercase');
			errMsg = true;
		}
		if (!lowercasePassword) {
			show_toast('At least one Lowercase');
			errMsg = true;
		}
		if (!digitsPassword) {
			show_toast('At least one digit');
			errMsg = true;
		}
		if (!specialCharPassword) {
			show_toast('At least one Special Characters');
			errMsg = true;
		}
		if (!minLengthPassword) {
			show_toast('At least minumum 6 characters');
			errMsg = true;
		}

		if (errMsg) {
			return true;
		} else {
			return false;
		}
	};

	const handleSignup = async () => {
		if (
			values.email === '' ||
			values.password === '' ||
			values.confirmPassword === ''
		) {
			show_toast('Please enter all fields');
			return;
		}

		if (handleValidation(values.password)) {
			return;
		}

		createUserWithEmailAndPassword(auth, values.email, values.password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;
				await Login(user.email, user.uid)
					.then((res) => {
						setData({ ...data, uid: user.uid, token: res.token });
						handleNext();
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

	const handleNext = () => {
		setData((prev) => {
			return {
				...prev,
				email: values.email,
				password: values.password,
			};
		});
		setStep(SignupStepsEnum.ACCOUNT_VERIFICATION);
	};

	const handleBack = () => {
		setStep(SignupStepsEnum.ACCOUNT_TYPE);
	};

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = (prop) => {
		setValues({ ...values, [prop]: !values[prop] });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
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
				Create an account
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
					textShadow: '0px 0px 24px rgba(0, 0, 0, 0.1)',
					marginBottom: '32px',
					width: '299px',
				}}
			>
				Please fill in the below information to start buying, selling and
				collecting NFTs on Finay.
			</Typography>
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
						'& input': {
							padding: '0',
						},
						'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
							{
								marginLeft: '0',
							},
					}}
					autoComplete='false'
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
			<FormControl
				sx={{
					marginBottom: '32px',
					width: '382px',
				}}
				variant='outlined'
			>
				<InputLabel
					htmlFor='outlined-adornment-confirm-password'
					sx={{
						'&.Mui-focused': {
							color: '#FF8200',
						},
					}}
				>
					Confirm Password
				</InputLabel>
				<OutlinedInput
					autoComplete='false'
					sx={{
						padding: '15px 20px',
						border: '1px solid #515151',
						borderRadius: '10px',
						background: 'rgba(255, 255, 255, 0.05)',
						'& input': {
							padding: '0',
						},
						'input:-webkit-autofill:focus, input:-webkit-autofill, input:-webkit-autofill:hover':
							{
								marginLeft: '0',
							},
					}}
					id='outlined-adornment-confirm-password'
					type={values.showConfirmPassword ? 'text' : 'password'}
					value={values.confirmPassword}
					onChange={handleChange('confirmPassword')}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle confirm-password visibility'
								onClick={() => handleClickShowPassword('showConfirmPassword')}
								onMouseDown={(e) => handleMouseDownPassword(e)}
								edge='end'
							>
								{values.showConfirmPassword ? (
									<Visibility />
								) : (
									<VisibilityOff />
								)}
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
					justifyContent: 'space-between',
					width: '100%',
					marginBottom: '48px',
				}}
			>
				<Button
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '16px 0',
						width: '175px',
						border: '1px solid #FF8200',
						// borderRadius: "30px",
						borderRadius: '6px',
						transition: 'all 250ms ease',
						'&:hover': {
							background: 'rgba(0, 0, 0, 0.8)',
						},
					}}
					onClick={() => handleBack()}
				>
					<Typography
						sx={{
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: 500,
							fontSize: '14px',
							lineHeight: '20px',
							color: '#FF8200',
							textTransform: 'none',
						}}
					>
						Previous
					</Typography>
				</Button>
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
					}}
					onClick={() => handleSignup()}
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
						Sign up
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
					marginBottom: '24px',
				}}
			>
				<Google />
				<Apple />
			</Box>
		</Box>
	);
};
