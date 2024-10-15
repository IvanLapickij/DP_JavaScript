import React, { useState } from 'react';

const Cv = () => {
  const [showCv, setShowCv] = useState(false); // State to toggle CV visibility

  const handleToggle = () => {
    setShowCv(!showCv); // Toggle the state
  };

  return (
    <div>
      <h2>My CV</h2>
      {/* Toggle Button */}
      <button onClick={handleToggle}>
        {showCv ? 'Hide CV' : 'Show CV'}
      </button>

      {/* Conditionally render the CV iframe */}
      {showCv && (
        <iframe
          src="src/assets/docs/Digital_Portfolio_Ivan_Lapickij_A0027326.pdf"
          width="100%"
          height="600px"
          title="CV PDF"
        ></iframe>
      )}
    </div>
  );
};

export default Cv;
