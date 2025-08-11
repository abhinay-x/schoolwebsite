import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaGraduationCap, FaStar, FaArrowRight, FaPlay, FaPause, FaUsers, FaBookOpen, FaHeart, FaMagic } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiHeart, HiStar } from 'react-icons/hi';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import images
import fs1 from '../../assets/Images/curriculum/cr1.jpg';
import fs2 from '../../assets/Images/curriculum/cr2.jpeg';
import fs3 from '../../assets/Images/curriculum/cr3.jpeg';
import fs4 from '../../assets/Images/curriculum/cr4.jpeg';
import fs8 from '../../assets/Images/curriculum/cr8.jpeg';

export default function FoundationStage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const courses = [
    {
      id: 1,
      image: fs1,
      title: 'The Graduation Celebration',
      subtitle: '2020/21 Academic Year',
      description: 'The first section of our school, the foundation of it all, the Foundation Stage Class 1 of 2020/21 has completed its academic year. It is amazing to observe how these young minds have grasped content and excelled in their tests ready to be ushered to the next class.',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
      glowColor: 'shadow-emerald-500/25',
      stats: '25 Graduates'
    },
    {
      id: 2,
      image: fs2,
      title: 'The Career Day',
      subtitle: '2021/22 Academic Year',
      description: 'We had the Red Colour Day during the first term, Face Painting during the second term and Career Day during the third term. It was a marvel to watch students clad in different regalia symbolizing their desired professions or trade in their expected future on the Career Day.',
      gradient: 'from-purple-500/20 via-violet-500/10 to-fuchsia-500/20',
      glowColor: 'shadow-purple-500/25',
      stats: '30+ Careers'
    },
    {
      id: 3,
      image: fs3,
      title: 'The Green Day',
      subtitle: '2021/22 Nature Celebration',
      description: 'We had green color day during the second term of 2021/22. Green, symbolising nature was celebrated by our infant students on the Green Colour Day. The event goes further to remind the students of the importance of preserving nature.',
      gradient: 'from-green-500/20 via-lime-500/10 to-emerald-500/20',
      glowColor: 'shadow-green-500/25',
      stats: 'Eco Friendly'
    },
    {
      id: 4,
      image: fs4,
      title: 'Face Painting Day',
      subtitle: '2021/22 Creative Expression',
      description: 'Our delivery of service towards our students is mingled with fun. The Face Painting Day was packed with fun as students transformed themselves with different styles depicting science, nature and real life.',
      gradient: 'from-orange-500/20 via-yellow-500/10 to-red-500/20',
      glowColor: 'shadow-orange-500/25',
      stats: 'Creative Fun'
    }
  ];

  const stats = [
    { icon: <FaUsers className="w-6 h-6" />, label: 'Students', value: '150+', color: 'text-blue-500' },
    { icon: <FaBookOpen className="w-6 h-6" />, label: 'Activities', value: '25+', color: 'text-emerald-500' },
    { icon: <FaHeart className="w-6 h-6" />, label: 'Success Rate', value: '98%', color: 'text-pink-500' },
    { icon: <FaStar className="w-6 h-6" />, label: 'Years', value: '10+', color: 'text-yellow-500' }
  ];

  return (
    <>
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
        .float-animation { animation: float 8s ease-in-out infinite; }
        .glow-animation { animation: glow 4s ease-in-out infinite; }
        .shimmer-bg {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .slide-in-up { animation: slideInUp 0.6s ease-out forwards; }
        .pulse-animation { animation: pulse 2s ease-in-out infinite; }
        
        /* Custom Swiper Pagination Styles */
        .swiper-pagination-bullet {
          background: rgba(99, 102, 241, 0.3) !important;
          width: 12px !important;
          height: 12px !important;
          border: 2px solid rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: rgb(99, 102, 241) !important;
          transform: scale(1.2) !important;
          border-color: rgba(255, 255, 255, 0.8) !important;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.6) !important;
        }
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
        <Helmet>
          <title>Foundation Stage - ZPPSS</title>
          <meta name="description" content="Discover our Foundation Stage program designed to nurture young minds with engaging activities and comprehensive early childhood education." />
        </Helmet>

        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 dark:from-indigo-400/20 dark:to-purple-400/20 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-rose-400/10 dark:from-pink-400/20 dark:to-rose-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 dark:from-emerald-400/20 dark:to-teal-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 dark:from-yellow-400/20 dark:to-orange-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center p-3 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full mb-8 border border-indigo-200/30 dark:border-white/20">
              <HiSparkles className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mr-3" />
              <span className="text-gray-800 dark:text-white/90 font-semibold">Foundation Stage Excellence</span>
              <HiHeart className="w-5 h-5 text-pink-500 dark:text-pink-400 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent mb-8 leading-tight">
              Foundation Stage
            </h1>
            
            <p className="text-2xl text-gray-700 dark:text-white/80 max-w-5xl mx-auto leading-relaxed mb-8">
              Building strong foundations for lifelong learning through innovative early childhood education.
              <span className="block mt-3 text-lg text-indigo-600 dark:text-indigo-300">Where every child's journey begins with wonder, creativity, and endless possibilities.</span>
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

          {/* Enhanced Courses Section */}
          <div className={`max-w-7xl mx-auto mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '600ms'}}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Our <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Foundation Courses</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
                Discover the exciting activities and programs that make learning an adventure for our youngest students.
              </p>
            </div>

            <div className="relative">
              <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{ 
                  clickable: true, 
                  dynamicBullets: true,
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                className="pb-16"
              >
                {courses.map((course, index) => (
                  <SwiperSlide key={course.id} className="!w-80 md:!w-96">
                    <div 
                      className={`relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-105 group`}
                      onMouseEnter={() => setHoveredCard(course.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onMouseMove={(e) => handleMouseMove(e, course.id)}
                    >
                      {/* Glassmorphism Card */}
                      <div className={`relative h-[500px] bg-gradient-to-br ${course.gradient} backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-2xl ${course.glowColor} group-hover:shadow-3xl transition-all duration-500`}>
                        
                        {/* Image Section */}
                        <div className="relative h-60 overflow-hidden rounded-t-3xl">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                          
                          {/* Floating Badge */}
                          <div className="absolute top-4 right-4 bg-white/90 dark:bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                            <span className="text-xs font-semibold text-gray-800">{course.stats}</span>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-8">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                              {course.title}
                            </h3>
                            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300 mb-4">
                              {course.subtitle}
                            </p>
                          </div>
                          
                          <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                            {course.description}
                          </p>
                          
                          {/* Action Button */}
                          <div className="flex justify-center">
                            <div className="inline-flex items-center justify-center bg-white/40 dark:bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-gray-800 dark:text-white group-hover:bg-white/60 dark:group-hover:bg-white/30 font-semibold transition-all duration-300 shadow-lg group-hover:shadow-xl cursor-pointer">
                              <span className="mr-2 text-sm">Learn More</span>
                              <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Interactive Light Effect */}
                        {hoveredCard === course.id && (
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
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Enhanced Foundation Classes Section */}
          <div className={`max-w-7xl mx-auto ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
            <div className="bg-white/20 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-white/20 shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full px-6 py-2 mb-6">
                    <HiAcademicCap className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Foundation Classes</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Classes 1 & 2
                  </h2>
                  
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-4 mb-6">
                    <h3 className="text-xl font-semibold mb-2">Our Dedicated Teachers</h3>
                    <p className="text-red-100">Ms. Hellen & Ms. Grace</p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-8 text-lg">
                    The ending of this term marks the beginning of primary education to our nursery students who have learnt all the basics of
                    learning in speech, writing, letters, basic numbers, knowing colours and importantly introducing themselves to any audience they are required to do so.
                    These are but some basics which we have infused in the early learning of the foundation class.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/30 dark:bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                      <span className="text-gray-800 dark:text-white font-semibold">✨ Creative Learning</span>
                    </div>
                    <div className="bg-white/30 dark:bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                      <span className="text-gray-800 dark:text-white font-semibold">🎨 Art & Expression</span>
                    </div>
                    <div className="bg-white/30 dark:bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                      <span className="text-gray-800 dark:text-white font-semibold">📚 Early Literacy</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src={fs8} 
                      alt="Foundation Class Students" 
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent group-hover:from-indigo-900/30 transition-all duration-300"></div>
                  </div>
                  
                  {/* Floating Elements around image */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl opacity-60 float-animation"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl opacity-60 float-animation" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className={`text-center mt-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '1000ms'}}>
            <div className="inline-flex items-center bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-indigo-200/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 group cursor-pointer">
              <FaMagic className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3 group-hover:animate-spin" />
              <span className="text-gray-800 dark:text-white font-semibold">Explore More Foundation Programs</span>
              <FaArrowRight className="w-4 h-4 text-gray-800 dark:text-white ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
