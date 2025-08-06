import React from 'react';
import './TeachingJobsPage.css';

const TeachingJobsPage = () => {
  return (
    <div className="teaching-jobs-page">
      <div className="background-overlay"></div>
      <div className="content-container">
        <h1 className="page-title">Teaching Positions</h1>
        <p className="page-subtitle">We are currently seeking qualified and passionate educators to join our team.</p>
        
        <div className="vacancies-section">
          <h2 className="section-title">Current Vacancies</h2>
          <p className="section-description">Please find details of our current teaching positions in the document below:</p>
          
          <div className="document-card glass-card">
            <div className="card-header">
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="card-title">Teaching Vacancies</h3>
            </div>
            
            <div className="card-content">
              <p className="document-description">View all available teaching positions at our school. The document contains detailed information about each role, requirements, and application procedures.</p>
              
              <div className="document-meta">
                <div className="meta-item">
                  <span className="meta-label">Format:</span>
                  <span className="meta-value">DOCX</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Last Updated:</span>
                  <span className="meta-value">August 2025</span>
                </div>
              </div>
              
              <a 
                href="/src/assets/files/zppss vacancies.docx" 
                download="zppss_vacancies.docx"
                className="download-button glass-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Document
              </a>
            </div>
          </div>
        </div>
        
        <div className="application-info glass-card">
          <h2 className="section-title">How to Apply</h2>
          <p className="section-description">To apply for any of our teaching positions, please follow these steps:</p>
          <ol className="application-steps">
            <li className="step-item">
              <span className="step-number">1</span>
              <span>Download and review the vacancies document above</span>
            </li>
            <li className="step-item">
              <span className="step-number">2</span>
              <span>Complete the application form</span>
            </li>
            <li className="step-item">
              <span className="step-number">3</span>
              <span>Submit your application along with required documents</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TeachingJobsPage;
