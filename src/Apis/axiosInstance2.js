import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance2 = axios.create({
    baseURL: "http://localhost:9090/",
    // baseURL: process.env.REACT_APP_BASE_URL,
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance2.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance2.interceptors.request.use(function (config) {
    // const token = localStorage.getItem("token");
    const token = Cookies.get("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

export default axiosInstance2;
