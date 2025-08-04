import React, { useState, useEffect } from 'react';
import { FaEye, FaBullseye, FaBalanceScale, FaGlobe, FaStar, FaChevronDown } from 'react-icons/fa';

const VisionMissionPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutSections = [
    {
      id: 1,
      title: 'Vision',
      description: 'Our guiding star for excellence in education',
      icon: <FaEye className="w-12 h-12 text-red-500" />,
      gradient: 'from-red-500 via-pink-500 to-purple-600',
      bgGradient: 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our quest is multi-task and it takes fulfillment of different goals to:
          </p>
          <div className="relative p-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl text-white text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
            <div className="relative z-10">
              <FaStar className="w-8 h-8 mx-auto mb-4 animate-pulse" />
              <p className="font-bold text-2xl leading-relaxed">
                "MAKE THE INSTITUTION A WORLD CLASS WITH WORLD CLASS PERFORMANCE"
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            This entails putting in place set standards which will align the institution 
            to world-class institutions qualitatively and productively.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: 'Mission',
      description: 'Our commitment to educational excellence',
      icon: <FaBullseye className="w-12 h-12 text-blue-500" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-600',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg leading-relaxed mb-4">
              We, at <span className="font-bold text-yellow-300">Zomba Private Primary & Secondary International School</span> aim to become a 
              Leading & Innovative School of Zomba, bridging the gap between school education, 
              higher education and the industry.
            </p>
          </div>
          <div className="bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg leading-relaxed">
              We are on a mission to be one of the most sought after schools in the country 
              by <span className="font-bold text-yellow-300">2025</span> and emerge as a school of Research, Innovation, Knowledge and its 
              Application to the real needs of the Global World.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Core Values',
      description: 'Principles that guide our institution',
      icon: <FaBalanceScale className="w-12 h-12 text-green-500" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Excellence in all our endeavors',
            'Integrity and ethical conduct',
            'Respect for all individuals',
            'Commitment to community service',
            'Continuous improvement and innovation'
          ].map((value, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                <p className="font-medium text-lg">{value}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 4,
      title: 'Non-Discrimination Policy',
      description: 'Our commitment to equality',
      icon: <FaGlobe className="w-12 h-12 text-purple-500" />,
      gradient: 'from-purple-500 via-violet-500 to-indigo-600',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
      content: (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <FaGlobe className="w-8 h-8 mr-4 animate-spin-slow" />
            <h3 className="text-2xl font-bold">Equality for All</h3>
          </div>
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-yellow-300">ZPPSS</span> does not discriminate in employment or the provision of educational 
            services on the basis of race, color, religion, age, gender, national origin, 
            disability, citizenship status, veteran status or any other characteristic 
            protected by federal, state or local law.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-300 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-pulse">
                ZPPSS
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About Our School
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover what makes <span className="font-bold text-blue-600">Zomba Private Primary & Secondary School</span> special through our vision, mission, and values.
              </p>
            </div>
            
            {/* Scroll Indicator */}
            <div className="animate-bounce mt-12">
              <FaChevronDown className="w-8 h-8 mx-auto text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-20">
          {aboutSections.map((section, index) => (
            <div
              key={section.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={`${section.bgGradient} rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm border border-white/20`}>
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className={`p-6 rounded-2xl bg-gradient-to-r ${section.gradient} shadow-lg mb-4 md:mb-0 md:mr-8 transform hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                      {section.title}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                      {section.description}
                    </p>
                  </div>
                </div>
                
                {/* Section Content */}
                <div className="transition-all duration-500">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Quote */}
      <div className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-6">
            Building Tomorrow's Leaders Today
          </h3>
          <p className="text-xl text-white/90 leading-relaxed">
            At ZPPSS, we don't just educate students - we inspire them to become innovative thinkers, 
            ethical leaders, and global citizens ready to make a positive impact on the world.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className="w-6 h-6 text-yellow-300 animate-pulse" style={{ animationDelay: `${star * 0.1}s` }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default VisionMissionPage;