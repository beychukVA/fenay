import React from "react";
import { Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { useStyles } from "../../constant/customStyle";

const CustomSubscriberCard = ({ name, image }) => {
  const classes = useStyles();

  return (
    <Box
      style={{ paddingTop: "1em" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        style={{
          width: "80px",
          height: "80px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          borderRadius: "100%",
        }}
      ></Box>
      <Typography
        sx={{
          fontSize: "1em",
          fontWeight: 600,
          fontFamily: "poppins",
          color: "#fff",
          marginTop: "8px",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default CustomSubscriberCard;
