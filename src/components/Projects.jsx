import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Rustic Roots Restaurant",
      description: "Frontend local restaurant website which was builded & deployed with React, TypeScript, and Bootstrap",
      link: "https://github.com/IvanLapickij/rusticroots",
      image: "src/assets/images/restaurant1.png",
    },
    {
      title: "Cherry Chocolate",
      description: "Cherry Chocolate is a dynamic web application built with PHP and AJAX for seamless interactivity, leveraging POSTMAN for efficient API testing and MySQL as the backend database for data management.",
      link: "https://github.com/IvanLapickij/ChocolateCherry",
      image: "src\assets\images\cherrychoc1.png",
    },
    {
      title: "Youtube Data Archive",
      description: " A Python-based application that archives and stores data by scraping information from YouTube based on an inserted link. The application retrieves and archives song data through a user-friendly GUI interface.",
      link: "https://github.com/IvanLapickij/Youtube-Data-Archive?tab=readme-ov-file",
      image: "src\assets\images\youtube1.png",
    },
    {
      title: "MoveSafe Analytics",
      description: " Year 4 project  (Currently working on) - My objective is to collect data from football matches using a drone with the goal of developing insights to help prevent them.",
      link: "https://github.com/IvanLapickij/Project4",
      image: "https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/drone1.png?token=GHSAT0AAAAAACYGNFX3AK7MQS6SGDSMCINYZYPCUYQ",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-bg-warning">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;