

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import {

    Box, Button, Divider, Fade, IconButton, Menu, MenuItem, Stack,
    Typography, useMediaQuery
} from '@mui/material';
import moment from "moment";
import React, { useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import { HiLink } from "react-icons/hi";
import { Mention, MentionsInput } from 'react-mentions';
import classForMentions from '../../../../component/PostModal/mention.module.css';
import { useStyles } from '../../../../constant/customStyle';


const dummyImage =
    "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";



const FeedItem = ({
    MyId,
    post,
    open,
    handleClick,
    handleLike,
    handleShare,
    setSongUrl,
    handleFlagPost,
    anchorEl,
    anchorE2,
    open2,
    handleDeletePost,
    postComment,
    handleClose,
    currentUser,
    users
}) => {
    const classes = useStyles();
    const [commentMore, setCommentMore] = useState(false);
    const [comment, setComment] = useState(false);
    const matches = useMediaQuery('(max-width:768px)');
    const SLICELENGTH = 3;
    const [PID, setPID] = useState();
    return (
        <Box className={classes.feedbackBox} padding={matches ? 1 : "15px 25px"}>
            <Stack direction="row" justifyContent={"space-between"}>
                <Box>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Box width={60} height={60} borderRadius={9}>
                            <img src={post.user.user_img} alt="" className={classes.img} />
                        </Box>
                        <Box>
                            <Typography className={classes.feedbackUserName}>
                                {post.user.user_name}
                            </Typography>
                            <Typography className={classes.feedbackUserTime}>
                                {moment(post.updatedAt).fromNow()}
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <IconButton
                        aria-label="more"
                        id={post._id}
                        aria-controls={open ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={(e) => {
                            setPID(post._id)
                            handleClick(e, post._id, post.userId)
                        }}
                    >
                        <MoreVertIcon
                            sx={{
                                fontSize: "26px !important",
                                color: "#fff",
                            }}
                        />
                    </IconButton>
                </Box>
            </Stack>
            {post._id === PID &&
                <Menu
                    MenuListProps={{
                        "aria-labelledby": "fade-button",
                    }}
                    id={post._id + "1"}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => {
                        setPID(null)
                        handleClose()
                    }
                    }
                    TransitionComponent={Fade}
                >
                    {MyId !== post.userId ?
                        <MenuItem onClick={handleFlagPost}>Flag This Post</MenuItem>
                        :
                        <MenuItem onClick={handleDeletePost}>Delete This Post</MenuItem>
                    }
                </Menu>
            }

            {post.file &&
                ["jpg", "JPG", "png", "PNG", "jpeg", "JPEG"].includes(
                    post.file.split(".")[post.file.split(".").length - 1]
                ) && (
                    <Box marginTop={2}>
                        <Box className={classes.img}>
                            <img style={{ width: "100%", borderRadius: 4 }} src={post.file} alt="" />
                        </Box>
                    </Box>
                )}
            <Box pt={2} pb={2}>
                <Typography className={classes.feedbackUserPost}>
                    {ReactHtmlParser(post.desc)}
                </Typography>
            </Box>
            <Box className={classes.space} />
            {post.file &&
                [
                    "mp3",
                    "acc",
                    "mp4",
                    "MP3",
                    "MP4",
                    "ACC",
                    "ogg",
                    "OGG",
                    "wav",
                    "WAV",
                ].includes(
                    post.file.split(".")[post.file.split(".").length - 1]
                ) && (
                    <Box
                        style={{
                            background: "#1d1d1d",
                            padding: "1em",
                            borderRadius: "5px",
                        }}
                        className={classes.songSection}
                        onClick={() => setSongUrl(post.file)}
                    >
                        <Box className={classes.songLinkSection}>
                            <HiLink className={classes.linkIcon} />
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                        >
                            <Typography className={classes.songName}>
                                {post.file.split("/")[post.file.split("/").length - 1]}
                            </Typography>
                        </Box>
                    </Box>
                )}
            <Divider
                sx={{
                    background: "rgba(255,255,255,0.50)",
                    height: 1,
                    borderRadius: 20,
                }}
            />
            <Box className={classes.feedbackSocial}>
                <Box className={classes.feedbackSocialDetails}>
                    <MessageIcon className={classes.feedbackIcon} />
                    <Typography className={classes.feedbackText}>
                        {post.comments.length}
                    </Typography>
                </Box>

                <Box className={classes.feedbackSocialDetails}>
                    {post.likedPost ? (
                        <FavoriteIcon
                            onClick={() => handleLike(false, post._id)}
                            className={classes.feedbackIcon}
                        />
                    ) : (
                        <FavoriteBorderIcon
                            onClick={() => handleLike(true, post._id)}
                            className={classes.feedbackIcon}
                        />
                    )}
                    <Typography className={classes.feedbackText}>
                        {post.likes.length}
                    </Typography>
                </Box>
                <Box className={classes.feedbackSocialDetails}>
                    <ShareIcon className={classes.feedbackIcon} onClick={() => handleShare(post._id)} />
                    <Typography className={classes.feedbackText}> {post.shared.length}</Typography>
                </Box>
            </Box>

            <Box className={classes.space} />
            <Box className={classes.commentGrid} width="100%">
                {post.comments.length > 0 && (
                    <Box className={classes.paddingSpace}>
                        {post.comments.slice(0, commentMore ? post.comments.length : SLICELENGTH).map((item, index) => (
                            <Box key={index}>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Box width={60} height={60} borderRadius={9}>
                                        <img src={
                                            item?.user?.user_img
                                                ? item.user.user_img
                                                : dummyImage
                                        } alt="" className={classes.img} />
                                    </Box>
                                    <Box>
                                        <Typography className={classes.feedbackUserName}>
                                            {item.user.user_name}
                                        </Typography>
                                        <Typography className={classes.followerComment}>
                                            {moment(item.updatedAt).fromNow()}
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Box p={3}>
                                    <Typography className={classes.feedbackUserTime}>
                                        {ReactHtmlParser(item.desc)}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                        {post.comments.length > SLICELENGTH &&
                            <Box mt={3}>
                                <Button
                                    variant="contained"
                                    fullWidth={true}
                                    className={classes.commentButton}
                                    onClick={() => setCommentMore(!commentMore)}
                                >
                                    {!commentMore
                                        ? `view all comments`
                                        : `hide last ${post.comments.length - SLICELENGTH} comments`}
                                </Button>
                            </Box>
                        }
                    </Box>)
                }

                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: "#484848",
                        borderBottomLeftRadius: "15px",
                        borderBottomRightRadius: "15px",
                    }}
                >
                    <Box sx={{ padding: "44.4px 33px 19px" }}>
                        <Stack direction={"row"} sx={{ mb: 2 }}>
                            <Box
                                sx={{
                                    width: "49px",
                                    height: "49px",
                                    marginRight: "10px",
                                }}
                            >
                                <img
                                    src={
                                        currentUser?.profilePicture
                                            ? currentUser.profilePicture
                                            : dummyImage
                                    }
                                    alt=""
                                    className={classes.img}
                                />
                            </Box>
                            <Box width="100%">
                                <MentionsInput
                                    style={{
                                        backgroundColor: "#A4A4A4",
                                        color: "white",
                                        border: "none",
                                        outline: "none",
                                        resize: "none",
                                        borderRadius: "10px",
                                    }}
                                    placeholder={"Comment..."}
                                    value={comment} onChange={(e) => setComment(e.target.value)}
                                    className='mentions2'
                                >
                                    <Mention
                                        trigger="@"
                                        data={users}
                                        style={{ border: 'none' }}
                                        className={classForMentions.mentions2__mention}
                                    />
                                </MentionsInput>
                            </Box>
                        </Stack>
                        <Box display={"flex"} justifyContent={"right"}>
                            <Button
                                variant="contained"
                                fullWidth={true}
                                className={classes.postCommentButton}
                                onClick={() => {
                                    postComment(post._id, comment)
                                    setComment("")
                                }}
                            >
                                Post A Comment
                            </Button>
                        </Box>
                    </Box>
                </Box>



            </Box>
        </Box>
    )
}

export default FeedItem;