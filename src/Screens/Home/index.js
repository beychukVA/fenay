import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import Carousel, { consts } from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import ChatComponent from "../../component/Chat";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import { useStyles } from "../../constant/customStyle";
import { parseJwt } from "../../helpers/getId";
import { show_success } from "../../helpers/toast";
import { CreateCart } from "../../Services/CreateCart";
import {
  GetRegularEventNFTs,
  GetRegularSongNFTs,
  LikeDislikeNft,
  reportNft,
} from "../../Services/Nfts";
import {
  FollowUser,
  GetAllUsers,
  GetUser,
  UpdateUser,
} from "../../Services/User";
import { CreateWishlist } from "../../Services/Wishlist";
import ExploreTitle from "./components/ExploreTitle";
import NFTDetailDialog from "../../component/nftDetailDialog";
import MusicNFTBackground from "../../assets/MusicNFTBackground.jpg";
import QRCode from "../../assets/QRCode.jpg";
import MusicNFTContent from "../../assets/MusicNFTContent.png";
import DiscoverEventIcon from "../../assets/DiscoverEventIcon.svg";
import MediaExampleImg from "../../assets/MediaExampleImg.png";
import MediaExampleImg2 from "../../assets/MediaExampleImg2.png";
import MediaExampleImg3 from "../../assets/MediaExampleImg3.png";
import PhonesImg from "../../assets/PhonesImg.png";
import AppstoreIcon from "../../assets/AppstoreIcon.svg";
import GooglePlayIcon from "../../assets/GooglePlayIcon.svg";
import ArtistIcon from "../../assets/ArtistIcon.svg";
import { HomeNFTCard } from "./components/HomeNFTCard";
import { UpcomingEventsCard } from "./components/UpcomingEventsCard";
import { NFTDetails } from "./components/NFTDetails";
import { GenreSelectDialog } from "./components/GenreSelectDialog";
import { GetAllEvents } from "../../Services/Events";

