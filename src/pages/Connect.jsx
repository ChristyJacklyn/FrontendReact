import React from "react";
import { Link } from "react-router-dom";
import prayercommutiy from '../assets/PrayerCommunity.jpg';
import PageLayout from "../Components/PageLayout";

function Connect() {

    const connectdata = [{
        image:prayercommutiy,
        titleDesc:'Connect',
        description:`When you come to a Sunday service at Vineyard, what can you expect? We meet every Sunday at 10:00 at the Gomarus College in Groningen. Services include worship, prayer, and a message from the Bible. The service is around 1,5 hours and the overall atmosphere is relaxed and informal. For children up to age 12, there is a weekly program during the service. After each service, people stick around for a cup of coffee or tea and to connect with others.On the first Sunday of each month, we celebrate communion together and all followers of Jesus Christ are welcome to participate. On the last Sunday of each month, we organize a potluck lunch where everyone brings a dish to share.`,
        cardimage: prayercommutiy,
        cardTitle:'This is connect page!!',
        cardDesc:'This is Connect page!!',
    }]
    return(
         <div className="min-h-screen flex flex-col">
            <Link to='/connect'> </Link>
            {connectdata.map((connect,index) =>(
                <PageLayout 
                key={index}
                image={connect.image}
                titleDesc={connect.titleDesc}
                description={connect.description}
                cardimage={connect.cardimage}
                cardTitle={connect.cardTitle}
                cardDesc={connect.cardDesc}
                />
            )
            )}
        </div>
    );
}


export default Connect;