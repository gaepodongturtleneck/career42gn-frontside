import axios from "axios";

const api = axios.create({
  baseURL: "http://10.19.239.92:8080/",
});

export default api;
