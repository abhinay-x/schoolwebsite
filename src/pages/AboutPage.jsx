import { Link } from 'react-router-dom';
import bg1 from '../assets/Images/bg1.jpg';
import bg2 from '../assets/Images/bg2.jpg';

const VisionMission = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Vision & Mission</h1>
    <p>Details about school's vision and mission.</p>
  </div>
);

const ChairmanMessage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Chairman's Message</h1>
    <p>Message from the school chairman.</p>
  </div>
);

const PrincipalMessage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Principal's Message</h1>
    <p>Message from the school principal.</p>
  </div>
);

const SchoolStaff = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">School Staff</h1>
    <p>Information about school staff.</p>
  </div>
);

const CodeOfConduct = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Code of Conduct</h1>
    <p>School's code of conduct guidelines.</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-school-primary">About ZPPSS</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-school-secondary">
              Our School
            </h2>
            <p className="text-justify leading-relaxed">
              Zomba Private Primary and Secondary School (ZPPSS) is a leading educational 
              institution committed to providing high-quality, holistic education that 
              prepares students for global challenges.
            </p>
            <Link 
              to="/about/vision-mission" 
              className="inline-block bg-school-primary text-white px-4 py-2 rounded-md hover:bg-school-secondary transition-colors duration-300"
            >
              Our Vision & Mission
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src={bg1} 
              alt="School Campus" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative order-2 md:order-1">
            <img 
              src={bg2} 
              alt="Students Learning" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-school-secondary">
              Our Commitment
            </h2>
            <p className="text-justify leading-relaxed">
              We are dedicated to nurturing well-rounded individuals through 
              innovative teaching methods, comprehensive curriculum, and a 
              supportive learning environment that encourages critical thinking, 
              creativity, and personal growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 