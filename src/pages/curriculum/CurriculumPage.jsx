import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaSchool, FaGraduationCap, FaCalendarAlt, FaCalendarDay } from 'react-icons/fa';

const curriculumSections = [
  {
    id: 1,
    title: 'Foundation Stage',
    description: 'Early Years and Primary Education',
    path: 'foundation',
    icon: <FaSchool className="w-8 h-8 mb-4 text-indigo-600" />,
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/30',
    hoverColor: 'hover:bg-indigo-100 dark:hover:bg-indigo-800/50'
  },
  {
    id: 2,
    title: 'IGCSE',
    description: 'International General Certificate of Secondary Education',
    path: 'igcse',
    icon: <FaGraduationCap className="w-8 h-8 mb-4 text-blue-600" />,
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-800/50'
  },
  {
    id: 3,
    title: 'Academic Calendar',
    description: 'Important dates and events',
    path: 'academic-calendar',
    icon: <FaCalendarAlt className="w-8 h-8 mb-4 text-green-600" />,
    bgColor: 'bg-green-50 dark:bg-green-900/30',
    hoverColor: 'hover:bg-green-100 dark:hover:bg-green-800/50'
  },
  {
    id: 4,
    title: 'Event Calendar',
    description: 'Upcoming school events',
    path: 'event-calendar',
    icon: <FaCalendarDay className="w-8 h-8 mb-4 text-purple-600" />,
    bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-800/50'
  }
];

export default function CurriculumPage() {
  const location = useLocation();
  const isBasePath = location.pathname === '/curriculum';
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {isBasePath && (
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Curriculum
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive educational programs designed to nurture and challenge students at every level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumSections.map((section) => (
              <Link
                key={section.id}
                to={section.path}
                className={`${section.bgColor} ${section.hoverColor} rounded-xl p-6 shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center`}
              >
                {section.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <Outlet />
    </div>
  );
}
