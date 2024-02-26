import axios from "axios";
import { baseURL } from "./constant/constants";
import { show_toast } from "./helpers/toast";

const instance = axios.create({
  // baseURL: "http://44.228.237.162:8800",
  baseURL: baseURL
});
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.data.status_msg) {
      show_toast(error.response.data.status_msg);
    }
    return error;
  }
);

export default instance;
