import React from "react";
import '../Components/overlapingdiv.css'; 

function OverLapingDivs(){
    return(
        <div className="container">
            <div className="box0 box1">box1</div>
            <div className="box0 box2">box2</div>
        </div>
    );
}

export default OverLapingDivs;