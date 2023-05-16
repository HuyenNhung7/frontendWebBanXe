import style from './Search.module.css'
import { Link } from 'react-router-dom';

function CarCard({data}) {
    return ( 
        <div className={style.carContainer}>
            <div className={style.carName}>{data.ten}</div>
            <img className={style.carImg} src={data.hinhAnh} alt={data.ten} />
            <Link className={style.carLink} to={`/detailproduct/${data.id}`} >Chi Tiết</Link>
        </div>
     );
}

export default CarCard;