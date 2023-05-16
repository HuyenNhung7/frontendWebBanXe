// đây là modal đánh giá, hiện lên khi click vào nút gửi đánh giá

import classes from "./RatingModal.module.css";
import CloseIcon from '@mui/icons-material/Close';
import StarRating from "../StarRating";

import { useState } from "react";
const RatingModal = (props) => {

    const [danhGia, setDanhGia] = useState()

    const handleChildeElementClick = (e) => {
        e.stopPropagation();
    }

    // Lấy giá trị rating khi mouse enter để hiển thị mức độ đánh giá: không thích, bình thường, tạm được, ...
    const [ratingOut, setRatingOut] = useState(null);

    // Lấy giá trị rating value khi click
    const [ratingValue, setRatingValue] = useState(null) ;

    // Lấy đánh giá
    const handleGetDanhGia = (e) => {
        setDanhGia(e.target.value)
    }

    const dgData = {
        makh: props.user.makh,
        masp: "",
        tenkh: props.user.hoten,
        binhluan: danhGia,
        rating: ratingValue,
    }

    const product = {
            image: "https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb_420.png",
            name: "iPhone 14 Pro Max 128GB",
            oldPrice: 34990000,
            newPrice: 27390000,
            note: ""
        };
    {return props.user?(     
        <div className={props.closeRatingModal === 0? classes.overlay : "hidden"}
            onClick={()=>props.setCloseRatingModal(1)}>
            <div onClick={handleChildeElementClick} className={classes.modal}>
                {/* Header của modal */}
                <div className="flex text-[22px] items-center justify-between text-slate-600 
                px-[20px] py-[10px] border-b-[1px] border-b-slate-300">
                    <div className="">Đánh giá sản phẩm</div>
                    <div onClick={()=>props.setCloseRatingModal(1)} className="h-20px cursor-pointer">
                        <CloseIcon fontSize="20px"/>
                    </div>
                </div>
                {/* form */}
                <div className="px-[20px] py-[16px]">
                    {/* Phần trên của body */}
                    <div className="text-center text-slate-600">
                        <img src={product.image}
                        className="w-[96px] block mx-auto"/>
                        <div className="text-[18px] my-[10px]">{product.name}</div>
                        <div className="h-[64px]">
                            <StarRating
                                size={28}
                                setRatingOut={setRatingOut}
                                setRatingValue={setRatingValue}/>
                            <div className={ratingOut === 1|| ratingValue===1?"text-[16px] pt-[5px]":"hidden"}>Không thích</div>
                            <div className={ratingOut === 2|| ratingValue===2?"text-[16px] pt-[5px]":"hidden"}>Tạm được</div>
                            <div className={ratingOut === 3|| ratingValue===3?"text-[16px] pt-[5px]":"hidden"}>Bình thường</div>
                            <div className={ratingOut === 4|| ratingValue===4?"text-[16px] pt-[5px]":"hidden"}>Hài lòng</div>
                            <div className={ratingOut === 5|| ratingValue===5?"text-[16px] pt-[5px]":"hidden"}>Tuyệt vời</div>
                        </div>

                        <div className="">
                            <textarea className="border-[1px] border-slate-300 outline-none rounded-[4px] 
                            block h-[72px] w-full text-[14px] py-[6px] px-[12px]" 
                            placeholder="Hãy chia sẻ cảm nhận của bạn về sản phẩm..." rows={4}
                            onChange={handleGetDanhGia}></textarea>
                        </div>
                    </div>

                    <hr className="h-[1px] w-full my-[15px] bg-slate-300"/>
                    {/* Phần dưới của body */}
                    <div>
                        <div className="h-[26px] flex items-center text-[16px] text-slate-600">
                            <input type="radio" value="Male" name="gender" /> 
                            <span className="ml-[4px] mr-[15px]">Anh</span>
                            <input type="radio" value="Female" name="gender" />
                            <span className="ml-[4px]">Chị</span>
                        </div>
                        <div className="text-[14px]">
                            <div className="grid grid-cols-2 gap-[15px] h-[36px] mb-[10px]">
                                <input className=" px-[10px] outline-none border-[1px] border-slate-300 rounded-[4px]"
                                    placeholder="Nhập họ và tên"></input>
                                <input className="px-[10px] outline-none border-[1px] border-slate-300 rounded-[4px]"
                                    placeholder="Nhập số điện thoại"></input>
                            </div>
                            <input className="px-[10px] w-full outline-none border-[1px] border-slate-300 rounded-[4px] h-[36px]"
                                    placeholder="Nhập email để nhận thông báo phản hồi"></input>
                        </div>
                    </div>
                </div>
                {/* footer modal */}
                <div className="h-[50px] text-center">
                <button className="text-[16px] text-white bg-blue-600 w-[160px]
                            rounded-[5px] font-extralight p-[10px]">HOÀN TẤT</button>
                </div>

            </div>
        </div>
    ):  <div className={props.closeRatingModal === 0? classes.overlay : "hidden"}
    onClick={()=>props.setCloseRatingModal(1)}>
    <div onClick={handleChildeElementClick} className={classes.modal1}>
        {/* Header của modal */}
        <div className="flex text-[22px] items-center justify-between text-slate-600 
        px-[20px] py-[10px] border-b-[1px] border-b-slate-300">
            <div className="">Đánh giá sản phẩm</div>
            <div onClick={()=>props.setCloseRatingModal(1)} className="h-20px cursor-pointer">
                <CloseIcon fontSize="20px"/>
            </div>
        </div>
        {/* form */}
        <div className="px-[20px] py-[16px]">
            {/* Phần trên của body */}
            <div className="text-center text-slate-600">
                <img src={product.image}
                className="w-[96px] block mx-auto"/>
                <div className=" my-[10px]">{product.name}</div>
                
            </div>

            <hr className="h-[1px] w-full my-[15px] bg-slate-300"/>
            <div className="text-center text-[24px] text-slate-600 my-[20px]" >Vui lòng đăng nhập để gửi đánh giá!</div> 
        </div>
    </div>
</div>
}
}

export default RatingModal;