import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Only Robots",
      description: "This is a 4th-year college project developed in Java using Spring Boot, designed as part of the 'Service Oriented Architecture' course. The aim is to demonstrate the microservices architecture and advanced RESTful API techniques learned throughout the program.",
      link: "https://github.com/IvanLapickij/SOA4-TechShop",
      image: "https://raw.githubusercontent.com/IvanLapickij/SOA4-TechShop/refs/heads/main/Tshop_Customer/Tshop_Customer/src/main/resources/static/images/screenshot1.png",
    },
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
        description: "Year 4 project - The Move Safe Analytics (MSA) application is committed to reducing injury risks by using advanced AI-powered drone technology to monitor player interactions in real time. ",
        link: "https://github.com/IvanLapickij/MoveSafe_Analytics",
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
      description: "Data mining and machine learning project, for which I chose two datasets: “Abalone” and “Employees”. Then I utilized them using linear regression and decision Tree techniques to predict target variables and test the quality of the prediction. I will also present a workflow and documentation supported by the CrispDM data mining process, including images and references.",
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
    {
      title: "An Analysis of Client/Server Security Techniques",
      description: "This is my 4th year software security assignment report where I compare and contrast different cryptographic methods to ensure authentication, integrity and confidentiality in client/server settings. ",
      link: "https://github.com/IvanLapickij/Security4_Project",
      image: "https://raw.githubusercontent.com/IvanLapickij/Security4_Project/refs/heads/main/images/security.png",
    },
    {
      title: "BoardGames Club",
      description: "Project 'BoardGames Club' created using Python and Docker. It is a Cloud Run application that uses CRUD functionality to update members information and draws highest scores chart.",
      link: "https://github.com/IvanLapickij/BOADRGAMES_IVAN",
      image: "https://raw.githubusercontent.com/IvanLapickij/BOADRGAMES_IVAN/refs/heads/Ivan-%F0%9F%8C%BF-/img_5.png",
    },
    {
      title: "SilkWeb Atlas",
      description: "Repository that hosts two Android Studio applications designed for distinct user experiences. Whether you’re fascinated by the world of arachnids or a dedicated anime enthusiast, this suite offers tailored, feature-rich tools to explore your interests in depth.",
      link: "https://github.com/IvanLapickij/AndroidStudio",
      image: "https://raw.githubusercontent.com/IvanLapickij/AndroidStudio/refs/heads/main/images/Redback-spider.jpg",
    }
    
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
