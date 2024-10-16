import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Rustic Roots Restaurant",
      description: "Frontend local restaurant website which was builded & deployed with React, TypeScript, and Bootstrap",
      link: "https://github.com/IvanLapickij/rusticroots",
      image: "https://private-user-images.githubusercontent.com/116425938/284598993-a9905876-b07d-4659-bc0d-d6f7d0d5004a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkwMzYxNjQsIm5iZiI6MTcyOTAzNTg2NCwicGF0aCI6Ii8xMTY0MjU5MzgvMjg0NTk4OTkzLWE5OTA1ODc2LWIwN2QtNDY1OS1iYzBkLWQ2ZjdkMGQ1MDA0YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAxNVQyMzQ0MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZGI0YzdmMGIxMmRiMTVlMTZiN2Q5MzRkODAwYTZjMTVmNTdjYmNiMDM5ZmRiMWIwZTg0MTI5MDQxY2VlMjM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.g0osrvcQcwN769NuKIdnsC2WPk_tbGo9vLb4opXsCGg", // Replace with actual project image link
    },
    {
      title: "Cherry Chocolate",
      description: "Cherry Chocolate is a dynamic web application built with PHP and AJAX for seamless interactivity, leveraging POSTMAN for efficient API testing and MySQL as the backend database for data management.",
      link: "https://github.com/IvanLapickij/ChocolateCherry",
      image: "https://private-user-images.githubusercontent.com/116425938/284575377-2b95b8e2-4c95-4d5e-9e82-5eeb94ced148.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkwMzcwMjgsIm5iZiI6MTcyOTAzNjcyOCwicGF0aCI6Ii8xMTY0MjU5MzgvMjg0NTc1Mzc3LTJiOTViOGUyLTRjOTUtNGQ1ZS05ZTgyLTVlZWI5NGNlZDE0OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAxNVQyMzU4NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MjliOTkzM2ExYmJmZTk2M2ZjYjU3Zjk3ZWExZDE5MTNiNTU4YTJkNWNhNzBhY2VjYjk1ZGUyNjgxM2RjMTFkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.EYsJuMkZxi7jVIo2ak-KOW3R6FKiE1K_iMSUbi8l-mg",
    },
    {
      title: "Youtube Data Archive",
      description: " A Python-based application that archives and stores data by scraping information from YouTube based on an inserted link. The application retrieves and archives song data through a user-friendly GUI interface.",
      link: "https://github.com/IvanLapickij/Youtube-Data-Archive?tab=readme-ov-file",
      image: "https://private-user-images.githubusercontent.com/116425938/284583575-ec11dc89-1b3b-4944-9fa9-74fbe2193e5d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkwMzcyNjksIm5iZiI6MTcyOTAzNjk2OSwicGF0aCI6Ii8xMTY0MjU5MzgvMjg0NTgzNTc1LWVjMTFkYzg5LTFiM2ItNDk0NC05ZmE5LTc0ZmJlMjE5M2U1ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAxNlQwMDAyNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMDgzZTZjMjVlYzlhNThiNWJlN2NjNTRiZTQ3YjFkMWNjMTk2ZTEwMTMxZDMwMTQ3ZTcyNTk5NmE1ZjdkM2I4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.c1vOVCin_Y54eFDcU0TwmCvnBfwx36qP-dqB75_hUF8",
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
      <h2>My Projects</h2>
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
