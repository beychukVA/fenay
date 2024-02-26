import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import { MdArrowLeft, MdArrowRight, MdOutlineRepeat, MdOutlineMenu } from "react-icons/md";
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';

import { ImShuffle } from "react-icons/im";
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import './player.css'
const WallPaper = styled('div')({

});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 10,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', backgroundColor: "rgb(50 47 47 / 40 %)!important", }}>
      <Widget>

        <Typography style={{ fontSize: 16, fontWeight: "600", fontFamily: "Poppins", color: "#FFFf" }}>
          Song Title
        </Typography>
        <Typography style={{ fontSize: 16, fontFamily: "Poppins", color: "#FFFf" }} >
          Artist
        </Typography>




        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <Box sx={{ ml: 1.5, minWidth: 0 }}>


            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 1,
                width: "100%"
              }}
            >
              <IconButton aria-label="previous song">
                <MdArrowLeft style={{ fontSize: "56px", color: "#FF1C51" }} />
              </IconButton>
              <IconButton

                aria-label={paused ? 'play' : 'pause'}
                onClick={() => setPaused(!paused)}
              >
                {paused ? (
                  <PlayArrowRounded
                    sx={{ fontSize: '3rem', backgroundColor: "#FF1C51", color: "#ffffff", borderRadius: "100px" }}

                  />
                ) : (
                  <PauseRounded sx={{ fontSize: '3rem', backgroundColor: "#FF1C51", color: "#ffffff", borderRadius: "100px" }} htmlColor={mainIconColor} />
                )}
              </IconButton>
              <IconButton aria-label="next song">
                <MdArrowRight style={{ fontSize: "56px", color: "#FF1C51" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box style={{
          backgrounColor: "yellow",
          display: "flex"
        }}>
          <TinyText color="#ffffff" >{formatDuration(position)}</TinyText>  <TinyText color="#ffffff" >/{formatDuration(duration - position)}</TinyText>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                    }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />

          <VolumeDownRounded style={{ fontSize: "32px", color: "#FFff", marginLeft: 10 }}  >
            <Slider aria-label="Volume" value={value} onChange={handleChange} orientation="vertical" />
          </VolumeDownRounded>
          <MdOutlineRepeat style={{ fontSize: "32px", color: "#FFff", marginLeft: 10 }} />
          <ImShuffle style={{ fontSize: "32px", color: "#FFff", marginLeft: 10 }} />
          <MdOutlineMenu style={{ fontSize: "32px", color: "#FFff", marginLeft: 10 }} />

        </Box>






      </Widget>
      <WallPaper />
    </Box>
  );
}
