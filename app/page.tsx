"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

// react icons
import {
  AiOutlineGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { 
  BsFillMoonStarsFill, 
  BsFillSunFill 
} from "react-icons/bs";
import { 
  FiExternalLink, 
  FiDownload, 
  FiSend, 
  FiMail, 
  FiMapPin, 
  FiBriefcase, 
  FiCode, 
  FiDatabase, 
  FiShield, 
  FiCheckCircle, 
  FiXCircle,
  FiUser,
  FiLayout
} from "react-icons/fi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDocker,
  FaAndroid
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// asset imports
import desing from "../assets/design.png";
import code from "../assets/code.png";
import web0 from "../assets/avikans.png";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web7.png";
import shamith from "../assets/shamith_udayanga.png";
import AboutMe from "../assets/abo.jpeg";

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeSkillTab, setActiveSkillTab] = useState("frontend");
  const [portfolioFilter, setPortfolioFilter] = useState("all");
  
  // contact form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; text: string } | null>(null);

  // monitor active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    const serviceID = "service_edgksr7";
    const templateId = "template_2yyb12v";
    const publicKey = "FunI10h3Gvw2L_HCs";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "shamith udayanga",
      message: message,
    };

    emailjs
      .send(serviceID, templateId, templateParams, publicKey)
      .then(() => {
        setIsSending(false);
        setSubmitStatus({
          success: true,
          text: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
        });
        setName("");
        setEmail("");
        setMessage("");

        // Auto dismiss toast after 6 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 6000);
      })
      .catch((error) => {
        setIsSending(false);
        console.error("Error sending Email:", error);
        setSubmitStatus({
          success: false,
          text: "Oops! Something went wrong while sending your email. Please try again or reach out directly.",
        });
      });
  };

  function toggleColor() {
    setIsLightMode(!isLightMode);
  }

  // Skills Data structure
  const skillsData = {
    frontend: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap & CSS", level: 90 }
    ],
    backend: [
      { name: "Node.js (Express)", level: 80 },
      { name: "Spring Boot (Java)", level: 75 },
      { name: "PHP & MVC Architectures", level: 85 },
      { name: "SQL (MySQL) & MongoDB", level: 80 }
    ],
    others: [
      { name: "Ethical Hacking & Penetration Testing", level: 85 },
      { name: "Server Administration (Synology / VPS)", level: 80 },
      { name: "RESTful API Development & Integration", level: 90 },
      { name: "Git Version Control & DevOps Basics", level: 85 }
    ]
  };

  // Projects Data structure
  const projectsData = [
    {
      id: "avikans-erp",
      title: "Avikans ERP System",
      description: "A comprehensive Enterprise Resource Planning system that allows secure input, editing, and management of business operations data. Features optimized database queries, Spring Boot security configuration, and dynamic server hosting.",
      image: web0,
      link: "https://avikans.synology.me:3000",
      tech: ["Next.js", "Spring Boot", "MySQL", "Synology"],
      category: "web"
    },
    {
      id: "quality-cables",
      title: "Quality Cables AU",
      description: "A professional and robust Australian E-Commerce store designed for industrial power cable distributions. Integrated with category filters, customer checkout flow, and custom dynamic databases.",
      image: web1,
      link: "https://qualitycables.com.au",
      tech: ["PHP", "JavaScript", "Bootstrap", "MySQL", "AJAX"],
      category: "ecommerce"
    },
    {
      id: "sdream-code",
      title: "SDream Code Studio",
      description: "Interactive portfolio and service-display portal designed for a digital agency. Created with polished, modern responsive elements and customized lead validation forms.",
      image: web2,
      link: "http://sdreamcode.rf.gd",
      tech: ["PHP", "JavaScript", "Bootstrap", "CSS", "AJAX"],
      category: "web"
    },
    {
      id: "my-portfolio",
      title: "Interactive Developer Portfolio",
      description: "This modern web application showcases visual aesthetics, smooth animations, dynamic states, and detailed skill categories using custom Next.js modules and Tailwind utilities.",
      image: web3,
      link: "#",
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web"
    },
    {
      id: "supplement-site",
      title: "Vibe Supplement Store",
      description: "A streamlined health and supplement shopping website containing an intuitive UI catalog, custom item additions, checkout integrations, and product search tools.",
      image: web4,
      link: "#",
      tech: ["PHP", "JavaScript", "Bootstrap", "MySQL", "AJAX"],
      category: "ecommerce"
    },
    {
      id: "lahiru-mills",
      title: "Lahiru Oil Mills",
      description: "E-Commerce portal representing a traditional oil manufacturing mill. Facilitates direct consumer wholesale ordering, product tracking, and local client inquiries.",
      image: web5,
      link: "#",
      tech: ["PHP", "JavaScript", "Bootstrap", "CSS", "AJAX"],
      category: "ecommerce"
    },
    {
      id: "eshop-web",
      title: "Apex E-Shop System",
      description: "A fully functional web store that enables rapid inventory checks, custom billing invoices, cart systems, and interactive administrative dashboard metrics.",
      image: web6,
      link: "#",
      tech: ["PHP", "JavaScript", "Bootstrap", "MySQL", "AJAX"],
      category: "ecommerce"
    },
    {
      id: "dress-website",
      title: "Trendy Dress Boutique",
      description: "E-Commerce retail web platform focusing on apparel items. Designed with a visually elegant gallery, simple filter categorization, and clean client communication lines.",
      image: web7,
      link: "#",
      tech: ["PHP", "JavaScript", "Bootstrap", "CSS", "AJAX"],
      category: "ecommerce"
    }
  ];

  // Filtered projects
  const filteredProjects = portfolioFilter === "all"
    ? projectsData
    : projectsData.filter(project => project.category === portfolioFilter);

  // Floating technology icons data for background animation
  const floatingIcons = [
    { icon: <FaHtml5 className="text-orange-500" />, top: "12%", left: "8%", delay: 0, speed: 18 },
    { icon: <FaCss3Alt className="text-blue-500" />, top: "28%", left: "85%", delay: 2, speed: 20 },
    { icon: <FaJs className="text-yellow-500" />, top: "55%", left: "6%", delay: 1, speed: 22 },
    { icon: <FaReact className="text-cyan-400" />, top: "42%", left: "90%", delay: 3, speed: 19 },
    { icon: <FaJava className="text-red-500" />, top: "72%", left: "75%", delay: 4, speed: 24 },
    { icon: <SiSpringboot className="text-green-500" />, top: "82%", left: "12%", delay: 5, speed: 21 },
    { icon: <FaDocker className="text-blue-400" />, top: "32%", left: "18%", delay: 2.5, speed: 23 },
    { icon: <FaAndroid className="text-green-400" />, top: "68%", left: "88%", delay: 1.5, speed: 17 },
    { icon: <TbBrandReactNative className="text-cyan-500" />, top: "20%", left: "76%", delay: 3.5, speed: 25 },
  ];

  return (
    <div className={`transition-colors duration-500 min-h-screen ${isLightMode ? "bg-slate-50 text-slate-900" : "bg-[#030712] text-slate-100"}`}>
      
      {/* BACKGROUND GLOW BLOBS & DANCING TECH ICONS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 md:w-[450px] md:h-[450px] bg-amber-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-[40%] right-[10%] w-72 h-72 md:w-[400px] md:h-[400px] bg-indigo-500/10 rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-[20%] left-[15%] w-72 h-72 md:w-[420px] md:h-[420px] bg-amber-500/10 rounded-full blur-[110px] animate-float-reverse-slow"></div>
        
        {/* Floating/Dancing Icons */}
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute opacity-[0.14] dark:opacity-[0.06] text-4xl sm:text-5xl md:text-6xl select-none pointer-events-none"
            style={{ top: item.top, left: item.left }}
            animate={{
              y: [0, -35, 0],
              x: [0, 15, 0],
              rotate: [0, 360],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: item.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* STICKY HEADER */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 border-b backdrop-blur-md ${
        isLightMode 
          ? "bg-slate-50/80 border-slate-200/80" 
          : "bg-[#030712]/80 border-slate-900/60"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-wider text-amber-500 font-space group-hover:scale-105 transition-transform">SU.</span>
            <span className="hidden sm:inline-block font-semibold tracking-wide text-sm font-space">SHAMITH UDAYANGA</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "portfolio", label: "Portfolio" },
              { id: "contact", label: "Contact" }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors duration-200 relative py-1 hover:text-amber-500 ${
                  activeSection === link.id 
                    ? "text-amber-500 active-nav-indicator font-semibold" 
                    : isLightMode ? "text-slate-600" : "text-slate-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Darkmode & Resume CTAs */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleColor}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-full border transition-all hover:scale-110 ${
                isLightMode 
                  ? "bg-white border-slate-200 text-slate-800 hover:bg-slate-100" 
                  : "bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800"
              }`}
            >
              {isLightMode ? <BsFillMoonStarsFill size={16} /> : <BsFillSunFill size={16} />}
            </button>

            <a
              href="https://drive.google.com/file/d/1282bHkIncgYWH0iFLkuf23oKz6KZ_t77/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-black text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg border-none shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <FiDownload size={14} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  Available for new projects
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">Shamith Udayanga</span>
                </h1>

                <div className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold mb-6 font-space">
                  <span>I specialize in</span>
                  <div className="text-amber-500 border-b-2 border-amber-500/30 pb-0.5">
                    <Typewriter
                      options={{
                        strings: [
                          "Web Development",
                          "Mobile App Development",
                          "Full-Stack Architectures",
                          "Ethical Hacking & Security",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 40
                      }}
                    />
                  </div>
                </div>

                <p className={`text-base sm:text-lg mb-8 max-w-xl leading-relaxed ${isLightMode ? "text-slate-600" : "text-slate-400"}`}>
                  A dedicated Full Stack Developer with over 2 years of extensive experience designing, building, and deploying secure, high-performance web systems. Passionate about writing clean, optimized code and crafting exceptional user experiences.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <a
                    href="#contact"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span>Let's Talk</span>
                    <FiSend size={16} />
                  </a>

                  <a
                    href="#portfolio"
                    className={`font-semibold px-6 py-3.5 rounded-xl border hover:scale-[1.03] active:scale-95 transition-all ${
                      isLightMode 
                        ? "border-slate-300 hover:bg-slate-100 text-slate-700" 
                        : "border-slate-800 hover:bg-slate-900 text-slate-300"
                    }`}
                  >
                    View My Work
                  </a>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${isLightMode ? "text-slate-400" : "text-slate-500"}`}>
                    Connect with me
                  </span>
                  <div className="h-[1px] w-12 bg-slate-800"></div>
                  <div className="flex items-center gap-3">
                    {[
                      { href: "https://github.com/shamithudayanga", icon: <AiOutlineGithub size={20} />, label: "GitHub" },
                      { href: "https://www.linkedin.com/in/shamith-udayanga-768134279/", icon: <AiFillLinkedin size={20} />, label: "LinkedIn" },
                      { href: "https://www.youtube.com/channel/UCY-9rWO8pzqM9CReNXjCnUA", icon: <AiFillYoutube size={20} />, label: "YouTube" },
                      { href: "https://www.facebook.com/udayanga.max.3557", icon: <AiFillFacebook size={20} />, label: "Facebook" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`p-2.5 rounded-lg border transition-all hover:-translate-y-1 ${
                          isLightMode 
                            ? "bg-white border-slate-200 text-slate-600 hover:text-amber-500 hover:bg-slate-50 hover:border-slate-300" 
                            : "bg-slate-900 border-slate-800/80 text-slate-400 hover:text-amber-400 hover:bg-slate-800 hover:border-slate-700"
                        }`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Profile Image */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Glowing Aura circles behind profile */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 blur-2xl opacity-20 scale-95 animate-pulse-slow"></div>
                
                {/* Rotating Dotted Ring Border */}
                <div className="absolute inset-[-10px] rounded-full border border-dashed border-amber-500/30 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-[-20px] rounded-full border border-slate-800/50 hidden md:block"></div>

                {/* Profile Container */}
                <div className={`relative p-3 rounded-full border shadow-2xl ${isLightMode ? "bg-white border-slate-200" : "bg-slate-950 border-slate-800/80"}`}>
                  <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden relative">
                    <Image
                      src={shamith}
                      alt="Shamith Udayanga Profile"
                      fill
                      priority
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 256px, (max-w-1024px) 320px, 384px"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-20 border-t border-slate-900/10 dark:border-slate-900/60">
          
          {/* Section Header */}
          <div className="text-center md:text-left mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-black">My Journey & Expertise</h3>
            <div className="h-[3px] w-12 bg-amber-500 mt-4 mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Bio Photo and Stats */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <motion.div 
                whileHover={{ y: -5 }} 
                className={`relative rounded-2xl overflow-hidden border p-3 ${isLightMode ? "bg-white border-slate-200 shadow-md" : "bg-slate-900/30 border-slate-800/60"}`}
              >
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <Image
                    src={AboutMe}
                    alt="Working space"
                    fill
                    className="object-cover"
                    sizes="(max-w-1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "2+", label: "Years Experience" },
                  { value: "15+", label: "Projects Done" },
                  { value: "10+", label: "Happy Clients" }
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className={`p-4 rounded-xl text-center border ${
                      isLightMode ? "bg-white border-slate-100 shadow-sm" : "bg-slate-900/20 border-slate-800/40"
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-black text-amber-500 font-space mb-1">{stat.value}</div>
                    <div className={`text-xs font-medium tracking-wide ${isLightMode ? "text-slate-500" : "text-slate-400"}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Story and Tabbed Skill Matrix */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4 font-space flex items-center gap-2">
                  <FiUser className="text-amber-500" />
                  <span>Who I Am</span>
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isLightMode ? "text-slate-600" : "text-slate-400"}`}>
                  I am an innovative, self-motivated Full Stack Developer with a strong foundation in application architecture, server hosting, and vulnerability testing. I thrive on translating abstract ideas into responsive, production-ready systems that scale.
                </p>
                <p className={`text-sm sm:text-base leading-relaxed ${isLightMode ? "text-slate-600" : "text-slate-400"}`}>
                  My technical skillset ranges from creating elegant frontends (React, Next.js, and CSS frameworks) to implementing microservice endpoints (Node.js, Spring Boot, PHP) and enforcing system security parameters. I excel at configuring secure local systems, managing database relations, and connecting custom APIs.
                </p>
              </div>

              {/* Skill Matrix Tab Panel */}
              <div>
                <h4 className="text-lg font-bold mb-4 font-space">Technical Competencies</h4>
                
                {/* Tab buttons */}
                <div className={`flex border-b mb-6 text-sm ${isLightMode ? "border-slate-200" : "border-slate-800"}`}>
                  {[
                    { id: "frontend", label: "Frontend" },
                    { id: "backend", label: "Backend" },
                    { id: "others", label: "Others & Security" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSkillTab(tab.id)}
                      className={`pb-3 px-4 font-semibold transition-all relative ${
                        activeSkillTab === tab.id
                          ? "text-amber-500"
                          : isLightMode ? "text-slate-500 hover:text-slate-800" : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {tab.label}
                      {activeSkillTab === tab.id && (
                        <motion.div
                          layoutId="skillTabBorder"
                          className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-amber-500 shadow-sm"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab items with custom animated levels */}
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSkillTab}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {skillsData[activeSkillTab as keyof typeof skillsData].map((skill, index) => (
                        <div 
                          key={index}
                          className={`p-3.5 rounded-xl border ${
                            isLightMode ? "bg-white border-slate-100 shadow-sm" : "bg-slate-900/10 border-slate-850"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-xs sm:text-sm font-space">{skill.name}</span>
                            <span className="text-xs text-amber-500 font-bold">{skill.level}%</span>
                          </div>
                          {/* Progress bar container */}
                          <div className={`h-1.5 w-full rounded-full overflow-hidden ${isLightMode ? "bg-slate-100" : "bg-slate-800"}`}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: index * 0.05 }}
                              className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 border-t border-slate-900/10 dark:border-slate-900/60">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Services I Offer</h2>
            <h3 className="text-3xl md:text-4xl font-black">Expertise & Solutions</h3>
            <div className="h-[3px] w-12 bg-amber-500 mt-4 mx-auto"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* UI/UX Design Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl border flex flex-col justify-between glass-card`}
            >
              <div>
                <div className="mb-6 inline-flex p-4 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20">
                  <FiLayout size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 font-space">UI/UX Design</h4>
                <p className={`text-sm leading-relaxed mb-6 ${isLightMode ? "text-slate-600" : "text-slate-400"}`}>
                  Elevate digital interfaces through user-centric conceptual layouts. I craft intuitive user experiences, wireframes, and responsive design systems.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-amber-500 border-t border-slate-800/40 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Wireframes & Mockups
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Responsive Web Layouts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Prototype Testing
                </li>
              </ul>
            </motion.div>

            {/* Front-End Develop Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl border flex flex-col justify-between glass-card`}
            >
              <div>
                <div className="mb-6 inline-flex p-4 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20">
                  <FiCode size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 font-space">Front-End Develop</h4>
                <p className={`text-sm leading-relaxed mb-6 ${isLightMode ? "text-slate-600" : "text-slate-400"}`}>
                  Transform ideas into interactive interfaces. Specializing in high-performance Single Page Applications with optimized assets and modern SEO parameters.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-amber-500 border-t border-slate-800/40 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> React & Next.js Ecosystems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Tailwind & Sass Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Framer Motion Animations
                </li>
              </ul>
            </motion.div>

            {/* Back-End Develop Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl border flex flex-col justify-between glass-card`}
            >
              <div>
                <div className="mb-6 inline-flex p-4 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20">
                  <FiDatabase size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 font-space">Back-End Develop</h4>
                <p className={`text-sm leading-relaxed mb-6 ${isLightMode ? "text-slate-600" : "text-slate-400"}`}>
                  Develop robust server architectures to support client applications. Implement strict security protocols, optimize query schemas, and build RESTful API systems.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs font-semibold text-amber-500 border-t border-slate-800/40 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Node.js, Spring Boot & PHP
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Relational & NoSQL Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Server Deployment & Security
                </li>
              </ul>
            </motion.div>

          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="py-20 border-t border-slate-900/10 dark:border-slate-900/60">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">My Work</h2>
            <h3 className="text-3xl md:text-4xl font-black">Recent Projects Portfolio</h3>
            <div className="h-[3px] w-12 bg-amber-500 mt-4 mx-auto"></div>
          </div>

          {/* Filter Categories */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Web Applications" },
              { id: "ecommerce", label: "E-Commerce Stores" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPortfolioFilter(tab.id)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  portfolioFilter === tab.id
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/10"
                    : isLightMode 
                      ? "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50" 
                      : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl overflow-hidden border flex flex-col h-full group ${
                    isLightMode ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900/25 border-slate-800/80"
                  }`}
                >
                  
                  {/* Image wrapper */}
                  <div className="relative aspect-video overflow-hidden bg-slate-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                    />
                    
                    {/* Hover Link Overlay */}
                    {project.link !== "#" && (
                      <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-10">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-amber-500 hover:bg-amber-600 text-black p-3.5 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-all duration-300"
                          aria-label={`Open demo link for ${project.title}`}
                        >
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Card description details */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t, idx) => (
                          <span 
                            key={idx} 
                            className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                              isLightMode 
                                ? "bg-slate-100 text-slate-600 border border-slate-200" 
                                : "bg-slate-950 text-amber-500 border border-slate-850"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-lg font-bold mb-2 font-space group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h4>
                      <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isLightMode ? "text-slate-500" : "text-slate-400"}`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Lower Link */}
                    {project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-amber-500 inline-flex items-center gap-1 hover:underline mt-2 self-start"
                      >
                        <span>Visit Live Demo</span>
                        <FiExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-slate-500 italic mt-2 self-start">
                        Internal Platform / Offline
                      </span>
                    )}

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* CONTACT US SECTION */}
        <section id="contact" className="py-20 border-t border-slate-900/10 dark:border-slate-900/60">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-black">Contact Me</h3>
            <div className="h-[3px] w-12 bg-amber-500 mt-4 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h4 className="text-xl font-bold font-space">Let's build something exceptional together</h4>
              <p className={`text-sm sm:text-base leading-relaxed mb-4 ${isLightMode ? "text-slate-600" : "text-slate-400"}`}>
                Whether you have a fully drafted project proposal, a small business workflow idea, or simply want to inquire about custom developer consultation services, send me a message and I will reply within 24 hours.
              </p>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className={`p-4 rounded-xl border flex items-center gap-4 ${
                  isLightMode ? "bg-white border-slate-200" : "bg-slate-900/20 border-slate-800/80"
                }`}>
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${isLightMode ? "text-slate-400" : "text-slate-500"}`}>Inquire Direct</div>
                    <a href="mailto:udayangaa273@gmail.com" className="text-sm font-bold hover:text-amber-500">
                      udayangaa273@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className={`p-4 rounded-xl border flex items-center gap-4 ${
                  isLightMode ? "bg-white border-slate-200" : "bg-slate-900/20 border-slate-800/80"
                }`}>
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${isLightMode ? "text-slate-400" : "text-slate-500"}`}>Current Location</div>
                    <div className="text-sm font-bold">
                      Sri Lanka (GMT+5:30)
                    </div>
                  </div>
                </div>

                {/* Availabilty Item */}
                <div className={`p-4 rounded-xl border flex items-center gap-4 ${
                  isLightMode ? "bg-white border-slate-200" : "bg-slate-900/20 border-slate-800/80"
                }`}>
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
                    <FiBriefcase size={18} />
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${isLightMode ? "text-slate-400" : "text-slate-500"}`}>Employment Profile</div>
                    <div className="text-sm font-bold">
                      Freelance / Remote Contracts
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className={`lg:col-span-7 p-8 rounded-2xl border ${
              isLightMode ? "bg-white border-slate-200 shadow-md" : "bg-slate-900/15 border-slate-800/70 backdrop-blur-sm"
            }`}>
              <form onSubmit={sendMail} className="space-y-6">
                
                {/* Form header message if submitted */}
                <AnimatePresence mode="wait">
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl border flex gap-3 items-start text-xs sm:text-sm ${
                        submitStatus.success
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                          : "bg-rose-500/10 border-rose-500/20 text-rose-500"
                      }`}
                    >
                      {submitStatus.success ? (
                        <FiCheckCircle className="shrink-0 mt-0.5" size={18} />
                      ) : (
                        <FiXCircle className="shrink-0 mt-0.5" size={18} />
                      )}
                      <div>
                        <span className="font-bold">{submitStatus.success ? "Success" : "Failed"}: </span>
                        <span>{submitStatus.text}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all ${
                        isLightMode
                          ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-amber-500 focus:bg-white"
                          : "bg-slate-950 border-slate-850 text-slate-100 focus:border-amber-500 focus:bg-[#070b16]"
                      }`}
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSending}
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Your Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all ${
                        isLightMode
                          ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-amber-500 focus:bg-white"
                          : "bg-slate-950 border-slate-850 text-slate-100 focus:border-amber-500 focus:bg-[#070b16]"
                      }`}
                      required
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSending}
                    />
                  </div>

                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-message" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    placeholder="Describe your project, ideas or query details..."
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl text-sm outline-none border resize-none transition-all ${
                      isLightMode
                        ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-amber-500 focus:bg-white"
                        : "bg-slate-950 border-slate-850 text-slate-100 focus:border-amber-500 focus:bg-[#070b16]"
                    }`}
                    required
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSending}
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={`border-t transition-all ${
        isLightMode 
          ? "bg-white border-slate-200 text-slate-600" 
          : "bg-slate-950 border-slate-900 text-slate-400"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold font-space text-amber-500 mb-1">Shamith Udayanga</h4>
            <p className="text-xs leading-relaxed max-w-sm">
              Creating clean code structures, beautiful frontends, secure backend integrations, and reliable cloud-based systems since 2024.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/shamithudayanga", icon: <AiOutlineGithub size={18} /> },
                { href: "https://www.linkedin.com/in/shamith-udayanga-768134279/", icon: <AiFillLinkedin size={18} /> },
                { href: "https://www.youtube.com/channel/UCY-9rWO8pzqM9CReNXjCnUA", icon: <AiFillYoutube size={18} /> },
                { href: "https://www.facebook.com/udayanga.max.3557", icon: <AiFillFacebook size={18} /> }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-amber-500 transition-colors`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-[10px] text-slate-500">
              &copy; {new Date().getFullYear()} Shamith Udayanga. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
