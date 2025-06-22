import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { 
  AcademicCapIcon, 
  UserIcon, 
  UserCircleIcon, 
  FaceSmileIcon, 
  StarIcon, 
  LightBulbIcon, 
  GlobeAltIcon, 
  HeartIcon 
} from '@heroicons/react/24/solid';

import bg1 from '../assets/Images/bg1.jpg';
import bg2 from '../assets/Images/bg2.jpg';
import bg3 from '../assets/Images/bg3.jpg';
import bg4 from '../assets/Images/bg4.jpg';

const StatBox = ({ Icon, number, label }) => (
  <div 
    className="
      bg-white dark:bg-school-dark-primary 
      p-6 rounded-xl 
      shadow-md 
      text-center 
      transform 
      transition-all 
      hover:scale-105
      dark:shadow-dark
    "
  >
    <div className="flex justify-center mb-4">
      <Icon 
        className="
          h-12 w-12 
          text-school-secondary 
          dark:text-school-accent
        " 
      />
    </div>
    <h3 
      className="
        text-3xl font-bold 
        text-school-primary 
        dark:text-school-accent 
        mb-2
      "
    >
      {number}
    </h3>
    <p 
      className="
        text-gray-600 
        dark:text-gray-300 
        uppercase 
        tracking-wide
      "
    >
      {label}
    </p>
  </div>
);

const WhyChooseUsCard = ({ Icon, title, description }) => (
  <div 
    className="
      bg-white dark:bg-school-dark-primary 
      p-6 rounded-xl 
      shadow-md 
      transform 
      transition-all 
      hover:scale-105
      dark:shadow-dark
    "
  >
    <div 
      className="
        flex justify-center mb-4
        text-school-secondary 
        dark:text-school-accent
      "
    >
      <Icon className="h-12 w-12" />
    </div>
    <h3 
      className="
        text-xl font-bold 
        mb-3 
        text-school-primary 
        dark:text-school-accent
      "
    >
      {title}
    </h3>
    <p 
      className="
        text-gray-600 
        dark:text-gray-300
      "
    >
      {description}
    </p>
  </div>
);

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const backgroundImages = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    // Check dark mode on component mount
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Create a MutationObserver to watch for class changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    // Automatic image rotation
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    // Cleanup
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [backgroundImages.length]);

  const stats = [
    { 
      Icon: AcademicCapIcon, 
      number: '15+', 
      label: 'Subjects' 
    },
    { 
      Icon: UserIcon, 
      number: '200+', 
      label: 'Students' 
    },
    { 
      Icon: UserCircleIcon, 
      number: '20+', 
      label: 'Teachers' 
    },
    { 
      Icon: FaceSmileIcon, 
      number: '100%', 
      label: 'Satisfaction' 
    }
  ];

  const whyChooseUsSections = [
    {
      Icon: StarIcon,
      title: 'Excellence in Education',
      description: 'Committed to providing top-quality education that nurtures individual potential.'
    },
    {
      Icon: LightBulbIcon,
      title: 'Innovative Learning',
      description: 'Cutting-edge teaching methods that inspire creativity and critical thinking.'
    },
    {
      Icon: GlobeAltIcon,
      title: 'Global Perspective',
      description: 'Preparing students to become global citizens with a broad worldview.'
    },
    {
      Icon: HeartIcon,
      title: 'Holistic Development',
      description: 'Focusing on academic, personal, and emotional growth of each student.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="
            absolute inset-0 z-0 
            transition-all duration-1000 ease-in-out
            bg-cover bg-center bg-no-repeat
          "
          style={{ 
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            filter: isDarkMode 
              ? 'brightness(0.6) contrast(1.2)' 
              : 'brightness(0.8) contrast(1.1)'
          }}
        />

        {/* Overlay */}
        <div 
          className="
            absolute inset-0 z-10 
            bg-gradient-to-r 
            from-school-background/70 dark:from-school-dark-background/80 
            to-school-background/30 dark:to-school-dark-background/40
          "
        />

        {/* Content */}
        <div 
          className="
            relative z-20 
            text-center 
            px-4 
            animate-fadeIn
          "
        >
          <h1 
            className="
              text-4xl md:text-6xl 
              font-bold 
              mb-6 
              text-blue-800 dark:text-school-accent
              transition-colors duration-300
            "
          >
            Welcome to Our School
          </h1>
          
          <p 
            className="
              text-xl md:text-2xl 
              mb-8 
              text-school-text dark:text-school-dark-text
              max-w-2xl 
              mx-auto
              transition-colors duration-300
            "
          >
            Empowering students to achieve their full potential through innovative education
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              to="/admissions/form"
              className="
                px-6 py-3 
                bg-school-secondary dark:bg-school-accent 
                text-white 
                rounded-full 
                hover:bg-opacity-90 
                transition-all 
                duration-300 
                shadow-md 
                hover:shadow-lg
              "
            >
              Apply Now
            </Link>
            
            <Link
              to="/about/vision-mission"
              className="
                px-6 py-3 
                border-2 
                border-school-secondary dark:border-school-accent
                text-school-secondary dark:text-school-accent
                rounded-full 
                hover:bg-school-secondary/10 
                transition-all 
                duration-300
              "
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div 
          className="
            absolute 
            bottom-8 
            left-1/2 
            transform 
            -translate-x-1/2 
            flex 
            space-x-2 
            z-30
          "
        >
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`
                w-3 h-3 rounded-full 
                transition-all duration-300
                ${currentImageIndex === index 
                  ? 'bg-school-secondary dark:bg-school-accent w-6' 
                  : 'bg-gray-300 dark:bg-gray-600'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* School Stats Section */}
      <section 
        className="
          py-16 
          bg-gray-100 
          dark:bg-school-dark-primary/20
          transition-colors 
          duration-300
        "
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 
              className="
                text-4xl font-bold 
                text-school-primary 
                dark:text-school-accent 
                mb-4
              "
            >
              Our School at a Glance
            </h2>
            <p 
              className="
                text-xl 
                text-gray-600 
                dark:text-gray-300 
                max-w-2xl 
                mx-auto
              "
            >
              Discover the numbers that make our school exceptional
            </p>
          </div>
        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatBox key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        className="
          py-16 
          bg-white 
          dark:bg-school-dark-background
          transition-colors 
          duration-300
        "
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 
              className="
                text-4xl font-bold 
                text-school-primary 
                dark:text-school-accent 
                mb-4
              "
            >
              Why Choose Us
            </h2>
            <p 
              className="
                text-xl 
                text-gray-600 
                dark:text-gray-300 
                max-w-2xl 
                mx-auto
              "
            >
              We are dedicated to providing an exceptional educational experience
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsSections.map((section, index) => (
              <WhyChooseUsCard key={index} {...section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 