import React, { useState } from 'react';

const Cv = () => {
  const [showCv, setShowCv] = useState(false); // State to toggle CV visibility

  const handleToggle = () => {
    setShowCv(!showCv); // Toggle the state
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }} id="Cv"> {/* Center content */}
      <h2 className="container mt-4 text-bg-warning">My CV</h2>

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        style={{
          padding: '15px 30px',
          fontSize: '24px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
        }}
      >
        {showCv ? 'Hide CV' : 'Show CV'}
      </button>

      {/* Conditionally render the CV iframe */}
      {showCv && (
        <div style={{ margin: '20px auto', maxWidth: '90%' }}>
          <iframe
            src="https://drive.google.com/file/d/1h8XuncM42hR1thMgnSofIx3LDDaoi2hq/view?usp=sharing"
            width="100%"
            height="600px"
            title="Resume_Ivan_Lapickij.pdf"
            style={{ border: '1px solid #ddd', borderRadius: '8px' }}
          ></iframe>
          <a
            href="https://drive.google.com/file/d/1h8XuncM42hR1thMgnSofIx3LDDaoi2hq/view?usp=sharing"
            download="My_CV.pdf"
            style={{
              display: 'inline-block',
              marginTop: '15px',
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default Cv;
