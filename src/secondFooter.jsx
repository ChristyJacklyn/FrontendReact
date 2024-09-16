import React from "react";
import rockyvineyard from './assets/rockyvineyard.jpg';

function SecondFooter() {
    return(
        <>
        <div className="flex h-[65vh] w-full mt-5">
            <img src={rockyvineyard} alt=""  className="opacity-50"/>

        </div>
        </>
    );

}

export default SecondFooter;