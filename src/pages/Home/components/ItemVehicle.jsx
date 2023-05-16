import style from "./ItemVehicle.module.css";
import {Link } from 'react-router-dom'
function ItemVehicle({data}) {
    return(
        <div className={style.itemCarContainer}>
            <p className={style.carName}>{data.ten}</p>
            <p className={style.carInfo}>{data.giaXe + " VNĐ"}</p>
            <img src={data.hinhAnh} alt="BMW car" width={300} height={170}/>
            <Link to={`/detailproduct/${data.id}`}>
                <button className={style.buttonDiscoverMore}>Chi tiết</button>
            </Link>
            
        </div>
    );
}
export default ItemVehicle;

// data.giaXe.toLocaleString()