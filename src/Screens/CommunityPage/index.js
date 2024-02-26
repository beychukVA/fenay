import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { get_time_diff } from "../../helpers/timeDiff";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import { useStyles } from "../../constant/customStyle";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import UserExampleIcon from "../../assets/UserExampleIcon.svg";
import OpenArrowIcon from "../../assets/OpenArrowIcon.svg";
import JoinCommunityBannerImg from "../../assets/JoinCommunityBannerImg.png";
import { PostCard } from "./components/PostCard";
import { CreatePost } from "./components/CreatePost";
import { LoginDialog } from "./components/LoginDialog";
import PostAttachment1 from "../../assets/PostAttachment1.jpg";
import PostAttachment2 from "../../assets/PostAttachment2.jpg";
import PostAttachment3 from "../../assets/PostAttachment3.jpg";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
  {
    id: Math.random(),
    user: {
      name: "Darlene Steward",
      icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
    likes: "2.1k",
    comments: [
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:15:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:16:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Sophia",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:20:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
      {
        id: Math.random(),
        user: {
          name: "Mike Mazowski",
          icon: UserExampleIcon,
        },
        createdAt: "2023-01-13 11:25:00",
        desc: "Lorem ipsum dolor sit amet consectetur. Lectus hendrerit in consequat adipiscing. Nunc non sed mauris sed habitant vitae vel. Augue phasellus neque libero sapien convallis magnis eget mi. Eleifend pellentesque neque varius habitant. Viverra donec sagittis ut morbi proin donec pellentesque maecenas. In odio egestas tincidunt nisi turpis odio. Eleifend volutpat quis venenatis tortor cursus sit ultrices orci pretium. Adipiscing aliquam in lacus volutpat a aliquet vitae consectetur nunc. ",
        likes: "2.1k",
      },
    ],
    shares: "2.1k",
  },
];

const topThreads = [
  {
    id: Math.random(),
    title: "#Turpis_pharetra_porta_id",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
  },
  {
    id: Math.random(),
    title: "#Platea_sapien_libero",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
  },
  {
    id: Math.random(),
    title: "#Aliquet_varius",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
  },
  {
    id: Math.random(),
    title: "#Aliquet_varius",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
  },
  {
    id: Math.random(),
    title: "#Aliquet_varius",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
  },
  {
    id: Math.random(),
    title: "#Aliquet_varius",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
  },
];

