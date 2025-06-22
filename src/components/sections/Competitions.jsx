import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Placeholder image
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNhYWEiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';

const competitions = [
  {
    title: 'ESSAY WRITING',
    description: 'Our students are involved in essay writing to stimulate their creative skills and bring their imagination close to reality. They are exposed to writing all forms of essays enabling them to develop their minds to a greater writing scope. The best writers are awarded with deserving awards, to commend their ability and encourage others.',
    image: '/src/assets/Images/competitions/c1.jpeg'
  },
  {
    title: 'Quiz',
    description: 'While studying different subjects offered at the school, the ability to grasp, recall and explain contexts is tested through the Quiz Competitions which are held at the school. Students enjoy answering questions covering wide areas of study, not only in the school text books.',
    image: '/src/assets/Images/competitions/c2.jpeg'
  },
  {
    title: 'SPELL BEE',
    description: 'Our students achieve perfection in English and French Grammar by contesting in spelling competitions either at class or school level. Perfection in languages is achieved and this has made the school one of the best centres of language.',
    image: '/src/assets/Images/competitions/c3.jpeg'
  },
  {
    title: 'Debate',
    description: 'Debating opens up the critical faculty within the psychology of our students. Critical thinking, reasoning and clear analysis of issues is sharpened through debates. But this is not all, it empowers the skills of public thinking and speech.',
    image: '/src/assets/Images/competitions/c1.jpeg'
  },
  {
    title: 'STORY TELLING',
    description: 'Rooted within a diverse cultural set up, the school enrolls students of different cultural and social backgrounds. This blending makes our school a best Centre of interactive learning at which students learn from orals from different cultures. These orals bring different forms of knowledge which in turn shape up the real person needed by the society.',
    image: '/src/assets/Images/competitions/c2.jpeg'
  }
];

const Competitions = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen" id="competitions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">School <span className="text-yellow-500">Competitions</span></h1>
          <h3 className="text-red-500 text-xl mb-8">Academic Extra-curricular competitions</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '" style="width: 12px; height: 12px; margin: 0 6px; display: inline-block; border-radius: 50%; cursor: pointer; background: #e0e0e0; transition: all 0.3s ease;"></span>';
              }
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true
            }}
            speed={800}
            className="competitions-swiper"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
          >
            {competitions.map((comp, index) => (
              <SwiperSlide key={index}>
                <div className="competition-card bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                  <div className="p-6">
                    <h2 className="text-fuchsia-600 text-2xl font-semibold mb-4">{comp.title}</h2>
                    <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden bg-gray-100 relative group">
                      <img 
                        src={comp.image} 
                        alt={comp.title} 
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = placeholderImage;
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-semibold text-lg">{comp.title}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{comp.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
