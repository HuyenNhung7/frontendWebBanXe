import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "http://localhost:8080/api/v1",
  // baseURL: process.env.REACT_APP_BASE_URL,
  // headers: {
  //     Authorization: `Bearer ${token}`,
  // },
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
