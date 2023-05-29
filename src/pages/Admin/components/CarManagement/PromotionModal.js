import { useState } from "react";
import styles from "./PromotionModal.module.css";
import { useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { MenuItem, Select, FormControl, InputLabel, Button } from "@mui/material"
import HandleApiXe from "../../../../Apis2/HandleApiXe";
import HandleApiKhuyenMai from "../../../../Apis2/HandleApiKhuyenMai";
import Swal from "sweetalert2";

const PromotionModal = ({Id, isOpen, setIsOpen}) => {
    const [listPromotion, setListPromotion] = useState()
    const [promotion, setPromotion] = useState()
    const [idSelectedPromo, setIdSelectedPromo] = useState()
    const [xeKM, setXeKM] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        console.log(Id)
        // if(Id != 0) {
            HandleApiXe.getXeById(Id).then((res) => {
                console.log(res)
                setXeKM(res.khuyenMai); 
                setIsLoading(true)
                // setIsOpen(false)
            });
    
            HandleApiKhuyenMai.getKMAvailable().then((res) => {
                console.log(res)
                setListPromotion(res);
            });
        // }
    },[isOpen]);

    const handleBlurPromotionModal = (e)=>{
        setIsOpen(false);
    }
    const MenuSelectProps = {
        PaperProps: {
            style: {
                maxHeight: 150,
                overflowX: "scroll",
                //   width: 250,
            },
        },
    };
    const handleChange = (e) => {
        if (e.target.value !== "Tất cả") setPromotion(e.target.value);
        else {
            setPromotion(e.target.value);
        }
    };

    const handleThemMaChoSP = (id_km) => {
        console.log(Id, id_km)
        HandleApiXe.addKMToXe(Id, id_km)
        .then(async (res) => {
            await Swal.fire({
                position: "center",
                icon: "success",
                title: "Thêm khuyến mãi thành công!",
                showConfirmButton: false,
                timer: 1500,
            });
            setIsOpen(false);
            // window.location.reload();
        })
        .catch(() => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Thêm khuyến mãi thất bại!",
                showConfirmButton: false,
                timer: 1500,
            });
        });
    }

    const handleXoaMaChoSP = () => {
        console.log(Id)
        HandleApiXe.deleteKMToXe(Id)
        .then(async (res) => {
            await Swal.fire({
                position: "center",
                icon: "success",
                title: "Xóa khuyến mãi thành công!",
                showConfirmButton: false,
                timer: 1500,
            });
            setIsOpen(false);
            // window.location.reload();
        })
        .catch(() => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Xóa khuyến mãi thất bại!",
                showConfirmButton: false,
                timer: 1500,
            });
        });
    }

    if(isOpen&&isLoading) {
        if(xeKM) {
            return (  
                <div>
                <div className={styles.overlay}>
                </div>
                <div className={styles.modal}
                    // onBlur={handleBlurPromotionModal}
                    >
                         <CancelIcon
                                    className={styles.cancelIcon}
                                    onClick={() => setIsOpen(false)}
                            />
                        <h3>Sản phẩm đã có mã khuyến mãi</h3>

        
                        <div className={styles.selecte_promo}>
                            <div className={styles.question}>
                                <h3 className={styles.makm}>{xeKM.ten}</h3>
                                <h3>Bạn có muốn xóa mã giảm giá của sản phẩm này không?</h3>
                            </div>
                            <div className={styles.btnDelete}>
                                <Button 
                                        sx={{
                                        height: 40,
                                        fontSize: 14,
                                        textTransform: "none",
                                        marginLeft: "80px",
                                    }}
                                    variant="contained"
                                    color="success"
                                    >
                                    Xóa mã
                                </Button>
                            </div>
                        </div>
                </div>
                </div>
            )
        }
        else {
            return  (
                <div>
                    <div className={styles.overlay}>
                    </div>
                    <div className={styles.modal}
                        // onBlur={handleBlurPromotionModal}
                        >
                            <CancelIcon
                                        className={styles.cancelIcon}
                                        onClick={() => setIsOpen(false)}
                                />
                            <h3>Thêm mã giảm giá cho sản phẩm</h3>
    
                            <div className={styles.selecte_promo}>
                                <FormControl
                                        className={styles.filter}
                                        sx={{ m: 1, minWidth: 220, height: 44 }}
                                        size="medium"
                                    >
                                        <InputLabel
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                left: "10px",
                                            }}
                                            id="input-label"
                                        >
                                            Mã khuyến mãi
                                        </InputLabel>
                                        <Select
                                            className={styles.filter_wrap}
                                            labelId="input--"
                                            label="promotion"
                                            defaultValue={promotion}
                                            value={promotion}
                                            MenuProps={MenuSelectProps}
                                            onChange={handleChange}
                                        >
                                            <MenuItem
                                                className={styles.menuItem}
                                                value="All"
                                                selected
                                            >
                                                Tất cả
                                            </MenuItem>
                                            {/* <MenuItem value="Khuyến mãi 10%">
                                            Khuyến mãi 10%
                                            </MenuItem> */}
                                            {listPromotion.map((item, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={item.ten}
                                                    className={styles.menuItem}
                                                    onClick={()=>setIdSelectedPromo(item.id)}
                                                >
                                                    {item.ten}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                </FormControl>
    
                                <Button
                                        sx={{
                                        height: 40,
                                        fontSize: 14,
                                        textTransform: "none",
                                        marginLeft: "80px",
                                    }}
                                    variant="contained"
                                    color="success"
                                    onClick={()=>{handleThemMaChoSP(idSelectedPromo)}}
                                    >
                                    Thêm mã
                                </Button>
                            </div>
                    </div>
                </div>
            )
        }
    } else {
        return "";
    }
}
export default PromotionModal;