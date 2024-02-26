import axios from "../axios";

export const CreatBackStagePass = async (body) => {
  // Update the formData object
  const response = await axios.post("/api/pass/create_pass", {
  ...body
  });
  return response?.data;
};

export const GetBackStagePrice = async (id) => {
    const response = await axios.get("/api/pass/get_pass/"+id);
    return response?.data;
  };
