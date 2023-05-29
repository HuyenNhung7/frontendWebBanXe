import React, { useState, useEffect } from "react";
import styles from "./CarPopUp.module.css";
import "./CarPopUp.css";
import CancelIcon from "@mui/icons-material/Cancel";
import Swal from "sweetalert2";
import { Box } from "@mui/system";
import { Grid, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import HandleApi from "../../../../Apis/HandleApi";
import HandleApiXe from "../../../../Apis2/HandleApiXe";

function CarPopup({ type, setType, updateCar, setUpdateCar }) {
    const [thumbnail, setThumbnail] = useState();
    const [carName, setCarName] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const [engine, setEngine] = useState();
    const [seat, setSeat] = useState();
    const [power, setPower] = useState();
    const [capacity, setCapacity] = useState();
    const [fuel, setFuel] = useState();
    const [speed, setSpeed] = useState();
    const [origin, setOrigin] = useState();
    const [color, setColor] = useState();
    const [desc, setDesc] = useState();
    const [year, setYear] = useState();
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState();
    const [km, setKm] = useState();
    const [carCode, setCarCode] = useState();

    const inputId = [
        "name",
        "thumbnail",
        "brand",
        "price",
        "engine",
        "seat",
        "size",
        "origin",
        "speed",
        "capacity",
        "fuel",
        "power",
        "color",
        "year",
        "desc",
        "quantity",
    ];

    const useStateEvent = [
        setCarName,
        setThumbnail,
        setBrand,
        setPrice,
        setEngine,
        setSeat,
        setSize,
        setOrigin,
        setSpeed,
        setCapacity,
        setFuel,
        setPower,
        setColor,
        setYear,
        setDesc,
        setQuantity,
    ];

    const placeHolder = [
        "Nhập tên xe",
        "Nhập hình ảnh",
        "Nhập thương hiệu",
        "Nhập giá xe",
        "Nhập động cơ",
        "Nhập số chỗ ngồi",
        "Nhập kích thước",
        "Nhập nguồn gốc",
        "Nhập tốc độ tối đa",
        "Nhập dung tích",
        "Nhập tiêu hao nhiên liệu",
        "Nhập công suất tối đa",
        "Nhập màu sắc xe",
        "Nhập năm sản xuất",
        "Nhập mô tả",
        "Nhập số lượng xe",
    ];

    const textValue = [
        "Tên xe",
        "Hình ảnh",
        "Thương hiệu",
        "Giá xe",
        "Động cơ",
        "Số chỗ ngồi",
        "Kích thước (AxBxC)",
        "Nguồn gốc",
        "Tốc độ tối đa (Km/h)",
        "Dung tích",
        "Tiêu hao nhiên liệu (l/100km)",
        "Công suất tối đa",
        "Màu sắc",
        "Năm sản xuất",
        "Mô tả",
        "Số lượng xe",
    ];

    const inputType = [
        "text",
        "text",
        "text",
        "",
        "text",
        "number",
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "text",
        "number",
        "text",
        "number",
    ];

    const inputValue = [
        carName,
        thumbnail,
        brand,
        price,
        engine,
        seat,
        size,
        origin,
        speed,
        capacity,
        fuel,
        power,
        color,
        year,
        desc,
        quantity,
    ];

    // object data
    const data1 = {
        ten: carName,
        thuongHieu: brand,
        dongCo: engine,
        soCho: Number(seat),
        kichThuoc: size,
        nguonGoc: origin,
        vanTocToiDa: speed,
        dungTich: capacity,
        tieuHaoNhienLieu: fuel,
        congSuatCucDai: power,
        mauSac: color,
        giaXe: Number(price),
        hinhAnh: thumbnail,
        moTa: desc,
        namSanXuat: Number(year),
        soLuong: Number(quantity),
        deXuat: true,
    };

    const handleBlur = (e) => {
        if (e.target.value === "") {
            // setErrorName("Vui lòng nhập dữ liệu ");
            e.target.style.borderColor = "red";
        } else {
            e.target.style.borderColor = "#000";
        }
    };

    const handleCreateCar = async (e) => {
        e.preventDefault();
        // console.log(data1[price], data1[seat])
        HandleApiXe.addXe(data1)
            .then(async (res) => {
                await Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Tạo dữ liệu thành công!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setType("");
                window.location.reload();
            })
            .catch(() => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Tạo dữ liệu thất bại!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    const handleUpdateCar = async () => {
        console.log(updateCar.id, data1.price);
        HandleApiXe.updateXe(updateCar.id, data1)
            .then(async (res) => {
                await Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Cập nhật dữ liệu thành công!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setUpdateCar({});
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (updateCar !== {}) {
            setCarName(updateCar.ten);
            setCarCode(updateCar.id);
            setPrice(updateCar.giaXe);
            setThumbnail(updateCar.hinhAnh);
            setBrand(updateCar.thuongHieu);
            setSeat(updateCar.soCho);
            setEngine(updateCar.dongCo);
            setPower(updateCar.congSuatCucDai);
            setCapacity(updateCar.dungTich);
            setYear(updateCar.namSanXuat);
            setFuel(updateCar.tieuHaoNhienLieu);
            setSize(updateCar.kichThuoc);
            setColor(updateCar.mauSac);
            setDesc(updateCar.moTa);
            setOrigin(updateCar.nguonGoc);
            setSpeed(updateCar.vanTocToiDa);
            setQuantity(updateCar.soLuong);
            if(updateCar.khuyenMai){
                setKm(updateCar.khuyenMai.ten)
            }
        }
    }, [updateCar]);

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
                        <h3>Thêm sản phẩm</h3>
                        <br />
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid
                                container
                                sx={{ width: "1120px", marginTop: "16px" }}
                            >
                                {inputId.map((item, index) => (
                                    <Grid
                                        key={index}
                                        item
                                        xs={3}
                                        sx={{ height: "93px" }}
                                    >
                                        <label
                                            htmlFor={item[index]}
                                            className={styles.label}
                                        >
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
                                    }}
                                    onClick={handleCreateCar}
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
                                        margin: "0 36px 0 20px",
                                    }}
                                    onClick={() => setType("")}
                                >
                                    Hủy
                                </Button>
                            </div>
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
                        <h3>Cập nhật dữ liệu xe</h3>

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid
                                container
                                sx={{ width: "1120px", marginTop: "16px" }}
                            >
                                {inputId.map((item, index) => (
                                    <Grid
                                        key={index}
                                        item
                                        xs={3}
                                        sx={{ height: "93px" }}
                                    >
                                        <label htmlFor={item[index]}>
                                            {textValue[index]}
                                        </label>
                                        <br />
                                        <input
                                            id={item[index]}
                                            type={inputType[index]}
                                            value={inputValue[index]}
                                            onChange={(e) =>
                                                useStateEvent[index](
                                                    e.target.value
                                                )
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
                                onClick={handleUpdateCar}
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
                                    margin: "0 36px 0 20px",
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
                                    {/* <div className={styles.infoCar}> */}
                                    <Item sx={{ fontWeight: "bold" }}>
                                        {"Tên xe: " + updateCar.ten}
                                    </Item>
                                    <Item>{"Mã xe: " + updateCar.id}</Item>
                                    <Item>
                                        {"Thương hiệu: " + updateCar.thuongHieu}
                                    </Item>
                                    <Item>
                                        {"Động cơ: " + updateCar.dongCo}
                                    </Item>
                                    <Item>
                                        {"Số chỗ ngồi: " + updateCar.soCho}
                                    </Item>
                                    <Item>
                                        {"Kích thước: " + updateCar.kichThuoc}
                                    </Item>
                                    <Item>
                                        {"Vận tốc tối đa: " +
                                            updateCar.vanTocToiDa}
                                    </Item>
                                    <Item>
                                        {"Dung tích: " + updateCar.dungTich}
                                    </Item>
                                    <Item>
                                        {"Tiêu hao nhiên liệu: " +
                                            updateCar.tieuHaoNhienLieu}
                                    </Item>
                                    <Item>
                                        {"Công suất cực đại: " +
                                            updateCar.congSuatCucDai}
                                    </Item>
                                    <Item>
                                        {"Màu sắc: " + updateCar.mauSac}
                                    </Item>
                                    <Item>
                                        {"Số lượng xe: " + updateCar.soLuong}
                                    </Item>
                                    <Item>
                                        {"Khuyến mãi: " + km||"Không có"}
                                    </Item>
                                    {/* </div> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <img
                                        src={updateCar.hinhAnh}
                                        className={styles.readImg}
                                    ></img>
                                    <Item
                                        sx={{
                                            textAlign: "center",
                                            fontSize: "24px",
                                            color: "red",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {"Giá: " +
                                            updateCar.giaXe.toLocaleString() +
                                            " VNĐ"}
                                    </Item>
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
                                    margin: "24px -10px -12px 0",
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

export default CarPopup;
