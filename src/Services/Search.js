import axios from "../axios";

export const GetSearch = async (term) => {
  const response = await axios.get(`/api/users/search?name=${term}`);
  return response.data.data ? response.data.data : response.data;
};
