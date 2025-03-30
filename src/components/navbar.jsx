import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger, CiHome, CiUser, CiMail } from "react-icons/ci";
import { MdWork } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };

  const navItems = [
    { to: "/", icon: <CiHome size={24} />, label: "Home" },
    { to: "/about", icon: <CiUser size={24} />, label: "About" },
    { to: "/work", icon: <MdWork size={24} />, label: "Work" },
    { to: "/resume", icon: <FaFilePdf size={20} />, label: "Resume" },
    { to: "/contact", icon: <CiMail size={24} />, label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <DotLottieReact
            src="https://lottie.host/5ed0404a-a5bd-40b3-a976-76c9edd7edbd/9OGCpDxZR3.lottie"
            loop autoplay
            className="w-32 h-10 hover:scale-125 duration-200"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-white text-lg hover:text-yellow-400 transition duration-300 ${
                    isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
                  }`
                }
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-3xl mr-4">
          {isOpen ? "X" : <CiMenuBurger />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 w-full h-screen bg-gray-800 flex flex-col space-y-4 py-6 px-8 shadow-lg md:hidden"
          >
            {navItems.map(({ to, icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-white text-lg hover:text-yellow-400 transition duration-300 ${
                      isActive ? "text-yellow-400" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {icon}
                  {label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
