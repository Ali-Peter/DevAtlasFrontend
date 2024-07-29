import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import profile from '../assets/profile.png';
import project1 from '../assets/project_image_1.jpg';
import project2 from '../assets/project_image_2.jpg';
import project3 from '../assets/project_image_3.jpg';
import { Link } from 'react-router-dom';
import SplitType from 'split-type';


const Hero = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
            setInView(isInView);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger on mount
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      useEffect(() => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
    }, [inView, controls]);
    
    useEffect(() => {
        const name = new SplitType('#name', {types: 'lines'});
        const profession = new SplitType('#profession', {types: 'words'});
        const professionText = new SplitType('#professionText', {types: 'lines'});
        const number1 = new SplitType('#number1', {types: 'chars'});
        const number2 = new SplitType('#number2', {types: 'chars'});
        const skill = new SplitType('#skill', {types: 'chars'});
        const project = new SplitType('#project', {types: 'lines'});

        name.lines.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.5}s`;
            char.classList.add('animated-char');
        }, []);
        profession.words.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.5}s`;
            char.classList.add('animated-char');
        }, []);
        professionText.lines.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.5}s`;
            char.classList.add('animated-char');
        }, []);
        number1.chars.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.5}s`;
            char.classList.add('animated-char');
        }, []);
        number2.chars.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.5}s`;
            char.classList.add('animated-char');
        }, []);
        skill.chars.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.5}s`;
            char.classList.add('animated-char');
        }, []);
        project.lines.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.5}s`;
            char.classList.add('animated-char');
        }, []);
    })
  return (
    <>
        <div>
            <div className='md:flex my-8 px-5 mx-auto md:mx-16 text-[#000]'>
                <div className='md:basis-2/4'>
                    <div className='flex flex-col '>
                        <div className='flex'>
                            <img src={profile} alt=""  width="240" height="240" className=''/>
                        </div>
                        <div id='name' className='mt-5'>
                            <h1 className='lg:text-[80px] my-2 uppercase text-[50px] font-bold leading-none'>H<span className='font-PermanentMarker lowercase'>i</span>, Ali</h1>
                            <h1 className='lg:text-[80px] my-2 uppercase text-[50px] font-bold leading-none'>Ogochukwu</h1>
                            <h1 className='lg:text-[80px] my-2 uppercase text-[50px] font-bold leading-none'>Peter</h1>
                        </div>
                        <div className='mt-2'>
                            <p className='font-bold text-xl'>Full Stack Developer</p>
                        </div>
                        <div className='flex mt-4 mx-auto'>
                            <a class="mr-7" href="" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
                            <a class="mr-7" href="https://dev.to/ali-peter" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg></a>
                            <a class="mr-7" href="" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
                            <a class="mr-7" href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg></a>
                        </div>
                    </div>
                </div>
                <div className='md:basis-2/4 md:h-screen custom-scrollbar mt-24 md:mt-0'>
                        <motion.div
                            ref={ref}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 100 }
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5, delay: 0.05 }}>
                            <div className='md:text-center'>
                                <h1 id='profession' className='lg:text-[80px] md:my-12 my-2 uppercase text-[50px] font-bold leading-none'>Full Stack Developer</h1>
                            </div>
                            <div className='flex uppercase my-16'>
                                <div id='number1' className='basis-1/5'>
                                    <span className='text-[30px]'>01</span>
                                </div>
                                <div  id='professionText' className='basis-4/5 text-[16px] font-bold'>
                                    <p className='my-2'>PASSIONATE ABOUT WEB TECHNOLOGIES. Working at the nexus of user-friendly interface design and creativity is something I adore doing. I DESIGN REMARKABLE ONLINE ENTERTAINMENTS.</p>
                                    <p className='my-5'>IF I'M NOT DEVELOPING NEW WEB EXPERIENCES OR BUILDING NEW WEBSITES, I'M Probably Gaming or Watching Football.</p>
                                    <Link className='text-[16px] hover:underline'>more about me and services</Link>
                                </div>
                            </div>
                        </motion.div>
                        <div id='skill' className='md:text-center'>
                            <h1 className='lg:text-[80px] md:my-12 my-2 uppercase text-[50px] font-bold leading-none'>SKILLS</h1>
                        </div>
                        <div className='flex uppercase my-16'>
                            <div id='number2' className='basis-1/5'>
                                <span className='text-[30px]'>02</span>
                            </div>
                            <div className='basis-4/5 flex grid grid-cols-2'>
                                <div className='flex border border-[#000] rounded-full p-2 m-2'>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-6 w-6 fill-[#000] stroke-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>
                                    <h4 class="text-sm text-[#000]">HTML5</h4>
                                </div>
                                <div className='flex border border-[#000] rounded-full p-2 m-2'>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-6 w-6 fill-[#000] stroke-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>
                                    <h4 class="text-sm text-[#000]">CSS3</h4>
                                </div>
                                <div className='flex border border-[#000] rounded-full p-2 m-2'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-2 h-6 w-6 fill-[#000] stroke-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"></path></svg>
                                    <h4 class="text-sm text-[#000]">Javascript</h4>
                                </div>
                                <div className='flex border border-[#000] rounded-full p-2 m-2'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-2 h-6 w-6 fill-[#000] stroke-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16 481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32 434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75 502.46 502.46 0 0 0-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39 501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2 477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94 481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z"></path><path d="M256 298.55a43 43 0 1 0-42.86-43 42.91 42.91 0 0 0 42.86 43z"></path></svg>
                                    <h4 class="text-sm text-[#000]">ReactJS</h4>
                                </div>
                                <div className='flex border border-[#000] rounded-full p-2 m-2'>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-6 w-6 fill-[#000] stroke-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path></svg>
                                    <h4 class="text-sm text-[#000]">TailwindCSS</h4>
                                </div>
                                <div className='flex border border-[#000] rounded-full p-2 m-2'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="mr-2 h-6 w-6 fill-[#000] stroke-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.0683 2.89968V22.2973l-2.11399 1.70265V7.8638H4.975l6.0933-4.96412zM14.93426 0v15.76724H19.025l-6.20044 5.08865V1.4689L14.93426 0z"></path></svg>
                                    <h4 class="text-sm text-[#000]">Axios</h4>
                                </div>
                                <div className='flex border border-[#000] rounded-full p-2 m-2'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="mr-2 h-6 w-6 fill-[#000] stroke-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.014 7.37a9.162 9.162 0 0 0-.808.025c-.218.017-.434.072-.65.11.229.118.456.213.68.315.225.103.436.232.629.387-.253-.097-.499-.208-.752-.298a8.046 8.046 0 0 0-1.624-.421c-.273-.037-.546-.073-.819.005-.276.078-.354.18-.38.458-.04.46.098.887.281 1.298a4.432 4.432 0 0 0 1.185 1.573c.391.335.825.598 1.305.787.136.053.274.103.411.155l-.009.032c-.263-.072-.532-.126-.787-.22a4.14 4.14 0 0 1-1.222-.73 4.16 4.16 0 0 1-1.007-1.22 3.43 3.43 0 0 1-.43-1.609l-.012.005C4.891 7.488.402 11.595.035 11.94l-.034.014c-.002.005 0 .01.003.016L0 11.974l.005-.002c.004.008.01.016.013.024.087-.019.173-.042.26-.054l.069-.01c.324-.115.655-.205.997-.253.484-.069.985-.159 1.48-.156.468.002.943.074 1.402.153.129.022.255.052.38.087.335.075.65.21.933.391l.06.03c.403.19.758.47 1.038.811.052.057.141.116.187.178.096.114.142.236.303.363v-1.737h2.01l.939 1.733.942-1.733h2.07v3.357l.343-.226s.375-1 2.116-1.14l1.996-.064c-.308-.637-.307-.637-.159-.83.147-.19 1.28-.314 1.48-.433l2.912-.588c.007-.022.015.012.03.007.072-.022.147-.037.25-.061l.66-.16c.042-.025.093-.034.14-.05.308-.107.577-.245.726-.573.145-.319.339-.616.41-.967.022-.111.003-.208-.078-.288-.097-.096-.222-.138-.35-.171-.421-.173-.84-.35-1.264-.513-.261-.101-.529-.185-.795-.27a30.574 30.574 0 0 0-.794-.243c-.244-.072-.49-.138-.736-.205-.24-.066-.48-.133-.72-.192-.282-.07-.565-.13-.847-.195-.215-.05-.428-.102-.644-.146-.234-.047-.47-.089-.706-.13-.302-.053-.602-.112-.905-.153-.366-.05-.734-.082-1.101-.125-.345-.04-.691-.065-1.038-.07zm-3.303.767a.154.154 0 0 1 .056.007c.42.13.83.277 1.216.491.365.203.695.45.979.756.012.013.02.028.036.05l-.645-.293-.021.026.37.551-.022.022a1.986 1.986 0 0 0-.665-.322l-.02.02.633.74-.416-.136-.017.02c.163.27.376.505.58.775-.354-.2-.665-.42-.956-.669a4.488 4.488 0 0 1-1.01-1.185c-.107-.19-.201-.385-.222-.606a.468.468 0 0 1 .011-.15.123.123 0 0 1 .113-.097zm5.424.668c.154.002.311-.006.464.015.278.037.555.092.832.14.158.027.317.052.474.086.297.064.594.133.89.2.196.046.392.092.587.14l-.329.161c-.365.027-.731.055-1.097.057a3.268 3.268 0 0 1-.675-.074c-.28-.058-.514-.196-.652-.466-.02-.04-.09-.063-.14-.078-.18-.054-.362-.1-.544-.168.063-.005.126-.014.19-.013zm3.223 2.635.005.02c-.08.022-.16.042-.239.067-.455.14-.916.266-1.363.428-.28.101-.544.25-.81.388-.233.119-.315.322-.287.575.019.162.04.324.055.488a1.786 1.786 0 0 1-.288-.701c-.035-.169.058-.273.18-.365.238-.178.496-.318.777-.41.35-.117.702-.233 1.059-.325.251-.065.513-.09.77-.133.048-.008.094-.021.141-.032zM9.141 13.955v2.676h1.869l.064-.066v-2.61l-.97 1.495z"></path></svg>
                                    <h4 class="text-sm text-[#000]">Mongoose</h4>
                                </div>
                                <div className='flex border border-[#000] rounded-full p-2 m-2'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="mr-2 h-6 w-6 fill-[#000] stroke-[#000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg>
                                    <h4 class="text-sm text-[#000]">ExpressJS</h4>
                                </div>
                            </div>
                        </div>
                        <div id='project' className='md:text-center'>
                            <h1 className='lg:text-[80px] md:my-12 my-2 uppercase text-[50px] font-bold leading-none'>PROJECTS</h1>
                            <p className=''>A selected set of projects i've built with individuals and teams. This is a mix of personal, collaborative and client owned projects.</p>
                        </div>
                        <div className='flex my-16'>
                            <div className='basis-1/5'>
                                <span className='text-[30px]'>03</span>
                            </div>
                            <div className='basis-4/5 mt-3'>
                                <div>
                                    <img src={project1} alt="project1"/>
                                    <a href="" className='flex font-bold my-3 text-xl text-[#000]'>
                                        <span>Flower Imperials</span>
                                        <svg className='mx-2 mt-[5px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-hover:stroke-teal-300 lg:ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                    <p>An E-commerce website landing page for a flower shop called Flower Imperials.</p>
                                    <span className='flex grid grid-cols-3'>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">ReactJS</h4>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">NodeJS</h4>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Tailwind css</h4>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Axios</h4>
                                    </span>
                                </div>

                                <div className='mt-16'>
                                    <img src={project2} alt="project1"/>
                                    <a href="" className='flex font-bold my-3 text-xl text-[#000]'>
                                        <span>Wechora Foods</span>
                                        <svg className='mx-2 mt-[5px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-hover:stroke-teal-300 lg:ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                    <p>An E-commerce website landing page for a food and Nutrition company called Wechora Foods.</p>
                                    <span className='flex grid grid-cols-3'>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">ReactJS</h4>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">NodeJS</h4>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Mongoose</h4>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">ExpressJS</h4>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Tailwind css</h4>
                                        <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Axios</h4>
                                    </span>
                                </div>
                                <div className='mt-16'>
                                    <img src={project3} alt="project1"/>
                                    <a href="" className='flex font-bold my-3 text-xl text-[#000]'>
                                        <span>FinImage Inventory</span>
                                        <svg className='mx-2 mt-[5px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-hover:stroke-teal-300 lg:ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                    <p>A supermarket inventory system</p>
                                    <span className='flex'>
                                        <h4  className="text-sm mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Django FrameWork</h4>
                                        <h4  className="text-sm mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Bootstrap4</h4>
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero