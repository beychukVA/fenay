import { makeStyles } from '@mui/styles'
import BackgroundImage from '../../assets/Marketing/home-bg.png'
import { theme } from '../../constant/customStyle'

export const useStyles = makeStyles({
    mainBg: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        "&:before": {
            content: '""',
            width: "100%",
            height: "100%",
            inset: "0",
            background: "linear-gradient(0deg, #1d1d1d 0%, rgba(29,29,29,0) 100%)",
            position: "absolute",
        },
    },
    logo: {
        width: "94px"
    },
    logoSmall: {
        width: "46px"
    },
    socialLinkContainer: {
        marginLeft: "-17px",
        marginTop: "100px"
    },
    rotate: {
        transform: 'rotate(90deg)',
        transition: 'transform 150ms ease',
        cursor: "pointer",
        textTransform: "uppercase",
        letterSpacing: 2.5,
        fontSize: "18px",
        [theme.breakpoints.down("lg")]: {
            fontSize: "13px",
        },
    },
    blurBg: {
        backgroundColor: "#80808069",
        // filter: "blur(2px)",
        borderRadius: "100px",
        padding: 1,
        width: 439,
        height: 90,
        filter: "blur(2px)"
    },
    winPrizeContainer: {
        // position: "absolute",
        // top: 6,
        // left: 6
        backgroundColor: "#80808026",
        borderRadius: "100px"
    }
})