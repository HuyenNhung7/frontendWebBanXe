import InformationDetailProduct from "./components/InformationDetailProduct";
import { useState } from "react";
import "./DetailBottom.css";
import DetailBottom from "./DetailBottom";


function Detailproduct () {

    return (
        <div>
            <InformationDetailProduct/>
            <div>
                <DetailBottom />
            </div>
            
        </div>
    );
}
export default Detailproduct;