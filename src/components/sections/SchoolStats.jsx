import React from 'react';
import { 
  AcademicCapIcon,
  UserIcon,
  UserCircleIcon,
  FaceSmileIcon
} from '@heroicons/react/24/solid';

// eslint-disable-next-line no-unused-vars
const StatBox = ({ Icon, number, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all hover:scale-105">
    <div className="flex justify-center mb-4">
      <Icon className="h-12 w-12 text-school-secondary" />
    </div>
    <h3 className="text-3xl font-bold text-school-primary mb-2">{number}</h3>
    <p className="text-gray-600 uppercase tracking-wide">{label}</p>
  </div>
);

const SchoolStats = () => {
  const stats = [
    { 
      Icon: AcademicCapIcon, 
      number: '15+', 
      label: 'Subjects' 
    },
    { 
      Icon: UserIcon, 
      number: '200+', 
      label: 'Students' 
    },
    { 
      Icon: UserCircleIcon, 
      number: '20+', 
      label: 'Teachers' 
    },
    { 
      Icon: FaceSmileIcon, 
      number: '100%', 
      label: 'Satisfaction' 
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-school-primary mb-4">
            Our School at a Glance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the numbers that make our school exceptional
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolStats; 