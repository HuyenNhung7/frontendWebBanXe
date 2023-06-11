import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: "http://ec2-54-79-209-74.ap-southeast-2.compute.amazonaws.com:8080/api/v1",
    // baseURL: process.env.REACT_APP_BASE_URL,
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.request.use(function (config) {
    // const token = localStorage.getItem("token");
    const token = Cookies.get("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

export default axiosInstance;
