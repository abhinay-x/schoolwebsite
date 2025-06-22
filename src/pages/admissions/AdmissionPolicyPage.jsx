import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, DocumentTextIcon, UserGroupIcon, CalendarIcon, CurrencyDollarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const AdmissionPolicyPage = () => {
  const policies = [
    {
      id: 1,
      icon: <DocumentTextIcon className="h-6 w-6 text-yellow-500" />,
      title: 'Application Process',
      description: 'Children will be permitted to attend the school only after the completion of the formalities.'
    },
    {
      id: 2,
      icon: <DocumentTextIcon className="h-6 w-6 text-yellow-500" />,
      title: 'Required Documents',
      description: 'Application for admission should be made on the prescribed application form accompanied by relevant certificates and photo of the child.'
    },
    {
      id: 3,
      icon: <CalendarIcon className="h-6 w-6 text-yellow-500" />,
      title: 'Date of Birth',
      description: 'Parents/Guardians shall make sure of the date of birth of their children/wards, before they are registered in the school register. The date of birth once entered cannot be altered.'
    },
    {
      id: 4,
      icon: <CurrencyDollarIcon className="h-6 w-6 text-yellow-500" />,
      title: 'Admission Fees',
      description: 'Admission fees must be paid at the time of admission.'
    },
    {
      id: 5,
      icon: <AcademicCapIcon className="h-6 w-6 text-yellow-500" />,
      title: 'Previous School Records',
      description: 'Progress Report and Certificate of good conduct shall be produced by the Candidate at the time of admission issued by the previous school.'
    },
    {
      id: 6,
      icon: <DocumentTextIcon className="h-6 w-6 text-yellow-500" />,
      title: 'Transfer Certificate',
      description: 'Application for Transfer Certificate should be submitted well in advance and they will be issued only when all the dues fees have been cleared and school accounts have been duly settled.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Admission <span className="text-yellow-500">Policy</span>
          </h1>
          <h2 className="text-2xl font-semibold text-red-600 mb-2">ADMISSION OF PUPILS</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy) => (
            <div 
              key={policy.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-100 rounded-full mr-4">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{policy.title}</h3>
                </div>
                <p className="text-gray-600">{policy.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Information</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Age Requirements</h4>
                <p className="text-gray-600">Please ensure your child meets the minimum age requirement for the desired grade level.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Documentation</h4>
                <p className="text-gray-600">All required documents must be submitted at the time of application.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Admission Test</h4>
                <p className="text-gray-600">Some grade levels may require an admission test or assessment.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 mb-4">For more information about our admission process, please contact our admissions office.</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionPolicyPage;
