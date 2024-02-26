import axios from "../axios";
import { parseJwt } from "../helpers/getId";

export const CreateSandBoxNumber = async (data) => {
  const response = await axios.post("/api/users/createsandboxnumber", {
    ...data,
  });
  return response?.data;
};

export const VerificationSandBoxNumber = async (number, code) => {
  const response = await axios.get(
    `/api/users/verifysandboxnumber/${number}/${code}`
  );
  return response?.data;
};

export const VerificationSmsCode = async (email, code) => {
  const response = await axios.post(`/api/auth/verifysmsuser`, {
    email: email,
    code: code,
  });
  return response?.data;
};
