import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowLeftWhite from "../../../assets/ArrowLeftWhite.svg";
import FavoriteIcon from "../../../assets/FavoriteIcon.svg";
import PlayCircleIcon from "../../../assets/PlayCircleIcon.svg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Carousel, { consts } from "react-elastic-carousel";
import MediaExampleImg from "../../../assets/MediaExampleImg.png";
import MediaExampleImg2 from "../../../assets/MediaExampleImg2.png";
import MediaExampleImg3 from "../../../assets/MediaExampleImg3.png";
import ArtistIcon from "../../../assets/ArtistIcon.svg";
import { useStyles } from "../../../constant/customStyle";
import ExploreTitle from "./ExploreTitle";
import { HomeNFTCard } from "./HomeNFTCard";
import SongPlayer from "../../../component/SongPlayer";

const WhatsHotMedia = [
  {
    _id: "1",
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "1",
    imgFile: MediaExampleImg,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "2",
    imgFile: MediaExampleImg2,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
  {
    _id: "3",
    imgFile: MediaExampleImg3,
    song_name: "I Like me Better",
    album: "Frameworks",
    category: "GEMS",
    artist: { artist_name: "Reo Cragun", artist_icon: ArtistIcon },
    price: "2.45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum praesentium provident. Eos obcaecati voluptatem earum praesentium aspernatur beatae nobis recusandae fuga, in tenetur dignissimos incidunt! Distinctio officiis sequi vitae? Ducimus deserunt cupiditate provident voluptate odio maiores quibusdam at illo saepe sapiente tempore magni error, rerum fuga eos dicta nulla asperiores. Quam accusantium deserunt dicta maxime animi autem minus iure? Eos a expedita ex eum iste ipsa, tempore, magnam dignissimos non nulla totam amet, voluptatum aperiam. Repudiandae nemo facilis delectus fugiat aut tempora eveniet? Assumenda sint libero itaque eaque vero! Saepe, facere. Quisquam voluptatem dicta rem accusamus deleniti commodi nostrum iure, quod nesciunt provident facere officiis nihil optio odit placeat numquam est? Ducimus ratione exercitationem optio veritatis hic eaque commodi! Distinctio doloribus perferendis recusandae. Voluptatem earum architecto aut aliquam similique aliquid nam? Expedita quos quas, magnam, tenetur molestias assumenda vel veniam reiciendis molestiae, repudiandae quo laborum odio labore. At, ut. Ullam obcaecati fuga sunt explicabo tenetur commodi consequatur et reiciendis animi laudantium? Illo, quia voluptatem recusandae maxime non culpa repellendus neque sequi fuga, dolorum ullam vero modi et numquam dolorem? Minus odio saepe consectetur expedita earum, nam laborum reiciendis nulla quis dolores inventore commodi quidem repellat error magnam nesciunt? Facilis, sed autem hic natus mollitia ab deleniti expedita voluptatibus a? Aliquam ducimus dolore, maxime eveniet non, alias sunt maiores molestias aut vero ratione quidem dolor culpa. Suscipit est dolores, ratione atque accusantium nemo dicta at ut voluptatibus doloremque dolorum obcaecati! Illum fugiat vitae at maiores error hic repellendus itaque laborum. Possimus nemo unde, ex perspiciatis error rem excepturi, incidunt dolores dicta adipisci suscipit omnis pariatur eligendi rerum, maiores obcaecati tempore. Eaque autem ipsum nulla optio. Atque, vero? Quo voluptates reiciendis veniam facilis animi quibusdam eum harum error similique eaque, sapiente nostrum. Necessitatibus, rem sunt dolore reiciendis repellendus mollitia at quod.",
  },
];

export const NFTDetails = ({ nft, closeNftDetails }) => {
  const classes = useStyles();
  const [isSongPlayerOn, setSongPlayer] = useState(false);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const desc = [
    nft?.desc?.substring(0, (nft?.desc?.length / 2) | 0),
    nft?.desc?.substring((nft?.desc?.length / 2) | 0),
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "0",
          maxWidth: "1033px",
          width: "100%",
          height: "auto",
          borderRadius: "0px 0px 8px 8px",
          backgroundImage: `url(${nft?.imgFile})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
          padding: "43px 0 64px 0",
          marginBottom: "48px",
          "&:before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "1",
            width: "100%",
            height: "100%",
            backdropFilter: "blur(10px)",
            background: "rgba(0, 0, 0, 0.6)",
            borderRadius: "0px 0px 8px 8px",
          },
        }}
      >
        <Box
          onClick={() => closeNftDetails(null)}
          sx={{
            position: "relative",
            zIndex: "2",
            marginLeft: "24px",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer !important",
            color: "#fff",
            transition: "all 250ms ease",
            "&:hover": {
              color: "rgba(255, 255, 255, 0.8)",
            },
            "&:hover div": {
              background: "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              WebkitMask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
              mask: `url(${ArrowLeftWhite}) center center / 24px 24px no-repeat`,
              backgroundSize: "cover",
              transition: "all 250ms ease",
              background: "#fff",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "140%",
              color: "inherit",
              letterSpacing: "0.2px",
              marginLeft: "16px",
              transition: "all 250ms ease",
            }}
          >
            Back
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "350px", sm: "372px" },
              height: { xs: "300px", sm: "315px" },
              backgroundImage: `url(${nft?.imgFile})`,
              backgroundSize: "cover",
              backgroundPosition: "100% 100%",
              backgroundRepeat: "no-repeat",
              marginTop: { xs: "20px", sm: "0" },
              marginBottom: "32px",
              borderRadius: "8px",
            }}
          >
            <Box
              onClick={() => setSongPlayer(true)}
              sx={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                WebkitMask: `url(${PlayCircleIcon}) center center / 84px 84px no-repeat`,
                mask: `url(${PlayCircleIcon}) center center / 84px 84px no-repeat`,
                cursor: "pointer",
                transition: "all 250ms ease",
                "&:not(:hover)": {
                  transform: "scale(1)",
                  background: "#fff",
                },
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "#FF8200",
                },
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "150%",
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            {nft?.song_name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "160%",
              color: "#fff",
              marginBottom: "32px",
            }}
          >
            {nft?.artist?.artist_name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              sx={{
                width: "158px",
                height: "52px",
                padding: "16px auto",
                background: "transparent",
                border: "1px solid #FFFFFF",
                borderRadius: "30px",
                marginRight: "32px",
                transition: "all 250ms ease",
                "&:hover": {
                  background: "rgba(255, 130, 0, 0.8)",
                },
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: `url(${FavoriteIcon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  marginRight: "8px",
                }}
              />
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
                Favorite
              </Typography>
            </Button>
            <Button
              sx={{
                width: "158px",
                height: "52px",
                padding: "16px auto",
                background: "#FF8200",
                borderRadius: "30px",
                transition: "all 250ms ease",
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
                  color: "#2B2B2B",
                  textTransform: "none",
                }}
              >
                Buy now
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "150%",
            color: "#fff",
            marginBottom: "24px",
          }}
        >
          About this NFT
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            marginBottom: "48px",
          }}
        >
          {/** Left Desc */}
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "150%",
              color: "rgba(255, 255, 255, 0.85)",
              marginRight: "17px",
              width: "550px",
            }}
          >
            {desc[0]}
          </Typography>
          {/** Right Desc */}
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "150%",
              color: "rgba(255, 255, 255, 0.85)",
              width: "550px",
            }}
          >
            {desc[1]}
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "1117px",
            width: "100%",
            height: "1px",
            background: "#515151",
            marginBottom: "48px",
          }}
        />
      </Box>
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
          title={"More from the artist"}
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
                // handleNftLike={handleNftLike}
                // MyId={MyId}
                key={index}
                handleModalOpen={() => {}}
                regularNft={item}
                // isProfile={MyProfilePicPrev}
              />
            ))}
          </Carousel>
        )}
      </Box>
      {isSongPlayerOn && <SongPlayer SongDetails={nft} />}
    </Box>
  );
};
