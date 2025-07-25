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
          relative
        "
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="w-full h-full ml-40 relative"
            style={{
              width: 'calc(100% - 10rem)'
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                // backgroundImage: `url('/src/assets/header/zppss_header.jpg')`,
                backgroundSize: '36% 100%',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.1)'
              }}
            />
            <div 
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              style={{
                mixBlendMode: 'overlay'
              }}
            />
          </div>
        </div>
        
        <div className="z-10">
          <Logo />
        </div>
        
        <div className="flex justify-end flex-grow z-10">
          {children}
        </div>
      </div>
    </header>
  );
};

export default Navbar; 