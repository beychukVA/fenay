import {
  Box, CircularProgress, Stack, useMediaQuery
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../constant/customStyle";
import { parseJwt } from "../helpers/getId";
import { show_success } from "../helpers/toast";
import FeedItem from "../Screens/Community/component/FeedItem/FeedItem";
import { FetchFeed, LikeDisPost } from "../Services/Community";
import { CreateComment, DeletePost, FlagePost, GetTagUsers, GetUser, SharePost } from "../Services/User";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const TabComponentFeed = ({ setSongUrl }) => {
  const classes = useStyles();
  const [Posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [postFlagId, setpostFlagId] = React.useState();
  const [MyId, setMyId] = useState();
  const [users, setusers] = useState([]);

  const [feedLoading, setFeedLoading] = useState(true);

  useEffect(async () => {
    fetchFeed();
    const { _id } = await parseJwt();
    const get_user = await GetUser(_id);
    setCurrentUser(get_user);
    setMyId(_id);
    getUsers()
  }, []);

  const getUsers = async () => {
    const res = await GetTagUsers();
    console.log("GET TAG USER", res);
    let usersList;
    if (res.status_msg === 'No list') {
      usersList = [];
    } else {
      usersList = res.map(user => ({ id: user.user_id, display: user.user_name }))
    }
    setusers(usersList)
  };

  const fetchFeed = async () => {
    const res = await FetchFeed();
    const postsWithHtml = res.map(post => {
      if (post.desc.includes('@[')) {
        let newDesc = post.desc;
        const regexCountUsers = /\@.*?\)/g
        const regexUser = /\@.*?\)/
        const regexSquare = /\[.*?\]/
        const regexRound = /\(.*?\)/
        const usersCount = newDesc.match(regexCountUsers)
        for (let i = 0; i < usersCount.length; i++) {
          if (newDesc.includes('@[')) {
            let name = newDesc.match(regexSquare)[0]
            let id = newDesc.match(regexRound)[0]
            newDesc.match(regexRound)
            name = name.replace('[', '')
            name = name.replace(']', '')

            id = id.replace('(', '')
            id = id.replace(')', '')
            newDesc = newDesc.replace(regexUser, `<a class='userLink' href="/profile?id=${id}"> <strong class='userLink'> ${name} </strong> </a>`)
          }
        }


        const comments = post.comments.map(comm => {
          if (comm.desc.includes('@[')) {
            let commDesc = comm.desc;
            const regexCountUsers = /\@.*?\)/g
            const regexUser = /\@.*?\)/
            const regexSquare = /\[.*?\]/
            const regexRound = /\(.*?\)/
            const usersCount = commDesc.match(regexCountUsers)
            for (let i = 0; i < usersCount.length; i++) {
              if (commDesc.includes('@[')) {
                let name = commDesc.match(regexSquare)[0]
                let id = commDesc.match(regexRound)[0]
                commDesc.match(regexRound)
                name = name.replace('[', '')
                name = name.replace(']', '')

                id = id.replace('(', '')
                id = id.replace(')', '')
                commDesc = commDesc.replace(regexUser, `<a class='userLink' href="/profile?id=${id}"> <strong class='userLink'> ${name} </strong> </a>`)
              }
            }
            const modifiedCommObject = {
              ...comm,
              desc: commDesc
            }
            return modifiedCommObject
          } else {
            return comm
          }
        })

        console.log('comment', comments)
        const modifiedPostObject = {
          ...post,
          desc: newDesc,
          comments: comments
        }
        return modifiedPostObject
        // newDesc.replace(regexSquare , )
      } else {

        const comments = post.comments.map(comm => {
          if (comm.desc.includes('@[')) {
            let commDesc = comm.desc;
            const regexCountUsers = /\@.*?\)/g
            const regexUser = /\@.*?\)/
            const regexSquare = /\[.*?\]/
            const regexRound = /\(.*?\)/
            const usersCount = commDesc.match(regexCountUsers)
            for (let i = 0; i < usersCount.length; i++) {
              if (commDesc.includes('@[')) {
                let name = commDesc.match(regexSquare)[0]
                let id = commDesc.match(regexRound)[0]
                commDesc.match(regexRound)
                name = name.replace('[', '')
                name = name.replace(']', '')

                id = id.replace('(', '')
                id = id.replace(')', '')
                commDesc = commDesc.replace(regexUser, `<a class='userLink' href="/profile?id=${id}"> <strong class='userLink'> ${name} </strong> </a>`)
              }
            }
            const modifiedCommObject = {
              ...comm,
              desc: commDesc
            }
            return modifiedCommObject
          } else {
            return comm
          }
        })

        const modifiedPostObject = {
          ...post,
          comments: comments
        }

        return modifiedPostObject
      }
    })
    setFeedLoading(false)

    setPosts(postsWithHtml);
  };

  const handleLike = async (liked, id) => {
    const { _id } = await parseJwt();
    const result = await LikeDisPost(id);

    let tempPost = Posts.map((post) => {
      if (post._id === id) {
        const modifiedPost = {
          ...post,
          likedPost: liked,
          likes: liked
            ? post.likes.concat(_id)
            : post.likes.filter((id) => id !== _id),
        };
        return modifiedPost;
      } else {
        return post;
      }
    });
    setPosts(tempPost);
  };

  const postComment = async (postId, comment) => {
    if (comment.trim() === "") {
      return;
    }
    const res = await CreateComment({ postId, desc: comment });
    // CurrentUserId ? getPosts(CurrentUserId) : getPosts()
    fetchFeed();
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const handleClick = (event, id, userId) => {
    setpostFlagId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
  };

  const handleFlagPost = async () => {
    const res = await FlagePost({ id: postFlagId });
    const filteredPosts = Posts.filter((post) => post._id !== postFlagId);
    setPosts(filteredPosts);
    setAnchorEl(null);
  };

  const handleShare = async (id) => {
    const res = await SharePost({ postId: id });
    show_success("Post shared");
    res && fetchFeed()
  };

  const handleDeletePost = async () => {
    const res = await DeletePost(postFlagId);
    const filteredPosts = Posts.filter((post) => post._id !== postFlagId);
    setPosts(filteredPosts);
    setAnchorEl(null);
  };

  const matches = useMediaQuery('(max-width:768px)');


  return (
    <>
      {feedLoading ?
        <Stack justifyContent="center" alignItems="center" direction="row">
          <CircularProgress sx={{ color: "#FF1C51" }} />
        </Stack>
        :
        <Box className={classes.tabFeedBox} padding={matches ? 0 : "2em 2em"}>
          {Posts.map((post) => {
            return (
              <FeedItem
                MyId={MyId}
                open={open}
                open2={open2}
                handleClick={handleClick}
                handleLike={handleLike}
                handleShare={handleShare}
                setSongUrl={setSongUrl}
                handleFlagPost={handleFlagPost}
                anchorEl={anchorEl}
                anchorE2={anchorE2}
                handleDeletePost={handleDeletePost}
                handleClose={handleClose}
                post={post}
                postComment={postComment}
                currentUser={currentUser}
                users={users}
              />
            )
          })}
        </Box>
      }
    </>

  );
};

export default TabComponentFeed;
