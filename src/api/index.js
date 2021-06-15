import axios from "axios";

const api = axios.create({
  baseURL: "https://career.cadet.42seoul.io:8080",
  withCredentials: true,
});

export default api;
