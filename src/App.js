// App.js
import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './app.css';
import AnimatedRoutes from './pages/AnimatedRouts';
import ReactGA from 'react-ga4';
import { TRACKING_ID } from './data/tracking';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialIconButton = ({ icon, text, link }) => (
  <div className="wrapper">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="button">
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <span>{text}</span>
      </div>
    </a>
  </div>
);

function App() {
  useEffect(() => {
    if (TRACKING_ID !== '') {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="icon-bar">
          <SocialIconButton icon={faGithub} text="GitHub" link="https://github.com/AhmadAlhourani19" />
          <SocialIconButton icon={faLinkedin} text="LinkedIn" link="https://www.linkedin.com/in/ahmad-alhourani-9555a72b6/" />
          <SocialIconButton icon={faMailBulk} text="Mail" link="mailto:ahmad.alhourani.personal@gmail.com" />
        </div>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
