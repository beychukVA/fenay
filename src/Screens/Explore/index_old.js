import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import ChatComponent from "../../component/Chat";
import HeaderComponent from "../../component/Header";
import { useStyles } from "../../constant/customStyle";
import { parseJwt } from "../../helpers/getId";
import { show_success } from "../../helpers/toast";
import { CreateCart } from "../../Services/CreateCart";
import { GetRegularSongNFTs, LikeDislikeNft } from "../../Services/Nfts";
import { GetAllUsers, GetUser } from "../../Services/User";
import { CreateWishlist } from "../../Services/Wishlist";
import ExploreTitle from "../Home/components/ExploreTitle";
import NFTCard from "../../component/nftCard";
import NFTDetailDialog from "../../component/nftDetailDialog";

import CustomTabsComponent from "../../component/Tabs";

import testImg from "../../assets/genre/Pop.png";
import Rock from "../../assets/genre/Rock.png";
import Pop from "../../assets/genre/Pop.png";
import Jazz from "../../assets/genre/Jazz.png";
import SingerSongwriter from "../../assets/genre/SingerSongwriter.png";
import Alternative from "../../assets/genre/Alternative.png";
import Indie from "../../assets/genre/Indie.png";
import Fusion from "../../assets/genre/Fusion.png";
import Metal from "../../assets/genre/Metal.png";
import Punk from "../../assets/genre/Punk.png";
import Blues from "../../assets/genre/Blues.png";
import Country from "../../assets/genre/Country.png";
import Folk from "../../assets/genre/Folk.png";
import Instrumental from "../../assets/genre/Instrumental.png";
import Classical from "../../assets/genre/Classical.png";
import HipHop from "../../assets/genre/HipHop.png";
import Funk from "../../assets/genre/Funk.png";
import RB from "../../assets/genre/R&B.png";
import EDM from "../../assets/genre/EDM.png";
import Latin from "../../assets/genre/Latin.png";
import KPop from "../../assets/genre/K-Pop.png";
import Desi from "../../assets/genre/Bollywood.png";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const nftGenre = [
  { title: "Rock", value: "rock", thumbnail: Rock },
  { title: "Pop", value: "pop", thumbnail: Pop },
  { title: "Jazz", value: "jazz", thumbnail: Jazz },
  {
    title: "SingerSongwriter",
    value: "singer songwriter",
    thumbnail: SingerSongwriter,
  },
  { title: "Alternative", value: "alternative", thumbnail: Alternative },
  { title: "Indie", value: "indie", thumbnail: Indie },
  { title: "Fusion", value: "fusion", thumbnail: Fusion },
  { title: "Metal", value: "metal", thumbnail: Metal },
  { title: "Punk", value: "punk", thumbnail: Punk },
  { title: "Blues", value: "blues", thumbnail: Blues },
  { title: "Country", value: "country", thumbnail: Country },
  { title: "Folk", value: "folk", thumbnail: Folk },
  { title: "Instrumental", value: "instrumental", thumbnail: Instrumental },
  { title: "Classical", value: "classical", thumbnail: Classical },
  { title: "Hip-Hop", value: "hip-hop", thumbnail: HipHop },
  { title: "Funk", value: "funk", thumbnail: Funk },
  { title: "R&B", value: "r&b", thumbnail: RB },
  { title: "EDM", value: "edm", thumbnail: EDM },
  { title: "Latin", value: "katin", thumbnail: Latin },
  { title: "K-Pop", value: "k-pop", thumbnail: KPop },
  { title: "Desi", value: "desi", thumbnail: Desi },
];

