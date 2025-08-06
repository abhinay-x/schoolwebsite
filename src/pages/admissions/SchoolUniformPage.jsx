import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaTshirt, FaShoppingBag, FaUsers, FaPalette, FaStar, FaHeart, FaAward, FaCheckCircle, FaInfoCircle, FaPhone, FaUser, FaClipboardList, FaRuler, FaTag, FaDollarSign } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap } from 'react-icons/hi';
import { ShoppingBagIcon, UserGroupIcon, DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const SchoolUniformPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, itemId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const uniformData = [
    {
      id: 1,
      size: 'Small Size',
      classGroup: 'Foundation Classes',
      details: '1 shirt, 1 trouser/1 skirt, 1 pair of socks',
      price: '18,000',
      icon: <FaTshirt className="w-6 h-6" />,
      gradient: 'from-blue-500/20 via-sky-500/10 to-cyan-500/20',
      glowColor: 'shadow-blue-500/25',
      color: 'text-blue-500',
      category: 'uniform'
    },
    {
      id: 2,
      size: 'Medium Size',
      classGroup: 'Primary Classes',
      details: '1 shirt, 1 trouser/1 skirt, 1 pair of socks',
      price: '22,000',
      icon: <FaTshirt className="w-6 h-6" />,
      gradient: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
      glowColor: 'shadow-emerald-500/25',
      color: 'text-emerald-500',
      category: 'uniform'
    },
    {
      id: 3,
      size: 'Large Size',
      classGroup: 'Secondary Classes',
      details: '1 shirt, 1 trouser/1 skirt, 1 pair of socks',
      price: '26,000',
      icon: <FaTshirt className="w-6 h-6" />,
      gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
      glowColor: 'shadow-purple-500/25',
      color: 'text-purple-500',
      category: 'uniform'
    },
    {
      id: 4,
      size: 'Jersey (Small)',
      classGroup: 'All Classes',
      details: '1 piece - Deep blue color',
      price: '8,000',
      icon: <FaHeart className="w-6 h-6" />,
      gradient: 'from-orange-500/20 via-yellow-500/10 to-amber-500/20',
      glowColor: 'shadow-orange-500/25',
      color: 'text-orange-500',
      category: 'jersey'
    },
    {
      id: 5,
      size: 'Jersey (Medium)',
      classGroup: 'All Classes',
      details: '1 piece - Deep blue color',
      price: '10,000',
      icon: <FaHeart className="w-6 h-6" />,
      gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/20',
      glowColor: 'shadow-pink-500/25',
      color: 'text-pink-500',
      category: 'jersey'
    },
    {
      id: 6,
      size: 'Jersey (Large)',
      classGroup: 'All Classes',
      details: '1 piece - Deep blue color',
      price: '12,000',
      icon: <FaHeart className="w-6 h-6" />,
      gradient: 'from-teal-500/20 via-cyan-500/10 to-blue-500/20',
      glowColor: 'shadow-teal-500/25',
      color: 'text-teal-500',
      category: 'jersey'
    },
    {
      id: 7,
      size: 'Leggings',
      classGroup: 'Black Color',
      details: '1 piece - Sports attire',
      price: '6,000',
      icon: <FaRuler className="w-6 h-6" />,
      gradient: 'from-gray-500/20 via-slate-500/10 to-zinc-500/20',
      glowColor: 'shadow-gray-500/25',
      color: 'text-gray-600',
      category: 'sports'
    },
  ];

  const stats = [
    { icon: <FaTshirt className="w-6 h-6" />, label: 'Uniform Items', value: '7+', color: 'text-blue-500' },
    { icon: <FaPalette className="w-6 h-6" />, label: 'Color Scheme', value: 'Sky & Navy', color: 'text-emerald-500' },
    { icon: <FaUsers className="w-6 h-6" />, label: 'Students Served', value: '500+', color: 'text-orange-500' },
    { icon: <FaStar className="w-6 h-6" />, label: 'Quality Rating', value: '5 Stars', color: 'text-purple-500' }
  ];

  const categories = [
    { id: 'all', label: 'All Items', icon: <FaShoppingBag className="w-4 h-4" /> },
    { id: 'uniform', label: 'Uniforms', icon: <FaTshirt className="w-4 h-4" /> },
    { id: 'jersey', label: 'Jerseys', icon: <FaHeart className="w-4 h-4" /> },
    { id: 'sports', label: 'Sports', icon: <FaRuler className="w-4 h-4" /> }
  ];

  const features = [
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: 'Distinctive Colors',
      description: 'Sky Blue and Navy Blue combination with deep blue jersey',
      color: 'text-blue-500'
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: 'Quality Materials',
      description: 'Durable fabrics designed for comfort and longevity',
      color: 'text-emerald-500'
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'All Sizes Available',
      description: 'From Foundation to Secondary classes, we have all sizes',
      color: 'text-orange-500'
    }
  ];

  const filteredData = selectedCategory === 'all' ? uniformData : uniformData.filter(item => item.category === selectedCategory);

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

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-white/20 glow">
              <FaTshirt className="w-8 h-8 text-blue-500" />
            </div>
            <HiSparkles className="w-6 h-6 text-yellow-500 bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            School Uniform
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto mb-6 rounded-full glow"></div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Academic Year <span className="font-bold text-blue-600 dark:text-blue-400">2024/25</span> - 
            Distinctive Style & Quality
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
                <FaPalette className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Uniform Features</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                Our school uniform features a distinctive combination of <span className="font-semibold text-blue-600 dark:text-blue-400">Sky Blue and Navy Blue</span>, 
                complemented by a deep blue jersey and black shoes. For sports, students wear all-white attire.
              </p>
              
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

        {/* Category Filter */}
        <div className={`mb-8 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-2xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-600 dark:text-blue-400'
                    : 'bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/30 text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30'
                } backdrop-blur-sm`}
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span className="font-medium">{category.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Uniform Items Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onMouseMove={(e) => handleMouseMove(e, item.id)}
            >
              {/* Glassmorphism Card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30 ${item.glowColor} group-hover:scale-105 transition-all duration-500`}></div>
              
              {/* Mouse tracking light effect */}
              {hoveredItem === item.id && (
                <div 
                  className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`
                  }}
                ></div>
              )}
              
              <div className="relative p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${item.color} group-hover:scale-110 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">#{item.id}</div>
                    <div className={`text-2xl font-bold ${item.color} group-hover:scale-110 transition-all duration-300`}>
                      MWK {item.price}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.size}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                      {item.classGroup}
                    </p>
                  </div>
                  
                  <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <FaClipboardList className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Details</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.details}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/20 dark:border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <FaTag className={`w-4 h-4 ${item.color}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Price</span>
                    </div>
                    <div className={`text-lg font-bold ${item.color} group-hover:scale-110 transition-all duration-300`}>
                      MWK {item.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className={`mb-12 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/10 to-red-500/20 backdrop-blur-xl rounded-3xl border border-yellow-500/30"></div>
            <div className="relative p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl border border-yellow-500/30">
                  <FaInfoCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Important Notice</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400">Please Note:</span> The school shall not be responsible for the quality & price of the uniform. 
                    Parents should check with the supplier before purchasing. Ensure all uniform items are clearly labeled with your child's name.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.7s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 backdrop-blur-xl rounded-3xl border border-emerald-500/30"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
                  <FaPhone className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 group-hover:scale-105 transition-all duration-300"></div>
                  <div className="relative p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30">
                        <FaShoppingBag className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Uniform Inquiries</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <FaUser className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">Mr. Edward Moffat</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <HiAcademicCap className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600 dark:text-gray-400">Bursar's Office</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaPhone className="w-4 h-4 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-medium">+265 994437230</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 group-hover:scale-105 transition-all duration-300"></div>
                  <div className="relative p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl border border-orange-500/30">
                        <FaClipboardList className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Additional Notes</h3>
                        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-start gap-2">
                            <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>Please ensure all uniform items are clearly labeled with your child's name.</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>Replacement items can be purchased throughout the school year.</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>Sports attire: All-white clothing for physical education classes.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolUniformPage;
