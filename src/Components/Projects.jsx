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
      <div className='projects'>
        <ProjectCard
          title='ADAS'
          image={ProjectImg}
          text='This project is meant to reduce Road Accidents by alerting driver on detection of drowsiness'
          link='https://github.com/SumirVats2003/ADAS'
          codelink={link}
        />
        <ProjectCard
          title='Peekaboo'
          image={ProjectImg}
          text='Simple and fun Chat App made with Flutter and FireBase'
          codelink='https://github.com/SumirVats2003/peekaboo'
          link={codelink}
        />
        <ProjectCard
          title='Aligarh Diaries'
          image={ProjectImg}
          text='A web portal for the Aligarh city for the smart city project'
          codelink='https://github.com/aruto-code/aligarh-diaries'
          link={codelink}
        />
        <ProjectCard
          title='College Canteen'
          image={ProjectImg}
          text={`An android application for the college's canteen services`}
          codelink='https://github.com/SumirVats2003/asjTeam3-CollegeCanteen'
          link={codelink}
        />
        {/* <ProjectCard
          title='Title'
          image={ProjectImg}
          text='this is the description for the project, here is the tech stack and what it does.'
          link='#'
          codelink='https://github.com'
        />
        <ProjectCard
          title='Title'
          image={ProjectImg}
          text='this is the description for the project, here is the tech stack and what it does.'
          link='#'
          codelink='https://github.com'
        /> */}
      </div>
    </>
  );
}

export default Projects;
