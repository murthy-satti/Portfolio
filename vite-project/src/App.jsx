import { useRef, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
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
import { SiMui, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiExpress, SiGit, SiPostman, SiVercel, SiFirebase, SiTypescript } from "react-icons/si";
import { IoChevronBack, IoChevronForward, IoOpenOutline, IoCodeSlash, IoCalendarOutline, IoPricetagOutline } from 'react-icons/io5';



import IMG from './assets/images/image.jpg';
import vision from './assets/images/vision.png';
import promptmail from './assets/images/prompt.png';
import weather from './assets/images/weather.png';
import stream from './assets/images/videostream.png';
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit with Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = {
      access_key: "ae9cc876-6259-48b4-af28-cb12ea4740b0",
      subject: `New Message from Portfolio`,
      Name: `${formData.firstName} ${formData.lastName}`,
      Email: formData.email,
      PhoneNumber: formData.phone,
      Message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(" Message sent successfully!", { icon: "✅" });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        toast.error(` Failed: ${data.message || "Something went wrong"}`, { icon: "❌" });
      }
    } catch (error) {
      toast.error(" Error sending message.", { icon: "❌" });
    } finally {
      setLoading(false);
    }
  };


  const projects = [
    {
      title: "PROMPT MAIL",
      date: "Jul 2025",
      description: `• Developed PromptMail, a secure AI-powered email platform using Next.js  enabling users to generate and send personalized emails via their Gmail accounts.  
• Integrated template-based email generation, Google Sign-In, single-user OAuth, session handling, file attachments, theme toggle (dark/light), and user data collection for tailored email content.  
• Built a responsive, accessible interface with Tailwind CSS and server-side rendering (SSR) in Next.js for optimized performance, SEO, and smooth mobile/desktop experiences.`
      ,
      tags: "#Next.js #Tailwind CSS #MongoDB #GeminiAPI #OAuth 2.0",
      link: "https://promptmail.vercel.app",
      linkLabel: "Live Demo",
      image: promptmail,
    },
    {
      title: "VIDEO STREAM",
      date: "Jul 2025",
      description: `• Developed a full-stack video streaming platform using Next.js and MongoDB with secure user authentication and dynamic video metadata management.  
• Implemented SSR, infinite scroll, and a fully responsive UI with Tailwind CSS for fast load times and seamless experience across devices.  
• Integrated Cloudinary and HLS.js for adaptive bitrate streaming, optimized uploads, and interactive category-based video filtering.`,
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
      description: `• Developed a desktop weather application using Python and PyQt5 that fetches real-time weather da different placesta for from the OpenWeatherMap API.
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

  // Inside your component
  const handleScrollControl = (e, action) => {
    const scrollContainer = e.currentTarget;
    if (action === "pause") {
      scrollContainer.style.animationPlayState = "paused";
    } else if (action === "resume") {
      scrollContainer.style.animationPlayState = "running";
    }
  };


  return (
    <main className="bg-gradient-to-br from-slate-800 via-gray-800  to-blue-950 ">
      {/* Navigation */}
      <header className="flex items-center justify-between bg-gradient-to-br from-[#181818] to-gray-900 fixed top-0 w-full backdrop-blur-md z-[1000] h-18 px-6 py-4 border-b border-white/10 shadow-lg">
        {/* Logo with Purple Text Shadow */}
        <div className="flex items-center gap-2 ">
<img
  src="/img.png"
  alt="Logo"
  className="h-12  w-12 font-bold rounded-full object-cover"
/>


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
          className="md:hidden  p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <FaBars className="text-2xl cursor-pointer text-white font-bold" />

        </button>
      </header>

      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#d1fae5", // Tailwind green-100
              color: "#065f46",      // Tailwind green-900
              border: "1px solid #6ee7b7", // Tailwind green-300
              fontWeight: 500,
            },
            iconTheme: {
              primary: "#10b981", // Tailwind green-500
              secondary: "#d1fae5",
            },
          },
          error: {
            style: {
              background: "#fee2e2", // Tailwind red-100
              color: "#991b1b",      // Tailwind red-900
              border: "1px solid #fca5a5", // Tailwind red-300
              fontWeight: 500,
            },
            iconTheme: {
              primary: "#ef4444", // Tailwind red-500
              secondary: "#fee2e2",
            },
          },
        }}
      />

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
          bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30 
          transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => (window.location.href = "mailto:murthysatti@gmail.com")}
            >
              Hire Me
            </button>

            <a href={RESUME} download className="group">
              <button
                className="cursor-pointer px-4 py-3 rounded-xl text-lg font-semibold text-white 
            bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-lg hover:shadow-purple-500/30 
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


            <img
              src={IMG || "/placeholder.svg"}
              alt="Profile"
              onLoad={() => setLoaded(true)}
              className="w-66 h-66 md:w-80 md:h-80 rounded-full object-cover shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutpageRef} className="min-h-screen py-20 px-1 md:px-4">
        <div className="text-4xl flex justify-center pb-6">
          <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
            About
          </h1>
        </div>

        <div className="flex justify-center text-white">
          <div className="w-full max-w-4xl bg-[#232323] rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            {/* Top bar with 3 colored dots */}
            <div className="flex items-center px-4 py-3 bg-[#181818] border-b-[1.5px] border-gray-300 sm:border-gray-300
">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Content area */}
            <div className="h-[90vh] md:h-[50vh] lg:h-[60vh] p-6 sm:p-8 text-gray-300 text-base sm:text-lg leading-relaxed space-y-5 backdrop-blur-md rounded-b-2xl">
              <p>
                Hey, I’m <span className="text-blue-400 font-medium">Murthy Satti</span> - a passionate and self-motivated  <span className="text-blue-400 font-medium"> Full Stack Developer</span>  who enjoys solving real-world problems through efficient and scalable web solutions.
              </p>

              <p>
                I recently graduated fromSrinivasa Institute of Engineering and Technology, Cheyyeru with <span className="text-blue-400 font-medium">8.84 CGPA</span>, major in Mechanical Engineering and minor in Computer Science Engineering.
              </p>

              <p>
                I gained 5 months of hands-on experience as a Junior Full Stack Developer at <span className="text-blue-400 font-medium">Busitron IT Solutions Pvt Ltd</span>, contributing to real-time web applications and apps using the MERN stack.
              </p>

              <p>
                I am currently working as a Junior Full Stack Developer at <span className="text-blue-400 font-medium">iVectors Software Solutions LLP</span>, building efficient and scalable web applications with the Next.js and MongoDB.
              </p>

              <p>
                I enjoy creating user-friendly, high-performance applications and take pride in writing clean, maintainable code. I'm adaptable, team-oriented, and always eager to learn and grow through collaboration.
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

        <div className=" mx-auto px-2 md:px-6">
          <div className="mb-3">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Front-end
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaHtml5 className="text-orange-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">HTML</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaCss3Alt className="text-blue-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">CSS</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiTailwindcss className="text-sky-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Tailwind CSS</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaJs className="text-yellow-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">JavaScript</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiTypescript className="text-blue-600 text-4xl mb-3 bg-white rounded-xs" />
                <p className="text-sm font-semibold text-white  ">TypeScript</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaReact className="text-blue-400 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">React.js</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiNextdotjs className="text-white text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Next.js</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiMui className="text-blue-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Material UI</p>
              </div>
            </div>
          </div>
          {/* Backend skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Back-end</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiExpress className="text-gray-300 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Express.js</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaNodeJs className="text-green-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Node.js</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <FaPython className="text-yellow-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Python</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiMongodb className="text-green-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">MongoDB</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiPostgresql className="text-blue-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">PostgreSQL</p>
              </div>
            </div>
          </div>
          {/* Other Tools */}
          <div>
            <h3 className="text-2xl font-semibold my-3 text-white">Other Tools and platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">


              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiGit className="text-orange-600 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Git / GitHub</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
                <SiPostman className="text-red-500 text-4xl mb-3" />
                <p className="text-sm font-semibold text-white">Postman</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#232323] shadow-lg rounded-xl border border-gray-500 hover:border-purple-500/70 transition-all duration-300 hover:transform hover:scale-105">
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

        {/* Infinite Sliding Projects */}
        <div className="overflow-hidden relative w-full">
          <div className="overflow-x-auto scroll-smooth scrollbar-hide w-full">
            <div className="flex animate-scroll gap-2 md:gap-4 xl:gap-6 w-max"
              onMouseDown={(e) => handleScrollControl(e, "pause")}
              onMouseUp={(e) => handleScrollControl(e, "resume")}
              onMouseLeave={(e) => handleScrollControl(e, "resume")}
              onTouchStart={(e) => handleScrollControl(e, "pause")}
              onTouchEnd={(e) => handleScrollControl(e, "resume")}>
              {[...projects, ...projects].map((project, index) => (
                <div key={index} className="flex-shrink-0 w-[98vw] md:w-[70vw] lg:w-[40vw] ">
                  {/* Project Card */}
                  <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-700/30 overflow-hidden transition-all duration-500 hover:shadow-blue-500/20  hover:border-blue-500/30">

                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 border-b border-gray-700/40 backdrop-blur-sm">
                      <h2 className="text-base xl:text-lg font-bold text-white tracking-tight truncate">
                        {project.title}
                      </h2>
                      <div className="flex items-center space-x-2 text-gray-200 text-xs sm:text-sm  px-2 py-1 rounded-lg">
                        <IoCalendarOutline className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="font-medium">{project.date}</span>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="p-4">
                      <div className="relative overflow-hidden rounded-xl group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 sm:h-60 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-3 xl:px-5 py-3 space-y-4 text-white">
                      {/* Description */}
                      <details className="group">
                        <summary className="cursor-pointer text-base text-gray-200 leading-relaxed  transition-colors list-none">
                          <div className="space-y-1">
                            {project.description.split("•").slice(0, 2).map((line, i) => (
                              <p key={i} className="leading-relaxed">{line.trim()}</p>
                            ))}
                          </div>
                          <span className="text-blue-400 text-xs mt-2 inline-block group-open:hidden">Read more →</span>
                        </summary>
                        <div className="mt-3 text-sm text-gray-200 space-y-1 leading-relaxed border-t border-gray-700/50 pt-3">
                          {project.description.split("•").slice(2).map((line, i) => (
                            <p key={i}>{line.trim()}</p>
                          ))}
                        </div>
                      </details>

                      <div className="flex flex-col md:flex-row gap-2  justify-between">

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.split(',').map((tag, i) => (
                            <span key={i} className="text-xs md:text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-2 rounded-xl border border-emerald-400/20 ">
                              {tag.trim()}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600  text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-sm"
                        >
                          <IoCodeSlash className="w-4 h-4" /> Live Demo
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>





      {/* Contact Section */}
      <section ref={contactpageRef} className="min-h-screen py-10">
        <div className="min-h-screen flex justify-center items-center p-1 md:p-5">

          {/* Contact Card */}
          <div className="w-full lg:w-[65vw] h-auto bg-[#151515] border border-gray-600 rounded-2xl shadow-2xl p-2 md:p-3 lg:p-6 relative overflow-hidden ">

            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 ">
              Contact
            </h2>

            {/* Flex wrapper → Form + Icons */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 my-5">

              {/* Contact Form */}
              <div className="flex-1 w-full md:w-3/4 ">
                <div className=" rounded-2xl p-2 xl:p-8 border border-gray-700 gradient-shadow md:ml-5">
                  <div className="mb-8">
                    <h1 className="text-xl md:text-2xl font-bold text-white mb-2">Get in touch with us</h1>
                    <p className="text-gray-400 text-sm">
                      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                      required
                    ></textarea>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`cursor-pointer w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 
                  ${loading
                          ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                          : "bg-white text-gray-900 hover:bg-gray-100"
                        }`}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Icons */}
              <div className="w-1/4 flex flex-row md:flex-col gap-6 md:gap-8 items-center justify-center mb-5">
                {/* Call */}
                <a href="tel:+919121723149" target="_blank" rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300 relative group">
                  <FaPhoneAlt className="cursor-pointer text-indigo-700 text-3xl md:text-4xl hover:text-blue-400" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Call
                  </span>
                </a>

                {/* Email */}
                <a href="mailto:murthysatti@gmail.com" target="_blank" rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300 relative group">
                  <FaEnvelope className="cursor-pointer text-white text-3xl md:text-4xl hover:text-gray-300" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Email
                  </span>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/9121723149" target="_blank" rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300 relative group">
                  <FaWhatsapp className="cursor-pointer text-green-500 text-3xl md:text-4xl hover:text-green-400" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    WhatsApp
                  </span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/murthy-satti-309it/" target="_blank" rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300 relative group">
                  <FaLinkedin className="cursor-pointer text-blue-600 text-3xl md:text-4xl hover:text-blue-400" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LinkedIn
                  </span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/Murthysatti" target="_blank" rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300 relative group">
                  <FaGithub className="text-white text-3xl md:text-4xl hover:text-gray-800" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    GitHub
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer class="bg-gradient-to-br from-gray-900 to-slate-800 w-full py-8 text-center   text-gray-300 ">
        © 2025 Murthy Satti. All rights reserved.
      </footer>


    </main>
  );
}