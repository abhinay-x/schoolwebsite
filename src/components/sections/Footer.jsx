import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Zomba Private School</h4>
            <p className="text-gray-300">
              Providing world-class education with a focus on holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-school-secondary">Home</Link></li>
              <li><Link to="/about" className="hover:text-school-secondary">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-school-secondary">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-school-secondary">Admissions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>📍 School Address</li>
              <li>📞 +1 (123) 456-7890</li>
              <li>✉️ info@zombaprivateschool.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-school-secondary">🔗</a>
              <a href="#" className="text-2xl hover:text-school-secondary">📸</a>
              <a href="#" className="text-2xl hover:text-school-secondary">🐦</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} Zomba Private School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 