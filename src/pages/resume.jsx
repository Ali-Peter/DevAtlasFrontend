import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {Number, RevealPop} from '../components/motion'

const Resume = () => {
  const resumeUrl = '/MyResume.pdf'; // Update with the actual path to your resume file

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
      <div className='relative z-2 md:h-screen custom-scrollbar'>
      <div className="">
        <div className="md:pt-32 py-24 mx-auto text-[#000] relative z-2 custom-scrollbar">
          <div className="md:flex items-start md:px-16 px-5">
            <span className="md:text-4xl sm:text-3xl text-2xl text-gray-400 py-4 md:basis-1/4">
              <Number>
                01/
              </Number>
            </span>
            <div className="md:basis-2/4 md:flex md:flex-col md:justify-center md:items-center">
              <h1 className="lg:text-[50px] md:mt-16 uppercase text-[75px] font-bold leading-none text-center">
                <RevealPop>
                  Resume
                </RevealPop>
              </h1>
              <p className="text-[16px] mt-5">
                <Number>
                  Here’s a downloadable version of my professional resume. Feel free to check it out!
                </Number>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-16">
            <iframe
              src={resumeUrl}
              title="Resume"
              className="md:w-[80%] w-full md:h-[90vh] sm:h-[80vh] h-[60vh] border border-gray-300 shadow-md rounded-md"
            ></iframe>
          </div>
          <div className="flex justify-center items-center mt-8">
            <a
              href={resumeUrl}
              download
              className="text-white bg-black hover:bg-gray-800 px-6 py-3 rounded-md text-lg font-semibold transition duration-200 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
