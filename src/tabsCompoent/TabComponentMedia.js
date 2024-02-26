import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useStyles } from "../constant/customStyle";
import { LikeDislikeNft } from "../Services/Nfts";
import ExploreTitle from "../Screens/Home/components/ExploreTitle";
import NFTCard from "../component/nftCard";
import Royalty from "../component/Royalty";
import Carousel, { consts } from "react-elastic-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MediaExampleImg from "../assets/MediaExampleImg.png";
import MediaExampleImg2 from "../assets/MediaExampleImg2.png";
import MediaExampleImg3 from "../assets/MediaExampleImg3.png";
import ArtistIcon from "../assets/ArtistIcon.svg";

const MediaExample = [
  {
    _id: "1",
    imgFile: MediaExampleImg,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "1",
    imgFile: MediaExampleImg,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
];

const MostPopularExample = [
  {
    _id: "1",
    imgFile: MediaExampleImg,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "1",
    imgFile: MediaExampleImg,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    album: "Frameworks",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "$13.99",
  },
];

const TabComponentMedia = ({
  Media,
  RegularMedia,
  Name,
  setSongUrl,
  MyProfilePicPrev,
  setSongDetails,
  getMyNfts,
  MyId,
  isMyProfile,
}) => {
  const [value, setValue] = useState(1);
  const classes = useStyles();
  const [royaltyModal, setRoyaltyModal] = useState(false);
  const [selectedNft, setSelectedNft] = useState("");
  const [selectedNftPrice, setSelectedNftPrice] = useState("");
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
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
        onClick={onClick}
        disabled={isEdge}
        sx={{
          position: "absolute",
          [pos]: "40px",
          top: "139px",
          zIndex: "1",
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

  const handleNftLike = async (id) => {
    // setSelectedNFT({...selectedNFT , likes : selectedNFT.likes.includes(MyId) ? [] : [MyId] })
    const res = await LikeDislikeNft({ id });
    res && getMyNfts();
  };

  const handleRoyaltyModal = (item) => {
    setSelectedNft(item);
    setRoyaltyModal(true);
  };

  return (
    <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Royalty
        isMyProfile={isMyProfile}
        selectedNft={selectedNft}
        setSelectedNft={setSelectedNft}
        selectedNftPrice={selectedNftPrice}
        setSelectedNftPrice={setSelectedNftPrice}
        royaltyModal={royaltyModal}
        setRoyaltyModal={setRoyaltyModal}
      />
      <Box
        sx={{
          width: "100%",
          height: { xs: "85vh", md: "90vh" },
          overflow: "auto",
          paddingRight: "10px",
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
              cursor: "pointer",
            }}
          >
            See all
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "87px" }}>
          {MediaExample.length === 0 ? (
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                width: "100%",
                height: "100%",
                color: "#fff",
                fontSize: "1em",
                position: "relative",
                // top: "-15px",
              }}
            >
              No Exclusive Songs Created Yet
            </Typography>
          ) : (
            <Carousel
              className={classes.carouselMedia}
              itemsToScroll={2}
              itemsToShow={3}
              enableMouseSwipe={true}
              enableAutoPlay={false}
              renderArrow={myArrow}
              breakPoints={breakPoints}
              outerSpacing={7}
              pagination={false}
            >
              {MediaExample.map((item, index) => (
                <NFTCard
                  handleNftLike={handleNftLike}
                  MyId={MyId}
                  key={index}
                  handleModalOpen={() => {}}
                  regularNft={item}
                  isProfile={MyProfilePicPrev}
                />
              ))}
            </Carousel>
          )}
        </Box>
        <br />
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
            title={"Most popular"}
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
              cursor: "pointer",
            }}
          >
            See all
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "87px" }}>
          {MostPopularExample.length === 0 ? (
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                width: "100%",
                height: "100%",
                color: "#fff",
                fontSize: "1em",
                position: "relative",
                // top: "-15px",
              }}
            >
              No Songs For Market Created Yet
            </Typography>
          ) : (
            <Carousel
              className={classes.carouselMedia}
              itemsToScroll={2}
              itemsToShow={3}
              enableMouseSwipe={true}
              enableAutoPlay={false}
              renderArrow={myArrow}
              breakPoints={breakPoints}
              outerSpacing={7}
              pagination={false}
            >
              {MostPopularExample.map((item, index) => (
                <NFTCard
                  handleNftLike={handleNftLike}
                  MyId={MyId}
                  key={index}
                  handleModalOpen={() => {}}
                  regularNft={item}
                  isProfile={MyProfilePicPrev}
                />
              ))}
            </Carousel>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TabComponentMedia;
