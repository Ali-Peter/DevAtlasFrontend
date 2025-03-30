import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import about_cover from "../assets/about-cover.jpg";
import {tabs, hobbies} from "../components/motion"
import {Number, RevealPop} from '../components/motion'
import { projectItem } from '../components/contentFunction';

const About = () => {
  const latestProject = projectItem[0];
  const [activeTab, setActiveTab] = useState(0);
  const [interestTab, setInterestTab] = useState(0);
  const [interest, setInterest] = useState(hobbies);

  const handleTabClick = (index) => {
    setActiveTab(index);

    // Reorder tabs: move clicked tab to the front visually
    const updatedTabs = [
      tabs[index],
      ...tabs.slice(0, index),
      ...tabs.slice(index + 1),
    ];
    setTabs(updatedTabs);
  };

  const handleInterestClick = (index) => {
    setInterestTab(index);

    const updatedInterest = [
      interest[index],
      ...interest.slice(0, index),
      ...interest.slice(index + 1),
    ];
    setInterest(updatedInterest);
  };

  return (
    <>
      <Navbar />
      <div className="relative h-full overflow-hidden">
        <div className='md:pt-32 pt-16 py-24 mx-auto text-white relative z-2 md:h-screen bg-gray-900 custom-scrollbar'>
          <div>
            <div className='md:flex items-start md:px-16 px-5'>
              <span className='md:text-4xl sm:text-3xl text-2xl text-gray-400 md:py-4 py-8 md:basis-1/4'>
                <Number>
                  01/
                </Number>
              </span>
              <div className='md:basis-2/4'>
                <RevealPop>
                  <h1 className='lg:text-[140px] mt-16 uppercase text-[50px] font-bold leading-none font-PermanentMarker md:font-monica'>
                    Passionate creative developer
                  </h1>
                </RevealPop>
              </div>
            </div>
            <div className='md:flex justify-center items-center md:mt-32 mt-16 md:bg-black/50'>
              <div className='md:w-[55%] md:px-16 px-5'>
                <h4 className='text-2xl my-5'>
                  <Number>
                    A journey of curiosity and explorations
                  </Number>
                </h4>
                <p className='text-2xl my-5'>
                  <Number>
                    I'm a creative developer with years of experience in building products and appealing web experiences.
                    I've collaborated with individuals and teams to build experiences for SMEs and enterprises including
                    Wechora foods, Flowers imperial.
                  </Number>
                </p>
                <p className='text-2xl my-5'>
                  <Number>
                    Each project is an opportunity to learn new concepts across multiple domains including arts, maths, and
                    physics.
                  </Number>
                </p>
              </div>
              <div className='md:w-[45%] md:bg-black/70 md:flex-col flex justify-center items-center'>
                <RevealPop className="flex justify-center items-center">
                  <img src={about_cover} alt="ali" className='md:w-full w-[90%] md:h-[90vh] h-[40vh]' />
                </RevealPop>
              </div>
            </div>
          </div>

          <div className='md:mt-16 mt-16'>
            <div className='md:flex items-start md:px-16 px-5'>
              <span className='md:text-4xl sm:text-3xl text-2xl text-gray-400 py-4 md:basis-1/4'>
                <Number>
                  02/
                </Number>
              </span>
              <div className='md:basis-2/4'>
                <h1 className='lg:text-[140px] md:mt-10 uppercase text-[65px] font-bold leading-none font-PermanentMarker md:font-monica'>
                  <RevealPop>
                    Services
                  </RevealPop>
                </h1>
                <h1 className='lg:text-[140px] md:my-12 my-2 uppercase text-[65px] font-bold leading-none text-gray-400'>
                  PROS<sup className='md:text-[80px] text-[40px]'>03</sup>
                </h1>
              </div>
            </div>
            <div className='md:flex gap-5 mt-16 md:px-16 px-5'>
              <div className='md:flex md:basis-2/5 basis-2/5'>
                <div className='md:w-2 bg-black md:h-[25vh] h-[1vh]'></div>
                <div className='md:w-[50%] flex md:block'>
                  {tabs.map((item, index) => (
                    <div key={index} className="my-1 w-[100%] rounded-[2px] hover:bg-gray-400">
                      <button
                        onClick={() => handleTabClick(index)}
                        className={`md:p-2 px-2 md:w-[100%] text-gray-500 md:text-2xl text-sm text-start rounded-[2px] ${
                          activeTab === index ? 'md:border-l-4 md:border-b-0 border-b-4 border-orange-300 text-white bg-gray-500' : null
                        }`}
                      >
                        <Number>
                          {item.name}
                        </Number>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className='rounded-md mb-16 md:basis-2/5 basis-3/5'>
                <p className='mx-5 py-5 text-2xl'>
                  <Number>
                    {tabs[activeTab].content}
                  </Number>
                </p>
              </div>
            </div>
          </div>

          <div className='items-start md:mt-64 md:mb-32 md:px-0 px-5'>
            <Number>
              <span className='md:text-4xl sm:text-3xl text-2xl md:pl-16 text-gray-400 py-4'>03/</span>
            </Number>
            <div className="flex gap-8 justify-start items-center w-full md:mt-12 mt-12 md:pl-16 md:overflow-hidden">
              <div className="flex flex-nowrap">
                {interest.map((item, index) => (
                  <div key={index} className="text-gray-400 flex-shrink-0">
                    <button
                      onClick={() => handleInterestClick(index)}
                      className={`whitespace-nowrap lg:text-[140px] md:pl-12 pl-4 uppercase md:text-[75px] text-[30px] font-bold leading-none ${
                        ( index === 0) ? 'border-l-4 border-orange-300 text-black' : ''
                      }`}
                    >
                      <Number>
                        {item.name}
                      </Number>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className='md:flex md:flex-row flex flex-col-reverse  justify-center items-center md:mt-32'>
              <div className='md:w-[55%] md:px-16'>
                <h4 className='text-2xl md:mx-5 md:mt-5 mt-10'>
                  <Number>
                    {interest[activeTab].headText}
                  </Number>
                </h4>
                <p className='text-2xl md:mx-5 mt-5'>
                  <Number>
                    {interest[activeTab].description}
                  </Number>
                </p>
              </div>
              <div className='md:w-[45%]'>
                <RevealPop>
                  <img src={interest[0].content} alt="ali" className='md:w-full w-[95%] md:h-[90vh] h-[40vh] pt-5 md:pt-1' />
                </RevealPop>
              </div>
            </div>
          </div>
          <div className='md:flex items-start md:px-16 px-5 md:pt-1 pt-10'>
            <span className='md:text-4xl sm:text-3xl text-2xl text-gray-400 py-4 md:basis-1/4'>
              <Number>
                04/
              </Number>
            </span>
            <div className='md:basis-1/4'>
              <RevealPop>
                <h1 className='lg:text-[35px] my-2 uppercase text-[65px] font-bold leading-none font-PermanentMarker md:font-monica'>SEE LATEST PROJECT</h1>
              </RevealPop>     
            </div>
          </div>
          <div className='md:px-16 px-5'>
            <div className='md:flex md:gap-5 mt-16'>
              <div className='md:basis-2/4 md:h-[80vh] lg:hover:md:py-5 duration-10 lg:custom-scrollbar'>
                <a href="https://lagfloral.netlify.app/">
                  <span className='lg:text-[100px] md:my-12 my-2 uppercase text-[60px] font-bold leading-none underline font-PermanentMarker md:font-monica'>
                    <RevealPop>
                      {latestProject.companyName}
                    </RevealPop>
                  </span>
                </a>
                <p className='md:mr-64 md:ml-8 my-5 md:text-2xl text-sm md:mt-16 font-bold text-gray-400 uppercase'>
                  <Number>
                    {latestProject.companyContext}
                  </Number>
                </p>
              </div>
              <Number className="md:basis-2/4 md:flex md:justify-center md:ml-auto md:items-center md:h-[70vh] h-[50vh] mt-3">
                  <a href="https://lagfloral.netlify.app/">
                    <img src={latestProject.companyImg} alt="project" className="h-full w-auto max-w-full rounded-lg" />
                  </a>
              </Number>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
