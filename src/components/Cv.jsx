import React, { useState, useEffect } from 'react';

const Cv = () => {
  const [showCv, setShowCv] = useState(false);

  useEffect(() => {
    // Scroll down slightly when CV is shown
    if (showCv) {
      setTimeout(() => {
        window.scrollBy({
          top: 100,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [showCv]);

  const handleToggle = () => {
    setShowCv(!showCv);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12" id="Cv">
      <h2 className="text-center text-3xl font-bold mb-8 bg-yellow-400 py-2">
        My CV
      </h2>

      <div className="flex justify-center mb-8">
        <button
          onClick={handleToggle}
          className="px-8 py-4 text-xl text-white bg-blue-600 rounded-lg 
                   shadow-lg transition-all duration-200 ease-in-out
                   hover:transform hover:scale-105 hover:shadow-xl
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {showCv ? 'Hide CV' : 'Show CV'}
        </button>
      </div>

      {showCv && (
        <div className="w-full border-4 border-gray-200 rounded-lg overflow-hidden">
          <object
            data="Resume_Ivan_Lapickij.pdf"
            type="application/pdf"
            className="w-full h-screen"
          >
            <p className="p-4 text-center text-gray-600">
              If you are seeing this message, your browser doesn't support PDF viewing.
              Please <a href="Resume_Ivan_Lapickij.pdf" className="text-blue-600 hover:underline">download the PDF</a> instead.
            </p>
          </object>
        </div>
      )}
    </div>
  );
};

export default Cv;