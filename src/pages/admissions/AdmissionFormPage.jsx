import React, { useState, useEffect } from 'react';
import { DocumentTextIcon, ArrowDownTrayIcon, BuildingOffice2Icon, UserCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import applicationPdf from '../../assets/files/application.pdf';

const AdmissionFormPage = () => {
  const [pdfExists, setPdfExists] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set pdfExists to true if we can import the PDF
    setPdfExists(true);
    setIsLoading(false);
  }, []);

  const handleDownload = () => {
    window.open(applicationPdf, '_blank');
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-1 bg-yellow-400 w-20 mx-auto mb-8"></div>
              <div className="h-32 bg-gray-100 rounded-lg max-w-3xl mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-8 sm:p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admission Form</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <DocumentTextIcon className="h-5 w-5 text-yellow-500" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Please read the admission policy before filling out the application form.
                </p>
              </div>
            </div>
          </div>

          {pdfExists ? (
            <>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gray-50">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Download Application Form
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Get started with the admission process by downloading the application form
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                  <div className="rounded-md bg-blue-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <DocumentTextIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 flex-1 md:flex md:justify-between">
                        <p className="text-sm text-blue-700">
                          Download the admission application form in PDF format.
                        </p>
                        <p className="mt-3 text-sm md:mt-0 md:ml-6">
                          <button
                            onClick={handleDownload}
                            className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                          >
                            Download Form <span aria-hidden="true">&rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Submission Instructions</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Fill out all required fields in the application form</li>
                  <li>Attach all necessary documents (birth certificate, previous school records, etc.)</li>
                  <li>Submit the completed form to the school office along with the required fees</li>
                  <li>You will be contacted for further steps in the admission process</li>
                </ol>
              </div>
            </>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 bg-red-50">
                <h3 className="text-lg leading-6 font-medium text-red-800">
                  Application Form Not Available
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-red-700">
                  We apologize, but the online application form is currently unavailable.
                </p>
              </div>
              <div className="border-t border-red-200 px-4 py-5 sm:p-6">
                <div className="rounded-md bg-yellow-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">How to get the form</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>You can obtain the admission form through the following methods:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Visit the school office in person</li>
                          <li>Contact the admissions office via email at <a href="mailto:admissions@yourschool.com" className="text-blue-600 hover:underline">admissions@yourschool.com</a></li>
                          <li>Call the school office during working hours</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <BuildingOffice2Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">School Office</h5>
                  <p className="mt-1 text-sm text-gray-500">
                    Visit us during working hours to collect the form in person.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">Admissions Office</h5>
                  <p className="mt-1 text-sm text-gray-500">
                    Email: <a href="mailto:admissions@yourschool.com" className="text-blue-600 hover:underline">admissions@yourschool.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormPage;
