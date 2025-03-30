import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { pageTransition } from "../components/animations";
import {Number, RevealPop} from '../components/motion'

const Resume = () => {
  const resumeUrl = '/Ali-Ogochukwu-Peter.pdf';
  const aliHngCertificateUrl = '/Ali-Peter-HNG.jpg';

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <motion.div {...pageTransition} className="container mx-auto p-8 text-center">
      <div className="md:flex items-start md:px-16 px-5">
            <span className="md:text-4xl sm:text-3xl text-2xl text-gray-400 py-4 md:basis-1/4">
              <Number>
                01/
              </Number>
            </span>
            <div className="md:basis-2/4 md:flex md:flex-col md:justify-center md:items-center">
              <h1 className="lg:text-[50px] md:mt-16 uppercase text-[65px] font-bold leading-none text-center font-PermanentMarker md:font-monica">
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
        
        {/* Resume Preview */}
        <div className="mt-6">
          <iframe
            src={resumeUrl}
            title="Resume"
            className="w-full md:w-3/4 h-[500px] mx-auto border border-gray-700 rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Download Button */}
        <div className="mt-6">
          <a 
            href={resumeUrl} 
            download 
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Certifications Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold">Certification</h2>
          <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg inline-block">
            <h3 className="text-xl font-bold">HNG Internship</h3>
            <p className="text-gray-400 mt-2">Successfully completed the HNG Internship program.</p>
            <a 
              href={aliHngCertificateUrl} // Ensure the certificate document is placed in the public folder
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-yellow-400 mt-4 inline-block hover:underline"
            >
              View Certificate
            </a>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Resume;
