import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { pageTransition } from "./components/animations";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaHtml5, FaReact, FaNodeJs, FaPython, FaDocker, FaDatabase, FaGitAlt, FaCode, FaFileAlt, FaGithub, FaDev, FaTwitter, FaUsers, FaBookOpen, FaChalkboardTeacher, FaProjectDiagram, FaSearch } from "react-icons/fa";
import { useState } from "react";
import CountUp from "react-countup";
import bgImage from './assets/heroImage.png';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const skills = [
    { name: "HTML5 & CSS3", icon: <FaHtml5 className="text-txtColorBlue text-3xl" />, desc: "Build responsive and modern web layouts." },
    { name: "React.js & Tailwind CSS", icon: <FaReact className="text-txtColorBlue text-3xl" />, desc: "Create dynamic UIs with modern styling." },
    { name: "Node.js (Express.js)", icon: <FaNodeJs className="text-txtColorBlue text-3xl" />, desc: "Develop scalable backend APIs." },
    { name: "C# (WinForms)", icon: <FaCode className="text-txtColorBlue text-3xl" />, desc: "Master desktop app development." },
    { name: "Python (FastAPI, Flask)", icon: <FaPython className="text-txtColorBlue text-3xl" />, desc: "Build fast, efficient APIs." },
    { name: "RESTful APIs", icon: <FaDatabase className="text-txtColorBlue text-3xl" />, desc: "Design robust API integrations." },
    { name: "SQL Server & PostgreSQL", icon: <FaDatabase className="text-txtColorBlue text-3xl" />, desc: "Manage relational databases." },
    { name: "MongoDB & Redis", icon: <FaDatabase className="text-txtColorBlue text-3xl" />, desc: "Work with NoSQL and caching." },
    { name: "Docker & Git", icon: <FaDocker className="text-txtColorBlue text-3xl" />, desc: "Containerize and version control." },
    { name: "Crystal Reports", icon: <FaFileAlt className="text-txtColorBlue text-3xl" />, desc: "Design professional reports." },
  ];

  const faqs = [
    { question: "Are the courses really free?", answer: "Yes, all courses are free for self-paced learning. Subscribe for mentoring." },
    { question: "What does mentoring include?", answer: "One-on-one sessions, code reviews, and project guidance." },
    { question: "How do I get started?", answer: "Sign up, browse courses, and start learning at your own pace!" },
  ];

  const stats = [
    { label: "Students Enrolled", value: 10000, icon: <FaUsers className="text-txtColorBlue text-4xl mb-3" /> },
    { label: "Courses Available", value: 50, icon: <FaBookOpen className="text-txtColorBlue text-4xl mb-3" /> },
    { label: "Mentoring Sessions", value: 500, icon: <FaChalkboardTeacher className="text-txtColorBlue text-4xl mb-3" /> },
    { label: "Projects Built", value: 2000, icon: <FaProjectDiagram className="text-txtColorBlue text-4xl mb-3" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bgColorWhite text-gray-50 font-Flier antialiased">
      <Navbar />
      
      {/* Hero Section - Split Layout with Full Background Image */}
      <motion.section 
        {...pageTransition} 
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-cover bg-center min-h-[80vh] flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})`}}
      >
        <div className="absolute inset-0 bg-opacity-50" />
        <div className="relative w-full md:w-1/2 md:mr-auto bg-bgColorWhite bg-opacity-90 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl z-10 space-y-6">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent text-txtColorBlue"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-txtColorYellow">Welcome to</p> DevAtlas Coding Academy
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-txtColorBlue font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Master Full-Stack Development with C#
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-txtColorBlue max-w-prose leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Free, self-paced courses on web dev, backend systems, and more. Subscribe for personalized mentoring.
          </motion.p>
          <motion.div 
            className="mt-6 w-full max-w-lg relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="Search for courses, skills, or topics..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full bg-bgColorBlue border border-teal-400 text-txtColorWhite focus:outline-none focus:border-teal-300 shadow-lg transition-all duration-300 text-base sm:text-lg"
            />
          </motion.div>
          <motion.div 
            className="mt-6 w-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <iframe 
              width="100%" 
              className="w-full aspect-video rounded-2xl shadow-2xl border border-blue-700"
              src="https://www.youtube.com/embed/t5IfIYfB6MU" // Replace with your video ID
              title="Discover Ali's Coding Academy" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </motion.div>
          <motion.div 
            className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="https://github.com/Ali-Peter" target="_blank" className="flex items-center text-txtColorBlue hover:text-cyan-200 transition duration-300 text-lg font-medium">
              <FaGithub className="mr-2 text-2xl" /> GitHub
            </a>
            <a href="https://dev.to/ali-peter" target="_blank" className="flex items-center text-txtColorBlue hover:text-cyan-200 transition duration-300 text-lg font-medium">
              <FaDev className="mr-2 text-2xl" /> Dev.to
            </a>
            <a href="https://x.com/ali_ogochu2581" target="_blank" className="flex items-center text-txtColorBlue hover:text-cyan-200 transition duration-300 text-lg font-medium">
              <FaTwitter className="mr-2 text-2xl" /> Twitter
            </a>
          </motion.div>
          <motion.div 
            className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/courses" className="bg-bgColorBlue text-gray-50 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg">
              Browse Free Courses
            </Link>
            <Link to="/subscribe" className="border border-bgColorBlue px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-gray-50 transition duration-300 shadow-lg hover:shadow-xl text-txtColorBlue sm:text-lg">
              Subscribe for Mentoring
            </Link>
          </motion.div>
          <motion.div 
            className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link to="/login" className="bg-bgColorBlue text-gray-50 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg">
              Log In
            </Link>
            <Link to="/signup" className="border border-bgColorBlue px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-gray-50 transition duration-300 shadow-lg hover:shadow-xl text-txtColorBlue sm:text-lg">
              Sign Up
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section - Grid Layout */}
      <motion.section 
        {...pageTransition} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-bgColorWhite rounded-2xl shadow-2xl my-12"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 bg-bgColorWhite rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-blue-700"
          >
            {stat.icon}
            <h3 className="text-4xl font-bold text-txtColorBlue">
              <CountUp end={stat.value} duration={2.5} />+
            </h3>
            <p className="text-txtColorBlue mt-2 text-lg font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Skills You Can Learn - Icon-Based with Tooltips */}
      <motion.section {...pageTransition} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-txtColorYellow font-heading">Skills You Can Learn</h2>
        <p className="text-txtColorBlue mt-4 text-lg sm:text-xl max-w-2xl mx-auto">Explore our free self-paced courses on these essential technologies.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              whileHover={{ scale: 1.05 }} 
              className="bg-bgColorWhite border border-bgColorBlue p-4 sm:p-6 rounded-xl shadow-lg flex flex-col items-center gap-3 relative group hover:bg-hoverYellow transition duration-300"
            >
              {skill.icon}
              <span className="text-base sm:text-lg font-medium text-txtColorBlue">{skill.name}</span>
              <span className="absolute hidden group-hover:block bg-hoverYellow p-3 rounded-lg text-sm text-gray-200 -top-12 left-1/2 transform -translate-x-1/2 w-48 shadow-md">
                {skill.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Courses Section */}
      <motion.section {...pageTransition} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center bg-bgColorWhite">
        <h2 className="text-3xl sm:text-4xl font-bold text-txtColorBlue font-heading">Featured Courses</h2>
        <p className="text-txtColorBlue mt-4 text-lg sm:text-xl max-w-2xl mx-auto">Discover our top free self-paced courses. Enroll today and upgrade to mentoring for expert guidance.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { 
              image: "https://images.pexels.com/photos/5076529/pexels-photo-5076529.jpeg", 
              link: "/courses/ecommerce-sites", 
              title: "Building E-Commerce Sites", 
              desc: "Master creating responsive e-commerce landing pages with seamless payment integrations.", 
              tech: ["ReactJS", "NodeJS", "Tailwind CSS", "Axios", "Flutterwave"],
              level: "Intermediate",
              duration: "4 weeks",
              rating: 4.8,
              enrolled: 1200
            },
            { 
              image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg", 
              link: "/courses/ai-backend-systems", 
              title: "AI-Powered Backend Systems", 
              desc: "Learn to build scalable backends with AI-driven automation and integrations.", 
              tech: ["FastAPI", "PostgreSQL", "Celery", "Deepgram", "ElevenLabs"],
              level: "Advanced",
              duration: "6 weeks",
              rating: 4.9,
              enrolled: 850
            },
            { 
              image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg", 
              link: "/courses/csharp-winforms", 
              title: "C# Desktop Apps with WinForms", 
              desc: "Develop robust desktop applications using C# and WinForms for real-world projects.", 
              tech: ["C#", "WinForms", "SQL Server", "Crystal Reports"],
              level: "Beginner",
              duration: "5 weeks",
              rating: 4.7,
              enrolled: 1500
            },
            { 
              image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg", 
              link: "/courses/python-apis", 
              title: "Python APIs with FastAPI & Flask", 
              desc: "Create efficient, secure APIs using Python frameworks for backend development.", 
              tech: ["Python", "FastAPI", "Flask", "PostgreSQL", "Redis"],
              level: "Intermediate",
              duration: "4 weeks",
              rating: 4.6,
              enrolled: 1100
            },
          ].map((course, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-bgColorWhite p-5 border border-bgColorBlue rounded-xl shadow-lg relative">
              <span className="absolute top-2 right-2 bg-txtColorYellow text-gray-50 px-2 py-1 rounded-full text-xs font-bold">Free</span>
              <Link to={course.link}>
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg" />
              </Link>
              <Link to={course.link} className="block font-bold my-3 text-xl text-txtColorBlue">
                {course.title}
              </Link>
              <p className="text-txtColorYellow">{course.desc}</p>
              <div className="mt-4 text-sm text-gray-400 flex justify-between">
                <span className="text-txtColorBlue">Level: {course.level}</span>
                <span className="text-txtColorBlue">Duration: {course.duration}</span>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="flex text-cyan-400">
                  {Array(Math.floor(course.rating)).fill('⭐').map((star, i) => <span key={i}>{star}</span>)}
                  <span className="text-txtColorBlue ml-1">({course.rating})</span>
                </div>
                <span className="text-txtColorBlue">{course.enrolled} enrolled</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {course.tech.map(tech => (
                  <span key={tech} className="border border-bgColorBlue rounded-full px-2 py-1 text-sm text-txtColorBlue">{tech}</span>
                ))}
              </div>
              <Link to={course.link} className="mt-4 block bg-bgColorBlue text-gray-50 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition duration-300 text-center">
                Enroll Now
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 py-5 bg-bgColorDark">
          <Link to="/courses" className="text-txtColorBlue hover:text-cyan-300 font-semibold transition duration-300">Explore All Courses →</Link>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section {...pageTransition} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-txtColorBlue font-heading">What Our Students Say</h2>
        <p className="text-gray-200 mt-4 text-lg sm:text-xl max-w-2xl mx-auto">Hear from learners who've transformed their skills.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            { 
              quote: "Ali's C# course was a game-changer for my career!", 
              author: "Jane Doe", 
              rating: 5, 
              image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
            },
            { 
              quote: "The mentoring sessions helped me build real projects.", 
              author: "John Smith", 
              rating: 4, 
              image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" 
            },
            { 
              quote: "Easy-to-follow courses, even for beginners!", 
              author: "Sarah Lee", 
              rating: 5, 
              image: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg" 
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="p-5 rounded-xl shadow-lg border border-bgColorBlue"
            >
              <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 mx-auto rounded-full object-cover" />
              <p className="mt-4 italic text-txtColorBlue">"{testimonial.quote}"</p>
              <p className="mt-2 font-bold text-black">{testimonial.author}</p>
              <div className="flex justify-center mt-2 text-cyan-400">{Array(testimonial.rating).fill('⭐').join('')}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Blog Preview Section */}
      <motion.section {...pageTransition} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-txtColorBlue font-heading">Latest Resources</h2>
        <p className="text-txtColorBlue mt-4 text-lg sm:text-xl max-w-2xl mx-auto">Check out our latest tips and tutorials.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Getting Started with C# in 2025", excerpt: "Beginner-friendly tips to master C# basics.", link: "/blog/csharp-guide" },
            { title: "Building APIs with FastAPI", excerpt: "Create fast and scalable APIs with Python.", link: "/blog/fastapi-guide" },
            { title: "Responsive Design with Tailwind", excerpt: "Learn to style modern UIs efficiently.", link: "/blog/tailwind-guide" }
          ].map((post, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="border border-bgColorBlue p-5 rounded-xl shadow-lg">
              <Link to={post.link} className="text-txtColorBlue font-bold text-lg">{post.title}</Link>
              <p className="text-txtColorBlue mt-2">{post.excerpt}</p>
              <Link to={post.link} className="text-txtColorYellow bg-bgColorBlue px-5 py-1 rounded-lg hover:text-cyan-300 mt-2 inline-block transition duration-300">Read More</Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Accordion Section */}
      <motion.section {...pageTransition} className="border border-black mx-auto md:mx-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-txtColorBlue font-heading">Frequently Asked Questions</h2>
        <p className="text-txtColorBlue mt-4 text-lg sm:text-xl max-w-2xl mx-auto">Answers to common queries about our platform.</p>
        <div className="mt-8 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-bgColorBlue">
              <button 
                className="w-full text-left py-4 flex justify-between items-center"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <span className="text-txtColorBlue">{activeFaq === index ? '−' : '+'}</span>
              </button>
              {activeFaq === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  className="text-black p-4"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Subscription Call to Action */}
      <motion.section {...pageTransition} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center bg-bgColorWhite shadow-2xl my-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-txtColorBlue font-heading">Unlock Personalized Mentoring</h2>
        <p className="text-txtColorBlue mt-4 text-lg sm:text-xl max-w-2xl mx-auto">Learn for free or subscribe for one-on-one training, code reviews, and project guidance from Ali Ogochukwu Peter.</p>
        <Link to="/subscribe" className="mt-6 inline-block bg-bgColorBlue text-gray-50 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-xl">Subscribe Now</Link>
      </motion.section>

      {/* Final Call to Action */}
      <motion.section {...pageTransition} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-txtColorBlue font-heading">Ready to Start Learning?</h2>
        <p className="text-txtColorBlue mt-4 text-lg sm:text-xl max-w-2xl mx-auto">Sign up today and begin your journey.</p>
        <Link to="/signup" className="mt-6 inline-block bg-bgColorBlue text-gray-50 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-xl">Get Started for Free</Link>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Home;