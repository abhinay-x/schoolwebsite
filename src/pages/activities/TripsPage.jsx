import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

// Sample trip data - replace with your actual images
const tripImages = [
  { id: 1, src: '/src/assets/Images/trips/1.jpg', alt: 'Educational Trip 1' },
  { id: 2, src: '/src/assets/Images/trips/2.jpg', alt: 'Educational Trip 2' },
  { id: 3, src: '/src/assets/Images/trips/4.jpg', alt: 'Educational Trip 4' },
  { id: 4, src: '/src/assets/Images/trips/5.jpg', alt: 'Educational Trip 5' },
  { id: 5, src: '/src/assets/Images/trips/6.jpg', alt: 'Educational Trip 6' },
  { id: 6, src: '/src/assets/Images/trips/7.jpg', alt: 'Educational Trip 7' },
  { id: 7, src: '/src/assets/Images/trips/8.jpg', alt: 'Educational Trip 8' },
  { id: 8, src: '/src/assets/Images/trips/9.jpg', alt: 'Educational Trip 9' },
  { id: 9, src: '/src/assets/Images/trips/10.jpg', alt: 'Educational Trip 10' },
  { id: 10, src: '/src/assets/Images/trips/11.jpg', alt: 'Educational Trip 11' },
  { id: 11, src: '/src/assets/Images/trips/13.jpg', alt: 'Educational Trip 13' },
];

const TripsPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(tripImages[0]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Educational <span className="text-yellow-500">Trips</span>
          </h1>
          <h3 className="text-red-500 text-xl mb-8">School Educational Trips</h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-fuchsia-600 text-2xl font-semibold mb-4">
              FIRST EDUCATIONAL TRIP (2022)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 italic">
              Value to in-class learning is made real through our meaningful school trips to areas of educational value.
              Our students learn better with vivid experience from our school trips. Exposure to natural geography,
              the use of technology, areas of historical importance, industries and such other places, ushers a clear
              understanding of how the world has evolved to the present. It gives them a burning ambition on who to
              become in the future.
            </p>
          </div>

          {/* Main Image Slider */}
          <div className="mb-4">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              {tripImages.map((image) => (
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
              {tripImages.map((image) => (
                <SwiperSlide key={image.id} className="cursor-pointer">
                  <div className="aspect-w-16 aspect-h-9 border-2 border-transparent hover:border-fuchsia-500 rounded transition-all duration-200 overflow-hidden">
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
      </div>
    </section>
  );
};

export default TripsPage;
