import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const FoundationStage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Foundation Stage</h1>
    <p>Details about the foundation stage curriculum.</p>
  </div>
);

const IGCSE = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">IGCSE</h1>
    <p>Information about IGCSE curriculum.</p>
  </div>
);

const AcademicCalendar = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Academic Calendar</h1>
    <p>School's academic calendar and important dates.</p>
  </div>
);

const EventCalendar = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Event Calendar</h1>
    <p>Upcoming school events and activities.</p>
  </div>
);

const CurriculumPage = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="foundation-stage" replace />} />
      <Route path="foundation-stage" element={<FoundationStage />} />
      <Route path="igcse" element={<IGCSE />} />
      <Route path="academic-calendar" element={<AcademicCalendar />} />
      <Route path="event-calendar" element={<EventCalendar />} />
    </Routes>
  );
};

export default CurriculumPage; 