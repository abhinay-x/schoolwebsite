import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaEye, FaBullseye, FaBalanceScale, FaSchool, FaUserGraduate, FaGlobe } from 'react-icons/fa';

const aboutSections = [
  {
    id: 1,
    title: 'Vision',
    description: 'Our guiding star for excellence in education',
    path: 'vision',
    icon: <FaEye className="w-8 h-8 mb-4 text-red-600" />,
    bgColor: 'bg-red-50 dark:bg-red-900/30',
    hoverColor: 'hover:bg-red-100 dark:hover:bg-red-800/50',
    content: (
      <div className="space-y-4">
        <p className="text-justify leading-relaxed">
          Our quest is multi-task and it takes fulfillment of different goals to:
        </p>
        <p className="font-bold text-lg text-red-600 text-center">
          "MAKE THE INSTITUTION A WORLD CLASS WITH WORLD CLASS PERFORMANCE"
        </p>
        <p className="text-justify leading-relaxed">
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
    path: 'mission',
    icon: <FaBullseye className="w-8 h-8 mb-4 text-blue-600" />,
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-800/50',
    content: (
      <div className="space-y-4">
        <p className="text-justify leading-relaxed">
          We, at Zomba Private Primary & Secondary International School aim to become a 
          Leading & Innovative School of Zomba, bridging the gap between school education, 
          higher education and the industry.
        </p>
        <p className="text-justify leading-relaxed">
          We are on a mission to be one of the most sought after schools in the country 
          by 2025 and emerge as a school of Research, Innovation, Knowledge and its 
          Application to the real needs of the Global World.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: 'Core Values',
    description: 'Principles that guide our institution',
    path: 'values',
    icon: <FaBalanceScale className="w-8 h-8 mb-4 text-green-600" />,
    bgColor: 'bg-green-50 dark:bg-green-900/30',
    hoverColor: 'hover:bg-green-100 dark:hover:bg-green-800/50',
    content: (
      <ul className="space-y-3 list-disc pl-5">
        <li>Excellence in all our endeavors</li>
        <li>Integrity and ethical conduct</li>
        <li>Respect for all individuals</li>
        <li>Commitment to community service</li>
        <li>Continuous improvement and innovation</li>
      </ul>
    )
  },
  {
    id: 4,
    title: 'Non-Discrimination Policy',
    description: 'Our commitment to equality',
    path: 'policy',
    icon: <FaGlobe className="w-8 h-8 mb-4 text-purple-600" />,
    bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-800/50',
    content: (
      <p className="text-justify leading-relaxed italic text-purple-600 dark:text-purple-300">
        ZPPSS does not discriminate in employment or the provision of educational 
        services on the basis of race, color, religion, age, gender, national origin, 
        disability, citizenship status, veteran status or any other characteristic 
        protected by federal, state or local law.
      </p>
    )
  }
];

const VisionMissionPage = () => {
  const location = useLocation();
  const isBasePath = location.pathname === '/about/vision-mission';
  const selectedSection = aboutSections.find(section => 
    location.pathname.endsWith(section.path)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Our School
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover what makes Zomba Private Primary & Secondary School special through our vision, mission, and values.
          </p>
        </div>

        {isBasePath ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutSections.map((section) => (
              <Link
                key={section.id}
                to={section.path}
                className={`${section.bgColor} ${section.hoverColor} rounded-xl p-6 shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center h-full`}
              >
                {section.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        ) : selectedSection ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Link 
                to="/about/vision-mission" 
                className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ← Back to About
              </Link>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {selectedSection.title}
              </h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              {selectedSection.content}
            </div>
          </div>
        ) : (
          <Navigate to="/about/vision-mission" replace />
        )}
      </div>
      
      <Outlet />
    </div>
  );
};

export default VisionMissionPage;