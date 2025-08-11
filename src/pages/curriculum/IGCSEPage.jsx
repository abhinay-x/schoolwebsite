import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaGraduationCap, FaStar, FaArrowRight, FaPlay, FaPause, FaUsers, FaBookOpen, FaHeart, FaMagic, FaAward, FaTrophy, FaRocket, FaLightbulb, FaGlobe } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiHeart, HiStar, HiLightBulb } from 'react-icons/hi';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import images
import ig1 from '/images/igcse/ig1.jpg';
import ig2 from '/images/igcse/ig2.jpg';
import ig3 from '/images/igcse/ig3.jpeg';
import ig4 from '/images/igcse/ig4.jpeg';
import ig8 from '/images/igcse/ig8.jpg';

export default function IGCSEPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      image: ig1,
      title: 'Educational Trip',
      subtitle: 'Tedzani Hydro Electric Power Station',
      description: 'The school decided to bring realistic learning by embarking on a 150 kilometer trip to Tedzani Hydro Electric Power Station in Mwanza District with students of the secondary section. They had a vivid experience on how the energy on the natural head of water along the Shire is converted to drive massive generators.',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-teal-500/20',
      glowColor: 'shadow-blue-500/25',
      stats: '150km Trip',
      icon: <FaRocket className="w-6 h-6" />
    },
    {
      id: 2,
      image: ig2,
      title: 'Robotic Workshop',
      subtitle: 'Innovation & Technology',
      description: 'We believe learning robotics will increase the students ability to be creative, innovative thinkers and become more productive members of the society. Students will learn to program the computerized robots by giving accurate and precise instructions while having fun in the process.',
      gradient: 'from-purple-500/20 via-violet-500/10 to-fuchsia-500/20',
      glowColor: 'shadow-purple-500/25',
      stats: 'Tech Skills',
      icon: <FaLightbulb className="w-6 h-6" />
    },
    {
      id: 3,
      image: ig3,
      title: 'Debate & Quiz',
      subtitle: 'Critical Thinking Excellence',
      description: 'The 2021/22 school session was packed with intra-school activities that saw students discussing several topics in writing and cross-cutting their knowledge through quizzes in different subjects. Being international, our institution embarks on producing best English debaters.',
      gradient: 'from-emerald-500/20 via-green-500/10 to-lime-500/20',
      glowColor: 'shadow-emerald-500/25',
      stats: 'Top Debaters',
      icon: <HiLightBulb className="w-6 h-6" />
    },
    {
      id: 4,
      image: ig4,
      title: 'Essay & Spell Bee',
      subtitle: 'Literary Excellence',
      description: 'Our school is aware of the diversity of skills which nature has bestowed upon our students. The essay writing competition spiced with Spell Bee competition has proven a success in encouraging our students to excel in writing and spellings.',
      gradient: 'from-orange-500/20 via-yellow-500/10 to-red-500/20',
      glowColor: 'shadow-orange-500/25',
      stats: 'Future Authors',
      icon: <FaBookOpen className="w-6 h-6" />
    }
  ];

  const stats = [
    { icon: <FaUsers className="w-6 h-6" />, label: 'Students', value: '200+', color: 'text-blue-500' },
    { icon: <FaBookOpen className="w-6 h-6" />, label: 'Subjects', value: '12', color: 'text-emerald-500' },
    { icon: <FaAward className="w-6 h-6" />, label: 'Success Rate', value: '96%', color: 'text-pink-500' },
    { icon: <FaGlobe className="w-6 h-6" />, label: 'Global Recognition', value: 'Cambridge', color: 'text-yellow-500' }
  ];

  const uniqueFeatures = [
    'Comprehensive reporting on individual achievement',
    'Educational field trips and school presentations',
    'Individual attention in a small-class setting',
    'Learning program with after-school care',
    'Opportunities to carry out scientific investigations',
    'Positive learning environment for your child'
  ];

  const subjects = [
    'English (as a Second Language)',
    'Mathematics',
    'ICT',
    'Physics',
    'Chemistry',
    'Biology',
    'History (Optional)',
    'Accounting (Optional)',
    'Geography (Optional)'
  ];

  return (
    <>
      <Helmet>
        <title>IGCSE Program - ZPPSS</title>
        <meta name="description" content="Explore our comprehensive IGCSE program designed to prepare students for international qualifications and global opportunities." />
      </Helmet>
      {/* Custom CSS for advanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
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
        .float-animation { animation: float 7s ease-in-out infinite; }
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
          background: rgba(59, 130, 246, 0.3) !important;
          width: 12px !important;
          height: 12px !important;
          border: 2px solid rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: rgb(59, 130, 246) !important;
          transform: scale(1.2) !important;
          border-color: rgba(255, 255, 255, 0.8) !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.6) !important;
        }
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>

      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-36 h-36 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-400/20 dark:to-cyan-400/20 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-60 right-20 w-28 h-28 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 dark:from-teal-400/20 dark:to-emerald-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-violet-400/10 dark:from-purple-400/20 dark:to-violet-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 dark:from-orange-400/20 dark:to-yellow-400/20 rounded-full blur-xl float-animation" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center p-3 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full mb-8 border border-blue-200/30 dark:border-white/20">
              <HiAcademicCap className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-3" />
              <span className="text-gray-800 dark:text-white/90 font-semibold">Cambridge IGCSE Excellence</span>
              <FaAward className="w-5 h-5 text-yellow-500 dark:text-yellow-400 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-300 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent mb-8 leading-tight">
              IGCSE Program
            </h1>
            
            <p className="text-2xl text-gray-700 dark:text-white/80 max-w-5xl mx-auto leading-relaxed mb-8">
              Empowering global leaders through world-class Cambridge education and innovative learning experiences.
              <span className="block mt-3 text-lg text-blue-600 dark:text-blue-300">Where academic excellence meets personal growth and international recognition.</span>
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
                Our <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">IGCSE Programs</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
                Discover our comprehensive programs designed to prepare students for global success and lifelong learning.
              </p>
            </div>

            <div className="relative">
              <Swiper
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
                          
                          {/* Icon Badge */}
                          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <div className="text-white">{course.icon}</div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-8">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                              {course.title}
                            </h3>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-300 mb-4">
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
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

      {/* IGCSE Program Details */}
      <section className="py-12 px-4 md:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:flex-1">
              <h2 className="text-2xl font-bold text-school-secondary dark:text-school-accent mb-4">
                FORM 04 & 05 / IGCSE
              </h2>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                Senior Secondary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The IGCSE provides a robust, vibrant and up to date school education that will engender excellence in every sphere of human endeavour.
                The IGCSE is committed to provide quality education to promote intellectual, social and cultural appreciation among its learners.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                It works towards evolving a learning process and environment, which empowers the students to become global leaders in the emerging knowledge society. 
                The Board advocates Continuous and Comprehensive Evaluation with an emphasis on holistic development of learners worldwide. The Board commits itself 
                to providing a stress-free and enjoyable learning environment that will develop competent, confident and enterprising citizens who will promote peace,
                global unity and upholding of human values.
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">What makes us unique:</h4>
                <ul className="space-y-2">
                  {uniqueFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-fuchsia-600 dark:text-fuchsia-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">A Range of our Subjects</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In years 10 and 11 you will also study a range of subjects. Some subjects are compulsory: 
                  Mathematics, English, & ICT but others are for a student/parent to decide.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {subjects.map((subject, index) => (
                    <div key={index} className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                      <span className="text-fuchsia-600 dark:text-fuchsia-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/curriculum/academic-calendar" 
                  className="inline-block bg-school-primary hover:bg-school-secondary text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  View Academic Calendar
                </Link>
              </div>
            </div>
            <div className="md:flex-1 mt-8 md:mt-0">
              <img 
                src={ig8} 
                alt="Senior Secondary Students" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
