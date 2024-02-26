import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slide from "../../component/slider/slider";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import profile from '../../assets/profile.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';



import { makeStyles } from '@mui/styles';


import FavoriteIcon from '@mui/icons-material/Favorite';

import { CustomStandardTextField } from '../Textfield';

import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './tab.css'
import Mcard from '../mediaCard';
import { borderRadius, padding } from '@mui/system';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div color='#fff'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
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

export default function BasicTabs() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleButton = () => {
  }

  return (
    <Box sx={{ width: '100%', }}>
      <Box sx={{

        width: " 80%",
        margin: "auto",
        paddingTop: 0,
        paddingBottom: "6px",
        position: "absolute",
        top: "-90px",
        left: "50px",
        fontFamily: "poppins"
      }}

      >
        <Tabs className={classes.tabe} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className={classes.tabs} label="About" {...a11yProps(0)} />
          <Tab className={classes.tabs} label="Media" {...a11yProps(1)} />
          <Tab className={classes.tabs} label="Edit Profile" {...a11yProps(2)} style={{ opacity: 0 }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            flexGrow: 1,

            fontFamily: "poppins"
          }}
        >
          <Paper

            sx={{
              fontFamily: "poppins",




              backgroundColor: 'rgba(112,112,112,0.8)',
              color: "#FFF",
              justifyContent: "center",
              borderRadius: 5,
              paddingBottom: 14

            }}


            elevation={3}>
            <div className="about-bio">
              <div style={{ display: "flex" }}> <h3>Bio 1 </h3><EditIcon style={{ position: 'relative', right: "56%", top: 6, color: "#FF1C51", fontSize: 15 }} /></div>
              <p>  {Bio}</p>
            </div>
            <div className="about-exp">
              <div style={{ display: "flex" }}><h3>Experience</h3><EditIcon style={{ position: 'relative', right: "45%", top: 6, color: "#FF1C51", fontSize: 15 }} /></div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="about-educa">
              <div style={{ display: "flex" }}> <h3>Education</h3><EditIcon style={{ position: 'relative', right: "46%", top: 6, color: "#FF1C51", fontSize: 15 }} /></div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="about-contact">
              <div style={{ display: "flex" }}>  <h3>Contact</h3><EditIcon style={{ position: 'relative', right: "49%", top: 6, color: "#FF1C51", fontSize: 15 }} /></div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.. </p>
            </div>
            <div className="about-comming-event">
              <div style={{ display: "flex" }}>   <h3>Upcoming events</h3><EditIcon style={{ position: 'relative', right: "35%", top: 6, color: "#FF1C51", fontSize: 15 }} /></div>
              <Slide />
            </div>
          </Paper>
        </Box>
      </TabPanel>
      {/* <TabPanel value={value} index={1}> */}
      {/* <Box
          sx={{
            flexGrow: 1,

            fontFamily: "poppins"
          }}
        >
          <Paper

            sx={{
              fontFamily: "poppins",




              backgroundColor: 'rgba(112,112,112,0.8)',
              color: "#FFF",
              justifyContent: "center",
              borderRadius: 5,
              paddingBottom: 14

            }}


            elevation={3}>

            <Box className={classes.mainRow}>
              <h1 className={classes.h1}>Jane's Music"</h1>
              <Box className={classes.mediaCol}>
                < Mcard tittle={"Jane's Music"} />
                < Mcard title={""} />
              </Box>
              <Box className={classes.btnContainer} >
                <Button variant="contained" className={classes.readMore} >Read more</Button>
              </Box>

            </Box>
            <Box className={classes.mainRow}>
              <h1 className={classes.h1}>Pictures</h1>
              <Box className={classes.mediaCol}>
                < Mcard tittle={"Jane's Music"} />
                < Mcard title={""} />
              </Box>
              <Box className={classes.btnContainer} >
                <Button variant="contained" className={classes.readMore} >Read more</Button>
              </Box>

            </Box>
            <Box className={classes.mainRow}>
              <h1 className={classes.h1}>Documents</h1>
              <Box className={classes.mediaCol}>
                < Mcard tittle={"Jane's Music"} />
                < Mcard title={""} />
              </Box>
              <Box className={classes.btnContainer} >
                <Button variant="contained" className={classes.readMore} >Read more</Button>
              </Box>

            </Box>
          </Paper>
        </Box> */}





      {/* </TabPanel > */}
      {/* <TabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1, }}>
          <Paper


            sx={{


              m: 0,

              paddingLeft: 5,
              paddingTop: 5,
              paddingRight: 5,
              backgroundColor: 'rgba(112,112,112,0.8)',
              color: "#FFF",
              justifyContent: "center",
              borderRadius: 5,

            }}


            elevation={3}>

            <Box>
              <div className='mediapro'

              >
                <img src={profile} />
                <p>Edit Profile Image</p>
              </div>
              <Box>
                <CustomStandardTextField id="standard-helperText"
                  label="Display Name"
                  placeholder="Enter your display name"

                  variant="standard"
                  name={'name'}
                  fullWidth />
              </Box>
              <div className='filed'>
                <CustomStandardTextField id="standard-helperText"
                  id="standard-helperText"
                  label="Personal site or portfolio"
                  placeholder="http://"


                  className='textfield-custom'
                  variant="standard"
                  name={'name'}
                  fullWidth />



              </div>
              <div className='filed'>
                <CustomStandardTextField
                  id="standard-helperText"
                  label="Custome URL"
                  placeholder="http://"

                  className='textfield-custom'
                  variant="standard"
                  fullWidth
                />

              </div>
              <div className='filed'>
                <CustomStandardTextField
                  id="standard-helperText"
                  label="Email"
                  placeholder="Your email for marketplace notifications "
                  className='textfield-custom'
                  variant="standard"
                  fullWidth

                />



              </div>
              <div className='filed'>
                <CustomStandardTextField
                  id="standard-helperText"
                  label="BIo"
                  placeholder='Tell about yourself in a few words'
                  className='textfield-custom'
                  variant="standard"
                  fullWidth

                />



              </div>
              <div className='filed'>
                <CustomStandardTextField
                  id="standard-helperText"
                  label="Experience"
                  placeholder='share your experience'
                  className='textfield-custom'
                  variant="standard"
                  fullWidth

                />



              </div>
              <Box sx={{ marginTop: '10px' }}>
                <Typography sx={{ fontSize: '20px', fontFamily: 'poppins' }} >Social Media Links</Typography>
              </Box>
              <div className='filed'>
                <CustomStandardTextField
                  id="standard-helperText"
                  placeholder='share your experience'
                  variant="standard"
                  fullWidth
                  sx={{ fontFamily: 'poopins' }}
                />
              </div>
              <div className='filed'>
                <CustomStandardTextField
                  id="standard-helperText"
                  placeholder='Twitter Account Address'
                  className='textfield-custom'
                  variant="standard"
                  fullWidth
                />
              </div>
              <div className='filed'>
                <CustomStandardTextField
                  id="standard-helperText"
                  placeholder='Instagram Address'
                  className='textfield-custom'
                  variant="standard"
                  fullWidth

                />



              </div>

              <center>
                <Button className='update-prbtn' variant="contained" href="#contained-buttons" >
                  Update Profile
                </Button>
              </center>



            </Box>






          </Paper>
        </Box>
      </TabPanel> */}
    </Box >
  );
}

