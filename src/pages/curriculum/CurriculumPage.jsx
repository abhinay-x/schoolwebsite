import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaSchool, FaGraduationCap, FaCalendarAlt, FaCalendarDay, FaArrowRight, FaStar } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiCalendar, HiClock } from 'react-icons/hi';
import { Helmet } from 'react-helmet';

const curriculumSections = [
  {
    id: 1,
    title: 'Foundation Stage',
    description: 'Early Years and Primary Education',
    subtitle: 'Building Strong Foundations',
    path: '/curriculum/foundation',
    primaryIcon: <HiSparkles className="w-10 h-10 text-indigo-600" />,
    secondaryIcon: <FaSchool className="w-6 h-6 text-indigo-400" />,
    gradient: 'from-indigo-500/20 via-purple-500/10 to-pink-500/20',
    glowColor: 'shadow-indigo-500/25',
    borderColor: 'border-indigo-200/30 dark:border-indigo-400/30',
    textColor: 'text-indigo-700 dark:text-indigo-300',
    stats: '150+ Students'
  },
  {
    id: 2,
    title: 'IGCSE',
    description: 'International General Certificate of Secondary Education',
    subtitle: 'Cambridge Excellence',
    path: '/images/curriculum/igcse',
    primaryIcon: <HiAcademicCap className="w-10 h-10 text-blue-600" />,
    secondaryIcon: <FaGraduationCap className="w-6 h-6 text-blue-400" />,
    gradient: 'from-blue-500/20 via-cyan-500/10 to-teal-500/20',
    glowColor: 'shadow-blue-500/25',
    borderColor: 'border-blue-200/30 dark:border-blue-400/30',
    textColor: 'text-blue-700 dark:text-blue-300',
    stats: '12 Subjects'
  },
  {
    id: 3,
    title: 'Academic Calendar',
    description: 'Important dates and events',
    subtitle: 'Stay Organized',
    path: '/curriculum/academic-calendar',
    primaryIcon: <HiCalendar className="w-10 h-10 text-emerald-600" />,
    secondaryIcon: <FaCalendarAlt className="w-6 h-6 text-emerald-400" />,
    gradient: 'from-emerald-500/20 via-green-500/10 to-lime-500/20',
    glowColor: 'shadow-emerald-500/25',
    borderColor: 'border-emerald-200/30 dark:border-emerald-400/30',
    textColor: 'text-emerald-700 dark:text-emerald-300',
    stats: '3 Terms'
  },
  {
    id: 4,
    title: 'Event Calendar',
    description: 'Upcoming school events',
    subtitle: 'Never Miss Out',
    path: '/curriculum/event-calendar',
    primaryIcon: <HiClock className="w-10 h-10 text-purple-600" />,
    secondaryIcon: <FaCalendarDay className="w-6 h-6 text-purple-400" />,
    gradient: 'from-purple-500/20 via-violet-500/10 to-fuchsia-500/20',
    glowColor: 'shadow-purple-500/25',
    borderColor: 'border-purple-200/30 dark:border-purple-400/30',
    textColor: 'text-purple-700 dark:text-purple-300',
    stats: '50+ Events'
  }
];

export default function CurriculumPage() {
  const location = useLocation();
  const isBasePath = location.pathname === '/curriculum';
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      <Helmet>
        <title>Curriculum - ZPPSS</title>
        <meta name="description" content="Explore our comprehensive curriculum offerings including Foundation Stage and IGCSE programs designed to nurture academic excellence." />
      </Helmet>
      
      {/* Custom CSS for advanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .slide-in-up { animation: slideInUp 0.6s ease-out forwards; }
        .pulse-animation { animation: pulse 2s ease-in-out infinite; }
        .shimmer-bg {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements - Theme Responsive */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 dark:from-emerald-400/20 dark:to-cyan-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-violet-400/10 dark:from-pink-400/20 dark:to-violet-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 dark:from-yellow-400/20 dark:to-orange-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        {isBasePath && (
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Header */}
            <div className={`text-center mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center justify-center p-2 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full mb-6 border border-gray-200/30 dark:border-white/20">
                <HiSparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mr-2" />
                <span className="text-gray-800 dark:text-white/90 font-medium">Academic Excellence</span>
                <FaStar className="w-4 h-4 text-yellow-500 dark:text-yellow-400 ml-2" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
                Our Curriculum
              </h1>
              <p className="text-xl text-gray-700 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive educational programs designed to nurture and challenge students at every level.
                <span className="block mt-2 text-lg text-blue-600 dark:text-blue-200">Building tomorrow's leaders through innovative learning experiences.</span>
              </p>
            </div>
            
            {/* Enhanced Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {curriculumSections.map((section, index) => (
                <Link
                  key={section.id}
                  to={section.path}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 150}ms`}}
                  onMouseEnter={() => setHoveredCard(section.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onMouseMove={(e) => handleMouseMove(e, section.id)}
                >
                  {/* Glassmorphism Card */}
                  <div className={`relative h-80 bg-gradient-to-br ${section.gradient} backdrop-blur-xl border ${section.borderColor} shadow-2xl ${section.glowColor} group-hover:shadow-3xl transition-all duration-500`}>
                    
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`}></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      {/* Header */}
                      <div className="text-center">
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-white/30 dark:bg-white/20 rounded-2xl blur-md group-hover:bg-white/40 dark:group-hover:bg-white/30 transition-all duration-300"></div>
                          <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-4 group-hover:bg-white/30 dark:group-hover:bg-white/20 transition-all duration-300">
                            <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                              {section.primaryIcon}
                            </div>
                            <div className="absolute -top-2 -right-2 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">
                              {section.secondaryIcon}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          {section.title}
                        </h3>
                        
                        <p className="text-sm font-medium text-gray-600 dark:text-white/70 mb-3 group-hover:text-gray-700 dark:group-hover:text-white/90 transition-colors duration-300">
                          {section.subtitle}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <div className="text-center">
                        <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed mb-4 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                          {section.description}
                        </p>
                        
                        {/* Stats Badge */}
                        <div className="inline-flex items-center bg-white/30 dark:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 group-hover:bg-white/40 dark:group-hover:bg-white/30 transition-all duration-300">
                          <FaStar className="w-3 h-3 text-yellow-500 dark:text-yellow-400 mr-2" />
                          <span className="text-gray-800 dark:text-white text-xs font-semibold">{section.stats}</span>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center bg-white/40 dark:bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-gray-800 dark:text-white group-hover:bg-white/60 dark:group-hover:bg-white/30 font-semibold transition-all duration-300 shadow-lg group-hover:shadow-xl">
                          <span className="mr-2 text-sm">Explore</span>
                          <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Interactive Light Effect */}
                    {hoveredCard === section.id && (
                      <div 
                        className="absolute w-32 h-32 bg-white/30 dark:bg-white/20 rounded-full blur-xl transition-all duration-300"
                        style={{
                          left: `${mousePosition.x}%`,
                          top: `${mousePosition.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      ></div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className={`text-center mt-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
              <div className="inline-flex items-center bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-gray-200/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                <HiSparkles className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mr-3 group-hover:animate-spin" />
                <span className="text-gray-800 dark:text-white font-semibold">Discover More About Our Programs</span>
                <FaArrowRight className="w-4 h-4 text-gray-800 dark:text-white ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}