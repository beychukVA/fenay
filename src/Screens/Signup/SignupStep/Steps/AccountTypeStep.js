import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { SignupStepsEnum } from '../lib/SignupStepsEnum';
import Headphones from '../../../../assets/Headphones.svg';
import MusicalNotes from '../../../../assets/MusicalNotes.svg';
import ArrowRight from '../../../../assets/ArrowRight.svg';

export const AccountTypeStep = ({ setStep, setData }) => {
	const [type, setType] = useState('fan');

	const isNextBtnDisabled = !type;

	const handleChange = (type) => {
		setType(type);
	};
	const handleNext = () => {
		if (isNextBtnDisabled) return;

		setData({
			accountType: type,
		});
		setStep(SignupStepsEnum.ACCOUNT_INFORMATION);
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
					letterSpacing: '0.1em',
					color: '#D5D4D8',
					marginBottom: '32px',
					width: '299px',
				}}
			>
				Select an option to start buying, selling and collecting NFTs on Finay.
			</Typography>
			<Typography
				sx={{
					fontFamily: 'Urbanist',
					fontStyle: 'normal',
					fontWeight: 600,
					fontSize: '24px',
					lineHeight: '125%',
					letterSpacing: '0.2px',
					color: '#fff',
					marginBottom: '20px',
				}}
			>
				Tell us a bit about you
			</Typography>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					marginBottom: '48px',
				}}
			>
				<Box
					key='fan'
					sx={{
						width: '179px',
						height: '100%',
						padding: '25px 20px',
						background:
							type === 'fan'
								? 'rgba(24, 26, 32, 0.05)'
								: 'rgba(255, 255, 255, 0.1)',
						borderRadius: '8px',
						border: type === 'fan' ? '2px solid #FF8200' : 'none',
						backdropFilter: 'blur(2px)',
						cursor: 'pointer',
					}}
					onClick={() => handleChange('fan')}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '42px',
							height: '42px',
							borderRadius: '50%',
							background: 'rgba(255, 255, 255, 0.14)',
							backdropFilter: 'blur(2px)',
							marginBottom: '24px',
						}}
					>
						<img src={Headphones} alt='Headphones' />
					</Box>
					<Typography
						sx={{
							fontFamily: 'Urbanist',
							fontStyle: 'normal',
							fontWeight: 600,
							fontSize: '18px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#fff',
							marginBottom: '8px',
						}}
					>
						I am a fan
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '14px',
							lineHeight: '140%',
							letterSpacing: '0.1em',
							color: '#D5D4D8',
						}}
					>
						I want to listen and support my favorite artists.
					</Typography>
				</Box>
				<Box
					key='artist'
					sx={{
						width: '179px',
						height: '100%',
						padding: '25px 20px',
						background:
							type === 'artist'
								? 'rgba(24, 26, 32, 0.05)'
								: 'rgba(255, 255, 255, 0.1)',
						borderRadius: '8px',
						border: type === 'artist' ? '2px solid #FF8200' : 'none',
						backdropFilter: 'blur(2px)',
						marginLeft: '16px',
						cursor: 'pointer',
					}}
					onClick={() => handleChange('artist')}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '42px',
							height: '42px',
							borderRadius: '50%',
							background: 'rgba(255, 255, 255, 0.14)',
							backdropFilter: 'blur(2px)',
							marginBottom: '24px',
						}}
					>
						<img src={MusicalNotes} alt='Musical Notes' />
					</Box>
					<Typography
						sx={{
							fontFamily: 'Urbanist',
							fontStyle: 'normal',
							fontWeight: 600,
							fontSize: '18px',
							lineHeight: '140%',
							letterSpacing: '0.2px',
							color: '#fff',
							marginBottom: '8px',
						}}
					>
						I am an Artist
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Work Sans',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '14px',
							lineHeight: '140%',
							letterSpacing: '0.1em',
							color: '#D5D4D8',
						}}
					>
						I want to create and release Songs with fans.
					</Typography>
				</Box>
			</Box>
			<Button
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '14px 32px 14px 62px',
					background: '#FF8200',
					// borderRadius: "30px",
					borderRadius: '6px',
					color: '#341B00',
					marginBottom: '40px',
					transition: 'all 250ms ease',
					'&:hover': {
						background: '#FF8200',
						color: '#341B00',
						opacity: '0.9',
					},
					'&:disabled': {
						background: '#FF8200',
						color: '#341B00',
						opacity: '0.5',
					},
				}}
				disabled={isNextBtnDisabled}
				onClick={() => handleNext()}
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
					Next
				</Typography>
				<img
					style={{
						width: '24px',
						height: '24px',
						marginLeft: '24px',
					}}
					src={ArrowRight}
					alt=''
				/>
			</Button>
		</Box>
	);
};
