import React from 'react';
import Homepage from './homepage';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import SkillBars from './SkillBars';
import Notfound from './404';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRouts() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SkillBars" element={<SkillBars />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRouts;

/*

*/