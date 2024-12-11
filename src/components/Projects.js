import React from "react";
import "../css/Projects.css";

// Importing images
import project1Image from "../images/1.PNG";
import project2Image from "../images/2.png";
import project3Image from "../images/3.PNG";
import project4Image from "../images/4.PNG";

const Projects = () => {
  const projectList = [
    {
      title: "Pet Selector Quiz",
      description: "A dynamic web app for helping users choose the perfect pet based on their preferences.",
      image: project1Image,
      githubLink: "https://github.com/your-username/project1",
    },

    {
      title: "Pet Selector Quiz",
      description: "A dynamic web app for helping users choose the perfect pet based on their preferences.",
      image: project2Image,
      githubLink: "https://github.com/your-username/project1",
    },

    
    {
      title: "AI Chatbot",
      description: "An AI-powered chatbot built with PHP and OpenAI API integration for pet-related queries.",
      image: project3Image,
      githubLink: "https://github.com/your-username/project2",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills, projects, and contact details.",
      image: project4Image,
      githubLink: "https://github.com/your-username/project3",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
