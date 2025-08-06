import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  AcademicCapIcon,
  UserPlusIcon,
  PhoneIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhotoIcon,
  EnvelopeIcon,
  SparklesIcon,
  CalendarDaysIcon,
  TrophyIcon,
  NewspaperIcon,
  MapPinIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  GlobeAltIcon
} from '@heroicons/react/24/solid';

// Logo Component with enhanced animations
const Logo = () => (
  <div className="flex items-center space-x-3 group cursor-pointer">
    <div className="w-12 h-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative">
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-2xl">
        {/* Main Shield with gradient */}
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path d="M60 10 L25 25 L25 55 Q25 80 60 110 Q95 80 95 55 L95 25 Z" 
              fill="url(#shieldGradient)" 
              stroke="#065f46" 
              strokeWidth="2"
              filter="url(#glow)"
              className="group-hover:drop-shadow-lg transition-all duration-300"/>
        
        {/* Enhanced ZPPSS banner */}
        <ellipse cx="60" cy="22" rx="30" ry="8" fill="white" className="group-hover:fill-green-50 transition-colors duration-300"/>
        <text x="60" y="27" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16a34a" fontFamily="Arial" className="group-hover:fill-green-700">ZPPSS</text>
        
        {/* Cross divider with glow effect */}
        <line x1="60" y1="35" x2="60" y2="80" stroke="white" strokeWidth="2" className="group-hover:stroke-green-100"/>
        <line x1="35" y1="57.5" x2="85" y2="57.5" stroke="white" strokeWidth="2" className="group-hover:stroke-green-100"/>
        
        {/* Enhanced quadrants */}
        <rect x="35" y="35" width="23" height="20" fill="#16a34a" className="group-hover:fill-green-600"/>
        <text x="46.5" y="43" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">ESTD</text>
        <text x="46.5" y="51" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">1978</text>
        
        <rect x="62" y="35" width="23" height="20" fill="white" className="group-hover:fill-green-50"/>
        <path d="M68 42 L72 40 L78 42 L78 50 L72 48 L68 50 Z" fill="none" stroke="#16a34a" strokeWidth="1.5"/>
        <line x1="72" y1="40" x2="72" y2="48" stroke="#16a34a" strokeWidth="1"/>
        <line x1="75" y1="43" x2="79" y2="39" stroke="#16a34a" strokeWidth="1.5"/>
        <circle cx="79" cy="39" r="1" fill="#16a34a"/>
        
        <rect x="35" y="59" width="23" height="19" fill="white" className="group-hover:fill-green-50"/>
        <circle cx="43" cy="67" r="2.5" fill="#fbbf24"/>
        <path d="M40 70 L46 70 L46 75 L40 75 Z" fill="#16a34a"/>
        <circle cx="51" cy="67" r="2.5" fill="#92400e"/>
        <path d="M48 70 L54 70 L54 75 L48 75 Z" fill="#16a34a"/>
        
        <rect x="62" y="59" width="23" height="19" fill="#16a34a" className="group-hover:fill-green-600"/>
        <path d="M70 65 L78 65 L78 70 L76 72 L72 72 L70 70 Z" fill="white"/>
        <rect x="72.5" y="72" width="3" height="4" fill="white"/>
        <rect x="71" y="76" width="6" height="1.5" fill="white"/>
        
        {/* Enhanced bottom banner */}
        <path d="M25 85 Q60 95 95 85 L90 92 Q60 100 30 92 Z" fill="#16a34a" className="group-hover:fill-green-600"/>
        <text x="60" y="92" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">CARE ★ ASPIRE ★ SUCCESS</text>
      </svg>
      
      {/* Floating sparkles */}
      <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <SparklesIcon className="h-4 w-4 text-yellow-300 animate-pulse" />
      </div>
    </div>
    
    <div className="hidden sm:block">
      <h1 className="text-xl font-bold text-white drop-shadow-lg group-hover:text-green-200 transition-colors duration-300 tracking-wide">
        ZPPSS
      </h1>
      <p className="text-xs text-green-200 group-hover:text-white transition-colors duration-300 font-medium">
        Excellence in Education
      </p>
    </div>
  </div>
);

