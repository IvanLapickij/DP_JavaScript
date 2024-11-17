import React, { useState } from 'react';

const Cv = () => {
  const [showCv, setShowCv] = useState(false);

  const handleToggle = () => {
    setShowCv(!showCv);
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px 0',
      maxWidth: '1200px',
      margin: '0 auto'
    }} id='Cv'>
      <h2 className="container mt-4 text-bg-warning">My CV</h2>

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

      {showCv && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          width: '100%',
        }}>
          <object
            data="Resume_Ivan_Lapickij.pdf"
            type="application/pdf"
            style={{
              width: '100%',
              height: '800px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            <p style={{
              padding: '20px',
              textAlign: 'center',
              color: '#666',
            }}>
              Unable to display PDF file. 
              <a 
                href="Resume_Ivan_Lapickij.pdf"
                style={{
                  color: '#007bff',
                  textDecoration: 'underline',
                  marginLeft: '5px'
                }}
              >
                Download instead
              </a>
            </p>
          </object>
        </div>
      )}
    </div>
  );
};

export default Cv;