import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  useEffect(() => {
    gsap.fromTo(".footer-content", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "easeOut" }
    );
  }, []);

  return (
    <>
      <footer className="bg-black/70 text-white px-2 text-center">
        {/* GSAP Animated Footer Content */}
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="py-2">
            <span>Ali Ogochukwu Peter</span>
            <h5>Full-Stack Dev</h5>
          </div>
          <p className="py-5">
            Built from scratch with 💙 <span>© </span>All rights reserved. {currentYear}
          </p>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;
