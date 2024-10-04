import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import { motion } from 'framer-motion';

import "./styles/about.css";

import Reveal from "../components/Reveal";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutInfo = INFO.about || {};
  const { title, description } = aboutInfo;

  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-container">
            <div className="about-logo-container"></div>
            <Reveal>
              <div className="about-main">
                <div className="about-me-container">
                  <h2>About me</h2>
                  <br/>
                  <>
                    Ahoy, dear comrades in curiosity! My academic odyssey is no ordinary trek through the 
                    annals of theory; it's an exhilarating crusade, transforming the abstract into the 
                    concrete, the imagined into the realized.
                    <br />
                    <br />
                    Imagine me, if you will, as a relentless explorer, charting the boundless seas of 
                    computer science. I've journeyed through the dense forests of database architecture 
                    and sailed the mystical waters of frontend development, uncovering hidden gems at every 
                    turn. Every challenge conquered has led to the discovery of new treasures, 
                    each more fascinating than the last.
                    <br />
                    <br />
                    Behold the gallery of my inventions—projects pulsating with life, far beyond mere 
                    sequences of code. These creations weave the narrative of my quest, a rich tapestry 
                    where logic and imagination converge, breathing soul into the fabric of the digital realm.
                    <br />
                    <br />
                    Step into the core of my digital sanctum, where projects stand tall, their gates flung 
                    wide to welcome fellow pioneers. Open-source is my creed, an open invitation to delve 
                    deep, contribute your verse, and jointly forge our tomorrow. Immerse yourself in the code, 
                    exchange wisdom, and together, let's sculpt the future of innovation.
                    <br />
                    <br />
                    Collaboration is the alchemy that turns the ordinary into the extraordinary. 
                    I've reveled in the downpour of collective creativity, absorbing every droplet of insight 
                    and feedback. If the beat of innovation calls to you, come, join the ensemble. 
                    Your perspective might just be the elusive chord that completes our opu
                    <br />
                    <br />
                    This voyage transcends the digital—it's a hyperspace leap into realms unknown. 
                    The allure of the undiscovered calls to us, and the true excitement lies in the 
                    quest itself. Embark with me on this expedition, where every challenge unveils a new 
                    galaxy to explore, each brimming with the potential for discovery.
                    <br />
                    <br />
                  </>
                </div>
                <div className="about-left-side">
                  <div className="about-video-container">
                    <div className="about-video-wrapper">
                      <iframe
                        width="100%"
                        height="370"
                        src="https://www.youtube.com/embed/cpTHaUKqsvk?si=UR93W-NJd9qhEleN"
                        title="YouTube Video"
                        frameBorder="0"
                        allowFullScreen
                        className="about-video"
                      ></iframe>
                    </div>
                  </div>
                  <div className="about-socials">
                    <Socials />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="work-education-container">
            <Reveal>
              <div className="section about-section">
                <div className="subsection work-experience">
                  <div className="sub-title">
                    <h2>Work Experience</h2>
                  </div>
                  <ul>
                    <li className="experience-item">
                      <strong>Finance Controlling Manager</strong> - Vistajet GmbH (Hamburg, Germany) | December 2023 - Current
                      <p className="experience-description">
                        Responsibilities:
                        <ul>
                          <li>Process Aircraft Maintenance Invoices</li>
                          <li>Analyze financial documents for accuracy and compliance</li>
                          <li>Collaborate with team members for efficient financial workflows</li>
                          <li>Implement and maintain financial controls</li>
                        </ul>
                      </p>
                    </li>
                    <li className="experience-item">
                      <strong>Crew Scheduler</strong> - Air Hamburg Luftverkehrsgesellschaft mbH (Hamburg, Germany) | August 2023 - October 2023
                      <p className="experience-description">
                        Responsibilities:
                        <ul>
                          <li>Support in scheduling 350 crew members</li>
                          <li>Adjustment of crew assignments</li>
                          <li>Work with Air Hamburg tools</li>
                        </ul>
                      </p>
                    </li>
                    </ul>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="section about-section">
                <div className="subsection education">
                  <div className="sub-title">
                    <h2>Education</h2>
                  </div>
                  <ul>
                    <li className="education-item">
                      <strong>Information Engineering</strong> - University of Applied Sciences (Hamburg, Germany) | Graduation Year: 2026
                    </li>
                    <li className="education-item">
                      <strong>Abitur</strong> - BbS Dr. Otto Schlein, Magdeburg, Germany <br />
                      Zeitraum: 2021 – 2023 | Abiturnote: 2.2
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="about-socials-mobile">
            <Socials />
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
