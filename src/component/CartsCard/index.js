import React from "react";
import { Box, Typography, IconButton, InputAdornment } from "@mui/material";
import imageAuthor from "../../assets/author.png";
import { useStyles } from "../../constant/customStyle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CustomCartsCard = ({
  author,
  isEvent,
  description,
  image,
  price,
  deleteCart,
}) => {
  const classes = useStyles();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{ marginBottom: 1 }}
    >
      <Box display={"flex"} justifyContent={"flex-start"}>
        <Box
          sx={{
            width: "80px",
            height: "80px",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            marginRight: 2,
          }}
        ></Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          flexDirection={"column"}
        >
          {!isEvent && (
            <Typography className={classes.titleAuthor}>Event Pass</Typography>
          )}
          <Typography className={classes.titleAuthor}>{author}</Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
        <Typography className={classes.price}>$ {price}</Typography>
        <IconButton
          onClick={() => deleteCart()}
          color="primary"
          aria-label="delete"
          component="span"
        >
          <DeleteOutlineIcon sx={{ color: "#FF1C51" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CustomCartsCard;
