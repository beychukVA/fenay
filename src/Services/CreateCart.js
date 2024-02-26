import axios from "../axios";

export const CreateCart = async (id) => {
  // Update the formData object
  const response = await axios.post("/api/cart/create_cart", {
    nft: {
      _id: id,
    },
  });
  return response?.data;
};
