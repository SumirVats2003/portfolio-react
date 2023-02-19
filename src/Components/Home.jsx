import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import discord from "../assets/img/discord.svg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import spotify from "../assets/img/spotify.svg";
import telegram from "../assets/img/telegram.svg";
import twitter from "../assets/img/twitter.svg";
import sumir from "../assets/img/sumir.jpeg";

import "../App.css";

function Home() {
  return (
    <>
      <img
        src={sumir}
        alt="Sumir"
        style={{
          height: "15rem",
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
            <Link to="/projects">Projects</Link> |
          </li>
          <li>
            <Link to="/about">About</Link> |
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>
            <Link to="https://www.linkedin.com/in/sumirvats/" target="_blank">
              <img src={linkedin} alt="LinkedIn" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/SumirVats2003" target="_blank">
              <img src={github} alt="GitHub" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/sumirvats003/" target="_blank">
              <img src={instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/profile.php?id=100076179461405"
              target="_blank"
            >
              <img src={facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/SumirVats" target="_blank">
              <img src={twitter} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link
              to="https://discordapp.com/users/845655120846520350"
              target="_blank"
            >
              <img src={discord} alt="Discord" />
            </Link>
          </li>
          <li>
            <Link to="https://t.me/dont_AskMyName" target="_blank">
              <img src={telegram} alt="Telegram" />
            </Link>
          </li>
          <li>
            <Link
              to="https://open.spotify.com/user/7nm6pjcwga95skj35yc1tjn5x?si=zzjf94_hRSiB3xLVC6B8ig"
              target="_blank"
            >
              <img src={spotify} alt="Spotify" />
            </Link>
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
