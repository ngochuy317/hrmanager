import axios from "axios";
import queryString from "query-string";

const REACT_APP_API_URL = "http://127.0.0.1:8000/a/api/";

const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializerlizer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  //Handle token here ..
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //handle error here ..
    throw error;
  }
);

export default axiosClient;
