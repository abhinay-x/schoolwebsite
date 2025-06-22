import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
              <img 
                src="images/f1.jpg" 
                alt="School Campus" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-[#B8CD18]">
              Why Choose Us?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Zomba Private International School is the best modern school which has evolved with a realistic mission on education. 
              Choosing us aligns your child to live up to the lofty ideals and goals which we are set to achieve.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              At ZPPS, we do not stop with the amount of information that is imparted to each child but take it further to focus on:
            </p>
            <ul className="space-y-3 mb-8 pl-5">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Man-making
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Life-building
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Character formation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Appreciation of humanity
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-[#B8CD18] text-white font-bold py-3 px-8 rounded-full 
              hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 