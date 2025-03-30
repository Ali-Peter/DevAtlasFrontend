import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import profile from './assets/profile.png';
import project1 from './assets/project_image_1.jpg';
import project2 from './assets/project_image_2.png';
import { pageTransition } from "./components/animations";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const resumeUrl = '/Ali-Ogochukwu-Peter.pdf';
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section {...pageTransition} className="container mx-auto p-6 text-center relative flex flex-col items-center">
        <DotLottieReact
            src="https://lottie.host/0a9a0441-ac5d-4c8d-b718-dd5bdeda0061/89dPHFuwUV.lottie"
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        />

        <img src={profile} alt="Ali Peter" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full border-4 border-yellow-400" />
        <h1 className="text-3xl sm:text-5xl font-bold mt-4">Ali Ogochukwu Peter</h1>
        <p className="mt-4 text-lg sm:text-xl">Full-Stack Developer | Backend Specialist</p>
        <p className="mt-2 text-gray-400">Building scalable, secure, and efficient backend systems.</p>
        <div className="mt-4 flex flex-wrap justify-center space-x-3 sm:space-x-4">
          <a href="https://github.com/Ali-Peter" target="_blank" className="text-yellow-400 hover:underline">GitHub</a>
          <a href="https://dev.to/ali-peter" target="_blank" className="text-yellow-400 hover:underline">Dev.to</a>
          <a href="https://x.com/ali_ogochu2581" target="_blank" className="text-yellow-400 hover:underline">Twitter</a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/work" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">View My Work</Link>
          <a href={resumeUrl} download className="border border-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition">Download Resume</a>
        </div>
      </motion.section>

      {/* Skills Overview */}
      <motion.section {...pageTransition} className="container mx-auto p-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">My Expertise</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
          {["HTML", "CSS", "React.js", "Tailwind CSS", "Node.js", "Python-Flask", "Express.js", "FastAPI", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Redis", "Celery"].map(skill => (
            <motion.div key={skill} whileHover={{ scale: 1.1 }} className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg text-center">
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section {...pageTransition} className="container mx-auto p-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
        <p className="text-gray-400 mt-2">A selected set of projects I've built with individuals and teams.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {[{ image: project1, link: "https://lagfloral.netlify.app/", title: "Flower Imperials", desc: "E-commerce landing page for a flower shop.", tech: ["ReactJS", "NodeJS", "Tailwind CSS", "Axios", "Flutterwave"] },
            { image: project2, link: "https://www.wechorafoods.com/", title: "Outbound AI Backend", desc: "AI-powered call automation solution for businesses.", tech: ["FastAPI", "PostgreSQL", "Celery", "Deepgram", "ElevenLabs"] }].map((project, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-gray-800 p-5 rounded-lg shadow-lg">
                <a href={project.link}>
                  <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
                </a>
                <a href={project.link} className="block font-bold my-3 text-xl text-yellow-400">
                  {project.title}
                </a>
                <p>{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {project.tech.map(tech => (
                    <span key={tech} className="border border-yellow-400 rounded-full px-2 py-1 text-sm">{tech}</span>
                  ))}
                </div>
              </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link to="/work" className="text-yellow-400 hover:underline">Visit my project hub</Link>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section {...pageTransition} className="container mx-auto p-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Let's Build Something Great</h2>
        <p className="text-gray-400 my-2">Have a project or opportunity? Let's connect.</p>
        <Link to="/contact" className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">Contact Me</Link>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Home;
