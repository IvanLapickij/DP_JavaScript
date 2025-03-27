import React from 'react';
import './Videos.css'; // Make sure this path is correct relative to your file structure

const Videos = () => {
  const videos = [
    {
      title: "Digital Portfolio Demo",
      description: "Current website overview",
      link: "https://go.screenpal.com/watch/cZXbFcnVFvt",
    },
    {
      title: "Sax Parser Demo",
      description: "Sax Parser project overview",
      link: "https://go.screenpal.com/watch/c0f0lKVzbGC",
    },
    {
      title: "Jujutsu Demo",
      description: "Mobile application based on Anime Jujutsu Kaisen",
      link: "https://go.screenpal.com/watch/c0euq4VaQH6",
    },
    {
      title: "Youtube Demo",
      description: "Youtube archive project overview",
      link: "https://go.screenpal.com/watch/c0e3YFV4LYa",
    },
    {
      title: "Monsters Demo",
      description: "Monsters project overview",
      link: "https://go.screenpal.com/watch/c3X00hVUag2",
    },
    // Add more video objects here if needed.
  ];

  return (
    <div className="container mt-4" id="Videos">
      <h2 className="text-bg-warning">My Videos</h2>
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-lg-6 col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
              </div>
              <div className="video-wrapper">
                <iframe
                  src={video.link}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
