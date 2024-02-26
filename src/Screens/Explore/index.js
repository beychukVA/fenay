import React, { useState } from "react";
import { useStyles } from "../../constant/customStyle";
import { styled } from "@mui/material/styles";
import HeaderComponent from "../../component/Header";
import FooterComponent from "../../component/Footer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Carousel, { consts } from "react-elastic-carousel";
import {
  Box,
  useMediaQuery,
  TextField,
  Autocomplete,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import IconSearch from "../../assets/IconSearch.svg";
import BiPassIcon from "../../assets/BiPassIcon.svg";
import RecommendedSongsIconExample from "../../assets/RecommendedSongsIconExample.svg";
import MediaExampleImg from "../../assets/MediaExampleImg.png";
import MediaExampleImg2 from "../../assets/MediaExampleImg2.png";
import MediaExampleImg3 from "../../assets/MediaExampleImg3.png";
import ArtistIcon from "../../assets/ArtistIcon.svg";
import ExploreTitle from "../Home/components/ExploreTitle";
import { UpcomingEventsCard } from "../Home/components/UpcomingEventsCard";
import { HomeNFTCard } from "../Home/components/HomeNFTCard";
import { RecommendedSongsCard } from "./components/RecommendedSongsCard";
import { BackstagePassDialog } from "./components/BackstagePassDialog";

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "#fff",
  input: {
    color: "#fff",
  },
  ".MuiSvgIcon-root": {
    color: "#fff",
  },
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    padding: "20px 10px 20px 20px",
    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
  },
}));

const tabs = [
  {
    id: 1,
    name: "For you",
  },
  {
    id: 2,
    name: "Trending",
  },
  {
    id: 3,
    name: "Genre",
  },
  {
    id: 4,
    name: "Album",
  },
  {
    id: 5,
    name: "Artist",
  },
];

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
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Billie Eilish",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Salud Subira",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Billie Eilish",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Salud Subira",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Drake",
  },
  {
    id: Math.random(),
    user_img: dummyImage,
    user_name: "Drake",
  },
];

const recommendedSongs = [
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
  {
    id: Math.random(),
    icon: RecommendedSongsIconExample,
    name: "See You Again ft.",
    artist: "Wiz Khalifa - Charlie Puth",
    duration: "04:04 mn",
    price: "$1.99",
  },
];

