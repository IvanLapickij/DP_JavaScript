import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Rustic Roots Restaurant",
      description: "Frontend local restaurant website which was builded & deployed with React, TypeScript, and Bootstrap",
      link: "https://github.com/IvanLapickij/rusticroots",
      image: "https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/restaurant1.png",
    },
    {
      title: "Cherry Chocolate",
      description: "Cherry Chocolate is a dynamic web application built with PHP and AJAX for seamless interactivity, leveraging POSTMAN for efficient API testing and MySQL as the backend database for data management.",
      link: "https://github.com/IvanLapickij/ChocolateCherry",
      image: "https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/cherrychoc1.png",
    },
    {
      title: "Youtube Data Archive",
      description: " A Python-based application that archives and stores data by scraping information from YouTube based on an inserted link. The application retrieves and archives song data through a user-friendly GUI interface.",
      link: "https://github.com/IvanLapickij/Youtube-Data-Archive?tab=readme-ov-file",
      image: "https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/youtube1.png",
    },
      {
        title: "MoveSafe Analytics",
        description: "Year 4 project (Currently working on) - My objective is to collect data from football matches using a drone with the goal of developing insights to help prevent them.",
        link: "/MSA1.png",
        image: "/MSA1.png",
      }
      
    ,
    {
      title: "Parcel Way",
      description: "A database management system is essential for every business. To demonstrate my knowledge and skills in database management, I developed ParcelWay, a database management system designed for a parcel delivery company that is ease to use. In the following sections, I will introduce the workflow and implemented functionalities.",
      link: "https://github.com/IvanLapickij/ParcelWay",
      image: "https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/parcelway.png",
    },
    {
      title: "Data Mining & Machine Learning",
      description: "This is my fourth year of Data mining and machine learning project, for which I chose two datasets: “Abalone” and “Employees”. Then I utilized them using linear regression and decision Tree techniques to predict target variables and test the quality of the prediction. I will also present a workflow and documentation supported by the CrispDM data mining process, including images and references.",
      link: "https://github.com/IvanLapickij/Data-Mining-Machine-Learning-project",
      image: "https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/dmml.png",
    },
    ,
    {
      title: "Digital portfolio",
      description: "Digital portfolio - is website that i designed and connected via DNS, hosting provider and my repository. I created this project using React-Javasript with VS code. Dinamic background - on reload background is different.",
      link: "https://github.com/IvanLapickij/Data-Mining-Machine-Learning-project",
      image: "https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/digitalportfolio.png",
    },
    ,
    {
      title: "Monsters",
      description: "Third year Python GUI project where i implemented learned techniques to buttons where you can level up your monster, change avatar and release a fireball!",
      link: "https://github.com/IvanLapickij/Python-GUI-Monster",
      image: "https://raw.githubusercontent.com/IvanLapickij/DP_JavaScript/refs/heads/main/src/assets/images/monsters.png",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mt-4" id='Projects'>
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
