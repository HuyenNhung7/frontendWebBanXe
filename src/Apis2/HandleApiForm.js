import axiosInstance from "./axiosInstance";

const getAllForm = async () => {
    return await axiosInstance.get("/form/all");
};

const getFormById = async (id) => {
    return await axiosInstance.get(`/form/${id}`);
};

const addForm = async (data) => {
    return await axiosInstance.post(`/form`, data);
};

const deleteForm = async (id) => {
    return await axiosInstance.delete(`/form/${id}`);
};

const getFormByPageIndex = async (pageIndex, size = 5) => {
    return await axiosInstance.get(`/form?page=${pageIndex}&size=${size}`);
};

export default {
    getAllForm,
    getFormById,
    addForm,
    deleteForm,
    getFormByPageIndex,
};
