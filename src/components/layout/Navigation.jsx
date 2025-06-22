import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useRef, useEffect } from 'react';

const NavDropdown = ({ 
  title, 
  items, 
  dropdownKey, 
  isMobile = false, 
  onClose = () => {} 
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    if (isMobile) {
      setIsOpen(false);
      onClose();
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <div 
        onClick={isMobile ? toggleDropdown : undefined}
        className={`
          flex items-center cursor-pointer 
          transition-colors duration-300 
          ${isMobile 
            ? 'py-3 px-4 w-full border-b dark:border-gray-700' 
            : 'px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800'
          }
          ${location.pathname.startsWith(`/${dropdownKey}`) || isOpen
            ? 'text-school-secondary dark:text-school-accent' 
            : 'text-gray-800 dark:text-gray-200 hover:text-school-secondary dark:hover:text-school-accent'
          }
        `}
      >
        {title}
        {(isMobile || !isMobile) && (
          <ChevronDownIcon 
            className={`
              h-5 w-5 ml-1 
              transition-transform duration-300
              ${isOpen ? 'rotate-180' : ''}
            `} 
          />
        )}
      </div>
      
      {/* Dropdown Content */}
      <div 
        className={`
          ${isMobile 
            ? `
              w-full 
              ${isOpen ? 'block' : 'hidden'}
              bg-white dark:bg-gray-900
            `
            : `
              absolute 
              left-0 
              mt-2 
              bg-white 
              dark:bg-gray-900 
              shadow-lg 
              rounded-md 
              min-w-[200px] 
              z-50 
              transition-all 
              duration-300 
              ease-in-out
              ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `
          }
        `}
      >
        {items.map((item, index) => (
          <Link 
            key={index}
            to={item.path} 
            onClick={handleItemClick}
            className={`
              block 
              ${isMobile ? 'px-6 py-3 border-b dark:border-gray-700' : 'px-4 py-2'}
              transition-colors duration-300
              ${location.pathname === item.path 
                ? 'text-school-secondary dark:text-school-accent bg-gray-100 dark:bg-gray-800' 
                : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { 
      label: 'About', 
      dropdownKey: 'about',
      items: [
        { label: 'Vision & Mission', path: '/about/vision-mission' },
        { label: "Chairman's Message", path: '/about/chairman-message' },
        { label: "Principal's Message", path: '/about/principal-message' },
        { label: 'School Staff', path: '/about/school-staff' },
        { label: 'Code of Conduct', path: '/about/code-of-conduct' }
      ]
    },
    { 
      label: 'Curriculum', 
      dropdownKey: 'curriculum',
      items: [
        { label: 'Foundation Stage', path: '/curriculum/foundation' },
        { label: 'IGCSE Program', path: '/curriculum/igcse' },
        { label: 'Academic Calendar', path: '/curriculum/academic-calendar' },
        { label: 'Event Calendar', path: '/curriculum/event-calendar' }
      ]
    },
    { 
      label: 'Admissions', 
      dropdownKey: 'admissions',
      items: [
        { label: 'Admission Policy', path: '/admissions/policy' },
        { label: 'Admission Form', path: '/admissions/form' },
        { label: 'Fee Structure', path: '/admissions/fees' },
        { label: 'School Uniform', path: '/admissions/uniform' }
      ]
    },
    { 
      label: 'Activities', 
      dropdownKey: 'activities',
      items: [
        { label: 'Newsletters', path: '/activities/newsletters' },
        { label: 'Competitions', path: '/activities/competitions' },
        { label: 'Educational Trips', path: '/activities/trips' },
        { label: 'Sports & Games', path: '/activities/sports' },
        { label: 'Newspaper Articles', path: '/activities/articles' }
      ]
    },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div 
        className="
          lg:hidden 
          fixed top-4 right-4 z-50 
          bg-white/80 dark:bg-black/80 
          backdrop-blur-md 
          rounded-full 
          p-2 
          shadow-lg
        "
      >
        <button 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="
            focus:outline-none 
            transition-transform 
            duration-300
          "
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-school-secondary dark:text-school-accent" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-school-secondary dark:text-school-accent" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Slide-in Drawer */}
      <div 
        className={`
          lg:hidden 
          fixed inset-0 z-40 
          bg-white dark:bg-gray-900 
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto
        `}
      >
        <div 
          className="
            pt-16 
            pb-8 
            h-full 
            overflow-y-auto 
            bg-white 
            dark:bg-gray-900
          "
        >
          {navLinks.map((link, index) => (
            link.dropdownKey ? (
              <NavDropdown 
                key={index} 
                title={link.label} 
                items={link.items} 
                dropdownKey={link.dropdownKey}
                isMobile={true}
                onClose={closeMobileMenu}
              />
            ) : (
              <Link 
                key={index}
                to={link.path} 
                onClick={closeMobileMenu}
                className={`
                  block 
                  py-3 
                  px-4 
                  border-b 
                  dark:border-gray-700
                  transition-colors 
                  duration-300
                  ${location.pathname === link.path 
                    ? 'text-school-secondary dark:text-school-accent bg-gray-100 dark:bg-gray-800' 
                    : 'text-gray-800 dark:text-gray-200 hover:text-school-secondary dark:hover:text-school-accent'
                  }
                `}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav 
        className="
          hidden 
          lg:flex 
          items-center 
          space-x-6
        "
      >
        {navLinks.map((link, index) => (
          link.dropdownKey ? (
            <NavDropdown 
              key={index} 
              title={link.label} 
              items={link.items} 
              dropdownKey={link.dropdownKey}
            />
          ) : (
            <Link 
              key={index}
              to={link.path} 
              className={`
                text-base 
                font-semibold 
                px-3 
                py-2 
                rounded 
                transition-colors 
                duration-300
                hover:bg-gray-100 
                dark:hover:bg-gray-800
                ${location.pathname === link.path 
                  ? 'text-school-secondary dark:text-school-accent bg-gray-100 dark:bg-gray-800' 
                  : 'text-gray-800 dark:text-gray-200 hover:text-school-secondary dark:hover:text-school-accent'
                }
              `}
            >
              {link.label}
            </Link>
          )
        ))}
      </nav>
    </>
  );
};

export default Navigation; 