import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import images
import fs1 from '../../assets/Images/curriculum/cr1.jpg';
import fs2 from '../../assets/Images/curriculum/cr2.jpeg';
import fs3 from '../../assets/Images/curriculum/cr3.jpeg';
import fs4 from '../../assets/Images/curriculum/cr4.jpeg';
import fs8 from '../../assets/Images/curriculum/cr8.jpeg';

export default function FoundationStage() {
  const courses = [
    {
      id: 1,
      image: fs1,
      title: 'The Graduation Celebration-2020/21',
      description: 'The first section of our school, the foundation of it all, the Foundation Stage Class 1 of 2020/21 has completed its academic year. It is amazing to observe how these young minds have grasped content and excelled in their tests ready to be ushered to the next class.'
    },
    {
      id: 2,
      image: fs2,
      title: 'The Career Day - 2021/22',
      description: 'We had the Red Colour Day during the first term, Face Painting during the second term and Career Day during the third term. It was a marvel to watch students clad in different regalia symbolizing their desired professions or trade in their expected future on the Career Day.'
    },
    {
      id: 3,
      image: fs3,
      title: 'The Green Day - 2021/22',
      description: 'We had green color day during the second term of 2021/22. Green, symbolising nature was celebrated by our infant students on the Green Colour Day. The event goes further to remind the students of the importance of preserving nature.'
    },
    {
      id: 4,
      image: fs4,
      title: 'Face painting - 2021/22',
      description: 'Our delivery of service towards our students is mingled with fun. The Face Painting Day was packed with fun as students transformed themselves with different styles depicting science, nature and real life.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Courses Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-school-secondary dark:text-school-accent">
            Our Foundation <span className="text-school-primary">Stage Courses</span>
          </h1>
          
          <p className="text-xl text-center text-fuchsia-600 dark:text-fuchsia-400 mb-8 max-w-4xl mx-auto">
            To evoke the interest of learning, our Foundation classes have been involved in 
            extra-curricular activities which made a lot of significance in their long journey of education.
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
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 flex-1">
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

      {/* Foundation Classes Section */}
      <section className="py-12 px-4 md:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:flex-1">
              <h2 className="text-2xl font-bold text-school-secondary dark:text-school-accent mb-4">
                Foundation Classes - 1 & 2
              </h2>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                Ms. Hellen & Ms. Grace
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The ending of this term marks the beginning of primary education to our nursery students who have learnt all the basics of
                learning in speech, writing, letters, basic numbers, knowing colours and importantly introducing themselves to any audience they are required to do so.
                These are but some basics which we have infused in the early learning of the foundation class. To evoke the interest of learning, our Foundation classes have been
                involved in extra-curricular activities which made a lot of significance in their long journey of education.
              </p>
              
              {/* Removed redundant IGCSE Program link - Navigation menu already provides access */}
            </div>
            <div className="md:flex-1 mt-8 md:mt-0">
              <img 
                src={fs8} 
                alt="Foundation Class Students" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
