import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { FaTrophy, FaPen, FaQuestionCircle, FaSpellCheck, FaComments, FaBookOpen, FaStar, FaHeart, FaUsers, FaAward, FaCheckCircle, FaInfoCircle, FaArrowRight, FaMedal, FaCrown, FaGraduationCap } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiDocumentText } from 'react-icons/hi';
import { TrophyIcon, UserIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Enhanced competitions data
const competitionsData = [
  {
    id: 1,
    title: 'Essay Writing',
    category: 'Literary',
    description: 'Our students are involved in essay writing to stimulate their creative skills and bring their imagination close to reality. They are exposed to writing all forms of essays enabling them to develop their minds to a greater writing scope.',
    image: '/src/assets/Images/competitions/c1.jpeg',
    icon: <FaPen className="w-6 h-6" />,
    gradient: 'from-blue-500/20 via-sky-500/10 to-cyan-500/20',
    glowColor: 'shadow-blue-500/25',
    color: 'text-blue-500',
    participants: '50+',
    duration: '2 Hours',
    awards: ['Gold Medal', 'Silver Medal', 'Bronze Medal'],
    skills: ['Creative Writing', 'Critical Thinking', 'Language Mastery']
  },
  {
    id: 2,
    title: 'Quiz Competition',
    category: 'Academic',
    description: 'While studying different subjects offered at the school, the ability to grasp, recall and explain contexts is tested through Quiz Competitions. Students enjoy answering questions covering wide areas of study.',
    image: '/src/assets/Images/competitions/c2.jpeg',
    icon: <FaQuestionCircle className="w-6 h-6" />,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
    glowColor: 'shadow-emerald-500/25',
    color: 'text-emerald-500',
    participants: '80+',
    duration: '1.5 Hours',
    awards: ['Winner Trophy', 'Runner-up Medal', 'Participation Certificate'],
    skills: ['Knowledge Recall', 'Quick Thinking', 'Subject Mastery']
  },
  {
    id: 3,
    title: 'Spell Bee',
    category: 'Language',
    description: 'Our students achieve perfection in English and French Grammar by contesting in spelling competitions. Perfection in languages is achieved making the school one of the best centres of language.',
    image: '/src/assets/Images/competitions/c3.jpeg',
    icon: <FaSpellCheck className="w-6 h-6" />,
    gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
    glowColor: 'shadow-purple-500/25',
    color: 'text-purple-500',
    participants: '40+',
    duration: '1 Hour',
    awards: ['Champion Badge', 'Excellence Certificate', 'Merit Award'],
    skills: ['Language Precision', 'Vocabulary', 'Grammar Mastery']
  },
  {
    id: 4,
    title: 'Debate Competition',
    category: 'Oratory',
    description: 'Debating opens up the critical faculty within the psychology of our students. Critical thinking, reasoning and clear analysis of issues is sharpened through debates.',
    image: '/src/assets/Images/competitions/c1.jpeg',
    icon: <FaComments className="w-6 h-6" />,
    gradient: 'from-orange-500/20 via-yellow-500/10 to-amber-500/20',
    glowColor: 'shadow-orange-500/25',
    color: 'text-orange-500',
    participants: '30+',
    duration: '3 Hours',
    awards: ['Best Debater Trophy', 'Outstanding Speaker', 'Team Excellence'],
    skills: ['Public Speaking', 'Critical Analysis', 'Persuasion']
  },
  {
    id: 5,
    title: 'Story Telling',
    category: 'Cultural',
    description: 'The school enrolls students of different cultural backgrounds. This blending makes our school a best Centre of interactive learning where students learn from different cultures.',
    image: '/src/assets/Images/competitions/c2.jpeg',
    icon: <FaBookOpen className="w-6 h-6" />,
    gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/20',
    glowColor: 'shadow-pink-500/25',
    color: 'text-pink-500',
    participants: '35+',
    duration: '2 Hours',
    awards: ['Best Storyteller', 'Cultural Ambassador', 'Creative Expression'],
    skills: ['Narrative Skills', 'Cultural Awareness', 'Performance']
  }
];

// Stats and features data
const stats = [
  { icon: <FaTrophy className="w-6 h-6" />, label: 'Total Competitions', value: '5+', color: 'text-blue-500' },
  { icon: <FaUsers className="w-6 h-6" />, label: 'Participants', value: '200+', color: 'text-emerald-500' },
  { icon: <FaMedal className="w-6 h-6" />, label: 'Awards Given', value: '50+', color: 'text-orange-500' },
  { icon: <FaStar className="w-6 h-6" />, label: 'Success Rate', value: '95%', color: 'text-purple-500' }
];

const features = [
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    title: 'Skill Development',
    description: 'Competitions enhance critical thinking, creativity, and academic excellence',
    color: 'text-blue-500'
  },
  {
    icon: <FaCrown className="w-6 h-6" />,
    title: 'Recognition & Awards',
    description: 'Outstanding performers receive medals, trophies, and certificates',
    color: 'text-emerald-500'
  },
  {
    icon: <FaHeart className="w-6 h-6" />,
    title: 'Character Building',
    description: 'Fostering confidence, leadership, and healthy competitive spirit',
    color: 'text-orange-500'
  }
];

const CompetitionsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCompetition, setActiveCompetition] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, itemId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const categories = [
    { id: 'all', label: 'All Competitions', icon: <FaTrophy className="w-4 h-4" /> },
    { id: 'Literary', label: 'Literary', icon: <FaPen className="w-4 h-4" /> },
    { id: 'Academic', label: 'Academic', icon: <FaQuestionCircle className="w-4 h-4" /> },
    { id: 'Language', label: 'Language', icon: <FaSpellCheck className="w-4 h-4" /> },
    { id: 'Oratory', label: 'Oratory', icon: <FaComments className="w-4 h-4" /> },
    { id: 'Cultural', label: 'Cultural', icon: <FaBookOpen className="w-4 h-4" /> }
  ];

  const filteredCompetitions = selectedCategory === 'all' ? competitionsData : competitionsData.filter(comp => comp.category === selectedCategory);

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
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
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
        .slide-in-up { animation: slide-in-up 0.8s ease-out; }
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
              <FaTrophy className="w-8 h-8 text-blue-500" />
            </div>
            <HiSparkles className="w-6 h-6 text-yellow-500 bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            School Competitions
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto mb-6 rounded-full glow"></div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Academic Extra-curricular Competitions - Fostering Excellence & Innovation
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
                <FaAward className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Competition Benefits</h2>
              </div>
              
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

        {/* Competitions Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          {filteredCompetitions.map((competition, index) => (
            <div
              key={competition.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredItem(competition.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onMouseMove={(e) => handleMouseMove(e, competition.id)}
            >
              {/* Glassmorphism Card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${competition.gradient} backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30 ${competition.glowColor} group-hover:scale-105 transition-all duration-500`}></div>
              
              {/* Mouse tracking light effect */}
              {hoveredItem === competition.id && (
                <div 
                  className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`
                  }}
                ></div>
              )}
              
              <div className="relative p-8 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${competition.color} group-hover:scale-110 transition-all duration-300`}>
                    {competition.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{competition.category}</div>
                    <div className={`text-lg font-bold ${competition.color} group-hover:scale-110 transition-all duration-300`}>
                      #{competition.id}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {competition.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {competition.description}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl p-3 border border-white/20 dark:border-gray-700/30">
                      <div className="flex items-center gap-2 mb-1">
                        <FaUsers className={`w-3 h-3 ${competition.color}`} />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Participants</span>
                      </div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{competition.participants}</p>
                    </div>
                    <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl p-3 border border-white/20 dark:border-gray-700/30">
                      <div className="flex items-center gap-2 mb-1">
                        <FaCheckCircle className={`w-3 h-3 ${competition.color}`} />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Duration</span>
                      </div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{competition.duration}</p>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                      <FaStar className={`w-3 h-3 ${competition.color}`} />
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {competition.skills.slice(0, 2).map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Awards */}
                  <div className="pt-4 border-t border-white/20 dark:border-gray-700/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaMedal className={`w-4 h-4 ${competition.color}`} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Awards</span>
                      </div>
                      <div className={`text-sm font-bold ${competition.color} group-hover:scale-110 transition-all duration-300`}>
                        {competition.awards.length}+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 backdrop-blur-xl rounded-3xl border border-emerald-500/30"></div>
            <div className="relative p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
                  <FaInfoCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Join Our Competitions</h2>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Participate in our exciting competitions and showcase your talents! Develop new skills, 
                gain recognition, and build lasting memories with fellow students.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Open to All Students</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Multiple Categories</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Exciting Prizes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsPage;
