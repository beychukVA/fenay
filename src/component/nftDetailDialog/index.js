import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useStyles } from "../../constant/customStyle";
import { MdReport } from "react-icons/md";

const dummyImage =
  "https://finay-music-bucket.s3.eu-central-1.amazonaws.com/9ad061bc-d2d5-4b24-8bad-33e999c581ff.png";

const NFTDetailDialog = ({
  modalOpen,
  handleModalClose,
  selectedNFT,
  setSongUrl,
  setSongDetails,
  clickProfile,
  createCartHandle,
  CreateWishlistHandle,
  MyId,
  handleNftLike,
  handleNftReport,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      classes={{ paper: classes.paper }}
      open={modalOpen}
      onClose={handleModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: 20,
          backgroundColor: "#1D1D1D",
          border: "3px solid #434343",
          maxWidth: "971px",
        },
      }}
    >
      {console.log("SELECTED NFT", selectedNFT)}
      <DialogContent sx={{ padding: "40px" }}>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "201px",
                height: "201px",
                position: "relative",
                background: `url(${selectedNFT?.imgFile})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  textAlign: "center",
                  width: "100%",
                  display: "flex",
                  left: "10px",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={() => {
                    setSongUrl(selectedNFT.audioFile);
                    setSongDetails({
                      artist: selectedNFT.artist,
                      title: selectedNFT.album,
                      thumbnail: selectedNFT?.imgFile,
                      isPurchased: false,
                    });
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    padding: 0,
                    marginRight: "10px",
                  }}
                >
                  <BsPlayCircle
                    style={{ color: "#FF1C51", fontSize: "40px" }}
                  />
                </IconButton>
              </Box>
            </Box>
            <CloseIcon
              onClick={handleModalClose}
              sx={{
                cursor: "pointer",
                fontSize: "24px",
                fontWeight: "600",
                fontFamily: "inter",
                color: "#fff",
                position: "absolute",
                top: "3px",
                right: "14px",
              }}
            />
            <Box
              sx={{
                marginLeft: "42px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "inter",
                    color: "#fff",
                  }}
                >
                  {selectedNFT?.album}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "7px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "inter",
                    color: "#fff",
                  }}
                >
                  Author
                </Typography>
                <Box
                  onClick={() => clickProfile(selectedNFT?.ownerId)}
                  sx={{
                    width: "44px",
                    height: "44px",
                    margin: "0px 13px 0px 27px",
                    background: `url(${
                      selectedNFT?.user?.user_img
                        ? selectedNFT?.user?.user_img
                        : dummyImage
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "100%",
                    cursor: "pointer",
                  }}
                ></Box>
                <Typography
                  onClick={() => clickProfile(selectedNFT?.ownerId)}
                  sx={{
                    fontSize: "16px",
                    fontFamily: "inter",
                    color: "rgba(255,255,255,0.50)",
                    cursor: "pointer",
                  }}
                >
                  {/* {selectedNFT?.artist} */}
                  {selectedNFT?.artist?.artist_name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "7px",
                }}
              >
                <Box sx={{ marginRight: "16px" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: "inter",
                      color: "rgba(255,255,255,0.50)",
                    }}
                  >
                    Price:
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontFamily: "inter",
                    color: "#fff",
                  }}
                >
                  $ {selectedNFT?.price}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "7px",
                }}
              >
                <Box sx={{ marginRight: "16px" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: "inter",
                      color: "rgba(255,255,255,0.50)",
                    }}
                  >
                    Format:
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontFamily: "inter",
                    color: "#fff",
                  }}
                >
                  {
                    selectedNFT?.audioFile?.split(".")[
                      selectedNFT?.audioFile?.split(".").length - 1
                    ]
                  }
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "7px",
                }}
              >
                <Box sx={{ marginRight: "16px" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: "inter",
                      color: "rgba(255,255,255,0.50)",
                    }}
                  >
                    Available Quantity:
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontFamily: "inter",
                    color: "#fff",
                  }}
                >
                  {selectedNFT?.availableQuantity}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ margin: "32px 0" }}>
            <Typography
              sx={{
                fontSize: "17px",
                fontFamily: "inter",
                color: "rgba(255,255,255,0.50)",
              }}
            >
              {selectedNFT?.desc}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {selectedNFT?.type === "regular" &&
              selectedNFT?.user?.paypal_id && (
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Button
                    variant="contained"
                    onClick={() => createCartHandle(selectedNFT?._id)}
                    sx={{
                      backgroundColor: "#FF1C51",
                      padding: "10px 30px",
                      borderRadius: "30px",
                      fontFamily: "inter",
                      textTransform: "capitalize",
                      fontSize: "20px",
                      fontWeight: "400",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#FF1C51 !important",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Add to Cart &nbsp; <AiOutlineShoppingCart />
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => CreateWishlistHandle(selectedNFT?._id)}
                    sx={{
                      marginLeft: "20px",
                      backgroundColor: "#FF1C51",
                      padding: "10px 25px",
                      borderRadius: "30px",
                      fontFamily: "inter",
                      textTransform: "capitalize",
                      fontSize: "20px",
                      fontWeight: "400",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#FF1C51 !important",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Add to wishlist &nbsp; <AiOutlineShoppingCart />
                  </Button>
                </Box>
              )}

            <Box>
              {selectedNFT?.likes?.includes(MyId) ? (
                <FavoriteIcon
                  onClick={() => handleNftLike(false, selectedNFT._id)}
                  style={{ fontSize: "25px", color: "#FF1C51" }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={() => handleNftLike(true, selectedNFT._id)}
                  style={{ fontSize: "25px", color: "#FF1C51" }}
                />
              )}
              <MdReport
                onClick={() => handleNftReport(selectedNFT._id)}
                style={{
                  fontSize: "25px",
                  color: "#FF1C51",
                  marginLeft: "10px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
      {/* <IconButton onClick={handleModalClose} className={classes.customizedButton}>
          <CloseIcon fontSize={"large"} />
        </IconButton> */}
    </Dialog>
  );
};

export default NFTDetailDialog;
