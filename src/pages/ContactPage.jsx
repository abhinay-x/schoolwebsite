import React, { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  PaperAirplaneIcon 
} from '@heroicons/react/24/solid';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      error: null
    });

    try {
      // Simulated form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        error: null
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left Column: Contact Info & Map */}
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-school-primary">
              Contact ZPPSS
            </h1>
            <p className="text-gray-600 mb-6">
              We're here to assist you. Reach out to us anytime.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 flex-grow">
            <div className="flex items-center space-x-4">
              <MapPinIcon className="h-8 w-8 text-school-secondary" />
              <div>
                <h3 className="font-semibold">Postal Address</h3>
                <p className="text-gray-600">
                  P.O. Box 240, Namiwawa Road<br />
                  Zomba, Malawi, Africa
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-8 w-8 text-school-secondary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+265 996639468</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-8 w-8 text-school-secondary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">zppss1978@gmail.com</p>
                <p className="text-sm text-gray-500">E-mail us your Query</p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0329290816685!2d35.31485971493266!3d-15.386235889306011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d904bc5d6753b7%3A0x27d84548c0d28032!2sZomba%20Private%20Primary%20and%20Secondary%20School!5e1!3m2!1sen!2sin!4v1659518345471!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col">
          <div className="bg-white dark:bg-school-dark-primary shadow-xl rounded-xl p-8 flex-grow">
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="fullName" 
                    className="block mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="
                      w-full px-4 py-3 
                      border border-gray-300 dark:border-gray-600 
                      rounded-lg 
                      focus:outline-none 
                      focus:ring-2 focus:ring-school-secondary
                      bg-gray-50 dark:bg-school-dark-secondary
                      text-gray-800 dark:text-white
                    "
                    placeholder="Enter your full name"
                    required 
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      w-full px-4 py-3 
                      border border-gray-300 dark:border-gray-600 
                      rounded-lg 
                      focus:outline-none 
                      focus:ring-2 focus:ring-school-secondary
                      bg-gray-50 dark:bg-school-dark-secondary
                      text-gray-800 dark:text-white
                    "
                    placeholder="Enter your email"
                    required 
                  />
                </div>
              </div>
              <div>
                <label 
                  htmlFor="subject" 
                  className="block mb-2 text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 
                    border border-gray-300 dark:border-gray-600 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 focus:ring-school-secondary
                    bg-gray-50 dark:bg-school-dark-secondary
                    text-gray-800 dark:text-white
                  "
                  placeholder="Enter subject of your message"
                  required 
                />
              </div>
              <div className="flex-grow">
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-gray-700 dark:text-gray-300"
                >
                  Type your message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 
                    border border-gray-300 dark:border-gray-600 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 focus:ring-school-secondary
                    bg-gray-50 dark:bg-school-dark-secondary
                    text-gray-800 dark:text-white
                    h-full min-h-[150px]
                  "
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              {/* Form Status & Submit Button */}
              <div className="mt-4">
                {formStatus.error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    {formStatus.error}
                  </div>
                )}

                {formStatus.isSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    Your message has been sent successfully!
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus.isSubmitting}
                  className="
                    w-full flex items-center justify-center 
                    bg-school-secondary text-white 
                    py-3 rounded-lg 
                    hover:bg-opacity-90 
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {formStatus.isSubmitting ? (
                    <svg 
                      className="animate-spin h-5 w-5 mr-3" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      ></circle>
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 