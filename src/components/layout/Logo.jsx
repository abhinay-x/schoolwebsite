import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/Images/logo/ZPPSS_Logo.png';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="
        flex items-center 
        space-x-2 
        text-school-primary 
        dark:text-school-accent 
        font-bold 
        text-xl
        hover:opacity-80 
        transition-opacity 
        duration-300
      "
    >
      <img 
        src={logoImage} 
        alt="ZPPSS Logo" 
        className="
          h-12 w-auto 
          object-contain 
          rounded-md
        " 
      />ZPPSS
     </Link>
  );
};

export default Logo; 