const WhatsHotMedia = [
  {
    _id: Math.random(),
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
];

const upcomingEvents = [
  {
    _id: Math.random(),
    imgFile: MediaExampleImg,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg2,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg3,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg2,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg3,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg2,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
  {
    _id: Math.random(),
    imgFile: MediaExampleImg3,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    date: "tommorow",
  },
];

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const topArtists = [
  {
    user_img: dummyImage,
    user_name: "Billie Eilish",
  },
  {
    user_img: dummyImage,
    user_name: "Salud Subira",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Billie Eilish",
  },
  {
    user_img: dummyImage,
    user_name: "Salud Subira",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    user_img: dummyImage,
    user_name: "Drake",
  },
];

const HomeScreen = ({ setSongUrl, setSongDetails }) => {
  const { credentials } = useContext(AuthContext);
  const classes = useStyles();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState("choose");
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [chatStatus, setChatStatus] = useState(false);
  const [calendarStatus, setCalendarStatus] = useState(false);
  const [Artists, setArtists] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [regularNfts, setregularNfts] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const matches = useMediaQuery("(max-width:768px)");
  // eslint-disable-next-line no-unused-vars
  const [eventRegularNFTs, setEventRegularNFTs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [eventRegularLoading, setEventRegularLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [artistLoading, setArtistLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [regularLoading, setRegularLoading] = useState(false);
  const [MyId, setMyId] = useState();
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [isGenreSelectOpne, setGenreSelect] = useState(true);

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <KeyboardArrowLeftIcon
          sx={{
            color: "#000",
            width: "32px",
            height: "32px",
          }}
        />
      ) : (
        <KeyboardArrowRightIcon
          sx={{
            color: "#000",
            width: "32px",
            height: "32px",
          }}
        />
      );
    const pos = type === consts.PREV ? "left" : "right";
    return (
      <Button
        id="btn-carousel"
        onClick={onClick}
        disabled={isEdge}
        sx={{
          position: "absolute",
          [pos]: "40px",
          top: "139px",
          zIndex: "3",
          minWidth: "20px",
          padding: 0,
          background: "rgba(255, 255, 255, 0.52)",
          borderRadius: "50%",
          "&:hover": {
            background: "rgba(255, 255, 255, 1)",
          },
        }}
      >
        {pointer}
      </Button>
    );
  };

  useEffect(() => {
    const fetchAllEvents = async (credentials) => {
      try {
        const res = await GetAllEvents(credentials);
        console.log("events: ", res);
      } catch (error) {
        console.log("events (error): ", error);
      }
    };
    fetchAllEvents(credentials);
  }, [credentials]);

  const blurStatus = () => {
    setOpen(!open);
  };

  const modalStatus = () => {
    setChatStatus(false);
    setCalendarStatus(false);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const breakPointsTopArtist = [
    { width: 375, itemsToShow: 2, itemsToScroll: 1 },
    { width: 550, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1150, itemsToShow: 7, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 8, itemsToScroll: 2 },
    { width: 1750, itemsToShow: 10, itemsToScroll: 2 },
  ];

  const breakPointsUpcomingEvents = [
    { width: 375, itemsToShow: 0.8, itemsToScroll: 1 },
    { width: 550, itemsToShow: 1.5, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 2.8, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1750, itemsToShow: 5, itemsToScroll: 2 },
  ];

  // eslint-disable-next-line no-unused-vars
  const breakPoints1 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  // useEffect(() => {
  //   userOnline();
  // }, []);

  // eslint-disable-next-line no-unused-vars
  const userOnline = async () => {
    await UpdateUser({ isOnline: true });
  };

  const clickProfile = (id) => {
    navigate("/profile?id=" + id);
    // window.location.reload();
  };

  // eslint-disable-next-line no-unused-vars
  const handleModalOpen = (item) => {
    setSelectedNFT(item);
    setModalOpen(true);
    setOpen(true);
  };

  const handleModalClose = () => {
    console.log("MODAL CLOSE");
    setModalOpen(false);
    setOpen(false);
  };

  // eslint-disable-next-line no-unused-vars
  const fetchUsers = async () => {
    setArtistLoading(true);
    const res = await GetAllUsers();
    if (res) {
      setArtistLoading(false);
      setArtists(res);
    }

    const { _id } = await parseJwt();
    setMyId(_id);
  };

  const fetchNfts = async () => {
    setRegularLoading(true);
    const res2 = await GetRegularSongNFTs();
    console.log(`🚀 ~ file: index.js ~ line 165 ~ fetchNfts ~ res2`, res2);
    if (res2) {
      setRegularLoading(false);
      setregularNfts(res2);
    }
    // setAccessLoading(true);
    // const res = await GetAccessSongNFTs();
    // if (res) {
    //   for (let i = 0; i < res.length; i++) {
    //     let rnu = await GetUser(res[i].ownerId);
    //     res[i].userProfile = rnu;
    //   }
    //   setAccessLoading(false);
    //   setaccessNfts(res);
    // }
  };

  // eslint-disable-next-line no-unused-vars
  const fetchEventNfts = async () => {
    setEventRegularLoading(true);
    const res2 = await GetRegularEventNFTs();
    if (res2) {
      for (let i = 0; i < res2.length; i++) {
        let rnu = await GetUser(res2[i].ownerId);
        res2[i].userProfile = rnu;
      }

      setEventRegularLoading(false);
      setEventRegularNFTs(res2);
    }
    // setAccessLoading(true);
    // const res = await GetAccessSongNFTs();
    // if (res) {
    //   for (let i = 0; i < res.length; i++) {
    //     let rnu = await GetUser(res[i].ownerId);
    //     res[i].userProfile = rnu;
    //   }
    //   setAccessLoading(false);
    //   setaccessNfts(res);
    // }
  };

  const createCartHandle = async (id) => {
    setSelectedNFT({
      ...selectedNFT,
      availableQuantity: selectedNFT.availableQuantity - 1,
    });
    const res = await CreateCart(id);
    show_success("NFT added to cart!");
    return res;
  };

  const CreateWishlistHandle = async (id) => {
    const res = await CreateWishlist(id);
    show_success("NFT added to wishlist!");
    return res;
  };

  // useEffect(() => {
  //   document.title = "Explorer | Finay";
  //   fetchUsers();
  //   fetchNfts();
  //   fetchEventNfts();
  // }, []);

  const handleNftLike = async (liked, id) => {
    setSelectedNFT({
      ...selectedNFT,
      likes: selectedNFT.likes.includes(MyId) ? [] : [MyId],
    });
    const res = await LikeDislikeNft({ id });
    // res && setSelectedNFT({...selectedNFT , likes : res.likes})
    res && fetchNfts();
  };

  const handleNftReport = async (id) => {
    const res = await reportNft({ nftId: id });
    if (res) {
      show_success("This NFT has been reported.");
    }
    console.log("reported", res);
  };

  // eslint-disable-next-line no-unused-vars
  const handleFollow = async (id) => {
    const res = await FollowUser(id);
    if (res) setArtists(Artists.filter((artist) => artist._id !== id));
  };

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
        setSongUrl={setSongUrl}
        setSongDetails={setSongDetails}
        setLeftSidebarOpen={setLeftSidebarOpen}
      />
      <Box
        className={`${classes.homeContainer} ${
          isLeftSidebarOpen ? "" : matches ? "" : classes.sidebarOpen
        }`}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "100%",
          minHeight: "calc(100vh - 336px)",
          width: isLeftSidebarOpen
            ? "100%"
            : { xs: "100%", md: "calc(100% - 235px)" },
          padding: isLeftSidebarOpen
            ? {
                xs: "0 15px 137px 15px !important",
                lg: "0 0 137px 78px !important",
              }
            : {
                xs: "0 15px 137px 15px !important",
              },
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: "0",
        }}
      >
        {selectedNFT ? (
          <NFTDetails nft={selectedNFT} closeNftDetails={setSelectedNFT} />
        ) : (
          <>
            {/** Music NFT */}
            <Box
              sx={{
                maxWidth: { xs: "1034px" },
                maxHeight: { xs: "600px", sm: "425px" },
                minHeight: { xs: "600px", sm: "425px" },
                width: "100%",
                height: "100%",
                marginBottom: "48px",
                position: "relative",
                "&:before": {
                  content: "''",
                  display: "block",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  zIndex: "1",
                  opacity: "0.4",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${MusicNFTBackground})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50% 50%",
                  borderRadius: "0px 0px 8px 8px",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: "2",
                  display: "flex",
                  flexDirection: { xs: "column-reverse", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "center",
                  width: "100%",
                  height: { xs: "585px", sm: "425px" },
                  padding: "0 32px 0 32px",
                  overflow: "hidden",
                }}
              >
                {/** Left Block */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: { xs: "10px", sm: "0" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: { xs: "38px", lg: "48px" },
                      lineHeight: "140%",
                      color: "#fff",
                    }}
                  >
                    All the best Music
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: "100%",
                      marginBottom: "17px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: { xs: "38px", lg: "48px" },
                        lineHeight: "140%",
                        color: "#fff",
                      }}
                    >
                      NFT on
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: { xs: "38px", lg: "48px" },
                        lineHeight: "140%",
                        color: "#FF8200",
                        marginLeft: "12px",
                      }}
                    >
                      Finay
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: { xs: "16px", lg: "20px" },
                      lineHeight: "23px",
                      letterSpacing: "0.2px",
                      color: "rgba(255, 255, 255, 0.8)",
                      width: "335px",
                      marginBottom: "32px",
                    }}
                  >
                    Create or explore the best music NFT from your favourite
                    artists.
                  </Typography>
                  <Button
                    sx={{
                      padding: "16px 62px",
                      background: "#FF8200",
                      borderRadius: "30px",
                      "&:hover": {
                        background: "rgba(255, 130, 0, 0.8)",
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
                        color: "#341B00",
                        textTransform: "none",
                      }}
                    >
                      Explore
                    </Typography>
                  </Button>
                </Box>
                {/** Right Block */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "block",
                      width: "100%",
                      height: {
                        xs: "250px",
                        sm: "265px",
                        md: isLeftSidebarOpen ? "315px" : "265px",
                        lg: "315px",
                      },
                      backgroundImage: `url(${MusicNFTContent})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            {/** Discover event */}
            <Box
              sx={{
                maxWidth: { xs: "1034px" },
                width: "100%",
                height: "100%",
                background: "#FFDCB7",
                borderRadius: "8px",
                padding: {
                  xs: "23px 25px 25px 25px",
                  sm: "23px 48px 25px 48px",
                },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: "flex-start",
                marginBottom: "48px",
              }}
            >
              <Box
                sx={{
                  width: "72px",
                  minWidth: "72px",
                  height: "72px",
                  minHeight: "72px",
                  backgroundImage: `url(${DiscoverEventIcon})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  marginBottom: { xs: "20px", sm: "0" },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginLeft: "21px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "125%",
                    letterSpacing: "0.2px",
                    color: "#000",
                    marginBottom: "12px",
                  }}
                >
                  Discover event, merch, songs at one place.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0.2px",
                    color: "rgba(0, 0, 0, 0.85)",
                    marginBottom: "32px",
                    maxWidth: "641px",
                  }}
                >
                  Now you can easily create event, merch, songs by just clicking
                  the below button. You can easily promote songs in the market
                  and win backstge pass.
                </Typography>
                <Button
                  onClick={() => navigate("/create")}
                  sx={{
                    padding: "16px 50px",
                    background: "#FF8200",
                    borderRadius: "30px",
                    "&:hover": {
                      background: "rgba(255, 130, 0, 0.8)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#fff",
                      textTransform: "none",
                    }}
                  >
                    Create
                  </Typography>
                </Button>
              </Box>
            </Box>
            {/** What’s hot (Carousel) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: "32px",
              }}
            >
              <ExploreTitle
                className={classes.explorerHeadingMedia}
                title={"What’s hot"}
              />
              <Typography
                sx={{
                  fontFamily: "Inter !important",
                  fontStyle: "normal !important",
                  fontWeight: "700 !important",
                  fontSize: "16px !important",
                  lineHeight: "125% !important",
                  color: "#FF8200 !important",
                  height: "20px",
                  borderBottom: "1px solid #FF8200",
                  marginLeft: "auto",
                  marginRight: { xs: "0", sm: "156px" },
                  cursor: "pointer",
                }}
              >
                See all
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                marginBottom: "48px",
              }}
            >
              {WhatsHotMedia.length === 0 ? (
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    width: "100%",
                    height: "100%",
                    color: "#fff",
                    fontSize: "1em",
                    position: "relative",
                  }}
                >
                  List is empty
                </Typography>
              ) : (
                <Carousel
                  className={classes.carouselHomeMedia}
                  itemsToScroll={2}
                  itemsToShow={3}
                  enableMouseSwipe={true}
                  enableAutoPlay={false}
                  renderArrow={myArrow}
                  breakPoints={breakPoints}
                  outerSpacing={7}
                  pagination={false}
                >
                  {WhatsHotMedia.map((item, index) => (
                    <HomeNFTCard
                      handleNftLike={handleNftLike}
                      MyId={MyId}
                      key={item._id}
                      // handleModalOpen={handleModalOpen}
                      handleNFTSelected={setSelectedNFT}
                      regularNft={item}
                      // isProfile={MyProfilePicPrev}
                    />
                  ))}
                </Carousel>
              )}
            </Box>
            {/** Popular collection (Carousel) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: "32px",
              }}
            >
              <ExploreTitle
                className={classes.explorerHeadingMedia}
                title={"Popular collection"}
              />
              <Typography
                sx={{
                  fontFamily: "Inter !important",
                  fontStyle: "normal !important",
                  fontWeight: "700 !important",
                  fontSize: "16px !important",
                  lineHeight: "125% !important",
                  color: "#FF8200 !important",
                  height: "20px",
                  borderBottom: "1px solid #FF8200",
                  marginLeft: "auto",
                  marginRight: { xs: "0", sm: "156px" },
                  cursor: "pointer",
                }}
              >
                See all
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                marginBottom: "48px",
              }}
            >
              {WhatsHotMedia.length === 0 ? (
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    width: "100%",
                    height: "100%",
                    color: "#fff",
                    fontSize: "1em",
                    position: "relative",
                    // top: "-15px",
                  }}
                >
                  List is empty
                </Typography>
              ) : (
                <Carousel
                  className={classes.carouselHomeMedia}
                  itemsToScroll={2}
                  itemsToShow={3}
                  enableMouseSwipe={true}
                  enableAutoPlay={false}
                  renderArrow={myArrow}
                  breakPoints={breakPoints}
                  outerSpacing={7}
                  pagination={false}
                >
                  {WhatsHotMedia.map((item, index) => (
                    <HomeNFTCard
                      handleNftLike={handleNftLike}
                      MyId={MyId}
                      key={item._id}
                      handleModalOpen={() => {}}
                      regularNft={item}
                      handleNFTSelected={setSelectedNFT}
                      // isProfile={MyProfilePicPrev}
                    />
                  ))}
                </Carousel>
              )}
            </Box>
            {/** Finay app */}
            <Box
              sx={{
                position: "relative",
                zIndex: "0",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: { xs: "flex-end", md: "flex-start" },
                maxWidth: "1117px",
                width: "100%",
                height: { xs: "500px", sm: "620px", md: "402px" },
                padding: "0 49px 0 56px",
                borderRadius: "28px",
                whiteSpace: "nowrap",
                marginBottom: "48px",
                "&:before": {
                  content: "''",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "#2A2B2F",
                  opacity: "0.63",
                  borderRadius: "28px",
                  zIndex: "1",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: "2",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: { xs: "28px", sm: "36px" },
                      lineHeight: "140%",
                      letterSpacing: "0.2px",
                      color: "#fff",
                    }}
                  >
                    Download the
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: { xs: "28px", sm: "36px" },
                      lineHeight: "140%",
                      letterSpacing: "0.2px",
                      color: "#FF8200",
                      marginLeft: "8px",
                    }}
                  >
                    Finay app,
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: { xs: "28px", sm: "36px" },
                      lineHeight: "140%",
                      letterSpacing: "0.2px",
                      color: "#fff",
                    }}
                  >
                    track your
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: { xs: "28px", sm: "36px" },
                      lineHeight: "140%",
                      letterSpacing: "0.2px",
                      color: "#FF8200",
                      marginLeft: "8px",
                    }}
                  >
                    NFT
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "800",
                      fontSize: { xs: "28px", sm: "36px" },
                      lineHeight: "140%",
                      letterSpacing: "0.2px",
                      color: "#fff",
                      marginLeft: "8px",
                    }}
                  >
                    portfolio
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: { xs: "28px", sm: "36px" },
                    lineHeight: "140%",
                    letterSpacing: "0.2px",
                    color: "#fff",
                    marginBottom: "48px",
                  }}
                >
                  and discover drops.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      background: "transparent",
                      border: "1px solid #FFFFFF",
                      borderRadius: "8px",
                      padding: {
                        xs: "17px 17px 17px 16px",
                        sm: "17px 32px 17px 16px",
                      },
                      marginRight: "16px",
                      transition: "all 250ms ease",
                      "&:hover": {
                        background: "rgba(255, 130, 0, 0.8)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        background: `url(${AppstoreIcon})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        marginRight: "15px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: { xs: "14px", sm: "16px", lg: "18px" },
                        lineHeight: "160%",
                        letterSpacing: "0.2px",
                        color: "#fff",
                        textTransform: "none",
                      }}
                    >
                      App store
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      background: "transparent",
                      border: "1px solid #FFFFFF",
                      borderRadius: "8px",
                      padding: {
                        xs: "17px 17px 17px 16px",
                        sm: "17px 32px 17px 16px",
                      },
                      transition: "all 250ms ease",
                      "&:hover": {
                        background: "rgba(255, 130, 0, 0.8)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        background: `url(${GooglePlayIcon})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        marginRight: "15px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: { xs: "14px", sm: "16px", lg: "18px" },
                        lineHeight: "160%",
                        letterSpacing: "0.2px",
                        color: "#fff",
                        textTransform: "none",
                      }}
                    >
                      Google play
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  zIndex: "2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "space-between", lg: "flex-end" },
                  width: "100%",
                  height: { xs: "auto", md: "100%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    width: { xs: "auto", lg: "100%" },
                    height: { xs: "auto", md: "100%" },
                    marginRight: {
                      xs: "15px",
                      sm: "30px",
                      md: "0",
                      lg: "30px",
                    },
                    marginTop: { xs: "80px", sm: "30px", md: "0" },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "150px", sm: "300px", lg: "350px" },
                      height: { xs: "150px", sm: "300px", lg: "350px" },
                      background: `url(${PhonesImg})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "50% 0",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "186px",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100px", sm: "170px", lg: "186px" },
                      height: { xs: "100px", sm: "184px", lg: "200px" },
                      background: `url(${QRCode})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "50% 0",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: { xs: "12px", md: "20px" },
                      lineHeight: "140%",
                      letterSpacing: "0.2px",
                      color: "#fff",
                      textAlign: "center",
                      marginTop: "20px",
                      whiteSpace: "normal",
                    }}
                  >
                    Scan to download Finay app
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/** Most liked (Carousel) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: "32px",
              }}
            >
              <ExploreTitle
                className={classes.explorerHeadingMedia}
                title={"Most liked"}
              />
              <Typography
                sx={{
                  fontFamily: "Inter !important",
                  fontStyle: "normal !important",
                  fontWeight: "700 !important",
                  fontSize: "16px !important",
                  lineHeight: "125% !important",
                  color: "#FF8200 !important",
                  height: "20px",
                  borderBottom: "1px solid #FF8200",
                  marginLeft: "auto",
                  marginRight: { xs: "0", sm: "156px" },
                  cursor: "pointer",
                }}
              >
                See all
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                marginBottom: "48px",
              }}
            >
              {WhatsHotMedia.length === 0 ? (
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    width: "100%",
                    height: "100%",
                    color: "#fff",
                    fontSize: "1em",
                    position: "relative",
                    // top: "-15px",
                  }}
                >
                  List is empty
                </Typography>
              ) : (
                <Carousel
                  className={classes.carouselHomeMedia}
                  itemsToScroll={2}
                  itemsToShow={3}
                  enableMouseSwipe={true}
                  enableAutoPlay={false}
                  renderArrow={myArrow}
                  breakPoints={breakPoints}
                  outerSpacing={7}
                  pagination={false}
                >
                  {WhatsHotMedia.map((item, index) => (
                    <HomeNFTCard
                      handleNftLike={handleNftLike}
                      MyId={MyId}
                      key={item._id}
                      handleModalOpen={() => {}}
                      regularNft={item}
                      handleNFTSelected={setSelectedNFT}
                      // isProfile={MyProfilePicPrev}
                    />
                  ))}
                </Carousel>
              )}
            </Box>
            {/** Top artist */}
            <ExploreTitle
              className={classes.explorerHeadingMedia}
              title="Top artist"
            />
            <Box sx={{ width: "100%", marginBottom: "63px" }}>
              <Carousel
                className={classes.carouselTopArtist}
                itemsToScroll={4}
                itemsToShow={7}
                enableMouseSwipe={true}
                enableAutoPlay={false}
                renderArrow={myArrow}
                breakPoints={breakPointsTopArtist}
                outerSpacing={0}
                pagination={false}
              >
                {topArtists &&
                  topArtists.map((item, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "134px",
                            height: "134px",
                            padding: "3px",
                            borderRadius: "100%",
                            background:
                              "linear-gradient(180deg, #00FF82 0%, #FF8200 100%)",
                            transform: "rotate(-120deg)",
                          }}
                        >
                          <Box
                            sx={{
                              background: "#000",
                              width: "100%",
                              height: "100%",
                              borderRadius: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              style={{
                                backgroundImage: `url(${item?.user_img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                borderRadius: "100%",
                                width: "116px",
                                height: "116px",
                                transform: "rotate(120deg)",
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "Work Sans !important",
                            fontStyle: "normal !important",
                            fontWeight: "400 !important",
                            fontSize: "16px !important",
                            lineHeight: "125% !important",
                            color: "#fff !important",
                            letterSpacing: "0.2px",
                            marginTop: "10px",
                          }}
                        >
                          {item?.user_name}
                        </Typography>
                      </Box>
                    );
                  })}
              </Carousel>
            </Box>
            {/** Upcoming events (Carousel) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: "32px",
              }}
            >
              <ExploreTitle
                className={classes.explorerHeadingMedia}
                title={"Upcoming events"}
              />
              <Typography
                sx={{
                  fontFamily: "Inter !important",
                  fontStyle: "normal !important",
                  fontWeight: "700 !important",
                  fontSize: "16px !important",
                  lineHeight: "125% !important",
                  color: "#FF8200 !important",
                  height: "20px",
                  borderBottom: "1px solid #FF8200",
                  marginLeft: "auto",
                  marginRight: { xs: "0", sm: "156px" },
                  cursor: "pointer",
                }}
              >
                See all
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                marginBottom: "48px",
              }}
            >
              {upcomingEvents.length === 0 ? (
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    width: "100%",
                    height: "100%",
                    color: "#fff",
                    fontSize: "1em",
                    position: "relative",
                    // top: "-15px",
                  }}
                >
                  List is empty
                </Typography>
              ) : (
                <Carousel
                  className={classes.carouselUpcomingEvents}
                  itemsToScroll={2}
                  itemsToShow={3}
                  enableMouseSwipe={true}
                  enableAutoPlay={false}
                  renderArrow={myArrow}
                  breakPoints={breakPointsUpcomingEvents}
                  outerSpacing={7}
                  pagination={false}
                >
                  {upcomingEvents.map((item, index) => (
                    <UpcomingEventsCard
                      handleNftLike={handleNftLike}
                      MyId={MyId}
                      key={item._id}
                      handleModalOpen={() => {}}
                      regularNft={item}
                      // isProfile={MyProfilePicPrev}
                    />
                  ))}
                </Carousel>
              )}
            </Box>
            {/** Top selling (Carousel) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: "32px",
              }}
            >
              <ExploreTitle
                className={classes.explorerHeadingMedia}
                title={"Top selling"}
              />
              <Typography
                sx={{
                  fontFamily: "Inter !important",
                  fontStyle: "normal !important",
                  fontWeight: "700 !important",
                  fontSize: "16px !important",
                  lineHeight: "125% !important",
                  color: "#FF8200 !important",
                  height: "20px",
                  borderBottom: "1px solid #FF8200",
                  marginLeft: "auto",
                  marginRight: { xs: "0", sm: "156px" },
                  cursor: "pointer",
                }}
              >
                See all
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
              }}
            >
              {WhatsHotMedia.length === 0 ? (
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    width: "100%",
                    height: "100%",
                    color: "#fff",
                    fontSize: "1em",
                    position: "relative",
                    // top: "-15px",
                  }}
                >
                  List is empty
                </Typography>
              ) : (
                <Carousel
                  className={classes.carouselHomeMedia}
                  itemsToScroll={2}
                  itemsToShow={3}
                  enableMouseSwipe={true}
                  enableAutoPlay={false}
                  renderArrow={myArrow}
                  breakPoints={breakPoints}
                  outerSpacing={7}
                  pagination={false}
                >
                  {WhatsHotMedia.map((item, index) => (
                    <HomeNFTCard
                      handleNftLike={handleNftLike}
                      MyId={MyId}
                      key={item._id}
                      handleModalOpen={() => {}}
                      regularNft={item}
                      handleNFTSelected={setSelectedNFT}
                      // isProfile={MyProfilePicPrev}
                    />
                  ))}
                </Carousel>
              )}
            </Box>
          </>
        )}
      </Box>
      <GenreSelectDialog
        isGenreSelectOpne={isGenreSelectOpne}
        setGenreSelect={setGenreSelect}
      />
      <NFTDetailDialog
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        selectedNFT={selectedNFT}
        setSongUrl={setSongUrl}
        setSongDetails={setSongDetails}
        clickProfile={clickProfile}
        createCartHandle={createCartHandle}
        CreateWishlistHandle={CreateWishlistHandle}
        MyId={MyId}
        handleNftLike={handleNftLike}
        handleNftReport={handleNftReport}
      />
      <Box
        style={{
          width: "auto",
          position: "fixed",
          bottom: 200,
          left: 0,
          zIndex: 99,
        }}
      >
        <ChatComponent
          blur={blurStatus}
          modal={chatStatus}
          calendarModal={calendarStatus}
          chatModalState={modalStatus}
          createChat={true}
          setSongUrl={setSongUrl}
          setSongDetails={setSongDetails}
        />
      </Box>
      <style jsx="true">{`
        @media screen and (max-width: 768px) {
          .rec.rec-carousel-wrapper {
            width: 100%;
            margin: 0px;
          }
        }
      `}</style>
      <FooterComponent />
    </Box>
  );
};

export default HomeScreen;
