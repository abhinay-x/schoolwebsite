import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Autoplay, Pagination, EffectCards } from 'swiper/modules';
import { FaTrophy, FaMedal, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaEye, FaStar, FaHeart, FaAward, FaCheckCircle, FaInfoCircle, FaArrowRight, FaBookOpen, FaRunning, FaFutbol } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiDocumentText } from 'react-icons/hi';
import { CameraIcon, MapPinIcon, CalendarIcon, EyeIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Enhanced sports images data with glassmorphism properties
const sportsImages = [
  { 
    id: 1, 
    src: '/public/images/sports/1.jpg', 
    alt: 'Sports Day 2021',
    title: 'Track & Field Events',
    event: 'Athletics Competition',
    date: 'Sports Day 2021',
    participants: '120+ Students',
    description: 'Exciting track and field events showcasing speed, agility, and endurance',
    gradient: 'from-orange-500/20 via-red-500/10 to-pink-500/20',
    glowColor: 'shadow-orange-500/25',
    color: 'text-orange-500'
  },
  { 
    id: 2, 
    src: '/public/images/sports/2.jpg', 
    alt: 'Sports Day 2021',
    title: 'Football Championship',
    event: 'Inter-House Football',
    date: 'Sports Day 2021',
    participants: '80+ Students',
    description: 'Thrilling football matches between different school houses',
    gradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
    glowColor: 'shadow-green-500/25',
    color: 'text-green-500'
  },
  { 
    id: 3, 
    src: '/public/images/sports/3.jpg', 
    alt: 'Sports Day 2021',
    title: 'Basketball Tournament',
    event: 'School Basketball League',
    date: 'Sports Day 2021',
    participants: '60+ Students',
    description: 'Fast-paced basketball games demonstrating teamwork and skill',
    gradient: 'from-blue-500/20 via-sky-500/10 to-cyan-500/20',
    glowColor: 'shadow-blue-500/25',
    color: 'text-blue-500'
  },
  { 
    id: 4, 
    src: '/public/images/sports/4.jpg', 
    alt: 'Sports Day 2021',
    title: 'Swimming Competition',
    event: 'Aquatic Sports',
    date: 'Sports Day 2021',
    participants: '45+ Students',
    description: 'Swimming races showcasing aquatic prowess and technique',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20',
    glowColor: 'shadow-cyan-500/25',
    color: 'text-cyan-500'
  },
  { 
    id: 5, 
    src: '/public/images/sports/5.jpg', 
    alt: 'Sports Day 2021',
    title: 'Volleyball Championship',
    event: 'Team Volleyball',
    date: 'Sports Day 2021',
    participants: '70+ Students',
    description: 'Energetic volleyball matches promoting team coordination',
    gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
    glowColor: 'shadow-purple-500/25',
    color: 'text-purple-500'
  },
  { 
    id: 6, 
    src: '/public/images/sports/6.jpg', 
    alt: 'Sports Day 2021',
    title: 'Tennis Tournament',
    event: 'Individual Tennis',
    date: 'Sports Day 2021',
    participants: '30+ Students',
    description: 'Competitive tennis matches showcasing individual excellence',
    gradient: 'from-yellow-500/20 via-amber-500/10 to-orange-500/20',
    glowColor: 'shadow-yellow-500/25',
    color: 'text-yellow-600'
  },
  { 
    id: 7, 
    src: '/public/images/sports/7.jpg', 
    alt: 'Sports Day 2021',
    title: 'Cricket Championship',
    event: 'School Cricket League',
    date: 'Sports Day 2021',
    participants: '90+ Students',
    description: 'Exciting cricket matches demonstrating strategy and skill',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
    glowColor: 'shadow-emerald-500/25',
    color: 'text-emerald-500'
  },
  { 
    id: 8, 
    src: '/public/images/sports/8.jpg', 
    alt: 'Sports Day 2021',
    title: 'Badminton Tournament',
    event: 'Racquet Sports',
    date: 'Sports Day 2021',
    participants: '40+ Students',
    description: 'Fast-paced badminton games showcasing agility and precision',
    gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/20',
    glowColor: 'shadow-pink-500/25',
    color: 'text-pink-500'
  },
  { 
    id: 9, 
    src: '/public/images/sports/9.jpg', 
    alt: 'Sports Day 2021',
    title: 'Relay Races',
    event: 'Team Athletics',
    date: 'Sports Day 2021',
    participants: '100+ Students',
    description: 'Thrilling relay races promoting teamwork and speed',
    gradient: 'from-indigo-500/20 via-purple-500/10 to-violet-500/20',
    glowColor: 'shadow-indigo-500/25',
    color: 'text-indigo-500'
  },
  { 
    id: 10, 
    src: '/public/images/sports/10.jpg', 
    alt: 'Sports Day 2021',
    title: 'Field Events',
    event: 'Throwing & Jumping',
    date: 'Sports Day 2021',
    participants: '85+ Students',
    description: 'Field events including shot put, long jump, and high jump',
    gradient: 'from-teal-500/20 via-cyan-500/10 to-blue-500/20',
    glowColor: 'shadow-teal-500/25',
    color: 'text-teal-500'
  },
  { 
    id: 11, 
    src: '/public/images/sports/11.jpg', 
    alt: 'Sports Day 2021',
    title: 'Award Ceremony',
    event: 'Prize Distribution',
    date: 'Sports Day 2021',
    participants: 'All Students',
    description: 'Celebrating achievements and recognizing outstanding performances',
    gradient: 'from-amber-500/20 via-yellow-500/10 to-orange-500/20',
    glowColor: 'shadow-amber-500/25',
    color: 'text-amber-600'
  },
  { 
    id: 12, 
    src: '/public/images/sports/12.jpg', 
    alt: 'Sports Day 2021',
    title: 'Team Sports',
    event: 'Collaborative Games',
    date: 'Sports Day 2021',
    participants: '150+ Students',
    description: 'Various team sports promoting collaboration and sportsmanship',
    gradient: 'from-rose-500/20 via-pink-500/10 to-red-500/20',
    glowColor: 'shadow-rose-500/25',
    color: 'text-rose-500'
  },
  { 
    id: 13, 
    src: '/public/images/sports/13.jpg', 
    alt: 'Sports Day 2021',
    title: 'Opening Ceremony',
    event: 'Sports Day Launch',
    date: 'Sports Day 2021',
    participants: 'Entire School',
    description: 'Grand opening ceremony marking the start of sports festivities',
    gradient: 'from-violet-500/20 via-purple-500/10 to-indigo-500/20',
    glowColor: 'shadow-violet-500/25',
    color: 'text-violet-500'
  },
  { 
    id: 14, 
    src: '/public/images/sports/14.jpg', 
    alt: 'Sports Day 2021',
    title: 'Marathon Race',
    event: 'Long Distance Running',
    date: 'Sports Day 2021',
    participants: '75+ Students',
    description: 'Endurance marathon showcasing stamina and determination',
    gradient: 'from-slate-500/20 via-gray-500/10 to-zinc-500/20',
    glowColor: 'shadow-slate-500/25',
    color: 'text-slate-600'
  },
  { 
    id: 15, 
    src: '/public/images/sports/15.jpg', 
    alt: 'Sports Day 2021',
    title: 'Victory Celebration',
    event: 'Championship Finale',
    date: 'Sports Day 2021',
    participants: 'Champions',
    description: 'Celebrating victories and the spirit of sportsmanship',
    gradient: 'from-gold-500/20 via-yellow-500/10 to-amber-500/20',
    glowColor: 'shadow-yellow-500/25',
    color: 'text-yellow-500'
  }
];

// Stats and features data
const stats = [
  { icon: <FaTrophy className="w-6 h-6" />, label: 'Sports Events', value: '15+', color: 'text-orange-500' },
  { icon: <FaUsers className="w-6 h-6" />, label: 'Participants', value: '200+', color: 'text-blue-500' },
  { icon: <FaMedal className="w-6 h-6" />, label: 'Awards Given', value: '50+', color: 'text-yellow-500' },
  { icon: <FaStar className="w-6 h-6" />, label: 'Achievement Rate', value: '95%', color: 'text-purple-500' }
];

const features = [
  {
    icon: <FaRunning className="w-6 h-6" />,
    title: 'Physical Fitness',
    description: 'Promoting health, fitness, and active lifestyle among students',
    color: 'text-orange-500'
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: 'Team Spirit',
    description: 'Building teamwork, collaboration, and sportsmanship values',
    color: 'text-blue-500'
  },
  {
    icon: <FaTrophy className="w-6 h-6" />,
    title: 'Competitive Excellence',
    description: 'Encouraging healthy competition and pursuit of excellence',
    color: 'text-yellow-500'
  }
];

const achievements = [
  {
    title: 'Presidential Cup',
    description: 'Participated in the prestigious Presidential Cup, showcasing exceptional talent and sportsmanship.',
    icon: <FaTrophy className="w-8 h-8" />,
    gradient: 'from-yellow-500/20 to-amber-500/20',
    color: 'text-yellow-600'
  },
  {
    title: 'Inter-School Tournaments',
    description: 'Consistent winners in various inter-school competitions, bringing home numerous trophies and medals.',
    icon: <FaMedal className="w-8 h-8" />,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    color: 'text-blue-600'
  },
  {
    title: 'Regional Championships',
    description: 'Outstanding performance in regional sports championships across multiple disciplines.',
    icon: <FaAward className="w-8 h-8" />,
    gradient: 'from-purple-500/20 to-violet-500/20',
    color: 'text-purple-600'
  },
  {
    title: 'Sports Excellence Awards',
    description: 'Recognition for promoting sports culture and developing athletic talent in students.',
    icon: <FaStar className="w-8 h-8" />,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    color: 'text-emerald-600'
  }
];

const SportsPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSport, setActiveSport] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, itemId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-indigo-900 dark:to-blue-900 transition-colors duration-300">
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-10px); }
          70% { transform: translateY(-5px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float { animation: float 6s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .slide-in-up { animation: slide-in-up 0.8s ease-out; }
        .bounce { animation: bounce 2s infinite; }
        .rotate { animation: rotate 20s linear infinite; }
        `}
      </style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-orange-600/20 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/10 to-pink-600/10 rounded-full blur-3xl rotate"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl border border-white/20 glow">
              <FaTrophy className="w-8 h-8 text-orange-500" />
            </div>
            <HiSparkles className="w-6 h-6 text-yellow-500 bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Sports & Games
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-6 rounded-full glow"></div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Annual Sports Day 2021 - Celebrating Athletic Excellence
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-orange-500/20"></div>
              <div className="relative p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  We have emerged as victors in friendly and tournament sporting games played against other schools. 
                  Our school has participated in the prestigious Presidential Cup and we celebrated victory.
                </p>
                <p className="text-orange-600 dark:text-orange-400 italic text-lg font-medium">
                  Sports Day at ZPPS School - Second Term 2021/22 Academic Year.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-800/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 glow group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 mb-4 ${stat.color} group-hover:scale-110 transition-all duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className={`mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaRunning className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sports Benefits</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 group-hover:scale-105 transition-all duration-300"></div>
                    <div className="relative p-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 mb-4 ${feature.color} group-hover:scale-110 transition-all duration-300`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Image Slider */}
        <div className={`mb-8 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30 glow"></div>
            <div className="relative p-4">
              <Swiper
                spaceBetween={10}
                navigation={true}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs, Pagination, Autoplay]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                className="main-swiper rounded-2xl overflow-hidden"
                onSlideChange={(swiper) => setActiveSport(swiper.realIndex)}
              >
                {sportsImages.map((image, index) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative h-96 md:h-[500px] group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Thumbnail Slider */}
        <div className={`mb-12 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper"
            breakpoints={{
              640: { slidesPerView: 6 },
              768: { slidesPerView: 8 },
              1024: { slidesPerView: 10 }
            }}
          >
            {sportsImages.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div 
                  className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    activeSport === index 
                      ? 'border-orange-500 scale-110 shadow-lg shadow-orange-500/25' 
                      : 'border-white/20 hover:border-white/40 hover:scale-105'
                  }`}
                  onMouseEnter={() => setHoveredItem(image.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onMouseMove={(e) => handleMouseMove(e, image.id)}
                >
                  {hoveredItem === image.id && (
                    <div 
                      className="absolute inset-0 rounded-xl opacity-30 pointer-events-none transition-opacity duration-300 z-10"
                      style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 50%)`
                      }}
                    ></div>
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-16 md:h-20 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Sports Achievements Section */}
        <div className={`mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Sports Achievements</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Celebrating our victories and recognizing outstanding athletic performances</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30 group-hover:scale-105 transition-all duration-300`}></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${achievement.color} group-hover:scale-110 transition-all duration-300`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{achievement.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.7s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-orange-500/30"></div>
            <div className="relative p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl border border-orange-500/30">
                  <FaInfoCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Join Our Sports Programs</h2>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Be part of our athletic community! Develop your skills, build character, and experience the thrill 
                of competition in a supportive and encouraging environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Professional Coaching</span>
                </div>
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Modern Facilities</span>
                </div>
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Competitive Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
