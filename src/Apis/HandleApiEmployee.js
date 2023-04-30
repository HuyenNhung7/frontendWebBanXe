import axiosInstance2 from './axiosInstance2';


const getCarById = async (id) => {
    return await axiosInstance2.get(`/cars/${id}`);
};

const getEmployeeById = async(id) =>{
    return await axiosInstance2.get(`/users/employees/${id}`);
}

const getEmployeeByName = async (name) => {
    return await axiosInstance2.get(`/users/employees?name=${name}`);
};

const getEmployeeBySearch = async (search) =>{
    return await axiosInstance2.get(`/users/employees?search=${search}`);
}

const getEmployeeByMauser = async (mauser) => {
    return await axiosInstance2.get(`/users/employees?mauser=${mauser}`);
};


const getEmployeeByPageIndex = async (index) => {
    return await axiosInstance2.get(`api/v1/user/?role=KH&size=6&page=${index}`);
};

const deleteEmployee = async (id) => {
    return await axiosInstance2.delete(`/users/employees/${id}`);
};

const createEmployee = async (data) => {
    return await axiosInstance2.post(`/users/employees`, data);
}

const updateEmployee = async (id, data) => {
    return await axiosInstance2.put(`/users/employees/${id}`, data)
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