// Enhanced Navigation Items with better icons
const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    description: 'Welcome to ZPPSS'
  },
  { 
    name: 'About', 
    href: '/about', 
    icon: InformationCircleIcon,
    description: 'Learn about our school',
    submenu: [
      { name: 'Vision & Mission', href: '/about/vision-mission', icon: GlobeAltIcon, description: 'Our goals and aspirations' },
      { name: 'Principal Message', href: '/about/principal-message', icon: UserGroupIcon, description: 'From our principal' },
      { name: 'Chairman Message', href: '/about/chairman-message', icon: BuildingOfficeIcon, description: 'From our chairman' },
      { name: 'School Staff', href: '/about/school-staff', icon: AcademicCapIcon, description: 'Meet our dedicated team' },
      { name: 'Code of Conduct', href: '/about/code-of-conduct', icon: ClipboardDocumentListIcon, description: 'Our community standards' }
    ]
  },
  { 
    name: 'Curriculum', 
    href: '/curriculum', 
    icon: AcademicCapIcon,
    description: 'Academic programs',
    submenu: [
      { name: 'Foundation Stage', href: '/curriculum/foundation', icon: SparklesIcon, description: 'Early years education' },
      { name: 'IGCSE', href: '/curriculum/igcse', icon: TrophyIcon, description: 'Cambridge IGCSE program' },
      { name: 'Academic Calendar', href: '/curriculum/academic-calendar', icon: CalendarDaysIcon, description: 'Important academic dates' },
      { name: 'Event Calendar', href: '/curriculum/event-calendar', icon: CalendarDaysIcon, description: 'School events and activities' }
    ]
  },
  { 
    name: 'Admissions', 
    href: '/admissions', 
    icon: UserPlusIcon,
    description: 'Join our community',
    submenu: [
      { name: 'Admission Policy', href: '/admissions/policy', icon: DocumentTextIcon, description: 'Entry requirements' },
      { name: 'Application Form', href: '/admissions/form', icon: ClipboardDocumentListIcon, description: 'Apply online' },
      { name: 'Fee Structure', href: '/admissions/fees', icon: CurrencyDollarIcon, description: 'Tuition and fees' },
      { name: 'School Uniform', href: '/admissions/uniform', icon: ShoppingBagIcon, description: 'Dress code information' }
    ]
  },
  { 
    name: 'Activities', 
    href: '/activities', 
    icon: TrophyIcon,
    description: 'Student life',
    submenu: [
      { name: 'Newsletters', href: '/activities/newsletters', icon: NewspaperIcon, description: 'Latest school news' },
      { name: 'Competitions', href: '/activities/competitions', icon: TrophyIcon, description: 'Academic and sports contests' },
      { name: 'Trips', href: '/activities/trips', icon: MapPinIcon, description: 'Educational excursions' },
      { name: 'Sports', href: '/activities/sports', icon: TrophyIcon, description: 'Athletic programs' },
      { name: 'Articles', href: '/activities/articles', icon: DocumentTextIcon, description: 'Student publications' }
    ]
  },
  { 
    name: 'Gallery',
    href: '/gallery',
    icon: PhotoIcon,
    description: 'Visual memories'
  },
  { 
    name: 'Contact', 
    href: '/contact', 
    icon: EnvelopeIcon,
    description: 'Get in touch'
  },
];

