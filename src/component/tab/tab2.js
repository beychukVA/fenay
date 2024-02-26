import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import RecipeReviewCard from '../../component/card/card';
import cardim from "../../assets/cardim.png"
import profile from '../../assets/profile.png'
import './tab2.css'
import { friend } from '../../constant/friends';
import { Paper } from '@mui/material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', m: 1, }}>
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Feed" {...a11yProps(0)} />
          <Tab label="Friends" {...a11yProps(1)} />
          <Tab label="Discover" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>

        <div className='tab2'>

        </div>
        <Paper className='profilesss'>
          <div className='crdbody'>
            <RecipeReviewCard imgee={profile} phyragraph="If you were one of the millions of people caught up in ‘Powerball fever’ yesterday in the US, you can be forgiven for wanting a little slice of the $1.6 billion jackpot, even if the existence of such a large jackpot is utter insanity." />
          </div>
          <div className='crdbody'>
            <RecipeReviewCard imgee={profile} imge={cardim} />
          </div>
          <div className='crdbody'>
            <RecipeReviewCard imgee={profile} phyragraph="If you were one of the millions of people caught up in ‘Powerball fever’ yesterday in the US, you can be forgiven for wanting a little slice of the $1.6 billion jackpot, even if the existence of such a large jackpot is utter insanity." />

          </div>

        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='tab2'>

          <Paper key={value.id} className='profilesss'>


            {friend.map((value) => {
              return (

                <div className='frndz'  >


                  <img src={profile} />
                  <h3>{value.name}</h3>
                  <p>{value.post}</p>
                </div>

              )
            })}


          </Paper>
        </div>
      </TabPanel >
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box >
  );
}
