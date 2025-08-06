import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaGraduationCap, FaHeart, FaStar, FaAward, FaUsers, FaLightbulb, FaGlobe, FaTrophy } from 'react-icons/fa';
import principalImg from '../assets/Images/principal.jpg';

const PrincipalMessagePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-rotate quotes
    const interval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Principal image imported properly for Vercel deployment
  const principalImage = principalImg;

  const highlights = [
    { icon: <FaGraduationCap className="w-6 h-6" />, text: "Cambridge International Centre", color: "from-blue-500 to-cyan-500" },
    { icon: <FaAward className="w-6 h-6" />, text: "Excellence in Education", color: "from-purple-500 to-pink-500" },
    { icon: <FaHeart className="w-6 h-6" />, text: "Student-Centered Learning", color: "from-red-500 to-orange-500" },
    { icon: <FaStar className="w-6 h-6" />, text: "Innovation & Research", color: "from-green-500 to-teal-500" },
    { icon: <FaUsers className="w-6 h-6" />, text: "Inclusive Community", color: "from-indigo-500 to-purple-500" },
    { icon: <FaLightbulb className="w-6 h-6" />, text: "Creative Thinking", color: "from-yellow-500 to-orange-500" },
    { icon: <FaGlobe className="w-6 h-6" />, text: "Global Perspective", color: "from-teal-500 to-blue-500" },
    { icon: <FaTrophy className="w-6 h-6" />, text: "Achievement Focus", color: "from-amber-500 to-red-500" }
  ];

  const keyQuotes = [
    "We believe that education should be about developing a real thirst for learning.",
    "Happy children, who want to come to school, will eventually find something to latch on to.",
    "We strive for every one of our learners to be happy and thrive at ZPPS School."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"
          style={{
            top: `${100 + scrollY * 0.1}px`,
            right: `${-100 + mousePosition.x * 0.01}px`
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-300 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float animation-delay-2000"
          style={{
            bottom: `${50 - scrollY * 0.05}px`,
            left: `${-100 + mousePosition.y * 0.01}px`
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-green-300 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-4000"
          style={{
            top: `${300 + scrollY * 0.08}px`,
            left: `${200 + mousePosition.x * 0.005}px`
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-gradient">
                Principal's Message
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl animate-pulse"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            
            {/* Rotating Key Quotes */}
            <div className="max-w-4xl mx-auto h-20 flex items-center justify-center">
              <div className="relative overflow-hidden">
                {keyQuotes.map((quote, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 text-lg md:text-xl text-gray-600 dark:text-gray-400 italic ${
                      activeQuote === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'
                    }`}
                  >
                    "{quote}"
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Enhanced glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              {/* Animated top decorative bar */}
              <div className="h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
              
              <div className="p-6 md:p-12">
                {/* Principal Info Section */}
                <div className="flex flex-col xl:flex-row items-center xl:items-start mb-12 space-y-8 xl:space-y-0 xl:space-x-16">
                  {/* Principal Image with enhanced effects */}
                  <div className="relative flex-shrink-0 group/image">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-75 group-hover/image:opacity-100 animate-pulse transition-all duration-500"></div>
                    <div className="relative">
                      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-2">
                        <img 
                          src={principalImage} 
                          alt="Mr. Rachakonda Balaraju (Mr. Raj)" 
                          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
                            <h3 className="text-xl font-bold">Leading with Vision</h3>
                            <p className="text-sm opacity-90">Inspiring Excellence Daily</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating achievement badges */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full p-3 shadow-lg animate-bounce">
                        <FaTrophy className="w-6 h-6" />
                      </div>
                      <div className="absolute top-8 -left-4 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full p-3 shadow-lg animate-bounce animation-delay-1000">
                        <FaAward className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Principal Details */}
                  <div className="text-center xl:text-left flex-1 space-y-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                        Mr. Rachakonda Balaraju
                      </h2>
                      <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-light">
                        (Mr. Raj)
                      </h3>
                      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                        <FaGraduationCap className="w-6 h-6 mr-3" />
                        Principal & Educational Leader
                      </div>
                    </div>

                    {/* Enhanced Highlights Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {highlights.map((highlight, index) => (
                        <div 
                          key={index}
                          className={`relative group/highlight transition-all duration-500 hover:scale-110`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.color} rounded-xl blur opacity-75 group-hover/highlight:opacity-100 transition duration-300`}></div>
                          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-3 md:p-4 flex flex-col items-center space-y-2 transform transition-all duration-300 hover:shadow-lg">
                            <div className={`p-2 bg-gradient-to-r ${highlight.color} text-white rounded-lg group-hover/highlight:animate-pulse`}>
                              {highlight.icon}
                            </div>
                            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                              {highlight.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">500+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Students Guided</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-pink-600 dark:text-pink-400">100%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Dedication</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Content with enhanced styling */}
                <div className="relative">
                  {/* Decorative quote marks */}
                  <FaQuoteLeft className="absolute -top-6 -left-4 w-12 h-12 md:w-16 md:h-16 text-blue-200 dark:text-blue-800 opacity-50" />
                  <FaQuoteRight className="absolute -bottom-6 -right-4 w-12 h-12 md:w-16 md:h-16 text-purple-200 dark:text-purple-800 opacity-50" />
                  
                  <div className="prose dark:prose-invert max-w-none text-justify space-y-8">
                    <div className="relative group/paragraph overflow-hidden rounded-2xl">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover/paragraph:opacity-100 transition-all duration-500 blur-sm"></div>
                      <div className="relative p-6 transition-all duration-300">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                          I am happy to announce that <span className="font-bold text-blue-600 dark:text-blue-400 animate-pulse">ZPPS School is an accredited Cambridge International Centre</span>. 
                          We completely follow the Cambridge Curriculum from Foundation to IGCSE classes. 
                          We believe that education should be about developing a real thirst for learning.
                        </p>
                      </div>
                    </div>

                    <div className="relative group/paragraph overflow-hidden rounded-2xl">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-red-900/20 opacity-0 group-hover/paragraph:opacity-100 transition-all duration-500 blur-sm"></div>
                      <div className="relative p-6 transition-all duration-300">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                          <span className="font-bold text-purple-600 dark:text-purple-400">ZPPSS has a long-standing reputation</span> for doing its very best for each individual student, 
                          by underpinning an exciting and ambitious academic program and a wide range of 
                          extra-curricular activities. Words, pictures, and the school ecosystem speak volumes 
                          about the learning air that flows in ZPPS School.
                        </p>
                      </div>
                    </div>

                    <div className="relative group/paragraph overflow-hidden rounded-2xl">
                      <div className="absolute -inset-4 bg-gradient-to-r from-pink-50 via-red-50 to-orange-50 dark:from-pink-900/20 dark:via-red-900/20 dark:to-orange-900/20 opacity-0 group-hover/paragraph:opacity-100 transition-all duration-500 blur-sm"></div>
                      <div className="relative p-6 transition-all duration-300">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                          Our school offers <span className="font-bold text-pink-600 dark:text-pink-400">outstanding academic, sporting, and extracurricular opportunities</span>. 
                          Come and see the learners at work and play, really enjoying their time. Speak to them 
                          of their success and failures and the lessons these have taught them. Hear about the 
                          way children are cared for and nurtured. This is the essence of Zomba Private Primary 
                          and Secondary School and it sets us apart from other schools.
                        </p>
                      </div>
                    </div>

                    <div className="relative group/paragraph overflow-hidden rounded-2xl">
                      <div className="absolute -inset-4 bg-gradient-to-r from-green-50 via-teal-50 to-blue-50 dark:from-green-900/20 dark:via-teal-900/20 dark:to-blue-900/20 opacity-0 group-hover/paragraph:opacity-100 transition-all duration-500 blur-sm"></div>
                      <div className="relative p-6 transition-all duration-300">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                          This is a place where children learn how to treat others the way they themselves would 
                          like to be treated, where they learn to give their best in spite of the difficulties 
                          they may encounter, where they learn to grow into <span className="font-bold text-green-600 dark:text-green-400">well-mannered and balanced young men 
                          and women</span>, where they learn to both work and play with a smile on their face.
                        </p>
                      </div>
                    </div>

                    <div className="relative group/paragraph overflow-hidden rounded-2xl">
                      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover/paragraph:opacity-100 transition-all duration-500 blur-sm"></div>
                      <div className="relative p-6 transition-all duration-300">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                          Zomba Private Primary and Secondary is <span className="font-bold text-indigo-600 dark:text-indigo-400">inclusive in the way that we cater for and 
                          accommodate children with diverse interests, abilities, and talents</span>, while being 
                          exclusive in our provision for those who really want to excel either academically, 
                          on the sports pitches, drama, art, computing, or wherever their strengths may lie.
                        </p>
                      </div>
                    </div>

                    <div className="relative group/paragraph overflow-hidden rounded-2xl">
                      <div className="absolute -inset-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 opacity-0 group-hover/paragraph:opacity-100 transition-all duration-500 blur-sm"></div>
                      <div className="relative p-6 transition-all duration-300">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                          Above all, we strive for every one of our learners to be <span className="font-bold text-2xl text-yellow-600 dark:text-yellow-400 animate-pulse">happy</span>. 
                          Happy children, who want to come to school, will eventually find something to latch on to and throw 
                          their energies into. Happy children will always thrive and succeed at ZPPS School.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                  <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <FaHeart className="w-6 h-6 animate-pulse" />
                    <span className="text-lg font-semibold">Join Our Learning Community</span>
                    <FaStar className="w-6 h-6 animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @media (max-width: 768px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default PrincipalMessagePage;