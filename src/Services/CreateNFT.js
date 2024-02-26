import axios from "../axios";

export const CreateNFT = async (data) => {
  const formData = new FormData();

  // Update the formData object
  const response = await axios.post("/api/nft/create_asset", data);
  return response?.data;
};
