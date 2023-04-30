import axiosInstance2 from './axiosInstance2';


const getCarById = async (id) => {
    return await axiosInstance2.get(`/cars/${id}`);
};

const getEmployeeById = async(id) =>{
    return await axiosInstance2.get(`api/v1/user/${id}`);
}

const getEmployeeByName = async (name) => {
    return await axiosInstance2.get(`/users/employees?name=${name}`);
};

const getEmployeeBySearch = async (search) =>{
    return await axiosInstance2.get(`api/v1/user/?role=KH&size=15&username=${search}`);
}

const getEmployeeByMauser = async (mauser) => {
    return await axiosInstance2.get(`/users/employees?mauser=${mauser}`);
};


const getEmployeeByPageIndex = async (index) => {
    return await axiosInstance2.get(`api/v1/user/?role=KH&size=15&page=${index}`);
};

const deleteEmployee = async (id) => {
    return await axiosInstance2.delete(`api/v1/user/${id}`);
};

const createEmployee = async (data) => {
    return await axiosInstance2.post(`api/v1/user/register`, data);
}

const updateEmployee = async (id, data) => {
    return await axiosInstance2.put(`api/v1/user/${id}`, data)
}

export default {
    getCarById,
    getEmployeeById,
    getEmployeeByMauser,
    getEmployeeByName,
    getEmployeeByPageIndex,
    deleteEmployee,
    createEmployee,
    updateEmployee,
    getEmployeeBySearch,
};