import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn='fadeIn'>
              <h1>Hi, I am Sumir Vats</h1>
              <TypeAnimation
                cursor={true}
                sequence={[
                  500,
                  "A Full-Stack Developer",
                  1000,
                  "A Computer Engineering Undergrad",
                  1000,
                  "An Open Source Enthusiast",
                  1000,
                  "An innovative thinker",
                  1000,
                  "A Hobbyist Musician",
                  1000,
                ]}
                speed={50}
                deletionSpeed={65}
                wrapper='h5'
                repeat={Infinity}
              />
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <Image src='/sumir.png  ' alt='man-svgrepo' />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to='projects'>
          <ScrollLink>
            Scroll down
            <img
              src='https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg'
              alt='scroll-down'
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
