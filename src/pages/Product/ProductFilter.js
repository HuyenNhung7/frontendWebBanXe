import classes from "./ProductFilter.module.css"
function ProductFilter ({
    setYearFilter,
    setSeatsFilter,
    setPriceFilter,
    yearFilter,
    seatsFilter,
    priceFilter
}) {
    const lstYear = ["Tất cả","2023","2022","2021","2020","2019","2018","2017", "2016", "2015"]
    const lstSeats = ["Tất cả","2","4","5","6","7"]
    const lstPrice = ["Tất cả","Dưới 300 tr","300 - 500 tr","500 - 700 tr","700 - 1 tỷ","1 tỷ - 2 tỷ","trên 2 tỷ"]

    return (
        <div className={classes.filterContainer}>
            <div className={classes.filterTitle}>Lọc xe</div>
            <hr></hr>
            <div className={classes.filterRow}>
                <span className={classes.filterLabel}>Năm Sản Xuất:</span>
                <ul>
                    {
                        lstYear.map((year, index)=>{
                            return <li onClick={()=>setYearFilter(year)} 
                                       className={year === yearFilter? classes.listSelectActive : classes.listSelect}>
                                        {year}
                                    </li>
                        })
                    }
                </ul>
            </div>

            <div className={classes.filterRow}>
                <span className={classes.filterLabel}>Số chỗ ngồi:</span>
                <ul>
                    {
                        lstSeats.map((seat, index)=>{
                            return <li onClick={()=>setSeatsFilter(seat)} 
                            className={seat === seatsFilter? classes.listSelectActive : classes.listSelect}>{seat}</li>
                        })
                    }
                </ul>
            </div>

            <div className={classes.filterRow}>
                <span className={classes.filterLabel}>Giá xe:</span>
                <ul>
                    {
                        lstPrice.map((price, index)=>{
                            return <li onClick={()=>setPriceFilter(price)} 
                            className={price === priceFilter? classes.listSelectActive : classes.listSelect}>{price}</li>
                        })
                    }
                </ul>
            </div>
            {/* <div className={classes.filterSubmitBtn}>
                
            </div> */}
        </div>
    )
}

export default ProductFilter;