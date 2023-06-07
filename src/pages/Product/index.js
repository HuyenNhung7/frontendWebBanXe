import styles from "./Product.module.css"
import ItemProduct from "./ItemProduct";
import HandleApi from "../../Apis/HandleApi"
import HandleApiXe from "../../Apis2/HandleApiXe";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ProductFilter from "./ProductFilter";

function Product() {
  const [data, setData] = useState([]);
  const { carBrand } = useParams();
  const [filterData, setFilterData] = useState([])
  const [yearFilter, setYearFilter] = useState("Tất cả")
  const [colorFilter, setColorFilter] = useState()
  const [priceFilter, setPriceFilter] = useState("Tất cả")
  const [seatsFilter, setSeatsFilter] = useState("Tất cả")
  
console.log(carBrand);

  useEffect(() => {
    HandleApiXe.getXeByBranch(0, carBrand)
    .then((res) => {
      console.log(res);
      setData(res.data)
      setFilterData(res.data)
    })
    .catch(err => console.log(err));
  }, [])


useEffect (() => {
  let result = []
  let min, max

  if(priceFilter === "Dưới 300 tr"){
    min = 0
    max = 300000000
  } 
  else if(priceFilter === "300 - 500 tr"){
    min = 300000000
    max = 500000000
  } 
  else if(priceFilter === "500 - 700 tr"){
    min = 500000000
    max = 700000000
  } 
  else if(priceFilter === "700 - 1 tỷ"){
    min = 500000000
    max = 1000000000
  } 
  else if(priceFilter === "1 tỷ - 2 tỷ"){
    min = 1000000000
    max = 2000000000
  } 
  else {
    min = 2000000000
    max = 0
  } 

  result = filterData.filter((item)=> (yearFilter === "Tất cả" || item.namSanXuat === parseInt(yearFilter))
                                        && (seatsFilter === "Tất cả" || item.soCho ===  parseInt(seatsFilter))
                                        && (priceFilter === "Tất cả" || (item.giaXe >= min &&  (max === 0 || item.giaXe < max))))
  setData(result);
}, [priceFilter, yearFilter, seatsFilter])
  
    return ( <div>
      <div className={styles.productContainer} >
      <ProductFilter setYearFilter={setYearFilter}
                     setSeatsFilter={setSeatsFilter}
                     setPriceFilter={setPriceFilter}
                     yearFilter={yearFilter}
                     seatsFilter={seatsFilter}
                     priceFilter={priceFilter}/>
        <h1 className={styles.nameType}>{carBrand.toUpperCase()}</h1>
        <div className={styles.containerLayout}>
              {data.map((item, index) => (
                <div  key={index}>
                  <ItemProduct data={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
     );
}

export default Product;