import axios from "axios";

const BASE_URL = "http://localhost:3002/api/v1";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("blogLoginToken");
    if (!config.headers.Authorization && token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
