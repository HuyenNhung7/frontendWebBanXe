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

const getNewsById = async (id) => {
  return await axiosInstance.get(`/news/${id}`);
};
const getNews = async (currentPage) => {
  return await axiosInstance.get(`news?page=${currentPage}&size=6`);
};

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
};

export { getNewsById, getNews, formatDate };
