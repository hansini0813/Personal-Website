import React from "react";
import "./projects.css"; // Assuming you have a CSS file for styling

// Sample project data
const projects = [
  {
    name: "Heart Disease Prediction",
    description: "A machine learning model that predicts heart disease using a decision tree algorithm.",
    githubLink: "https://github.com/hansini0813/Health_Informatics_Coop_Starter_Notebook.ipynb"
  },
  {
    name: "Recipe Search App",
    description: "A web app that allows users to search for recipes and view nutritional information.",
    githubLink: "https://github.com/hansini0813/recipe-search"
  },
  {
    name: "World Aqauatics Results Web Scraper",
    description: "AI-based health analytics platform for personalized treatment.",
    githubLink: "https://github.com/hansini0813/AIMS-scraper"
  },
  {
    name: "AI Health Analytics",
    description: "AI-based health analytics platform for personalized treatment.",
    githubLink: "https://github.com/your-repo/ai-health-analytics"
  },
  {
    name: "AI Health Analytics",
    description: "AI-based health analytics platform for personalized treatment.",
    githubLink: "https://github.com/your-repo/ai-health-analytics"
  },
  {
    name: "AI Health Analytics",
    description: "AI-based health analytics platform for personalized treatment.",
    githubLink: "https://github.com/your-repo/ai-health-analytics"
  },
  // Add more projects here
];

// Component for each project card
const ProjectCard = ({ name, description, githubLink }) => {
  return (
    <div className="card" onClick={() => window.open(githubLink, "_blank")}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

// Main component rendering all project cards
const Projects = () => {
  return (
    <div id="#projects" className="projects-container">
      <h1 className="Heading">Recent Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;