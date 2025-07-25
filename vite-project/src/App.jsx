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
  FaWhatsapp, FaEnvelope, FaBars, FaPhoneAlt
} from "react-icons/fa";
import { SiMui, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiExpress, SiGit, SiPostman, SiVercel, SiFirebase } from "react-icons/si";
import { IoChevronBack, IoChevronForward, IoOpenOutline, IoCodeSlash, IoCalendarOutline, IoPricetagOutline } from 'react-icons/io5';



import IMG from './assets/images/image.jpg';
import vision from './assets/images/vision.png';
import promptmail from './assets/images/promptmail.png';
import weather from './assets/images/weather.png';
import stream from './assets/images/stream.png';
import RESUME from './assets/images/resume.pdf'

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);
  const homepageRef = useRef(null);
  const aboutpageRef = useRef(null);
  const skillspageRef = useRef(null);
  const projectspageRef = useRef()
  const contactpageRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "PROMPT MAIL",
      date: "Jul 2025",
      description: `• Built a secure AI email platform using Next.js, Google OAuth 2.0, Gemini API, and Nodemailer enabling users to generate and send emails via their own Gmail accounts.
• Implemented Google Sign-In, session handling, theme toggle support, and user profile updates to enable personalized email generation.
• Designed and implemented a mobile-friendly, accessible interface using Tailwind CSS with server-side rendering (SSR) in Next.js for improved SEO and performance.`,

      tags: "#Next.js #Tailwind CSS #MongoDB #GeminiAPI #OAuth 2.0",
      link: "https://promptmail.vercel.app",
      linkLabel: "Live Demo",
      image: promptmail,
    },
    {
      title: "VIDEO STREAM",
      date: "JuL 2025",
      description: `••	Developed a full-stack video streaming platform using Next.js and MongoDB with secure user authentication (login/register) and dynamic video metadata management.
• Implemented server-side rendering (SSR), infinite scroll and a fully responsive UI using Tailwind CSS to ensure fast load times and seamless user experience across all devices.
• Integrated Cloudinary and HLS.js for adaptive bitrate streaming, optimized video uploads, and interactive modals with category-based filtering.`,
      tags: " #Next.js #MongoDB #Tailwind CSS #Cloudinary #HLS.js",
      link: "https://stream-videos.vercel.app",
      linkLabel: "Live Demo",
      image: stream,
    },
    {
      title: "VISION AI CHATBOT",
      date: "Jun 2025",
      description: `• Built an AI chatbot using React.js and Node.js that leverages Gemini API for generating intelligent, follow-up-aware, and concise responses in real-time.
• Integrated features like dark/light theme toggle, voice input, and code output support to enhance user interaction and accessibility.
• Designed a clean, responsive UI with Tailwind CSS and deployed the chatbot using Render with optimized performance.`,

      tags: "#React.js #Node.js #Tailwind CSS #GeminiAPI",
      link: "https://visionaichatbot.onrender.com",
      linkLabel: "Live Demo",
      image: vision,
    },
    {
      title: "WEATHER APPLICATION",
      date: "Nov 2024",
      description: `• Developed a desktop weather application using Python and PyQt5 that fetches real-time weather data from the OpenWeatherMap API.
• Included dynamic UI updates, location-based weather lookup, and error handling for smooth user experience.
• Packaged the application for cross-platform use with a clean GUI and responsive layout for better readability.`,

      tags: "#Python #PyQt5 #OpenWeatherAPI",
      link: "https://github.com/murthy-satti/WeatherApp",
      linkLabel: "GitHub",
      image: weather,
    },
  ];

  const currentProjectData = projects[currentProject];
  const { title, description, tags, date, link, linkLabel, image } = currentProjectData;

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
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
    <main className="bg-gradient-to-br from-gray-900  to-blue-900 min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between bg-gradient-to-br from-[#101329] to-gray-900 fixed top-0 w-full backdrop-blur-md z-[1000] h-18 px-6 py-4 border-b border-white/10 shadow-lg">
        {/* Logo with Purple Text Shadow */}
        <div className="flex items-center">
          <h4
            className="text-white font-bold text-2xl 
      [text-shadow:0px_0px_8px_rgb(231,5,235)] tracking-wide"
          >
            Murthy Satti
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
              className="text-[#39ff14] no-underline text-lg md:text-lg font-bold px-5 py-3 block 
  transition-all duration-300  hover:bg-[#39ff14]/10  hover:rounded-lg relative overflow-hidden group"

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
                scrollToSection(aboutpageRef);
              }}
              className="text-[#39ff14] no-underline text-lg md:text-lg font-bold px-5 py-3 block 
  transition-all duration-300  hover:bg-[#39ff14]/10  hover:rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">About</span>
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
              className="text-[#39ff14] no-underline text-lg md:text-lg font-bold px-5 py-3 block 
  transition-all duration-300  hover:bg-[#39ff14]/10  hover:rounded-lg relative overflow-hidden group"
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
              className="text-[#39ff14] no-underline text-lg md:text-lg font-bold px-5 py-3 block 
  transition-all duration-300  hover:bg-[#39ff14]/10  hover:rounded-lg relative overflow-hidden group"
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
              className="text-[#39ff14] no-underline text-lg md:text-lg font-bold px-5 py-3 block 
  transition-all duration-300  hover:bg-[#39ff14]/10  hover:rounded-lg relative overflow-hidden group"
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

      {/* Home Section */}
      <section
        ref={homepageRef}
        className="min-h-full md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 pt-20 md:pt-0 gap-y-12"      >
        <div className="content md:ml-20 text-center md:text-left md:w-1/2 ">
          <p className="text-xl md:text-4xl text-white font-medium">
            Hi, I’m{" "}
            <span className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text text-transparent">
              Murthy Satti
            </span>
          </p>
          <p
            id="typingeffect"
            className="text-3xl sm:text-4xl md:text-7xl font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mt-4"
          >
            Full Stack Developer
          </p>


          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-6 mt-4 md:mt-8">
            <button
              className="cursor-pointer px-6 py-3 rounded-xl text-lg font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/30 
          transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => (window.location.href = "mailto:murthysatti@gmail.com")}
            >
              Hire Me
            </button>

            <a href={RESUME} download className="group">
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

        <div className="md:w-1/2 flex justify-center items-center mt-2">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex justify-center items-center relative">
            {/* Animated border only after image loads */}
            {loaded && (
              <div className="absolute animate-spin-slow w-67 h-67 md:w-83 md:h-83 rounded-full 
        bg-[conic-gradient(from_0deg,_#ff073a,_transparent,_#05faea,_transparent)] p-[3px]">
              </div>
            )}

            <div className="bg-transparent w-64 h-64 md:w-80 md:h-80">
              <img
                src={IMG || "/placeholder.svg"}
                alt="Profile"
                onLoad={() => setLoaded(true)}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutpageRef} className="min-h-screen py-20 px-2 md:px-4">
        <div className="text-4xl flex justify-center pb-6">
          <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
            About
          </h1>
        </div>

        <div className="flex justify-center text-white">
          <div className="w-full max-w-4xl bg-[#0f0f0f] rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            {/* Top bar with 3 colored dots */}
            <div className="flex items-center px-4 py-3 bg-[#1a1a1a] border-b-[1.5px] border-gray-300 sm:border-gray-300
">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Content area */}
           <div className="bg-white/5 p-6 sm:p-8 text-gray-300 text-base sm:text-lg leading-relaxed space-y-6 backdrop-blur-md rounded-b-2xl">
  <p>
    Hey, I’m <span className="font-bold text-white">Murthy Satti</span> — a passionate and self-motivated <span className="text-blue-400 font-semibold">Full Stack Developer</span> who enjoys solving real-world problems through efficient and scalable web solutions.
  </p>
  <p>
    I recently completed my graduation from <span className="text-white font-semibold">Srinivasa Institute of Engineering and Technology, Cheyyeru</span> with <span className="text-white font-semibold">83%</span>, majoring in Mechanical Engineering and minor in Computer Science Engineering.
  </p>
  <p>
    I gained <span className="text-white font-semibold">3 months of hands-on experience</span> as a <span className="text-blue-400 font-semibold">Junior Full Stack Developer</span> at <span className="text-white font-semibold">Busitron IT Solutions Pvt Ltd</span>, where I contributed to building real-time web applications using the MERN stack.
  </p>
  <p>
    I enjoy building user-friendly, high-performance applications and take pride in writing clean, maintainable code. I'm adaptable, team-oriented and always eager to learn and grow through collaboration.
  </p>
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
                <SiNextdotjs className="text-white text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Next.js</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiMui className="text-blue-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Material UI</p>
              </div>
            </div>
          </div>
          {/* Backend skills */}
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
          {/* Other Tools */}
          <div>
            <h3 className="text-2xl font-semibold my-3 text-white">Other Tools and platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 ">


              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiGit className="text-orange-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Git / GitHub</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiPostman className="text-red-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Postman</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/80 shadow-lg rounded-xl border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiVercel className="text-white text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Vercel</p>
              </div>


            </div>
          </div>
        </div>
      </section>


  {/* Projects Section */}
      <section ref={projectspageRef} className="min-h-screen py-20">

        {/* Title */}
        <div className="text-4xl flex justify-center pb-6">
          <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
            Projects
          </h1>
        </div>

        {/* Project Navigation */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-1 sm:px-4">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="hidden md:block group p-2 sm:p-3 rounded-full bg-black border border-white transition-all duration-300 hover:scale-110 flex-shrink-0"
          >
            <IoChevronBack className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Project Card */}
          <div className="w-full max-w-6xl bg-[#0f0f0f] rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden transition-all duration-500 hover:shadow-blue-500/10 hover:shadow-2xl hover:scale-[1.02]">
            {/* Top bar with 3 colored dots */}
            <div className="flex items-center px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-1 sm:mr-2"></span>
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mr-1 sm:mr-2"></span>
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
              </div>
              <div className="flex-1"></div>
              <div className="flex items-center space-x-1 sm:space-x-2 text-gray-200 text-xs sm:text-sm">
                <IoCalendarOutline className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">{date}</span>
                <span className="xs:hidden">{date?.split(' ')[0]}</span>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group p-2 sm:p-5 flex items-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 sm:h-64 lg:h-80 object-fit transition-transform duration-500 rounded-lg"
                />
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 p-4 sm:p-8 lg:p-5 space-y-3 sm:space-y-2 text-white">
                {/* Title */}
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 leading-tight">
                    {title}
                  </h2>
                </div>

                {/* Description with collapsible details */}
                <details className="group text-sm lg:text-base font-normal text-gray-300 rounded-lg">
                  <summary className="cursor-pointer list-none hover:text-white transition-colors duration-200">
                    <ul className="list-none space-y-2">
                      {description
                        .split("•")
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((line, index) => (
                          <li key={index} className={`flex items-start space-x-2 flex`}>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm lg:text-base">{line.trim()}</span>
                          </li>
                        ))}
                    </ul>

                    <div className="mt-3 flex items-center space-x-2 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      <span className="group-open:hidden">Show more details</span>
                      <span className="hidden group-open:inline">Show less</span>
                      <IoChevronForward className="w-3 h-3 group-open:rotate-90 transition-transform duration-200" />
                    </div>
                  </summary>

                  <div className="mt-4 max-h-24 sm:max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                    <ul className="list-none space-y-2 text-gray-200">
                      {description
                        .split("•")
                        .filter(Boolean)
                        .slice(2)
                        .map((line, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm lg:text-base">{line.trim()}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </details>

                {/* Tags */}
                <div className="flex items-center space-x-2">
                  <IoPricetagOutline className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <p className="text-xs sm:text-sm lg:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-green-400">
                    {tags}
                  </p>
                </div>

                {/* Link */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 p-3 sm:p-4 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-2">
                    <IoCodeSlash className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-transparent bg-clip-text font-semibold bg-gradient-to-r from-indigo-300 to-teal-300 text-sm sm:text-base">
                      {linkLabel}:
                    </span>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200 flex-1 min-w-0"
                  >
                    <span className="truncate text-xs sm:text-sm">{link.replace("https://", "")}</span>
                    <IoOpenOutline className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project indicators */}
            <div className="flex justify-center space-x-1.5 sm:space-x-2 py-3 sm:py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${index === currentProject
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="hidden md:block group p-2 sm:p-3 rounded-full bg-black border border-white transition-all duration-300 hover:scale-110 flex-shrink-0"
          >
            <IoChevronForward className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
        {/* Mobile Nav Buttons */}
        <div className="flex sm:hidden justify-center items-center gap-4 mt-4">
          <button
            onClick={prevProject}
            className="group p-2 rounded-full bg-black border border-white hover:scale-110 transition"
          >
            <IoChevronBack className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={nextProject}
            className="group p-2 rounded-full bg-black border border-white hover:scale-110 transition"
          >
            <IoChevronForward className="w-4 h-4 text-white" />
          </button>
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