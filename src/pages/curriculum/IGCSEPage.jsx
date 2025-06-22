import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import images
import ig1 from '../../assets/Images/igcse/ig1.jpg';
import ig2 from '../../assets/Images/igcse/ig2.jpg';
import ig3 from '../../assets/Images/igcse/ig3.jpeg';
import ig4 from '../../assets/Images/igcse/ig4.jpeg';
import ig8 from '../../assets/Images/igcse/ig8.jpg';

export default function IGCSEPage() {
  const courses = [
    {
      id: 1,
      image: ig1,
      title: 'Educational Trip - 2021/22',
      subtitle: 'THE RECORD BREAKING EDUCATION VISIT TO TEDZANI HYDRO ELECTRIC POWER STATION',
      description: 'The school decided to bring realistic learning by embarking on a 150 kilometer trip to Tedzani Hydro Electric Power Station in Mwanza District with students of the secondary section. They had a vivid experience on how the energy on the natural head of water along the Shire is converted to drive massive generators to produce highest voltage of electricity fed to the nation.'
    },
    {
      id: 2,
      image: ig2,
      title: 'The Robotic Workshop - 2022/23',
      description: 'We believe learning robotics will increase the students\' ability to be creative, innovative thinkers and become more productive members of the society. Students will learn to program the computerized robots by giving accurate and precise instructions while having fun in the process. By teaching our students robotics, we will open a whole new world to them and exciting opportunities that they wouldn\'t have access to otherwise.'
    },
    {
      id: 3,
      image: ig3,
      title: 'DEBATE AND QUIZ COMPETITION',
      description: 'The 2021/22 school session was packed with intra-school activities that saw students discussing several topics in writing and cross-cutting their knowledge through quizzes in different subjects. Being international, our institution embarks on producing best English debaters and we are banking hopes that these students ahead of their near and distant future will stand out in different professions occupying prominent positions and participating in building up our nation as many have previously done.'
    },
    {
      id: 4,
      image: ig4,
      title: 'ESSAY WRITING AND SPELL BEE',
      description: 'Our school is aware of the diversity of skills which nature has bestowed upon our students. We have not turned a blind eye to the skill of writing. The essay writing competition spiced with Spell Bee competition has proven a success in encouraging our students to excel in writing and spellings. We are hopeful that this foundation will end in authors, authoring literature and material contributing to preservation and spread of knowledge worldwide.'
    }
  ];

  const uniqueFeatures = [
    'Comprehensive reporting on individual achievement',
    'Educational field trips and school presentations',
    'Individual attention in a small-class setting',
    'Learning program with after-school care',
    'Opportunities to carry out scientific investigations',
    'Positive learning environment for your child'
  ];

  const subjects = [
    'English (as a Second Language)',
    'Mathematics',
    'ICT',
    'Physics',
    'Chemistry',
    'Biology',
    'History (Optional)',
    'Accounting (Optional)',
    'Geography (Optional)'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Courses Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-school-secondary dark:text-school-accent">
            Our Secondary <span className="text-school-primary">IGCSE Courses</span>
          </h1>
          
          <p className="text-xl text-center text-fuchsia-600 dark:text-fuchsia-400 mb-8 max-w-4xl mx-auto">
            Higher class learning prepares the student to face the open world in Science, Commerce and Professional careers. 
            Knowledge in ICT, Robotics, Languages and critical thinking is what senior students need to be equipped with as 
            they prepare for real life experiences.
          </p>

          <div className="mt-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-12 px-2"
            >
              {courses.map((course) => (
                <SwiperSlide key={course.id} className="pb-10">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col h-80">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
                        {course.title}
                      </h3>
                      {course.subtitle && (
                        <p className="text-fuchsia-600 dark:text-fuchsia-400 font-medium text-sm mb-3 line-clamp-2">
                          {course.subtitle}
                        </p>
                      )}
                      <p className="text-gray-600 dark:text-gray-300 flex-1 overflow-hidden line-clamp-5">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* IGCSE Program Details */}
      <section className="py-12 px-4 md:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:flex-1">
              <h2 className="text-2xl font-bold text-school-secondary dark:text-school-accent mb-4">
                FORM 04 & 05 / IGCSE
              </h2>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                Senior Secondary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The IGCSE provides a robust, vibrant and up to date school education that will engender excellence in every sphere of human endeavour.
                The IGCSE is committed to provide quality education to promote intellectual, social and cultural appreciation among its learners.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                It works towards evolving a learning process and environment, which empowers the students to become global leaders in the emerging knowledge society. 
                The Board advocates Continuous and Comprehensive Evaluation with an emphasis on holistic development of learners worldwide. The Board commits itself 
                to providing a stress-free and enjoyable learning environment that will develop competent, confident and enterprising citizens who will promote peace,
                global unity and upholding of human values.
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">What makes us unique:</h4>
                <ul className="space-y-2">
                  {uniqueFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-fuchsia-600 dark:text-fuchsia-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">A Range of our Subjects</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In years 10 and 11 you will also study a range of subjects. Some subjects are compulsory: 
                  Mathematics, English, & ICT but others are for a student/parent to decide.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {subjects.map((subject, index) => (
                    <div key={index} className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                      <span className="text-fuchsia-600 dark:text-fuchsia-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/curriculum/academic-calendar" 
                  className="inline-block bg-school-primary hover:bg-school-secondary text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  View Academic Calendar
                </Link>
              </div>
            </div>
            <div className="md:flex-1 mt-8 md:mt-0">
              <img 
                src={ig8} 
                alt="Senior Secondary Students" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
