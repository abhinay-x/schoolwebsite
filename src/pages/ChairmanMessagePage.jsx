import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaUserTie, FaLightbulb, FaStar, FaGem, FaRocket, FaHeart, FaCrown, FaHandshake, FaAward, FaBrain } from 'react-icons/fa';
import chairmanImage from '../assets/Images/chairman.jpg';

const ChairmanMessagePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-cycle highlights
    const interval = setInterval(() => {
      setCurrentHighlight(prev => (prev + 1) % 6);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const keyPrinciples = [
    { 
      icon: <FaStar className="w-8 h-8" />, 
      title: "Highest Academic Standards", 
      description: "Pursuing excellence in every aspect of education",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    { 
      icon: <FaLightbulb className="w-8 h-8" />, 
      title: "Joyful Discovery", 
      description: "Encouraging meaningful and responsible learning",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    { 
      icon: <FaHeart className="w-8 h-8" />, 
      title: "Student Well-being", 
      description: "Caring deeply about each student's success",
      color: "from-pink-400 to-red-500",
      bgColor: "from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20"
    },
    { 
      icon: <FaBrain className="w-8 h-8" />, 
      title: "Expert Faculty", 
      description: "Dedicated teachers who are subject experts",
      color: "from-purple-400 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"
    },
    { 
      icon: <FaRocket className="w-8 h-8" />, 
      title: "High Expectations", 
      description: "Facilitating academic excellence for all learners",
      color: "from-green-400 to-teal-500",
      bgColor: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20"
    },
    { 
      icon: <FaGem className="w-8 h-8" />, 
      title: "Nurturing Environment", 
      description: "Creating spaces where every student thrives",
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
    }
  ];

  const achievements = [
    { number: "25+", label: "Years Leadership", icon: <FaCrown className="w-6 h-6" /> },
    { number: "1000+", label: "Students Impacted", icon: <FaHandshake className="w-6 h-6" /> },
    { number: "50+", label: "Awards Won", icon: <FaAward className="w-6 h-6" /> },
    { number: "100%", label: "Commitment", icon: <FaHeart className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-100 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20 overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"
          style={{
            top: `${80 + scrollY * 0.12}px`,
            right: `${-120 + mousePosition.x * 0.015}px`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float animation-delay-2000"
          style={{
            bottom: `${60 - scrollY * 0.08}px`,
            left: `${-80 + mousePosition.y * 0.012}px`
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-4000"
          style={{
            top: `${200 + scrollY * 0.06}px`,
            left: `${300 + mousePosition.x * 0.008}px`
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Chairman's Vision
              </h1>
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-blue-600/20 blur-3xl animate-pulse"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Leading with purpose, inspiring with vision, transforming through education
            </p>
          </div>

          {/* Main Content Card */}
          <div className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Multi-layered glowing effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-tilt"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-3xl blur-lg opacity-70 group-hover:opacity-90 transition duration-800"></div>
            
            <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30">
              {/* Animated header bar */}
              <div className="h-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 animate-gradient-x"></div>
              
              <div className="p-8 md:p-12">
                {/* Chairman Profile Section */}
                <div className="flex flex-col xl:flex-row items-center xl:items-start mb-16 space-y-8 xl:space-y-0 xl:space-x-16">
                  {/* Chairman Image */}
                  <div className="relative flex-shrink-0 group/image">
                    <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-full blur-2xl opacity-60 group-hover/image:opacity-80 animate-pulse transition-all duration-700"></div>
                    <div className="relative">
                      <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 transform transition-all duration-700 hover:scale-105 group-hover/image:rotate-3">
                        <img 
                          src={chairmanImage} 
                          alt="Mr. Mohammed Zuber Motani" 
                          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4">
                            <h3 className="text-xl font-bold mb-1">Visionary Leader</h3>
                            <p className="text-sm opacity-90">Shaping Educational Excellence</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full p-4 shadow-xl animate-bounce">
                        <FaCrown className="w-8 h-8" />
                      </div>
                      <div className="absolute top-12 -left-6 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-full p-4 shadow-xl animate-bounce animation-delay-1000">
                        <FaGem className="w-8 h-8" />
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full p-4 shadow-xl animate-bounce animation-delay-2000">
                        <FaRocket className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  {/* Chairman Details */}
                  <div className="text-center xl:text-left flex-1 space-y-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                        Mr. Mohammed Zuber Motani
                      </h2>
                      <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <FaUserTie className="w-6 h-6 mr-3" />
                        Chairman & Founder
                      </div>
                    </div>

                    {/* Key Principles Carousel */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 h-64 flex items-center justify-center">
                      <div className="text-center max-w-md">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${keyPrinciples[currentHighlight].color} text-white mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-xl`}>
                          {keyPrinciples[currentHighlight].icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                          {keyPrinciples[currentHighlight].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                          {keyPrinciples[currentHighlight].description}
                        </p>
                        
                        {/* Dots indicator */}
                        <div className="flex justify-center space-x-2 mt-6">
                          {keyPrinciples.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentHighlight(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentHighlight 
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 scale-125' 
                                  : 'bg-gray-300 dark:bg-gray-600 hover:scale-110'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {achievements.map((achievement, index) => (
                        <div 
                          key={index}
                          className="relative group/achievement"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-75 group-hover/achievement:opacity-100 transition duration-300"></div>
                          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                            <div className="text-emerald-600 dark:text-emerald-400 mb-2">
                              {achievement.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white">
                              {achievement.number}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {achievement.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="relative">
                  {/* Enhanced quote decorations */}
                  <FaQuoteLeft className="absolute -top-8 -left-6 w-16 h-16 md:w-20 md:h-20 text-emerald-200 dark:text-emerald-800 opacity-60" />
                  <FaQuoteRight className="absolute -bottom-8 -right-6 w-16 h-16 md:w-20 md:h-20 text-teal-200 dark:text-teal-800 opacity-60" />
                  
                  <div className="prose dark:prose-invert max-w-none text-justify space-y-10">
                    <div className="relative group/paragraph overflow-hidden rounded-3xl">
                      <div className={`absolute -inset-6 bg-gradient-to-r ${keyPrinciples[0].bgColor} opacity-0 group-hover/paragraph:opacity-100 transition-all duration-700 blur-xl`}></div>
                      <div className="relative p-8 transition-all duration-500 hover:transform hover:scale-[1.02]">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className={`p-3 bg-gradient-to-r ${keyPrinciples[0].color} text-white rounded-full flex-shrink-0`}>
                            {keyPrinciples[0].icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">Academic Excellence</h3>
                          </div>
                        </div>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 first-letter:text-7xl first-letter:font-bold first-letter:text-emerald-600 first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                          Our aim is that our students achieve the <span className="font-bold text-emerald-600 dark:text-emerald-400 animate-pulse">highest academic standards</span>. 
                          But this is only one aspect of our school. We actively encourage 
                          the process of joyful discovery that is central to meaningful and responsible learning.
                        </p>
                      </div>
                    </div>

                    <div className="relative group/paragraph overflow-hidden rounded-3xl">
                      <div className={`absolute -inset-6 bg-gradient-to-r ${keyPrinciples[3].bgColor} opacity-0 group-hover/paragraph:opacity-100 transition-all duration-700 blur-xl`}></div>
                      <div className="relative p-8 transition-all duration-500 hover:transform hover:scale-[1.02]">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className={`p-3 bg-gradient-to-r ${keyPrinciples[3].color} text-white rounded-full flex-shrink-0`}>
                            {keyPrinciples[3].icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Expert Faculty</h3>
                          </div>
                        </div>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
                          We have a team of <span className="font-bold text-purple-600 dark:text-purple-400">dedicated teachers who are experts in their subjects</span> 
                          and they facilitate very high academic expectations of their learners 
                          and care deeply about the well-being of each student.
                        </p>
                      </div>
                    </div>

                    <div className="relative group/paragraph overflow-hidden rounded-3xl">
                      <div className={`absolute -inset-6 bg-gradient-to-r ${keyPrinciples[5].bgColor} opacity-0 group-hover/paragraph:opacity-100 transition-all duration-700 blur-xl`}></div>
                      <div className="relative p-8 transition-all duration-500 hover:transform hover:scale-[1.02]">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className={`p-3 bg-gradient-to-r ${keyPrinciples[5].color} text-white rounded-full flex-shrink-0`}>
                            {keyPrinciples[5].icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Nurturing Environment</h3>
                          </div>
                        </div>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                          We pride ourselves on our <span className="font-bold text-3xl text-indigo-600 dark:text-indigo-400 animate-pulse">happy and nurturing environment</span> which 
                          enables every student to achieve their best.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inspirational Footer */}
                <div className="mt-16 text-center">
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 blur-2xl opacity-60 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-full px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500">
                      <div className="flex items-center space-x-4">
                        <FaRocket className="w-8 h-8 animate-bounce" />
                        <span className="text-xl md:text-2xl font-bold">Together, We Build Tomorrow</span>
                        <FaStar className="w-8 h-8 animate-spin-slow" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Join us in our mission to create an educational environment where every student thrives, 
                    grows, and prepares to make a positive impact on the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
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
          animation: float 7s ease-in-out infinite;
        }
        
        .animate-tilt {
          animation: tilt 12s infinite linear;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 4s ease infinite;
        }
        
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 4s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 4s linear infinite;
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
            animation: float 5s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default ChairmanMessagePage;