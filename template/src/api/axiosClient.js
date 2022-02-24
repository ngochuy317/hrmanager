import axios from "axios";
import queryString from "query-string";

const REACT_APP_API_URL = "http://127.0.0.1:8000/api/";
const Token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJpZCI6MywiZXhwIjoxNjQ1NjIzODczLCJpYXQiOjE2NDU2MjAyNzN9.kBguWJbzVaq3Z6d5q243CBjdvuW4OMRf7XDUr3ZOe8I"
const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    "Authorization": "Bearer " + Token,
  },
  paramsSerializerlizer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("access_token");
  config.headers.Authorization = 'Bearer ' + accessToken;
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
    throw error;
  }
);

export default axiosClient;
