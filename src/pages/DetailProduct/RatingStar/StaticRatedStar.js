import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const StaticRatedStar = (props) => {
    const [rating, setRating] = useState(props.rating);

    return (
    <div className="flex">
        {
            [...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return  <div>
                            <FaStar 
                                color={ratingValue <= rating  ? "ffc107" : "#e4e5e9"} 
                                size={props.size}/>
                    </div>
            })
        }
            
        </div>
        );
}

export default StaticRatedStar;