import axios from "../axios";

export const CreateNFTEvent = async (data) => {
  const response = await axios.post("/api/events/create_event", data);
  return response?.data;
};

export const GetNFTEvent = async () => {
  const response = await axios.get("/api/events/get_events");
  return response.data.data ? response.data.data : response.data;
};

export const GetAllEvents = async (token) => {
  const response = await axios.get("/api/upcomingEvents");
  return response.data;
};
