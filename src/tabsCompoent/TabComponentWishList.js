import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import CustomWishListCard from "../component/WishListCard";
import imageAuthor from "../assets/Rectangle12.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DeleteWishlist, GetWishlist } from "../Services/Wishlist";

const TabComponentWishList = ({ modalState }) => {
  const [WislistData, setWislistData] = useState([]);

  useEffect(() => {
    const response = GetWishlist();
    response?.data?.items?.length > 0
      ? setWislistData(response.data.items)
      : setWislistData([]);
  }, [WislistData]);

  const deleteCartHandle = async (id) => {
    const res = await DeleteWishlist(id);
    const response = await GetWishlist();
    response?.data?.items?.length > 0
      ? setWislistData(response.data.items)
      : setWislistData([]);
    return res;
  };

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {WislistData.length === 0 && (
          <Typography
            style={{
              width: "100%",
              fontSize: "1.2em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            No items in Wishlist
          </Typography>
        )}
        {WislistData.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <CustomWishListCard
              author={item.artist}
              description={item?.album}
              image={item.imgFile ? item.imgFile : imageAuthor}
              price={item.price}
            />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ marginTop: 2 }}
            >
              {/*<CssButton variant="contained" size='small' className={classes.bidButton}> Bid Now </CssButton> */}
              <IconButton
                onClick={() => deleteCartHandle(item.itemId)}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <DeleteOutlineIcon sx={{ color: "#FF1C51" }} />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Box sx={{ marginBottom: 5, marginTop: 5 }}>
        <Button
          variant="text"
          className={classes.closeButton}
          onClick={onClose}
        >
          Close
        </Button>
      </Box> */}
    </>
  );
};

export default TabComponentWishList;
