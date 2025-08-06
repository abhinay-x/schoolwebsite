import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  SparklesIcon,
  StarIcon,
  TrophyIcon,
  UserGroupIcon,
  LightBulbIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';

// Enhanced Floating Particles Component
const FloatingParticles = ({ mousePosition }) => {
  const particles = [
    { icon: BookOpenIcon, delay: 0, size: 'w-6 h-6', color: 'text-blue-400' },
    { icon: AcademicCapIcon, delay: 1, size: 'w-8 h-8', color: 'text-green-400' },
    { icon: SparklesIcon, delay: 2, size: 'w-5 h-5', color: 'text-purple-400' },
    { icon: StarIcon, delay: 3, size: 'w-7 h-7', color: 'text-yellow-400' },
    { icon: TrophyIcon, delay: 4, size: 'w-6 h-6', color: 'text-orange-400' },
    { icon: LightBulbIcon, delay: 5, size: 'w-6 h-6', color: 'text-cyan-400' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => {
        const Icon = particle.icon;
        const parallaxX = mousePosition.x * (0.02 + index * 0.01);
        const parallaxY = mousePosition.y * (0.02 + index * 0.01);
        
        return (
          <div
            key={index}
            className={`absolute animate-float opacity-60 ${particle.color}`}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${10 + (index * 12)}%`,
              transform: `translate(${parallaxX}px, ${parallaxY}px) rotate(${index * 45}deg)`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + index}s`
            }}
          >
            <Icon className={`${particle.size} animate-pulse`} style={{ animationDelay: `${particle.delay * 0.5}s` }} />
          </div>
        );
      })}
    </div>
  );
};