// Enhanced Navigation Component with better hover management
const Navigation = ({ isMenuOpen, closeMenu, isMobile = false }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = (itemName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setHoveredItem(itemName);
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = (e) => {
    // Check if moving to dropdown menu
    const dropdownMenu = e.relatedTarget?.closest('.dropdown-menu');
    if (dropdownMenu) {
      return; // Don't close if moving to dropdown
    }
    
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setOpenDropdown(null);
    }, 300); // Slightly longer delay for better UX
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleDropdownLeave = (e) => {
    // Check if moving back to the parent menu item
    const parentMenuItem = e.relatedTarget?.closest('.menu-item');
    if (parentMenuItem) {
      return; // Don't close if moving back to parent menu
    }
    
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setOpenDropdown(null);
    }, 300);
  };

  const handleItemClick = (itemName, href) => {
    if (isMobile) {
      if (navigationItems.find(item => item.name === itemName)?.submenu) {
        setOpenDropdown(openDropdown === itemName ? null : itemName);
      } else {
        navigate(href);
        closeMenu();
      }
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
        dropdownTimeoutRef.current = null;
      }
    };
  }, []);

  if (isMobile) {
    return (
      <div className={`
        lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Enhanced Backdrop */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-900/30 to-black/70 backdrop-blur-md"
          onClick={closeMenu}
        />
        
        {/* Enhanced Mobile Menu */}
        <div className={`
          absolute top-0 right-0 h-full w-80 max-w-[90vw] 
          bg-gradient-to-br from-green-50 via-white to-green-50
          shadow-2xl transform transition-transform duration-500 ease-in-out
          border-l-4 border-green-500
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Enhanced Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-green-100 bg-gradient-to-r from-green-600 to-emerald-600">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
                  <path d="M60 10 L25 25 L25 55 Q25 80 60 110 Q95 80 95 55 L95 25 Z" fill="white"/>
                  <text x="60" y="27" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16a34a">ZPPSS</text>
                  <text x="60" y="92" textAnchor="middle" fontSize="6" fill="#16a34a" fontWeight="bold">CARE ★ ASPIRE ★ SUCCESS</text>
                </svg>
              </div>
              <div>
                <h2 className="text-white font-bold text-lg tracking-wide">Menu</h2>
                <p className="text-green-100 text-sm">Navigation</p>
              </div>
            </div>
            <button
              onClick={closeMenu}
              className="p-3 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Enhanced Navigation Items */}
          <div className="p-4 space-y-1 h-full overflow-y-auto pb-32">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="group">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={`
                        w-full flex items-center justify-between p-4 rounded-xl
                        text-gray-700 hover:text-green-700 hover:bg-green-50
                        transition-all duration-300 transform hover:scale-[1.02] hover:translate-x-1
                        border-2 border-transparent hover:border-green-200
                        shadow-sm hover:shadow-md
                        animate-slideInRight
                      `}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                          <item.icon className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="text-left">
                          <span className="font-semibold text-base block">{item.name}</span>
                          <span className="text-xs text-gray-500 group-hover:text-green-600">{item.description}</span>
                        </div>
                      </div>
                      <ChevronRightIcon 
                        className={`h-5 w-5 text-green-500 transition-transform duration-300 ${
                          openDropdown === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Enhanced Submenu with proper routing */}
                    {openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1 animate-slideInRight bg-gradient-to-r from-green-25 to-transparent rounded-lg p-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={closeMenu}
                            className={`
                              flex items-center space-x-3 px-4 py-3 rounded-lg
                              text-gray-600 hover:bg-white hover:text-green-700
                              transition-all duration-300 transform hover:translate-x-2
                              border border-transparent hover:border-green-200
                              shadow-sm hover:shadow-md group
                            `}
                            style={{ animationDelay: `${(index * 100) + (subIndex * 50)}ms` }}
                          >
                            <div className="p-1.5 rounded-md bg-green-50 group-hover:bg-green-100 transition-colors duration-300">
                              <subItem.icon className="h-3 w-3 text-green-500" />
                            </div>
                            <div>
                              <span className="font-medium text-sm block">{subItem.name}</span>
                              <span className="text-xs text-gray-400 group-hover:text-green-500">{subItem.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className={`
                      flex items-center space-x-4 p-4 rounded-xl
                      text-gray-700 hover:text-green-700 hover:bg-green-50
                      transition-all duration-300 transform hover:scale-[1.02] hover:translate-x-1
                      border-2 border-transparent hover:border-green-200
                      shadow-sm hover:shadow-md group
                      animate-slideInRight
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                      <item.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-base block">{item.name}</span>
                      <span className="text-xs text-gray-500 group-hover:text-green-600">{item.description}</span>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      <ChevronRightIcon className="w-4 h-4 text-green-500" />
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t-2 border-green-100 bg-gradient-to-r from-green-600 to-emerald-600">
            <div className="text-center text-white">
              <p className="font-bold text-lg tracking-wide">ZOMBA PRIVATE SCHOOL</p>
              <p className="text-green-100 font-medium">Cambridge IGCSE Excellence</p>
              <div className="flex justify-center mt-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Enhanced Desktop Navigation
  return (
    <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1">
      {navigationItems.map((item, index) => (
        <div 
          key={item.name} 
          className="relative flex-1 flex justify-center menu-item"
          onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          {item.submenu ? (
            <button
              onClick={() => handleItemClick(item.name, item.href)}
              className={`
                relative px-4 py-3 rounded-lg font-semibold text-white/90 
                hover:text-white transition-all duration-300 group
                hover:bg-white/10 hover:backdrop-blur-sm
                animate-slideInDown flex items-center space-x-2
                border border-transparent hover:border-white/20
                ${hoveredItem === item.name ? 'bg-white/10 border-white/20 text-white' : ''}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-white/0 to-emerald-400/0 group-hover:from-green-400/20 group-hover:via-white/10 group-hover:to-emerald-400/20 rounded-lg transition-all duration-300" />
              
              {/* Icon and Text with enhanced styling */}
              <div className="relative flex items-center space-x-2">
                <div className="p-1 rounded-md bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <item.icon className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="tracking-wide">{item.name}</span>
                <ChevronDownIcon className={`h-4 w-4 opacity-70 group-hover:opacity-100 transition-all duration-300 ${hoveredItem === item.name ? 'rotate-180' : ''}`} />
              </div>

              {/* Simple Bottom Border Animation */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white/70 group-hover:w-full group-hover:left-0 transition-all duration-300" />

              {/* Enhanced Dropdown Menu */}
              {openDropdown === item.name && (
                <div 
                  className="dropdown-menu absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-200/50 py-3 z-50 animate-slideInDown"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  {/* Dropdown arrow */}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 border-l border-t border-green-200/50 transform rotate-45" />
                  
                  <div className="px-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setOpenDropdown(null);
                          closeMenu?.();
                        }}
                        className={`
                          flex items-center space-x-3 px-4 py-3 rounded-xl
                          text-gray-700 hover:bg-green-50 hover:text-green-700
                          transition-all duration-300 transform hover:translate-x-2 hover:scale-[1.02]
                          border-l-4 border-transparent hover:border-green-500
                          group/item
                        `}
                        style={{ animationDelay: `${subIndex * 50}ms` }}
                      >
                        <div className="p-2 rounded-lg bg-green-100 group-hover/item:bg-green-200 transition-colors duration-300">
                          <subItem.icon className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-sm block">{subItem.name}</span>
                          <span className="text-xs text-gray-500 group-hover/item:text-green-600 transition-colors duration-300">{subItem.description}</span>
                        </div>
                        <ChevronRightIcon className="h-4 w-4 text-green-400 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </button>
          ) : (
            <Link
              to={item.href}
              className={`
                relative px-4 py-3 rounded-lg font-semibold text-white/90 
                hover:text-white transition-all duration-200 group
                animate-slideInDown
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Simple Icon and Text */}
              <div className="relative flex items-center space-x-2">
                <item.icon className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="tracking-wide">{item.name}</span>
              </div>

              {/* Simple Bottom Border Animation */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white/70 group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

// Enhanced Main Navbar Component
const Navbar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Enhanced Custom CSS for animations */}
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3);
          }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-10px);
          }
        }
        
        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: floatUp 0.3s ease-out forwards;
        }
      `}</style>

      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out
          ${isScrolled ? 'shadow-2xl backdrop-blur-lg py-2' : 'shadow-xl backdrop-blur-md py-3'}
        `}
      >
        {/* Enhanced Background with Dynamic Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Dynamic Animated Background Pattern */}
          <div className={`absolute inset-0 transition-all duration-700 ${
            isScrolled 
              ? 'bg-gradient-to-r from-green-700/95 via-green-800/95 to-emerald-800/95' 
              : 'bg-gradient-to-r from-green-600/90 via-green-700/90 to-emerald-700/90'
          }`}>
            {/* Enhanced animated geometric shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/10 rounded-full -translate-x-36 -translate-y-36 animate-pulse" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full translate-x-48 -translate-y-48 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-green-300/10 rounded-full -translate-x-40 translate-y-40 animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Enhanced Overlay for better text contrast */}
          <div className={`absolute inset-0 transition-all duration-700 ${
            isScrolled ? 'bg-black/30' : 'bg-black/20'
          }`} />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="container mx-auto px-4 flex items-center justify-between h-16 relative z-10">
          {/* Enhanced Logo Section */}
          <div className="z-10 transform hover:scale-105 transition-transform duration-300 flex-shrink-0">
            <Link to="/" onClick={closeMenu}>
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <Navigation isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

          {/* Enhanced Right Section */}
          <div className="flex items-center space-x-4 z-10 flex-shrink-0">
            {children}
            
            {/* Enhanced Mobile Menu Button - Now properly positioned on the right */}
            <button
              onClick={toggleMenu}
              className={`
                lg:hidden p-3 rounded-xl transition-all duration-300 group
                bg-white/10 hover:bg-white/20 text-white backdrop-blur-md 
                border-2 border-white/20 hover:border-white/40
                transform hover:scale-110 active:scale-95 hover:rotate-3
                ${isMenuOpen ? 'animate-glow bg-white/20 border-white/40 rotate-180' : ''}
                shadow-lg hover:shadow-xl
              `}
              aria-label="Toggle navigation menu"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 transform transition-transform duration-500 group-hover:rotate-90" />
                ) : (
                  <Bars3Icon className="h-6 w-6 transform transition-transform duration-500 group-hover:scale-110" />
                )}
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-50" />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-900/20">
          <div 
            className="h-full bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 transition-all duration-300 ease-out shadow-lg"
            style={{ 
              width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`,
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
            }}
          />
        </div>

        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />
      </header>

      {/* Enhanced Mobile Navigation */}
      <Navigation isMenuOpen={isMenuOpen} closeMenu={closeMenu} isMobile={true} />

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;