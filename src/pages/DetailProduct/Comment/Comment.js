import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StaticRatedStar from '../RatingStar/StaticRatedStar';
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect } from 'react';
function Comment (props) {
    useEffect(() => {
        console.log(props.data.length);
    }, [props.data])

    props.data.map((item,index)=>{console.log(item.binhLuan)});
    return (
        <div>
        
        <div className="wrapper-comment w-full p-[20px]">
            {props.data.map((item,index)=>{
                return(
            <div className="comment flex">
            
                <div className="avatar w-[48px] h-[48px] bg-slate-300 rounded-full 
                text-center text-[22px] font-bold text-white leading-[48px]">{item.us.username.charAt(0)}</div>
                
                <div className="px-[10px]">
                    <div className="name-aria flex">
                        <div className="name text-[18px] ">{item.us.username}</div>
                        <span className="text-green-600 leading-[27px] ml-[10px]"><CheckCircleIcon size="large"/></span>
                        <span className="leading-[27px] text-[14px] text-green-600 ml-[3px]">Đã mua xe</span>
                    </div>
                    <div className="user-rating pt-[6px]">
                        <StaticRatedStar size={16}
                                rating={item.rating}/>
                    </div>
                    <div className="text-[16px] text-gray-500 py-[8px]">
                       {item.binhLuan}
                    </div>
                    <div className="flex text-[14px]">
                        <div className="text-gray-400">2 ngày trước</div>
                        <div className='text-gray-400 mx-[4px]'>
                            <CircleIcon className='text-[5px]' size="inherit"/>
                        </div>
                       
                    </div>
                </div>
            </div>)})}
        </div>
        </div>
    );
}

export default Comment