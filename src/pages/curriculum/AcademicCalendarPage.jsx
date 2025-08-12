import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import { FaCalendarAlt, FaClock, FaGraduationCap, FaTrophy, FaBookOpen, FaUsers, FaStar, FaArrowRight, FaSchool, FaAward, FaHeart, FaEnvelope } from 'react-icons/fa';
import { HiSparkles, HiCalendar, HiClock, HiAcademicCap, HiStar, HiLightBulb } from 'react-icons/hi';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

export default function AcademicCalendarPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTerm, setHoveredTerm] = useState(null);
  const [selectedTerm, setSelectedTerm] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, termId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const terms = [
    {
      id: 1,
      title: 'FIRST TERM',
      period: 'SEP-DEC 2025',
      duration: '14 weeks',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
      glowColor: 'shadow-emerald-500/25',
      icon: <FaSchool className="w-6 h-6" />,
      color: 'text-emerald-500',
      events: [
        { description: 'TERM BEGINS', date: 'Tuesday, 02nd September 2025', type: 'start', icon: <FaCalendarAlt className="w-4 h-4" /> },
        { description: 'PRIZE GIVING CEREMONY', date: 'Friday, 26th September 2025', type: 'event', icon: <FaTrophy className="w-4 h-4" /> },
        { description: 'MIDTERM HOLIDAY', date: 'Monday, 13th October – Friday, 17th October 2025', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'MOTHERS DAY HOLIDAY', date: 'Wednesday, 15th October 2025', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'MUFTI DAY', date: 'Thursday, 04th December 2025', type: 'event', icon: <FaStar className="w-4 h-4" /> },
        { description: 'END OF FIRST TERM', date: 'Friday, 05th December 2025', type: 'end', icon: <FaCalendarAlt className="w-4 h-4" /> }
      ]
    },
    {
      id: 2,
      title: 'SECOND TERM',
      period: 'JAN-APRIL 2025',
      duration: '13 weeks',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20',
      glowColor: 'shadow-blue-500/25',
      icon: <FaBookOpen className="w-6 h-6" />,
      color: 'text-blue-500',
      events: [
        { description: 'TERM BEGINS', date: 'Tuesday, 06th January 2026', type: 'start', icon: <FaCalendarAlt className="w-4 h-4" /> },
        { description: 'CHILEMBWE DAY HOLIDAY', date: 'Thursday, 15th January 2026', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'MIDTERM HOLIDAY', date: 'Monday, 16th February – Friday, 20th February 2026', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'MARTYRS DAY HOLIDAY', date: 'Tuesday, 3rd March 2026', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'ANNUAL SPORTS DAY', date: 'Wednesday, 25th March 2026', type: 'event', icon: <FaTrophy className="w-4 h-4" /> },
        { description: 'END OF SECOND TERM', date: 'Friday, 27th March 2026', type: 'end', icon: <FaCalendarAlt className="w-4 h-4" /> }
      ]
    },
    {
      id: 3,
      title: 'THIRD TERM',
      period: 'APRIL-JULY 2026',
      duration: '11 weeks',
      gradient: 'from-orange-500/20 via-red-500/10 to-pink-500/20',
      glowColor: 'shadow-orange-500/25',
      icon: <FaGraduationCap className="w-6 h-6" />,
      color: 'text-orange-500',
      events: [
        { description: 'TERM BEGINS', date: 'Tuesday, 15th April 2025', type: 'start', icon: <FaCalendarAlt className="w-4 h-4" /> },
        { description: 'LABOUR DAY HOLIDAY', date: 'Thursday, 01st May 2025', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'KAMUZU DAY HOLIDAY', date: 'Thursday, 15th May 2025', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'MIDTERM HOLIDAY', date: 'Thursday, 29th & Friday, 30th May 2025', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'GRADUATION DAY', date: 'Wednesday, 02nd July 2025', type: 'event', icon: <FaGraduationCap className="w-4 h-4" /> },
        { description: 'INDEPENDENCE DAY', date: 'Sunday, 06th July 2025', type: 'holiday', icon: <FaHeart className="w-4 h-4" /> },
        { description: 'END OF THIRD TERM', date: 'Thursday, 03rd July 2025', type: 'end', icon: <FaCalendarAlt className="w-4 h-4" /> }
      ]
    }
  ];

  const stats = [
    { icon: <FaCalendarAlt className="w-6 h-6" />, label: 'Terms', value: '3', color: 'text-emerald-500' },
    { icon: <FaClock className="w-6 h-6" />, label: 'Total Weeks', value: '37', color: 'text-blue-500' },
    { icon: <FaTrophy className="w-6 h-6" />, label: 'Special Events', value: '12+', color: 'text-orange-500' },
    { icon: <FaHeart className="w-6 h-6" />, label: 'Holidays', value: '8', color: 'text-pink-500' }
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'start': return 'text-green-500';
      case 'end': return 'text-red-500';
      case 'event': return 'text-blue-500';
      case 'holiday': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getEventTypeBg = (type) => {
    switch (type) {
      case 'start': return 'bg-green-100 dark:bg-green-900/20';
      case 'end': return 'bg-red-100 dark:bg-red-900/20';
      case 'event': return 'bg-blue-100 dark:bg-blue-900/20';
      case 'holiday': return 'bg-purple-100 dark:bg-purple-900/20';
      default: return 'bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <>
      {/* Custom CSS for advanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(4deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.4); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .float-animation { animation: float 9s ease-in-out infinite; }
        .slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        .pulse-animation { animation: pulse 4s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25zm25-25c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-44 h-44 bg-gradient-to-r from-emerald-400/12 to-teal-400/12 dark:from-emerald-400/25 dark:to-teal-400/25 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-60 right-20 w-36 h-36 bg-gradient-to-r from-blue-400/12 to-indigo-400/12 dark:from-blue-400/25 dark:to-indigo-400/25 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-400/12 to-red-400/12 dark:from-orange-400/25 dark:to-red-400/25 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Calendar Icons */}
        <div className="absolute top-1/4 right-1/4 text-emerald-300/20 dark:text-emerald-300/30 pulse-animation">
          <FaCalendarAlt className="w-16 h-16" />
          <div className="absolute top-60 right-20 w-36 h-36 bg-gradient-to-r from-blue-400/12 to-indigo-400/12 dark:from-blue-400/25 dark:to-indigo-400/25 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-400/12 to-red-400/12 dark:from-orange-400/25 dark:to-red-400/25 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
          
          {/* Calendar Icons */}
          <div className="absolute top-1/4 right-1/4 text-emerald-300/20 dark:text-emerald-300/30 pulse-animation">
            <FaCalendarAlt className="w-16 h-16" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-blue-300/20 dark:text-blue-300/30 pulse-animation" style={{animationDelay: '2s'}}>
            <FaGraduationCap className="w-14 h-14" />
          </div>
        </div>

        <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center p-3 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full mb-8 border border-emerald-200/30 dark:border-white/20">
              <HiCalendar className="w-6 h-6 text-emerald-500 dark:text-emerald-400 mr-3" />
              <span className="text-gray-800 dark:text-white/90 font-semibold">Academic Year 2025-2026</span>
              <HiSparkles className="w-5 h-5 text-teal-500 dark:text-teal-400 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent mb-8 leading-tight">
              Academic Calendar
            </h1>
            
            <p className="text-2xl text-gray-700 dark:text-white/80 max-w-5xl mx-auto leading-relaxed mb-8">
              Your comprehensive guide to all academic terms, important dates, holidays, and special events throughout the school year.
              <span className="block mt-3 text-lg text-emerald-600 dark:text-emerald-300">Plan ahead and never miss an important school event or deadline.</span>
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <div key={index} className={`bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300 group ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 100 + 300}ms`}}>
                  <div className={`${stat.color} mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms Grid */}
          <div className={`max-w-7xl mx-auto mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '600ms'}}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {terms.map((term, termIndex) => (
                <div 
                  key={term.id}
                  className="relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-105 group"
                  onMouseEnter={() => setHoveredTerm(term.id)}
                  onMouseLeave={() => setHoveredTerm(null)}
                  onMouseMove={(e) => handleMouseMove(e, term.id)}
                >
                  {/* Glassmorphism Card */}
                  <div className={`relative bg-gradient-to-br ${term.gradient} backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-2xl ${term.glowColor} group-hover:shadow-3xl transition-all duration-500`}>
                    
                    {/* Header */}
                    <div className="p-8 pb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <div className={term.color}>{term.icon}</div>
                        </div>
                        <div className="bg-white/90 dark:bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2">
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-800">{term.duration}</div>
                            <div className="text-xs text-gray-600">Duration</div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {term.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-white/70 mb-6">{term.period}</p>
                    </div>
                    
                    {/* Events List */}
                    <div className="px-8 pb-8">
                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {term.events.map((event, eventIndex) => (
                          <div 
                            key={eventIndex} 
                            className={`group relative flex items-center justify-between p-3 rounded-xl ${getEventTypeBg(event.type)} backdrop-blur-sm border border-white/20 hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-300 group/event`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`${getEventTypeColor(event.type)} group-hover/event:scale-110 transition-transform duration-300`}>
                                {event.icon}
                              </div>
                              <div className="font-medium text-gray-800 dark:text-white text-sm">
                                {event.description}
                              </div>
                            </div>
                            <div className="absolute -top-10 right-0 bg-gray-800 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none z-10 border border-white/20">
                              {event.date}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className={`max-w-4xl mx-auto mb-12 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
            <div className="bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 dark:border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500/20 rounded-full p-3">
                  <HiLightBulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Important Note
                  </h3>
                  <p className="text-gray-700 dark:text-white/80 mb-4">
                    Academic year 2025/26 will commence on Tuesday, 2nd September 2025. Please mark your calendars and prepare for another exciting year of learning and growth.
                  </p>
                  <a 
                    href="/files/ay_2025-26_calender.pdf" 
                    download="Academic_Calendar_2025-26.pdf"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1"
                  >
                    <FaCalendarAlt className="w-5 h-5 mr-2" />
                    Download Full Academic Calendar (PDF)
                    <FaArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`text-center ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '1000ms'}}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/curriculum/foundation" 
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaSchool className="w-5 h-5 mr-2" />
                View Foundation Stage
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/curriculum/igcse" 
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaGraduationCap className="w-5 h-5 mr-2" />
                View IGCSE Program
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                Contact Office
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
