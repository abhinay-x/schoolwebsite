import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaHeart, FaGift, FaTrophy, FaMusic, FaTheaterMasks, FaBookOpen, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { HiSparkles, HiCalendar, HiClock, HiLocationMarker, HiStar, HiAcademicCap } from 'react-icons/hi';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import eventCalendarImage from '/images/eventcalender/event_calender_2025.jpg';

export default function EventCalendarPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, eventId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: 'will be announced',
      time: 'will be announced',
      location: 'School Sports Ground',
      category: 'Sports',
      description: 'Join us for our exciting annual sports day featuring track and field events, team competitions, and award ceremonies.',
      participants: '500+',
      gradient: 'from-orange-500/20 via-red-500/10 to-pink-500/20',
      glowColor: 'shadow-orange-500/25',
      icon: <FaTrophy className="w-6 h-6" />,
      color: 'text-orange-500'
    },
    {
      id: 2,
      title: 'Science Exhibition',
      date: 'will be anounced',
      time: 'will be anounced',
      location: 'Main Auditorium',
      category: 'Academic',
      description: 'Explore innovative science projects and experiments presented by our talented students across all grade levels.',
      participants: '300+',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-teal-500/20',
      glowColor: 'shadow-blue-500/25',
      icon: <FaBookOpen className="w-6 h-6" />,
      color: 'text-blue-500'
    },
    {
      id: 3,
      title: 'Cultural Festival',
      date: 'will be anounced',
      time: 'will be anounced',
      location: 'School Campus',
      category: 'Cultural',
      description: 'Celebrate diversity and creativity with performances, art exhibitions, and cultural displays from around the world.',
      participants: '800+',
      gradient: 'from-purple-500/20 via-violet-500/10 to-fuchsia-500/20',
      glowColor: 'shadow-purple-500/25',
      icon: <FaHeart className="w-6 h-6" />,
      color: 'text-purple-500'
    },
    {
      id: 4,
      title: 'Graduation Ceremony',
      date: '01st July 2026',
      time: 'will be anounced',
      location: 'Main Hall',
      category: 'Academic',
      description: 'Celebrate the achievements of our graduating class with a memorable ceremony honoring their academic journey.',
      participants: '200+',
      gradient: 'from-emerald-500/20 via-green-500/10 to-lime-500/20',
      glowColor: 'shadow-emerald-500/25',
      icon: <FaGraduationCap className="w-6 h-6" />,
      color: 'text-emerald-500'
    }
  ];

  const stats = [
    { icon: <FaCalendarAlt className="w-6 h-6" />, label: 'Events', value: '50+', color: 'text-blue-500' },
    { icon: <FaUsers className="w-6 h-6" />, label: 'Participants', value: '2000+', color: 'text-emerald-500' },
    { icon: <FaTrophy className="w-6 h-6" />, label: 'Awards', value: '100+', color: 'text-yellow-500' },
    { icon: <HiStar className="w-6 h-6" />, label: 'Success Rate', value: '98%', color: 'text-pink-500' }
  ];

  const months = [
    { value: 'all', label: 'All Events' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'june', label: 'June' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-x-hidden py-4 sm:py-6 md:py-8">
      <Helmet>
        <title>Event Calendar - ZPPSS</title>
        <meta name="description" content="Stay updated with all upcoming school events, celebrations, and important dates throughout the academic year." />
      </Helmet>
      
      {/* Custom CSS for advanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .rotate-animation {
          animation: rotate 20s linear infinite;
        }
        .glow-animation {
          animation: glow 3s ease-in-out infinite;
        }
        .shimmer-animation {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }
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
        .swiper-pagination-bullet {
          background: rgba(168, 85, 247, 0.5) !important;
        }
        .swiper-pagination-bullet-active {
          background: rgba(168, 85, 247, 1) !important;
        }
        .swiper-button-next, .swiper-button-prev {
          color: rgba(168, 85, 247, 0.8) !important;
        }
        .swiper-scrollbar-drag {
          background: linear-gradient(to right, rgba(0,0,0,0.2), transparent) !important;
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A855F7' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-400/15 to-pink-400/15 dark:from-purple-400/25 dark:to-pink-400/25 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 dark:from-blue-400/25 dark:to-cyan-400/25 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 dark:from-emerald-400/25 dark:to-teal-400/25 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 dark:from-orange-400/25 dark:to-yellow-400/25 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>
      
      {/* Rotating Elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-purple-300/20 dark:border-purple-300/30 rounded-full rotate-animation"></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-blue-300/20 dark:border-blue-300/30 rounded-full rotate-animation" style={{animationDelay: '10s', animationDirection: 'reverse'}}></div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center p-3 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full mb-8 border border-purple-200/30 dark:border-white/20">
            <HiCalendar className="w-6 h-6 text-purple-500 dark:text-purple-400 mr-3" />
            <span className="text-gray-800 dark:text-white/90 font-semibold">Academic Year 2024-2025</span>
            <HiSparkles className="w-5 h-5 text-pink-500 dark:text-pink-400 ml-3" />
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-300 dark:via-pink-300 dark:to-indigo-300 bg-clip-text text-transparent mb-8 leading-tight">
            Event Calendar
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-white/80 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4 break-words">
            Discover exciting events, celebrations, and activities that make our school community vibrant and engaging.
            <span className="block mt-3 text-lg text-purple-600 dark:text-purple-300">Join us in creating unforgettable memories and celebrating achievements together.</span>
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300 group ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 100 + 300}ms`}}>
                <div className={`${stat.color} mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6 px-2 break-words">{stat.value}</h1>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Image Section */}
        <div className={`max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full`}>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Academic <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Calendar 2024-25</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
              Your complete guide to all school events, holidays, and important dates throughout the academic year.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
            <div className="relative bg-white/40 dark:bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/30 dark:border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src={eventCalendarImage} 
                  alt="School Event Calendar 2024-2025" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Action Button */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:scale-110">
                <FaCalendarAlt className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className={`max-w-7xl mx-auto mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 px-2">
              Upcoming <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/70 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-3">
              Don't miss out on these exciting upcoming events and activities at our school.
            </p>
            
            {/* Month Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
              {months.map((month) => (
                <button
                  key={month.value}
                  onClick={() => setSelectedMonth(month.value)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm ${
                    selectedMonth === month.value
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/30 dark:bg-white/10 text-gray-700 dark:text-white/80 hover:bg-white/50 dark:hover:bg-white/20'
                  } backdrop-blur-md border border-white/20`}
                >
                  {month.label}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 transform hover:scale-105 group ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 150 + 1000}ms`}}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                onMouseMove={(e) => handleMouseMove(e, event.id)}
              >
                {/* Glassmorphism Card */}
                <div className={`relative min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-gradient-to-br ${event.gradient} backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-lg ${event.glowColor} group-hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden w-full`}>
                  
                  {/* Header */}
                  <div className="p-3 sm:p-4 flex-1 overflow-hidden">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                        <div className={event.color}>{event.icon}</div>
                      </div>
                      <div className="bg-white/90 dark:bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-2 sm:py-1 text-xs">
                        <span className="text-xs font-semibold text-gray-800">{event.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-xs leading-relaxed line-clamp-2 text-gray-700 dark:text-white/80">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Event Details */}
                  <div className="p-3 sm:p-4 border-t border-white/20 overflow-hidden">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center text-gray-700 dark:text-white/80 text-xs sm:text-sm">
                        <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-500 flex-shrink-0" />
                        <span className="font-medium truncate">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-white/80 text-xs sm:text-sm">
                        <FaClock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500 flex-shrink-0" />
                        <span className="font-medium truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-white/80 text-xs sm:text-sm">
                        <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-500 flex-shrink-0" />
                        <span className="font-medium truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-white/80 text-xs sm:text-sm">
                        <FaUsers className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-orange-500 flex-shrink-0" />
                        <span className="font-medium">{event.participants} Expected</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex justify-center mt-3 sm:mt-4">
                      <div className="inline-flex items-center justify-center bg-white/40 dark:bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-gray-800 dark:text-white group-hover:bg-white/60 dark:group-hover:bg-white/30 font-semibold transition-all duration-300 shadow-lg group-hover:shadow-xl cursor-pointer text-xs">
                        <span className="mr-1">Learn More</span>
                        <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className={`text-center ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '1200ms'}}>
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto border border-white/20">
            <HiAcademicCap className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
              Questions About Events?
            </h3>
            <p className="text-gray-600 dark:text-white/70 mb-6">
              For any questions about the event calendar or to register for upcoming events, please contact our school office.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base">
              <span className="mr-2">Contact Office</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
