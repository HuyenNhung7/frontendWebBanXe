import axiosInstance from "./axiosInstance";

const getAllXe = async () => {
    return await axiosInstance.get("/xe/all");
};

const getXeById = async (id) => {
    return await axiosInstance.get(`/xe?id=${id}`);
};

const addXe = async (data) => {
    return await axiosInstance.post(`/xe/add`, data);
};

const deleteXe = async (id) => {
    return await axiosInstance.delete(`/xe/delete?id=${id}`);
};

const updateXe = async (id, data) => {
    return await axiosInstance.put(`/xe/update?id=${id}`, data);
}

const getXeByPageIndex = async (pageIndex) => {
    return await axiosInstance.get(`/xe/page?page=${pageIndex}&size=${5}`);
};

const getXeByBranch = async (pageIndex = 0, branch) => {
    return await axiosInstance.get(`/xe/find?thuongHieu=${branch}&page=${pageIndex}&size=${5}`);
};

const getXeByNameOrBranch = async (pageIndex = 0, branch, ten) => {
    return await axiosInstance.get(`/xe/find?ten=${ten}thuongHieu=${branch}&page=${pageIndex}&size=${5}`);
};

const getXeByDeXuat = async () => {
    return await axiosInstance.get("/xe/dexuat");
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
    getXeByNameOrBranch
};
