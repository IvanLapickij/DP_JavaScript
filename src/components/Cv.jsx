import React, { useState } from 'react';

const Cv = () => {
  const [showCv, setShowCv] = useState(false); // State to toggle CV visibility

  const handleToggle = () => {
    setShowCv(!showCv); // Toggle the state
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px 0',marginLeft:'50px', marginRight: '50px'}} id='Cv'> {/* Center content */}
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
  <iframe
    src="https://docs.google.com/document/d/1abFh66a58Y8dmXxQKMe0ylQt9-ZjpTwB5IU2Jr7yZdg/edit?tab=t.0#heading=h.5x0d5h95i329"
    width="100%"
    height="600px"
    title="CV PDF"
    style={{ marginTop: '20px' }}
  ></iframe>
)}

    </div>
  );
};

export default Cv;
