import React from "react";


const PageLayout = ({image, titleDesc, description,cardimage, cardTitle, cardDesc}) =>{

    return(
        <div className="relative h-full w-full">  {/*flex flex-col h-full w-full min-h-screen bg-cover bg-center bg-no-repeat*/}
                <img
                    src={image}
                    alt={titleDesc}
                    className="h-[65vh] w-full object-cover opacity-50%"
                /> 
    
            <div className="relative flex flex-col sm:flex-row item-center justify-center ml-5 mt-3">
                <div className="relative sm:w-1/3 rounded overflow-hidden shadow-lg border border-gray-300 sm:-ml-40 mt-3 bg-white">
                    <div className="px-6 py-4">
                        <div className="font-bold italic text-gray text-center text-xl mb-2 ">{titleDesc}</div>
                            <p className="text-gray-700 text-base text-black text-xl text-right pr-5" dir="rtl">
                            {description}
                            </p>
                    </div>
                </div>
                
                <div className=" sm:absolute sm:left-1/2 sm:top-1/4 sm:justify-center max-w-sm sm:bg-transparent ml-3 mt-3 sm:translate-x-40 left:0">
                        <img src={cardimage} alt="card-image" className="h-full w-full object-contain shadow-lg rounded-2"/>
                </div>   
            </div>
        </div>
    );
}

export default PageLayout;