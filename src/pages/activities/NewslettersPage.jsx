import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaNewspaper, FaCalendarAlt, FaDownload, FaEye, FaStar, FaHeart, FaUsers, FaAward, FaCheckCircle, FaInfoCircle, FaArrowRight, FaBookOpen, FaGraduationCap, FaSchool } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiDocumentText } from 'react-icons/hi';
import { DocumentTextIcon, CalendarIcon, EyeIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Import newsletter images
import nl1 from '/images/newsletter/nl1.jpg';
import nl2 from '/images/newsletter/nl2.jpg';
import nl3 from '/images/newsletter/nl3.jpg';
import nl4 from '/images/newsletter/nl4.jpg';

// Newsletter data with enhanced properties
const newsletterData = [
  {
    id: 1,
    title: 'Newsletter 1',
    date: 'April 2021',
    term: '1st Term',
    year: '2021',
    type: 'image',
    image: nl1,
    description: '1st Term 2021 Newsletter',
    icon: <FaNewspaper className="w-6 h-6" />,
    gradient: 'from-blue-500/20 via-sky-500/10 to-cyan-500/20',
    glowColor: 'shadow-blue-500/25',
    color: 'text-blue-500',
    pages: 12,
    highlights: ['Academic Achievements', 'Sports Events', 'Cultural Activities']
  },
  {
    id: 2,
    title: 'Newsletter 2',
    date: 'July 2021',
    term: '2nd Term',
    year: '2021',
    type: 'image',
    image: nl2,
    description: '2nd Term 2021 Newsletter',
    icon: <FaBookOpen className="w-6 h-6" />,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
    glowColor: 'shadow-emerald-500/25',
    color: 'text-emerald-500',
    pages: 16,
    highlights: ['Graduation Ceremony', 'New Programs', 'Student Spotlights']
  },
  {
    id: 3,
    title: 'Newsletter 3',
    date: 'December 2021',
    term: '3rd Term',
    year: '2021',
    type: 'image',
    image: nl3,
    description: '3rd Term 2021 Newsletter',
    icon: <FaGraduationCap className="w-6 h-6" />,
    gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
    glowColor: 'shadow-purple-500/25',
    color: 'text-purple-500',
    pages: 14,
    highlights: ['Year-End Celebrations', 'Academic Results', 'Future Plans']
  },
  {
    id: 4,
    title: 'Newsletter 4',
    date: 'July 2022',
    term: '2nd Term',
    year: '2022',
    type: 'image',
    image: nl4,
    description: '2nd Term 2022 Newsletter',
    icon: <FaSchool className="w-6 h-6" />,
    gradient: 'from-orange-500/20 via-yellow-500/10 to-amber-500/20',
    glowColor: 'shadow-orange-500/25',
    color: 'text-orange-500',
    pages: 18,
    highlights: ['New Facilities', 'Community Events', 'Excellence Awards']
  }
];

// Sort newsletters by date (newest first)
const newsletters = [...newsletterData].sort((a, b) => b.id - a.id);

// Stats data
const stats = [
  { icon: <FaNewspaper className="w-6 h-6" />, label: 'Total Newsletters', value: '4+', color: 'text-blue-500' },
  { icon: <FaCalendarAlt className="w-6 h-6" />, label: 'Years Published', value: '2+', color: 'text-emerald-500' },
  { icon: <FaEye className="w-6 h-6" />, label: 'Total Readers', value: '1000+', color: 'text-orange-500' },
  { icon: <FaStar className="w-6 h-6" />, label: 'Community Rating', value: '5 Stars', color: 'text-purple-500' }
];

// Features data
const features = [
  {
    icon: <FaBookOpen className="w-6 h-6" />,
    title: 'Rich Content',
    description: 'Comprehensive coverage of academic achievements, events, and school news',
    color: 'text-blue-500'
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: 'Community Focus',
    description: 'Highlighting student achievements, staff updates, and parent involvement',
    color: 'text-emerald-500'
  },
  {
    icon: <FaAward className="w-6 h-6" />,
    title: 'Excellence Showcase',
    description: 'Celebrating academic excellence, sports achievements, and cultural activities',
    color: 'text-orange-500'
  }
];

const NewslettersPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleThumbClick = (index) => {
    setActiveIndex(index);
    setIsImageLoaded(false);
  };

  const handleMouseMove = (e, itemId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const currentNewsletter = newsletters[activeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(147, 51, 234, 0.4); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.8); }
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
        .shimmer { animation: shimmer 2s linear infinite; }
        .slide-in-up { animation: slide-in-up 0.8s ease-out; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .bounce { animation: bounce 2s infinite; }
        .rotate { animation: rotate 20s linear infinite; }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-600/10 rounded-full blur-3xl rotate"></div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={toggleFullscreen}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={currentNewsletter.image}
              alt={`${currentNewsletter.title} - Full View`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-white/20 glow">
              <FaNewspaper className="w-8 h-8 text-blue-500" />
            </div>
            <HiSparkles className="w-6 h-6 text-yellow-500 bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            School Newsletters
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto mb-6 rounded-full glow"></div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest school news, events, and important announcements
          </p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-emerald-500/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaBookOpen className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Newsletter Features</h2>
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

        {/* Main Newsletter Viewer */}
        <div className={`mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentNewsletter.gradient} backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30 ${currentNewsletter.glowColor}`}></div>
            <div className="relative p-8">
              {/* Newsletter Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${currentNewsletter.color}`}>
                    {currentNewsletter.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {currentNewsletter.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {currentNewsletter.term} {currentNewsletter.year} • {currentNewsletter.pages} Pages
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleFullscreen}
                  className="group relative px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <FaEye className="w-4 h-4" />
                    <span className="font-medium">Full View</span>
                  </div>
                </button>
              </div>
              
              {/* Newsletter Image */}
              <div className="relative mb-6">
                <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-700/30">
                  <div className="relative">
                    {!isImageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm rounded-xl">
                        <div className="animate-pulse flex flex-col items-center">
                          <DocumentTextIcon className="h-12 w-12 text-gray-400 mb-2" />
                          <p className="text-gray-500 dark:text-gray-400">Loading newsletter...</p>
                        </div>
                      </div>
                    )}
                    <img
                      src={currentNewsletter.image}
                      alt={`${currentNewsletter.title} - ${currentNewsletter.date}`}
                      className={`w-full h-auto rounded-xl shadow-lg transition-all duration-500 cursor-pointer hover:scale-[1.02] ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setIsImageLoaded(true)}
                      onClick={toggleFullscreen}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              {/* Newsletter Highlights */}
              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FaStar className={`w-5 h-5 ${currentNewsletter.color}`} />
                  Newsletter Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentNewsletter.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaCheckCircle className={`w-4 h-4 ${currentNewsletter.color} flex-shrink-0`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Thumbnails */}
        <div className={`mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-8">
                <FaNewspaper className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Browse All Newsletters</h2>
              </div>
              
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="newsletters-thumbs"
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 16 },
                  480: { slidesPerView: 2, spaceBetween: 16 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 20 }
                }}
              >
                {newsletters.map((newsletter, index) => (
                  <SwiperSlide key={newsletter.id}>
                    <div
                      className="group relative cursor-pointer"
                      onMouseEnter={() => setHoveredItem(newsletter.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onMouseMove={(e) => handleMouseMove(e, newsletter.id)}
                      onClick={() => handleThumbClick(index)}
                    >
                      {/* Glassmorphism Card */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${newsletter.gradient} backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 ${newsletter.glowColor} transition-all duration-500 ${
                        activeIndex === index ? 'scale-105 ring-2 ring-blue-500/50' : 'group-hover:scale-105'
                      }`}></div>
                      
                      {/* Mouse tracking light effect */}
                      {hoveredItem === newsletter.id && (
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`
                          }}
                        ></div>
                      )}
                      
                      <div className="relative p-4">
                        <div className="aspect-[3/4] bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl overflow-hidden mb-4 border border-white/20 dark:border-gray-700/30">
                          <img
                            src={newsletter.image}
                            alt={`${newsletter.title} Thumbnail`}
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <div className={`p-1 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/20 ${newsletter.color}`}>
                              {newsletter.icon}
                            </div>
                          </div>
                          <h3 className={`font-bold text-gray-900 dark:text-white mb-1 group-hover:${newsletter.color.replace('text-', 'text-')} transition-colors duration-300`}>
                            {newsletter.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{newsletter.term} {newsletter.year}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{newsletter.pages} Pages</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 backdrop-blur-xl rounded-3xl border border-emerald-500/30"></div>
            <div className="relative p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
                  <FaInfoCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Stay Updated</h2>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                New newsletters are published at the end of each term. Check back regularly for updates on academic achievements, 
                school events, and important announcements!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Published Termly</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Community Updates</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Academic Highlights</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
                For any questions about our newsletters, please contact the school office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewslettersPage;
