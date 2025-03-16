import React, { useState } from 'react';

const Cv = () => {
  const [showCv, setShowCv] = useState(false); // State to toggle CV visibility

  const handleToggle = () => {
    setShowCv(!showCv); // Toggle the state
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px 0', marginLeft:'50px', marginRight: '50px'}} id='Cv'>
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
          cursor: 'pointer'
        }}
      >
        {showCv ? 'Hide CV' : 'Show CV'}
      </button>

      {/* Conditionally render the CV iframe for local PDF */}
      {showCv && (
        <iframe
        src="/Resume_Ivan_Lapickij.pdf"
          width="100%"
          height="600px"
          title="Resume Ivan Lapickij"
          style={{ marginTop: '20px' }}
        ></iframe>
      )}
    </div>
  );
};

export default Cv;
