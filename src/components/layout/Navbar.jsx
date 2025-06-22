import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Logo from './Logo';

const Navbar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="
        fixed 
        top-0 
        left-0 
        right-0 
        z-40 
        bg-gray-100/80 
        dark:bg-black/80 
        backdrop-blur-md 
        shadow-sm 
        dark:shadow-dark 
        transition-colors 
        duration-300
      "
    >
      <div 
        className="
          container 
          mx-auto 
          px-4 
          flex 
          justify-between 
          items-center 
          h-16
        "
      >
        <Logo />
        
        <div className="flex justify-end flex-grow">
          {children}
        </div>
      </div>
    </header>
  );
};

export default Navbar; 