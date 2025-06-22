import React from 'react';
import { ShoppingBagIcon, UserGroupIcon, DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const SchoolUniformPage = () => {
  const uniformData = [
    {
      id: 1,
      size: 'Small size',
      classGroup: 'Foundation classes',
      details: '1 shirt, 1 trouser/1 skirt, 1 pair of socks',
      price: '18,000',
    },
    {
      id: 2,
      size: 'Medium size',
      classGroup: 'Primary classes',
      details: '1 shirt, 1 trouser/1 skirt, 1 pair of socks',
      price: '22,000',
    },
    {
      id: 3,
      size: 'Large size',
      classGroup: 'Secondary classes',
      details: '1 shirt, 1 trouser/1 skirt, 1 pair of socks',
      price: '26,000',
    },
    {
      id: 4,
      size: 'Jersey (Small)',
      classGroup: 'All classes',
      details: '1 no',
      price: '8,000',
    },
    {
      id: 5,
      size: 'Jersey (Medium)',
      classGroup: 'All classes',
      details: '1 no',
      price: '10,000',
    },
    {
      id: 6,
      size: 'Jersey (Large)',
      classGroup: 'All classes',
      details: '1 no',
      price: '12,000',
    },
    {
      id: 7,
      size: 'Leggings',
      classGroup: 'Black color',
      details: '1 no',
      price: '6,000',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-8 sm:p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">School Uniform</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600">
            Academic Year 2024/25
          </p>
        </div>

        <div className="mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Our school uniform features a distinctive combination of Sky Blue and Navy Blue, 
                  complemented by a deep blue jersey and black shoes. For sports, students wear all-white attire.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S.no
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Uniform Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class Group
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price (MWK)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {uniformData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.classGroup}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {item.details}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
            <div className="flex">
              <div className="flex-shrink-0">
                <DocumentTextIcon className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <span className="font-medium">Note:</span> The school shall not be responsible for the quality & price of the uniform. 
                  Parents should check with the supplier before purchasing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShoppingBagIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Uniform Inquiries</p>
                  <p className="text-sm text-gray-500">Mr. Edward Moffat</p>
                  <p className="text-sm text-gray-500">Bursar's Office</p>
                  <p className="text-sm text-gray-500">+265 994437230</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <DocumentTextIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Additional Notes</p>
                  <p className="text-sm text-gray-500">Please ensure all uniform items are clearly labeled with your child's name.</p>
                  <p className="text-sm text-gray-500">Replacement items can be purchased throughout the school year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolUniformPage;
