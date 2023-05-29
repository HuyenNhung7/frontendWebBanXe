import React, { useState, useEffect } from "react";
import images from "../../../../assets/image";
import styles from "./PromotionPopUp.module.css";
import './PromotionPopUp.module.css'
import CancelIcon from "@mui/icons-material/Cancel";
import Swal from "sweetalert2";
import { Box } from "@mui/system";
import { Grid, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import HandleApiKhuyenMai from "../../../../Apis2/HandleApiKhuyenMai";
function PromotionPopUp({type, setType, updatePromotion, setUpdatePromotion }) {
    const [ten, setTen] = useState();
    const [triGiaKM, setTriGiaKM] = useState();
    const [ngayBD, setNgayBD] = useState();
    const [ngayKT, setNgayKT] = useState();
    // const [passwordConfirm, setPasswordConfirm] = useState();
// Create
    const randomImage = [images.customer,images.customer1,images.customer2,images.customer3];
    const number = Math.floor(Math.random()*randomImage.length);  
    
    const inputId = [
        "ten",
        "triGiaKM",
        "ngayBD",
        "ngayKT",
    ];
    const useStateEvent = [
        setTen,
        setTriGiaKM,
        setNgayBD,
        setNgayKT,
    ];
    const placeHolder = [
        "Nhập tên khuyến mãi",
        "Nhập trị giá khuyến mãi",
        "Nhập ngày bắt đầu",
        "Nhập ngày kết thúc ",
    ];
    const textValue = [
        "Tên mã khuyến mãi",
        "Trị giá khuyến mãi",
        "Ngày bắt đầu",
        "Ngày kết thúc",
    ];
    const inputType = ["text","", "text", "text"];
    const data = {
        ten: ten,
        triGiaKM: Number(triGiaKM),
        ngayBD: ngayBD,
        ngayKT: ngayKT,
    };


    //UPDATE
    const inputIdUpdate = [
        "ten",
        "triGiaKM",
        "ngayBD",
        "ngayKT", 
    ];
    const useStateEventUpdate = [
        setTen,
        setTriGiaKM,
        setNgayBD,
        setNgayKT,
    ];
    const textValueUpdate = [
        "Tên khuyến mãi",
        "Trị giá khuyến mãi",
        "Ngày bắt đầu",
        "Ngày kết thúc"
    ];

    const inputTypeUpdate = ["text", "", "text",  "text"];
    const inputValueUpdate = [
        ten,
        triGiaKM,
        ngayBD,
        ngayKT
    ];

    // object data
    const dataUpdate = {
        ten: ten, 
        triGiaKM: Number(triGiaKM),
        ngayBD: ngayBD,
        ngayKT: ngayKT
    }

    const handleBlur = (e) => {
        if (e.target.value === "") {
            e.target.style.borderColor = "red";
        } else {
            e.target.style.borderColor = "#000";
        }
    };

    const handleCreateCustomer = async (e) => {
        e.preventDefault();
        console.log(data);
        HandleApiKhuyenMai.addKM(data)
            .then(async (res) => {
                await Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Tạo dữ liệu thành công!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setType("");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleUpdatePromotion = async () => {
        console.log(updatePromotion.id);
        HandleApiKhuyenMai.updateKM(updatePromotion.id, dataUpdate)
            .then(async (res) => {
                await Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Cập nhật dữ liệu thành công!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUpdatePromotion({});
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (updatePromotion !== {}) {
            setTen(updatePromotion.ten);
            setTriGiaKM(updatePromotion.triGiaKM);
            setNgayBD(updatePromotion.ngayBD);
            setNgayKT(updatePromotion.ngayKT);
            console.log(updatePromotion);
        }
    }, [updatePromotion]);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        padding: theme.spacing(1),
        textAlign: "left",
        color: "#000",
        boxShadow: "none",
        fontSize: 16,
        // marginLeft: "20px",
    }));

    return (
        <>
            {type === "create" && (
                <div>
                    <div className={styles.overlay}></div>
                    <div className={styles.bPopup}>
                        <CancelIcon
                            className={styles.bPopup__close}
                            onClick={() => setType("")}
                        />
                        <h3>Thêm khuyến mãi</h3>
                        <br />
                        <Box sx={{ flexGrow: 1 }}>
                            <form onSubmit={handleCreateCustomer}>
                                <Grid container>
                              {inputId.map((item, index) => (
                                        <Grid key={index} item xs={4} sx={{ height: "93px" }}>
                                            <label htmlFor={item[index]} className={styles.label}>
                                                {textValue[index]}
                                            </label>
                                            <br />
                                            <input
                                                id={item[index]}
                                                name={item[index]}
                                                type={inputType[index]}
                                                required
                                                placeholder={placeHolder[index]}
                                                onChange={(e) =>
                                                    useStateEvent[index](
                                                        e.target.value
                                                    )
                                                }
                                                onBlur={handleBlur}
                                            />
                                            
                                            
                                            {/* <div>{errorName}</div> */}
                                        </Grid>
                                    ))}
                                </Grid>
                                
                                <div className={styles.btn}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="large"
                                        sx={{
                                            fontSize: "14px",
                                            width: "160px",
                                            margin: "24px 0 0"
                                        }}
                                        type={"submit"}
                                    // onClick={handleCreateCar}
                                    >
                                        Thêm dữ liệu
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="large"
                                        sx={{
                                            fontSize: "14px",
                                            width: "100px",
                                            margin: "24px 36px 0 20px"
                                        }}
                                        onClick={() => setType("")}
                                    >
                                        Hủy
                                    </Button>
                                </div>
                            </form>
                        </Box>
                    </div>

                </div>
            )}
            {type === "update" && (
                <div>
                    <div className={styles.overlay}></div>

                    <div className={styles.bPopup}>
                        <CancelIcon
                            className={styles.bPopup__close}
                            onClick={() => setType("")}
                        />
                        <h3>Cập nhật dữ liệu mã khuyến mãi</h3>

                        <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
                            <Grid container>
                                {inputIdUpdate.map((item, index) => (
                                    <Grid key={index} item xs={4} sx={{ height: '93px' }}>
                                        <label htmlFor={item[index]}>
                                            {textValueUpdate[index]}
                                        </label>
                                        <br />
                                        <input
                                            id={item[index]}
                                            type={inputTypeUpdate[index]}
                                            value={inputValueUpdate[index]}
                                            onChange={(e) =>
                                                useStateEventUpdate[index](e.target.value)
                                            }
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <div className={styles.btn}>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                sx={{
                                    fontSize: "14px",
                                    width: "160px",
                                }}
                                onClick={handleUpdatePromotion}
                            >
                                Cập nhật
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                size="large"
                                sx={{
                                    fontSize: "14px",
                                    width: "100px",
                                    margin: "0 36px 0 20px"
                                }}
                                onClick={() => setType("")}
                            >
                                Hủy
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {type === "read" && (
                <div>
                    <div className={styles.overlay}></div>
                    <div className={styles.bPopup}>
                        <CancelIcon
                            className={styles.bPopup__close}
                            onClick={() => setType("")}
                        />
                        <h3>Thông tin chi tiết</h3>

                        <Box sx={{ flexGrow: 1, marginTop: "24px" }}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Item sx={{ fontWeight: "bold" }}>{"Tên khuyến mãi: " + updatePromotion.ten}</Item>
                                    <Item>{"Trị giá khuyến mãi: " + updatePromotion.triGiaKM}</Item>
                                    <Item>{"Ngày bắt đầu: " + updatePromotion.ngayBD}</Item>
                                    <Item>{"Ngày kết thúc: " + updatePromotion.ngayKT}</Item>
                                </Grid>
                            </Grid>
                        </Box>
                        <div className={styles.btn}>
                            <Button
                                variant="contained"
                                color="error"
                                size="large"
                                sx={{
                                    fontSize: "14px",
                                    width: "100px",
                                    margin: "24px -10px -12px 0"
                                }}
                                onClick={() => setType("")}
                            >
                                Hủy
                            </Button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default PromotionPopUp;
