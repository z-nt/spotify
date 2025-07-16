import React from 'react';
import '../assets/styles/LoadingSpinner.css'; 

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p className="spinner-text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
