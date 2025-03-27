import React from 'react';

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
  ];

  return (
    <div className="container mt-4" id="Videos">
      <h2 className="text-bg-warning">My Videos</h2>
      {videos.map((video, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h5>{video.title}</h5>
          <div 
            className="video-container" 
            style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}
          >
            <iframe
              src={video.link}
              title={video.title}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Videos;
