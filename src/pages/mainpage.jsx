import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";
import biblestudy from '../assets/Biblestudy.jpg';
import vinyeardimage from '../assets/Vineyard.jpg'
import Groupimage from '../assets/Group.jpg';

function MainPage(){
    const pagedata =[
        {
            image:vinyeardimage,
            titleDesc:'Vineyard',
            description:
                <div class="text-gray-800">
                    <h2 class="text-xl font-bold mb-2">I'm New</h2>
                        <div class="mb-4">
                            <h3 class="text-lg font-semibold">Service Information</h3>
                            <p class="text-gray-600">
                                Sunday Service: 10:00 a.m<br/>
                                Gomarus College<br/>
                                Vondelpad 2, Groningen
                            </p>
                        </div>
                        <div class="mb-4">
                            <h3 class="text-lg font-semibold">Newsletter</h3>
                            <p class="text-gray-600">
                                Discover 
                                <a href="" class="text-blue-500 underline">Vineyard</a>
                            </p>
                        </div>
                        <div class="mb-4">
                            <h3 class="text-lg font-semibold">Leadership</h3>
                            <p class="text-gray-600">
                                The 
                                <a href="" class="text-green-500 underline">Vineyard Movement</a>
                            </p>
                        </div>
                </div>,
            cardimage: vinyeardimage,
            cardTitle:'Hello',
            cardDesc:'We grow in Gods love together!! Much to explore !! want to connect with the group Contact!!'
        }
    ]

    return(
        <div className="min-h-screen flex flex-col">
            <Link to='/'> </Link>
            {pagedata.map((page,index) =>(
                <PageLayout 
                key={index}
                image={page.image}
                titleDesc={page.titleDesc}
                description={page.description}
                cardimage={page.cardimage}
                cardTitle={page.cardTitle}
                cardDesc={page.cardDesc}
                />
            )
            )}
            <div className="relative w-full flex justify-center item-center ml-5 mr-3 p-3">
                <div className=" relative sm:w-[65vw] p-4 bg-white rounded m-2 shadow-lg">
                    <p className="text-xl italic p-4" style={{fontFamily:"'Lora','serif'"}}>
                        <span className=" first-letter:text-6xl first-letter:float-left first-letter:mr-2 first-letter:font-bold">
                            " We are an international, multicultural, English-speaking church. Our members have different nationalities, cultures and denominational backgrounds, but through Jesus Christ, our Savior and Lord, we are bound together in love and unity. We welcome people from any background in our united pursuit to know the Father intimately, follow Jesus radically, and be sensitive to the voice of the Holy Spirit."</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainPage;