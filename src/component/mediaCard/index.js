import FavoriteIcon from '@mui/icons-material/Favorite';
import profile from '../../assets/profile.png';
import Group from "../../assets//Group 65.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
function Mcard({ tittle }) {
    const classes = useStyles();
    return (

        <Box className={classes.mediacard} >
            <Box className={classes.medcardheader}>
                <Box className={classes.mediaitem}>
                    <img className={classes.mediaimage} src={profile} />
                    <img className={classes.mediaimage} src={profile} />
                    <img className={classes.mediaimage} src={profile} />
                    <img className={classes.mediaimage} src={profile} />
                </Box>
                <Box className={classes.mediaicon}  >
                    <IconButton aria-label="settings">
                        <MoreVertIcon className={classes.icon} />
                    </IconButton>
                </Box>
            </Box>
            <Box className={classes.body}>
                <img className={classes.bodyimage} src={Group} />
            </Box>
            <Box className={classes.cardFooter}>
                <Box >
                    <p className={classes.iconchild}>$ 250</p>
                </Box>
                <Box className={classes.iconchild}>
                    <FavoriteIcon /><spna className={classes.spna}>22</spna>
                </Box>
            </Box>

        </Box>




    );




}
const useStyles = makeStyles({
    medcardheader: {

        display: 'flex',
        paddingTop: 5,

        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: "center"

    },
    mediaimage: {
        width: "30px",
        marginRight: 11

    },
    mediacard: {
        width: "50%",
        padding: "15px 15px 8px ",
        borderRadius: 15,

        background: "#707070"
    },
    mediaitem: {
        flex: 1,

    },
    icon: {
        color: "#F0F3F6",
        fontSize: "3.59px"
    },
    cardFooter: {
        display: "flex",
        justifyContent: 'space-between',
        paddingTop: 7,

    },
    iconchild: {
        display: "flex",
        fontSize: "14px"

    },
    spna: {
        marginLeft: 7
    },
    bodyimage: {
        width: "100%"
    },
    h1: {
        borderBottom: "1px solid"
    },

});

export default Mcard;
