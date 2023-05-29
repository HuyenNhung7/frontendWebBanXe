import style from "./ItemCar.module.css";
import images from "../../../assets/image";
import {memo} from 'react';
import { useEffect } from "react";
import { useState } from "react";

function ItemCar({ data }) {
    const [tenKM, setTenKM]=useState(null)  
    useEffect(()=>{
        console.log(data)
        if(data.khuyenMai) {
            setTenKM(data.khuyenMai.ten)
        }
},[])
    return (
        <div className={style.carContainer}>
            {tenKM && <div className={style.tagKhuyenMai}>{tenKM}</div>}
            <div className={style.carName}>{data.ten}</div>
            <a href={`/detailproduct/${data.id}`}>
                <img className={style.carImg} src={data.hinhAnh} alt={data.ten} />
            </a>
            <a className={style.carLink} href="/contact">
                Liên hệ
            </a>
        </div>
    );
}

export default memo(ItemCar);
