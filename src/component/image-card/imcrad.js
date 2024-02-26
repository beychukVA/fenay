import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import profile from '../../assets/profile.png'
import './imcard.css'
import { Box, } from "@mui/system";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCardTwo() {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <h1 className={classes.fh1}>Followers</h1>

            <CardContent>
                <Typography className='imgdiv' variant="body2" color="text.secondary">
                    <div className={classes.maindiv}>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                    </div>
                    <div className={classes.maindiv}>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                    </div>
                    <div className={classes.maindiv}>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                        <div className={classes.fimge}>
                            <img style={{ width: 49, padding: 5 }} src={profile} />
                            <span className={classes.fontsz}>Black Glass</span>
                        </div>
                    </div>

                </Typography>
            </CardContent>
            <CardActions  >

                <Box className={classes.seeAll} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"

                >
                    See all
                </Box>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                </CardContent>
            </Collapse>
        </Card>
    );
}


const useStyles = makeStyles({
    maindiv: {
        display: "flex",
        padding: " 0px 15px 0 15px",
        columnGap: 5
    },
    fimge: {
        width: "33.33%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    fh1: {
        width: "80%",
        margin: "0 auto 30px auto",
        borderBottom: "1px solid  #FF1C51",
        color: 'rgba(255, 255, 255, 0.92)'
    },
    seeAll: {
        color: "#fff",
        fontSize: "16px",
        fontFamily: 'Poppins',
        padding: "10px 0 0 0",
        margin: "auto",
    },
    fontsz: {
        fontSize: 10,
        color: 'rgb(255, 255, 255) !important'
    }
});