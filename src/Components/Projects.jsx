import React from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import ProjectImg from "../assets/img/project.png";
import "../App.css";

function Projects() {
  return (
    <>
      <Navbar />
      <h1>My Projects</h1>
      <div className="projects">
      <ProjectCard title="Title" image={ProjectImg} text="this is the description for the project, here is the tech stack and what it does." link="#" codelink="https://github.com" />
      <ProjectCard title="Title" image={ProjectImg} text="this is the description for the project, here is the tech stack and what it does." link="#" codelink="https://github.com" />
      <ProjectCard title="Title" image={ProjectImg} text="this is the description for the project, here is the tech stack and what it does." link="#" codelink="https://github.com" />
      <ProjectCard title="Title" image={ProjectImg} text="this is the description for the project, here is the tech stack and what it does." link="#" codelink="https://github.com" />
      <ProjectCard title="Title" image={ProjectImg} text="this is the description for the project, here is the tech stack and what it does." link="#" codelink="https://github.com" />
      <ProjectCard title="Title" image={ProjectImg} text="this is the description for the project, here is the tech stack and what it does." link="#" codelink="https://github.com" />
      </div>
      
    </>
  );
}

export default Projects;
