import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vision & Mission', path: '/about/vision-mission' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Activities', path: '/activities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const vacancyLinks = [
    { name: 'Teaching Jobs', path: '/careers/teaching' },
    { name: 'Non-Teaching Jobs', path: '/careers/non-teaching' },
    { name: 'Administration Jobs', path: '/careers/administration' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* School Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Zomba Private Primary & Secondary School</h3>
            <p className="text-sm mb-4">
              P.O. Box 240, Namiwawa Road, Zomba, Malawi, Africa
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-school-secondary">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-sm hover:text-school-secondary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Vacancy Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Vacancies</h4>
            <div className="grid grid-cols-2 gap-2">
              {vacancyLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-sm hover:text-school-secondary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-sm">
            &copy; {currentYear} Zomba Private Primary & Secondary School. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
