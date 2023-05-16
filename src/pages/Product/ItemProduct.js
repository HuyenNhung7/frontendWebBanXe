import styles from "./ItemProduct.module.css"
function ItemProduct({data}){
    return(
        <>
            <div className={styles.listProducts}>
                <div className={styles.itemProduct}>
                    <h3 className={styles.itemProduct__Title}>{data.ten}</h3>
                    <p className={styles.itemProduct__Price}>{"Giá: "+ data.giaXe + " VNĐ"}</p>
                    <img className={styles.productImg}
                        src={data.hinhAnh}
                        alt="carimg"
                    />
                    <a className={styles.linkDiscover} href={`/detailproduct/${data.id}`}>Chi tiết</a>
                </div>
            </div>
        </>
    );
}

export default ItemProduct;