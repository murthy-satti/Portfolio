import { useRef, useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaWhatsapp, FaEnvelope, FaBars
} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiExpress, SiGit, SiPostman } from "react-icons/si";


import IMG from './assets/images/image.jpg';
import RESUME from './assets/images/resume.pdf'

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);
  const homepageRef = useRef(null);
  const educationpageRef = useRef(null);
  const skillspageRef = useRef(null);
  const projectspageRef = useRef()
  const contactpageRef = useRef(null);


  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setNavVisible(false);
    }
  };

  useEffect(() => {
    // Scroll to homepage on load
    if (homepageRef.current) {
      homepageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between bg-gradient-to-br from-gray-900 to-gray-800 fixed top-0 w-full backdrop-blur-md z-[1000] h-18 px-6 py-4 border-b border-white/10 shadow-lg">
        {/* Logo with Purple Text Shadow */}
        <div className="flex items-center">
          <h4
            className="text-white font-bold text-2xl 
      [text-shadow:0px_0px_14px_rgb(231,5,235)] tracking-wide"
          >
            Portfolio
          </h4>
        </div>

        {/* Navigation List */}
        <ul
          className={`${navVisible ? "block" : "hidden md:flex"
            } list-none flex-col md:flex-row absolute md:static right-0 left-0 md:left-auto md:right-[6%] top-[72px] bg-gray-800 p-3 md:bg-transparent md:p-0 rounded-b-[20px] md:rounded-none md:flex z-50 shadow-lg md:shadow-none border-x border-b md:border-0 border-white/10 md:gap-2`}
        >
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(homepageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block 
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(educationpageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Education</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(skillspageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Skills</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(projectspageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="text-center md:text-left my-1 md:my-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(contactpageRef);
              }}
              className="text-white no-underline text-lg md:text-lg font-bold px-5 py-3 block
        [text-shadow:0px_0px_14px_rgb(57,255,20)] transition-all duration-300 
        hover:bg-white/10 hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavVisible(!navVisible)}
          className="md:hidden mr-2 p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <FaBars className="text-2xl cursor-pointer text-white font-bold" />

        </button>
      </nav>

      {/* Homepage Section */}
      <section
        ref={homepageRef}
        className="min-h-screen flex md:flex-row flex-col-reverse items-center justify-between px-4 pt-20 md:pt-0 "
      >
        <div className="content md:ml-20 ml-0 mt-8 md:mt-20 text-center md:text-left md:w-1/2">
          <p className="text-xl md:text-2xl text-white font-light">
            Hello, I am{" "}
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text text-transparent">
              Murthy Satti
            </span>
          </p>
          <p
            id="typingeffect"
            className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mt-4"
          >
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0 mt-4 leading-relaxed backdrop-blur-sm backdrop-filter p-4 rounded-lg bg-white/5 border-purple-500/30 hover:border-purple-500/70">
            Aspiring to contribute my skills and expertise in a dynamic company,
            leveraging my technical knowledge to drive innovation and success
            while continuously learning and adapting to emerging technologies.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 mt-8">
            {/* Hire Me Button */}
            <button
              className="cursor-pointer px-6 py-3 rounded-xl text-lg font-semibold text-white 
        bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() =>
                (window.location.href = "mailto:murthysatti@gmail.com")
              }
            >
              Hire Me
            </button>
            <a
              href={RESUME}
              download
              className="group"
            >
              <button
                className="cursor-pointer px-4 py-3 rounded-xl text-lg font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/30 
          transition-all duration-300 transform hover:-translate-y-1 w-full flex items-center justify-center gap-2"

              >
                <span>Download Resume</span>
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <div
            id="redbox"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full flex justify-center items-center mx-auto mt-10 relative"
          >
            {/* Decorative ring around profile image */}
            <div className="absolute animate-spin-slow w-72 h-72 md:w-88 md:h-88 rounded-full border-2 border-dashed border-blue-400 opacity-30"></div>

            {/* Profile image */}
            <img
              src={IMG || "/placeholder.svg"}
              alt="Profile image"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-none relative z-10 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationpageRef} className="min-h-screen py-8">
        <div className="text-4xl flex justify-center bg-gradient-to-r from-blue-500 via-[rgb(231,5,235)] to-white bg-clip-text text-transparent pt-16 pb-8">
          <h1 className="font-bold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            Education
          </h1>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  Bachelor's Degree (2022-25)
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-3">
                  <h3 className="text-gray-200 font-medium">
                    Srinivasa Institute of Engineering and Technology, Cheyyeru
                  </h3>
                </div>
                <div className="flex items-center mb-2">
                  <span className=" text-white">
                    B.Tech in Mechanical Engineering
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">CGPA:</span>
                  <span className="ml-2 text-white font-semibold">8.9/10</span>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
               <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  Minor Course (2023-25)
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-2">
                  <h3 className="text-gray-200 font-medium">
                    Srinivasa Institute of Engineering and Technology, Cheyyeru
                  </h3>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-white">
                    Minor Course in Computer Science Engineering
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">Percentage:</span>
                  <span className="ml-2 text-white font-semibold">70%</span>
                </div>
              </div>
              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
             <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  Diploma (2019-22)
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-2">
                  <h3 className="text-gray-200 font-medium">
                    Srinivasa Institute of Engineering and Technology, Cheyyeru
                  </h3>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-white">
                    Diploma in Mechanical Engineering
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">Percentage:</span>
                  <span className="ml-2 text-white font-semibold">88.31%</span>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-900/80 rounded-xl p-6 text-white transition-transform duration-300 hover:transform  backdrop-blur-sm group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
              <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                  SSC (2019)
                </h2>
                <div className="border-l-2 border-pink-500 pl-4 py-1 mb-2">
                  <h3 className="text-gray-200 font-medium">
                    Sri Sai School, Muramalla, Andhra Pradesh
                  </h3>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300 font-medium">CGPA:</span>
                  <span className="ml-2 text-white font-semibold">10/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillspageRef} className="min-h-screen py-20">
        <div className="text-4xl flex justify-center bg-gradient-to-r from-blue-500 via-[rgb(231,5,235)] to-white bg-clip-text text-transparent pb-3">
          <h1 className="font-bold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            Skills
          </h1>
        </div>

        <div className=" mx-auto px-6">
          <div className="mb-3">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Front-end
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaHtml5 className="text-orange-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">HTML5</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaCss3Alt className="text-blue-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">CSS3</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiTailwindcss className="text-sky-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Tailwind CSS</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaJs className="text-yellow-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">JavaScript</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaReact className="text-blue-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">React.js</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiMui className="text-blue-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Material UI</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Back-end</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiExpress className="text-gray-300 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Express.js</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaNodeJs className="text-green-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Node.js</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaPython className="text-yellow-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Python</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiMongodb className="text-green-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">MongoDB</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiPostgresql className="text-blue-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">PostgreSQL</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold my-3 text-white">Other Tools </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 ">


              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiGit className="text-orange-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Git / GitHub</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiPostman className="text-red-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Postman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects section */}
      <section ref={projectspageRef} className="min-h-screen py-20">
        <div className="text-4xl flex justify-center bg-gradient-to-r from-blue-500 via-[rgb(231,5,235)] to-white bg-clip-text text-transparent pb-3">
          <h1 className="font-bold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 mb-6">
            Projects
          </h1>
        </div>

        <div className="mx-auto px-6 max-w-5xl space-y-10">
          {/* Project 1 */}
          <div className="relative rounded-xl">
            <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
            <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>
            <div className="relative z-10 p-5 rounded-lg text-white space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                VISION AI CHATBOT
              </h2>
              <p className="text-sm  text-gray-300">Jun 2025</p>
              <p className="text-sm md:text-base font-medium">
                Developed an AI chatbot using Google Gemini API to provide cleaner, accurate output with follow-up conversations.
                Implemented code highlighting, copy functionality, voice input (speech-to-text), input validation, dark/light mode
                toggle and clear chat confirmation. Designed a responsive, user-friendly interface across devices.               </p>
              <p className="text-sm md:text-base font-medium text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">Tech Stack: </span>
                React.js, Node.js, Tailwind CSS, GeminiAPI
              </p>
              <p className="text-sm md:text-base font-medium text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">GitHub Link: </span>
                <a
                  href="https://github.com/murthy-satti/Vision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-blue-400 transition-colors duration-200"
                >
                  github.com/murthy-satti/Vision
                </a>
              </p>


            </div>
          </div>

          {/* Project 2 */}
          <div className="relative rounded-xl">
            <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-400 opacity-70"></div>
            <div className="absolute inset-0.5 rounded-lg bg-gray-900"></div>
            <div className="relative z-10 p-5 rounded-lg text-white space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 mb-3">
                WEATHER APPLICATION
              </h2>
              <p className="text-sm text-gray-300">Nov 2024</p>
              <p className="text-sm md:text-base font-medium">
                A GUI-based weather app built with PyQt5 that fetches real-time weather data from the OpenWeatherMap API. It
                displays temperature, humidity, and conditions with emojis, ensuring a user-friendly interface with input validation
                and error handling.</p>
              <p className="text-sm md:text-base font-medium text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">Tech Stack: </span>
                Python, PyQt5, OpenWeatherMap API, QtCore, QtGui
              </p>
              <p className="text-sm md:text-base font-medium text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">GitHub Link: </span>
                <a
                  href="https://github.com/murthy-satti/WeatherApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-blue-400 transition-colors duration-200"
                >
                  github.com/murthy-satti/WeatherApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactpageRef} className="min-h-screen">

        <div className="min-h-screen flex justify-center items-center p-2">

          <div className="mt-10 h-auto py-6 w-full md:w-[65vw] border-2 border-white rounded-2xl bg-gradient-to-tl from-[hsl(0,100%,60%)] via-[hsl(320,95%,60%)] to-[hsl(180,100%,60%)] shadow-lg flex flex-col md:flex-row justify-around items-center gap-4">
            <div className="w-[90%] md:w-[35vw] h-auto bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600 rounded-2xl shadow-2xl p-4 relative overflow-hidden">
              <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4 relative">
                Personal Details
              </h2>

              <div className="text-white space-y-2 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    Name:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    S.S.M.R.K. Murthy
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    DOB:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    14/06/2004
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    Mobile:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    +91 9121723149
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    Email:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    murthysatti@gmail.com
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center p-1.5 hover:bg-gray-800 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-purple-300 w-20 text-sm md:text-base">
                    Address:
                  </span>
                  <span className="text-base md:text-lg text-white">
                    Amalapuram, Andhra Pradesh
                  </span>
                </div>
              </div>
            </div>

            <div className="icons text-4xl flex flex-row md:flex-col gap-6 md:gap-8 items-center my-4">
               <a
                href="tel:+919121723149"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaPhoneAlt className="cursor-pointer text-indigo-700   text-2xl md:text-3xl hover:text-blue-400" />
              </a>
              <a
                href="https://wa.me/9121723149"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaWhatsapp className="cursor-pointer text-green-500 text-3xl md:text-4xl hover:text-green-400" />

              </a>
              <a
                href="mailto:murthysatti@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaEnvelope className="cursor-pointer text-white text-3xl md:text-4xl hover:text-gray-300" />

              </a>
              <a
                href="https://www.linkedin.com/in/murthy-satti-309it/"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin className="cursor-pointer text-blue-600 text-3xl md:text-4xl hover:text-blue-400" />

              </a>

              <a
                href="https://github.com/Murthysatti"
                target="_blank"
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaGithub className="text-black text-3xl  md:text-4xl hover:text-gray-800" />

              </a>
             
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
