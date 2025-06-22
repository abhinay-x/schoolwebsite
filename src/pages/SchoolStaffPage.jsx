import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Staff images - using the same image for all staff members temporarily
import yaminiImage from '../assets/Images/staff/yamini.jpg';
import selenjeImage from '../assets/Images/staff/sellenje.jpg';
import hellenImage from '../assets/Images/staff/hellen.jpg';
import shaggyImage from '../assets/Images/staff/shaggy.jpg';
import crispineImage from '../assets/Images/staff/crispine.jpg';
import graceImage from '../assets/Images/staff/grace.jpg';

// Student review images
import saeedImage from '../assets/Images/principal.jpg';
import azraaImage from '../assets/Images/principal.jpg';
import ammarahImage from '../assets/Images/principal.jpg';
import karamaImage from '../assets/Images/principal.jpg';
import raihanImage from '../assets/Images/principal.jpg';

const StaffMember = ({ image, name, role }) => {
  console.log('Image path:', image);
  return (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full w-[50%] max-w-xs mx-auto">
    <div className="w-full pt-[150%] relative overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-3 text-center flex-1 flex flex-col">
      <h3 className="text-base font-semibold text-school-secondary dark:text-school-accent">{name}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{role}</p>
    </div>
  </div>
  );
}

const StudentReview = ({ image, name, review, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star text-yellow-500"></i>);
    }
    if (rating % 1 !== 0) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt text-yellow-500"></i>);
    }
    return stars;
  };

  return (
    <div className="h-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full flex flex-col">
        <div className="flex-grow">
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-5 text-sm md:text-base">"{review}"</p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 mr-3 rounded-full overflow-hidden border-2 border-school-secondary">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm md:text-base text-school-secondary dark:text-school-accent truncate">{name}</h3>
              <div className="flex mt-1">{renderStars()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SchoolStaffPage() {
  const staffMembers = [
    { image: yaminiImage, name: 'Mrs. R. Yamini', role: 'Head of Science - Secondary School' },
    { image: selenjeImage, name: 'Mr. C.C Sellenje', role: 'Head of Languages - Secondary School' },
    { image: hellenImage, name: 'Ms. Hellen', role: 'Foundation Class Teacher' },
    { image: shaggyImage, name: 'Mr. Shaggy', role: 'Primary ICT Teacher' },
    { image: crispineImage, name: 'Mr. Crispine', role: 'Sports Teacher' },
    { image: graceImage, name: 'Ms. Grace', role: 'Foundation Class Teacher' }
  ];

  const studentReviews = [
    {
      image: saeedImage,
      name: 'MUHAMMED SAEED - YR11',
      review: 'Learning at Zomba Private is a great feeling and experience, especially in the years of my High school. With expert teachers, learning is very interesting. Subjects like Robotics, Chemistry and Physics are important to the everyday world. Am very delighted about progress this school is making, in order to achieve excellence.',
      rating: 4.5
    },
    {
      image: azraaImage,
      name: 'AZRAA - YR07',
      review: 'This school has a great Curriculum and high teaching standards. The teachers are truly masters in teaching and making sure that students understand everything and get good grades, not only that, but they encourage students to participate in all the activities taking place.',
      rating: 4.5
    },
    {
      image: ammarahImage,
      name: 'AMMARAH - YR08',
      review: 'I have attended this school for nearly 5 years now and I have only great things to say about my experience. The teachers are amazing and the curriculum is second to none. Each child is treated with care. I owe all my success to this great school. I emerged as the Best Candidate of Checkpoint Year 6 in that Year and got recognition from the Cambridge Board. It\'s all about Z.P.P.S.S.',
      rating: 4.5
    },
    {
      image: karamaImage,
      name: 'KARAMA CHIMTEDZA - YR06',
      review: 'I find Zomba Private school inspiring and a centre of not only academics but acceptable morality among students of different origins, colour or creed. The school is inclusive and does not leave any student out in academics and extracurricular activities.',
      rating: 4.5
    },
    {
      image: raihanImage,
      name: 'RAIHAN - YR09',
      review: 'Learning at Zomba Private Primary and secondary school is a great thing. This school has teachers which are experienced. The school has everything what a student needs to learn for example we have an ICT Lab and football pitch. When free the coaches of the football team teach us how to play football, volleyball, tennis, hockey, netball, racing and many other games.',
      rating: 4.5
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-school-secondary dark:text-school-accent">
          Expert <span className="text-school-primary">Tutors</span>
        </h1>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            540: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="staff-swiper"
        >
          {staffMembers.map((member, index) => (
            <SwiperSlide key={`staff-${index}`}>
              <StaffMember 
                image={member.image}
                name={member.name}
                role={member.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section>
        <h1 className="text-4xl font-bold mb-8 text-center text-school-secondary dark:text-school-accent">
          Student's <span className="text-school-primary">Reviews</span>
        </h1>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            540: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="reviews-swiper"
        >
          {studentReviews.map((review, index) => (
            <SwiperSlide key={`review-${index}`}>
              <StudentReview 
                image={review.image}
                name={review.name}
                review={review.review}
                rating={review.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
} 