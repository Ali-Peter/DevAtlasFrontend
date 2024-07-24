import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <div className='bg-black/70 py-3 px-4 shadow md:flex md:item-center md:justify-between relative z-10'>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-3xl text-white'>ALI PETER</span>
                <span className='text-4xl cursor-pointer md:hidden block text-white'>
                    <ion-icon name={isOpen ? 'close' : 'menu'} onClick={handleMenuClick}></ion-icon>
                </span>
            </div>
            <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute
                bg-black/70 md:bg-black/0 w-full left-0 md:w-auto md:py-0 py-4 
                md:pl-0 pl-8 h-screen md:h-auto md:opacity-100 transition-all ease-in duration-500
                ${isOpen ? 'top-[70px] opacity-100' : 'top-[-400px] opacity-0'}`}>
                <li className='mx-4 mt-10 md:my-0'>
                    <Link to="/" className="text-xl text-white hover:text-gray-500 duration-500">HOME</Link>
                </li>
                <li className='mx-4 my-8 md:my-0'>
                    <Link to="/work" className="text-xl text-white hover:text-gray-500 duration-500">WORK</Link>
                </li>
                <li className='mx-4 my-8 md:my-0'>
                    <Link to="/blog" className="text-xl text-white hover:text-gray-500 duration-500">BLOGS</Link>
                </li>
                <li className='mx-4 my-8 md:my-0'>
                    <Link to="/about" className="text-xl text-white hover:text-gray-500 duration-500">ABOUT</Link>
                </li>

                <button className='bg-gray-500 font-[Poppins] duration-500 px-4 py-2 md:mx-2 hover:bg-gray-900 text-white rounded-full'>
                    <Link to="/contact">CONTACT</Link>
                </button>
            </ul>
        </div>
    </>
  )
}

export default Navbar;