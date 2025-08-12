import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaDownload, FaFileAlt, FaClipboardList, FaUserGraduate, FaSchool, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle, FaArrowRight, FaStar, FaHeart, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiDocumentText, HiOfficeBuilding, HiUserCircle } from 'react-icons/hi';
import { DocumentTextIcon, ArrowDownTrayIcon, BuildingOffice2Icon, UserCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import applicationPdf from '/files/application.pdf';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const AdmissionFormPage = () => {
  const [pdfExists, setPdfExists] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('download');

  useEffect(() => {
    // Set pdfExists to true if we can import the PDF
    setPdfExists(true);
    setIsLoading(false);
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    window.open(applicationPdf, '_blank');
  };

  const handleMouseMove = (e, stepId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const steps = [
    {
      id: 1,
      icon: <FaDownload className="w-6 h-6" />,
      title: 'Download Form',
      description: 'Download the official admission application form in PDF format',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20',
      glowColor: 'shadow-blue-500/25',
      color: 'text-blue-500'
    },
    {
      id: 2,
      icon: <FaClipboardList className="w-6 h-6" />,
      title: 'Fill Complete Form',
      description: 'Complete all required fields with accurate information',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
      glowColor: 'shadow-emerald-500/25',
      color: 'text-emerald-500'
    },
    {
      id: 3,
      icon: <FaFileAlt className="w-6 h-6" />,
      title: 'Attach Documents',
      description: 'Include all necessary supporting documents and certificates',
      gradient: 'from-orange-500/20 via-yellow-500/10 to-red-500/20',
      glowColor: 'shadow-orange-500/25',
      color: 'text-orange-500'
    },
    {
      id: 4,
      icon: <FaSchool className="w-6 h-6" />,
      title: 'Submit to Office',
      description: 'Submit the completed form to our school office with fees',
      gradient: 'from-purple-500/20 via-violet-500/10 to-fuchsia-500/20',
      glowColor: 'shadow-purple-500/25',
      color: 'text-purple-500'
    }
  ];

  const stats = [
    { icon: <FaUsers className="w-6 h-6" />, label: 'Applications Processed', value: '1000+', color: 'text-blue-500' },
    { icon: <FaAward className="w-6 h-6" />, label: 'Success Rate', value: '95%', color: 'text-emerald-500' },
    { icon: <FaStar className="w-6 h-6" />, label: 'Processing Time', value: '3-5 Days', color: 'text-orange-500' },
    { icon: <FaHeart className="w-6 h-6" />, label: 'Parent Satisfaction', value: '98%', color: 'text-purple-500' }
  ];

  const contactMethods = [
    {
      icon: <FaSchool className="w-6 h-6" />,
      title: 'School Office',
      description: 'Visit us during working hours to collect the form in person',
      details: 'Mon-Fri: 8:00 AM - 4:00 PM',
      color: 'text-blue-500',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Contact our admissions team via email for assistance',
      details: 'zppss1978@gmail.com',
      color: 'text-emerald-500',
      gradient: 'from-emerald-500/20 to-emerald-600/20'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Call us directly for immediate assistance',
      details: '+265 996639468',
      color: 'text-orange-500',
      gradient: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-slate-900 dark:to-blue-900">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse"></div>
          <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-white/10">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 animate-spin"></div>
                <div className="h-8 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full w-64 mx-auto mb-4"></div>
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-32 mx-auto mb-8"></div>
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl max-w-3xl mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <FaFileAlt className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Admission Form
            </h1>
            <h2 className="text-3xl font-semibold text-blue-500 dark:text-blue-400 mb-4 bounce-gentle">
              <HiSparkles className="inline w-8 h-8 mr-2" />
              START YOUR JOURNEY
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full glow-animation"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              Begin your educational journey with us. Download, complete, and submit your admission application form to join our community of excellence.
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

          {/* Download Section */}
          <div className="max-w-5xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-indigo-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-white/10 flex flex-col items-center">
                <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 pulse-glow-animation">
                    <FaDownload className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4 brightness-110">
                    Download Application Form
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-200 font-medium">
                    Get started with the admission process by downloading our official application form
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleDownload}
                    className="group inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
                  >
                    <FaDownload className="w-5 sm:w-6 h-5 sm:h-6 mr-3 sm:mr-4 group-hover:animate-bounce" />
                    <span>Download PDF Form</span>
                    <FaArrowRight className="w-5 sm:w-6 h-5 sm:h-6 ml-3 sm:ml-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 font-medium">
                    PDF format • Compatible with all devices • Printable
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="max-w-7xl mx-auto mb-20 slide-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Application Process
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Follow these simple steps to complete your admission application
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onMouseMove={(e) => handleMouseMove(e, step.id)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${step.glowColor}`}></div>
                  
                  {/* Main Card */}
                  <div className="relative h-full bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    {/* Interactive Light Effect */}
                    {hoveredStep === step.id && (
                      <div 
                        className="absolute inset-0 opacity-30 rounded-2xl transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 50%)`
                        }}
                      />
                    )}
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.id}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} mb-6 group-hover:scale-110 transition-all duration-300 ${step.glowColor}`}>
                      <div className={step.color}>
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {step.description}
                    </p>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer-animation opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="max-w-7xl mx-auto slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Need Help? Contact Us
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our admissions team is here to assist you throughout the process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((contact, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 dark:from-white/10 dark:to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={contact.color}>
                        {contact.icon}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{contact.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{contact.description}</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{contact.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionFormPage;