// Enhanced Navigation Tabs Component
const CurriculumNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'foundation-stage', label: 'Foundation Stage', icon: UserGroupIcon, color: 'from-blue-500 to-cyan-500' },
    { id: 'igcse', label: 'IGCSE', icon: AcademicCapIcon, color: 'from-green-500 to-emerald-500' },
    { id: 'academic-calendar', label: 'Academic Calendar', icon: CalendarDaysIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'event-calendar', label: 'Event Calendar', icon: SparklesIcon, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="relative mb-12">
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Link
              key={tab.id}
              to={`/curriculum/${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative group px-6 py-4 rounded-xl font-semibold transition-all duration-300
                flex items-center space-x-3 min-w-[200px] justify-center
                ${
                  isActive
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                    : 'bg-white/20 text-gray-700 hover:bg-white/30 hover:scale-105'
                }
                hover:shadow-xl transform hover:-translate-y-1
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
              <span>{tab.label}</span>
              {isActive && (
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl blur-sm animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// Enhanced Foundation Stage Component
const FoundationStage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX * 0.01, y: e.clientY * 0.01 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: UserGroupIcon,
      title: 'Early Years Development',
      description: 'Nurturing young minds through play-based learning and social interaction.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpenIcon,
      title: 'Literacy Foundation',
      description: 'Building strong reading and writing skills through phonics and storytelling.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: LightBulbIcon,
      title: 'Creative Expression',
      description: 'Encouraging creativity through art, music, and imaginative play.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'World Awareness',
      description: 'Introducing global perspectives and cultural understanding.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20 relative overflow-hidden">
      <FloatingParticles mousePosition={mousePosition} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 shadow-2xl animate-float">
            <UserGroupIcon className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Foundation Stage
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Building strong foundations for lifelong learning through engaging, play-based education
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`
                  group relative p-8 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30
                  shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2
                  animate-fadeInUp
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-2xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative">
                  <div className={`inline-block p-3 bg-gradient-to-r ${feature.color} rounded-xl mb-4 shadow-lg group-hover:animate-bounce`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 blur-2xl opacity-60 animate-pulse" />
            <Link 
              to="/admissions" 
              className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
            >
              <span>Enroll in Foundation Stage</span>
              <RocketLaunchIcon className="h-6 w-6 group-hover:animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced IGCSE Component
const IGCSE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSubject, setActiveSubject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX * 0.01, y: e.clientY * 0.01 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const subjects = [
    {
      name: 'Mathematics',
      icon: '📊',
      description: 'Advanced mathematical concepts and problem-solving skills',
      color: 'from-blue-500 to-indigo-500',
      features: ['Algebra & Geometry', 'Statistics & Probability', 'Calculus Foundations']
    },
    {
      name: 'Sciences',
      icon: '🔬',
      description: 'Physics, Chemistry, and Biology with practical applications',
      color: 'from-green-500 to-emerald-500',
      features: ['Laboratory Experiments', 'Scientific Method', 'Real-world Applications']
    },
    {
      name: 'Languages',
      icon: '🌍',
      description: 'English and additional languages for global communication',
      color: 'from-purple-500 to-pink-500',
      features: ['Literature Analysis', 'Creative Writing', 'Global Perspectives']
    },
    {
      name: 'Humanities',
      icon: '🏛️',
      description: 'History, Geography, and Social Studies',
      color: 'from-orange-500 to-red-500',
      features: ['Critical Thinking', 'Research Skills', 'Cultural Understanding']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-emerald-900/20 relative overflow-hidden">
      <FloatingParticles mousePosition={mousePosition} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6 shadow-2xl animate-float">
            <AcademicCapIcon className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            IGCSE Programme
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cambridge International General Certificate of Secondary Education - Preparing students for global success
          </p>
        </div>

        {/* Interactive Subject Showcase */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {subjects.map((subject, index) => (
              <button
                key={index}
                onClick={() => setActiveSubject(index)}
                className={`
                  px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2
                  ${
                    activeSubject === index
                      ? `bg-gradient-to-r ${subject.color} text-white shadow-lg scale-105`
                      : 'bg-white/20 text-gray-700 hover:bg-white/30 hover:scale-105'
                  }
                  hover:shadow-xl transform hover:-translate-y-1
                `}
              >
                <span className="text-2xl">{subject.icon}</span>
                <span>{subject.name}</span>
              </button>
            ))}
          </div>

          {/* Active Subject Details */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl p-8 animate-fadeIn">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-bounce">{subjects[activeSubject].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                {subjects[activeSubject].name}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {subjects[activeSubject].description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subjects[activeSubject].features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/30 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className={`inline-block p-3 bg-gradient-to-r ${subjects[activeSubject].color} rounded-full mb-4`}>
                    <StarIcon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{feature}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 blur-2xl opacity-60 animate-pulse" />
            <Link 
              to="/admissions" 
              className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
            >
              <span>Apply for IGCSE</span>
              <RocketLaunchIcon className="h-6 w-6 group-hover:animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Academic Calendar Component
const AcademicCalendar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX * 0.01, y: e.clientY * 0.01 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const terms = [
    {
      name: 'First Term',
      period: 'September - December',
      color: 'from-purple-500 to-pink-500',
      events: [
        { date: 'Sept 1', event: 'Term Begins', type: 'start' },
        { date: 'Oct 15', event: 'Mid-term Break', type: 'break' },
        { date: 'Nov 20', event: 'Parent-Teacher Conference', type: 'meeting' },
        { date: 'Dec 15', event: 'Term Ends', type: 'end' }
      ]
    },
    {
      name: 'Second Term',
      period: 'January - April',
      color: 'from-blue-500 to-cyan-500',
      events: [
        { date: 'Jan 8', event: 'Term Begins', type: 'start' },
        { date: 'Feb 14', event: 'Science Fair', type: 'event' },
        { date: 'Mar 15', event: 'Sports Day', type: 'event' },
        { date: 'Apr 12', event: 'Term Ends', type: 'end' }
      ]
    },
    {
      name: 'Third Term',
      period: 'May - July',
      color: 'from-green-500 to-emerald-500',
      events: [
        { date: 'May 1', event: 'Term Begins', type: 'start' },
        { date: 'Jun 10', event: 'IGCSE Exams', type: 'exam' },
        { date: 'Jul 5', event: 'Graduation Ceremony', type: 'ceremony' },
        { date: 'Jul 20', event: 'Summer Break Begins', type: 'end' }
      ]
    }
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case 'start': return '🚀';
      case 'end': return '🏁';
      case 'break': return '🌴';
      case 'meeting': return '👥';
      case 'event': return '🎉';
      case 'exam': return '📝';
      case 'ceremony': return '🎓';
      default: return '📅';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      <FloatingParticles mousePosition={mousePosition} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl animate-float">
            <CalendarDaysIcon className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
            Academic Calendar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about important academic dates, events, and milestones throughout the school year
          </p>
        </div>

        {/* Term Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {terms.map((term, index) => (
            <button
              key={index}
              onClick={() => setSelectedTerm(index)}
              className={`
                px-8 py-4 rounded-xl font-semibold transition-all duration-300
                ${
                  selectedTerm === index
                    ? `bg-gradient-to-r ${term.color} text-white shadow-lg scale-105`
                    : 'bg-white/20 text-gray-700 hover:bg-white/30 hover:scale-105'
                }
                hover:shadow-xl transform hover:-translate-y-1
              `}
            >
              <div className="text-lg font-bold">{term.name}</div>
              <div className="text-sm opacity-90">{term.period}</div>
            </button>
          ))}
        </div>

        {/* Selected Term Details */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl p-8 animate-fadeIn">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
              {terms[selectedTerm].name}
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {terms[selectedTerm].period}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {terms[selectedTerm].events.map((event, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {getEventIcon(event.type)}
                </div>
                <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {event.date}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {event.event}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 blur-2xl opacity-60 animate-pulse" />
            <Link 
              to="/contact" 
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
            >
              <span>Download Full Calendar</span>
              <ChevronRightIcon className="h-6 w-6 group-hover:animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Event Calendar Component
const EventCalendar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX * 0.01, y: e.clientY * 0.01 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const events = [
    { date: 'Jan 15', title: 'Science Exhibition', category: 'academic', icon: '🔬', color: 'from-blue-500 to-cyan-500' },
    { date: 'Feb 10', title: 'Sports Day', category: 'sports', icon: '🏆', color: 'from-green-500 to-emerald-500' },
    { date: 'Mar 5', title: 'Cultural Festival', category: 'cultural', icon: '🎭', color: 'from-purple-500 to-pink-500' },
    { date: 'Apr 20', title: 'Parent-Teacher Meeting', category: 'meeting', icon: '👥', color: 'from-orange-500 to-red-500' },
    { date: 'May 12', title: 'Art Competition', category: 'cultural', icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { date: 'Jun 8', title: 'Mathematics Olympiad', category: 'academic', icon: '📊', color: 'from-blue-500 to-cyan-500' },
    { date: 'Jul 3', title: 'Summer Camp', category: 'sports', icon: '🏕️', color: 'from-green-500 to-emerald-500' },
    { date: 'Aug 18', title: 'Debate Competition', category: 'academic', icon: '🎤', color: 'from-blue-500 to-cyan-500' }
  ];

  const categories = [
    { id: 'all', label: 'All Events', icon: SparklesIcon },
    { id: 'academic', label: 'Academic', icon: BookOpenIcon },
    { id: 'sports', label: 'Sports', icon: TrophyIcon },
    { id: 'cultural', label: 'Cultural', icon: StarIcon },
    { id: 'meeting', label: 'Meetings', icon: UserGroupIcon }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-red-900/20 relative overflow-hidden">
      <FloatingParticles mousePosition={mousePosition} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-2xl animate-float">
            <SparklesIcon className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Event Calendar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover exciting upcoming events, competitions, and activities throughout the academic year
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2
                  ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                      : 'bg-white/20 text-gray-700 hover:bg-white/30 hover:scale-105'
                  }
                  hover:shadow-xl transform hover:-translate-y-1
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className={`
                group relative p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30
                shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2
                animate-fadeInUp
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${event.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              <div className="relative text-center">
                <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                  {event.icon}
                </div>
                <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {event.date}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {event.title}
                </h3>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${event.color} text-white text-sm rounded-full capitalize`}>
                  {event.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 blur-2xl opacity-60 animate-pulse" />
            <Link 
              to="/contact" 
              className="relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
            >
              <span>Subscribe to Updates</span>
              <ChevronRightIcon className="h-6 w-6 group-hover:animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CurriculumPage = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="foundation-stage" replace />} />
      <Route path="foundation-stage" element={<FoundationStage />} />
      <Route path="igcse" element={<IGCSE />} />
      <Route path="academic-calendar" element={<AcademicCalendar />} />
      <Route path="event-calendar" element={<EventCalendar />} />
    </Routes>
  );
};

export default CurriculumPage; 