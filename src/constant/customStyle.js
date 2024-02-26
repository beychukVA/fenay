import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#FF1C51',
			dark: '#ab0028',
			light: '#de6a86',
			contrastText: '#fff',
		},
		secondary: {
			main: '#d1d1d1',
			dark: '#686868',
			light: 'dad0d0',
			contrastText: '#000',
		},
	},
	typography: {
		h1: {
			fontSize: '2.1875rem',
			fontWeight: 600,
		},
		button: {
			fontFamily: ['Inter'].join(','),
		},
		fontFamily: [
			'GlacialIndifferenceRegular',
			'Urbanist',
			'Work Sans',
			'Inter',
		].join(','),
	},
});

export const useStyles = makeStyles({
	calendar: {
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '12.7949px',
		width: '499px !important',
		minWidth: '499px !important',
		height: '499px !important',
		maxHeight: '499px !important',
		'& .MuiPickersCalendarHeader-label': {
			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '21.7513px',
			lineHeight: '31px',
			color: '#FF8200',
		},
		'& .MuiYearPicker-root': {
			maxHeight: '400px !important',
		},
		'& .PrivatePickersYear-yearButton.Mui-selected, & .PrivatePickersYear-yearButton.Mui-selected:focus':
			{
				background: '#FF8200',
			},
		'& .PrivatePickersYear-yearButton': {
			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '14px',
			lineHeight: '23px',
			color: '#fff',
		},
		'& .MuiPickersCalendarHeader-switchViewIcon': {
			display: 'none',
		},
		'& .MuiPickersArrowSwitcher-button svg': {
			color: '#FF8200',
		},
		'& .MuiDayPicker-header': {
			justifyContent: 'space-between',
			padding: '0 26px',
		},
		'& .MuiDayPicker-weekDayLabel': {
			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '14px',
			lineHeight: '23px',
			color: 'rgba(255, 255, 255, 0.8)',
		},
		'& .MuiDayPicker-weekContainer': {
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '0 26px',
		},
		'& .MuiDayPicker-monthContainer .MuiDayPicker-weekContainer': {
			// marginTop: "26px",
			// marginBottom: "26px",
		},
		'& .PrivatePickersSlideTransition-root': {
			overflowX: 'visible',
		},
		'& .MuiPickersDay-root': {
			background: 'transparent',
			width: '64.81px',
			height: '61.65px',
		},
		'& .MuiPickersDay-root.Mui-selected, & .MuiPickersDay-root.Mui-selected:focus':
			{
				background: '#FF8200',
				// width: "64.81px",
				// height: "61.65px",
			},
	},
	calendarMobile: {
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '12.7949px',
		width: '345px !important',
		maxWidth: '345px !important',
		minWidth: '345px !important',
		height: '425px !important',
		maxHeight: '425px !important',
		'& .MuiPickersCalendarHeader-label': {
			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '21.7513px',
			lineHeight: '31px',
			color: '#FF8200',
		},
		'& .MuiYearPicker-root': {
			maxHeight: '300px !important',
		},
		'& .PrivatePickersYear-yearButton.Mui-selected, & .PrivatePickersYear-yearButton.Mui-selected:focus':
			{
				background: '#FF8200',
			},
		'& .PrivatePickersYear-yearButton': {
			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '14px',
			lineHeight: '23px',
			color: '#fff',
		},
		'& .MuiPickersCalendarHeader-switchViewIcon': {
			display: 'none',
		},
		'& .MuiPickersArrowSwitcher-button svg': {
			color: '#FF8200',
		},
		'& .MuiDayPicker-header': {
			justifyContent: 'space-between',
			padding: '0 5px',
		},
		'& .MuiDayPicker-weekDayLabel': {
			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '14px',
			lineHeight: '23px',
			color: 'rgba(255, 255, 255, 0.8)',
		},
		'& .MuiDayPicker-weekContainer': {
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '0 5px',
		},
		'& .MuiDayPicker-monthContainer .MuiDayPicker-weekContainer': {
			// marginTop: "26px",
			// marginBottom: "26px",
		},
		'& .PrivatePickersSlideTransition-root': {
			overflowX: 'visible',
		},
		'& .MuiPickersDay-root': {
			background: 'transparent',
			width: '30px',
			height: '30px',
		},
		'& .MuiPickersDay-root.Mui-selected, & .MuiPickersDay-root.Mui-selected:focus':
			{
				background: '#FF8200',
				// width: "64.81px",
				// height: "61.65px",
			},
	},
	appBar: {
		marginLeft: '235px',
	},
	drawer: {},
	paper: {
		overflowY: 'unset !important',
	},
	customizedButton: {
		position: 'absolute !important',
		right: '-70px !important',
		top: '-20px !important',
		color: '#fff !important',
		background: 'rgb(255 255 255 / 30%) !important',
		display: 'none !important',
	},
	indicator: {
		// background: "#FF8200 !important",
		borderBottom: '2px solid #FF8200',
	},
	tabs: {
		borderBottom: '1px solid #000000 !important',
		columnGap: '50px !important',
		width: '100%',
		marginBottom: '32px',
		'& button': {
			padding: '10px 36px',
			textAlign: 'center !important',

			'&:last-child': {
				marginRight: '0 !important',
			},
		},
	},
	tabsPanel: {
		padding: '0 !important',
		color: '#fff',
	},
	label: {
		fontSize: '18px !important',
		fontFamily: 'Urbanist !important',
		textTransform: 'capitalize !important',
		fontWeight: '700 !important',
		fontStyle: 'normal !important',
		lineHeight: '22px !important',
	},
	root: {
		backgroundColor: '#7070707 !important',
		color: '#fff !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		'&: focus': {
			border: '10px solid green !important ',
		},
	},
	icon: {
		fill: '#fff !important',
		color: '#fff',
	},
	select: {
		'& ul': {
			backgroundColor: '#1d1d1d',
		},
		'& li': {
			fontSize: 16,
			fontFamily: 'inter',
			textTransform: 'capitalize',
			color: '#fff',
			'&:hover': {
				backgroundColor: '#FF1C51',
			},
		},
		'& li:last-child': {},
		'& div': {
			fontSize: 13,
			fontFamily: 'inter',
			borderBottom: '1px solid #ccc',
			padding: '0 15px',
			'& p': {
				fontSize: 13,
				fontFamily: 'inter',
				margin: '5px 0',
			},
		},
	},
	dialog: {
		display: 'flex !important',
		justifyContent: 'center !important',
		alignItems: 'center !important',
	},
	dialogTitle: {
		textAlign: 'center !important',
	},
	dialogContent: {
		textAlign: 'center !important',
	},
	dialogAction: {
		justifyContent: 'center !important',
	},
	dilogLabel: {
		color: '#fff !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontSize: '20px !important',
		fontWeight: '600 !important',
	},
	titleIcon: {
		backgroundColor: '#F85160 !important',
		color: theme.palette.secondary.main,
		'&:hover': {
			cursor: 'default !important',
		},
		'& .MuiSvgIcon-root': {
			fontSize: '8rem !important',
		},
	},
	checkButton: {
		borderRadius: '30px !important',
		backgroundColor: '#FF1C51 !important',
		fontWeight: '700 !important',
		fontSize: '20px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		padding: '5px 50px !important',
		textTransform: 'capitalize  !important',
		'&:hover': {
			backgroundColor: '#FF1C51  !important',
		},
	},
	closeButton: {
		color: '#fff !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		textTransform: 'capitalize  !important',
		fontSize: '20px !important',
		fontWeight: '700 !important',
	},
	title: {
		fontSize: '20px !important',
		fontWeight: 'bold !important',
	},
	bidButton: {
		padding: '5px 20px !important',
		color: '#fff',
		background: '#FF1C51 !important',
		borderRadius: '26px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		textTransform: 'capitalize !important',
		fontWeight: '600 !important',
		height: '45px !important',
		width: '115px !important',
	},
	recentlyButton: {
		color: '#fff !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		textTransform: 'capitalize  !important',
		fontSize: '20px !important',
		fontWeight: '700 !important',
	},
	carts: {
		backgroundColor: 'rgb(29,29,2,0.9)',
		width: 1000,
		display: 'flex',
		height: 100,
		alignItems: 'center',
		justifyContent: 'space-between',
		color: 'red',
	},
	avtr: {
		width: '100%',
		height: '100%',
	},
	chip: {
		fontSize: 20,
	},
	titleAuthor: {
		fontSize: '20px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontWeight: '700 !important',
	},
	description: {
		fontSize: 18,
		color: '#707070',
		fontFamily: 'inter !important',
	},
	price: {
		fontSize: '16px !important',
		fontFamily: 'inter !important',
		fontWeight: '500 !important',
	},
	titleAuthor1: {
		fontSize: '16px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontWeight: '700 !important',
	},
	commentButton: {
		backgroundColor: '#FF8200 !important',
		borderRadius: '10px !important',
		textTransform: 'lowercase !important',
		transition: 'all 250ms ease',
		marginTop: '19px !important',
		padding: '10px 0 !important',
		'&:hover': {
			backgroundColor: '#FF8200  !important',
			opacity: '0.8',
		},
	},
	TfieldComent: {
		backgroundColor: '#A4A4A4',
		borderRadius: '10px',
		border: 'none !important',
	},
	postCommentButton: {
		backgroundColor: '#FF8200 !important',
		textTransform: 'capitalize !important',
		boxShadow: 'none !important',
		borderRadius: '50px !important',
		fontSize: '16px',
		width: 'unset !important',
		fontFamily: 'Work Sans !important',
		transition: 'all 250ms ease',
		color: '#000 !important',
		'&:hover': {
			backgroundColor: '#FF8200  !important',
			opacity: '0.8 !important',
		},
	},
	readMore: {
		backgroundColor: 'rgb(29 29 29 / 25%) !important',
		borderRadius: '10px !important',
		textTransform: 'lowercase !important',
		fontSize: '12px',
		'&:hover': {
			backgroundColor: 'rgb(29 29 29 / 60%)  !important',
		},
	},
	topBannerButton: {
		display: 'flex',
		justifyContent: 'flex-start',
		width: '100%',
		position: 'relative',
		top: '-37px',
		alignItems: 'center',
	},
	topBannerButtonMobile: {
		display: 'flex',
		justifyContent: 'space-around',
		width: '100%',
		position: 'relative',
		alignItems: 'center',
	},
	topButtonSection: {
		background: '#FF8200 !important',
		padding: '10px 20px !important',
		transition: 'all 250ms ease !important',
		borderRadius: '30px !important',
		border: '1px solid #FF8200 !important',
		marginRight: '18px !important',
		'&:hover': {
			background: '#FF8200 !important',
			opacity: '0.8 !important',
		},

		fontFamily: 'Work Sans !important',
		fontStyle: 'normal !important',
		fontWeight: '500 !important',
		fontSize: '16px !important',
		lineHeight: '140% !important',
		letterSpacing: '0.2px !important',
		color: '#000 !important',
		textTransform: 'none !important',
		'&:last-child': {
			marginRight: 0,
		},
		'&:disabled': {
			color: '#fff !important',
			background: 'grey !important',
		},
	},
	iconButton1: {
		width: '35px',
		height: '35px',
		borderRadius: '100%',
		backgroundColor: '#FF1C51',
		display: 'flex !important',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '20px',
		cursor: 'pointer',
	},
	editIconButton: {
		width: '42px !important',
		height: '42px !important',
		borderRadius: '50% !important',
		backgroundColor: '#FF8200 !important',
		display: 'flex !important',
		justifyContent: 'center !important',
		alignItems: 'center !important',
		transition: 'all 250ms ease !important',
	},
	socialIcons: {
		color: '#fff',
		fontSize: '16px !important',
	},
	editIcons: {
		color: '#fff',
		fontSize: '16px !important',
		cursor: 'pointer',
	},
	top: {
		margin: '-104px 112px 0 156px !important',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column !important',
		'@media (max-width: 900px)': {
			margin: '-104px auto 0 auto !important',
		},
	},
	profile: {
		position: 'relative',
	},
	avatar: {
		width: '200px',
		height: '200px',
		border: '10px solid #1D1D1D',
		borderRadius: '100%',
		objectFit: 'cover',
	},
	online: {
		position: 'absolute !important',
		backgroundColor: '#10FF90 !important',
		width: '25px !important',
		height: '25px !important',
		right: '175px',
		bottom: '30% !important',
		margin: 'auto !important',
		border: '3px solid #1d1d1d !important',
		borderRadius: '100% !important',
	},
	librayi: {
		margin: '0 -19px 0 0 !important',
		width: '20px !important',
		color: '#fff !important',
		fontSize: '25px !important',
		'&:hover': {
			color: '#FF1C51 !important',
			boxShadow: 'none',
		},
	},
	editAvatar: {
		position: 'absolute !important',
		width: '32px',
		height: '32px',
		borderRadius: '100% !important',
		backgroundColor: '#FF1C51 !important',
		bottom: 8,
		right: '0%',
		display: 'flex !important',
		justifyContent: 'center !important',
		alignItems: 'center !important',
		border: '5px solid #1D1D1D !important',
		cursor: 'pointer !important',
	},
	accessimg: {
		width: '16px',
		textAlign: 'left',
		margin: ' 7px 10px',
	},
	avatarTitle: {
		marginTop: '5px !important',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	avatarTitleMobile: {
		marginTop: '55px !important',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	name: {
		color: '#fff',
		fontSize: '24px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontWeight: '700 !important',
	},
	editIconProfile: {
		color: '#FF1C51 !important',
		fontSize: '18px !important',
	},
	hobbies: {
		display: 'flex !important',
		justifyContent: 'center !important',
		alignItems: 'center !important',
	},
	hobbiesText: {
		color: '#fff !important',
		fontSize: '14px !important',
		fontFamily: 'inter !important',
		'@media(max-width: 320px)': {
			color: '#fff !important',
			fontSize: '15px !important',
			fontFamily: ' inter !important',
		},
	},
	followerSection: {
		display: 'flex !important',
		justifyContent: 'center !important',
		alignItems: 'center !important',
		marginBottom: '32px !important',
	},
	nftCardWrapper: {
		width: '250px',
		height: '160px',
		'@media(max-width: 425px)': {
			width: '200px !important',
		},
	},
	followersnum: {
		color: '#fff !important',
		fontSize: '18px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontWeight: '600 !important',
		marginRight: '3px !important',
		'@media(max-width: 320px)': {
			fontSize: ' 10px !important',
		},
	},
	followers: {
		color: '#fff !important',
		fontSize: '20px !important',
		fontFamily: 'Urbanist !important',
		fontWeight: '600 !important',
		'@media(max-width: 320px)': {
			fontSize: ' 10px !important',
		},
	},
	followersButtonSection: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonFollow: {
		fontSize: '16px !important',
		padding: '10px 40px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		textTransform: 'none !important',
		borderRadius: '25px !important',
		background: '#FF1C51 !important',
		fontWeight: '700 !important',
		'@media(max-width: 320px)': {
			padding: '5px 85px !important',
		},
	},
	rootMedia: {
		background: 'rgb(251 247 248 / 18%)',
		border: '0px solid transparent !important',
		borderRadius: '10px !important',
		color: '#fff !important',
		fontSize: '20px !important',
		fontWeight: '600 !important',
		'&:hover': {
			'&& fieldset': {
				border: '0px solid transparent',
			},
		},
	},
	profileGrid: {
		display: 'flex !important',
		justifyContent: 'space-between !important',
		alignItems: 'center !important',
		width: '100%  !important',
		flexWrap: 'wrap',
	},
	profileGrid25: {
		width: 'calc(25% - 10px) !important',
		boxSizing: 'border-box',
		display: 'flex !important',
		flexDirection: 'column',
		backgroundColor: 'rgb(255 255 255 / 18%)',
		padding: '10px 10px',
		borderRadius: '15px',
		alignItems: 'center',
		margin: '0 0 50px !important',
	},
	topImages: {
		display: 'flex !important',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '5px',
		alignItems: 'center',
		columnGap: '5px',
	},
	imagesGrid: {
		display: 'flex',
		justrifyContent: 'space-between',
	},
	tabProfileCard: {
		backgroundColor: '#ccc',
		borderRadius: '14px  !important',
		paddingTop: '5px',
		paddingBottom: '5px',
		marginRight: '10px',
		width: '25%',
		paddingRight: '10px',
		paddingLeft: '10px',
	},
	tabProfileInnerCard: {
		width: '100% !important',
		columnGap: '10px',
		paddingRight: '10px',
		paddingLeft: '10px',
	},
	img: {
		width: '100%',
		borderRadius: '100%',
	},
	img2: {
		width: '100%',
	},

	imghead: {
		color: '#FF1C51',
		fontSize: '33px !important',
	},
	imghead2: {
		width: '80%',
	},
	imghead3: {
		width: '92%',
	},
	imgjanes: {
		width: '135px !important',
	},
	mediatype: {
		fontSize: '15px !important',
	},
	removePadding: {
		padding: '0!important',
	},
	moreVertIconSize: {
		fontSize: '16px !important',
		color: '#fff',
	},
	profileCardBottom: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
	},
	mw120: {
		minWidth: '150px !important',
		marginTop: '10px !important',
	},
	gridFollowers: {
		backgroundColor: '#7070704a',
		marginTop: '75px',
		borderRadius: '15px',
		padding: '30px 30px',
	},
	groupFollowers: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	followersProfile: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		flexDirection: 'column',
		width: '30%',
		marginBottom: '24px',
	},
	followButton: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '25px',
		width: '32%',
	},
	socialButtons: {
		fontSize: '27px !important',
		color: '#fff',
		'&:hover': {
			color: '#FF1C51',
		},
	},
	chatButton: {
		color: '#FF1C51',
		fontSize: '26px',
		marginRight: '30px',
	},
	dateButton: {
		fontSize: '26px',
		color: '#fff',
	},
	followsSection: {
		borderBottom: '2px solid #FF1C51',
		paddingBottom: '5.5px',
		marginBottom: '32px',
		display: 'flex',
	},
	titleFollower: {
		fontFamily: 'GlacialIndifferenceRegular !important',
		color: '#fff !important',
		fontSize: '20px !important',
		fontWeight: '700  !important',
		marginRight: '10px !important',
	},
	followerName: {
		fontFamily: 'inter  !important',
		color: '#fff  !important',
		fontSize: '10px  !important',
		fontWeight: '500  !important',
		marginTop: '5px !important',
	},
	seeAllSection: {
		displya: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '25px',
	},
	seeAll: {
		fontFamily: 'inter !important',
		fontSize: '16px !important',
		textTransform: 'none !important',
		color: '#FF1C51 !important',
	},
	space: {
		marginTop: '36px',
	},
	commentGrid: {
		background: '#7070704a',
		borderRadius: '15px',
	},
	paddingSpace: {
		padding: '24px 16px 16px 16px',
		width: '100%',
		background: '#2A2B2F',
		borderRadius: '8px',
	},
	userDetails: {
		marginBottom: '14px',
		display: 'flex',
	},
	userImageSpace: {
		marginRight: '12px',
		width: '48px',
	},
	userImage: {
		width: '100%',
		borderRadius: '100%',
	},
	userName: {
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontSize: '14px !important',
		fontWeight: '700 !important',
		color: '#fff',
	},
	userTime: {
		fontFamily: 'inter !important',
		fontSize: '10px !important',
		fontWeight: '500 !important',
		color: '#fff',
	},
	userTextBox: {
		marginBottom: '31px',
	},
	userText: {
		fontFamily: 'inter !important',
		fontSize: '10px !important',
		fontWeight: '400 !important',
		color: '#fff',
		lineHeight: '20px',
		textAlign: 'justify',
	},
	songSection: {
		marginTop: '19px',
		display: 'flex',
	},
	songLinkSection: {
		marginRight: 2,
		marginTop: '5px',
	},
	linkIcon: {
		color: '#FF1C51',
		fontSize: '21px !important',
	},
	songName: {
		fontFamily: 'inter !important',
		fontSize: '14px !important',
		fontWeight: '500 !important',
		color: '#fff',
	},
	songSize: {
		fontFamily: 'inter !important',
		fontSize: '10px !important',
		fontWeight: '500 !important',
		color: 'rgb(255 255 255 / 50%) !important',
	},
	commentButtonBox: {
		width: '100%',
		marginBottom: '24px',
	},
	followerCommentBox: {
		marginBottom: '14px',
		paddingBottom: '24px',
		display: 'flex',
		borderBottom: '1px solid #605F5F',
		'&:last-child': {
			borderBottom: '0px solid #605F5F',
		},
	},
	spaceTop: {
		marginTop: '3px !important',
	},
	spaceRight: {
		marginRight: '10px !important',
	},
	followerComment: {
		fontFamily: 'Work Sans !important',
		fontStyle: 'normal !important',
		fontWeight: '400 !important',
		fontSize: '14px !important',
		lineHeight: '16px !important',
		color: '#fff !important',
		opacity: '0.8 !important',
		textAlign: 'justify !important',
	},
	lastSection: {
		width: '100%',
		position: 'absolute !important',
		bottom: '200px  !important',
		left: '0 !important',
		zIndex: '99 !important',
	},
	circle: {
		width: '69px',
		height: '69px',
		backgroundColor: 'red !important',
	},
	quickLinks1: {
		padding: '13px 18px !important',
		fontSize: '26px !important',
		color: '#fff !important',
		backgroundColor: '#FF1C51 !important',
		borderRadius: '100% !important',

		margin: '0 0 30px !important',
		cursor: 'pointer !important',
		width: '60px !important',
		height: '60px !important',
	},
	quickLinks: {
		fontSize: '33px !important',
		color: '#fff !important',
		backgroundColor: '#FF1C51 !important',
		borderRadius: '100% !important',
		padding: '6px 16px !important',
		margin: '0 0 30px !important',
		cursor: 'pointer !important',
		width: '60px !important',
		height: '60px !important',
		'&:last-child': {
			margin: '0 0 0px !important',
		},
	},
	createContainer: {
		marginTop: '3em !important',
		marginBottom: '3em !important',
		'@media(max-width: 425px)': {
			marginTop: '1em !important',
		},
	},
	homeContainer: {
		borderRadius: '15px',
		padding: '30px 50px',

		'@media(max-width: 600px)': {
			padding: '24px 16px',
		},
	},
	sidebarOpen: {
		marginLeft: '235px !important',
	},
	exploreContainer: {
		marginTop: '54px',
		marginLeft: '20px',
	},
	settingTitleBox: {
		backgroundColor: '#7070704a',
		borderRadius: '15px',
		marginBottom: '25px !important',
	},
	exploreSpaceSelect: {
		padding: '0px 40px',
		marginBottom: '63px',
	},
	removeMarginTop: {
		marginTop: '0px !important',
	},
	online1: {
		position: 'absolute !important',
		backgroundColor: '#10FF90 !important',
		width: '13px !important',
		height: '13px !important',
		right: '-2px !important',
		top: '35px !important',
		bottom: '0px !important',
		margin: 'auto !important',
		border: '3px solid #676767 !important',
		borderRadius: '100% !important',
	},
	explorerHeadingSection: {
		marginBottom: '12px !important',
	},

	explorerHeading: {
		fontFamily: 'Urbanist !important',
		fontStyle: 'normal !important',
		fontWeight: '700 !important',
		fontSize: '20px !important',
		lineHeight: '24px !important',
		color: '#fff !important',
	},
	explorerHeadingMedia: {
		fontFamily: 'Urbanist !important',
		fontStyle: 'normal !important',
		fontWeight: '700 !important',
		fontSize: '36px !important',
		lineHeight: '125% !important',
		letterSpacing: '0.2px',
		color: '#fff !important',
	},
	exploreHeadingUnderline: {
		// display: "inline",
		// borderBottom: "2px solid #FF1C51",
		// paddingBottom: 8,
	},
	carouselPagination: {
		'& .rec .rec-dot': {
			background: '#A4A4A4',
			boxShadow: 'none',
		},
		'& .rec-dot_active': {
			background: '#FF8200 !important',
		},
	},
	carouselTopArtist: {
		'&.rec.rec-carousel-wrapper': {
			position: 'relative !important',
		},
		'& .rec.rec-carousel': {
			height: '208px !important',
			'& #btn-carousel': {
				display: 'none',
			},
		},
		'& .rec.rec-slider-container': {
			margin: '0',
		},
		'& .rec.rec-slider': {
			margin: '0',
			padding: '21px 0',
			height: '208px !important',
		},
		'& .rec.rec-swipable': {
			maxHeight: '183px',
			minHeight: '183px',
		},
		'& .rec .rec-carousel-item': {
			maxWidth: '183px',
			maxHeight: '183px',
			minWidth: '183px',
			minHeight: '183px',
		},
		'& .rec .rec-carousel-item .rec-item-wrapper': {
			width: '183px !important',
			height: '183px !important',
		},

		'& .rec .rec-dot': {
			background: '#A4A4A4',
			boxShadow: 'none',
		},
		'& .rec-dot_active': {
			background: '#FF8200 !important',
		},
	},
	carouselTopArtistExplore: {
		'&.rec.rec-carousel-wrapper': {
			position: 'relative !important',
		},
		'& .rec.rec-carousel': {
			height: '260px !important',
			'& #btn-carousel': {
				display: 'none',
			},
		},
		'& .rec.rec-slider-container': {
			margin: '0',
		},
		'& .rec.rec-slider': {
			margin: '0',
			padding: '21px 0',
			height: '260px !important',
		},
		'& .rec.rec-swipable': {
			maxHeight: '240px',
			minHeight: '240px',
		},
		'& .rec .rec-carousel-item': {
			maxWidth: '183px',
			maxHeight: '240px',
			minWidth: '183px',
			minHeight: '240px',
		},
		'& .rec .rec-carousel-item .rec-item-wrapper': {
			width: '240px !important',
			height: '240px !important',
		},

		'& .rec .rec-dot': {
			background: '#A4A4A4',
			boxShadow: 'none',
		},
		'& .rec-dot_active': {
			background: '#FF8200 !important',
		},
	},
	carouselMedia: {
		'&.rec.rec-carousel-wrapper': {
			position: 'relative !important',
		},
		'& .rec.rec-carousel': {
			height: '435px !important',
		},
		'& .rec.rec-slider-container': {
			margin: '0',
		},
		'& .rec.rec-slider': {
			margin: '0',
		},
		'& .rec.rec-swipable': {},
		'& .rec .rec-carousel-item': {
			maxWidth: '365px',
			maxHeight: '423px',
			minWidth: '365px',
			minHeight: '423px',
			marginRight: '16px',
		},
		'& .rec .rec-carousel-item .rec-item-wrapper': {
			width: '100% !important',
			height: '435px !important',
		},
	},
	carouselHomeMedia: {
		'&.rec.rec-carousel-wrapper': {
			position: 'relative !important',
		},
		'& .rec.rec-carousel': {
			height: '374px !important',
		},
		'& .rec.rec-slider-container': {
			margin: '0',
		},
		'& .rec.rec-slider': {
			margin: '0',
		},
		'& .rec.rec-swipable': {},
		'& .rec .rec-carousel-item': {
			maxWidth: '323px',
			minWidth: '323px',
			maxHeight: '374px',
			minHeight: '374px',
			marginRight: '16px',
		},
		'& .rec .rec-carousel-item .rec-item-wrapper': {
			width: '100% !important',
			height: '374px !important',
		},
	},
	carouselCalendarEvents: {
		'&.rec.rec-carousel-wrapper': {
			position: 'relative !important',
		},
		'& .rec.rec-carousel': {
			height: '280px !important',
		},
		'& .rec.rec-slider-container': {
			margin: '0',
		},
		'& .rec.rec-slider': {
			margin: '0',
		},
		'& .rec.rec-swipable': {},
		'& .rec .rec-carousel-item': {
			maxWidth: '265px',
			minWidth: '265px',
			maxHeight: '280px',
			minHeight: '280px',
			marginRight: '22px',
		},
		'& .rec .rec-carousel-item .rec-item-wrapper': {
			width: '100% !important',
			height: '280px !important',
		},
	},
	carouselUpcomingEvents: {
		'&.rec.rec-carousel-wrapper': {
			position: 'relative !important',
		},
		'& .rec.rec-carousel': {
			height: '260px !important',
		},
		'& .rec.rec-slider-container': {
			margin: '0',
		},
		'& .rec.rec-slider': {
			margin: '0',
		},
		'& .rec.rec-swipable': {},
		'& .rec .rec-carousel-item': {
			maxWidth: '461px',
			minWidth: '461px',
			maxHeight: '260px',
			minHeight: '260px',
			marginRight: '16px',
		},
		'& .rec .rec-carousel-item .rec-item-wrapper': {
			width: '100% !important',
			height: '260px !important',
		},
	},
	explorerBottom: {
		marginBottom: '44px !important',
		padding: '0px 10px !important',
	},
	explorerNewRelease: {
		boxSizing: 'border-box',
		display: 'flex !important',
		flexDirection: 'column',
		backgroundColor: 'rgb(255 255 255 / 18%)',
		padding: '10px 10px',
		borderRadius: '15px',
		alignItems: 'center',
		margin: '0 0 50px !important',
	},
	dividerClass: {
		marginBottom: '68px',
	},
	playListSection: {
		padding: '0px 116px',
	},
	playListBox: {
		display: 'flex',
	},
	playListFlex: {
		display: 'flex',
		flexDirection: 'column',
		marginRight: '18.3px !important',
		'&:last-child': {
			marginRight: '0 !important',
		},
	},
	playlistImageBox: {
		width: '124px !important',
	},
	playListTitle: {
		fontSize: '14px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		color: '#fff !important',
		fontWeight: '700 !important',
	},
	playListDetails: {
		fontSize: '12px !important',
		fontFamily: 'inter !important',
		color: '#fff !important',
	},
	playListButtonSubscribe: {
		borderRadius: '52px !important',
		color: '#fff !important',
		fontSize: '10px !important',
		padding: '0px 15px !important',
		textTransform: 'none !important',
		marginBottom: '17px !important',
		fontWeight: '500 !important',
		width: '32px !important',
		height: '60px !important',
		margin: '-50px 0 0 -76px !important',
	},
	playListButton: {
		width: '32px !important',
		height: '60px !important',
		borderRadius: '52px !important',
		color: '#fff !important',
		fontSize: '14px !important',
		padding: '0px 15px !important',
		textTransform: 'none !important',
		marginBottom: '17px !important',
		fontWeight: '500 !important',
		margin: '-8px 0 0 -72px !important',
	},
	rightFlex: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	playListUser: {
		display: 'flex',
		alignItems: 'center',
	},
	playListUserName: {
		fontSize: '12px !important',
		fontFamily: 'inter !important',
		fontWeight: '500 !important',
		color: '#fff !important',
	},
	tabFeedBox: {
		backgroundColor: '#7070704a',
		padding: '2em 2em',
		borderRadius: '14px',
		'@media(max-width: 425px)': {
			padding: '1em 1em !important',
		},
	},
	feedbackBox: {
		padding: '15px 25px',
		backgroundColor: 'rgba(29,29,29, 0.35)',
		borderRadius: '15px !important',
		marginBottom: '62px',
	},
	feedbackUserBox: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '22px',
	},
	feedbackUserImage: {
		width: '62px',
		// marginRight: '44px !important',
	},
	feedbackUserName: {
		fontFamily: ' GlacialIndifferenceRegular !important',
		fontSize: '20px !important',
		fontWeight: '700 !important',
	},
	feedbackUserTime: {
		fontFamily: 'inter !important',
		fontSize: '14px !important',
	},
	feedbackUserPost: {
		fontSize: '14px !important',
		fontFamily: 'inter !important',
		marginBottom: '-44px !important',
	},
	feedbackSpaceBottom: {
		width: '100%',
		marginTop: '19px',
	},
	mediafriendsimg: {
		margin: '-1px 0 0 0',
		width: '20px',
	},
	mediafriendsimg2: {},
	feedbackSocial: {
		display: 'flex !important',
		margin: '16px 0 0 0',
	},
	feedbackSocialDetails: {
		marginRight: '55px !important',
		display: 'flex !important',
		alignItems: 'center !important',
	},
	feedbackIcon: {
		color: '#FF1C51',
		marginRight: '10px',
		fontSize: '26px !important',
	},
	imgex: {
		width: '90% !important',
	},
	feedbackText: {
		fontSize: '20px !important',
		fontFamily: 'inter',
	},
	drawerPeper: {
		position: 'absolute !important',
		top: '0',
		left: '0',
		backgroundImage: 'none !important',
		// background:
		// "linear-gradient(180deg, #151518 0%, rgba(45, 43, 56, 0) 100%) !important",
		color: 'white !important',
		width: '235px',
		height: '100%',
		padding: '32px 30px',
		zIndex: '998 !important',
		// [theme.breakpoints.up("md")]: {
		//   marginTop: "119px",
		// },
	},
	blur: {
		filter: 'blur(8px)',
	},
	socialFriendButton: {
		background: 'rgb(251 247 248 / 18%) !important',
		fontFamily: 'inter !important',
		fontSize: '16px !important',
		textTransform: 'none !important',
		boxShadow: 'none !important',
		margin: '5px !important',
	},
	socialFriendDropdown: {
		outline: '0 !important',
		padding: '7.5px ​14px !important',
		background: 'rgb(251 247 248 / 18%)',
		borderRadius: '5px !important',
		'& fieldset': {
			border: 'none !important',
			outline: 'none !important',
		},
		'&:hover': {
			border: '0px solid transparent !important',
			outline: '0 !important',
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: '1px solid #484850 !important',
			borderRadius: '5px 5px 0 0 !important',
		},
		connector: {
			borderLeft: '1px red solid',
		},
	},
	selectMedia: {
		width: '265px !important',
		padding: '55px 30px !important',
		borderRadius: '27px !important',
		backgroundColor: '#FF1C51 !important',
		border: '4.5px solid #FF1C51 !important',
		cursor: 'pointer',
		'&:hover': {
			borderColor: ' #FF1C51 !important',
			backgroundColor: 'transparent !important',
		},
	},
	selectText: {
		fontFamily: 'inter !important',
		fontSize: '2em !important',
		fontWeight: '500 !important',
		color: '#fff !important',
		textAlign: 'center !important',
	},
	selectEvent: {
		width: '334px !important',
		padding: '55px 30px !important',
		borderRadius: '27px !important',
		backgroundColor: '#transparent !important',
		border: '4.5px solid #FF1C51 !important',
		cursor: 'pointer',
		'&:hover': {
			borderColor: 'transparent',
			backgroundColor: '#FF1C51 !important',
		},
	},
	selectSecondText: {
		fontFamily: 'inter !important',
		fontSize: '1.5em !important',
		color: '#fff !important',
		textAlign: 'center !important',
	},
	selectType: {
		border: '1.5px solid #FF1C51 !important',
		cursor: 'pointer',
		padding: '1em 1em !important',
		borderRadius: '27px !important',
		'&:hover': {
			borderColor: 'transparent',
			backgroundColor: '#FF1C51 !important',
		},
		'@media(max-width: 425px)': {
			width: '100%',
			padding: '1em 5em !important',
		},
	},
	selectTypeActive: {
		border: '1.5px solid transparent !important',
		cursor: 'pointer',
		padding: '1em 1em !important',
		borderRadius: '30px !important',
		backgroundColor: '#FF1C51 !important',
		'@media(max-width: 425px)': {
			width: '100%',
			padding: '1em 5em !important',
		},
	},
	createPageNextButton: {
		backgroundColor: '#FF1C51 !important',
		padding: '10px 60px !important',
		borderRadius: '30px !important',
		fontFamily: 'poppins !important',
		textTransform: 'capitalize !important',
		fontSize: '18px !important',
		fontWeight: '500 !important',
		boxShadow: 'none !important',
		'&:hover': {
			backgroundColor: '#FF1C51 !important',
			boxShadow: 'none !important',
		},
		'&:disabled': {
			backgroundColor: 'rgba(255, 255, 255, 0.12) !important',
			boxShadow: 'none !important',
		},
		'@media(max-width: 425px)': {
			width: '100% !important',
		},
	},
	subHeadingStepersSection: {
		marginBottom: '24px',
	},
	subHeadingStepers: {
		fontFamily: 'Urbanist !important',
		fontStyle: 'normal',
		fontWeight: '700 !important',
		fontSize: '24px !important',
		lineHeight: '140%',
		color: '#fff !important',
	},
	gridStepersCreateSpacing: {
		marginBottom: '73.5px !important',
		'@media(max-width: 425px)': {
			marginBottom: '1em !important',
		},
	},
	gridStepersSpacingCreateBox: {
		padding: '0px 150px !important',
		marginBottom: '5em !important',
		'@media(max-width: 425px)': {
			padding: '0px !important',
		},
	},
	gridStepersSpacing: {},
	addNewFieldSection: {
		display: 'flex !important',
	},
	addFieldIconsButton: {
		'&:hover': {
			backgroundColor: 'transparent !important',
			boxShadow: 'none',
		},
	},
	addFieldIcons: {
		color: '#FF1C51',
	},

	boxUpload: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	uploadText: {
		fontSize: '20px !important',
		fontFamily: 'inter !important',
		color: '#fff !important',
	},
	uploadDetails: {
		fontSize: '14px !important',
		fontFamily: 'inter !important',
		color: 'rgba(251, 247, 248, 0.50) !important',
	},

	switch_track: {
		backgroundColor: 'transparent !important',
	},
	switch_base: {
		color: '#fff !important',
		'&.Mui-disabled': {
			color: '#e886a9 !important',
		},
		'&.Mui-checked': {
			color: '#FF1C51 !important',
		},
		'&.Mui-checked + .MuiSwitch-track': {
			backgroundColor: '#4CAF50 !important',
		},
	},
	switch_primary: {
		'&.Mui-checked': {
			color: '#FF1C51 !important',
		},
		'&.Mui-checked + .MuiSwitch-track': {
			backgroundColor: 'transparent !important',
		},
	},
	expand: {
		color: 'red !important',
		position: 'relative !important',
		left: '98% !important',
		fontSize: '22px !important',
		marginTop: '10px !important',
		border: '1px solid red ',
		borderRadius: '25px !important',
		marginBottom: '13px !important',
		top: '-13px',
		transition: 'ease 1s !important',
	},
	expand2: {
		color: 'red !important',
		transform: 'rotate(177deg)',
		position: 'relative !important',
		left: '98% !important',
		fontSize: '22px !important',
		marginTop: '10px !important',
		border: '1px solid red ',
		borderRadius: '25px !important',
		marginBottom: '13px !important',
		top: '-13px',
		transition: 'ease 1s !important',
	},
	sli: {
		width: '100% !important',
	},
	matchesSli: {
		width: '100vw !important',
	},
	sli2: {
		width: '95% !important',
		display: 'flex !important',
		justifyContent: 'center !important',
		alignItems: 'center !important',
	},
	mucicontainer: {
		position: 'fixed !important',
		bottom: '-2px',
		right: '50%',
		// height: "80px !important",
		background: '#000000 !important',
		border: '0',
		borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
		boxShadow: '0px 2px 12px 4px rgba(255, 255, 255, 0.2)',
		color: 'white',
		padding: '20px 48px',
		// marginBottom: "12px !important",
		zIndex: '9999 !important',
		transform: 'translate(50%)',
		// "@media(max-width: 768px)": {
		//   height: "110px !important",
		//   width: "100% !important",
		// },
	},
	play_arrow: {
		background: '#FF1C51 !important',
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		color: 'white',
		fontSize: '40px !important',
		marginTop: '5px',
	},
	funtionsButton: {
		display: 'flex',
		// justifyContent: "center",
		alignItems: 'center',
		height: '42px',
		justifyContent: 'space-between',
		padding: '0 1em !important',
		// width: '400px' ,
		// marginLeft: '60px'
		// marginLeft: "120px !important",
		'@media(max-width: 768px)': {
			justifyContent: 'flex-start !important',
			gap: '4em',
		},
	},
	slidersbox: {
		width: '26%',
		margin: '0px 0 -6px 0px',
	},

	iconsbox: {
		display: 'flex',
		justifyContent: 'flex-star',
		alignItems: 'center',
		height: '73px',
		gap: '1em',
		// marginLeft: "8px",
		// marginTop: "18px!important",
		'@media(max-width: 768px)': {
			height: '42px !important',
			justifyContent: 'end !important',
		},
	},
	cutomSlider: {
		height: '1px !important',
		color: '#FF1C51 !important',
		'& .MuiSlider-thumb': {
			width: '20px',
			height: '20px',
		},
	},
	volumeCutomSlider: {
		// height: "2px !important",
		color: '#FF8200 !important',
		// padding: "0 !important",

		'& .MuiSlider-thumb': {
			width: '10px',
			height: '10px',
			background: '#FF8200 !important',
		},
		'& .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb:hover': {
			boxShadow: '0px 0px 0px 8px rgba(255, 130, 0, 0.16)',
		},
		'& .MuiSlider-thumb:after': {
			width: '0',
			height: '0',
		},
	},
	cutomSlider2: {
		marginTop: '-42px !important',
		marginLeft: '9px !important',
		height: '1px !important',
		color: '#FF1C51 !important',
		'& .MuiSlider-thumb': {
			width: '10px',
			height: '10px',
		},
	},

	plapuse: {
		cursor: 'pointer',
		width: '30px',
		height: '30px',
		borderRadius: '100%',
		backgroundColor: '#FF1C51',
		// display: "flex",
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0px -15px',
		display: 'none !important',
	},
	plapuse2: {
		cursor: 'pointer',
		width: '30px',
		height: '30px',
		borderRadius: '100%',
		backgroundColor: '#FF1C51',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '-36px 0 0 0',
	},

	pauseButton: {
		backgroundColor: '#FF1C51',
		borderRadius: '100px',
		fontSize: '43px !important',
		cursor: 'pointer',
	},
	mdarrow_parent: {
		padding: '0px !important',
	},
	mdarrow: {
		color: '#FFF !important',
		fontSize: '20px !important',
		cursor: 'pointer',
	},
	songDetailBox: {
		// marginTop: "25px",
		// "@media(max-width: 768px)": {
		//   gap: "1em !important",
		// },
	},
	songDetail: {
		fontSize: '14px !important',
		fontFamily: 'inter !important',
		fontWeight: 500,
	},
	duration: {
		fontSize: '0.8em !important',
		fontWeight: 'bold',
	},
	songIcon: {
		color: '#fff !important',
		fontSize: '1.4em !important',
		'&:hover': {
			color: '#FF1C51 !important',
			boxShadow: 'none',
		},
	},

	iconButton: {
		'&:hover': {
			backgroundColor: 'transparent !important',
			boxShadow: 'none',
		},
	},
	img1: {
		width: '70% !important',
	},
	generalHeading: {
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontSize: '25px !important',
		fontWeight: '700 !important',
		marginRight: '10px',
		color: '#fff',
		borderBottom: '1px solid #ff1c51',
	},
	link: {
		color: '#fff',
		fontFamily: 'inter !important',
		fontSize: '20px !important',
	},
	termsContainer: {
		margin: '35px 0 55px',
	},
	termsDescription: {
		padding: '39px 35px  39px 35px !important',
		backgroundColor: 'rgba(255,255,255,0.25) !important',
		borderRadius: '15px !important',
	},
	termsTitle: {
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontSize: '25px !important',
		fontWeight: '700 !important',
		color: '#fff !important',
		marginBottom: '58px !important',
	},
	termsDetails: {
		color: '#fff !important',
		fontFamily: 'inter !important',
		fontSize: '14px !important',
		marginBottom: '33px !important',
	},
	termsPoints: {
		color: '#fff !important',
		fontFamily: 'inter !important',
		fontSize: '14px !important',
		marginBottom: '0.5em !important',
	},
	imgBox: {
		width: '64px',
		height: '64px',
		objectFit: 'cover !important',
		marginRight: '15px !important',
	},
	chatImg: {
		width: '100%',
		borderRadius: '100% !important',
		border: '1.5px solid #fff !important',
	},
	chatFlex: {
		display: 'flex !important',
		flexDirection: 'column !important',
		alignItems: 'center',
		width: 'calc(100% - 79px)!important',
	},
	chatUserSection: {
		display: 'flex',
		marginBottom: '8px !important',
		alignItems: 'center',
		padding: '8px 15px !important',
		borderRadius: '12px !important',
		'&:hover': {
			background: 'rgb(255 255 255 / 12%) !important',
		},
	},
	chatUserName: {
		fontSize: '20px !important',
		color: '#fff !important',
		fontWeight: '600 !important',
		fontFamily: 'inter !important',
	},
	leftChat: {
		backgroundColor: '#434343 !important',
		padding: '24px 8px !important',
		cursor: 'pointer',
		overflow: 'auto !important',
		borderTopLeftRadius: '20px  !important',
		borderBottomLeftRadius: '20px !important',
	},
	paper1: {
		borderRadius: '18px !important',
		padding: '0 !important',
		overflowY: 'unset !important',
	},
	removePaddingChat: {
		padding: '0 !important',
	},
	chatUserTime: {
		color: 'rgba(255,255,255,0.50) !important',
		fontSize: '14px !important',
		fontFamily: 'inter !important',
	},
	chatUserChat: {
		fontSize: '12px !important',
		color: 'rgba(255,255,255,0.50) !important',
		whiteSpace: 'nowrap !important',
		width: '100%',
		overflow: 'hidden !important',
		textOverflow: 'ellipsis !important',
		fontFamily: 'inter !important',
	},
	parentChat: {
		marginBottom: '8px !important',
	},
	rightChat: {
		backgroundColor: '#1D1D1D !important',
		padding: '24px 20px !important',
		cursor: 'pointer',
		height: '80vh !important',
		overflow: 'auto !important',
		flexWrap: 'wrap !important',
		alignItems: 'flex-end !important',
		display: 'flex !important',
		borderTopRightRadius: '20px  !important',
		borderBottomRightRadius: '20px  !important',
	},
	senderBox: {
		display: 'flex',
		padding: '1em 0px',
	},
	senderBoxImage: {
		width: '52px',
		height: '52px',
		margin: '0 15px 0 0',
	},
	senderImage: {
		borderRadius: '100%',
		width: '100%',
	},
	senderName: {
		fontSize: '16px !important',
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontWeight: '600 !important',
		color: '#fff !important',
		marginBottom: '10px !important',
	},
	senderMessage: {
		borderRadius: '0 18px 18px 18px',
		border: '1px solid #FF1C51',
		padding: '15px',
		color: '#fff',
		fontFamily: 'inter !important',
		fontSize: '14px !important',
		width: '95%',
		maxWidth: 'max-content',
		marginRight: '10px !important',
	},
	senderMessageTime: {
		color: 'rgba(255,255,255,0.50)',
		fontFamily: 'inter !important',
		fontSize: '12px !important',
	},
	messageBox: {
		width: 'calc(100% - 67px)',
	},
	reciverBox: {
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '1em 0px',
	},
	reciverBoxImage: {
		width: '52px',
		height: '52px',
		margin: '0 15px 0 0',
	},
	reciverImage: {
		borderRadius: '100%',
		width: '100%',
	},
	reciverName: {
		fontSize: '16px !important',
		fontFamily: 'inter !important',
		fontWeight: '600 !important',
		color: '#fff !important',
		marginBottom: '10px !important',
	},
	reciverMessage: {
		borderRadius: '18px 0px 18px 18px',
		padding: '15px',
		color: '#fff',
		fontFamily: 'inter !important',
		fontSize: '14px !important',
		width: '95%',
		maxWidth: 'max-content',
		backgroundColor: 'rgba(255,255,255,0.25)',
	},
	reciverMessageTime: {
		color: 'rgba(255,255,255,0.50)',
		fontFamily: 'inter !important',
		fontSize: '12px !important',
	},
	userChatResponse: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '32px !important',
	},
	messageSendTextFieldBox: {
		display: 'flex !important',
		alignItems: 'flex-start',
		width: '100%',
		justifyContent: 'space-between',
	},
	messageTextFieldBox: {
		width: '90%',
	},
	messageSendBox: {
		marginLeft: '5px',
		width: '52px',
		height: '52px',
		borderRadius: '100%',
		border: '1px solid #FF1C51',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'rgba(255,255,255,0.12)',
	},
	menu: {
		'& .MuiPaper-root': {
			backgroundColor: '#2A2B2F !important',
			color: '#fff',
			fontFamily: 'Inter',
			top: '72px !important',
			width: '270px',
			padding: '20px 20px 24px 20px !important',
			boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1) !important',
			borderRadius: '4px !important',
		},
		'& .MuiList-root': { padding: '0' },
		'& .MuiMenuItem-root': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			padding: '0',
			height: '34px',
			transition: 'all 250ms ease',
			'&:hover': {
				background: 'transparent',
			},
			'&:hover p': {
				color: '#FF8200',
			},
			'&:hover div': {
				background: '#FF8200',
			},
		},
		'& .MuiMenuItem-root.item-create-wallet': {
			background: '#F6F6F6',
			borderRadius: '4px',
			padding: '10px 0',
		},
		'& .MuiMenuItem-root.item-create-wallet:hover': {
			background: '#FF8200',
		},
		'& .MuiMenuItem-root:hover': {
			background: 'rgba(0, 0, 0, 0.25)',
		},
		'&.Mui-selected': {
			backgroundColor: 'turquoise',
			color: 'white',
			fontWeight: '600',
		},
	},
	menuSoundPlayer: {
		'& .MuiPaper-root': {
			backgroundColor: '#2A2B2F !important',
			color: '#fff',
			fontFamily: 'Inter',
			bottom: '96px !important',
			right: '0 !important',
			top: 'auto !important',
			// left: "auto !important",
			width: '142px',
			padding: '24px 20px 24px 16px !important',
			boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1) !important',
			borderRadius: '4px !important',
		},
		'& .MuiList-root': { padding: '0' },
		'& .MuiMenuItem-root': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			padding: '0',
			transition: 'all 250ms ease',
			'&:not(:first-of-type)': {
				marginTop: '18px',
			},
			'&:hover': {
				background: 'transparent',
			},
			'&:hover p': {
				fontFamily: 'Urbanist',
				fontStyle: 'normal',
				fontWeight: '600',
				fontSize: '15px',
				lineHeight: '86%',
				color: '#FF8200',
			},
			'&:hover div': {
				background: '#FF8200',
			},
		},
		'& .MuiMenuItem-root.item-create-wallet': {
			background: '#F6F6F6',
			borderRadius: '4px',
			padding: '10px 0',
		},
		'& .MuiMenuItem-root.item-create-wallet:hover': {
			background: '#FF8200',
		},
		'& .MuiMenuItem-root:hover': {
			background: 'rgba(0, 0, 0, 0.25)',
		},
		'&.Mui-selected': {
			backgroundColor: 'turquoise',
			color: 'white',
			fontWeight: '600',
		},
	},
	settingTitle: {
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontSize: '25px !important',
		fontWeight: '700 !important',
		marginRight: '10px !important',
		color: '#fff !important',
	},
	boxBorder: {
		borderBottom: '2px solid #FF1C51',
		paddingBottom: '5.5px',
		marginBottom: '13px',
	},
	paymentBox: {
		background: 'rgba(255, 255, 255, 0.18)',
		borderRadius: '15px',
		padding: '33px 39px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center !important',
		alignItems: 'center !important',
	},
	paypalBox: {
		width: '61px !important',
		height: '75px !important',
		marginBottom: '49px !important',
	},
	blockuserButton: {
		backgroundColor: '#FF1C51 !important',
		borderRadius: '30px !important',
		fontFamily: 'inter !important',
		textTransform: 'capitalize !important',
		fontSize: '15px !important',
		fontWeight: '500 !important',
		boxShadow: 'none !important',
		width: '136px !important',
		color: '#FFF !important',
		border: '1px solid #ff1c51 !important',
		'&:hover': {
			backgroundColor: 'transparent !important',
			boxShadow: 'none !important',
			border: '1px solid #fff !important',
			color: 'red !important',
		},
	},
	connect: {
		backgroundColor: '#FF1C51 !important',
		borderRadius: '30px !important',
		fontFamily: 'inter !important',
		textTransform: 'capitalize !important',
		fontSize: '15px !important',
		fontWeight: '500 !important',
		boxShadow: 'none !important',
		width: '136px !important',
		border: '1px solid #ff1c51 !important',
		'&:hover': {
			backgroundColor: 'transparent !important',
			boxShadow: 'none !important',
			border: '1px solid #fff !important',
		},
	},
	connected: {
		backgroundColor: 'transparent !important',
		padding: '8.5px 0px !important',
		borderRadius: '30px !important',
		fontFamily: 'inter !important',
		textTransform: 'capitalize !important',
		fontSize: '15px !important',
		fontWeight: '500 !important',
		boxShadow: 'none !important',
		border: '1px solid #fff !important',
		width: '136px !important',
		'&:hover': {
			backgroundColor: '#FF1C51 !important',
			boxShadow: 'none !important',
			border: '1px solid #ff1c51 !important',
		},
	},
	subHeadingSetting: {
		fontFamily: 'GlacialIndifferenceRegular !important',
		fontSize: '25px !important',
		fontWeight: '700 !important',
		color: '#fff !important',
	},
	boxFormBorder: {
		paddingBottom: '5.5px',
		marginBottom: '13px',
	},
	labelSetting: {
		fontFamily: 'inter !important',
		fontSize: '18px !important',
		color: '#fff',
	},
	iconButton2: {
		background: '#FF1C51 !important',
	},
	removeThumb: {
		color: 'rgba(255,255,255,0.60) !important',
		border: '1px solid transparent',
		'& .MuiSlider-thumb': {
			width: 0,
			height: 0,
		},
	},
	inputUnderline: {
		borderBottom: '2px solid green !important',
	},
	steperInputLabel: {
		fontSize: '20px !important',
		fontFamily: 'inter',
	},
	connectedSocials: {
		fontWeight: '600 !important',
		fontSize: '20px !important',
		fontFamily: 'inter !important',
		color: '#fff !important',
	},
	settingLabel: {
		fontSize: '20px !important',
		fontFamily: 'inter !important',
		color: '#fff !important',
	},
	input: {
		paddingLeft: '10px',
	},
	advanceSettingBtn: {
		fontFamily: 'inter !important',
		fontSize: '18px !important',
		background: '#FF1C51 !important',
		color: 'white !important',
		padding: '15px 35px !important',
		borderRadius: '35px !important',
		textTransform: 'none !important',
		fontWeight: '600 !important',

		'&:hover': {
			background: '#dc2751 !important',
		},
	},
	Select: {
		background: 'transparent',
		border: '0px solid red !important',
		borderRadius: '10px !important',
		color: '#fff !important',
		fontSize: '20px !important',
		fontWeight: '500 !important',
		padding: '0px 5px',
		fontFamily: 'inter',
		'&:hover': {
			'&& fieldset': {
				borderBottom: '1px solid rgb(233 20 20 / 42%)',
				padding: '0px 5px',
			},
			'MuiSelect-select': {
				height: 'auto',
				minHeight: '1.4375em',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				borderBottom: '1px solid',
			},
		},
	},
	slect: {
		background: 'transparent',
		border: '0px solid transparent !important',
		borderRadius: '10px !important',
		color: '#fff !important',
		fontSize: '17px !important',
		fontWeight: '500 !important',
		padding: '0px 5px',
		fontFamily: 'poppins !important',
		'&:hover': {
			'&& fieldset': {
				border: 'none !important',
				padding: '0px 5px',
			},
		},
	},

	steperSelect: {
		'&:after': {
			display: 'none !important',
		},
		'&:before': {
			display: 'none !important',
		},
	},

	mainHero: {
		backgroundSize: 'cover !important',
		position: 'relative',
		[theme.breakpoints.between('md', 'lg')]: {
			padding: '170px 0 25px',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			padding: '150px 0 25px',
		},
		'&:before': {
			content: '""',
			width: '100%',
			height: '100%',
			inset: '0',
			background: 'linear-gradient(0deg, #1d1d1d 0%, rgba(29,29,29,0) 100%)',
			position: 'absolute',
		},
	},
	HeroVideo: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		inset: '0',
		zIndex: '-1',
	},
	mainHeroContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	bannerH1: {
		fontSize: '71px!important',
		fontFamily: 'Poppins!important',
		fontWeight: '600!important',
		color: '#fff',
		margin: '0 0 2px!important',
		[theme.breakpoints.between('md', 'lg')]: {
			fontSize: '45px!important',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			fontSize: '32px!important',
		},
	},
	bannerH1_Top: {
		fontSize: '71px !important',
		fontFamily: 'Poppins!important',
		fontWeight: '600!important',
		textAlign: 'center',
		color: '#fff',
		lineHeight: 24,
		zIndex: 999,
		[theme.breakpoints.between('md', 'lg')]: {
			fontSize: '45px!important',
		},

		'@media  (min-width:1024px)': {
			fontSize: '52px !important',
		},
		'@media  (max-width:768px)': {
			fontSize: '40px !important',
		},
		'@media  (max-width:500px)': {
			fontSize: '30px !important',
		},
		'@media  (max-width:390px)': {
			fontSize: '20px !important',
		},
		'@media  (max-width:375px)': {
			fontSize: '20px !important',
		},
		'@media  (max-width:320px)': {
			fontSize: '20px !important',
		},
	},
	bannerp: {
		fontSize: '27px!important',
		fontFamily: 'Glacial Indifference!important',
		color: '#fff',
		margin: '0 0 90px!important',
		[theme.breakpoints.between('md', 'lg')]: {
			width: '60%',
			margin: '0 0 50px!important',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			margin: '0 0 40px!important',
		},
	},
	bannerButton: {
		fontSize: '18px!important',
		padding: '10px 40px !important',
		margin: '32px 0 41px !important',
		fontFamily: 'Glacial Indifference!important',
		textTransform: 'none!important',
		borderRadius: '25px!important',
		background: '#FF1C51!important',
		transition: '0.3s all ease!important',
		'&:hover': {
			background: '#fff!important',
			color: '#0C0C0C!important',
			transform: 'scale(1.1)',
		},
	},
	bannerLink: {
		width: '25px',
		height: '54px',
		border: '1px solid #fff',
		borderRadius: '17px',
		display: 'flex',
		justifyContent: 'center',
	},
	bannerMouse: {
		width: '100%',
	},
	homeLogo: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '0 0',
		zIndex: 999,
	},
	homeLogoImg: {
		width: '250px',
		transition: '0.3s all ease',
		marginTop: '22px',
		'&:hover': {
			transform: 'scale(1.1)',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			width: '180px',
		},
	},
	homeLogoImg1: {
		width: '250px',
		transition: '0.3s all ease',
		'&:hover': {
			transform: 'scale(1.1)',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			width: '200px',
		},
	},
	virtual_reality: {
		color: '#AABBFF',
	},
	vr_span: {
		textDecoration: 'line-through !important',
		textDecorationColor: '#AABBFF !important',
		FontWeight: 'bold',
	},
	homeLogoP: {
		fontFamily: 'Glacial Indifference!important',
		fontSize: '20px!important',
		margin: '15px 0 0!important',
		color: '#fff',
	},
	finey: {
		width: '100%',
		padding: '100px 0',

		background: '#565656',
		[theme.breakpoints.between('xs', 'md')]: {
			padding: '50px 0',
		},
	},
	finey2: {
		background: '#FF1C51',
	},
	fineyContainer: {
		display: 'flex!important',
		flexWrap: 'wrap',
		justifyContent: 'space-between ',
		alignItems: 'center',
	},
	fineyContainer2: {
		[theme.breakpoints.between('xs', 'md')]: {
			flexDirection: 'column-reverse',
		},
	},
	fineyLeft: {
		width: 'calc(50% - 70px)',
		[theme.breakpoints.between('md', 'lg')]: {
			width: 'calc(50% - 25px)',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			width: '100%',
		},
	},
	fineyHr: {
		width: '70%',
		height: '2px',
		background: '#FF1C51',
	},
	fineyHr2: {
		background: '#1D1D1D',
	},
	fineyH3: {
		fontSize: '40px!important',
		fontWeight: '600!important',
		color: '#fff',
		margin: '30px 0!important',
		fontFamily: 'Poppins!important',
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: '30px!important',
			margin: '30px 0 15px!important',
		},
	},
	fineyP: {
		fontSize: '16px!important',
		fontFamily: 'Glacial Indifference!important',
		color: '#fff',
		margin: '0 0 25px!important',
	},
	fineyButton: {
		fontSize: '18px!important',
		padding: '10px 40px!important',
		fontFamily: 'Glacial Indifference!important',
		textTransform: 'none!important',
		borderRadius: '25px!important',
		background: '#FF1C51!important',
		transition: '0.3s all ease!important',
		'&:hover': {
			background: '#fff!important',
			color: '#0C0C0C!important',
			transform: 'scale(1.1)',
		},
	},
	fineyButton2: {
		background: '#0C0C0C!important',
	},
	fineyRight: {
		width: '50%',
		[theme.breakpoints.between('xs', 'md')]: {
			width: '100%',
			margin: '0 0 50px',
		},
	},
	fineyImg: {
		width: '100%',
		float: 'left',
		transition: '0.3s all ease',
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},
	homeSlider: {
		width: '100%',
		display: 'inline-block',
		padding: '100px 0',
		background: '#1d1d1d',
		[theme.breakpoints.between('xs', 'md')]: {
			padding: '50px 0',
		},
	},
	homeSliderH3: {
		width: '25%',
		fontSize: '20px!important',
		margin: '0 0 25px!important',
		padding: '0 0 2px',
		fontWeight: '600!important',
		fontFamily: 'Poppins!important',
		borderBottom: '2px solid #FF1C51',
		color: '#fff',
	},
	homeBox: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: '12px',
	},
	homeSliderImg: {
		width: '200px !important',
		padding: '10px !important',
	},
	homeSliderTxt: {
		width: '35%',
		[theme.breakpoints.between('xs', 'sm')]: {
			width: '100%',
		},
	},
	homeSliderTxtt: {
		width: '35%',
		[theme.breakpoints.between('xs', 'sm')]: {
			width: '100%',
		},
	},
	homeSliderH5: {
		fontSize: '16px!important',

		fontWeight: '500!important',
		fontFamily: 'Poppins!important',
		color: '#fff',
	},
	fairpay: {
		fontSize: '16px!important',
		margin: '0 0 5px!important',
		fontWeight: '500!important',
		fontFamily: 'Poppins!important',
		color: '#fff !important',
		backgroundColor: 'red !important',
	},
	homeSliderP: {
		fontSize: '14px!important',
		fontWeight: '200!important',
		fontFamily: 'Poppins!important',
		color: '#fff',
	},
	homeSliderP1: {
		fontSize: '14px!important',
		fontWeight: '200!important',
		fontFamily: 'Poppins!important',
		color: '#fff',
		marginLeft: '14px',
	},
	homeStudio: {
		width: '100%',
		float: 'left',
		height: '675px',

		background: 'fixed',
		backgroundSize: 'cover !important',
		[theme.breakpoints.between('md', 'lg')]: {
			height: '500px',
		},
	},
	homeProducts: {
		width: '100%',
		float: 'left',
		padding: '100px 0',
		background: '#1d1d1d',
		[theme.breakpoints.between('sm', 'lg')]: {
			padding: '70px 0',
		},
		[theme.breakpoints.between('xs', 'sm')]: {
			padding: '50px 0',
		},
	},
	productContainer: {
		display: 'flex!important',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	productH3: {
		width: '100%',
		fontSize: '20px!important',
		margin: '0 0 50px!important',
		fontWeight: '600!important',
		fontFamily: 'Poppins!important',
		color: '#fff',
		position: 'relative',
		'&::before': {
			content: '""',
			position: 'absolute',
			width: '25%',
			height: '2px',
			background: '#FF1C51',
			bottom: '-5px',
		},
		[theme.breakpoints.between('xs', 'sm')]: {
			margin: '0 0 30px!important',
			'&::before': {
				width: '50%',
			},
		},
	},
	productBox: {
		width: 'calc(33.33% - 20px)',
		padding: '65px 30px 50px',
		display: 'flex',
		flexDirection: 'column',
		background: '#565656',
		boxSizing: 'border-box',
		borderRadius: '10px',
		transition: '0.3s all ease',
		'&:hover': {
			transform: 'scale(1.03)',
			background: '#ff1c51',
		},
		[theme.breakpoints.between('md', 'lg')]: {
			width: 'calc(33.33% - 10px)',
			padding: '40px 20px',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			width: '100%',
			padding: '40px 20px',
			margin: '0 0 30px',
			'&:last-child': {
				margin: '0',
			},
		},
	},
	productH5: {
		fontSize: '52px!important',
		color: '#fff',
		fontFamily: 'Glacial Indifference!important',
		margin: '0 0 30px!important',
		textAlign: 'center',
		[theme.breakpoints.between('xs', 'sm')]: {
			fontWeight: '700 !important',
			fontSize: '50px !important',
		},
		[theme.breakpoints.between('xs', 'sm')]: {
			fontWeight: '700 !important',
			fontSize: '30px !important',
		},
	},
	productImgBox: {
		display: 'flex',
		justifyContent: 'center',
		height: '200px',
		margin: '0 0 35px',
		overflow: 'hidden',
	},
	productImg: {
		width: '100%',
		maxWidth: 'max-content',
	},
	productP: {
		fontSize: '18px!important',
		color: '#fff',
		fontFamily: 'Glacial Indifference!important',
		margin: '0 0 5px!important',
		[theme.breakpoints.down('md')]: {
			textAlign: 'center',
			fontWeight: '700 !important',
			fontSize: '26px !important',
		},
		[theme.breakpoints.between('xs', 'sm')]: {
			fontWeight: '700 !important',
			fontSize: '20px !important',
		},
	},
	newsLetter: {
		width: '100%',
		float: 'left',
		padding: '0 24px 50px',
		background: '#1d1d1d',
		[theme.breakpoints.between('xs', 'sm')]: {
			padding: '0 15px 30px',
		},
	},
	newsLetterContainer: {
		padding: '30px',
		background: '#565656',
		borderRadius: '20px',
		display: 'flex!important',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	newsLetterText: {
		width: 'calc(29% - 40px)',
		fontSize: '22px!important',
		fontFamily: 'Glacial Indifference!important',
		color: '#fff',
		[theme.breakpoints.between('md', 'lg')]: {
			width: 'calc(40% - 25px)',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			width: '100%',
			fontSize: '20px!important',
			margin: '0 0 30px!important',
		},
	},
	newsLetterForm: {
		width: '71%',
		display: 'flex!important',
		alignItems: 'center',
		[theme.breakpoints.between('md', 'lg')]: {
			width: '60%',
		},
		[theme.breakpoints.between('xs', 'md')]: {
			width: '100%',
		},
		[theme.breakpoints.between('xs', 'sm')]: {
			flexWrap: 'wrap',
		},
	},
	newsLetterInput: {
		width: '100%',
		[theme.breakpoints.between('xs', 'sm')]: {
			margin: '0 0 15px!important',
		},
	},
	newsLetterButton: {
		fontSize: '16px!important',
		padding: '10px 40px!important',
		margin: '0 0 0 15px!important',
		fontFamily: 'Glacial Indifference!important',
		textTransform: 'none!important',
		borderRadius: '25px!important',
		background: '#FF1C51!important',
		[theme.breakpoints.between('xs', 'sm')]: {
			width: '100%',
			margin: '0!important',
		},
		'&:hover': {
			background: '#fff!important',
			color: '#000!important',
		},
	},
	multilineColor: {
		color: '#fff !important',
		padding: '12.5px 40px !important',
		fontFamily: 'poppins !important',
		[theme.breakpoints.between('xs', 'sm')]: {
			fontSize: '12px!important',
			padding: '12.5px 20px !important',
		},
	},
	productBoxtypo: {
		marginTop: '30px !important',
	},

	homeSlidercontent: {
		margin: '6px 94px 9px 10px !important',
		'@media  (min-width:1024px)': {
			margin: '6px 35px 9px 10px !important',
		},
		'@media  (max-width:768px)': {
			textAlign: 'left',
			margin: '6px -3px 8px 9px !important',
		},
		'@media  (max-width:475px)': {
			textAlign: 'center',
			margin: '0 !important',
		},
	},
	mainb: {
		display: 'flex !important',
		'@media  (max-width:1024px)': {
			flexDirection: 'column',
		},
	},
	min: {
		'@media  (max-width:768px)': {
			alignItems: 'center',
		},
		'@media  (max-width:475px)': {
			flexDirection: 'column',
		},
	},
});
