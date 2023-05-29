import React,{useState,useEffect} from 'react'
import classes from'../UserInfoPage.module.css'
import { Grid} from '@mui/material'
import axios from 'axios'
import Cookies from 'js-cookie'
const DetailOrder = ({item}) => {
    const token = Cookies.get('token');
    const [detail, setDetail] = useState()
    const [first, setfirst] = useState()
    const [car, setCar]=useState([])
    const gridTitle =[
      "STT",
      "Hình",
      "Tên xe",
      "Giá",
      "Số lượng"
    ]
    const gridColumn =[
        1,2,3,4,2
    ]
    const authAxios = axios.create({
        baseURL: 'http://localhost:9090/hd',
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const sendRequestSU = async ()=>{
        if(item){
        const res = await authAxios
        .get(`/${item.id}`)
        .catch((err)=>console.log(err))
        const data = await res.data.data;
        console.log(data);
        return data;}
      }
      const getCar = async(macar)=>{
        const res = await axios
        .get(`http://localhost:9090/api/v1/xe/${macar}`)
        .catch((err)=>console.log(err))
        const data = await res.data;
        await console.log( data);
        return data;
      }

      useEffect(()=>{
        
        console.log(item);
        setDetail();
        setCar([]);
        sendRequestSU()
        .then((data)=>{
          setDetail(data);
          setfirst(data.detailOrders.length)
          {data.detailOrders.map((items,index)=>{
              getCar(items.xedto.id)
              .then((data)=>setCar(prev=>[...prev,data]))
          })};
        })
      },[item])
      console.log(car);
      /*
       useEffect(()=>{
        sendRequestSU()
        .then((data)=>{
          setDetail(data);
          setCthd([]);
          {data.cthds.map((items,index)=>{setCthd(prev=>[...prev,items.macar])})};
          {test.map((tst,index)=>{
              getCar(tst)
              .then((data)=>setCar(prev=>[...prev,data]))
          })};
        })
      
      */
  const checkExist = (ma) =>{
    for(let i=0;i<detail.detailOrders.length;i++)
    {
      if(detail.detailOrders[i].xedto.id==ma)
      return detail.detailOrders[i].soLuong;
        /*console.log(detail.cthds[i].macar);
        console.log(ma);*/
    }
    //return 0;
    /*detail.cthds.map((item,index)=>{
       if (item.macar == ma)
        return true;
    })*/
    return 0;
  }

  /*const hienthi =car.length!==0? car.filter((item,index)=>{
    if (detail && checkExist(item.detailOrders.xedto.id)!=0){
      
        item.sl = checkExist(item.detailOrders.xedto.id)
        return true
    }
  }) : true
  console.log(hienthi);*/
  console.log(detail? checkExist('OT6'):"chuaco");
  
  return (
  <div className={classes.DetailCard}>
    <div style={{borderBottom:"white"}}>
    <h2>CHI TIẾT HÓA ĐƠN</h2>
    </div>
    {(detail)? <><div className={classes.ListInfo}>
      <div>
       <p>ID hóa đơn:</p><p> {detail.id}</p>
      </div>
      <div>
       <p>Ngày hóa đơn:</p><p> {detail.ngayHD}</p>
       </div>
       <div>
       <p>Mã khách hàng: </p><p>{detail.us2.id}</p>
       </div>
       <div>
       <p>Mã nhân viên: </p><p>{detail.us2.id}</p>
       </div>
       <div>
       <p>Tình trạng: </p><p>{detail.tinhtrang}</p>
       </div>
       <p>Danh sách xe: </p>
       <div>
       <Grid container sx={{ 
    padding: '0 0',
    borderRadius:1,
    borderBottom:0,
    }}>
       <Grid container sx={{borderTop:0,borderRadius:10}}  justify="flex-end">
      {gridTitle.map((title, index) => (
        
        <Grid item xs={gridColumn[index]} key={index}
        sx={{backgroundColor:'rgba(237, 132, 132, 0.756)'}} style={{textAlign:"center"}}>
          <p style={{fontSize:"13.5px", color:"white", textAglin:"center",
          width:"100%"}}>{title}</p>
        </Grid>
      ))}
    </Grid>
    <div style={ detail.detailOrders.length>4?{height:"410px",width:"100%"}:{width:"100%"}} className={classes.Overcar}>
       {car && car.reverse().map((dt,index)=>
       
        <Grid container sx={index%2==0? { padding: '20px 0', backgroundColor:"white",color:"black"} : { padding: '20px 0', backgroundColor:"ButtonHighlight",color:"#8a0000"} }
        key={index} >
        <Grid item xs={1}>
            <p  style={{textAlign:"center", width:"100%"}}>{index+1}</p>
          </Grid>
        <Grid item xs={2} style={{textAlign:"center"}}>
            <img src={dt.hinhanh? dt.hinhAnh:""} alt="car"/>
        </Grid>
       <Grid item xs={3}>
          <p  style={{textAlign:"center", width:"100%"}}>{dt.ten? dt.ten :""}</p>
        </Grid>
        <Grid item xs={4}>
          <p  style={{textAlign:"center", width:"100%"}}>{dt.giaXe? parseInt(dt.giaXe).toLocaleString() : ""}</p>
      </Grid>
        <Grid item xs={2}>
          <p  style={{textAlign:"center", width:"100%"}}>{item.detailOrders[index].soLuong? item.detailOrders[index].soLuong :""}</p>
      </Grid>
      </Grid>
      )}
      </div>
      
      </Grid>
      </div>
       <div className={classes.TotalDiv}>
       <p>Trị giá hóa đơn:</p><p className={classes.Total}> { parseInt(detail.trigia).toLocaleString()} vnd</p>
       </div>
    </div></>:<p style={{textAlign:"center"}}>Chọn 1 hóa đơn để xem chi tiết</p>}
  </div>
  )
}

export default DetailOrder
/*{bill.lineItems.map((car,index)=>(
       <div className={classes.DetailImg}>
        <Stack direction="row" alignItems="center" gap={1}>
        <img src={car.url}></img>
        <div>
        <p>Car name: {car.productId}</p>
        <p>Amount: {car.quantity}</p>
        </div>
        </Stack>
       </div>
       ))} 



       <div>
            <p>{index+1}</p>
          </div>
          <div className={classes.Listcar}>
            <div>
            <p>Car ID </p><p>{dt.macar}</p>
            </div>
            <div>
            <p>Car name </p><p>{dt.tenxe}</p>
            </div>
            <div>
            <p>Quantity </p><p>{dt.soluong}</p>
            </div>
          </div>
       
          {detail.cthds.map((dt,index)=>
        <Grid container sx={index%2==0? { padding: '20px 0', backgroundColor:"white",color:"black"} : { padding: '20px 0', backgroundColor:"ButtonHighlight",color:"#8a0000"} }
        key={index} >
        <Grid item xs={1}>
            <p  style={{textAlign:"center", width:"100%"}}>{index+1}</p>
          </Grid>
        <Grid item xs={3}>
            <p  style={{textAlign:"center", width:"100%"}}>{dt.macar}</p>
        </Grid>
       <Grid item xs={3}>
          <p  style={{textAlign:"center", width:"100%"}}>{car[parseInt(index)]? car[parseInt(index)].ten : "123"}</p>
        </Grid>
        <Grid item xs={5}>
          <p  style={{textAlign:"center", width:"100%"}}>{dt.soluong}</p>
      </Grid>
      </Grid>
      )}
       
       
       */