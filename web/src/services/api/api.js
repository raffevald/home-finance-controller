import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7071/api",
  // headers: {
  //   "Content-type": "application/json"
  // }
});

export default api;
