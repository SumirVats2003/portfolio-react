import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id='about'>
      <div className='Container'>
        <div className='SectionTitle'>About Me</div>
        <div className='BigCard'>
          <Image src='/sumir.png' alt='man-svgrepo' />
          <div className='AboutBio'>
            Hello! My name is <strong>Sumir Vats</strong> a Computer Engineering
            Undergraduate at the Zakir Hussain College of Engineering and
            Technology. I had lead the Google Developer Students Club at my
            college during the session 2022-23. I am interested in open source,
            MERN Stack, Flutter, Machine Learning, DevOps, and competitive
            programming. I wish to connect more and more and increase my network
            to learn from anyone I can.
          </div>
          <div className='AboutBio tagline2'>
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className='tech'>
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