const ExplorerScreen = ({ setSongUrl, setSongDetails }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [Artists, setArtists] = useState([]);
  const [allRegularNFTs, setAllRegularNFTs] = useState([]);
  const [regularNfts, setregularNfts] = useState([]);
  const [accessNfts, setaccessNfts] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);

  const [artistLoading, setArtistLoading] = useState(false);
  const [regularLoading, setRegularLoading] = useState(false);
  const [MyId, setMyId] = useState();

  const [menuSelected, setMenuSelected] = useState({ title: "Rock", index: 0 });

  const blurStatus = () => {
    setOpen(!open);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];

  const breakPoints1 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <KeyboardArrowLeftIcon sx={{ color: "#FF1C51", fontSize: "36px" }} />
      ) : (
        <KeyboardArrowRightIcon sx={{ color: "#FF1C51", fontSize: "36px" }} />
      );
    return (
      <Button
        style={isEdge ? { visibility: "hidden" } : {}}
        onClick={onClick}
        disabled={isEdge}
        sx={{ minWidth: "10px", padding: 0 }}
      >
        {pointer}
      </Button>
    );
  };

  const clickProfile = (id) => {
    navigate("/profile?id=" + id);
    // window.location.reload();
  };

  const handleModalOpen = (item) => {
    setSelectedNFT(item);
    setModalOpen(true);
    setOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setOpen(false);
  };

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
    if (res2) {
      setAllRegularNFTs(res2);
      let finalRegularNFTs = {};
      nftGenre.map((genre) => {
        finalRegularNFTs[genre.title] = res2.filter(
          (a) => a.genre.toLowerCase() === genre.title.toLowerCase()
        );
      });
      setRegularLoading(false);
      setregularNfts(finalRegularNFTs);
    }
  };

  const createCartHandle = async (id) => {
    const res = await CreateCart(id);
    show_success("NFT added to cart!");
    return res;
  };

  const CreateWishlistHandle = async (id) => {
    const res = await CreateWishlist(id);
    show_success("NFT added to wishlist!");
    return res;
  };

  useEffect(() => {
    document.title = "Explorer | Finay";
    fetchUsers();
    fetchNfts();
  }, []);

  const handleNftLike = async (liked, id) => {
    setSelectedNFT({
      ...selectedNFT,
      likes: selectedNFT.likes.includes(MyId) ? [] : [MyId],
    });
    const res = await LikeDislikeNft({ id });
    // res && setSelectedNFT({...selectedNFT , likes : res.likes})
    res && fetchNfts();
  };

  const ForYouComponent = () => {
    return (
      <Box className={classes.exploreBox}>
        <ExploreTitle spacing={0} title="Artists" />
        <br />
        <Box className={classes.explorerBottom}>
          <Carousel
            itemsToScroll={1}
            enableAutoPlay={false}
            renderArrow={myArrow}
            breakPoints={breakPoints}
            enableMouseSwipe={false}
            pagination={false}
          >
            {artistLoading && (
              <CircularProgress sx={{ color: "#FF1C51" }}></CircularProgress>
            )}
            {Artists.map((artist, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.16)",
                  padding: "30px 35px",
                  borderRadius: "19px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(25,25,25,0.35)",
                  },
                }}
                onClick={() => clickProfile(artist._id)}
              >
                <Box
                  sx={{
                    width: "110px",
                    position: "relative",
                    textAlign: "center",
                    height: "110px",
                    background: `url(${
                      artist.profilePicture ? artist.profilePicture : dummyImage
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "100%",
                    textAlign: "center",
                    marginBottom: "0.4em",
                  }}
                >
                  {/* <Box className={classes.online1} /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography className={classes.userName}>
                    {artist.name
                      ? artist.name.length > 10
                        ? artist.name.slice(0, 10) + "..."
                        : artist.name
                      : artist.email.length > 10
                      ? artist.email.slice(0, 10) + "..."
                      : artist.email}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
        <ExploreTitle spacing={0} title={"Songs"} />
        <Box className={classes.explorerBottom}>
          <br />
          {regularLoading && (
            <CircularProgress sx={{ color: "#FF1C51" }}></CircularProgress>
          )}

          <>
            <Carousel
              enableMouseSwipe={false}
              itemsToScroll={1}
              enableAutoPlay={false}
              renderArrow={myArrow}
              breakPoints={breakPoints1}
              itemPadding={[0, 20]}
              outerSpacing={-5}
              pagination={false}
            >
              {allRegularNFTs.map((regularNft, index) => {
                return (
                  <NFTCard
                    handleNftLike={handleNftLike}
                    MyId={MyId}
                    key={index}
                    handleModalOpen={handleModalOpen}
                    regularNft={regularNft}
                  />
                );
              })}
            </Carousel>
          </>
        </Box>
        <br />
        <Box className={classes.dividerClass}>
          <Divider
            sx={{ background: "#FF1C51", height: 2, borderRadius: 20 }}
          />
        </Box>
      </Box>
    );
  };

  const GenresComponent = () => {
    return (
      <Box className={classes.exploreBox}>
        <Carousel
          itemsToScroll={1}
          enableAutoPlay={false}
          renderArrow={myArrow}
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 1 },
            { width: 768, itemsToShow: 4 },
            { width: 1200, itemsToShow: 4 },
          ]}
          enableMouseSwipe={false}
          pagination={false}
          initialActiveIndex={menuSelected.index}
        >
          {nftGenre.map((genre, i) => (
            <Box
              key={i}
              onClick={() => setMenuSelected({ title: genre.title, index: i })}
              sx={{
                backgroundImage: `url('${genre.thumbnail}')`,
                width: "240px",
                height: "150px",
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          ))}
        </Carousel>
        <Box>
          {regularNfts.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "150px",
                alignItems: "center",
              }}
            >
              <CircularProgress sx={{ color: "#FF1C51" }}></CircularProgress>
            </div>
          ) : regularNfts[menuSelected.title].length > 0 ? (
            <>
              <br />
              <ExploreTitle spacing={0} title={menuSelected.title} />
              <Carousel
                enableMouseSwipe={false}
                itemsToScroll={1}
                enableAutoPlay={false}
                renderArrow={myArrow}
                breakPoints={breakPoints1}
                itemPadding={[0, 20]}
                outerSpacing={-5}
                pagination={false}
              >
                {regularNfts[menuSelected.title].map((regularNft, index) => {
                  return (
                    <NFTCard
                      handleNftLike={handleNftLike}
                      MyId={MyId}
                      key={index}
                      handleModalOpen={handleModalOpen}
                      regularNft={regularNft}
                    />
                  );
                })}
              </Carousel>
            </>
          ) : (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ height: "200px", padding: "1em 0em" }}
            >
              <ExploreTitle title="No Songs in this Genre" />
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  const exploreTabs = [
    {
      name: "For you",
      value: "1",
    },
    {
      name: "Genres",
      value: "2",
    },
  ];

  const tabsPanelCommunity = [
    {
      component: <ForYouComponent />,
      value: "1",
    },
    {
      component: <GenresComponent />,
      value: "2",
    },
  ];

  return (
    <Box sx={{ position: "relative" }} className={open ? classes.blur : ""}>
      <HeaderComponent
        style={{ position: "fixed" }}
        setSongUrl={setSongUrl}
        setSongDetails={setSongDetails}
      />
      <Container
        maxWidth="lg"
        className={classes.exploreContainer}
        sx={{ marginBottom: "150px" }}
      >
        <CustomTabsComponent
          tabs={exploreTabs}
          tabsPanel={tabsPanelCommunity}
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
            setSongDetails={setSongDetails}
            setSongUrl={setSongUrl}
          />
        </Box>
      </Container>
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
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
      />
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .rec.rec-carousel-wrapper {
            width: 100%;
            margin: 0px;
          }
        }
      `}</style>
    </Box>
  );
};

export default ExplorerScreen;