export const ExplorePage = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [inputAssetsValue, setInputAssetsValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [searchedAssets, setsearchedAssets] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [openAssetsSearch, setOpenAssetsSearch] = useState(false);
  const [isOpenAssetSearch, setOpenAssetSearch] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [MyId, setMyId] = useState();
  // eslint-disable-next-line no-unused-vars
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [isBackstagePassDialogOpen, setBackstagePassDialogOpen] =
    useState(true);

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

  const handleInputAssetsChange = async (event, newInputValue) => {
    if (newInputValue !== "undefined") {
      setInputAssetsValue(newInputValue);
    }
  };

  const handleSelectAsset = (option) => {};

  const handleAssetsOpen = () => setOpenAssetsSearch(true);
  const handleAssetsSearchOpen = () => setOpenAssetSearch(true);
  const handleAssetsSearchClose = () => {
    setInputAssetsValue("");
    setOpenAssetSearch(false);
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
        // setSongUrl={setSongUrl}
        // setSongDetails={setSongDetails}
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
        {/** Tabs */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "'center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "48px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: { xs: "16px", md: "0" },
            }}
          >
            {tabs?.map((tab) => (
              <Button
                key={tab.id}
                sx={{
                  border: "1px solid #FF8200",
                  borderRadius: "40px",
                  padding: "10px 18px",
                  marginTop: { xs: "16px", md: "0" },
                  "&:not(:first-of-type)": {
                    marginLeft: "16px",
                  },
                  "&:hover": {
                    background: "rgba(255, 130, 0, 1)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#FDFEFA",
                    textTransform: "none",
                  }}
                >
                  {tab?.name}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: { xs: "auto", sm: "0" },
              marginRight: { sm: "0", lg: "162px" },
            }}
          >
            <Autocomplete
              sx={{
                border: isOpenAssetSearch ? "1px solid #515151" : "none",
                borderRadius: "4px",
                width: isOpenAssetSearch ? "265px" : "55px",
                transition: "width 500ms ease",
              }}
              onBlur={() => handleAssetsSearchClose()}
              onFocus={() => handleAssetsSearchOpen()}
              id="combo-box-demo"
              open={openAssetsSearch}
              onOpen={handleAssetsOpen}
              onClose={() => setOpenAssetsSearch(false)}
              inputValue={inputAssetsValue}
              onInputChange={handleInputAssetsChange}
              options={searchedAssets}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box
                  onClick={() => handleSelectAsset(option)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1em",
                    cursor: "pointer",
                    background: "#1d1d1d",
                    color: "#fff",
                    borderBottom: "solid 1px #3d3d3d",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "1em",
                      color: "#fff",
                    }}
                  >
                    {option?.value}
                  </div>
                </Box>
              )}
              freeSolo
              renderInput={(params) => (
                <StyledInputBase
                  {...params}
                  placeholder={`${isOpenAssetSearch ? "Search..." : ""}`}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          onClick={() => handleAssetsSearchOpen()}
                          src={IconSearch}
                          sx={{
                            width: "24px",
                            height: "24px",
                            WebkitMask: `url(${IconSearch}) center center / 24px 24px no-repeat`,
                            mask: `url(${IconSearch}) center center / 24px 24px no-repeat`,
                            backgroundSize: "cover",
                            transition: "all 500ms ease",
                            "&": {
                              background: "#fff !important",
                            },
                            marginTop: isOpenAssetSearch ? "0" : "20px",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>
        </Box>
        {/** Upcoming events */}
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
            marginBottom: "84px",
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
                  //   handleNftLike={handleNftLike}
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
            marginBottom: "84px",
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
                  //   handleNftLike={handleNftLike}
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
            marginBottom: "84px",
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
                  //   handleNftLike={handleNftLike}
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
        <Box sx={{ width: "100%", marginBottom: "84px" }}>
          <Carousel
            className={classes.carouselTopArtistExplore}
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
              topArtists.map((item) => {
                return (
                  <Box
                    key={item.id}
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
                        minWidth: "134px",
                        minHeight: "134px",
                        maxWidth: "134px",
                        maxHeight: "134px",
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
                        marginBottom: "21px",
                      }}
                    >
                      {item?.user_name}
                    </Typography>
                    <Button
                      sx={{
                        background: "#FF8200",
                        padding: "10px",
                        border: "1px solid #FF8200",
                        borderRadius: "30px",
                        transition: "all 250ms ease",
                        "&:hover": {
                          background: "rgba(255, 130, 0, 0.8)",
                        },
                      }}
                    >
                      <Box
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundImage: `url(${BiPassIcon})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "4px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Work Sans !important",
                          fontStyle: "normal !important",
                          fontWeight: "500 !important",
                          fontSize: "14px !important",
                          lineHeight: "140% !important",
                          color: "#fff !important",
                          letterSpacing: "0.2px",
                          textTransform: "none",
                        }}
                      >
                        Backstage
                      </Typography>
                    </Button>
                  </Box>
                );
              })}
          </Carousel>
        </Box>
        {/** Recommended Songs */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "954px",
          }}
        >
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
              title={"Recommended Songs"}
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
                whiteSpace: "nowrap",
                // marginRight: { xs: "0", sm: "156px" },
                cursor: "pointer",
              }}
            >
              See all
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "396px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                paddingRight: { xs: "0", sm: "5px" },
                marginLeft: { xs: "0", sm: "-16px" },
                marginTop: "-24px",
                height: "100%",
                width: "100%",
                overflow: "auto",
              }}
            >
              {recommendedSongs?.length === 0 ? (
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
                recommendedSongs?.map((song) => (
                  <RecommendedSongsCard key={song.id} song={song} />
                ))
              )}
            </Box>
          </Box>
        </Box>
        <BackstagePassDialog
          isBackstagePassDialogOpen={isBackstagePassDialogOpen}
          setBackstagePassDialogOpen={setBackstagePassDialogOpen}
        />
      </Box>
      <FooterComponent />
    </Box>
  );
};
