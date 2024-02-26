import axios from "../axios";

export const DeleteCart = async (id) => {
  // Update the formData object
  const response = await axios.delete(
    `/api/cart/delete_cart_item?itemId=${id}`
  );
  return response?.data;
};
