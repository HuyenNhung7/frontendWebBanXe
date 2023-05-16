import style from './InformationDetailProduct.module.css';
import HandleApi from '../../../Apis/HandleApi';
import HandleApiXe from '../../../Apis2/HandleApiXe';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

function InformationDetailProduct(pros) {
    const { productId } = useParams();
    const [data, setData] = useState([]);
    console.log(productId);
    useEffect(() => {
        HandleApiXe.getXeById(productId).then(res => setData(res));
        console.log(data);
    }, [productId])
    return (
        <div className={style.information}>
            <div className={style.information__heading}>
                <h1 className={style.information__heading__carName}>{data.ten}</h1>
                <hr className={style.line}/>
                <h2 className={style.information__heading__priceCar}>{data.giaXe ? (data.giaXe.toLocaleString() + " VNĐ") : ""}</h2>
                <hr className={style.line}/>
            </div>
            <div className={style.information__content}>
                <div className={style.information__content__info}>
                    <p className={style.information__content__carName}>{"Tên xe: " + data.ten}</p>
                    <p className={style.information__content__branch}>{"Thương hiệu: " + data.thuongHieu}</p>
                    <p className={style.information__content__origin}>{"Nguồn gốc: " + data.nguonGoc}</p>
                    <p className={style.information__content__trademark}>{"Dung tích: " + data.dungTich}</p>
                    <p className={style.information__content__numberSeats}>{"Số chỗ: " + data.soCho}</p>
                    <p className={style.information__content__engine}>{"Động cơ: " + data.dongCo}</p>
                    <p className={style.information__content__gear}>{"Màu sắc: " + data.mauSac}</p>
                    <p className={style.information__content__speedUp}>{"Vận tốc tối đa: " + data.vanTocToiDa}</p>
                    <p className={style.information__content__speedUp}>{"Công suất tối đa: " + data.congSuatCucDai}</p>
                    <p className={style.information__content__consumeEnergy}>{"Tiêu hao nhiên liệu (l/100km): " + data.tieuHaoNhienLieu}</p>
                    <p className={style.information__content__size}>{"Kích thước (dài x rộng x cao): " + data.kichThuoc}</p>
                    <p className={style.information__content__baseLength}>{"Năm sản xuất: " + data.namSanXuat}</p>
                    <p className={style.information__content__equip}>{"Mô tả: " + data.moTa}</p>
                </div>  
                <div className={style.informaton__content__img}>
                    <img src={data.hinhAnh} alt="image car" />
                </div>
            </div>
            {/* <div className={style.buy}> */}
                <a href='/contact' className={style.buy}>LIÊN HỆ</a>
            {/* </div> */}
        </div>
        
    );
}
export default InformationDetailProduct;