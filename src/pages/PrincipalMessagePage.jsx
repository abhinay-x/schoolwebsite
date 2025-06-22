import React from 'react';
import principalImage from '../assets/Images/principal.jpg'; // You'll need to add this image

const PrincipalMessagePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-start mb-8">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <img 
                src={principalImage} 
                alt="Mr. Rachakonda Balaraju (Mr. Raj)" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-2 text-school-secondary dark:text-school-accent">
                Mr. Rachakonda Balaraju (Mr. Raj)
              </h2>
              <h3 className="text-xl mb-4 text-purple-600 dark:text-purple-400">
                Principal
              </h3>
            </div>
          </div>

          <div className="prose dark:prose-invert text-justify">
            <p className="mb-4">
              I am happy to announce that ZPPS School is an accredited Cambridge International Centre. 
              We completely follow the Cambridge Curriculum from Foundation to IGCSE classes. 
              We believe that education should be about developing a real thirst for learning.
            </p>

            <p className="mb-4">
              ZPPSS has a long-standing reputation for doing its very best for each individual student, 
              by underpinning an exciting and ambitious academic program and a wide range of 
              extra-curricular activities. Words, pictures, and the school ecosystem speak volumes 
              about the learning air that flows in ZPPS School.
            </p>

            <p className="mb-4">
              Our school offers outstanding academic, sporting, and extracurricular opportunities. 
              Come and see the learners at work and play, really enjoying their time. Speak to them 
              of their success and failures and the lessons these have taught them. Hear about the 
              way children are cared for and nurtured. This is the essence of Zomba Private Primary 
              and Secondary School and it sets us apart from other schools.
            </p>

            <p className="mb-4">
              This is a place where children learn how to treat others the way they themselves would 
              like to be treated, where they learn to give their best in spite of the difficulties 
              they may encounter, where they learn to grow into well-mannered and balanced young men 
              and women, where they learn to both work and play with a smile on their face.
            </p>

            <p className="mb-4">
              Zomba Private Primary and Secondary is inclusive in the way that we cater for and 
              accommodate children with diverse interests, abilities, and talents, while being 
              exclusive in our provision for those who really want to excel either academically, 
              on the sports pitches, drama, art, computing, or wherever their strengths may lie.
            </p>

            <p className="mb-4">
              Above all, we strive for every one of our learners to be happy. Happy children, 
              who want to come to school, will eventually find something to latch on to and throw 
              their energies into. Happy children will always thrive and succeed at ZPPS School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessagePage; 