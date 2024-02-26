import axios from "../axios";

export const CreateRoyalties = async (data) => {
  const response = await axios.post("/api/royalty", data);
  return response?.data;
};

export const GetRoyalties = async (id) => {
     const response = await axios.get(`/api/royalty/${id}`)
      return response.data.data ? response.data.data   : response.data 
}