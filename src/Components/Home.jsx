import React from "react";
import { Link } from "react-router-dom";
import sumir from "../assets/img/sumir.jpeg";

import "../App.css";

function Home() {
  return (
    <>
      <img
        src={sumir}
        alt="Sumir"
        style={{
          height: "10rem",
          borderRadius: "300px",
        }}
      />
      <h1 className="head">Sumir Vats</h1>
      <div className="intro">
        Computer Engineering Undergraduate | Open Source Enthusiast |
        Lead@GDSC_ZHCET | Web and App Developer | Music and Singing
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <Link to="/pdf/Sumir_Resume.pdf" target="_blank">
        <button className="btn">View Resume</button>
      </Link>
    </>
  );
}

export default Home;
