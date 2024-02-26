import axios from "../axios";
import { parseJwt } from "../helpers/getId";

// SONGS APIS
export const GetRegularSongNFTs = async () => {
  const response = await axios.get("/api/nft/regular_song_nft");
  return response.data.data ? response.data.data : response.data;
};
export const GetAccessSongNFTs = async () => {
  const response = await axios.get("/api/nft/access_song_nft");
  return response.data.data ? response.data.data : response.data;
};

export const GetUserRegularSongNFTs = async (id) => {
  const { _id } = await parseJwt();
  const userId = id ? id : _id;
  const response = await axios.get("/api/nft/regular_song_nft_user/" + userId);
  return response.data.data ? response.data.data : response.data;
};
export const GetUserAccessSongNFTs = async (id) => {
  const { _id } = await parseJwt();
  const userId = id ? id : _id;
  const response = await axios.get("/api/nft/access_song_nft_user/" + userId);
  return response.data.data ? response.data.data : response.data;
};

// EVENTS APIS
export const GetRegularEventNFTs = async () => {
  const response = await axios.get("/api/nft/regular_event_nft");
  return response.data.data ? response.data.data : response.data;
};
export const GetAccessEventNFTs = async () => {
  const response = await axios.get("/api/nft/access_event_nft");
  return response.data.data ? response.data.data : response.data;
};

export const GetUserRegularEventNFTs = async (id) => {
  const { _id } = await parseJwt();
  const userId = id ? id : _id;
  const response = await axios.get("/api/nft/regular_event_nft_user/" + userId);
  return response.data.data ? response.data.data : response.data;
};
export const GetUserAccessEventNFTs = async (id) => {
  const { _id } = await parseJwt();
  const userId = id ? id : _id;
  const response = await axios.get("/api/nft/access_event_nft_user/" + userId);
  return response.data.data ? response.data.data : response.data;
};

export const GetAccessNfts = async () => {
  const response = await axios.get("/api/nft/get_access_nft");
  return response.data.data ? response.data.data : response.data;
};

export const GetRegularNfts = async () => {
  const response = await axios.get("/api/nft/get_regular_nft");
  return response.data.data ? response.data.data : response.data;
};

export const GetMyRegularNfts = async (id) => {
  const { _id } = await parseJwt();
  const userId = id ? id : _id;
  const response = await axios.get("/api/nft/user_regular_nft/" + userId);
  return response.data.data ? response.data.data : response.data;
};

export const LikeDislikeNft = async (body) => {
  const response = await axios.put("/api/nft/likenft", { ...body });
  return response.data.data ? response.data.data : response.data;
};

export const reportNft = async (body) => {
  const response = await axios.post("/api/report/nft", { ...body });
  return response.data.data ? response.data.data : false;
};
