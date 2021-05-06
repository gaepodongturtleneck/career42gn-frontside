import axios from "axios";

const api = axios.create({
  baseURL: "http://34.64.149.166:8080",
});

export default api;
