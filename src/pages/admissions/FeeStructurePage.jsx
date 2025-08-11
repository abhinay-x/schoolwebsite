import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaDollarSign, FaBook, FaGraduationCap, FaCalculator, FaUniversity, FaCreditCard, FaMoneyBillWave, FaChartLine, FaStar, FaHeart, FaUsers, FaAward, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiCurrencyDollar } from 'react-icons/hi';
import { BanknotesIcon, BookOpenIcon, DocumentCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { FaDownload } from 'react-icons/fa';
import feePDF from '/files/School Fee\'s 2025-26.pdf';

const FeeStructurePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLevel, setHoveredLevel] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedLevel, setSelectedLevel] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, levelId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const feeData = [
    {
      id: 1,
      level: 'Reception Classes',
      description: '(Foundation Stage 2 & Foundation Stage 1)',
      icon: <FaHeart className="w-6 h-6" />,
      items: [
        { name: 'Term Fees', amount: '450,000', isAnnual: false, icon: <FaDollarSign className="w-4 h-4" /> },
        { name: 'Books Fees', amount: '100,000', isAnnual: true, icon: <FaBook className="w-4 h-4" /> },
      ],
      total: '550,000',
      subsequentTerms: '450,000',
      gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/20',
      glowColor: 'shadow-pink-500/25',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    },
    {
      id: 2,
      level: 'Primary Classes',
      description: '(Year 1 up to Year 6)',
      icon: <FaBook className="w-6 h-6" />,
      items: [
        { name: 'Term Fees', amount: '700,000', isAnnual: false, icon: <FaDollarSign className="w-4 h-4" /> },
        { name: 'Books Fees', amount: '250,000', isAnnual: true, icon: <FaBook className="w-4 h-4" /> },
        { name: 'Examination Fees', amount: '50,000', isAnnual: true, icon: <FaCalculator className="w-4 h-4" /> },
      ],
      total: '1,000,000',
      subsequentTerms: '700,000',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20',
      glowColor: 'shadow-blue-500/25',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 3,
      level: 'Secondary Classes',
      description: '(Year 7, 8 & 9)',
      icon: <FaGraduationCap className="w-6 h-6" />,
      items: [
        { name: 'Term Fees', amount: '980,000', isAnnual: false, icon: <FaDollarSign className="w-4 h-4" /> },
        { name: 'Books Fees', amount: '300,000', isAnnual: true, icon: <FaBook className="w-4 h-4" /> },
        { name: 'Examination Fees', amount: '70,000', isAnnual: true, icon: <FaCalculator className="w-4 h-4" /> },
      ],
      total: '1,350,000',
      subsequentTerms: '980,000',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
      glowColor: 'shadow-emerald-500/25',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10'
    },
    {
      id: 4,
      level: 'IGCSE',
      description: '(Year 10 & 11)',
      icon: <FaUniversity className="w-6 h-6" />,
      items: [
        { name: 'Term Fees', amount: '1,100,000', isAnnual: false, icon: <FaDollarSign className="w-4 h-4" /> },
        { name: 'Books Fees', amount: '600,000', isAnnual: true, icon: <FaBook className="w-4 h-4" /> },
        { name: 'Examination Fees', amount: '100,000', isAnnual: true, icon: <FaCalculator className="w-4 h-4" /> },
      ],
      total: '1,800,000',
      subsequentTerms: '1,100,000',
      gradient: 'from-orange-500/20 via-yellow-500/10 to-red-500/20',
      glowColor: 'shadow-orange-500/25',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
  ];

  const stats = [
    { icon: <FaUsers className="w-6 h-6" />, label: 'Students Enrolled', value: '500+', color: 'text-blue-500' },
    { icon: <FaAward className="w-6 h-6" />, label: 'Academic Excellence', value: '25+ Years', color: 'text-emerald-500' },
    { icon: <FaChartLine className="w-6 h-6" />, label: 'Success Rate', value: '98%', color: 'text-orange-500' },
    { icon: <FaStar className="w-6 h-6" />, label: 'Parent Satisfaction', value: '95%', color: 'text-purple-500' }
  ];

  const paymentFeatures = [
    {
      icon: <FaCreditCard className="w-6 h-6" />,
      title: 'Flexible Payment Plans',
      description: 'Multiple payment options available to suit your needs',
      color: 'text-blue-500'
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Smart Investment in Future',
      description: 'International standard education at locally affordable fees - the smartest investment in your child\'s global future',
      color: 'text-emerald-500'
    },
    {
      icon: <FaMoneyBillWave className="w-6 h-6" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear breakdown of all costs',
      color: 'text-orange-500'
    }
  ];

  return (
    <>
      {/* Custom CSS for advanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
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
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(168, 85, 247, 0.6); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .glow-animation { animation: glow 3s ease-in-out infinite; }
        .shimmer-animation {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        .pulse-glow-animation { animation: pulse-glow 2s ease-in-out infinite; }
        .bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .rotate-slow { animation: rotate-slow 20s linear infinite; }
      `}</style>

      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 dark:from-slate-900 dark:via-emerald-900 dark:to-teal-900">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }}></div>
          
          {/* Rotating Elements */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-emerald-400 rounded-full rotate-slow"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-teal-400 rounded-full rotate-slow" style={{ animationDelay: '10s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full rotate-slow" style={{ animationDelay: '5s' }}></div>
        </div>

        <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20 slide-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8 pulse-glow-animation">
              <FaDollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-6">
              Fee Structure
            </h1>
            <h2 className="text-3xl font-semibold text-emerald-500 dark:text-emerald-400 mb-4 bounce-gentle">
              <HiSparkles className="inline w-8 h-8 mr-2" />
              ACADEMIC YEAR 2025/26
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full glow-animation"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              Transparent, competitive pricing for quality education. Invest in your child's future with our comprehensive fee structure.
            </p>
            <a 
              href={feePDF} 
              download="ZPPSS_Fee_Structure_2025-26.pdf"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-8"
            >
              <FaDownload className="mr-2" />
              Download Fee Structure (2025-26)
            </a>
          </div>

          {/* Stats Section */}
          <div className="max-w-6xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 dark:from-white/10 dark:to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color === 'text-blue-500' ? 'from-blue-500/20 to-blue-600/20' : stat.color === 'text-emerald-500' ? 'from-emerald-500/20 to-emerald-600/20' : stat.color === 'text-orange-500' ? 'from-orange-500/20 to-orange-600/20' : 'from-purple-500/20 to-purple-600/20'} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={stat.color}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Structure Cards */}
          <div className="max-w-7xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {feeData.map((level, index) => (
                <div 
                  key={level.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredLevel(level.id)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  onMouseMove={(e) => handleMouseMove(e, level.id)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${level.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${level.glowColor}`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    {/* Interactive Light Effect */}
                    {hoveredLevel === level.id && (
                      <div 
                        className="absolute inset-0 opacity-30 rounded-3xl transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 50%)`
                        }}
                      />
                    )}
                    
                    {/* Header */}
                    <div className="flex items-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${level.gradient} mr-6 group-hover:scale-110 transition-all duration-300 ${level.glowColor}`}>
                        <div className={level.color}>
                          {level.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
                          {level.level}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">{level.description}</p>
                      </div>
                    </div>
                    
                    {/* Fee Items */}
                    <div className="space-y-4 mb-8">
                      {level.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-4 bg-white/20 dark:bg-white/5 rounded-2xl border border-white/10">
                          <div className="flex items-center">
                            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${level.bgColor} mr-4`}>
                              <div className={level.color}>
                                {item.icon}
                              </div>
                            </div>
                            <div>
                              <span className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</span>
                              {item.isAnnual && <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 px-2 py-1 bg-yellow-500/20 rounded-full">(Annual)</span>}
                            </div>
                          </div>
                          <span className="text-xl font-bold text-gray-800 dark:text-white">MK {item.amount}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Totals */}
                    <div className="border-t border-white/20 pt-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xl font-bold text-gray-800 dark:text-white">Total First Term</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">MK {level.total}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg text-gray-600 dark:text-gray-300">Second & Third Term Fee:</span>
                        <span className="text-xl font-semibold text-purple-600 dark:text-purple-400">MK {level.subsequentTerms}</span>
                      </div>
                    </div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer-animation opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Features */}
          <div className="max-w-6xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Payment Benefits
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Flexible options designed with families in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {paymentFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 dark:from-white/10 dark:to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color === 'text-blue-500' ? 'bg-blue-500/20' : feature.color === 'text-emerald-500' ? 'bg-emerald-500/20' : 'bg-orange-500/20'} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={feature.color}>
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Information */}
          <div className="max-w-6xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/10 to-red-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-white/10">
                <div className="flex items-start mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mr-6">
                    <FaInfoCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Application Fee</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                      <span className="font-bold text-orange-600">MK 25,000</span> - One-time, non-refundable application and new admission fee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="max-w-6xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-white/10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 pulse-glow-animation">
                    <FaCreditCard className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Payment Information
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/20 dark:bg-white/10 rounded-2xl p-8 border border-white/20">
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <FaUniversity className="w-6 h-6 text-blue-500 mr-3" />
                      Bank Details
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Account Name:</span>
                        <span className="font-semibold text-gray-800 dark:text-white">ZOMBA PRIVATE PRIMARY SCHOOL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Account Number:</span>
                        <span className="font-semibold text-gray-800 dark:text-white">1093487</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Bank:</span>
                        <span className="font-semibold text-gray-800 dark:text-white">National Bank</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Branch:</span>
                        <span className="font-semibold text-gray-800 dark:text-white">ZOMBA</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 dark:bg-white/10 rounded-2xl p-8 border border-white/20">
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <FaCheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
                      Important Notes
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Bring deposit slip to accounts office for verification</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Fees must be paid by first week of each term</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Late payment may incur additional charges</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Payment plans available upon request</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeStructurePage;
