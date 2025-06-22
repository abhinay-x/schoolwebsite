import React from 'react';
import { Link } from 'react-router-dom';

export default function AcademicCalendarPage() {
  const terms = [
    {
      title: 'FIRST TERM (SEP-DEC 2024)',
      events: [
        { description: 'TERM BEGINS', date: 'Tuesday, 03rd September 2024' },
        { description: 'TERM DURATION', date: '14 weeks' },
        { description: 'PRIZE GIVING CEREMONY', date: 'Friday, 29th September 2024' },
        { description: 'MIDTERM HOLIDAY', date: 'Monday, 14th October – Friday, 18th October 2024' },
        { description: 'MOTHERS DAY HOLIDAY', date: 'Tuesday, 15th October 2024' },
        { description: 'MUFTI DAY', date: 'Thursday, 05th December 2024' },
        { description: 'END OF FIRST TERM', date: 'Friday, 06th December 2024' }
      ]
    },
    {
      title: 'SECOND TERM (JAN-APRIL 2025)',
      events: [
        { description: 'TERM BEGINS', date: 'Tuesday, 07th January 2025' },
        { description: 'TERM DURATION', date: '12 weeks' },
        { description: 'CHILEMBWE DAY HOLIDAY', date: 'Wednesday 15th January 2025' },
        { description: 'MARTYRS DAY HOLIDAY', date: 'Monday, 3rd March 2025' },
        { description: 'MIDTERM HOLIDAY', date: 'Monday, 17th February – Friday, 21st February 2025' },
        { description: 'ANNUAL SPORT\'S DAY', date: 'Wednesday, 26th March 2025' },
        { description: 'END OF SECOND TERM', date: 'Thursday, 27th March 2025' }
      ]
    },
    {
      title: 'THIRD TERM (APRIL– JULY 2025)',
      events: [
        { description: 'TERM BEGINS', date: 'Tuesday, 15th April 2025' },
        { description: 'TERM DURATION', date: '11 weeks' },
        { description: 'LABOUR DAY HOLIDAY', date: 'Thursday, 01st May 2025' },
        { description: 'KAMUZU DAY HOLIDAY', date: 'Thursday, 15th May 2025' },
        { description: 'MIDTERM HOLIDAY', date: 'Thursday, 29th & Friday, 30th May 2025' },
        { description: 'GRADUATION DAY', date: 'Wednesday, 02nd July 2025' },
        { description: 'INDEPENDENCE DAY', date: 'Sunday, 06th July 2025' },
        { description: 'END OF THIRD TERM', date: 'Thursday, 03rd July 2025' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 text-school-secondary dark:text-school-accent">
            Academic Year <span className="text-school-primary">Calendar</span>
          </h1>
          <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-2">
            SCHOOL CALENDAR FOR ACADEMIC YEAR 2024/25
          </h2>
        </div>

        <div className="space-y-12">
          {terms.map((term, termIndex) => (
            <div key={termIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-fuchsia-600 dark:bg-fuchsia-700 p-4">
                <h3 className="text-xl font-bold text-white text-center">{term.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {term.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {event.description}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                        {event.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r">
          <p className="text-yellow-700 dark:text-yellow-300 font-medium">
            <span className="font-bold">Note:</span> Academic year 2025/26 will commence on Tuesday, 2nd September 2025
          </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/curriculum/foundation" 
            className="inline-block bg-school-primary hover:bg-school-secondary text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-300"
          >
            View Foundation Stage
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
