import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo";
import "./styles/navBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './themeToggle'; // Import the ThemeToggle component

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const location = useLocation();

  const navToggle = () => {
    setActive((prev) => (prev === "nav__menu" ? "nav__menu nav__active" : "nav__menu"));
    setIcon((prev) => (prev === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"));
  };

  return (
    <nav className="nav">
      <Logo className="Logo-hover" width={85} /> 
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className={`nav__link ${location.pathname === '/' ? 'active-link' : ''}`}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className={`nav__link ${location.pathname === '/about' ? 'active-link' : ''}`}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/projects" className={`nav__link ${location.pathname === '/projects' ? 'active-link' : ''}`}>
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Skillbars" className={`nav__link ${location.pathname === '/Skillbars' ? 'active-link' : ''}`}>
            Skills
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className={`nav__link ${location.pathname === '/contact' ? 'active-link' : ''}`}>
            Contact
          </Link>
        </li>
        <li className="nav__item">
          <a href="/Lebenslauf.pdf" download="Ahmad_Alhourani_Resume.pdf" className="nav__link">
            Download Resume <FontAwesomeIcon icon={faDownload} />
          </a>
        </li>
        <li className="nav__item">
          <ThemeToggle />
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
