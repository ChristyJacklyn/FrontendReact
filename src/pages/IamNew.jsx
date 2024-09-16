import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";
import biblestudy from '../assets/Biblestudy.jpg';
import counselling from '../assets/Counselling.jpg';
import Groupimage from '../assets/Group.jpg';
import SecondCard from "../Components/SectionCard";
import worship from '../assets/Worship.jpg';

function IamNew(){
    const pagedata =[
        {
            image:biblestudy,
            titleDesc:'Services',
            carddescription:`When you come to a Sunday service at Vineyard, what can you expect? We meet every Sunday at 10:00 at the Gomarus College in Groningen. Services include worship, prayer, and a message from the Bible. The service is around 1,5 hours and the overall atmosphere is relaxed and informal. For children up to age 12, there is a weekly program during the service. After each service, people stick around for a cup of coffee or tea and to connect with others.On the first Sunday of each month, we celebrate communion together and all followers of Jesus Christ are welcome to participate. On the last Sunday of each month, we organize a potluck lunch where everyone brings a dish to share.`,
            cardimage: Groupimage,
        }
    ]

    const secondcarddata =[
        {
            secondtitleDesc:'Deccover Vineyard',
            seconddescription:`If you are interested in finding out more about our vision and values and how to get involved, join us at Discover Vineyard! We run Discover Vineyard about 6 times a year and usually after a Family Lunch on Sunday afternoons (12:30-15:00). Our goal with Discover Vineyard is to help you make the connection with our church community and give you a better insight into what we are about. We'd love to get to know you better!
                    If you would like to join us for the next Discover Vineyard, please let us know in the form below`,
            secondcardimage:worship,
        }
    ]

    return(
        <div className="min-h-screen flex flex-col">
            <Link to='/iamnew'> </Link>
            {pagedata.map((page,index) =>(
                <PageLayout 
                key={index}
                image={page.image}
                titleDesc={page.titleDesc}
                description={page.carddescription}
                cardimage={page.cardimage}
                />
            )
            )}

            {secondcarddata.map((second,index) => (
                <SecondCard 
                key={index}
                secondtitleDesc={second.secondtitleDesc}
                seconddescription={second.seconddescription}
                secondcardimage={second.secondcardimage}/>
            ))}

        </div>
    );
}

export default IamNew;