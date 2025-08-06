import React, { useState } from 'react';

// Generate gallery images from the gallery folders
const generateGalleryImages = () => {
  const images = [];
  
  // Graduation Ceremony 2024 - First 30 images
  for (let i = 1; i <= 30; i++) {
    images.push({
      src: `/src/assets/Images/gallery/graduation_ceremony_24/${i}.jpg`,
      alt: `Graduation Ceremony 2024 - Image ${i}`,
      category: 'Graduation Ceremony 2024'
    });
  }
  
  // Graduation Day - First 25 images
  for (let i = 1; i <= 25; i++) {
    images.push({
      src: `/src/assets/Images/gallery/graduation_day/${i}.jpg`,
      alt: `Graduation Day - Image ${i}`,
      category: 'Graduation Day'
    });
  }
  
  // Prize Giving - Check if folder exists and add images
  for (let i = 1; i <= 20; i++) {
    images.push({
      src: `/src/assets/Images/gallery/prize_giving/${i}.jpg`,
      alt: `Prize Giving Ceremony - Image ${i}`,
      category: 'Prize Giving'
    });
  }
  
  // Annual Sports - Check if folder exists and add images
  for (let i = 1; i <= 15; i++) {
    images.push({
      src: `/src/assets/Images/gallery/graduation_ceremony_annual_sports/${i}.jpg`,
      alt: `Annual Sports Event - Image ${i}`,
      category: 'Annual Sports'
    });
  }
  
  return images;
};

const galleryImages = generateGalleryImages();

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background elements for visual enhancement */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Page header with glassmorphism effect */}
        <div className="glassmorphism-card mb-12 text-center py-10 px-6 rounded-2xl border border-white/20 backdrop-blur-lg bg-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">School Gallery</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Explore our school's memorable moments, campus views, and exciting activities.
          </p>
        </div>

        {/* Category Filters with glassmorphism and enhanced styling */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105
                glassmorphism-card border border-white/20 backdrop-blur-lg shadow-lg
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-pink-500/30' 
                  : 'bg-white/10 text-white hover:bg-white/20'}
              `}
            >
              {category}
            </button>
          ))
        }
        </div>

        {/* Gallery Grid with enhanced glassmorphism cards and animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="
                aspect-square overflow-hidden rounded-2xl cursor-pointer
                glassmorphism-card border border-white/20 backdrop-blur-lg
                transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
                hover:shadow-purple-500/30 hover:border-white/40
                animate-fade-in-up
              "
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => openImageModal(image)}
            >
              <div className="relative w-full h-full group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium truncate">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal with enhanced styling */}
        {selectedImage && (
          <div 
            className="
              fixed inset-0 bg-black/90 backdrop-blur-lg
              z-50 flex items-center justify-center 
              p-4 cursor-pointer animate-fade-in
            "
            onClick={closeImageModal}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              <div className="glassmorphism-card border border-white/20 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-full object-contain max-h-[75vh]"
                />
                <div className="p-4 bg-black/30 backdrop-blur-sm">
                  <p className="text-white text-center">{selectedImage.alt}</p>
                </div>
              </div>
              <button 
                className="absolute top-4 right-4 text-white bg-black/30 backdrop-blur-lg rounded-full p-2 hover:bg-black/50 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  closeImageModal();
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .glassmorphism-card {
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;