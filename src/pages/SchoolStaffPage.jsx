import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaUsers, FaGraduationCap, FaHeart, FaTrophy, FaChevronLeft, FaChevronRight, FaGem, FaAward } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

// Import staff images
import yaminiImage from '/images/staff/yamini.jpg';
import sellenjeImage from '/images/staff/sellenje.jpg';
import hellenImage from '/images/staff/hellen.jpg';
import shaggyImage from '/images/staff/shaggy.jpg';
import crispineImage from '/images/staff/crispine.jpg';
import graceImage from '/images/staff/grace.jpg';

const StaffMember = ({ image, name, role, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use actual image or fallback to mock image if not available
  const displayImage = image || `https://images.unsplash.com/photo-${1500000000000 + index}?w=300&h=400&fit=crop&crop=face`;
  
  return (
    <div 
      className="relative group h-full transform transition-all duration-700 hover:scale-105 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glowing border effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full flex flex-col backdrop-blur-sm border border-white/20 flex-grow">
        {/* Image container */}
        <div className="relative overflow-hidden">
          <div className="w-full h-80 relative">
            <img 
              src={displayImage}
              alt={name} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Floating badges */}
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full p-2 shadow-lg animate-pulse">
                <FaAward className="w-4 h-4" />
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <FaGem className="w-4 h-4 animate-pulse" />
                  <span className="text-sm font-medium">Expert Educator</span>
                </div>
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(star => (
                    <FaStar key={star} className="w-3 h-3 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {role}
            </p>
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
              <FaGraduationCap className="w-5 h-5 text-blue-500 group-hover:animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentReview = ({ image, name, review, rating, index }) => {
  // Mock image for demo
  const mockImage = `https://images.unsplash.com/photo-${1600000000000 + index}?w=100&h=100&fit=crop&crop=face`;
  
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <FaStar key={`star-${i}`} className="w-4 h-4 text-yellow-500 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
      );
    }
    if (rating % 1 !== 0) {
      stars.push(<FaStar key="half-star" className="w-4 h-4 text-yellow-500 opacity-50" />);
    }
    return stars;
  };

  return (
    <div className="h-full group" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative h-full">
        {/* Glowing border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
        
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 h-full flex flex-col backdrop-blur-sm border border-white/20 transform transition-all duration-500 hover:scale-105">
          {/* Quote icon */}
          <div className="absolute -top-3 -left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-3 shadow-lg">
            <FaQuoteLeft className="w-4 h-4" />
          </div>
          
          <div className="flex-grow mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed italic relative">
              "{review}"
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center space-x-4">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                  <img src={mockImage} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm md:text-base text-gray-800 dark:text-white truncate group-hover:text-blue-600 transition-colors duration-300">
                  {name}
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  {renderStars()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SchoolStaffPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStaffSlide, setCurrentStaffSlide] = useState(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Auto-slide for staff
    const staffInterval = setInterval(() => {
      setCurrentStaffSlide(prev => (prev + 1) % Math.ceil(staffMembers.length / 3));
    }, 5000);
    
    // Auto-slide for reviews
    const reviewInterval = setInterval(() => {
      setCurrentReviewSlide(prev => (prev + 1) % Math.ceil(studentReviews.length / 3));
    }, 6000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(staffInterval);
      clearInterval(reviewInterval);
    };
  }, []);

  const staffMembers = [
    { name: 'Mrs. R. Yamini', role: 'Head of Science - Secondary School', image: yaminiImage },
    { name: 'Mr. C.C Sellenje', role: 'Head of Languages - Secondary School', image: sellenjeImage },
    { name: 'Ms. Hellen', role: 'Foundation Class Teacher', image: hellenImage },
    { name: 'Mr. Shaggy', role: 'Primary ICT Teacher', image: shaggyImage },
    { name: 'Mr. Crispine', role: 'Sports Teacher', image: crispineImage },
    { name: 'Ms. Grace', role: 'Foundation Class Teacher', image: graceImage }
  ];

  const studentReviews = [
    {
      name: 'MUHAMMED SAEED - YR11',
      review: 'Learning at Zomba Private is a great feeling and experience, especially in the years of my High school. With expert teachers, learning is very interesting. Subjects like Robotics, Chemistry and Physics are important to the everyday world. Am very delighted about progress this school is making, in order to achieve excellence.',
      rating: 5
    },
    {
      name: 'AZRAA - YR07',
      review: 'This school has a great Curriculum and high teaching standards. The teachers are truly masters in teaching and making sure that students understand everything and get good grades, not only that, but they encourage students to participate in all the activities taking place.',
      rating: 4.5
    },
    {
      name: 'AMMARAH - YR08',
      review: 'I have attended this school for nearly 5 years now and I have only great things to say about my experience. The teachers are amazing and the curriculum is second to none. Each child is treated with care. I owe all my success to this great school.',
      rating: 5
    },
    {
      name: 'KARAMA CHIMTEDZA - YR06',
      review: 'I find Zomba Private school inspiring and a centre of not only academics but acceptable morality among students of different origins, colour or creed. The school is inclusive and does not leave any student out in academics and extracurricular activities.',
      rating: 4.5
    },
    {
      name: 'RAIHAN - YR09',
      review: 'Learning at Zomba Private Primary and secondary school is a great thing. This school has teachers which are experienced. The school has everything what a student needs to learn for example we have an ICT Lab and football pitch.',
      rating: 4.5
    },
    {
      name: 'SOPHIA MARTINEZ - YR10',
      review: 'The international curriculum and caring teachers have prepared me well for my future studies. The school environment encourages both academic excellence and personal growth.',
      rating: 5
    }
  ];

  const getVisibleItems = (items, currentSlide, itemsPerSlide = 3) => {
    const startIndex = currentSlide * itemsPerSlide;
    return items.slice(startIndex, startIndex + itemsPerSlide);
  };

  const nextStaffSlide = () => {
    setCurrentStaffSlide(prev => (prev + 1) % Math.ceil(staffMembers.length / 3));
  };

  const prevStaffSlide = () => {
    setCurrentStaffSlide(prev => prev === 0 ? Math.ceil(staffMembers.length / 3) - 1 : prev - 1);
  };

  const nextReviewSlide = () => {
    setCurrentReviewSlide(prev => (prev + 1) % Math.ceil(studentReviews.length / 3));
  };

  const prevReviewSlide = () => {
    setCurrentReviewSlide(prev => prev === 0 ? Math.ceil(studentReviews.length / 3) - 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      <Helmet>
        <title>School Staff - ZPPSS</title>
        <meta name="description" content="Meet our dedicated team of professional educators and staff members who are committed to providing excellence in education at Zomba Primary School." />
      </Helmet>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"
          style={{
            top: `${100 + scrollY * 0.1}px`,
            right: `${-150 + scrollY * 0.05}px`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-300 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float animation-delay-2000"
          style={{
            bottom: `${100 - scrollY * 0.08}px`,
            left: `${-100 + scrollY * 0.03}px`
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-green-300 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-4000"
          style={{
            top: `${300 + scrollY * 0.06}px`,
            left: `${200}px`
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Our Amazing Team
              </h1>
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl animate-pulse"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated educators and inspiring students who make ZPPSS a world-class institution
            </p>
          </div>

          {/* Expert Tutors Section */}
          <section className="mb-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <FaGraduationCap className="w-8 h-8 text-blue-600 animate-bounce" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Expert Tutors
                  </h2>
                  <FaUsers className="w-8 h-8 text-purple-600 animate-bounce animation-delay-500" />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Our world-class faculty brings years of experience and passion to every classroom
                </p>
              </div>

              {/* Custom Carousel */}
              <div className="relative">
                {/* Navigation Buttons */}
                <button
                  onClick={prevStaffSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-3 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextStaffSlide}  
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>

                {/* Staff Cards */}
                <div className="mx-12 overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentStaffSlide * 100}%)` }}
                  >
                    {Array.from({ length: Math.ceil(staffMembers.length / 3) }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                          {getVisibleItems(staffMembers, slideIndex, 3).map((member, index) => (
                            <StaffMember
                              key={`${slideIndex}-${index}`}
                              name={member.name}
                              role={member.role}
                              image={member.image}
                              index={slideIndex * 3 + index}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-3 mt-8">
                  {Array.from({ length: Math.ceil(staffMembers.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStaffSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentStaffSlide 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Student Reviews Section */}
          <section>
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <FaHeart className="w-8 h-8 text-pink-600 animate-pulse" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Student Reviews
                  </h2>
                  <FaTrophy className="w-8 h-8 text-yellow-600 animate-bounce animation-delay-500" />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Hear what our students have to say about their transformative journey at ZPPSS
                </p>
              </div>

              {/* Reviews Carousel */}
              <div className="relative">
                {/* Navigation Buttons */}
                <button
                  onClick={prevReviewSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full p-3 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextReviewSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full p-3 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>

                {/* Review Cards */}
                <div className="mx-12 overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentReviewSlide * 100}%)` }}
                  >
                    {Array.from({ length: Math.ceil(studentReviews.length / 3) }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                          {getVisibleItems(studentReviews, slideIndex, 3).map((review, index) => (
                            <StudentReview
                              key={`${slideIndex}-${index}`}
                              name={review.name}
                              review={review.review}
                              rating={review.rating}
                              index={slideIndex * 3 + index}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-3 mt-8">
                  {Array.from({ length: Math.ceil(studentReviews.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReviewSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentReviewSlide 
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125 shadow-lg' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full px-12 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <FaGem className="w-8 h-8 animate-bounce" />
                  <span className="text-xl md:text-2xl font-bold">Join Our Learning Family</span>
                  <FaHeart className="w-8 h-8 animate-pulse" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience world-class education with passionate teachers who care about your success
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @media (max-width: 768px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
}