const useStyles = makeStyles({
  mediaCol: {
    display: "flex",
    columnGap: 30,

  },
  h1: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "poppins",
    borderBottom: "2px solid  #ff1c51",
    width: "45%",
    paddingBottom: 5,
    marginBottom: 35,

  },
  mainRow: {
    padding: "40px 40px  20px",
  },
  btnContainer: {
    textAlign: "center",
    marginTop: 40,

  },
  button: {
    backgroundColor: "#ff1c51",
    color: "#ffff",
    fontFamily: "poppins",
    fontSize: 20,
    fontWeight: 600,
    padding: "10px 31px 10px 31px",
    borderRadius: 31,
    border: "none"
  },
  // tabe: {
  // width: "100%",
  // borderBottom: "1px solid rgb(255 28 81 / 17%)",
  //   display: 'flex !important',
  //   padding: '0 0 0 27px !important',
  //   justifyContent: 'space-between !important',
  //   borderBottom: '1px solid rgb(255 28 81 / 17 %) !important',
  // },
  tabs: {
    fontFamily: "poppins",
    fontSize: "20px",
    color: "#ffff"

  },
  readMore: {
    backgroundColor: '#ff1c51 !important',
    borderRadius: '50px !important',
    padding: '10px 30px !important',
    boxShadow: 'none !important',
    fontSize: '20px !important',
    fontWeight: '600 !important',
    '&:hover': {
      backgroundColor: '#ff1c51  !important',
    },
  },

});