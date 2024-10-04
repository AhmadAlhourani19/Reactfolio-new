import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";
import Reveal from "../components/Reveal";

import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Helmet>
        <title>Projects | Ahmad Alhourani</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-container">
            <div className="text-area">
              <Reveal>
                <div className="title projects-title">
                  Things I’ve made trying to put my dent in the universe.
                </div>
                  <>
                    Explore a selection of my projects that showcase my skills
                    and creativity. Each project is a unique journey,
                    representing my approach to solving diverse problems and
                    challenges in the world of software development.
                    <br />
                    <br />
                    Whether it's crafting efficient algorithms, designing
                    intuitive user interfaces, or implementing robust backend
                    systems, I've poured my passion into each endeavor. These
                    projects cover a range of technologies, providing a glimpse
                    into my versatile skill set.
                    <br />
                    <br />
                    Click on each project to learn more about its background,
                    features, and the technologies used. If you have any
                    questions or suggestions, feel free to reach out. I'm always
                    excited to discuss my work and explore new possibilities!
                    <br />
                    <br />
                  </>
              </Reveal>
            </div>
            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
