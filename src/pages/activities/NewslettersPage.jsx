import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

// Import newsletter images
import nl1 from '../../assets/Images/newsletter/nl1.jpg';
import nl2 from '../../assets/Images/newsletter/nl2.jpg';
import nl3 from '../../assets/Images/newsletter/nl3.jpg';
import nl4 from '../../assets/Images/newsletter/nl4.jpg';

// Newsletter data
const newsletterData = [
  {
    id: 1,
    title: 'Newsletter 1',
    date: 'April 2021',
    type: 'image',
    image: nl1,
    description: '1st Term 2021 Newsletter'
  },
  {
    id: 2,
    title: 'Newsletter 2',
    date: 'July 2021',
    type: 'image',
    image: nl2,
    description: '2nd Term 2021 Newsletter'
  },
  {
    id: 3,
    title: 'Newsletter 3',
    date: 'December 2021',
    type: 'image',
    image: nl3,
    description: '3rd Term 2021 Newsletter'
  },
  {
    id: 4,
    title: 'Newsletter 4',
    date: 'July 2022',
    type: 'image',
    image: nl4,
    description: '2nd Term 2022 Newsletter'
  }
];

// Sort newsletters by date (newest first)
const newsletters = [...newsletterData].sort((a, b) => b.id - a.id);

const NewslettersPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleThumbClick = (index) => {
    setActiveIndex(index);
    setIsImageLoaded(false);
  };

  const currentNewsletter = newsletters[activeIndex];

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            School <span className="text-yellow-500">Newsletters</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest school news, events, and important announcements
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Newsletter Viewer */}
          <div className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-800">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {currentNewsletter.title}
                </h2>
                <p className="text-blue-100">{currentNewsletter.date} • {currentNewsletter.description}</p>
              </div>
            </div>
            
            <div className="p-2 bg-white">
              <div className="relative">
                {!isImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="animate-pulse flex flex-col items-center">
                      <DocumentTextIcon className="h-12 w-12 text-gray-300 mb-2" />
                      <p className="text-gray-400">Loading newsletter...</p>
                    </div>
                  </div>
                )}
                <img
                  src={currentNewsletter.image}
                  alt={`${currentNewsletter.title} - ${currentNewsletter.date}`}
                  className={`w-full h-auto rounded-lg shadow-md transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsImageLoaded(true)}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Browse Newsletters</h3>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={16}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="newsletters-thumbs"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                }
              }}
            >
              {newsletters.map((newsletter, index) => (
                <SwiperSlide 
                  key={newsletter.id}
                  className={`cursor-pointer transition-all duration-300 ${activeIndex === index ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-100'}`}
                  onClick={() => handleThumbClick(index)}
                >
                  <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 ${activeIndex === index ? 'border-yellow-400' : 'border-transparent hover:border-blue-200'}`}>
                    <div className="aspect-[3/4] bg-gray-50 relative">
                      <img
                        src={newsletter.image}
                        alt={`${newsletter.title} Thumbnail`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2 text-center bg-white">
                      <p className="text-xs font-medium text-gray-800 truncate">{newsletter.title}</p>
                      <p className="text-xs text-gray-500">{newsletter.date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Newsletter Information */}
          <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Stay Updated</h3>
            <p className="text-blue-700 mb-4">
              New newsletters are published at the end of each term. Check back regularly for updates!
            </p>
            <p className="text-sm text-blue-600">
              For any questions, please contact the school office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewslettersPage;
