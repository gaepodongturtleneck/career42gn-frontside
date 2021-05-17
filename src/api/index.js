import axios from "axios";

const api = axios.create({
  // baseURL: "https://career42gn.tk:8080",
  baseURL: "http://localhost:5000",
  // withCredentials: true,
});

export default api;
