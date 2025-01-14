import React, { useRef } from 'react';
import { useInView } from "framer-motion";
import {motion} from 'framer-motion'
import game from "../assets/game_ps.png";
import music from "../assets/music_headset.png";
import football from "../assets/fooball.png";

export const Number = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

export const RevealPop = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className={`flex mt-4 mx-auto ${className}`}
        >
            {children}
        </motion.div>
    );
};



//************************ DATA SECTION ********************************************************** */

export const tabs = [
  {
    name: "Front-end",
    content: "I plan, design, develop, test, and support scalable front-end web applications.",
  },
  {
    name: "Back-end",
    content: "Developed and deployed scalable backend solutions for various clients, including e-commerce platforms, content management systems, and custom APIs.",
  },
  {
    name: "Mobile Dev",
    content: "Design and develop cross-platform mobile applications, focusing on user-friendly interfaces and optimal performance using React Native",
  },
];


export const hobbies = [
  { name: "Game",
    content: game,
    headText: "A passion for the beautiful game",
    description: "Gaming is a major part of my leisure time. FIFA takes up most of my hours, but I also dive into intense sessions of Mortal Kombat 11, Call of Duty, and Marvel's Spider-Man.",
  },
  { name: "Music", 
    content: music,
    headText: "A taste for a wide variety of music",
    description: "Music is something I like, and I like learning more about it. I listen to many different kinds of music. Pop, electronic, indie soul, afro house, and afrobeats are frequently heard.",
  },
  { name: "Football", 
    content: football,
    headText: "A strong passion for football",
    description: "Football is something I’m deeply passionate about, whether I'm watching or playing. I love the thrill of the game, especially as a center forward. FC Bayern Munich is my team, and I enjoy following their progress on the field.",
  },
];