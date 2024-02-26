import React, { useState } from "react";
import { Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { useStyles } from "../../constant/customStyle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { CustomTextField } from "../../component/Textfield";
import { CssButton } from "../../component/Button";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const CustomBiddingCard = ({ author, description, image }) => {
  const classes = useStyles();
  const [number, setNumber] = useState(0);

  const handleOnChange = (event) => {
    setNumber(event.target.value);
  };

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{ width: "100%" }}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        sx={{ width: "50%", marginRight: 2 }}
      >
        <Box sx={{ marginRight: 3.5 }}>
          <img src={image} alt={author} />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          flexDirection={"column"}
        >
          <Typography className={classes.titleAuthor}>{author}</Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        sx={{ width: "30%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <IconButton
          onClick={handleDecrease}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Box>
          <CustomTextField
            type="number"
            id="outlined-basic"
            variant="outlined"
            size="small"
            onChange={handleOnChange}
            value={number}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              style: {
                color: "#fff",
                fontSize: 16,
                fontFamily: "Poppins",
                borderRadius: "26px",
                padding: "10px 5px",
                border: "2px solid #FF1C51",
              },
            }}
          />
        </Box>
        <IconButton
          onClick={handleIncrease}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <AddCircleOutlineIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <Box
        sx={{ width: "20%" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CssButton
          variant="contained"
          size="small"
          className={classes.bidButton}
        >
          Bid Now
        </CssButton>
      </Box>
    </Box>
  );
};

export default CustomBiddingCard;
