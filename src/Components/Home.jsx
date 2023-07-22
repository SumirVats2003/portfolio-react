import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <>
      <h1 className='head'>Sumir Vats</h1>
      <div className='intro'>
        Computer Engineering Undergraduate | Open Source Enthusiast | Web and
        App Developer | Music and Singing
      </div>

      <div className='links'>
        <ul>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <Link
        to='https://drive.google.com/file/d/1_2T9audqC2pmoaJJixJWNq-r6GF4v_3o/view?usp=drive_link'
        target='_blank'
      >
        <button className='btn'>View Resume</button>
      </Link>
    </>
  );
}

export default Home;
