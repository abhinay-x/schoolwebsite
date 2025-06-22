import React from 'react';
import chairmanImage from '../assets/Images/chairman.jpg'; // You'll need to add this image

const ChairmanMessagePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-start mb-8">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <img 
                src={chairmanImage} 
                alt="Mr. Mohammed Zuber Motani" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-2 text-school-secondary dark:text-school-accent">
                Mr. Mohammed Zuber Motani
              </h2>
              <h3 className="text-xl mb-4 text-purple-600 dark:text-purple-400">
                Chairman
              </h3>
            </div>
          </div>

          <div className="prose dark:prose-invert text-justify">
            <p className="mb-4">
              Our aim is that our students achieve the highest academic standards. 
              But this is only one aspect of our school. We actively encourage 
              the process of joyful discovery that is central to meaningful and responsible learning.
            </p>

            <p className="mb-4">
              We have a team of dedicated teachers who are experts in their subjects 
              and they facilitate very high academic expectations of their learners 
              and care deeply about the well-being of each student.
            </p>

            <p className="mb-4">
              We pride ourselves on our happy and nurturing environment which 
              enables every student to achieve their best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessagePage; 