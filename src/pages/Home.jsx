// src/pages/Home.js
import React from 'react';
import biblestudy from '../assets/Biblestudy.jpg';

const Home = () => {
  return (
    <section className="relative">
      {/* Image 
      <img
        src={biblestudy}
        alt="biblestudy"
        className="h-[60vh] w-full object-cover"
      /> */}

      {/* Paragraph */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-xl font-bold  bg-opacity-50 p-4">
          Welcome to the Bible study session!
        </p>
      </div>
    </section>
  );
};

export default Home;
