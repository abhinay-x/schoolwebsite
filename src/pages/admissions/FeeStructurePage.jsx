import React from 'react';
import { BanknotesIcon, BookOpenIcon, DocumentCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const FeeStructurePage = () => {
  const feeData = [
    {
      level: 'Reception Classes',
      description: '(Foundation Stage 2 & Foundation Stage 1)',
      items: [
        { name: 'Term Fees', amount: '340,000', isAnnual: false },
        { name: 'Books Fees', amount: '100,000', isAnnual: true },
      ],
      total: '440,000',
      subsequentTerms: '340,000',
    },
    {
      level: 'Primary Classes',
      description: '(Year 1 up to Year 6)',
      items: [
        { name: 'Term Fees', amount: '525,000', isAnnual: false },
        { name: 'Books Fees', amount: '200,000', isAnnual: true },
        { name: 'Examination Fees', amount: '50,000', isAnnual: true },
      ],
      total: '775,000',
      subsequentTerms: '525,000',
    },
    {
      level: 'Secondary Classes',
      description: '(Year 7, 8 & 9)',
      items: [
        { name: 'Term Fees', amount: '700,000', isAnnual: false },
        { name: 'Books Fees', amount: '250,000', isAnnual: true },
        { name: 'Examination Fees', amount: '75,000', isAnnual: true },
      ],
      total: '1,025,000',
      subsequentTerms: '700,000',
    },
    {
      level: 'IGCSE',
      description: '(Year 10 & 11)',
      items: [
        { name: 'Term Fees', amount: '800,000', isAnnual: false },
        { name: 'Books Fees', amount: '450,000', isAnnual: true },
        { name: 'Examination Fees', amount: '100,000', isAnnual: true },
      ],
      total: '1,350,000',
      subsequentTerms: '800,000',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-8 sm:p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">School Fee Structure</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600">
            Academic Year 2024/25
          </p>
        </div>

        <div className="space-y-8">
          {feeData.map((level, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">{level.level}</h3>
                <p className="text-sm text-gray-500">{level.description}</p>
              </div>
              <div className="px-6 py-4">
                <div className="space-y-4">
                  {level.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between">
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-700">
                          {item.name}
                          {item.isAnnual && <span className="text-xs text-gray-500 ml-2">(Annual)</span>}
                        </span>
                      </div>
                      <span className="font-medium">MK {item.amount}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between font-medium">
                      <span>Total First Term</span>
                      <span>MK {level.total}</span>
                    </div>
                    <div className="flex justify-between text-sm text-fuchsia-600 mt-1">
                      <span>Second & Third Term Fee:</span>
                      <span>MK {level.subsequentTerms}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <DocumentCheckIcon className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <span className="font-medium">Application and New Admission Fee:</span> MK 25,000 (one-time, non-refundable)
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <BanknotesIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-blue-800">Bank Details</h4>
                  <div className="mt-2 grid grid-cols-1 gap-1 text-sm">
                    <p><span className="font-medium">Account Name:</span> ZOMBA PRIVATE PRIMARY SCHOOL</p>
                    <p><span className="font-medium">Account Number:</span> 1093487</p>
                    <p><span className="font-medium">Bank:</span> National Bank</p>
                    <p><span className="font-medium">Branch:</span> ZOMBA</p>
                  </div>
                  <p className="mt-2 text-sm text-blue-700">
                    <span className="font-medium">Note:</span> Please bring the deposit slip to the school accounts office for entry and verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Important Notes:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Fees are subject to annual review</li>
              <li>Payment plans available upon request</li>
              <li>Discounts available for siblings (10% for second child, 15% for third child)</li>
              <li>All fees must be paid by the first week of each term</li>
              <li>Late payment may incur additional charges</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructurePage;
