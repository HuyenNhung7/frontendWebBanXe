import images from "../../../../assets/image";
import styles from "./Promotion.module.css";
import "./Promotion.css";
import HandleApiXe from "../../../../Apis2/HandleApiXe";
import HandleApiKhuyenMai from "../../../../Apis2/HandleApiKhuyenMai";

import { styled } from "@mui/material/styles";
import {
    Add,
    Search,
    Edit,
    ErrorOutline,
    DeleteOutline,
    Cancel,
} from "@mui/icons-material";
import { useState, useEffect, memo, useRef } from "react";
import {
    IconButton,
    Modal,
    MenuItem,
    Button,
    Grid,
    Paper,
    Select,
    InputLabel,
    FormControl,
    Box,
    Typography,
    Stack,
    Pagination,
} from "@mui/material";

import PromotionPopUp from "../PromotionPopUp";
import HandleApi from "../../../../Apis/HandleApi";
import Swal from "sweetalert2";

function CarManagement() {
    const [typeCar, setTypeCar] = useState("All");
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState();
    const [pageIndex, setPageIndex] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [newData, setNewData] = useState([]);
    const [type, setType] = useState("");
    const [updatePromotion, setUpdatePromotion] = useState({});
    const [Id, setId] = useState(0);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    let user = JSON.parse(localStorage.getItem("user"));
    const inputRef = useRef();

    const gridColumn = [0.5, 2.5, 1, 2, 2, 2];
    const gridTitle = [
        "STT",
        "Tên khuyến mãi",
        "Trị giá",
        "Ngày bắt đầu",
        "Ngày kết thúc",
        "Còn hiệu lực",
    ];

    const valueSelect = [
        "Honda",
        "Toyota",
        "Vinfast",
        "Mercedes",
        "BMW",
        "Ford",
        "Kia",
        "Hyundai",
    ];

    const pageSize = 5;

    // Get API
    // useEffect(() => {
    //     if (typeCar === "All") {
    //         HandleApiXe.getXeByPageIndex(pageIndex).then((res) => {
    //             setData(res.data);
    //             setNewData(res.data);
    //             setDataLength(res.totalXe);
    //         });
    //     } else {
    //         HandleApiXe.getXeByBranch(pageIndex, typeCar).then((res) => {
    //             setData(res.data);
    //             setNewData(res.data);
    //             setDataLength(res.totalXe);
    //         });
    //     }
    // }, [pageIndex, typeCar]);

    useEffect(() => {
        HandleApiKhuyenMai.getAllKM(pageIndex,5).then((res) => {
            console.log(res)
            setData(res.data);
            setNewData(res.data);
            setDataLength(res.totalKM);
        });
    }, []);

    useEffect(() => {
        HandleApiKhuyenMai.getAllKM(pageIndex,5).then((res) => {
            console.log(res)
            setData(res.data);
            setNewData(res.data);
            setDataLength(res.totalKM);
        });
    }, [pageIndex]);


    const handleDeleteItem = async (id) => {
        HandleApiKhuyenMai.deleteKM(id)
            .then((res) => {
                console.log(id);
                setOpenDeleteModal(false);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Xóa mã khuyến mãi thành công!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log(data);
                setNewData(data.filter((item) => item.id !== id));
                window.location.reload();
            })
            .catch((err) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Xóa mã khuyến mãi thất bại!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    const handleClickUpdate = async (id) => {
        console.log(id);
        HandleApiKhuyenMai.getKMById(id)
            .then(async (res) => {
                console.log(res)
                await setUpdatePromotion(res);
                await setType("update");
                console.log(updatePromotion);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleReadInfo = async (id) => {
        HandleApiKhuyenMai.getKMById(id)
            .then(async (res) => {
                await setUpdatePromotion(res);
                await setType("read");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlePageChange = (e, p) => {
        console.log("PageIndex: ", p);
        setPageIndex(p - 1);
    };

    // handle search event
    // useEffect(() => {
    //     if (searchValue.trim() !== "") {
    //         HandleApi.getCarByName(searchValue).then(async (res) => {
    //             await setData(res.cars);
    //             await setDataLength(res.totalCarsFilter);
    //         });
    //     } else {
    //         HandleApi.getCarByPageIndex(pageIndex).then((res) => {
    //             setData(res.cars);
    //             setDataLength(res.totalCars);
    //         });
    //     }
    // }, [searchValue]);
    // console.log("length: ", dataLength);

    // const handleInputChange = (e) => {
    //     setSearchValue(e.target.value);
    // };

    // const handleClear = () => {
    //     setSearchValue("");
    //     inputRef.current.focus();
    // };

    const handleErrorInform = () => {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Bạn không có quyền thêm, xóa, sửa dữ liệu!",
            showConfirmButton: true,
            timer: 3000,
        });
    };

    const handleClickDelete = (id) => {
        setOpenDeleteModal(true);
        setId(id);
    };

    // Custome CSS MUI
    const ItemMain = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        padding: theme.spacing(1),
        textAlign: "center",
        color: "#000",
        boxShadow: "none",
        fontSize: 18,
        fontWeight: "600",
    }));

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        padding: theme.spacing(1),
        textAlign: "center",
        color: "#000",
        boxShadow: "none",
        fontSize: 16,
    }));

    const styleModal = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 8,
    };

    const MenuSelectProps = {
        PaperProps: {
            style: {
                maxHeight: 150,
                overflowX: "scroll",
                //   width: 250,
            },
        },
    };

    // const nameActive = {
    //     "cursor": 'pointer',
    //     "&:active": {
    //         color: 'red',
    //     }
    // }
    // const currentPost = newData.slice(pageIndex * 5 - 5, pageIndex * 5);

    return (
        <div>
            <header className={styles.header}>
                <img
                    src={images.bmwImg}
                    className={styles.header_image}
                    alt="Header img"
                />
                <h1 className={styles.header_heading}>Quản lý khuyến mãi</h1>
            </header>
            <div className={styles.container}>
                <div className={styles.container_header}>
                    <div className={styles.funcContainer}>
                        <div className={styles.search}>
                            <input
                                ref={inputRef}
                                value={searchValue}
                                type="text"
                                placeholder="Tìm kiếm khuyến mãi"
                                spellCheck={false}
                                // onChange={handleInputChange}
                            />

                            {!!searchValue && (
                                <button
                                    className={styles.clear}
                                    // onClick={handleClear}
                                >
                                    <Cancel className={styles.clearIcon} />
                                </button>
                            )}

                            <button
                                className={styles.searchBtn}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                <Search className={styles.searchIcon} />
                            </button>
                        </div>
                    </div>

                    {user.role !== "employee" ? (
                        <Button
                            sx={{
                                height: 40,
                                fontSize: 14,
                                textTransform: "none",
                                marginLeft: "80px",
                            }}
                            variant="contained"
                            color="success"
                            startIcon={<Add />}
                            onClick={() => {
                                setType("create");
                            }}
                        >
                            Thêm mã khuyến mãi
                        </Button>
                    ) : (
                        ""
                    )}
                </div>

                <div className={styles.content}>
                    <Box sx={{ flexGrow: 1, padding: "0 12px" }}>
                        <Grid container sx={{ padding: "0 0 8px" }}>
                            {gridTitle.map((title, index) => (
                                <Grid item xs={gridColumn[index]} key={index}>
                                    <ItemMain>{title}</ItemMain>
                                </Grid>
                            ))}
                        </Grid>
                        {/* Render data */}
                        {/* newData */}
                        {newData?.map((item, index) => (
                            <Grid container key={index}>
                                <Grid item xs={0.5}>
                                    <Item>{index + 1}</Item>
                                </Grid>
                                <Grid item xs={2.5}>
                                    <Item>
                                        {item.ten}
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item>{item.triGiaKM}</Item>
                                </Grid>
                                <Grid item xs={2}>
                                    <Item>{item.ngayBD}</Item>
                                </Grid>
                                <Grid item xs={2}>
                                    <Item>{item.ngayKT}</Item>
                                </Grid>
                                <Grid item xs={2}>
                                    <Item>{item.conHieuLuc?"Đúng":"Không còn"}
                                    </Item>
                                </Grid>
                                <Grid item xs={1.9}>
                                    {/* Update, delete button */}
                                    <Item>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            sx={{
                                                fontSize: "10px",
                                                marginRight: "12px",
                                            }}
                                            onClick={() =>
                                                handleReadInfo(item.id)
                                            }
                                        >
                                            Chi tiết
                                        </Button>
                                        {user.role !== "employee" ? (
                                            <IconButton
                                                color="primary"
                                                size="medium"
                                                sx={{ padding: "8px 6px" }}
                                                onClick={() => {
                                                    handleClickUpdate(item.id);
                                                }}
                                            >
                                                <Edit
                                                    sx={{ fontSize: "22px" }}
                                                />
                                            </IconButton>
                                        ) : (
                                            ""
                                        )}

                                        {user.role !== "employee" ? (
                                            <IconButton
                                                size="medium"
                                                color="error"
                                                onClick={() => {
                                                    setOpenDeleteModal(true);
                                                    setId(item.id);
                                                }}
                                                // onClick={() => {
                                                //     handleClickDelete(item._id);
                                                // }}
                                            >
                                                <DeleteOutline
                                                    sx={{ fontSize: "22px" }}
                                                />
                                            </IconButton>
                                        ) : (
                                            ""
                                        )}
                                        <Modal
                                            open={openDeleteModal}
                                            onClose={() =>
                                                setOpenDeleteModal(false)
                                            }
                                        >
                                            <Box sx={styleModal}>
                                                <ErrorOutline
                                                    className={styles.modalIcon}
                                                />
                                                <Typography
                                                    id="modal-modal-title"
                                                    fontSize="22px"
                                                    fontWeight="600"
                                                    color="#d32f2f"
                                                    textAlign="center"
                                                >
                                                    Bạn có chắc chắn muốn xóa mã khuyến mãi này?
                                                </Typography>
                                                <Typography
                                                    id="modal-modal-description"
                                                    sx={{ mt: 2, mb: 1 }}
                                                    fontSize="16px"
                                                    textAlign="center"
                                                >
                                                    Sau khi xóa sẽ không thể
                                                    hoàn tác!
                                                </Typography>
                                                <div
                                                    className={styles.modalBtn}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        onClick={() =>
                                                            handleDeleteItem(Id)
                                                        }
                                                        sx={{
                                                            fontSize: "14px",
                                                            marginRight: "12px",
                                                        }}
                                                    >
                                                        Xóa luôn
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => {
                                                            setOpenDeleteModal(
                                                                false
                                                            );
                                                            console.log(Id);
                                                        }}
                                                        sx={{
                                                            fontSize: "14px",
                                                            width: "70px",
                                                        }}
                                                    >
                                                        Hủy
                                                    </Button>
                                                </div>
                                            </Box>
                                        </Modal>
                                    </Item>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>
                </div>

                <div className={styles.pagination}>
                    <Stack spacing={2}>
                        <Pagination
                            size="large"
                            color="primary"
                            count={Math.ceil(dataLength / pageSize)}
                            showFirstButton
                            showLastButton
                            sx={{ margin: "32px 0 56px" }}
                            onChange={handlePageChange}
                        />
                    </Stack>
                </div>
            </div>
            <PromotionPopUp
                type={type !== "" ? type : ""}
                setType={setType}
                updatePromotion={updatePromotion}
                setUpdatePromotion={setUpdatePromotion}
            />
        </div>
    );
}

export default memo(CarManagement);
