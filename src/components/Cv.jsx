import React, { useState } from 'react';

const Cv = () => {
  const [showCv, setShowCv] = useState(false);

  const handleToggle = () => {
    setShowCv(!showCv);
    if (!showCv) window.scrollBy({ top: 200, behavior: 'smooth' });
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }} id="Cv">
      <h2>My CV</h2>
      <button
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {showCv ? 'Hide CV' : 'Show CV'}
      </button>
      {showCv && (
        <div style={{ margin: '20px auto', maxWidth: '90%' }}>
          <iframe
            src="src/assets/docs/Resume_Ivan_Lapickij.pdf"
            width="100%"
            height="600px"
            title="Resume"
            style={{ border: '1px solid #ddd', borderRadius: '5px' }}
          />
          <a
            href="src/assets/docs/Resume_Ivan_Lapickij.pdf"
            download
            style={{
              display: 'block',
              marginTop: '10px',
              padding: '10px 15px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
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
