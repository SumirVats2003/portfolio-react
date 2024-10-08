import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className='Container'>
      <Nav>
        <Logo to='/'>
          <img src='/logo.png' alt='logo' />
        </Logo>
        <NavMenu>
          <NavLink className='menu-item' to='projects' smooth={true}>
            Projects
          </NavLink>
          <NavLink className='menu-item' to='experience' smooth={true}>
            Experience
          </NavLink>
          <NavLink className='menu-item' to='about' smooth={true}>
            About
          </NavLink>
          <NavLink className='menu-item' to='contact' smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className='btn PrimaryBtn'
            href='https://drive.google.com/file/d/1NLmul9QQM5k6BzPZ4RpJ-RxOfPHbP23D/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
