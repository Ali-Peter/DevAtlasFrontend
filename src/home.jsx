import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import gsap from 'gsap';

function Home() {
  const comp = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControl.start("visible");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from('#intro-slider', {
        xPercent: '-100',
        duration: 0.3,
        delay: 0.3,
      }).from(['#title1', '#title2', '#title3'], {
        opacity: 0,
        y: '+=30',
        stagger: 0.5,
      }).to(['#title1', '#title2', '#title3'], {
        opacity: 0,
        y: '-=30',
        delay: 0.3,
        stagger: 0.3,
      }).to('#intro-slider', {
        xPercent: '-100',
        duration: 0.3,
      }).from('#welcome', {
        opacity: 0,
        duration: 0.02,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className='relative' ref={comp}>
        <div id='intro-slider' className='h-screen p-10 bg-[#000] text-white absolute top-0 left-0 font-monica z-10 w-full flex flex-col gap-10 tracking-tight'>
          <h1 id='title1' className='md:text-9xl text-[50px]'>Software Engineer</h1>
          <h1 id='title2' className='md:text-9xl text-[50px]'>Designer</h1>
          <h1 id='title3' className='md:text-9xl text-[50px]'>Freelancer</h1>
          <p id='title4' className='font-bold md:text-4xl text-[30px]'>Full Stack Developer</p>
        </div>
        <div id='welcome'>
          <Navbar />
          <div ref={ref}>
            <motion.div
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={slideControl}
              transition={{ duration: 0.5, delay: 3.70, ease: "easeIn" }} // Delay set to total GSAP duration
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "black",
                zIndex: 20,
              }}
            >
            </motion.div>
            <Hero />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
