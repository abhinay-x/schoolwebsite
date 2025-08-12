import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaGraduationCap, FaFileAlt, FaCalendarAlt, FaDollarSign, FaUserGraduate, FaClipboardCheck, FaUsers, FaStar, FaArrowRight, FaSchool, FaAward, FaHeart, FaLightbulb } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiDocumentText, HiCalendar, HiCurrencyDollar, HiCheckCircle } from 'react-icons/hi';
import { CheckCircleIcon, DocumentTextIcon, UserGroupIcon, CalendarIcon, CurrencyDollarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const AdmissionPolicyPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPolicy, setHoveredPolicy] = useState(null);
  const [selectedStep, setSelectedStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, policyId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const policies = [
    {
      id: 1,
      icon: <FaFileAlt className="w-6 h-6" />,
      title: 'Application Process',
      description: 'Children will be permitted to attend the school only after the completion of the formalities. Our streamlined process ensures a smooth admission experience.',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20',
      glowColor: 'shadow-blue-500/25',
      color: 'text-blue-500',
      step: 1
    },
    {
      id: 2,
      icon: <FaClipboardCheck className="w-6 h-6" />,
      title: 'Required Documents',
      description: 'Application for admission should be made on the prescribed application form accompanied by relevant certificates and photo of the child.',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
      glowColor: 'shadow-emerald-500/25',
      color: 'text-emerald-500',
      step: 2
    },
    {
      id: 3,
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: 'Date of Birth Verification',
      description: 'Parents/Guardians shall make sure of the date of birth of their children/wards, before they are registered in the school register. The date of birth once entered cannot be altered.',
      gradient: 'from-orange-500/20 via-yellow-500/10 to-red-500/20',
      glowColor: 'shadow-orange-500/25',
      color: 'text-orange-500',
      step: 3
    },
    {
      id: 4,
      icon: <FaDollarSign className="w-6 h-6" />,
      title: 'Admission Fees',
      description: 'Admission fees must be paid at the time of admission. We offer flexible payment options to accommodate different family needs.',
      gradient: 'from-purple-500/20 via-violet-500/10 to-fuchsia-500/20',
      glowColor: 'shadow-purple-500/25',
      color: 'text-purple-500',
      step: 4
    },
    {
      id: 5,
      icon: <FaUserGraduate className="w-6 h-6" />,
      title: 'Previous School Records',
      description: 'Progress Report and Certificate of good conduct shall be produced by the Candidate at the time of admission issued by the previous school.',
      gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/20',
      glowColor: 'shadow-pink-500/25',
      color: 'text-pink-500',
      step: 5
    },
    {
      id: 6,
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: 'Transfer Certificate',
      description: 'Application for Transfer Certificate should be submitted well in advance and they will be issued only when all the dues fees have been cleared and school accounts have been duly settled.',
      gradient: 'from-teal-500/20 via-cyan-500/10 to-blue-500/20',
      glowColor: 'shadow-teal-500/25',
      color: 'text-teal-500',
      step: 6
    }
  ];

  const stats = [
    { icon: <FaUsers className="w-6 h-6" />, label: 'Students Enrolled', value: '500+', color: 'text-blue-500' },
    { icon: <FaSchool className="w-6 h-6" />, label: 'Years of Excellence', value: '25+', color: 'text-emerald-500' },
    { icon: <FaAward className="w-6 h-6" />, label: 'Success Rate', value: '98%', color: 'text-orange-500' },
    { icon: <FaStar className="w-6 h-6" />, label: 'Parent Satisfaction', value: '95%', color: 'text-purple-500' }
  ];

  const additionalInfo = [
    {
      icon: <FaLightbulb className="w-5 h-5" />,
      title: 'Age Requirements',
      description: 'Please ensure your child meets the minimum age requirement for the desired grade level.',
      color: 'text-yellow-500'
    },
    {
      icon: <FaClipboardCheck className="w-5 h-5" />,
      title: 'Documentation',
      description: 'All required documents must be submitted at the time of application.',
      color: 'text-green-500'
    },
    {
      icon: <FaGraduationCap className="w-5 h-5" />,
      title: 'Admission Assessment',
      description: 'Some grade levels may require an admission test or assessment.',
      color: 'text-blue-500'
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }}></div>
          
          {/* Rotating Elements */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full rotate-slow"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full rotate-slow" style={{ animationDelay: '10s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full rotate-slow" style={{ animationDelay: '5s' }}></div>
        </div>

        <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20 slide-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 pulse-glow-animation">
              <FaGraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Admission Policy
            </h1>
            <h2 className="text-3xl font-semibold text-red-500 dark:text-red-400 mb-4 bounce-gentle">
              <HiSparkles className="inline w-8 h-8 mr-2" />
              ADMISSION OF PUPILS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full glow-animation"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              Join our community of learners where excellence meets opportunity. Our comprehensive admission process ensures the perfect fit for your child's educational journey.
            </p>
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

          {/* Policies Grid */}
          <div className="max-w-7xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {policies.map((policy, index) => (
                <div 
                  key={policy.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredPolicy(policy.id)}
                  onMouseLeave={() => setHoveredPolicy(null)}
                  onMouseMove={(e) => handleMouseMove(e, policy.id)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${policy.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${policy.glowColor}`}></div>
                  
                  {/* Main Card */}
                  <div className="relative h-full bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    {/* Interactive Light Effect */}
                    {hoveredPolicy === policy.id && (
                      <div 
                        className="absolute inset-0 opacity-30 rounded-2xl transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 50%)`
                        }}
                      />
                    )}
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {policy.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${policy.gradient} mb-6 group-hover:scale-110 transition-all duration-300 ${policy.glowColor}`}>
                      <div className={policy.color}>
                        {policy.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {policy.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {policy.description}
                    </p>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer-animation opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="max-w-6xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-cyan-500/20 rounded-3xl blur-xl"></div>
              
              {/* Main Container */}
              <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-white/10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6 pulse-glow-animation">
                    <FaHeart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                    Additional Information
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Everything you need to know for a smooth admission process
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {additionalInfo.map((info, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 dark:from-white/10 dark:to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative bg-white/40 dark:bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/30 transition-all duration-300 group-hover:scale-105">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${info.color === 'text-yellow-500' ? 'bg-yellow-500/20' : info.color === 'text-green-500' ? 'bg-green-500/20' : 'bg-blue-500/20'} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <div className={info.color}>
                            {info.icon}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{info.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center slide-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-indigo-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-white/10">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                    Ready to Begin Your Journey?
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    For more information about our admission process, please contact our admissions office. We're here to guide you every step of the way.
                  </p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                  >
                    <span className="mr-3">Contact Admissions</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionPolicyPage;
