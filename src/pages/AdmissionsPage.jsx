import React from 'react';
import { Routes, Route, Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  ClipboardDocumentListIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  CalendarIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

// Import page components
import AdmissionPolicyPage from './admissions/AdmissionPolicyPage';

const admissionSections = [
  {
    id: 1,
    title: 'Admission Policy',
    description: 'Learn about our admission criteria and process',
    path: 'policy',
    icon: <DocumentTextIcon className="w-8 h-8 mb-4 text-blue-600" />,
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-800/50',
    component: <AdmissionPolicyPage />
  },
  {
    id: 2,
    title: 'Admission Form',
    description: 'Download and submit the admission application',
    path: 'form',
    icon: <ClipboardDocumentListIcon className="w-8 h-8 mb-4 text-green-600" />,
    bgColor: 'bg-green-50 dark:bg-green-900/30',
    hoverColor: 'hover:bg-green-100 dark:hover:bg-green-800/50',
    content: (
      <div className="space-y-4">
        <p className="text-justify leading-relaxed">
          Download our admission form to begin the application process for your child.
          Please complete all required fields and submit the form along with the necessary documents.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
          Download Application Form
        </button>
      </div>
    )
  },
  {
    id: 3,
    title: 'Fee Structure',
    description: 'View our tuition and fee information',
    path: 'fees',
    icon: <CurrencyDollarIcon className="w-8 h-8 mb-4 text-yellow-600" />,
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/30',
    hoverColor: 'hover:bg-yellow-100 dark:hover:bg-yellow-800/50',
    content: (
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">Annual Tuition Fees</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Pre-School</span>
              <span className="font-medium">MWK 250,000</span>
            </li>
            <li className="flex justify-between">
              <span>Primary School</span>
              <span className="font-medium">MWK 300,000</span>
            </li>
            <li className="flex justify-between">
              <span>Secondary School</span>
              <span className="font-medium">MWK 350,000</span>
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          * Additional fees for uniforms, books, and activities may apply.
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: 'School Uniform',
    description: 'View our uniform requirements',
    path: 'uniform',
    icon: <UserGroupIcon className="w-8 h-8 mb-4 text-purple-600" />,
    bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-800/50',
    content: (
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Uniform Requirements</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Boys</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>White short-sleeve shirt with school logo</li>
              <li>Navy blue shorts/trousers</li>
              <li>Navy blue sweater with school crest</li>
              <li>Black leather shoes</li>
              <li>Navy blue socks with white stripes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Girls</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>White blouse with school logo</li>
              <li>Navy blue pinafore/skirt</li>
              <li>Navy blue cardigan with school crest</li>
              <li>Black leather shoes</li>
              <li>White socks with navy blue stripes</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'Academic Calendar',
    description: 'Important dates and deadlines',
    path: 'calendar',
    icon: <CalendarIcon className="w-8 h-8 mb-4 text-red-600" />,
    bgColor: 'bg-red-50 dark:bg-red-900/30',
    hoverColor: 'hover:bg-red-100 dark:hover:bg-red-800/50',
    content: (
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Key Dates for 2024-2025</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-red-100 dark:bg-red-900/50 rounded-lg p-2 mr-3">
              <CalendarIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="font-medium">Term 1 Begins</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">September 2, 2024</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-red-100 dark:bg-red-900/50 rounded-lg p-2 mr-3">
              <CalendarIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="font-medium">Mid-Term Break</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">October 14-18, 2024</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-red-100 dark:bg-red-900/50 rounded-lg p-2 mr-3">
              <CalendarIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="font-medium">End of Term 1</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">December 13, 2024</p>
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 6,
    title: 'FAQ',
    description: 'Frequently asked questions',
    path: 'faq',
    icon: <QuestionMarkCircleIcon className="w-8 h-8 mb-4 text-indigo-600" />,
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/30',
    hoverColor: 'hover:bg-indigo-100 dark:hover:bg-indigo-800/50',
    content: (
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">What are the school hours?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              School runs from 7:30 AM to 2:00 PM, Monday through Friday. Extra-curricular activities take place after regular school hours.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Is transportation provided?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Yes, we offer school bus services to various locations. Please contact our administration for routes and fees.
            </p>
          </div>
          <div>
            <h4 className="font-medium">What is the student-teacher ratio?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We maintain a low student-teacher ratio of 20:1 to ensure personalized attention for each student.
            </p>
          </div>
        </div>
      </div>
    )
  }
];

const AdmissionsPage = () => {
  const location = useLocation();
  const isBasePath = location.pathname === '/admissions';
  const selectedSection = admissionSections.find(section => 
    location.pathname.endsWith(section.path)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Admissions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Begin your child's educational journey with us. Explore our admission process, requirements, and important dates.
          </p>
        </div>

        {isBasePath ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSections.map((section) => (
              <Link
                key={section.id}
                to={`/admissions/${section.path}`}
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
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Link 
                to="/admissions" 
                className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Admissions
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
          <Navigate to="/admissions" replace />
        )}
      </div>
      
      <Outlet />
    </div>
  );
};

// Wrap the component with Routes for nested routing
const AdmissionsPageWithRouter = () => {
  return (
    <Routes>
      <Route index element={<AdmissionsPage />} />
      {admissionSections.map((section) => (
        <Route 
          key={section.path} 
          path={section.path} 
          element={<AdmissionsPage />} 
        />
      ))}
    </Routes>
  );
};

export default AdmissionsPageWithRouter;