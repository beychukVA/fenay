import CloseIcon from '@mui/icons-material/Close';
import {
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogContent,
	IconButton,
	useMediaQuery,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import { useStyles } from '../../constant/customStyle';
import ExploreTitle from '../../Screens/Home/components/ExploreTitle';
import getCroppedImg from './crop';

export default function CropModal({
	cropModalStatus,
	setcropModalStatus,
	image,
	onCropFile,
	mode,
	inputCoverRef,
}) {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:768px)');

	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [croppedImage, setCroppedImage] = useState(null);
	const [profilePictureUpload, setprofilePictureUpload] = useState(false);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const showCroppedImage = useCallback(async () => {
		try {
			setprofilePictureUpload(true);
			const croppedImage = await getCroppedImg(image, croppedAreaPixels);
			setCroppedImage(croppedImage);
			onCropFile(croppedImage, setprofilePictureUpload);
		} catch (e) {
			console.error(e);
		}
	});

	return (
		<Dialog
			classes={{ paper: classes.paper }}
			open={cropModalStatus}
			onClose={() => {
				inputCoverRef.current.value = '';
				setcropModalStatus(false);
			}}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fullWidth
			PaperProps={{
				style: {
					borderRadius: '24px',
					backgroundColor: '#434343',
					maxWidth: 950,
				},
			}}
		>
			<DialogContent
				sx={{
					padding: 4,
					borderRadius: '24px',
					border: '3px solid #434343',
					height: '350px',
				}}
			>
				<Box
					sx={{
						color: 'white',
						fontFamily: 'Poppins',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<ExploreTitle
						title={`${mode === 'cover' ? 'Cover' : 'Profile'} Image Resizing`}
					/>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexDirection: matches ? 'column-reverse' : 'row',
						justifyContent: matches ? 'center' : 'space-between',
						alignItems: 'center',
					}}
				>
					<Box>
						<Button
							variant='contained'
							onClick={showCroppedImage}
							className={classes.topButtonSection}
							sx={{ margin: '40px', width: '300px' }}
						>
							Upload
						</Button>
					</Box>

					<Box sx={{ height: '200px', width: '50%', position: 'relative' }}>
						{profilePictureUpload ? (
							<CircularProgress
								sx={{ color: '#FF1C51', margin: '30px' }}
							></CircularProgress>
						) : (
							<Cropper
								image={image}
								crop={crop}
								zoom={zoom}
								aspect={mode === 'cover' ? 2 : 4 / 4}
								onCropChange={setCrop}
								onCropComplete={onCropComplete}
								onZoomChange={setZoom}
								cropShape={mode === 'cover' ? 'rectangle' : 'round'}
								showGrid={false}
							/>
						)}
					</Box>
				</Box>
			</DialogContent>
			<IconButton
				onClick={() => {
					setcropModalStatus(false);
				}}
				className={classes.customizedButton}
			>
				<CloseIcon fontSize={'large'} />
			</IconButton>
		</Dialog>
	);
}
