import axiosInstance from "./axiosInstance";

const getAllKM = async (page = 0, size = 0) => {
    return await axiosInstance.get(`/khuyenmai?page=${page}&size=${size}`);
};

const getKMById = async (id) => {
    return await axiosInstance.get(`/khuyenmai/${id}`);
};

const addKM = async (data) => {
    return await axiosInstance.post(`/khuyenmai`, data);
};

const deleteKM = async (id) => {
    return await axiosInstance.delete(`/khuyenmai/${id}`);
};

const updateKM = async (id, data) => {
    return await axiosInstance.put(`/khuyenmai/${id}`, data);
}

const getKMAvailable = async() => {
    return await axiosInstance.get("/khuyenmai/hieuluc")
}

export default {
    getAllKM,
    getKMById,
    addKM,
    deleteKM,
    updateKM,
    getKMAvailable
};