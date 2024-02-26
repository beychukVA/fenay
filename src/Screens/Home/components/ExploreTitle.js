import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../../constant/customStyle";

const ExploreTitle = ({ className, title, subtitle, spacing }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.explorerHeadingSection}
      // style={{
      //     padding: !spacing ? 0 : "0px 40px",
      //     marginBottom: !spacing ? 15 : "25px"
      // }}
    >
      <Typography
        // fontSize={matches ? "21px" : "25px"}
        className={`${classes.explorerHeading} 
        ${classes.exploreHeadingUnderline} 
        ${className}`}
      >
        {title} {subtitle}
      </Typography>
      {/* <Divider
                    sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
                /> */}
    </Box>
  );
};

export default ExploreTitle;
