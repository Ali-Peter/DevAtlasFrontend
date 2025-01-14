import React from 'react';
import profile from '../assets/profile.png';
import project1 from '../assets/project_image_1.jpg';
import project2 from '../assets/project_image_2.jpg';
import { skillItem } from '../components/contentFunction';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {Number} from '../components/motion'

  
const Hero = () => {
    
  return (
    <>
        <div className="relative h-full overflow-hidden">
            <DotLottieReact
                src="https://lottie.host/0a9a0441-ac5d-4c8d-b718-dd5bdeda0061/89dPHFuwUV.lottie"
                loop
                autoplay
                className="absolute inset-0 w-full h-full z-[-1] ml-[-10vw]" // Tailwind classes for background
            />
            <div className='md:flex my-8 px-5 pb-5 mx-auto md:mx-16 text-[#000] relative z-2'>
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
                            <p className='font-bold text-xl text-white'>Full Stack Developer</p>
                        </div>
                        <motion.div
                            initial={{opacity: 0, scale: 0}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 2}}
                            className='flex mt-4 mx-auto'
                        >
                            <a class="mr-7 hover:scale-105 duration-200 hover:text-gray-500" href="" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
                            <a class="mr-7 hover:scale-105 duration-200 hover:text-gray-500" href="https://dev.to/ali-peter" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg></a>
                            <a class="mr-7 hover:scale-105 duration-200 hover:text-gray-500" href="" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
                            <a class="mr-7 hover:scale-105 duration-200 hover:text-gray-500" href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg></a>
                        </motion.div>
                    </div>
                </div>
                <div className='md:basis-2/4 md:h-screen custom-scrollbar mt-24 md:mt-0'>
                        <div>
                            <motion.div 
                              initial={{opacity: 0, scale: 0}}
                              whileInView={{opacity: 1, scale: 1}}
                              transition={{duration: 2}}
                              className='md:text-center'>
                                <h1 id='profession' className='lg:text-[60px] md:my-12 my-2 uppercase text-[50px] font-bold leading-none'>Full Stack Developer</h1>
                            </motion.div>
                            <div className='flex uppercase my-16'>
                                <div id='number1' className='basis-1/5'>
                                    <Number>
                                        <span className='text-[30px]'>01</span>
                                    </Number>
                                </div>
                                <div  id='professionText' className='basis-4/5 text-[16px] font-bold'>
                                    <p className='my-2'>PASSIONATE ABOUT WEB TECHNOLOGIES. Working at the nexus of user-friendly interface design and creativity is something I adore doing. I DESIGN REMARKABLE ONLINE ENTERTAINMENTS.</p>
                                    <p className='my-5'>IF I'M NOT DEVELOPING NEW WEB EXPERIENCES OR BUILDING NEW WEBSITES, I'M Probably Gaming or Watching Football.</p>
                                    <Link className='text-[16px] hover:underline'>more about me and services</Link>
                                </div>
                            </div>
                        </div>
                        <motion.div 
                            initial={{opacity: 0, scale: 0}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 2}}
                            className='md:text-center'>
                            <h1 className='lg:text-[60px] md:my-12 my-2 uppercase text-[50px] font-bold leading-none'>SKILLS</h1>
                        </motion.div>
                        <div className='flex uppercase my-16'>
                            <div id='number2' className='basis-1/5'>
                                <Number>
                                    <span className='text-[30px]'>02</span>
                                </Number>
                            </div>
                            
                                <div className='basis-4/5 grid grid-cols-2'>
                                    {skillItem.map((item, index) => (
                                        <Number>
                                            <div key={index} className='flex border border-[#000] rounded-full p-2 m-2'>
                                                <img src={item.skillImg} alt="Django Logo" className="mr-2 h-6 w-6" />
                                                <h4 className="text-sm text-[#000]">{item.skillName}</h4>
                                            </div>
                                        </Number>
                                    ))}
                                </div>
                            
                        </div>
                        <motion.div 
                            initial={{opacity: 0, scale: 0}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 2}}
                            className='md:text-center'>
                            <h1 className='lg:text-[60px] md:my-12 my-2 uppercase text-[50px] font-bold leading-none'>PROJECTS</h1>
                            <p className=''>A selected set of projects i've built with individuals and teams. This is a mix of personal, collaborative and client owned projects.</p>
                        </motion.div>
                        <div className='flex my-16'>
                            <div className='basis-1/5'>
                                <Number>
                                    <span className='text-[30px]'>03</span>
                                </Number>
                            </div>
                            <div className='basis-4/5 mt-3'>
                                    <div>
                                        <Number>
                                            <img src={project1} alt="project1"/>
                                        </Number>
                                        <Number>
                                            <a href="" className='flex font-bold my-3 text-xl text-[#000]'>
                                                <span>Flower Imperials</span>
                                                <svg className='mx-2 mt-[5px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-hover:stroke-teal-300 lg:ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            </a>
                                        </Number>
                                        <Number>
                                            <p>An E-commerce website landing page for a flower shop called Flower Imperials.</p>
                                        </Number>
                                        <span className='grid grid-cols-3'>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">ReactJS</h4>
                                            </Number>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">NodeJS</h4>
                                            </Number>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Tailwind css</h4>
                                            </Number>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Axios</h4>
                                            </Number>
                                        </span>
                                    </div>
                                    <div className='mt-16'>
                                        <Number>
                                            <img src={project2} alt="project1"/>
                                        </Number>
                                        <Number>
                                            <a href="" className='flex font-bold my-3 text-xl text-[#000]'>
                                                <span>Wechora Foods</span>
                                                <svg className='mx-2 mt-[5px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-1 group-hover:stroke-teal-300 lg:ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            </a>
                                        </Number>
                                        <Number>
                                            <p>An E-commerce website landing page for a food and Nutrition company called Wechora Foods.</p>
                                        </Number>
                                        <span className='grid grid-cols-3'>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">ReactJS</h4>
                                            </Number>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">NodeJS</h4>
                                            </Number>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Mongoose</h4>
                                            </Number>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">ExpressJS</h4>
                                            </Number>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Tailwind css</h4>
                                            </Number>
                                            <Number>
                                                <h4 className="text-sm text-center mr-2 mt-2 border border-[#000] rounded-full px-2 text-[#000]">Axios</h4>
                                            </Number>
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

export default Hero;