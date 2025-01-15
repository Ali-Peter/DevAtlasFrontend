import React from 'react';
import Navbar from '../components/navbar';
import { projectItem } from '../components/contentFunction';
import Footer from '../components/footer';
import {Number, RevealPop} from '../components/motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Work() {
  return (
    <>
      <Navbar />
      <div className="relative h-full overflow-hidden">
        <DotLottieReact
            src="https://lottie.host/0a9a0441-ac5d-4c8d-b718-dd5bdeda0061/89dPHFuwUV.lottie"
            loop
            autoplay
            className="absolute inset-0 w-full h-full z-[-1] ml-[-10vw]"
        />
        <div className='md:pt-64 py-24 md:px-16 px-5 mx-auto text-[#000] relative z-2 md:h-screen custom-scrollbar'>
          <div className='md:flex items-start'>
            <span className='md:text-4xl sm:text-3xl text-2xl text-gray-400 py-4 md:basis-1/4'>
              <Number>
                01/
              </Number>
            </span>
            <div className='md:basis-2/4'>
              <RevealPop>
                <h1 className='lg:text-[140px] md:my-12 my-2 uppercase text-[65px] font-bold leading-none'>PROJECTS<sup className='md:text-[80px] text-[40px]'>02</sup></h1>
              </RevealPop>
              <h1 className='lg:text-[140px] md:my-12 my-2 uppercase text-[65px] font-bold leading-none text-gray-400'>
                <Number>
                  PROS<sup className='md:text-[80px] text-[40px]'>03</sup>
                </Number>
              </h1>
              <div className='md:flex my-16'>
                <h1 className='md:my-12 my-2 uppercase text-2xl font-bold leading-none md:basis-1/2'>
                  <Number>
                    PROJECTS
                  </Number>
                </h1>
                <p className='md:basis-1/2 md:mt-12 text-2xl'>
                  <Number>
                    A selected set of projects i've built with individuals and teams. This is a mix of personal, collaborative and client owned projects.
                  </Number>
                </p>
              </div>
            </div>
          </div>
          <div>
            {projectItem.map((item, index) => (
              <div key={index} className='md:flex md:gap-5 mt-16'>
                <div className='md:basis-2/4 md:h-[80vh] lg:hover:md:py-5 duration-10 lg:custom-scrollbar'>
                  <a href="">
                    <span className='lg:text-[100px] md:my-12 my-2 uppercase text-[60px] font-bold leading-none underline'>
                      <RevealPop>
                        {item.companyName}
                      </RevealPop>
                    </span>
                  </a>
                  <p className='md:mr-32 md:ml-16 my-5 md:text-2xl text-xl md:mt-24 font-bold text-gray-400 uppercase'>
                    <Number>
                      {item.companyContext}
                    </Number>
                  </p>
                </div>
                <Number className="md:basis-2/4 md:flex md:justify-center md:ml-auto md:items-center md:h-[70vh] h-[50vh] mt-3">
                    <img src={item.companyImg} alt="project" className="h-full w-auto max-w-full rounded-lg" />
                </Number>
              </div>
            ))}
          </div>
        </div>
        </div>
      <Footer/>
    </>
  )
}

export default Work;