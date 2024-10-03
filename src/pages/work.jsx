import React from 'react';
import Navbar from '../components/navbar';
import { projectItem } from '../components/contentFunction';
import Footer from '../components/footer';

function Work() {
  return (
    <>
      <Navbar />
      <div className='md:mt-64 my-24 md:px-16 px-5 mx-auto  text-[#000]'>
        <div className='md:flex items-start'>
          <span className='md:text-4xl sm:text-3xl text-2xl text-gray-400 py-4 md:basis-1/4'>01/</span>
          <div className='md:basis-2/4'>
            <h1 className='lg:text-[140px] md:my-12 my-2 uppercase text-[75px] font-bold leading-none'>PROJECTS<sup className='md:text-[80px] text-[45px]'>02</sup></h1>
            <h1 className='lg:text-[140px] md:my-12 my-2 uppercase text-[80px] font-bold leading-none text-gray-400'>PROS<sup className='md:text-[80px] text-[45px]'>03</sup></h1>
            <div className='md:flex my-16'>
              <h1 className='md:my-12 my-2 uppercase text-2xl font-bold leading-none md:basis-1/2'>PROJECTS</h1>
              <p className='md:basis-1/2 md:mt-12 text-2xl'>A selected set of projects i've built with individuals and teams. This is a mix of personal, collaborative and client owned projects.</p>
            </div>
          </div>
        </div>
        <div>
          {projectItem.map((item, index) => (
            <div key={index} className='md:flex md:gap-5 mt-16'>
              <div className='md:basis-2/4 md:h-[80vh] h-[40vh] hover:md:py-32 hover:py-5 duration-10 custom-scrollbar'>
                <a href=""><span className='lg:text-[120px] md:my-12 my-2 uppercase text-[70px] font-bold leading-none underline'>{item.companyName}</span></a>
                <p className='md:mr-32 md:ml-16 my-5 text-2xl md:mt-24 font-bold text-gray-400 uppercase'>{item.companyContext}</p>
              </div>
              <div className="md:basis-2/4 md:flex md:justify-center md:ml-auto md:items-center md:h-[70vh] h-[50vh] mt-3">
                <img src={item.companyImg} alt="project" className="h-full w-auto max-w-full rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Work