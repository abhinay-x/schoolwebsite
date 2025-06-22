import React from 'react';
import { Routes, Route, Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import { 
  NewspaperIcon, 
  TrophyIcon, 
  MapIcon, 
  AcademicCapIcon,
  BookOpenIcon,
  CameraIcon,
  UsersIcon,
  MusicalNoteIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

// Import activity components
import CompetitionsPage from './activities/CompetitionsPage';
import TripsPage from './activities/TripsPage';
import SportsPage from './activities/SportsPage';
import ArticlesPage from './activities/ArticlesPage';
import NewslettersPage from './activities/NewslettersPage';

const activitySections = [
  {
    id: 1,
    title: 'Competitions',
    description: 'Academic and extracurricular competitions',
    path: 'competitions',
    icon: <TrophyIcon className="w-8 h-8 mb-4 text-yellow-600" />,
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/30',
    hoverColor: 'hover:bg-yellow-100 dark:hover:bg-yellow-800/50',
    component: <CompetitionsPage />
  },
  {
    id: 2,
    title: 'Educational Trips',
    description: 'Learning experiences beyond the classroom',
    path: 'trips',
    icon: <MapIcon className="w-8 h-8 mb-4 text-blue-600" />,
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-800/50',
    component: <TripsPage />
  },
  {
    id: 3,
    title: 'Sports & Games',
    description: 'Athletic activities and competitions',
    path: 'sports',
    icon: <AcademicCapIcon className="w-8 h-8 mb-4 text-green-600" />,
    bgColor: 'bg-green-50 dark:bg-green-900/30',
    hoverColor: 'hover:bg-green-100 dark:hover:bg-green-800/50',
    component: <SportsPage />
  },
  {
    id: 4,
    title: 'Newspaper Articles',
    description: 'Student journalism and school news',
    path: 'articles',
    icon: <NewspaperIcon className="w-8 h-8 mb-4 text-red-600" />,
    bgColor: 'bg-red-50 dark:bg-red-900/30',
    hoverColor: 'hover:bg-red-100 dark:hover:bg-red-800/50',
    component: <ArticlesPage />
  },
  {
    id: 5,
    title: 'School Newsletter',
    description: 'Monthly updates and announcements',
    path: 'newsletters',
    icon: <BookOpenIcon className="w-8 h-8 mb-4 text-purple-600" />,
    bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-800/50',
    component: <NewslettersPage />
  },
  {
    id: 6,
    title: 'Photo Gallery',
    description: 'Moments captured throughout the year',
    path: 'gallery',
    icon: <CameraIcon className="w-8 h-8 mb-4 text-pink-600" />,
    bgColor: 'bg-pink-50 dark:bg-pink-900/30',
    hoverColor: 'hover:bg-pink-100 dark:hover:bg-pink-800/50',
    content: (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-4">School Photo Gallery</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Browse through our collection of photos from various school events and activities.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }
];

const ActivitiesPage = () => {
  const location = useLocation();
  const isBasePath = location.pathname === '/activities';
  const selectedSection = activitySections.find(section => 
    location.pathname.endsWith(section.path)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            School Activities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the wide range of activities and programs that enrich our students' learning experience.
          </p>
        </div>

        {isBasePath ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activitySections.map((section) => (
              <Link
                key={section.id}
                to={`/activities/${section.path}`}
                className={`${section.bgColor} ${section.hoverColor} rounded-xl p-6 shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center h-full`}
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
        ) : selectedSection ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
              <Link 
                to="/activities" 
                className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Activities
              </Link>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {selectedSection.title}
              </h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              {selectedSection.content || selectedSection.component}
            </div>
          </div>
        ) : (
          <Navigate to="/activities" replace />
        )}
      </div>
      
      <Outlet />
    </div>
  );
};

// Wrap the component with Routes for nested routing
const ActivitiesPageWithRouter = () => {
  return (
    <Routes>
      <Route index element={<ActivitiesPage />} />
      {activitySections.map((section) => (
        <Route 
          key={section.path} 
          path={section.path} 
          element={<ActivitiesPage />} 
        />
      ))}
    </Routes>
  );
};

export default ActivitiesPageWithRouter;