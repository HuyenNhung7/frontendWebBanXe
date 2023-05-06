import axiosInstance from "./axiosInstance";

const getNewsById = async (id) => {
    return await axiosInstance.get(`/news/${id}`);
};

export { getNewsById };
