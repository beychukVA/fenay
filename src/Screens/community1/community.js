import React from 'react';
import ResponsiveAppBar from '../../component/appbar/bar';
import cover from '../../assets/cover.png'
import profile from '../../assets/profile.png'
import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MessageIcon from '@mui/icons-material/Message';
import { FaShopify } from 'react-icons/fa'
import './community.css'

import TabPanel from '../../component/tab/tab2'
import MusicPlayerSlider from '../../component/musicplayer/player'

function Community() {
  return (
    <>
      <ResponsiveAppBar />
      <div className='comunity-section'>
        <div className="container-flud">
          <div className="profile_cover">
            <img src={cover} style={{ width: "100%" }} /></div></div>
        <div className='container'>
          <div className='main-section'>
            <div className='-combinediv'>
              <div className='friends-list'>
                <h2>Friends(69)</h2>
                <div style={{ width: "121px", display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "center", color: "#fff" }}>
                  <img style={{ width: "100%", }} src={profile} />
                  <h3>Black Glass</h3>
                  <p>1 New Post</p>
                  <img style={{ width: "100%", }} src={profile} />
                  <h3>Black Glass</h3>
                  <p>1 New Post</p>
                </div>
              </div>
              <div className="badges1">
                <Box style={{ width: "100%" }}>
                  <div style={{ width: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <MessageIcon style={{ fontSize: 50, color: "#fff", backgroundColor: "#FF1C51", borderRadius: 100, padding: 10, margin: 15, cursor: "Pointer" }} />
                    <DateRangeIcon style={{ fontSize: 50, color: "#fff", backgroundColor: "#FF1C51", borderRadius: 100, padding: 10, margin: 15, cursor: "Pointer" }} />
                    <FaShopify style={{ fontSize: 50, color: "#fff", backgroundColor: "#FF1C51", borderRadius: 100, padding: 10, margin: 15, cursor: "Pointer" }} />
                  </div>
                </Box>
              </div>
            </div>
            <div style={{ width: "100%", marginTop: "60px", }}>
              < TabPanel />
            </div>
          </div>






        </div>

      </div>


      <div className="player">
        <div className="container-flud">
          <MusicPlayerSlider />

        </div>

      </div>



    </>



  );

}

export default Community;