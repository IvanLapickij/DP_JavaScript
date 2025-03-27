import React from 'react';

const Videos = () => {
  const videos = [
    {
      title: "Digital Porfolio Demo",
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
      description: "Mobile application based on Anime Jujustsu Kaisen",
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
    //  add more video objects here if needed.
  ];

  return (
    <div className="container mt-4" id="Videos">
      <h2 className="text-bg-warning">My Videos</h2>
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-lg-6 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
              </div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={video.link}
                  allowFullScreen
                  title={video.title}
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
