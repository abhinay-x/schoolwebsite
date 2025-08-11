import React, { useState, useEffect, useRef } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ClockIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe, FaUsers, FaStar, FaHeart, FaRocket, FaCheckCircle, FaInfoCircle, FaPaperPlane } from 'react-icons/fa';
import { HiSparkles, HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

// Enhanced contact items with glassmorphism properties
const contactItems = [
  {
    icon: MapPinIcon,
    title: 'Postal Address',
    content: 'P.O. Box 240, Namiwawa Road\nZomba, Malawi, Africa',
    subtext: 'Visit us in person',
    link: 'https://www.google.com/maps/search/?api=1&query=P.O.%20Box%20240%2C%20Namiwawa%20Road%20Zomba%20Malawi%20Africa',
    delay: 0.2,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20',
    glowColor: 'shadow-blue-500/25',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: '+265 996639468',
    subtext: 'Available 24/7',
    link: 'tel:+265996639468',
    delay: 0.4,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
    glowColor: 'shadow-emerald-500/25',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'zppss1978@gmail.com',
    subtext: 'E-mail us your Query',
    link: 'mailto:zppss1978@gmail.com',
    delay: 0.6,
    gradient: 'from-orange-500/20 via-red-500/10 to-pink-500/20',
    glowColor: 'shadow-orange-500/25',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  },
];

// Stats and features data
const stats = [
  { icon: <FaUsers className="w-6 h-6" />, label: 'Happy Students', value: '500+', color: 'text-blue-500' },
  { icon: <FaGlobe className="w-6 h-6" />, label: 'Years of Excellence', value: '45+', color: 'text-emerald-500' },
  { icon: <FaStar className="w-6 h-6" />, label: 'Success Rate', value: '98%', color: 'text-orange-500' },
  { icon: <FaHeart className="w-6 h-6" />, label: 'Community Impact', value: '100%', color: 'text-purple-500' }
];

const features = [
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: 'Quick Response',
    description: 'We respond to all inquiries within 24 hours during business days',
    color: 'text-blue-500'
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: 'Personal Attention',
    description: 'Each inquiry receives personalized attention from our dedicated staff',
    color: 'text-emerald-500'
  },
  {
    icon: <FaCheckCircle className="w-6 h-6" />,
    title: 'Professional Service',
    description: 'Professional and friendly service for all your educational needs',
    color: 'text-orange-500'
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contactItemRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return; // Enforce 500-character limit
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMouseMove = (e, itemId) => {
    if (contactItemRefs.current[itemId]) {
      const rect = contactItemRefs.current[itemId].getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSuccess: false, error: null });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Please enter a valid email address'
      });
      return;
    }

    if (formData.message.length < 10) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Message should be at least 10 characters long'
      });
      return;
    }

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject || 'Contact Form Submission',
          message: formData.message,
          to_name: 'School Administration',
          reply_to: formData.email
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        error: null
      });

      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSuccess: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to send. Sorry for the inconvenience caused. Please try with Direct Mail or Contact ID. Thank you 😊!'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <Helmet>
        <title>Contact Us - Zomba Primary School</title>
        <meta name="description" content="Get in touch with Zomba Primary School. Find our address, phone number, and email or send us a message directly through our contact form." />
      </Helmet>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 dark:bg-indigo-900/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-float">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to us through any of these channels or send us a message directly.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`flex justify-center mb-3 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-400">We're here to help and answer any questions you might have</p>
            </div>

            {/* 2x2 Grid Layout: Map (top span 2 cols), Phone & Email (bottom row) */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
              {/* Map Section - Spans 2 columns */}
              <div className="col-span-1 md:col-span-2">
                <div className="relative bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-blue-500/25 border border-white/30 dark:border-gray-700/50 transform transition-all duration-300 hover:scale-105 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 mb-4">
                      <MapPinIcon className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-500 mb-2">Our Location</h3>
                    <p className="text-gray-800 dark:text-gray-200 mb-3">P.O. Box 240, Namiwawa Road<br />Zomba, Malawi, Africa</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Visit us in person</p>
                    
                    {/* Embedded Google Map */}
                    <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8234567890123!2d35.3188!3d-15.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIzJzE1LjAiUyAzNcKwMTknMDcuNyJF!5e0!3m2!1sen!2smw!4v1234567890123!5m2!1sen!2smw"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                        title="Zomba Primary School Location"
                      ></iframe>
                    </div>
                    
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=P.O.%20Box%20240%2C%20Namiwawa%20Road%20Zomba%20Malawi%20Africa"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-500 hover:underline mt-3"
                    >
                      <HiLocationMarker className="mr-1" /> View on Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Section */}
              <div className="col-span-1">
                <div
                  ref={(el) => (contactItemRefs.current[1] = el)}
                  className="relative bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-green-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-emerald-500/25 border border-white/30 dark:border-gray-700/50 transform transition-all duration-300 hover:scale-105 overflow-hidden group"
                  onMouseMove={(e) => handleMouseMove(e, 1)}
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 70%)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 mb-4">
                      <PhoneIcon className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-500 mb-2">Phone</h3>
                    <p className="text-gray-800 dark:text-gray-200 mb-3">+265 996639468</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Available 24/7</p>
                    <a 
                      href="tel:+265996639468"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-emerald-500 hover:underline"
                    >
                      <HiPhone className="mr-1" /> Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="col-span-1">
                <div
                  ref={(el) => (contactItemRefs.current[2] = el)}
                  className="relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-orange-500/25 border border-white/30 dark:border-gray-700/50 transform transition-all duration-300 hover:scale-105 overflow-hidden group"
                  onMouseMove={(e) => handleMouseMove(e, 2)}
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 70%)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 mb-4">
                      <EnvelopeIcon className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-500 mb-2">Email</h3>
                    <p className="text-gray-800 dark:text-gray-200 mb-3">zppss1978@gmail.com</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">E-mail us your Query</p>
                    <a 
                      href="mailto:zppss1978@gmail.com"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-orange-500 hover:underline"
                    >
                      <HiMail className="mr-1" /> Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`flex justify-center mb-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      focusedField === 'fullName' 
                        ? 'transform scale-105 shadow-lg' 
                        : 'shadow-md'
                    }`}
                    placeholder="Enter your full name"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaUsers className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      focusedField === 'email' 
                        ? 'transform scale-105 shadow-lg' 
                        : 'shadow-md'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      focusedField === 'subject' 
                        ? 'transform scale-105 shadow-lg' 
                        : 'shadow-md'
                    }`}
                    placeholder="What is this regarding?"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaInfoCircle className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none ${
                      focusedField === 'message' 
                        ? 'transform scale-105 shadow-lg' 
                        : 'shadow-md'
                    }`}
                    placeholder="Your message here..."
                  />
                  <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>

              {/* Form Status Messages */}
              {formStatus.error && (
                <div className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg animate-shake">
                  <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                  {formStatus.error}
                </div>
              )}

              {formStatus.isSuccess && (
                <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className="w-full flex justify-center items-center py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {formStatus.isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-6 w-6 mr-3"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
                    Sending Message...
                  </>
                ) : formStatus.isSuccess ? (
                  <>
                    <CheckCircleIcon className="h-6 w-6 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="h-6 w-6 mr-2 transform hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
              <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                Or contact us directly:
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:+265996639468"
                  className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200 transform hover:scale-105"
                  aria-label="Call us"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Call
                </a>
                <a
                  href="mailto:zppss1978@gmail.com"
                  className="flex items-center px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors duration-200 transform hover:scale-105"
                  aria-label="Email us"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-4 right-4 space-y-2 z-50 md:bottom-8 md:right-8">
          <a
            href="tel:+265996639468"
            className="block w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Quick call"
          >
            <PhoneIcon className="h-6 w-6 group-hover:animate-bounce" />
          </a>
          <a
            href="mailto:zppss1978@gmail.com"
            className="block w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Quick email"
          >
            <EnvelopeIcon className="h-6 w-6 group-hover:animate-bounce" />
          </a>
        </div>

        {/* Custom CSS Animations */}
        <style jsx>{`
          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-5px);
            }
            75% {
              transform: translateX(5px);
            }
          }
          .animate-shake {
            animation: shake 0.5s ease-in-out;
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ContactPage;
