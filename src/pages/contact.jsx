import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {Number, RevealPop} from '../components/motion'
import {motion} from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfolio-server-side-kmi7.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setError(null);
      } else {
        setError("Failed to send your message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please check your connection and try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative h-full overflow-hidden">
      <DotLottieReact
        src="https://lottie.host/0a9a0441-ac5d-4c8d-b718-dd5bdeda0061/89dPHFuwUV.lottie"
        loop
        autoplay
        className="absolute inset-0 w-full h-full z-[-1] ml-[-10vw]"
      />
      <div className="md:pt-32 py-24 mx-auto text-[#000] relative z-2 md:h-screen custom-scrollbar">
        <div className="md:flex flex-col items-center justify-center md:px-16 px-5">
          <div className="">
            <h1 className="lg:text-[50px] md:mt-16 uppercase text-[60px] font-bold leading-none">
              <RevealPop>
                CONTACT US
              </RevealPop>
            </h1>
          </div>
          <h1 className="text-[16px] md:mt-16 font-bold leading-none">
            <Number>
              We're here to help. If you have any questions or suggestions, feel
              free to reach out. Our team is ready to respond to your inquiries as
              quickly as possible.
            </Number>
          </h1>
        </div>

        <div className="md:flex justify-center items-center mt-16">
          <div className="md:w-[55%] md:px-16 px-5">
            <h4 className="text-2xl my-5 text-gray-400">
              <Number>
                We'd love to hear from you
              </Number>
            </h4>
            {submitted ? (
              <div className="text-center text-xl text-green-500">
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="my-5">
                  <label htmlFor="name" className="block text-xl text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-black"
                    required
                  />
                </div>
                <div className="my-5">
                  <label htmlFor="email" className="block text-xl text-gray-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-black"
                    required
                  />
                </div>
                <div className="my-5">
                  <label
                    htmlFor="message"
                    className="block text-xl text-gray-400"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-black"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-200"
                >
                  Send Message
                </button>
                {error && (
                  <p className="mt-4 text-red-500 text-center">{error}</p>
                )}
              </form>
            )}
          </div>
          <div className="md:w-[45%] bg-black/70">
            <DotLottieReact
              src="https://lottie.host/9e562133-17f3-4af6-a08f-11da94317be8/IsoS5qpSwe.lottie"
              loop
              autoplay
              className="bg-[#e1dfdd]"
            />
          </div>
        </div>
        <div className="md:mt-32 mt-16 text-center">
          <div className="flex justify-center gap-10 mt-8">
            <motion.div
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 2}}
              className='flex mt-4 mx-auto'
            >
              <a class="mr-7 hover:scale-105 duration-200 hover:text-gray-500" href="" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
              <a class="mr-7 hover:scale-105 duration-200 hover:text-gray-500" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7"><path d="M100.28 448H7.4V165.4h92.88zm-46.44-317a53.7 53.7 0 01-.3-107.4 53.7 53.7 0 0153.5 53.7 53.7 53.7 0 01-53.2 53.7zM447.83 448H354.8V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.2-2.3 5.5-2.9 13.2-2.9 21v151.8h-93V165.4h89.3v38.5h1.3c12.4-20 34.4-48.4 83.7-48.4 61 0 106.7 39.8 106.7 125.2z" /></svg></a>
              <a class="mr-7 hover:scale-105 duration-200 hover:text-gray-500" href="" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
              <a class="mr-7 hover:scale-105 duration-200 hover:text-gray-500" href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-5 w-5 stroke-gray-300 lg:h-7 lg:w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg></a>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact
