import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { 
  AcademicCapIcon, 
  UserIcon, 
  UserCircleIcon, 
  FaceSmileIcon, 
  StarIcon, 
  LightBulbIcon, 
  GlobeAltIcon, 
  HeartIcon,
  SparklesIcon,
  TrophyIcon,
  BookOpenIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/solid';

import bg1 from '../assets/Images/bg1.jpg';
import bg2 from '../assets/Images/bg2.jpg';
import bg3 from '../assets/Images/bg3.jpg';
import bg4 from '../assets/Images/bg4.jpg';

// Floating particles component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-float opacity-20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      >
        <SparklesIcon className="h-4 w-4 text-yellow-400" />
      </div>
    ))}
  </div>
);

const StatBox = ({ Icon, number, label, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate number counting
          const finalNumber = parseInt(number.replace(/\D/g, ''));
          let current = 0;
          const increment = finalNumber / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= finalNumber) {
              setAnimatedNumber(finalNumber);
              clearInterval(timer);
            } else {
              setAnimatedNumber(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number]);

  return (
    <div 
      ref={ref}
      className={`
        bg-gradient-to-br from-white to-blue-50 dark:from-school-dark-primary dark:to-gray-800
        p-8 rounded-2xl 
        shadow-xl hover:shadow-2xl
        text-center 
        transform transition-all duration-700 ease-out
        hover:scale-110 hover:-translate-y-2
        dark:shadow-dark
        border border-blue-100 dark:border-gray-700
        relative overflow-hidden
        group
        ${isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0 translate-y-10'}
      `}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="flex justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
          {number.includes('%') ? `${animatedNumber}%` : 
           number.includes('+') ? `${animatedNumber}+` : animatedNumber}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 uppercase tracking-wide font-semibold">
          {label}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUsCard = ({ Icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`
        bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-school-dark-primary dark:to-gray-800
        p-8 rounded-2xl 
        shadow-xl hover:shadow-2xl
        transform transition-all duration-700 ease-out
        hover:scale-105 hover:-translate-y-3
        dark:shadow-dark
        border border-blue-100 dark:border-gray-700
        relative overflow-hidden
        group
        ${isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0 translate-y-10'}
      `}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          <div className="p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);

  const backgroundImages = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    // Trigger hero animation on mount
    setTimeout(() => setIsHeroVisible(true), 100);

    // Check dark mode on component mount
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    // Scroll handler for header fade
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Header fades out after 100px of scrolling
      const fadeStart = 100;
      const fadeEnd = 300;
      
      if (currentScrollY <= fadeStart) {
        setHeaderOpacity(1);
      } else if (currentScrollY >= fadeEnd) {
        setHeaderOpacity(0);
      } else {
        setHeaderOpacity(1 - (currentScrollY - fadeStart) / (fadeEnd - fadeStart));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Automatic image rotation with smooth transition
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [backgroundImages.length]);

  const stats = [
    { Icon: BookOpenIcon, number: '15+', label: 'Subjects' },
    { Icon: UserIcon, number: '200+', label: 'Students' },
    { Icon: UserCircleIcon, number: '20+', label: 'Teachers' },
    { Icon: TrophyIcon, number: '100%', label: 'Success Rate' }
  ];

  const whyChooseUsSections = [
    {
      Icon: StarIcon,
      title: 'Excellence in Education',
      description: 'Committed to providing top-quality education that nurtures individual potential and academic excellence.'
    },
    {
      Icon: LightBulbIcon,
      title: 'Innovative Learning',
      description: 'Cutting-edge teaching methods that inspire creativity, critical thinking, and modern digital literacy.'
    },
    {
      Icon: GlobeAltIcon,
      title: 'Global Perspective',
      description: 'Preparing students to become global citizens with international outlook and cultural awareness.'
    },
    {
      Icon: HeartIcon,
      title: 'Holistic Development',
      description: 'Focusing on academic, personal, emotional, and social growth of each individual student.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      {/* School Header - Fades on Scroll */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
        style={{ 
          opacity: headerOpacity,
          transform: `translateY(${headerOpacity === 0 ? '-100%' : '0'})`,
          pointerEvents: headerOpacity === 0 ? 'none' : 'auto'
        }}
      >
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b-2 border-green-600 shadow-xl">
          <div className="container mx-auto px-2 sm:px-4 py-2">
            <div className="flex items-center justify-between">
              {/* Logo and School Info Section */}
              <div className="flex items-start md:items-center space-x-2 md:space-x-4 flex-1 pr-2">
                {/* ZPPS Logo - Responsive sizing */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0">
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    {/* Main Shield */}
                    <path d="M60 10 L25 25 L25 55 Q25 80 60 110 Q95 80 95 55 L95 25 Z" fill="#228B22" stroke="#1F5F1F" strokeWidth="2"/>
                    
                    {/* Top Banner with ZPPSS */}
                    <ellipse cx="60" cy="22" rx="30" ry="8" fill="white"/>
                    <text x="60" y="27" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#228B22" fontFamily="Arial">ZPPSS</text>
                    
                    {/* Cross divider */}
                    <line x1="60" y1="35" x2="60" y2="80" stroke="white" strokeWidth="2"/>
                    <line x1="35" y1="57.5" x2="85" y2="57.5" stroke="white" strokeWidth="2"/>
                    
                    {/* Top Left Quadrant - ESTD 1978 */}
                    <rect x="35" y="35" width="23" height="20" fill="#228B22"/>
                    <text x="46.5" y="43" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">ESTD</text>
                    <text x="46.5" y="51" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">1978</text>
                    
                    {/* Top Right Quadrant - Book and Pen */}
                    <rect x="62" y="35" width="23" height="20" fill="white"/>
                    {/* Book */}
                    <path d="M68 42 L72 40 L78 42 L78 50 L72 48 L68 50 Z" fill="none" stroke="#228B22" strokeWidth="1.5"/>
                    <line x1="72" y1="40" x2="72" y2="48" stroke="#228B22" strokeWidth="1"/>
                    {/* Pen */}
                    <line x1="75" y1="43" x2="79" y2="39" stroke="#228B22" strokeWidth="1.5"/>
                    <circle cx="79" cy="39" r="1" fill="#228B22"/>
                    
                    {/* Bottom Left Quadrant - Students */}
                    <rect x="35" y="59" width="23" height="19" fill="white"/>
                    {/* Student 1 - blonde */}
                    <circle cx="43" cy="67" r="2.5" fill="#FFD700"/>
                    <path d="M40 70 L46 70 L46 75 L40 75 Z" fill="#228B22"/>
                    {/* Student 2 - dark hair */}
                    <circle cx="51" cy="67" r="2.5" fill="#8B4513"/>
                    <path d="M48 70 L54 70 L54 75 L48 75 Z" fill="#228B22"/>
                    
                    {/* Bottom Right Quadrant - Trophy */}
                    <rect x="62" y="59" width="23" height="19" fill="#228B22"/>
                    {/* Trophy */}
                    <path d="M70 65 L78 65 L78 70 L76 72 L72 72 L70 70 Z" fill="white"/>
                    <rect x="72.5" y="72" width="3" height="4" fill="white"/>
                    <rect x="71" y="76" width="6" height="1.5" fill="white"/>
                    {/* Trophy handles */}
                    <path d="M69 67 Q67 67 67 69 Q67 71 69 71" fill="none" stroke="white" strokeWidth="1"/>
                    <path d="M79 67 Q81 67 81 69 Q81 71 79 71" fill="none" stroke="white" strokeWidth="1"/>
                    
                    {/* Bottom Banner */}
                    <path d="M25 85 Q60 95 95 85 L90 92 Q60 100 30 92 Z" fill="#228B22"/>
                    <text x="60" y="92" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">CARE ★ ASPIRE ★ SUCCESS</text>
                  </svg>
                </div>
                
                {/* School Name and Info */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600 dark:text-green-400 leading-tight">
                    ZOMBA PRIVATE PRIMARY & SECONDARY SCHOOL
                  </h1>
                  <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-purple-600 dark:text-purple-400 font-semibold">
                    (Affiliated with Cambridge IGCSE curriculum)
                  </p>
                  <div className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mt-1 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4 gap-y-1">
                      <span><strong>P.O. Box No:</strong> 240 - Zomba, Rep. of Malawi.</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4 gap-y-1">
                      <span><strong>Ph:</strong> <span className="text-red-600">+265 996639468</span>, 0222333786</span>
                      <span className="hidden sm:inline"><strong>Web:</strong> <a href="http://www.zppss.com" className="text-blue-600 hover:text-blue-800 underline">www.zppss.com</a></span>
                      <span className="hidden md:inline"><strong>E-Mail:</strong> <a href="mailto:principal@zppss.com" className="text-blue-600 hover:text-blue-800 underline">principal@zppss.com</a></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hamburger Menu Button */}
              <div className="ml-4 flex-shrink-0">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-3 rounded-lg text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-gray-800 transition-colors border-2 border-green-600 hover:border-green-700"
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile/Tablet Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="mt-4 pb-4 border-t-2 border-green-600">
                <div className="pt-4 grid grid-cols-2 md:grid-cols-5 gap-2">
                  <Link 
                    to="/" 
                    className="block px-4 py-3 text-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-semibold border border-green-200 hover:border-green-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className="block px-4 py-3 text-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-semibold border border-green-200 hover:border-green-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/curriculum" 
                    className="block px-4 py-3 text-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-semibold border border-green-200 hover:border-green-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Curriculum
                  </Link>
                  <Link 
                    to="/admissions" 
                    className="block px-4 py-3 text-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-semibold border border-green-200 hover:border-green-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admissions
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block px-4 py-3 text-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-semibold border border-green-200 hover:border-green-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* Custom CSS for animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
          }
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gentle-bounce {
          animation: gentle-bounce 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: headerOpacity > 0.5 ? '140px' : '0px' }}>
        {/* Floating Particles */}
        <FloatingParticles />
        
        {/* Multiple Background Layers for Depth */}
        <div 
          className="absolute inset-0 z-0 transition-all duration-2000 ease-in-out bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ 
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            filter: isDarkMode 
              ? 'brightness(0.4) contrast(1.3) saturate(1.2)' 
              : 'brightness(0.6) contrast(1.2) saturate(1.1)'
          }}
        />

        {/* Dynamic Gradient Overlay - Reduced Blue Intensity */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-green-800/60 via-emerald-700/50 to-teal-600/40 dark:from-green-900/70 dark:via-emerald-800/60 dark:to-teal-700/50" />
        
        {/* Animated Shapes - Updated Colors */}
        <div className="absolute inset-0 z-15">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full animate-gentle-bounce"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-teal-400/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-green-300/15 rounded-full animate-pulse"></div>
        </div>

        {/* Enhanced Content */}
        <div 
          ref={heroRef}
          className={`
            relative z-20 text-center px-4 max-w-5xl mx-auto
            transition-all duration-1000 ease-out
            ${isHeroVisible ? 'animate-fadeInScale opacity-100' : 'opacity-0 scale-90'}
          `}
        >
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold mb-4 animate-pulse-glow shadow-2xl animate-gradient-shift">
              🎓 Cambridge IGCSE Excellence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 animate-pulse leading-tight">
            ZOMBA PRIVATE SCHOOL
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-light animate-slideInUp">
            Empowering minds through Cambridge IGCSE curriculum, nurturing tomorrow's leaders with excellence and innovation
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Link
              to="/admissions/form"
              className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 font-semibold text-lg animate-slideInLeft"
            >
              <span className="flex items-center">
                Apply Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <Link
              to="/about/vision-mission"
              className="group px-8 py-4 border-2 border-white/70 text-white rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-semibold text-lg hover:border-white animate-slideInRight"
            >
              Discover More
            </Link>
          </div>

          {/* Achievement Badges - Updated */}
          <div className="flex justify-center space-x-8 mt-8 animate-slideInUp" style={{ animationDelay: '0.5s' }}>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-400">A+</div>
              <div className="text-white/80 text-sm">IGCSE Grade</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-emerald-400">Cambridge</div>
              <div className="text-white/80 text-sm">Certified</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-teal-400">Est. 1975</div>
              <div className="text-white/80 text-sm">Heritage</div>
            </div>
          </div>
        </div>

        {/* Enhanced Image Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`
                h-3 rounded-full transition-all duration-500 backdrop-blur-sm
                ${currentImageIndex === index 
                  ? 'bg-white w-8 shadow-lg' 
                  : 'bg-white/50 w-3 hover:bg-white/70'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 dark:from-school-dark-primary/20 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6">
              Our School Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the numbers that showcase our commitment to Cambridge IGCSE excellence and student success
            </p>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatBox key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 dark:from-school-dark-background dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6">
              Why Choose ZPPS
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to providing Cambridge IGCSE excellence that shapes future global leaders
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsSections.map((section, index) => (
              <WhyChooseUsCard key={index} {...section} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;