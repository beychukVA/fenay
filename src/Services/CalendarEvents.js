import axios from "../axios";
import axios_original from "axios";
import { parseJwt } from "../helpers/getId";

export const GetCalendarEvents = async (date, id) => {
  const { _id } = await parseJwt();
  const userId = id ? id : _id;
  try {
    const response = await axios.get(
      `/api/calendar/allcalendarevents/${date}/${userId}`
    );
    return response.data.data ? response.data.data : response.data;
  } catch (err) {
    return false;
  }
};

export const CreateCalendarEvents = async (data) => {
  const response = await axios.post("/api/calendar/create", {
    ...data,
  });
  return response.data.data ? response.data.data : response.data;
};
export const DeleteCalendarEvents = async (id) => {
  const response = await axios.delete("/api/calendar/delete", { data: { id } });
  return response.data.data ? response.data.data : response.data;
};
