import axiosInstance from "./axiosInstance";

const getAllXe = async () => {
    return await axiosInstance.get("/xe");
};

const getXeById = async (id) => {
    return await axiosInstance.get(`/xe/${id}`);
};

const addXe = async (data) => {
    return await axiosInstance.post(`/xe`, data);
};

const deleteXe = async (id) => {
    return await axiosInstance.delete(`/xe/${id}`);
};

const updateXe = async (id, data) => {
    return await axiosInstance.put(`/xe/${id}`, data);
}

const getXeByPageIndex = async (pageIndex) => {
    return await axiosInstance.get(`/xe?page=${pageIndex}&size=${5}`);
};

const getXeByBranch = async (pageIndex = 0, branch) => {
    return await axiosInstance.get(`/xe?thuongHieu=${branch}&page=${pageIndex}&size=${6}`);
};

const getXeByNameOrBranch = async (pageIndex = 0, branch, ten) => {
    return await axiosInstance.get(`/xe?ten=${ten}&thuongHieu=${branch}&page=${pageIndex}&size=${5}`);
};

const getXeByDeXuat = async () => {
    return await axiosInstance.get("/xe/dexuat");
};

const addKMToXe = async (id_xe, id_km) => {
    return await axiosInstance.post(`/xe/${id_xe}?id_km=${id_km}`);
};

const deleteKMToXe = async (id) => {
    return await axiosInstance.delete(`/xe/${id}/km`);
};
export default {
    getAllXe,
    getXeById,
    addXe,
    deleteXe,
    updateXe,
    getXeByPageIndex,
    getXeByBranch, 
    getXeByDeXuat, 
    getXeByNameOrBranch,
    addKMToXe,
    deleteKMToXe
};
