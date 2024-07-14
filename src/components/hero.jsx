import React from 'react'
import profile from '../assets/profile.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
        <div className='my-16 px-4'>
            <div>
                <div className='flex flex-col'>
                    <img src={profile} alt=""  width="240" height="240"/>
                    <div className='mt-5'>
                        <h1 className='lg:text-[100px] md:my-12 my-2 uppercase text-[50px] text-white font-bold leading-none'>Ali</h1>
                        <h1 className='lg:text-[100px] md:my-12 my-2 uppercase text-[50px] text-white font-bold leading-none'>Ogochukwu</h1>
                        <h1 className='lg:text-[100px] md:my-12 my-2 uppercase text-[50px] text-white font-bold leading-none'>Peter</h1>
                    </div>
                    <div className='mt-2'>
                        <p className='font-bold text-[20px] text-white'>Full Stack Developer</p>
                    </div>
                </div>
            </div>
            <div className='uppercase my-16 text-white'>
                <span className='text-[30px]'>01</span>
                <div className='text-[25px]'>
                    <p className='my-5'>PASSIONATE ABOUT WEB TECHNOLOGIES. Working at the nexus of user-friendly interface design and creativity is something I adore doing. I DESIGN REMARKABLE ONLINE ENTERTAINMENTS.</p>
                    <p className='my-5'>IF I'M NOT DEVELOPING NEW WEB EXPERIENCES OR BUILDING NEW WEBSITES, I'M Probably Gaming or Watching Football.</p>
                </div>
                <Link className='text-[16px] hover:underline'>more about me and services</Link>
            </div>
        </div>
    </>
  )
}

export default Hero