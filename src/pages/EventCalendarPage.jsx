import React from 'react';

const EventCalendarPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-school-secondary dark:text-school-accent">
          Event <span className="text-school-primary">Calendar</span>
        </h1>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-red-600 mb-4">
            EVENT CALENDAR FOR THE FIRST TERM OF A/Year 2024/25
          </h3>
          <h4 className="text-lg font-medium text-fuchsia-600 mb-6">
            FIRST TERM (SEP-DEC 2024)
          </h4>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Event calendar image is currently unavailable.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Please contact the school administration for the most up-to-date event calendar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventCalendarPage; 