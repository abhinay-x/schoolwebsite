import React, { useState, useEffect } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

const contactItems = [
  {
    icon: MapPinIcon,
    title: 'Postal Address',
    content: 'P.O. Box 240, Namiwawa Road\nZomba, Malawi, Africa',
    link: 'https://www.google.com/maps/search/?api=1&query=P.O.%20Box%20240%2C%20Namiwawa%20Road%20Zomba%20Malawi%20Africa',
    delay: 0.2,
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: '+265 996639468',
    subtext: 'Available 24/7',
    link: 'tel:+265996639468',
    delay: 0.4,
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'zppss1978@gmail.com',
    subtext: 'E-mail us your Query',
    link: 'mailto:zppss1978@gmail.com',
    delay: 0.6,
  },
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

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return; // Enforce 500-character limit
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSuccess: false, error: null });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Please enter a valid email address.',
      });
      return;
    }

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id',
        {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );
      setFormStatus({ isSubmitting: false, isSuccess: true, error: null });
      setTimeout(() => {
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setFormStatus({ isSubmitting: false, isSuccess: false, error: null });
      }, 1500);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to send message. Please try again or contact us directly.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-12 px-4 transition-colors duration-500">
      <Helmet>
        <title>Contact ZPPSS - Zomba Private Primary and Secondary School</title>
        <meta
          name="description"
          content="Get in touch with Zomba Private Primary and Secondary School. Call, email, or send us a message."
        />
      </Helmet>
      <div className="container mx-auto max-w-7xl">
        {/* Animated Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
            Contact ZPPSS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're here to assist you on your educational journey. Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info & Map */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transform transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${item.delay}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        target={item.title === 'Postal Address' ? '_blank' : undefined}
                        rel={item.title === 'Postal Address' ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 block whitespace-pre-line group-hover:underline"
                        aria-label={`Contact via ${item.title}`}
                      >
                        {item.content}
                      </a>
                      {item.subtext && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {item.subtext}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Map */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-shadow duration-500 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                  <MapPinIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
                  Find Us Here
                </h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                  <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0329290816685!2d35.31485971493266!3d-15.386235889306011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d904bc5d6753b7%3A0x27d84548c0d28032!2sZomba%20Private%20Primary%20and%20Secondary%20School!5e1!3m2!1sen!2sin!4v1659518345471!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="absolute top-0 left-0 hover:brightness-110 dark:hover:brightness-125 transition-all duration-300"
                    title="ZPPSS Location"
                    aria-label="Map showing the location of Zomba Private Primary and Secondary School"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enhanced Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-3xl dark:shadow-gray-900/50 transition-shadow duration-500">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Send us a Message</h2>
                <p className="text-gray-600 dark:text-gray-300">We'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="fullName" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                      Full Name *
                    </label>
                    <span id="fullName-help" className="sr-only">Enter your full name for us to address you properly.</span>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      className={`
                        w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300
                        bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 text-gray-800 dark:text-white
                        placeholder-gray-500 dark:placeholder-gray-400
                        ${
                          focusedField === 'fullName'
                            ? 'border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-200 dark:shadow-blue-500/25 bg-white dark:bg-gray-600 transform scale-105'
                            : formData.fullName
                            ? 'border-green-400 dark:border-green-500'
                            : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
                        }
                      `}
                      placeholder="Enter your full name"
                      required
                      aria-describedby="fullName-help"
                    />
                    {formData.fullName && (
                      <CheckCircleIcon className="absolute right-3 top-11 h-5 w-5 text-green-500 animate-pulse" />
                    )}
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                      Email Address *
                    </label>
                    <span id="email-help" className="sr-only">Enter a valid email address for us to contact you.</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`
                        w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300
                        bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 text-gray-800 dark:text-white
                        placeholder-gray-500 dark:placeholder-gray-400
                        ${
                          focusedField === 'email'
                            ? 'border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-200 dark:shadow-blue-500/25 bg-white dark:bg-gray-600 transform scale-105'
                            : formData.email && formData.email.includes('@')
                            ? 'border-green-400 dark:border-green-500'
                            : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
                        }
                      `}
                      placeholder="Enter your email"
                      required
                      aria-describedby="email-help"
                    />
                    {formData.email && formData.email.includes('@') && (
                      <CheckCircleIcon className="absolute right-3 top-11 h-5 w-5 text-green-500 animate-pulse" />
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                    Subject *
                  </label>
                  <span id="subject-help" className="sr-only">Enter the subject of your message.</span>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`
                      w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300
                      bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 text-gray-800 dark:text-white
                      placeholder-gray-500 dark:placeholder-gray-400
                      ${
                        focusedField === 'subject'
                          ? 'border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-200 dark:shadow-blue-500/25 bg-white dark:bg-gray-600 transform scale-105'
                          : formData.subject
                          ? 'border-green-400 dark:border-green-500'
                          : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
                      }
                    `}
                    placeholder="Enter subject of your message"
                    required
                    aria-describedby="subject-help"
                  />
                  {formData.subject && (
                    <CheckCircleIcon className="absolute right-3 top-11 h-5 w-5 text-green-500 animate-pulse" />
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                    Your Message *
                  </label>
                  <span id="message-help" className="sr-only">Type your message, up to 500 characters.</span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows="6"
                    maxLength="500"
                    className={`
                      w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300
                      bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 text-gray-800 dark:text-white
                      placeholder-gray-500 dark:placeholder-gray-400 resize-vertical
                      ${
                        focusedField === 'message'
                          ? 'border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-200 dark:shadow-blue-500/25 bg-white dark:bg-gray-600'
                          : formData.message
                          ? 'border-green-400 dark:border-green-500'
                          : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
                      }
                    `}
                    placeholder="Type your message here..."
                    required
                    aria-describedby="message-help"
                  ></textarea>
                  <div className="absolute bottom-3 right-3 text-sm text-gray-400 dark:text-gray-500">
                    {formData.message.length}/500
                  </div>
                </div>

                {formStatus.error && (
                  <div
                    className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center animate-shake"
                    role="alert"
                  >
                    <ExclamationCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    {formStatus.error}
                  </div>
                )}

                {formStatus.isSuccess && (
                  <div
                    className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center animate-bounce"
                    role="alert"
                  >
                    <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`
                    w-full flex items-center justify-center py-4 rounded-xl font-semibold text-lg
                    transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300
                    transform hover:scale-105 active:scale-95
                    ${
                      formStatus.isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : formStatus.isSuccess
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    }
                  `}
                  aria-label={formStatus.isSubmitting ? 'Sending message...' : 'Send message'}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <svg className="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
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
                <p className="text-center text-gray-600 dark:text-gray-300 mb-4">Or contact us directly:</p>
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
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-4 right-4 space-y-2 z-50 md:bottom-8 md:right-8">
          <a
            href="tel:+265996639468"
            className="block w-12 h-12 bg-blue-500 dark:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Quick call"
          >
            <PhoneIcon className="h-6 w-6 group-hover:animate-bounce" />
          </a>
          <a
            href="mailto:zppss1978@gmail.com"
            className="block w-12 h-12 bg-purple-500 dark:bg-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Quick email"
          >
            <EnvelopeIcon className="h-6 w-6 group-hover:animate-bounce" />
          </a>
        </div>

        {/* Background Decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-800/30 rounded-full opacity-20 dark:opacity-10 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-800/30 rounded-full opacity-20 dark:opacity-10 animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="fixed top-8 right-8 z-50 w-12 h-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700"
          aria-label="Toggle dark mode"
        >
          <svg className="w-6 h-6 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg className="w-6 h-6 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
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
          0%,
          100% {
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
  );
};

export default ContactPage;