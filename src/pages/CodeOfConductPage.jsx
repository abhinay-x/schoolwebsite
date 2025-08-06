import React, { useState, useEffect } from 'react';
import { 
  FaGavel, 
  FaClock, 
  FaHandsWash, 
  FaUserShield, 
  FaUsers, 
  FaExclamationTriangle, 
  FaClipboardCheck, 
  FaShieldAlt,
  FaBalanceScale,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';

const CodeOfConductPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('rules');

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const schoolRules = [
    {
      id: 'punctuality',
      title: 'Punctuality & Regularity',
      icon: <FaClock className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      rules: [
        'All students must arrive fifteen minutes before the school bell i.e. at 7:15 a.m. The school bell rings at 7:30 a.m.',
        'Every student is expected to bring school diary to school every day.',
        'It is obligatory for the students to attend every class as per their Time-Table.',
        'Taking half day is impermissible. A student may be allowed to leave early only at the discretion of the principal if the parents come personally to take him/her.'
      ]
    },
    {
      id: 'cleanliness',
      title: 'Cleanliness & Hygiene',
      icon: <FaHandsWash className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      rules: [
        'All students must adhere to the dress code of the school.',
        'Neat and tidy school uniform should be worn with belt, well-polished shoes with proper socks.',
        'A presentable turn out is expected of every student which includes a proper haircut and short nails.',
        'Students are discouraged to wear any jewellery, expensive wrist watches and any cosmetics whatsoever.',
        'Students are to refrain from bringing any sharp objects to school.',
        'Students should take pride in keeping the school premises clean.'
      ]
    },
    {
      id: 'discipline',
      title: 'Discipline',
      icon: <FaUserShield className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      rules: [
        'Observance of the school rules by each student is mandatory.',
        'Every student must endeavour to keep high standard of the school by maintaining the school discipline.',
        'Students are expected to be courteous, polite and helpful to teachers and peers.',
        'Students are expected to be polite towards the non-teaching staff of the school.',
        'Students who use offensive language, bully and hurt or cause injury to the other students are liable to be penalized.',
        'A student involved in any incident even outside the school which brings discredit to the institution either because of unpleasant nature or invites criminal or legal action by the police or court will be dismissed from the school without any further enquiry.'
      ]
    },
    {
      id: 'decorum',
      title: 'Maintenance of Decorum',
      icon: <FaUsers className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      rules: [
        'Students are expected to move in corridors in a disciplined manner.',
        'They will walk in a line and maintain silence and distance.',
        'During co-curricular activities students are expected to go to the respective places maintaining perfect order.',
        'Refrain from borrowing or lending of money and exchange of articles.',
        'Chewing bubble gum, spitting, defacing furniture, writing, marking on the walls and misuse of smart boards will lead to strict disciplinary action.',
        'Students are not to carry mobiles/electronic gadgets to school. In case of any such requirements, written prior permission should be taken by the parents and the gadget should be handed over to the class teacher on arrival to the school.'
      ]
    },
    {
      id: 'responsibility',
      title: 'Responsibility',
      icon: <FaClipboardCheck className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      rules: [
        'Each child is expected to take full responsibility as we expect our students to exhibit exemplary behaviour and conduct themselves as brand ambassadors of the school.',
        'Keep abreast of the class syllabus to perform satisfactorily in Class Tests and Examinations.',
        'Get all the class and home assignments checked on time.',
        'Seek the assistance and guidance of teachers whenever required.',
        'To take full care of the school property. Those found guilty of damaging school property will be severely dealt with.'
      ]
    },
    {
      id: 'safety',
      title: 'Safety and Security',
      icon: <FaShieldAlt className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-500',
      bgColor: 'from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20',
      rules: [
        'Safety and security of our students is our foremost concern and priority.',
        'Visitors are requested to enter by the main gate, sign-in and sign-out in the register kept for this purpose at the Bursar\'s office.',
        'Visitors and parents are strictly not allowed to visit the class rooms or any other area in the school.',
        'For any queries kindly contact the Office Front Help Desk.'
      ]
    },
    {
      id: 'integrity',
      title: 'Integrity and Sensitivity',
      icon: <FaBalanceScale className="w-8 h-8" />,
      color: 'from-pink-500 to-red-500',
      bgColor: 'from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20',
      rules: [
        'As the end goal of education is to help an individual become a better human being, each student is expected to act by a value system and be upright in his/her dealings.',
        'Students are expected to be fair and not resort to under means like cheating in exams, copying the work of others etc.',
        'Students are expected to be sensitive to the unspoken needs of the constituents of the environment and safeguard them in every possible way.'
      ]
    }
  ];

  const disciplineCodes = [
    {
      id: 'code-a',
      title: 'Discipline Code A',
      subtitle: 'Acts of Misconduct',
      icon: <FaExclamationTriangle className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      description: 'The following acts and conduct on the part of the student will amount to misconduct.',
      items: [
        'Misbehaviour towards teacher or any other employee of the school.',
        'Intentional disturbance of classes.',
        'Absence from classes without the permission of the teacher/Principal.',
        'Bullying/intimidating others.',
        'Eve-teasing/misbehaviour towards girl-students.',
        'Damaging/disfiguring school property.',
        'Propagating a strike/disruption of class.',
        'Indulging in physical violence in any manner.',
        'Disobeying lawful orders of the Teacher/Principal.',
        'Bringing unauthorised people/articles/instruments.',
        'Theft/pilferage of school/students property.',
        'Any behaviour unbecoming of a student.',
        'When students move along the corridors and when changing class, they must maintain silence and walk in single line keeping to the left.',
        'Students are expected to speak only in ENGLISH during school hours.'
      ]
    },
    {
      id: 'code-b',
      title: 'Discipline Code B',
      subtitle: 'Disciplinary Actions',
      icon: <FaGavel className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      description: 'In case of misconduct, school shall take action as per observation, which may involve:',
      items: [
        'Oral warning to the student.',
        'Written warnings.',
        'Suspension of one day from class/school/period after five written warnings.',
        'Final written warnings in case of no improvement.',
        'Suspension of one week.'
      ]
    }
  ];

  const tabs = [
    { id: 'rules', label: 'School Rules', icon: <FaClipboardCheck className="w-5 h-5" /> },
    { id: 'discipline', label: 'Discipline Codes', icon: <FaGavel className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 dark:from-gray-900 dark:via-red-900/20 dark:to-orange-900/20 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-red-300 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"
          style={{
            top: `${80 + scrollY * 0.1}px`,
            right: `${-150}px`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-2000"
          style={{
            bottom: `${100 - scrollY * 0.08}px`,
            left: `${-100}px`
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-300 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float animation-delay-4000"
          style={{
            top: `${300 + scrollY * 0.06}px`,
            left: `${200}px`
          }}
        ></div>
      </div>

      <div className="relative z-10 py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Code of Conduct
              </h1>
              <div className="absolute -inset-6 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-pink-600/20 blur-3xl animate-pulse"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive guidelines for maintaining excellence, discipline, and character in our school community
            </p>
          </div>

          {/* Tab Navigation */}
          <div className={`flex justify-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-white/20">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* School Rules Tab */}
          {activeTab === 'rules' && (
            <div className="space-y-8">
              {schoolRules.map((section, index) => (
                <div
                  key={section.id}
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="relative group">
                    {/* Glowing border */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${section.color} rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500`}></div>
                    
                    <div className={`relative bg-gradient-to-r ${section.bgColor} backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden`}>
                      {/* Header */}
                      <div 
                        className="p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/30"
                        onClick={() => toggleSection(section.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6">
                            <div className={`p-4 bg-gradient-to-r ${section.color} text-white rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                              {section.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                {section.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 mt-1">
                                {section.rules.length} guidelines
                              </p>
                            </div>
                          </div>
                          <div className={`transform transition-transform duration-300 ${expandedSections[section.id] ? 'rotate-180' : ''}`}>
                            <FaChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`overflow-hidden transition-all duration-500 ${expandedSections[section.id] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="space-y-4">
                              {section.rules.map((rule, ruleIndex) => (
                                <div 
                                  key={ruleIndex}
                                  className="flex items-start space-x-4 group/rule hover:bg-white/30 dark:hover:bg-gray-700/30 rounded-xl p-3 transition-all duration-300"
                                >
                                  <div className="flex-shrink-0 mt-1">
                                    <FaCheckCircle className={`w-5 h-5 bg-gradient-to-r ${section.color} bg-clip-text text-transparent group-hover/rule:animate-pulse`} />
                                  </div>
                                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                                    {rule}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Discipline Codes Tab */}
          {activeTab === 'discipline' && (
            <div className="space-y-8">
              {disciplineCodes.map((code, index) => (
                <div
                  key={code.id}
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="relative group">
                    {/* Enhanced glowing border */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${code.color} rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-700 animate-tilt`}></div>
                    
                    <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
                      {/* Header with gradient bar */}
                      <div className={`h-2 bg-gradient-to-r ${code.color}`}></div>
                      
                      <div className="p-6 md:p-12">
                        {/* Title Section */}
                        <div className="flex items-center space-x-6 mb-8">
                          <div className={`p-6 bg-gradient-to-r ${code.color} text-white rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3`}>
                            {code.icon}
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                              {code.title}
                            </h2>
                            <h3 className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                              {code.subtitle}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 mb-8">
                          <p className="text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed font-medium">
                            {code.description}
                          </p>
                        </div>

                        {/* Items List */}
                        <div className="grid gap-4">
                          {code.items.map((item, itemIndex) => (
                            <div 
                              key={itemIndex}
                              className="relative group/item"
                              style={{ animationDelay: `${itemIndex * 0.05}s` }}
                            >
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl blur opacity-0 group-hover/item:opacity-75 transition duration-300"></div>
                              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-600 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                                <div className="flex items-start space-x-4">
                                  <div className="flex-shrink-0">
                                    <div className={`w-8 h-8 bg-gradient-to-r ${code.color} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg`}>
                                      {itemIndex + 1}
                                    </div>
                                  </div>
                                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify flex-1">
                                    {item}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer Message */}
          <div className={`mt-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative inline-block">
              <div className="absolute -inset-6 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 blur-3xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 text-white rounded-3xl px-12 py-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <FaStar className="w-12 h-12 animate-spin-slow" />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Excellence Through Discipline</h3>
                    <p className="text-lg opacity-90">Building character, fostering growth, achieving greatness together</p>
                  </div>
                  <FaBalanceScale className="w-12 h-12 animate-bounce" />
                </div>
              </div>
            </div>
            <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our code of conduct serves as the foundation for creating a safe, respectful, and nurturing environment 
              where every student can thrive academically, socially, and personally.
            </p>
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
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @media (max-width: 768px) {
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default CodeOfConductPage;