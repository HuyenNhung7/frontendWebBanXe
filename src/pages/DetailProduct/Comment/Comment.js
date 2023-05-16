import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StaticRatedStar from '../RatingStar/StaticRatedStar';
import CircleIcon from '@mui/icons-material/Circle';
function Comment () {
    return (
        <div className="wrapper-comment w-full p-[20px]">
            <div className="comment flex">
                <div className="avatar w-[48px] h-[48px] bg-slate-300 rounded-full 
                text-center text-[22px] font-bold text-white leading-[48px]">L</div>
                <div className="px-[10px]">
                    <div className="name-aria flex">
                        <div className="name text-[18px] ">Linh</div>
                        <span className="text-green-600 leading-[27px] ml-[10px]"><CheckCircleIcon size="large"/></span>
                        <span className="leading-[27px] text-[14px] text-green-600 ml-[3px]">Đã mua tại AppleDunk</span>
                    </div>
                    <div className="user-rating pt-[6px]">
                        <StaticRatedStar size={16}
                                rating={4}/>
                    </div>
                    <div className="text-[16px] text-gray-500 py-[8px]">
                        máy gaming cấu hình khá mạnh, giúp con mình cấp 3 vừa học vừa giải trí khá ok
                    </div>
                    <div className="flex text-[14px]">
                        <div className="text-gray-400">2 ngày trước</div>
                        <div className='text-gray-400 mx-[4px]'>
                            <CircleIcon className='text-[5px]' size="inherit"/>
                        </div>
                        <div className='text-blue-700 cursor-pointer'>
                            Thích
                        </div>
                        <div className='text-gray-400 mx-[4px]'>
                            <CircleIcon size="small"/>
                        </div>
                        <div className='text-blue-700 cursor-pointer'>
                            Trả lời
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment