import axios from "axios";

const api = axios.create({
  baseURL: "https://career42gn.tk:8080",
  withCredentials: true,
});

export default api;
