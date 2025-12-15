"use client"
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  Calendar,
  Award,
  Code,
  Database,
  Monitor,
  CheckCircle,
  Star,
  ArrowRight,
  Send,
  Briefcase,
  GraduationCap,
  Eye,
  Heart,
  Zap,
  Rocket,
  Shield,
  Coffee,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = {
    frontend: [
      {
        name: "React.js",
        level: 95,
        icon: "⚛️",
        color: "from-blue-400 to-cyan-500",
      },
      {
        name: "Next JS",
        level: 90,
        icon: "⚡",
        color: "from-yellow-400 to-orange-500",
      },

      {
        name: "Tailwind CSS",
        level: 88,
        icon: "🎨",
        color: "from-teal-400 to-blue-500",
      },
      {
        name: "HTML/CSS",
        level: 95,
        icon: "🌐",
        color: "from-orange-400 to-red-500",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 85,
        icon: "🟢",
        color: "from-green-400 to-emerald-500",
      },
      {
        name: "Express.js",
        level: 82,
        icon: "🚀",
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "REST APIs",
        level: 88,
        icon: "🔗",
        color: "from-purple-400 to-pink-500",
      },
      {
        name: "JWT Auth",
        level: 80,
        icon: "🔐",
        color: "from-red-400 to-rose-500",
      },
    ],
    database: [
      {
        name: "MongoDB",
        level: 85,
        icon: "🍃",
        color: "from-green-400 to-green-600",
      },
      {
        name: "MySQL",
        level: 78,
        icon: "🐬",
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "PostgreSQL",
        level: 75,
        icon: "🐘",
        color: "from-indigo-400 to-indigo-600",
      },
    ],
    tools: [
      {
        name: "Git",
        level: 88,
        icon: "📝",
        color: "from-orange-400 to-red-500",
      },
      {
        name: "Docker",
        level: 70,
        icon: "🐳",
        color: "from-blue-400 to-cyan-500",
      },
      {
        name: "Postman",
        level: 85,
        icon: "📮",
        color: "from-orange-400 to-orange-600",
      },
      {
        name: "Vite",
        level: 80,
        icon: "⚡",
        color: "from-purple-400 to-purple-600",
      },
    ],
  };

  const projects = [
    {
      title: "FirstLine Project",
      description:
        "A privacy-encrypted communication platform with admin panel and RDBMS integration for secure data handling.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      liveDemo: "#",
      github: "https://github.com/MdShahnawaz474",
      featured: true,
      stats: { views: "2.5K", likes: "120", stars: "45" },
    },
    {
      title: "FirstBench Classes",
      description:
        "An Ed-Tech platform for students to solve doubts in real-time, featuring video sessions and chat functionality.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
      liveDemo: "#",
      github: "https://github.com/MdShahnawaz474",
      featured: true,
      stats: { views: "1.8K", likes: "98", stars: "32" },
    },
    {
      title: "Task Management App",
      description:
        "A full-stack todo application with user authentication, real-time updates, and responsive design.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      liveDemo: "#",
      github: "https://github.com/MdShahnawaz474",
      stats: { views: "950", likes: "67", stars: "23" },
    },
    {
      title: "E-Commerce Clone",
      description:
        "A modern e-commerce platform with cart functionality, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Redux", "Node.js", "Stripe API", "MongoDB"],
      liveDemo: "#",
      github: "https://github.com/MdShahnawaz474",
      stats: { views: "1.2K", likes: "89", stars: "34" },
    },
  ];

  const testimonials = [
    {
      name: "Sahil Khan",
      role: "Chief Product and Technology Officer",
      company: "Firstbench",
      message:
        "Shahnawaz delivered exceptional work on our web application. His attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Mohammad Ali",
      role: "SDE 1",
      company: "Firstbench",
      message:
        "Working with Shahnawaz was a pleasure. He understood our requirements perfectly and delivered a scalable solution.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Vinit Soni",
      role: "Founder ",
      company: "EduAid",
      message:
        "Highly recommend Shahnawaz for any full-stack development project. Professional, reliable, and skilled.",
      rating: 5,
      avatar: "👩‍🚀",
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Projects Completed",
      count: "25+",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "😊",
      title: "Happy Clients",
      count: "10+",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "💻",
      title: "Code Commits",
      count: "500+",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: "☕",
      title: "Cups of Coffee",
      count: "1000+",
      color: "from-amber-400 to-orange-600",
    },
  ];

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            {/* <div className="w-20 h-20 items-center border-4 border-blue-500/30 rounded-full animate-spin border-t-blue-500 mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-purple-500/30 rounded-full animate-ping"></div> */}
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
            Md Shahnawaz
          </h2>
          <p className="text-gray-400 animate-pulse">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-x-hidden`}
    >
      {/* Cursor follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full pointer-events-none z-50 opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(0.8)",
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isDarkMode ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-lg border-b ${
          isDarkMode ? "border-gray-800" : "border-gray-200"
        } shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Md Shahnawaz
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "hero",
                "about",
                "skills",
                "experience",
                "projects",
                "education",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative capitalize transition-all duration-300 hover:text-blue-400 px-3 py-2 ${
                    activeSection === item ? "text-blue-400 font-medium" : ""
                  }`}
                >
                  {item === "hero" ? "Home" : item}
                  {activeSection === item && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl p-2 hover:scale-110 transition-transform"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-slide-down">
              <div className="flex flex-col space-y-2">
                {[
                  "hero",
                  "about",
                  "skills",
                  "experience",
                  "projects",
                  "education",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left p-3 capitalize transition-all duration-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg ${
                      activeSection === item
                        ? "text-blue-400 font-medium bg-gray-800/30"
                        : ""
                    }`}
                  >
                    {item === "hero" ? "Home" : item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-blue-400 font-medium mb-4 animate-bounce">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Md Shahnawaz
            </h1>

            <div className="relative mb-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 text-gray-300">
                Full Stack Web Developer
              </h2>
              <div className="flex justify-center items-center gap-2 text-lg text-gray-400">
                <span className="animate-pulse">💻</span>
                <span>SDE 1 at FirstBench</span>
                <span className="animate-pulse">🚀</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl mb-8 text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Building{" "}
              <span className="text-blue-400 font-semibold">scalable</span> and
              <span className="text-purple-400 font-semibold"> secure</span> web
              applications with
              <span className="text-cyan-400 font-semibold">
                {" "}
                modern tech stacks
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <a
                href="mailto:mdshahnawazm474@gmail.com"
                className="group px-8 py-4 border-2 border-gray-600 rounded-full font-semibold transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:bg-blue-500/10 flex items-center gap-2"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`text-3xl mb-2 p-3 rounded-full bg-gradient-to-r ${achievement.color} bg-opacity-20 inline-block group-hover:scale-110 transition-transform`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {achievement.count}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${
          isDarkMode ? "bg-gray-800/50" : "bg-white"
        } relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <p className="text-lg leading-relaxed text-gray-300 relative z-10">
                  I'm a passionate{" "}
                 <span className="text-blue-400 font-semibold relative">
  Full Stack Web Developer
  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent block"></span>
</span>
                  with expertise in the MERN Stack (MongoDB, Express, React,
                  Node.js). Currently working as an{" "}
                  <span className="text-purple-400 font-semibold relative">
                    SDE 1
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent block"></span>

                  </span>{" "}
                  at FirstBench, I have strong knowledge of REST APIs,
                  Authentication (JWT), and Database Design (SQL & NoSQL).
                </p>
              </div>

              <div className="text-lg leading-relaxed text-gray-300">
                My passion lies in creating{" "}
                <span className="text-cyan-400 font-semibold">
                  secure, efficient, and user-friendly
                </span>{" "}
                web applications that solve real-world problems. I enjoy working
                on challenging projects that push the boundaries of modern web
                development.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">mdshahnawazm474@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span className="text-sm">India</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-105 transition-transform">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">SDE 1 at FirstBench</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:scale-105 transition-transform">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">Available for Projects</span>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="mt-8">
                <button className="group px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 border border-gray-600 hover:border-gray-500">
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download CV
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1 group-hover:scale-105 transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                    {/* <User className="w-32 h-32 text-gray-400 z-10" /> */}
                    <img
                      src={
                        "https://pbs.twimg.com/profile_images/1933478194310471681/mz9qrTTu_400x400.jpg"
                      }
                      alt="Md Shahnawaz"
                      className="w-full h-full rounded-full object-cover z-10 select-none pointer-events-none"
                    />
                    {/* Animated rings */}
                    <div className="absolute inset-2  border-2 border-blue-400/30 rounded-full animate-spin-slow z-20"></div>
                    <div className="absolute inset-5 border-2 border-purple-400/30 rounded-full animate-spin-reverse z-20"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

                {/* Floating icons */}
                <div className="absolute top-10 -right-6 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-float">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-10 -left-6 p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-float delay-1000">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies I work with to build amazing digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className={`group p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800/50" : "bg-white"
                } border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <h3 className="text-xl font-bold mb-6 capitalize text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent relative z-10">
                  {category}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-2"></div>
                </h3>

                <div className="space-y-6 relative z-10">
                  {skillList.map((skill) => (
                    <div key={skill.name}  className="space-y-3 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-3">
                          <span className="text-2xl group-hover/skill:animate-bounce">
                            {skill.icon}
                          </span>
                          <span className="font-medium group-hover/skill:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                        </span>
                        <span className="text-sm text-gray-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 ${
          isDarkMode ? "bg-gray-800/50" : "bg-white"
        } relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and achievements
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400"></div>

            <div className="relative">
              <div className="flex flex-col items-center mb-8">
                <div
                  className={`w-full max-w-2xl p-8 rounded-2xl ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  } shadow-2xl relative group hover:scale-105 transition-all duration-300`}
                >
                  {/* Company logo placeholder */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">FB</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">
                        FirstBench
                      </h3>
                      <h4 className="text-xl font-semibold mb-2 text-purple-400">
                        Full Stack Web Developer
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">
                        Jan 2025 - June 2025
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p>
                        Worked on{" "}
                        <strong className="text-blue-400">
                          real-time, end-to-end projects
                        </strong>{" "}
                        from scratch
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong className="text-green-400">
                          FirstLine Project:
                        </strong>{" "}
                        Privacy-encrypted communication platform with admin
                        panel and RDBMS integration
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong className="text-purple-400">
                          FirstBench Classes:
                        </strong>{" "}
                        Ed-Tech platform with real-time doubt solving, video
                        sessions, and chat functionality
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <p>
                        Implemented{" "}
                        <strong className="text-cyan-400">
                          secure authentication systems
                        </strong>{" "}
                        and database optimization
                      </p>
                    </div>
                  </div>

                  {/* Achievement badges */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30">
                      Real-time Apps
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col items-center mb-8">
                <div
                  className={`w-full max-w-2xl p-8 rounded-2xl ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } border ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  } shadow-2xl relative group hover:scale-105 transition-all duration-300`}
                >
                  {/* Company logo placeholder */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">FB</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">
                        FirstBench
                      </h3>
                      <h4 className="text-xl font-semibold mb-2 text-purple-400">
                        Full Stack Web Developer (SDE 1)
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">
                        Current Position
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p>
                        Worked on{" "}
                        <strong className="text-blue-400">
                          real-time, end-to-end projects
                        </strong>{" "}
                        from scratch
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong className="text-green-400">
                          FirstLine Project:
                        </strong>{" "}
                        Privacy-encrypted communication platform with admin
                        panel and RDBMS integration
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong className="text-purple-400">
                          FirstBench Classes:
                        </strong>{" "}
                        Ed-Tech platform with real-time doubt solving, video
                        sessions, and chat functionality
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <p>
                        Implemented{" "}
                        <strong className="text-cyan-400">
                          secure authentication systems
                        </strong>{" "}
                        and database optimization
                      </p>
                    </div>
                  </div>

                  {/* Achievement badges */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30">
                      Real-time Apps
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing my best work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  project.featured ? "hover:shadow-blue-500/25" : ""
                } relative`}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center relative">
                    <Code className="w-16 h-16 text-gray-400 z-10" />

                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
                          style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 2) * 60}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 animate-pulse">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project stats overlay */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {project.stats.views}
                    </span>
                    <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {project.stats.likes}
                    </span>
                    <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 hover:scale-110 transition-transform cursor-default"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group/btn"
                    >
                      <ExternalLink className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Live Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-lg font-medium transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`py-20 ${
          isDarkMode ? "bg-gray-800/50" : "bg-white"
        } relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              What People Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Feedback from amazing clients and colleagues
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } hover:border-blue-500/50 transition-all duration-300 hover:scale-105 relative group`}
              >
                <div className="absolute -top-4 left-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                </div>

                <div className="pt-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 italic relative">
                    "{testimonial.message}"
                    <span className="absolute -top-2 -left-2 text-4xl text-blue-400/30">
                      "
                    </span>
                  </p>

                  <div>
                    <h4 className="font-semibold text-blue-400">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className={`relative p-8 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } border ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              } shadow-2xl hover:border-blue-500/50 transition-all duration-300 group overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>

              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-xl text-gray-400 font-medium">
                    BCA Degree
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <Monitor className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-lg font-semibold">Institution:</p>
                    <p className="text-gray-400">JB Knowledge Park</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                  <Award className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-lg font-semibold">Affiliated with:</p>
                    <p className="text-gray-400">MDU Rohtak</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                  <p className="text-gray-300">
                    Comprehensive program covering{" "}
                    <span className="text-cyan-400 font-semibold">
                      software development
                    </span>
                    ,
                    <span className="text-green-400 font-semibold">
                      {" "}
                      database management
                    </span>
                    , and
                    <span className="text-blue-400 font-semibold">
                      {" "}
                      web technologies
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Achievement badges */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                  Software Development
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                  Database Management
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                  Web Technologies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 ${
          isDarkMode ? "bg-gray-800/50" : "bg-white"
        } relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4"></div>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to work together? Let's discuss your project and bring your
              ideas to life!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`p-8 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } border ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              } shadow-2xl relative group overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent relative z-10">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="group/input">
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover/input:border-blue-400`}
                    placeholder="Your Name"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover/input:border-blue-400`}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none group-hover/input:border-blue-400`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                >
                  <Send className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-400">mdshahnawazm474@gmail.com</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } hover:border-green-500/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400">India</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
                <h3 className="text-lg font-semibold mb-4 relative z-10">
                  Connect with me
                </h3>
                <div className="flex gap-4 relative z-10">
                  <a
                    href="https://www.linkedin.com/in/md-shahnawaz-a053a122a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group"
                  >
                    <Linkedin className="w-6 h-6 text-white group-hover:animate-bounce" />
                  </a>
                  <a
                    href="https://github.com/MdShahnawaz474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 group"
                  >
                    <Github className="w-6 h-6 text-white group-hover:animate-bounce" />
                  </a>
                  <a
                    href="https://x.com/Ahankhan474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50 group"
                  >
                    <Twitter className="w-6 h-6 text-white group-hover:animate-bounce" />
                  </a>
                </div>
              </div>

              {/* Quick contact stats */}
              <div
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
                <h3 className="text-lg font-semibold mb-4 relative z-10">
                  Response Time
                </h3>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">
                    Usually responds within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-800"
        } border-t ${
          isDarkMode ? "border-gray-800" : "border-gray-700"
        } relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Md Shahnawaz
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Full Stack Web Developer
                  </p>
                </div>
              </div>
              <p className="text-gray-400">
                © {new Date().getFullYear()} Md Shahnawaz. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex space-x-6">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Coffee className="w-4 h-4" />
                <span className="text-sm">Made with ❤️ and lots of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
