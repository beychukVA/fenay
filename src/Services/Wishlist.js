import axios from "../axios";

export const CreateWishlist = async (id) => {
  // Update the formData object
  const response = await axios.post("/api/wishlist/add_item", {
    nft: {
      _id: id,
    },
  });
  return response?.data;
};

export const GetWishlist = async () => {
    const response = await axios.get("/api/wishlist/get_items");
    return response?.data;
  };

  export const DeleteWishlist = async (id) => {
    // Update the formData object
    const response = await axios.delete(
      `/api/wishlist/delete_item?itemId=${id}`
    );
    return response?.data;
  };