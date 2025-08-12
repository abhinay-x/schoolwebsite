import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaCamera, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaGraduationCap, FaEye, FaStar, FaHeart, FaAward, FaCheckCircle, FaInfoCircle, FaArrowRight, FaBookOpen, FaGlobe, FaMountain } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiDocumentText } from 'react-icons/hi';
import { CameraIcon, MapPinIcon, CalendarIcon, EyeIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Enhanced trip data with glassmorphism properties
const tripImages = [
  { 
    id: 1, 
    src: '/public/images/trips/1.jpg', 
    alt: 'Educational Trip 1',
    title: 'Nature Discovery',
    location: 'National Park',
    date: 'March 2022',
    participants: '45 Students',
    description: 'Exploring natural habitats and wildlife conservation',
    gradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
    glowColor: 'shadow-green-500/25',
    color: 'text-green-500'
  },
  { 
    id: 2, 
    src: '/public/images/trips/2.jpg', 
    alt: 'Educational Trip 2',
    title: 'Historical Journey',
    location: 'Heritage Site',
    date: 'April 2022',
    participants: '38 Students',
    description: 'Learning about local history and cultural heritage',
    gradient: 'from-blue-500/20 via-sky-500/10 to-cyan-500/20',
    glowColor: 'shadow-blue-500/25',
    color: 'text-blue-500'
  },
  { 
    id: 3, 
    src: '/public/images/trips/4.jpg', 
    alt: 'Educational Trip 4',
    title: 'Science Exploration',
    location: 'Science Museum',
    date: 'May 2022',
    participants: '52 Students',
    description: 'Interactive science experiments and technology exhibits',
    gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
    glowColor: 'shadow-purple-500/25',
    color: 'text-purple-500'
  },
  { 
    id: 4, 
    src: '/public/images/trips/5.jpg', 
    alt: 'Educational Trip 5',
    title: 'Cultural Exchange',
    location: 'Cultural Center',
    date: 'June 2022',
    participants: '41 Students',
    description: 'Understanding diverse cultures and traditions',
    gradient: 'from-orange-500/20 via-yellow-500/10 to-amber-500/20',
    glowColor: 'shadow-orange-500/25',
    color: 'text-orange-500'
  },
  { 
    id: 5, 
    src: '/public/images/trips/6.jpg', 
    alt: 'Educational Trip 6',
    title: 'Environmental Study',
    location: 'Eco Reserve',
    date: 'July 2022',
    participants: '36 Students',
    description: 'Environmental conservation and sustainability practices',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
    glowColor: 'shadow-emerald-500/25',
    color: 'text-emerald-500'
  },
  { 
    id: 6, 
    src: '/public/images/trips/7.jpg', 
    alt: 'Educational Trip 7',
    title: 'Art & Creativity',
    location: 'Art Gallery',
    date: 'August 2022',
    participants: '29 Students',
    description: 'Exploring artistic expressions and creative techniques',
    gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/20',
    glowColor: 'shadow-pink-500/25',
    color: 'text-pink-500'
  },
  { 
    id: 7, 
    src: '/public/images/trips/8.jpg', 
    alt: 'Educational Trip 8',
    title: 'Technology Innovation',
    location: 'Tech Hub',
    date: 'September 2022',
    participants: '47 Students',
    description: 'Modern technology and innovation showcase',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20',
    glowColor: 'shadow-cyan-500/25',
    color: 'text-cyan-500'
  },
  { 
    id: 8, 
    src: '/public/images/trips/9.jpg', 
    alt: 'Educational Trip 9',
    title: 'Agricultural Learning',
    location: 'Farm Visit',
    date: 'October 2022',
    participants: '43 Students',
    description: 'Understanding agriculture and food production',
    gradient: 'from-yellow-500/20 via-amber-500/10 to-orange-500/20',
    glowColor: 'shadow-yellow-500/25',
    color: 'text-yellow-600'
  },
  { 
    id: 9, 
    src: '/public/images/trips/10.jpg', 
    alt: 'Educational Trip 10',
    title: 'Marine Biology',
    location: 'Aquarium',
    date: 'November 2022',
    participants: '39 Students',
    description: 'Marine life study and ocean conservation',
    gradient: 'from-teal-500/20 via-cyan-500/10 to-blue-500/20',
    glowColor: 'shadow-teal-500/25',
    color: 'text-teal-500'
  },
  { 
    id: 10, 
    src: '/public/images/trips/11.jpg', 
    alt: 'Educational Trip 11',
    title: 'Geography Field Study',
    location: 'Mountain Region',
    date: 'December 2022',
    participants: '34 Students',
    description: 'Geographical formations and natural phenomena',
    gradient: 'from-gray-500/20 via-slate-500/10 to-zinc-500/20',
    glowColor: 'shadow-gray-500/25',
    color: 'text-gray-600'
  },
  { 
    id: 11, 
    src: '/public/images/trips/13.jpg', 
    alt: 'Educational Trip 13',
    title: 'Community Service',
    location: 'Local Community',
    date: 'January 2023',
    participants: '48 Students',
    description: 'Community engagement and social responsibility',
    gradient: 'from-violet-500/20 via-purple-500/10 to-indigo-500/20',
    glowColor: 'shadow-violet-500/25',
    color: 'text-violet-500'
  }
];

// Stats and features data
const stats = [
  { icon: <FaCamera className="w-6 h-6" />, label: 'Total Trips', value: '11+', color: 'text-blue-500' },
  { icon: <FaUsers className="w-6 h-6" />, label: 'Students Participated', value: '450+', color: 'text-emerald-500' },
  { icon: <FaMapMarkerAlt className="w-6 h-6" />, label: 'Locations Visited', value: '15+', color: 'text-orange-500' },
  { icon: <FaStar className="w-6 h-6" />, label: 'Educational Value', value: '100%', color: 'text-purple-500' }
];

const features = [
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    title: 'Experiential Learning',
    description: 'Real-world experiences that complement classroom education',
    color: 'text-blue-500'
  },
  {
    icon: <FaGlobe className="w-6 h-6" />,
    title: 'Cultural Exposure',
    description: 'Exposure to diverse environments, cultures, and perspectives',
    color: 'text-emerald-500'
  },
  {
    icon: <FaMountain className="w-6 h-6" />,
    title: 'Adventure & Discovery',
    description: 'Safe adventures that build confidence and curiosity',
    color: 'text-orange-500'
  }
];

const TripsPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTrip, setActiveTrip] = useState(0);

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
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-600/10 rounded-full blur-3xl rotate"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-white/20 glow">
              <FaCamera className="w-8 h-8 text-blue-500" />
            </div>
            <HiSparkles className="w-6 h-6 text-yellow-500 bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Educational Trips
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto mb-6 rounded-full glow"></div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learning Beyond Boundaries - Explore, Discover, Experience
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
                <FaAward className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trip Benefits</h2>
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
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="main-swiper rounded-2xl overflow-hidden"
                onSlideChange={(swiper) => setActiveTrip(swiper.activeIndex)}
              >
                {tripImages.map((image, index) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative h-96 md:h-[500px] group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      

                      {/* Trip Info Overlay */}
                      {/* <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                              <div className="flex items-center gap-4 text-white/80 text-sm">
                                <div className="flex items-center gap-1">
                                  <FaMapMarkerAlt className="w-4 h-4" />
                                  <span>{image.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FaCalendarAlt className="w-4 h-4" />
                                  <span>{image.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FaUsers className="w-4 h-4" />
                                  <span>{image.participants}</span>
                                </div>
                              </div>
                            </div>
                            <div className={`p-2 bg-gradient-to-br ${image.gradient} backdrop-blur-sm rounded-xl border border-white/20`}>
                              <FaEye className={`w-5 h-5 ${image.color}`} />
                            </div>
                          </div>
                          <p className="text-white/90 leading-relaxed">{image.description}</p>
                        </div>
                      </div> */}
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
            {tripImages.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div 
                  className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    activeTrip === index 
                      ? 'border-blue-500 scale-110 shadow-lg shadow-blue-500/25' 
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

        {/* Call to Action */}
        <div className={`${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 backdrop-blur-xl rounded-3xl border border-emerald-500/30"></div>
            <div className="relative p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
                  <FaInfoCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Join Our Educational Adventures</h2>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Experience learning like never before! Our educational trips provide unforgettable experiences 
                that enhance classroom learning and create lasting memories.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Safe & Supervised</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Educational Focus</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Memorable Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsPage;
