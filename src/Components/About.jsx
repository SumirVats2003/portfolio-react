import React from "react";
import Navbar from "./Navbar";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import { Link } from "react-router-dom";
import "../App.css";
import codefeast from "../assets/img/codefeast.jpg";
import gdsc from "../assets/img/gdsc.png";

function About() {
  return (
    <>
      <Navbar />
      <h1>About Me</h1>
      <div className='about'>
        I am a Computer Engineering undergraduate from the Zakir Husain College
        of Engineering and Technology, Aligarh Muslim University. I am
        passionate about software development and have worked on several
        projects involving web development, application development, and other
        software-related solutions. I am an Open Source Enthusiast and have led
        the&nbsp;
        <Link
          to='https://gdsc.community.dev/zakir-husain-college-of-engineering-and-technology-aligarh/'
          target='_blank'
        >
          Google Developer Student Club, ZHCET
        </Link>{" "}
        during the session 2022-23
      </div>
      <div className='experience'>
        <h2 className='subheading'>Experience</h2>
        <LeftItem
          body='As a Frontend intern at Codefeast, I had a chance to work on Frontend development along with FTP. I learnt various software engineering principles, along with industrial experiences such as client relations, software development approaches and marketing'
          image={codefeast}
          btnContent='View Certificate and LOR'
          link='https://drive.google.com/file/d/1ev26TQ_fPxofDtX2jVkVUxSKnesIp430/view?usp=sharing'
        />
        <RightItem
          body='I led the Google Developer Student Club(GDSC), ZHCET during the tenure of 2022-23, wherein I got experience on the fields of leadership, team-work, commincation and public relations. Technically, I got hands-on with Android, Flutter, Web and AI/ML'
          image={gdsc}
          btnContent='View Certificate'
          link='https://drive.google.com/file/d/1Dwn8tG1mGz644zY1nP9NVH1x_8Ygezq4/view?usp=sharing'
        />
      </div>
    </>
  );
}

export default About;
