import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !isHovered) {
      mainControls.start("visible");
    }
  }, [isInView, isHovered, mainControls]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      {!isHovered && (
        <motion.div
          variants={{
            hidden: { x: '-100vw' },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "var(--brand)",
            zIndex: 20,
          }}
        ></motion.div>
      )}
    </div>
  );
};

export default Reveal;
