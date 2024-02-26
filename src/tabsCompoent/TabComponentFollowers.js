import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../constant/customStyle";
const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const imageStyleMobile = {
  width: 65,
  height: 65,
  borderRadius: 65
}

const imageStyle = {
  width: 120,
  height: 120,
  borderRadius: 120
}


const TabComponentFollowers = ({ Followers }) => {
  const matches = useMediaQuery('(max-width:768px)');

  const classes = useStyles();
  const navigate = useNavigate();
  const clickProfile = id => {
    navigate(`/profile?id=${id}`)
  }
  return (
    <Box className={classes.tabFeedBox}>
      <Stack direction="row" flexWrap={"wrap"} justifyContent={"center"}>
        {Followers.map((item, index) => (
          <Box
            key={index}
            onClick={() => clickProfile(item._id)}
            sx={{ width: matches ? 65 : 120 }}
            m={2}
          >
            <img alt="" src={item.profilePicture ? item.profilePicture : dummyImage}
              style={matches ? imageStyleMobile : imageStyle}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography align="center" className={classes.userName}>{item.name}</Typography>
            </Box>
          </Box>
        ))
        }
      </Stack >
    </Box >
  );
};

export default TabComponentFollowers;
