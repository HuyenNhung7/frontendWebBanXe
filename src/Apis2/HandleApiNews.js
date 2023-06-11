import axiosInstance from "./axiosInstanceNoToken";

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
