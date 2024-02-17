import React from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import adas from "../assets/img/adas.png";
import asjcc from "../assets/img/asjcc.png";
import peekaboo from "../assets/img/peekaboo.png";
import ad from "../assets/img/ad.png";
import "../App.css";

function Projects() {
  return (
    <>
      <Navbar />
      <h1>My Projects</h1>
      <div className='projects'>
        <ProjectCard
          title='ADAS'
          image={adas}
          text='This project is meant to reduce Road Accidents by alerting driver on detection of drowsiness'
          link='https://github.com/SumirVats2003/ADAS'
          codelink='https://github.com/SumirVats2003/ADAS'
        />
        <ProjectCard
          title='Peekaboo'
          image={peekaboo}
          text='Simple and fun Chat App made with Flutter and FireBase'
          codelink='https://github.com/SumirVats2003/peekaboo'
          link='https://github.com/SumirVats2003/peekaboo'
        />
        <ProjectCard
          title='Aligarh Diaries'
          image={ad}
          text='A web portal for the Aligarh city for the smart city project'
          codelink='https://github.com/aruto-code/aligarh-diaries'
          link='https://github.com/aruto-code/aligarh-diaries'
        />
        <ProjectCard
          title='College Canteen'
          image={asjcc}
          text={`An android application for the college's canteen services`}
          codelink='https://github.com/SumirVats2003/asjTeam3-CollegeCanteen'
          link='https://github.com/SumirVats2003/asjTeam3-CollegeCanteen'
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
