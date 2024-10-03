import React from 'react';
import Navbar from '../components/navbar';

function About() {
  return (
    <>
      <Navbar />
      <div className='md:mt-64 my-24 md:px-16 px-5 mx-auto  text-[#000]'>
        <div className='md:flex items-start'>
          <span className='md:text-4xl sm:text-3xl text-2xl text-gray-400 py-4 md:basis-1/4'>01/</span>
          <div className='md:basis-2/4'>
            <h1 className='lg:text-[140px] md:my-12 my-5 uppercase text-[75px] font-bold leading-none'>Passionate creative developer</h1>
          </div>
          <div>
            <h4 className='text-2xl my-5'>A journey of curiosity and explorations</h4>
            <p className='text-2xl my-5'>I'm a creative developer with years of experience in building products and appealing web experiences. I've collaborated with individuals and teams to build experiences for SMEs and enterprises including Wechora foods, Flowers imperial</p>
            <p className='text-2xl my-5'>Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics.</p>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default About