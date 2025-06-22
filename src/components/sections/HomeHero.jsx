import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const backgroundImages = [
  '/src/assets/Images/bg1.jpg',
  '/src/assets/Images/bg2.jpg',
  '/src/assets/Images/bg3.jpg',
  '/src/assets/Images/bg4.jpg'
];

const HomeHero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center transition-all duration-1000" 
      style={{ 
        backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black dark:bg-black opacity-30 dark:opacity-50 transition-opacity duration-1000"></div>
      <div className="relative z-10 text-gray-900 dark:text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          We Ensure a Better Education
        </h1>
        <h2 className="text-3xl md:text-5xl mb-8 font-semibold text-school-primary dark:text-yellow-300 animate-fade-in-delay">
          For a Better World
        </h2>
        <Link 
          to="/admissions" 
          className="inline-block bg-school-secondary text-white dark:text-black font-bold py-3 px-8 rounded-full 
          hover:bg-opacity-90 dark:hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HomeHero; 