import axios from "../axios";

export const CreateAd = async (data) => {
  const response = await axios.post("/api/ad", {
    ...data,
  });
  return response.data.data ? response.data.data : response.data;
};


export const GetAds = async (data) => {
    const response = await axios.get("/api/ad/fetch");
    return response;
}