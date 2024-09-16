// src/pages/Home.js
import React from 'react';
import AboutCard from '../Components/aboutcard';


const About = () => {
  const cardsData = [
    {
      title:'Login Card 1',
      description:'This is card 1',
    },
    {
      title:'Card 2',
      description:'This is card 2',
    },
    
    {title:'Card 3',
      description:'This is card 3',
    }
  ];


  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <AboutCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  </div>
);
};

export default About;
