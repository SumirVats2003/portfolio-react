import React from "react";
import Navbar from "./Navbar";
import "../App.css";

function About() {
  return (
    <>
      <Navbar />
      <h1>About Me</h1>
      <div className="intro">
        Here are the links to my social media accounts. Feel free to contact
        anytime as per your ease
      </div>
    </>
  );
}

export default About;
