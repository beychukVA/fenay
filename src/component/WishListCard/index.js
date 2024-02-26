import React from "react";
import { Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { useStyles } from "../../constant/customStyle";
import imageAuthor from "../../assets/Rectangle12.png";

const CustomWishListCard = ({ author, description, image }) => {
  const classes = useStyles();
  return (
    <Box
      sx={{ backgroundColor: "#707070", borderRadius: 3, padding: "10px 0px" }}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        sx={{ padding: "0px 10px" }}
      >
        <Typography className={classes.titleAuthor1}>{author}</Typography>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontSize: 14,
            whiteSpace: "nowrap",
            marginBottom: 1,
            fontFamily: "poppins",
            width: 120,
            color: "rgb(255 255 255 / 50%)",
          }}
        >
          {description} asdasdads
        </Typography>
      </Box>
      <Box style={{borderRadius: 3, width: "80%", height: "200px", backgroundImage: `url(${image})`, backgroundPosition:"center center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></Box>
      {/* <img src={} alt="" width="100%" height="200px" /> */}
    </Box>
  );
};

export default CustomWishListCard;
