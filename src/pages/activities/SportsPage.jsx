import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

// Sample sports images data - replace with your actual images
const sportsImages = [
  { id: 1, src: '/src/assets/Images/sports/1.jpg', alt: 'Sports Day 2021' },
  { id: 2, src: '/src/assets/Images/sports/2.jpg', alt: 'Sports Day 2021' },
  { id: 3, src: '/src/assets/Images/sports/3.jpg', alt: 'Sports Day 2021' },
  { id: 4, src: '/src/assets/Images/sports/4.jpg', alt: 'Sports Day 2021' },
  { id: 5, src: '/src/assets/Images/sports/5.jpg', alt: 'Sports Day 2021' },
  { id: 6, src: '/src/assets/Images/sports/6.jpg', alt: 'Sports Day 2021' },
  { id: 7, src: '/src/assets/Images/sports/7.jpg', alt: 'Sports Day 2021' },
  { id: 8, src: '/src/assets/Images/sports/8.jpg', alt: 'Sports Day 2021' },
  { id: 9, src: '/src/assets/Images/sports/9.jpg', alt: 'Sports Day 2021' },
  { id: 10, src: '/src/assets/Images/sports/10.jpg', alt: 'Sports Day 2021' },
  { id: 11, src: '/src/assets/Images/sports/11.jpg', alt: 'Sports Day 2021' },
  { id: 12, src: '/src/assets/Images/sports/12.jpg', alt: 'Sports Day 2021' },
  { id: 13, src: '/src/assets/Images/sports/13.jpg', alt: 'Sports Day 2021' },
  { id: 14, src: '/src/assets/Images/sports/14.jpg', alt: 'Sports Day 2021' },
  { id: 15, src: '/src/assets/Images/sports/15.jpg', alt: 'Sports Day 2021' },
];

const SportsPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sports <span className="text-yellow-500">& Games</span>
          </h1>
          <h3 className="text-red-500 text-xl mb-2">School Sports & Games Activities</h3>
          <h3 className="text-fuchsia-600 text-2xl font-semibold mb-6">Annual Sports Day (2021)</h3>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-yellow-600 mb-4 text-lg">
              We have emerged as victors in friendly and tournament sporting games played against other schools. 
              Our school has participated in the prestigious Presidential Cup and we celebrated victory.
            </p>
            <p className="text-fuchsia-600 italic text-lg">
              Sports Day at ZPPS School - Second Term 2021/22 Academic Year.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Image Slider */}
          <div className="mb-4">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              {sportsImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-96 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNhYWEiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnail Slider */}
          <div className="mt-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbs-swiper"
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {sportsImages.map((image) => (
                <SwiperSlide key={image.id} className="cursor-pointer">
                  <div className="aspect-w-16 aspect-h-9 border-2 border-transparent hover:border-yellow-500 rounded transition-all duration-200 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-20 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNhYWEiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Sports Achievements Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Sports Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-yellow-600 mb-3">Presidential Cup</h4>
              <p className="text-gray-700">
                Our school proudly participated in the prestigious Presidential Cup, showcasing exceptional talent and sportsmanship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-yellow-600 mb-3">Inter-School Tournaments</h4>
              <p className="text-gray-700">
                Consistent winners in various inter-school competitions, bringing home numerous trophies and medals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsPage;
