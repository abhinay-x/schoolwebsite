import React from 'react';
import Competitions from '../components/sections/Competitions';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const CompetitionsPage = () => {
  return (
    <div>
      <Navbar />
      <Competitions />
      <Footer />
    </div>
  );
};

export default CompetitionsPage;
