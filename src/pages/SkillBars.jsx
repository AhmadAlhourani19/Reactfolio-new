import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import SEO from "../data/seo";

import CLogo from "../data/Skills-logo/C.png";
import JavaLogo from "../data/Skills-logo/Java.webp";
import PythonLogo from "../data/Skills-logo/python.png";
import ReactJSLogo from "../data/Skills-logo/reactjs.png";
import HTML5Logo from "../data/Skills-logo/html.png";
import CSS3Logo from "../data/Skills-logo/css.png";
import MatlabLogo from "../data/Skills-logo/Matlab.png";
import OfficeLogo from "../data/Skills-logo/ms-office-logo.png";
import NextJsLogo from "../data/Skills-logo/nextjs.png";
import tailwindCSSLogo from "../data/Skills-logo/tailwind.png";
import MySQL from "../data/Skills-logo/MySQL.jpg";
import "./styles/SkillBars.css";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SkillsBars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "SkillBars");
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Skills | Ahmad Alhourani</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="SkillsBars-container">
            <div className="SkillsBars-text">
              <div className="SkillsBars-logo-container"></div>
              <div className="skills-header">
                <h2 className="skills-title">My Skills</h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="subtitle contact-subtitle"
                >
                  I specialize in crafting elegant and efficient code, turning abstract
                  ideas into functional and innovative solutions. My coding journey is
                  fueled by a passion for creating digital experiences that resonate with
                  users.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="subtitle contact-subtitle"
                >
                  I thrive on challenges, viewing them as opportunities for innovation.
                  Constantly exploring new technologies, I embrace a mindset of continuous
                  learning to stay on the cutting edge of the ever-evolving tech
                  landscape.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="subtitle contact-subtitle"
                >
                  I excel in building captivating and responsive web interfaces using
                  ReactJS. Juggling states and props, I bring user interfaces to life
                  with a touch of magic, ensuring seamless and enjoyable interactions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="subtitle contact-subtitle"
                >
                  As a CSS sorcerer, I weave stylesheets with precision to create visually
                  stunning websites. Translating design visions into pixel-perfect
                  realities, I believe that the visual appeal is just as important as the
                  functionality.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="subtitle contact-subtitle"
                >
                  My expertise extends to analyzing and visualizing data to unveil
                  meaningful insights. Python and MATLAB are my trusty sidekicks in the
                  data realm, helping me navigate and derive valuable conclusions from
                  complex datasets.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="subtitle contact-subtitle"
                >
                  Commanding a diverse set of tools for various tech tasks, I use the
                  Microsoft Office suite as my canvas for crafting professional and
                  polished documents. From presentations to reports, I leverage these
                  tools to communicate effectively.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="subtitle contact-subtitle"
                >
                  Mastering the art of Java, I build robust and scalable applications
                  with a focus on object-oriented programming. Java is not just a language
                  for me; it's a powerful tool for creating reliable and high-performance
                  software.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="subtitle contact-subtitle"
                >
                  Renowned for my ability to rapidly dissect complex problems, I approach
                  challenges as opportunities for growth. I believe that every problem
                  has an elegant solution waiting to be discovered, and I enjoy the
                  process of finding it.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="subtitle contact-subtitle"
                >
                  These skills are not just tools; they are the building blocks of my
                  digital universe. With each line of code, I aim to create impactful and
                  memorable experiences.
                </motion.p>
              </div>
            </div>
            <h1 className="title-text">Programming Skills</h1>
            <div className="skills-container skills-slider" ref={skillsRef}>
              <div className="container">
                <Slider {...settings}>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={CLogo} alt="C Logo" className="skill-logo" />
                      <span className="text-title">C Programming language</span>
                      <div className="skill-bar">
                        <span className="skill-per c">
                          <span className="tooltip">95%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <img src={JavaLogo} alt="Java Logo" className="skill-logo" />
                      <span className="text-title">Java Programming language</span>
                      <div className="skill-bar">
                        <span className="skill-per java">
                          <span className="tooltip">92%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <img src={PythonLogo} alt="Python Logo" className="skill-logo" />
                      <span className="text-title">Python Programming language</span>
                      <div className="skill-bar">
                        <span className="skill-per python">
                          <span className="tooltip">92%</span>
                        </span>
                      </div>
                    </motion.div>                    
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg" alt="Pandas Logo" className="skill-logo" />
                      <span className="text-title">Pandas</span>
                      <div className="skill-bar">
                        <span className="skill-per pandas">
                          <span className="tooltip">88%</span>
                        </span>
                      </div>
                    </motion.div>                    
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" alt="Jupyter Logo" className="skill-logo" />
                      <span className="text-title">Jupyter</span>
                      <div className="skill-bar">
                        <span className="skill-per Jupyter">
                          <span className="tooltip">90%</span>
                        </span>
                      </div>
                    </motion.div>                    
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <img src={ReactJSLogo} alt="ReactJS Logo" className="skill-logo" />
                      <span className="text-title">React</span>
                      <div className="skill-bar">
                        <span className="skill-per reactjs">
                          <span className="tooltip">87%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <img src={NextJsLogo} alt="Next.js Logo" className="skill-logo" />
                      <span className="text-title">Next.js</span>
                      <div className="skill-bar">
                        <span className="skill-per nextJS">
                          <span className="tooltip">80%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <img src={tailwindCSSLogo} alt="tailwindCSS Logo" className="skill-logo" />
                      <span className="text-title">Tailwind CSS</span>
                      <div className="skill-bar">
                        <span className="skill-per tailwindCSS">
                          <span className="tooltip">94%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <img src={HTML5Logo} alt="HTML5 Logo" className="skill-logo" />
                      <span className="text-title">HTML5</span>
                      <div className="skill-bar">
                        <span className="skill-per html">
                          <span className="tooltip">98%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <img src={CSS3Logo} alt="CSS3 Logo" className="skill-logo" />
                      <span className="text-title">CSS3</span>
                      <div className="skill-bar">
                        <span className="skill-per css">
                          <span className="tooltip">95%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </Slider>
              </div>
            </div>

            <h1 className="title-text">Other Skills</h1>
            <div className="skills-container skills-slider" ref={skillsRef}>
              <div className="container">
                <Slider {...settings}>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={MatlabLogo} alt="Matlab Logo" className="skill-logo" />
                      <span className="text-title">Matlab</span>
                      <div className="skill-bar">
                        <span className="skill-per matlab">
                          <span className="tooltip">85%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <img src={OfficeLogo} alt="Office Logo" className="skill-logo" />
                      <span className="text-title">Microsoft Office</span>
                      <div className="skill-bar">
                        <span className="skill-per office">
                          <span className="tooltip">100%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="skill-box">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg" alt="MySQL Logo" className="skill-logo" />
                      <span className="text-title">MySQL</span>
                      <div className="skill-bar">
                        <span className="skill-per MySQL">
                          <span className="tooltip">85%</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBars;
