import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CiHome, CiUser, CiMail } from 'react-icons/ci';
import { MdWork } from 'react-icons/md';
import { FaFilePdf } from 'react-icons/fa';
import gsap from 'gsap';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const location = useLocation();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    gsap.fromTo(".navbar", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "easeOut" });
  }, []);

  const menuItems = [
    { to: "/", icon: <CiHome size={24} />, label: "HOME" },
    { to: "/work", icon: <MdWork size={24} />, label: "WORK" },
    { to: "/about", icon: <CiUser size={24} />, label: "ABOUT" },
    { to: "/resume", icon: <FaFilePdf size={20} />, label: "RESUME" },
  ];

  return (
    <div className="navbar bg-gray-500 sticky top-0 py-3 px-4 shadow md:flex md:items-center md:justify-between z-10">
      <div className="flex justify-between items-center">
        <a href="/">
          <DotLottieReact
            src="https://lottie.host/5ed0404a-a5bd-40b3-a976-76c9edd7edbd/9OGCpDxZR3.lottie"
            loop
            autoplay
            className="w-32 h-10 hover:scale-125 duration-200"
          />
        </a>
        <span className="text-4xl cursor-pointer md:hidden block text-white" onClick={handleMenuClick}>
          <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute text-white bg-[#000] md:bg-black/0 w-full left-0 md:w-auto 
          md:py-0 py-4 md:pl-0 pl-8 h-screen md:h-auto md:opacity-100 transition-all ease-in-out duration-500 ${isOpen ? "top-[70px] opacity-100" : "top-[-400px] opacity-0"}`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`mx-4 md:mx-2 my-8 md:my-0 md:px-2 rounded-full flex gap-1 hover:text-gray-400 duration-500 ${
              location.pathname === item.to ? "underline decoration-gray-400 text-gray-400 decoration-[5px]" : ""
            }`}
          >
            {item.icon}
            <Link to={item.to} className="text-xl">{item.label}</Link>
          </li>
        ))}
        <button
          className={`bg-gray-600 font-[Poppins] duration-500 px-4 py-2 md:mx-2 hover:text-gray-400 rounded-full flex gap-1`}
        >
          <CiMail size={24} />
          <Link to="/contact">CONTACT</Link>
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
