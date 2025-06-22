import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import DarkModeToggle from './components/layout/DarkModeToggle';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisionMissionPage from './pages/VisionMissionPage';
import PrincipalMessagePage from './pages/PrincipalMessagePage';
import ChairmanMessagePage from './pages/ChairmanMessagePage';
import AdmissionsPage from './pages/AdmissionsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import CompetitionsPage from './pages/activities/CompetitionsPage';
import TripsPage from './pages/activities/TripsPage';
import SportsPage from './pages/activities/SportsPage';
import ArticlesPage from './pages/activities/ArticlesPage';
import NewslettersPage from './pages/activities/NewslettersPage';
import AdmissionPolicyPage from './pages/admissions/AdmissionPolicyPage';
import AdmissionFormPage from './pages/admissions/AdmissionFormPage';
import FeeStructurePage from './pages/admissions/FeeStructurePage';
import SchoolUniformPage from './pages/admissions/SchoolUniformPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import SchoolStaffPage from './pages/SchoolStaffPage';
import CodeOfConductPage from './pages/CodeOfConductPage';
import CurriculumPage from './pages/curriculum/CurriculumPage';
import IGCSEPage from './pages/curriculum/IGCSEPage';
import FoundationStage from './pages/curriculum/FoundationStage';
import AcademicCalendarPage from './pages/curriculum/AcademicCalendarPage';
import EventCalendarPage from './pages/curriculum/EventCalendarPage';
import TeachingJobsPage from './pages/careers/TeachingJobsPage';
import NonTeachingJobsPage from './pages/careers/NonTeachingJobsPage';
import AdminJobsPage from './pages/careers/AdminJobsPage';

// Ensure Vite resolves these paths correctly
import.meta.glob('./pages/**/*.{js,jsx,ts,tsx}');
import.meta.glob('./components/**/*.{js,jsx,ts,tsx}');
import.meta.glob('./assets/**/*.{jpg,png,svg,gif}');

// Root Layout Component
function RootLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference or system preference
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedDarkMode === 'true' || (savedDarkMode === null && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <div 
      className={`
        min-h-screen 
        bg-white 
        dark:bg-gray-900 
        text-gray-900 
        dark:text-gray-100 
        transition-colors 
        duration-300
      `}
    >
      <Navbar>
        <Navigation />
      </Navbar>

      <main className="min-h-[calc(100vh-200px)] pt-16">
        <Outlet />
      </main>

      <Footer />
      
      <DarkModeToggle 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
    </div>
  );
}

// Router Configuration
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "about/vision-mission", element: <VisionMissionPage /> },
        { path: "about/principal-message", element: <PrincipalMessagePage /> },
        { path: "about/chairman-message", element: <ChairmanMessagePage /> },
        { 
          path: "admissions", 
          children: [
            { index: true, element: <AdmissionsPage /> },
            { path: "policy", element: <AdmissionPolicyPage /> },
            { path: "form", element: <AdmissionFormPage /> },
            { path: "fees", element: <FeeStructurePage /> },
            { path: "uniform", element: <SchoolUniformPage /> }
          ]
        },
        { 
          path: "activities", 
          children: [
            { index: true, element: <NewslettersPage /> },
            { path: "newsletters", element: <NewslettersPage /> },
            { path: "competitions", element: <CompetitionsPage /> },
            { path: "trips", element: <TripsPage /> },
            { path: "sports", element: <SportsPage /> },
            { path: "articles", element: <ArticlesPage /> },
          ]
        },
        { path: "gallery", element: <GalleryPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "about/school-staff", element: <SchoolStaffPage /> },
        { path: "about/code-of-conduct", element: <CodeOfConductPage /> },
        { 
          path: "curriculum", 
          element: <CurriculumPage />,
          children: [
            { index: true, element: <div className="p-8"><h2 className="text-2xl font-bold mb-4">Select a Curriculum Section</h2></div> },
            { path: "foundation", element: <FoundationStage /> },
            { path: "igcse", element: <IGCSEPage /> },
            { path: "academic-calendar", element: <AcademicCalendarPage /> },
            { path: "event-calendar", element: <EventCalendarPage /> }
          ]
        },
        // Career Pages
        { path: "careers/teaching", element: <TeachingJobsPage /> },
        { path: "careers/non-teaching", element: <NonTeachingJobsPage /> },
        { path: "careers/administration", element: <AdminJobsPage /> }
      ]
    }
  ], {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  });

  return <RouterProvider router={router} />;
}

export default App;
