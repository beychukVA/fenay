import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { SignupStepsEnum } from './lib/SignupStepsEnum';
import { signupComponentsFactory } from './SignupFactory';
import ArrowRightOrange from '../../../assets/ArrowRightOrange.svg';

export const CreateAccount = () => {
	const navigate = useNavigate();
	const [currStepIndex, setCurrStepIndex] = useState(0);
	const [step, setStep] = useState(SignupStepsEnum.ACCOUNT_TYPE);
	const [data, setData] = useState({
		accountType: '',
		email: '',
		password: '',
		token: '',
		uid: '',
	});

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
			}}
		>
			<Box
				key='dots'
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{step !== SignupStepsEnum.ACCOUNT_COMPLETE &&
					Object.values(SignupStepsEnum).map((v, index) => {
						const isActive = step === v;
						if (isActive && currStepIndex !== index) setCurrStepIndex(index);
						const isPrev = index < currStepIndex;
						const activeColor = isActive ? '#000' : isPrev ? '#341B00' : '#fff';
						const activeBgColor = isActive
							? '#fff'
							: isPrev
							? '#FF8200'
							: '#000';
						const completeBgColor = index <= currStepIndex ? '#FF8200' : '#fff';
						// const completeColor = currIndex < index ? "FF8200" : activeColor;
						if (v === SignupStepsEnum.ACCOUNT_COMPLETE) return null;
						return (
							<Box
								key={`dot-${index}`}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									// marginBottom: "57px",
									marginBottom: '27px',
								}}
							>
								{index > 0 && (
									<Box
										key={`dot-line-${index}`}
										sx={{
											bgcolor: completeBgColor,
											width: '36px',
											height: '1px',
											margin: '0 9px',
										}}
									></Box>
								)}
								<Box
									key={`dot-item-${index}`}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										color: activeColor,
										background: activeBgColor,
										width: 24,
										height: 24,
										borderRadius: '50%',
										border: 1,
									}}
								>
									<Typography
										key={`dot-item-value-${index + 1}`}
										sx={{
											fontFamily: 'Inter',
											fontStyle: 'normal',
											fontWeight: 600,
											fontSize: '12px',
											lineHeight: '10px',
											color: activeColor,
										}}
									>
										{index + 1}
									</Typography>
								</Box>
							</Box>
						);
					})}
			</Box>
			<Box key='content'>
				{signupComponentsFactory.getComponent({
					step,
					data,
					setData,
					setStep,
				})}
			</Box>
			{step === SignupStepsEnum.ACCOUNT_INFORMATION && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '100%',
							marginBottom: '26px',
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
							Have an account?
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-start',
								marginLeft: '3px',
								cursor: 'pointer',
							}}
							onClick={() => navigate('/login')}
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
								Login
							</Typography>
							<img
								style={{ width: '24px', height: '24px', marginLeft: '8px' }}
								src={ArrowRightOrange}
								alt=''
							/>
						</Box>
					</Box>
					{/* <Box>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "130%",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              © 2022 Finay. All Rights Reserved.
            </Typography>
          </Box> */}
				</Box>
			)}
		</Box>
	);
};
