import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';

// Newspaper articles data
const newspaperArticles = [
  {
    id: 1,
    title: 'Newspaper 5',
    date: 'July 2021',
    image: '/src/assets/Images/newspaper/np5.jpg',
    alt: 'Newspaper Article July 2021'
  },
  {
    id: 2,
    title: 'Newspaper 4',
    date: 'July 2021',
    image: '/src/assets/Images/newspaper/np4.jpg',
    alt: 'Newspaper Article July 2021'
  },
  {
    id: 3,
    title: 'Newspaper 3',
    date: 'August 2022',
    image: '/src/assets/Images/newspaper/np3.jpg',
    alt: 'Newspaper Article August 2022'
  },
  {
    id: 4,
    title: 'Newspaper 2',
    date: 'July 2022',
    image: '/src/assets/Images/newspaper/np2.jpg',
    alt: 'Newspaper Article July 2022'
  },
  {
    id: 5,
    title: 'Newspaper 1',
    date: 'July 2021',
    image: '/src/assets/Images/newspaper/np1.jpg',
    alt: 'Newspaper Article July 2021'
  }
];

const ArticlesPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Newspaper <span className="text-yellow-500">Articles</span>
          </h1>
          <h4 className="text-red-500 text-xl mb-8">
            The School features in Nation & Daily Times newspapers
          </h4>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Article Viewer */}
          <div className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">
                {newspaperArticles[activeIndex].title}
              </h3>
              <p className="text-gray-500 mb-4">{newspaperArticles[activeIndex].date}</p>
              
              <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={newspaperArticles[activeIndex].image}
                  alt={newspaperArticles[activeIndex].alt}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNhYWEiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={16}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="articles-thumbs"
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                }
              }}
            >
              {newspaperArticles.map((article, index) => (
                <SwiperSlide 
                  key={article.id} 
                  className={`cursor-pointer transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-[3/4] bg-gray-100 relative">
                      <img
                        src={article.image}
                        alt={article.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNhYWEiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-semibold text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                          View
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-gray-800 truncate">{article.title}</h4>
                      <p className="text-sm text-gray-500">{article.date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">In the News</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our school has been featured in various national newspapers, highlighting our achievements,
            events, and contributions to education. These articles showcase our commitment to excellence
            and the impact we're making in our community.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">Nation Newspaper</h4>
              <p className="text-gray-700 text-sm">Featured in the education and community sections</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-2">Daily Times</h4>
              <p className="text-gray-700 text-sm">Highlighting our academic and extracurricular achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
