import axios from "../axios";

export const GetCart = async () => {
  const response = await axios.get("/api/cart/get_cart");
  return response?.data;
};
