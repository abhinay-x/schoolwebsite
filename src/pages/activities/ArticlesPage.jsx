import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, EffectFade, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaNewspaper, FaEye, FaCalendarAlt, FaUsers, FaStar, FaHeart, FaAward, FaCheckCircle, FaInfoCircle, FaArrowRight, FaBookOpen, FaGlobe, FaSearch } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiDocumentText } from 'react-icons/hi';
import { CameraIcon, MapPinIcon, CalendarIcon, EyeIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Enhanced newspaper articles data with glassmorphism properties
const newspaperArticles = [
  {
    id: 1,
    title: 'Educational Excellence Recognition',
    subtitle: 'Nation Newspaper Feature',
    date: 'July 2021',
    publication: 'The Nation',
    image: '/public/images/newspaper/np5.jpg',
    alt: 'Newspaper Article July 2021',
    description: 'ZPPS School featured for outstanding academic achievements and innovative teaching methods',
    category: 'Academic Achievement',
    readTime: '3 min read',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20',
    glowColor: 'shadow-blue-500/25',
    color: 'text-blue-500'
  },
  {
    id: 2,
    title: 'Community Impact Initiative',
    subtitle: 'Daily Times Coverage',
    date: 'July 2021',
    publication: 'Daily Times',
    image: '/public/images/newspaper/np4.jpg',
    alt: 'Newspaper Article July 2021',
    description: 'School\'s community outreach programs making significant positive impact in local area',
    category: 'Community Service',
    readTime: '4 min read',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
    glowColor: 'shadow-emerald-500/25',
    color: 'text-emerald-500'
  },
  {
    id: 3,
    title: 'Sports Championship Victory',
    subtitle: 'Nation Sports Section',
    date: 'August 2022',
    publication: 'The Nation',
    image: '/public/images/newspaper/np3.jpg',
    alt: 'Newspaper Article August 2022',
    description: 'ZPPS students excel in regional sports competitions, bringing home multiple trophies',
    category: 'Sports Achievement',
    readTime: '2 min read',
    gradient: 'from-orange-500/20 via-red-500/10 to-pink-500/20',
    glowColor: 'shadow-orange-500/25',
    color: 'text-orange-500'
  },
  {
    id: 4,
    title: 'Innovation in Education',
    subtitle: 'Daily Times Education',
    date: 'July 2022',
    publication: 'Daily Times',
    image: '/public/images/newspaper/np2.jpg',
    alt: 'Newspaper Article July 2022',
    description: 'Pioneering educational approaches and technology integration at ZPPS School',
    category: 'Educational Innovation',
    readTime: '5 min read',
    gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
    glowColor: 'shadow-purple-500/25',
    color: 'text-purple-500'
  },
  {
    id: 5,
    title: 'Student Leadership Program',
    subtitle: 'Nation Youth Section',
    date: 'July 2021',
    publication: 'The Nation',
    image: '/public/images/newspaper/np1.jpg',
    alt: 'Newspaper Article July 2021',
    description: 'Developing future leaders through comprehensive student leadership initiatives',
    category: 'Student Development',
    readTime: '3 min read',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20',
    glowColor: 'shadow-cyan-500/25',
    color: 'text-cyan-500'
  }
];

// Stats and features data
const stats = [
  { icon: <FaNewspaper className="w-6 h-6" />, label: 'Press Features', value: '5+', color: 'text-blue-500' },
  { icon: <FaGlobe className="w-6 h-6" />, label: 'Publications', value: '2', color: 'text-emerald-500' },
  { icon: <FaEye className="w-6 h-6" />, label: 'Media Reach', value: '10K+', color: 'text-orange-500' },
  { icon: <FaStar className="w-6 h-6" />, label: 'Recognition Rate', value: '100%', color: 'text-purple-500' }
];

const features = [
  {
    icon: <FaAward className="w-6 h-6" />,
    title: 'Media Recognition',
    description: 'Regular features in leading national newspapers highlighting our achievements',
    color: 'text-blue-500'
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: 'Community Impact',
    description: 'Showcasing our positive influence and contributions to the local community',
    color: 'text-emerald-500'
  },
  {
    icon: <FaBookOpen className="w-6 h-6" />,
    title: 'Educational Excellence',
    description: 'Highlighting innovative teaching methods and outstanding academic results',
    color: 'text-orange-500'
  }
];

const publications = [
  {
    name: 'The Nation',
    description: 'Featured in the education and community sections',
    articles: 3,
    gradient: 'from-blue-500/20 to-indigo-500/20',
    color: 'text-blue-600',
    icon: <FaNewspaper className="w-8 h-8" />
  },
  {
    name: 'Daily Times',
    description: 'Highlighting our academic and extracurricular achievements',
    articles: 2,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    color: 'text-emerald-600',
    icon: <FaGlobe className="w-8 h-8" />
  }
];

const ArticlesPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeArticle, setActiveArticle] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, itemId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1); }
        }
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-8px,0); }
          70% { transform: translate3d(0,-4px,0); }
          90% { transform: translate3d(0,-2px,0); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .slide-in-up { animation: slide-in-up 0.6s ease-out forwards; }
        .animate-shimmer { animation: shimmer 2s linear infinite; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-bounce { animation: bounce 1s infinite; }
        .animate-spin-slow { animation: rotate 8s linear infinite; }
      `}</style>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <FaNewspaper className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                News & Articles
              </span>
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest news, achievements, and press coverage. 
            Discover how ZPPS School continues to make headlines with our educational excellence.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Article Viewer */}
          <div className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">
                {newspaperArticles[activeArticle].title}
              </h3>
              <p className="text-gray-500 mb-4">{newspaperArticles[activeArticle].date}</p>
              
              <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={newspaperArticles[activeArticle].image}
                  alt={newspaperArticles[activeArticle].alt}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNhYWEiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={16}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="articles-thumbs"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                }
              }}
            >
              {newspaperArticles.map((article, index) => (
                <SwiperSlide 
                  key={article.id} 
                  className={`cursor-pointer transition-all duration-300 ${activeArticle === index ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
                  onClick={() => setActiveArticle(index)}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-[3/4] bg-gray-100 relative">
                      <img
                        src={article.image}
                        alt={article.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNhYWEiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-semibold text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                          View
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-gray-800 truncate">{article.title}</h4>
                      <p className="text-sm text-gray-500">{article.date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">In the News</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our school has been featured in various national newspapers, highlighting our achievements,
            events, and contributions to education. These articles showcase our commitment to excellence
            and the impact we're making in our community.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">Nation Newspaper</h4>
              <p className="text-gray-700 text-sm">Featured in the education and community sections</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-2">Daily Times</h4>
              <p className="text-gray-700 text-sm">Highlighting our academic and extracurricular achievements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
