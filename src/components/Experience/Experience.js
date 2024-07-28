import React from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

function Experience() {
  return (
    <>
      <div
        className='ProjectWrapper'
        id='projects'
        style={{ marginTop: "1rem" }}
      >
        <div className='Container'>
          <div className='SectionTitle'>Experience</div>
          <ExperienceCard />
        </div>
      </div>
    </>
  );
}

export default Experience;
