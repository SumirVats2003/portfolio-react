import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaSpotify,
} from "react-icons/fa";
import "../App.css";

function Contact() {
  return (
    <>
      <Navbar />
      <h1>Contact Me!</h1>
      <div className='intro'>
        Here are the links to my social media accounts. Feel free to contact me
        anytime as per your requirement
      </div>
      <div className='socials'>
        <ul>
          <li>
            <Link to='https://www.linkedin.com/in/sumirvats/' target='_blank'>
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link to='https://github.com/SumirVats2003' target='_blank'>
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link to='https://www.instagram.com/sumirvats003/' target='_blank'>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              to='https://www.facebook.com/profile.php?id=100076179461405'
              target='_blank'
            >
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link to='https://twitter.com/SumirVats' target='_blank'>
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              to='https://discordapp.com/users/845655120846520350'
              target='_blank'
            >
              <FaDiscord />
            </Link>
          </li>
          <li>
            <Link to='https://t.me/dont_AskMyName' target='_blank'>
              <FaTelegram />
            </Link>
          </li>
          <li>
            <Link
              to='https://open.spotify.com/user/7nm6pjcwga95skj35yc1tjn5x?si=zzjf94_hRSiB3xLVC6B8ig'
              target='_blank'
            >
              <FaSpotify />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
