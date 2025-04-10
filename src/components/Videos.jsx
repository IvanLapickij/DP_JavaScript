import React from 'react';

const Videos = () => {
  const textBackgroundStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '10px',
  };

  const videos = [
    {
      title: "MSA promo video 2025",
      description: "MSA - 4th year project. Injury prevention application.",
      link: "https://www.youtube.com/embed/GkJGlxdCVFE", 
    },
    {
      title: "Technology Trend 2025",
      description: "Distributed Systems - 4th year project.",
      link: "https://www.youtube.com/embed/jFscuEtsXTE", 
    },
    {
      title: "Youtube Demo 2023",
      description: "Youtube archive project overview",
      link: "https://go.screenpal.com/watch/c0e3YFV4LYa",
    },
    {
      title: "Jujutsu Demo 2022",
      description: "Mobile application based on Anime Jujutsu Kaisen",
      link: "https://go.screenpal.com/watch/c0euq4VaQH6",
    }
  ];

  return (
    <>
      <style>
        {`
          .video-container {
            position: relative;
            padding-bottom: 56.25%; /* Default 16:9 ratio for larger screens */
            height: 0;
            overflow: hidden;
          }
          @media (max-width: 768px) {
            .video-container {
              padding-bottom: 100%; /* Increased height for small screens */
            }
          }
          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      <div className="container mt-4" id="Videos">
        <h2 className="text-bg-warning">My Videos</h2>

        {videos.map((video, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h5 style={textBackgroundStyle} className="video-title">{video.title}</h5>
            <div className="video-container">
              <iframe
                src={video.link}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div style={textBackgroundStyle}>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Videos;
