import axios from "../axios";
export const CreateSong = async (data) => {
  const response = await axios.post("/api/songs/create_song", {
    itemId: data.itemId,
    album: data.album,
    artist: data.artist,
    imgFile: data.imgFile,
    audioFile: data.audioFile,
  });
  return response?.data;
};

export const GetSongs = async () => {
  const response = await axios.get("/api/songs/get_songs");
  return response?.data;
};
