import React, { useState } from 'react';

// Import background images as gallery images
import bg1 from '../assets/Images/bg1.jpg';
import bg2 from '../assets/Images/bg2.jpg';
import bg3 from '../assets/Images/bg3.jpg';
import bg4 from '../assets/Images/bg4.jpg';

const galleryImages = [
  { 
    src: bg1, 
    alt: 'School Campus View 1', 
    category: 'Campus' 
  },
  { 
    src: bg2, 
    alt: 'School Campus View 2', 
    category: 'Campus' 
  },
  { 
    src: bg3, 
    alt: 'School Event', 
    category: 'Events' 
  },
  { 
    src: bg4, 
    alt: 'School Activity', 
    category: 'Activities' 
  }
];

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-school-primary">School Gallery</h1>
      <p className="text-gray-600 mb-6">
        Explore our school's memorable moments, campus views, and exciting activities.
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-4 py-2 rounded-full transition-all duration-300
              ${selectedCategory === category 
                ? 'bg-school-secondary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div 
            key={index} 
            className="
              aspect-square overflow-hidden rounded-lg 
              shadow-md cursor-pointer 
              transform transition-transform hover:scale-105
            "
            onClick={() => openImageModal(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="
            fixed inset-0 bg-black bg-opacity-80 
            z-50 flex items-center justify-center 
            p-4 cursor-pointer
          "
          onClick={closeImageModal}
        >
          <div className="max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-full object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage; 