import axiosInstance2 from './axiosInstance2';

const getInvoiceByTinhTrang = async (tinhtrang, pageIndex) => {
    return await axiosInstance2.get(`/hd?tinhtrang=${tinhtrang}&pageSize=${2}&pageIndex=${pageIndex}`)
};

const getInvoiceByPageIndex = async (pageIndex) => {
    return await axiosInstance2.get(`/hd?page=${pageIndex}&size=${6}`);
}
const getInvoiceByID = async (id) => {
    return await axiosInstance2.get(`/hd/${id}`);
}

const getInvoiceByMAHD = async (mahd) => {
    return await axiosInstance2.get(`/hoadons?mahd=${mahd}&pageSize=${10}`)
}
const xoaDonDatHang = async (id) => {
    return await axiosInstance2.delete(`/hd/${id}`);
};

const createInvoice = async (data) => {
    return await axiosInstance2.post("/hd/insert", data);
}

const capnhatTinhTrang = async (id, tinhtrang) => {
    return await axiosInstance2.put(`/hd/${id}`, tinhtrang)
}

const getCarByMaCar = async (macar) => {
    return await axiosInstance2.get(`api/v1/xe/${macar}`)
}

const getCustomerByMaUser = async(makh) => {
    return await axiosInstance2.get(`api/v1/user/find/${makh}`)
}

 //eslint-disable-next-line import/no-anonymous-default-export
export default {
    getInvoiceByTinhTrang,
    getInvoiceByID,
    getInvoiceByMAHD,
    xoaDonDatHang,
    createInvoice,
    capnhatTinhTrang,
    getCarByMaCar,
    getCustomerByMaUser,
    getInvoiceByPageIndex,
};