const recentPosts = [
  {
    id: Math.random(),
    user: {
      user_name: "Abhi Manapragada",
      user_icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
    attachments: [
      PostAttachment1,
      PostAttachment2,
      PostAttachment3,
      PostAttachment1,
      PostAttachment2,
      PostAttachment3,
      PostAttachment2,
    ],
  },
  {
    id: Math.random(),
    user: {
      user_name: "Abhi Manapragada",
      user_icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
    attachments: [],
  },
  {
    id: Math.random(),
    user: {
      user_name: "Abhi Manapragada",
      user_icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
    attachments: [],
  },
  {
    id: Math.random(),
    user: {
      user_name: "Abhi Manapragada",
      user_icon: UserExampleIcon,
    },
    createdAt: "2023-01-13 11:00:00",
    desc: "Thread! This is the only place on this subreddit to get feedback on your Songs, your artist name, your website layout,",
    attachments: [
      PostAttachment1,
      PostAttachment2,
      PostAttachment3,
      PostAttachment1,
    ],
  },
];

export const CommunityPage = () => {
  const navigate = useNavigate();
  const { credentials } = useContext(AuthContext);
  const classes = useStyles();
  const matches768px = useMediaQuery("(max-width:768px)");
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [isThreadsOpen, setThreadsOpen] = useState(false);
  const [isLoginDialogOpne, setLoginDialogOpne] = useState(false);

  const toggleJoinTheCommunity = () => setThreadsOpen(!isThreadsOpen);

  useEffect(
    () => setLoginDialogOpne(credentials ? false : true),
    [credentials]
  );

  return (
    <Box sx={{ position: "relative" }} className={open ? classes.blur : ""}>
      <Box
        sx={{
          position: "absolute",
          top: "408px",
          left: "-102px",
          width: "257.54px",
          height: "261.76px",
          background: "#FF8200",
          opacity: "0.15",
          filter: "blur(100px)",
          zIndex: "0",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "805px",
          right: "0",
          width: "257.54px",
          height: "261.76px",
          background: "#FF8200",
          opacity: "0.2",
          filter: "blur(100px)",
          zIndex: "0",
        }}
      />
      <HeaderComponent
        style={{ position: "fixed" }}
        // setSongUrl={setSongUrl}
        // setSongDetails={setSongDetails}
        setLeftSidebarOpen={setLeftSidebarOpen}
      />
      <Box
        className={`${classes.homeContainer} ${
          isLeftSidebarOpen ? "" : matches768px ? "" : classes.sidebarOpen
        }`}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
          minHeight: "calc(100vh - 336px)",
          width: isLeftSidebarOpen
            ? "100%"
            : { xs: "100%", md: "calc(100% - 235px)" },
          padding: isLeftSidebarOpen
            ? {
                xs: "44px 15px 137px 15px !important",
                lg: "44px 38px 137px 46px !important",
              }
            : {
                xs: "44px 15px 137px 15px !important",
              },
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: "0",
        }}
      >
        {matches768px && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <Box
              onClick={() => toggleJoinTheCommunity()}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover div": {
                  background: "rgba(255, 130, 0, 1)",
                },
                "&:hover p": {
                  color: "rgba(255, 130, 0, 1)",
                },
              }}
            >
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  WebkitMask: `url(${OpenArrowIcon}) center center / 16px 16px no-repeat`,
                  mask: `url(${OpenArrowIcon}) center center / 16px 16px no-repeat`,
                  backgroundSize: "cover",
                  background: "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  marginRight: "12px",
                  transition: "all 250ms ease",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "18px",
                  lineHeight: "19px",
                  letterSpacing: "0.2px",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                {isThreadsOpen ? "See posts" : "#top_threads"}
              </Typography>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: "1440px",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/** Feed */}
          <Box
            sx={{
              display: "flex",
              flex: matches768px ? (isThreadsOpen ? "0" : "2") : "2",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: matches768px ? (isThreadsOpen ? "0" : "100%") : "100%",
              height: "100%",
              overflow: "auto",
              marginRight: { xs: "0", sm: "30px" },
              transition: "all 500ms ease",
            }}
          >
            <CreatePost />
            {posts?.length > 0 ? (
              posts?.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "125%",
                    letterSpacing: "0.2px",
                    color: "#fff",
                    marginBottom: "12px",
                  }}
                >
                  No posts yet
                </Typography>
              </Box>
            )}
          </Box>
          {/** Banner */}
          <Box
            sx={{
              display: "flex",
              flex: matches768px ? (isThreadsOpen ? "1" : "0") : "1",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: matches768px ? (isThreadsOpen ? "100%" : "0") : "100%",
              transition: "all 500ms ease",
            }}
          >
            {/** Banner */}
            {!credentials && (
              <Box
                sx={{
                  position: "relative",
                  zIndex: "0",
                  background:
                    "linear-gradient(134.57deg, #FFC8C8 34.46%, #FFE6A6 98.35%)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "49px",
                }}
              >
                <img
                  src={JoinCommunityBannerImg}
                  alt="Join the Community"
                  style={{
                    position: "relative",
                    zIndex: "1",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    zIndex: "2",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.6)",
                    backdropFilter: "blur(17.5px)",
                    borderRadius: "0px 0px 16px 16px",
                    padding: "28px 31px 23px 40px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: "24px",
                      lineHeight: "29px",
                      letterSpacing: "0.2px",
                      color: "rgba(0, 0, 0, 0.8)",
                      marginBottom: "12px",
                    }}
                  >
                    Join the community
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                      letterSpacing: "0.2px",
                      color: "rgba(0, 0, 0, 0.6)",
                      marginBottom: "24px",
                    }}
                  >
                    Login or create an account to comment, like, share and
                    engage with the community.
                  </Typography>
                  <Button
                    onClick={() => navigate("/signup")}
                    sx={{
                      padding: "10px 32px",
                      background: "transparent",
                      border: "1px solid #FF8200",
                      borderRadius: "30px",
                      transition: "all 250ms ease",
                      "&:hover": {
                        background: "rgba(255, 130, 0, 0.2)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#FF8200",
                        textTransform: "none",
                      }}
                    >
                      Sign up
                    </Typography>
                  </Button>
                </Box>
              </Box>
            )}
            {/** #top_threads  */}
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              #top_threads
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                background: "#2A2B2F",
                borderRadius: "10px",
                padding: "32px 31px",
                marginBottom: "48px",
              }}
            >
              {topThreads?.length > 0 ? (
                topThreads?.map((thread) => (
                  <Box
                    key={thread.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: "100%",
                      "&:not(:last-child)": {
                        marginBottom: "24px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: "12px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Urbanist",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#fff",
                        }}
                      >
                        {thread?.title}
                      </Typography>
                      <Box
                        sx={{
                          width: "16px",
                          height: "16px",
                          WebkitMask: `url(${OpenArrowIcon}) center center / 16px 16px no-repeat`,
                          mask: `url(${OpenArrowIcon}) center center / 16px 16px no-repeat`,
                          backgroundSize: "cover",
                          background: "#fff",
                          cursor: "pointer",
                          transition: "all 250ms ease",
                          "&:hover": {
                            background: "rgba(255, 130, 0, 1)",
                          },
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {thread?.desc}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "125%",
                      letterSpacing: "0.2px",
                      color: "#fff",
                      marginBottom: "12px",
                    }}
                  >
                    No threads yet
                  </Typography>
                </Box>
              )}
            </Box>
            {/** Recent Posts  */}
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "140%",
                letterSpacing: "0.2px",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Recent Posts
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                background: "#2A2B2F",
                borderRadius: "10px",
                padding: "42px 16px 24px 27px",
                marginBottom: "48px",
              }}
            >
              {recentPosts?.length > 0 ? (
                recentPosts?.map((post) => (
                  <Box
                    key={post.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: "100%",
                      "&:not(:last-child)": {
                        marginBottom: "24px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "100%",
                        marginBottom: "14px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "24px",
                          height: "24px",
                          background: `url(${post?.user?.user_icon})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "4px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Urbanist",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "14px",
                          lineHeight: "17px",
                          color: "#fff",
                        }}
                      >
                        {post?.user?.user_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "12px",
                          lineHeight: "14px",
                          color: "rgba(255, 255, 255, 0.6)",
                          marginLeft: "auto",
                        }}
                      >
                        {get_time_diff(post?.createdAt)}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "rgba(255, 255, 255, 0.6)",
                        marginBottom:
                          post?.attachments?.length > 0 ? "14px" : "24px",
                      }}
                    >
                      {post?.desc}
                    </Typography>
                    {post?.attachments?.length > 0 && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          width: "100%",
                          marginBottom: "24px",
                        }}
                      >
                        {post?.attachments?.map((attach, index) => {
                          if (index > 2) {
                            return null;
                          }
                          return (
                            <Box
                              key={index}
                              sx={{
                                position: "relative",
                                zIndex: "0",
                                width: "120px",
                                height: "115px",
                                background: `url(${attach})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                "&:not(:last-child)": {
                                  marginRight: "8px",
                                },
                              }}
                            >
                              {post?.attachments?.length > 3 && index === 2 && (
                                <Box
                                  key={index}
                                  sx={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    zIndex: "1",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    height: "100%",
                                    background: "rgba(0, 0, 0, 0.6)",
                                    backdropFilter: "blur(5px)",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontFamily: "Urbanist",
                                      fontStyle: "normal",
                                      fontWeight: "600",
                                      fontSize: "32px",
                                      lineHeight: "38px",
                                      color: "#fff",
                                    }}
                                  >
                                    +{post?.attachments?.length - 3}
                                  </Typography>
                                </Box>
                              )}
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "125%",
                      letterSpacing: "0.2px",
                      color: "#fff",
                      marginBottom: "12px",
                    }}
                  >
                    No recent posts yet
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <LoginDialog
          isLoginDialogOpne={isLoginDialogOpne}
          setLoginDialogOpne={setLoginDialogOpne}
        />
      </Box>
      <FooterComponent />
    </Box>
  );
};
