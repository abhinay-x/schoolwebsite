import React from 'react';
import { Link } from 'react-router-dom';
import eventCalendarImage from '../../assets/Images/eventcalender/ft24.jpg';

export default function EventCalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 text-school-secondary dark:text-school-accent">
            School <span className="text-school-primary">Event Calendar</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stay updated with all the upcoming school events and activities for the academic year.
          </p>
        </div>

        <div className="flex justify-center px-8">
          <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img 
              src={eventCalendarImage} 
              alt="School Event Calendar 2024-2025" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            For any questions about the event calendar, please contact the school office.
          </p>
        </div>
      </div>
    </div>
  );
}
