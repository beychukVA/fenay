import React, { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { SignupStepsEnum } from '../lib/SignupStepsEnum';
import ArrowLeft from '../../../../assets/ArrowLeft.svg';
import CompleteIcon from '../../../../assets/CompleteIcon.svg';
import { AuthContext } from '../../../../provider/AuthProvider/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AccountCompleteStep = ({ setStep, setData, data }) => {
	const { setCredentials } = useContext(AuthContext);
	const navigate = useNavigate();
	const [isRedirect, setRedirect] = useState();

	useEffect(() => {
		setInterval(() => setRedirect(true), 5000);
	}, []);

	useEffect(() => {
		if (isRedirect) {
			setLocalStorage(data?.token, data?.email);
			setCredentials(data?.token);
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRedirect]);

	const handleBack = () => {
		setStep(SignupStepsEnum.ACCOUNT_VERIFICATION);
	};

	const setLocalStorage = (token, email) => {
		localStorage.setItem('token', token);
		localStorage.setItem('login', true);
		localStorage.setItem('email', email);
	};

	return (
		<Box
			sx={{
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				background: '#181A20',
				zIndex: 999,
				overflow: 'hidden',
			}}
		>
			<Button
				sx={{
					marginTop: '84px',
					marginLeft: '149px',
					'&:hover': {
						background: 'transparent',
					},
				}}
				onClick={() => handleBack()}
			>
				<img
					src={ArrowLeft}
					alt='arrow back'
					style={{
						cursor: 'pointer',
						marginRight: '14px',
						width: '24px',
						height: '24px',
					}}
				/>
				<Typography
					sx={{
						fontFamily: 'Inter',
						fontStyle: 'normal',
						fontWeight: 600,
						fontSize: '14px',
						lineHeight: '20px',
						color: '#fff',
						textTransform: 'none',
					}}
				>
					Back
				</Typography>
			</Button>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
				}}
			>
				<img src={CompleteIcon} alt='' style={{ marginBottom: '43px' }} />
				<Typography
					sx={{
						fontFamily: 'Work Sans',
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: '32px',
						lineHeight: '125%',
						letterSpacing: '0.2px',
						color: '#fff',
						textTransform: 'none',
						marginBottom: '12px',
					}}
				>
					Congratulations!
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
						textAlign: 'center',
						textTransform: 'none',
						width: '338px',
						marginBottom: '48px',
					}}
				>
					Your email has been successfully verified. <br /> Now you can access
					all the features.
				</Typography>
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
						marginBottom: '48px',
					}}
					onClick={() => {}}
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
						Go to dashboard
					</Typography>
				</Button>
				<Typography
					sx={{
						fontFamily: 'Work Sans',
						fontStyle: 'normal',
						fontWeight: 400,
						fontSize: '12px',
						lineHeight: '130%',
						color: 'rgba(255, 255, 255, 0.6)',
						marginBottom: '98px',
					}}
				>
					© 2022 Finay. All Rights Reserved.
				</Typography>
			</Box>
		</Box>
	);
};
