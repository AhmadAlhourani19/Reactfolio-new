import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

import Logo from "../components/common/logo1";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";
import Reveal from "../components/Reveal";
import Socials from "../components/about/socials";

import "./styles/homepage.css";

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(350);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const newLogoSize = 350 - (scroll * 4) / 10;

      if (newLogoSize > 40) {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      } else {
        setLogoSize(40);
        setStayLogo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize]);

  const currentSEO = SEO.find((item) => item.page === "home");

  const logoStyle = {
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    left: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
    transition: "all 0.3s ease-in-out"
  };

  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }}>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>
          <div className="homepage-container">
            <Reveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="homepage-first-area"
              >
                <div className="homepage-first-area-left-side">
                  <div className="title homepage-title">
                    {INFO.homepage.title}
                  </div>
                  <div className="subtitle homepage-subtitle">
                    {INFO.homepage.description}
                  </div>
                </div>

                <div className="homepage-first-area-right-side">
                  <div className="homepage-image-container">
                    <div className="homepage-image-wrapper">
                      <img
                        src="homepage.jpg"
                        alt="about"
                        className="homepage-image"
                      />
                    </div>
                    <div className="about-socials">
                      <Socials />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
