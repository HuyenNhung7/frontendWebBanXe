import { FaStar } from "react-icons/fa";
const RatedStar = () => {
    const stars = {
        one: 0,
        two: 0,
        three: 5,
        four: 34,
        five: 975,
        total: 1014
    }


    return(
        <div>
            <div className="flex justify-start">
                <span className="mr-[2px]">5</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={"progress-bar w-[260px] h-[8px] rounded-full bg-green-500 relative"}></div>
                </div>
                <span>{stars.five}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">4</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={"progress-bar w-[10px] h-[8px] rounded-full bg-green-500 relative"}></div>
                </div>
                <span>{stars.four}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">3</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={"progress-bar w-[2px] h-[8px] rounded-full bg-green-500 relative"}></div>
                </div>
                <span>{stars.three}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">2</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={"progress-bar w-[0] h-[8px] rounded-full bg-green-500 relative"}></div>
                </div>
                <span>{stars.two}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">1</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={"progress-bar w-[0] h-[8px] rounded-full bg-green-500 relative"}></div>
                </div>
                <span>{stars.one}</span>
            </div>
        </div>
    )
}

export default RatedStar;