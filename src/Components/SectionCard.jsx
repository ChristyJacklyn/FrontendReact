import React from "react";


const SecondCard =({secondtitleDesc,seconddescription,secondcardimage}) => {
    return(
        <div className="relative flex flex-col sm:flex-row item-center ml-5 mt-3">
            <div className="relative justufy-end sm:w-1/3 rounded overflow-hidden shadow-lg border border-gray-300  mt-3 bg-white">
                { /*<img className="w-full h-48 object-cover" src={imageUrl} alt={title} />*/}
                <div className="px-6 py-4">
                    <div className="font-bold italic text-gray text-center text-xl mb-2 ">{secondtitleDesc}</div>
                        <p className="text-gray-700 text-base text-black text-xl text-right pr-5" dir="rtl">
                        {seconddescription}
                        </p>
                </div>
            </div>
            <div className="sm:justify-center relative max-w-sm bg-transparent ml-3 mt-3 p-4 bg-red">
                    <img src={secondcardimage} alt="card-image" className="h-auto w-auto object-contain shadow-lg rounded-2"/> 
            </div>
        </div>
    );
}


export default SecondCard;