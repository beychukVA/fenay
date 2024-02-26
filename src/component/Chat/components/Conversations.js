import {
    Box, Typography, useMediaQuery
} from "@mui/material";
import moment from 'moment';
import React from "react";
import { useStyles } from "../../../constant/customStyle";



const dummyImage =
    "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";


const Conversations = ({ data, getMessages }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:768px)');

    return (
        <Box
            sx={{
                display: "flex", flexDirection: matches ? "rows" : "column",
                overflowX: matches ? "scroll" : "auto",
                width: matches ? window.innerWidth - 80 : "100%"
            }}
        >
            {data && data.length > 0 && data.map((item, index) => (
                <Box
                    key={index}
                    className={classes.chatUserSection}
                    sx={{ flexDirection: !matches ? "rows" : "column", display: matches ? "block" : "flex" }}
                    onClick={() => getMessages(item._id, item.members)}
                >
                    <Box
                        style={{
                            background: `url(${item.user_data.profilePicture
                                ? item.user_data.profilePicture
                                : dummyImage
                                })`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "100%",
                            width: "64px",
                            height: "64px",
                        }}
                        className={classes.imgBox}
                    ></Box>
                    <Box className={classes.chatFlex} width={matches && "auto !important"} sx={{ alignItems: matches ? "center" : "flex-start" }}>
                        <Box className={classes.parentChat}>
                            <Typography className={classes.chatUserName} sx={{ fontSize: matches ? "11px !important" : "20px" }}>
                                {item.user_data.name}
                            </Typography>
                            <Typography className={classes.chatUserTime} sx={{ fontSize: matches ? "9px !important" : "20px" }}>
                                {moment(item.updatedAt).fromNow()}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Conversations;