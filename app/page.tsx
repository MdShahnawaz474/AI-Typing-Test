"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Zap,
  Target,
  Clock,
  Menu,
  X,
  Mail,
  Instagram,
  Brain,
  TrendingUp,
  Award,
  Users,
  BarChart3,
  Sparkles,
  ArrowRight,
  Twitter,
  GithubIcon,
} from "lucide-react";
import "./globals.css";
import Link from "next/link";
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }, // ✅ Removed ease property
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }, // ✅ Removed ease
  };
  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }, // ✅ Removed ease
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white font-inter overflow-x-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute top-96 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-[9999] bg-dark-900/80 backdrop-blur-md border-b border-neon-purple/30"
        style={{ pointerEvents: "auto" }} // ✅ Force clickable
      >
        <div
          className="container mx-auto px-6"
          style={{ pointerEvents: "auto" }}
        >
          <div
            className="flex items-center justify-between py-4"
            style={{ pointerEvents: "auto" }}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              style={{ pointerEvents: "auto" }} // ✅ Force clickable
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="text-neon-cyan w-8 h-8" />
              </motion.div>
              <span className="text-2xl font-bold text-gradient">
                Typing Speed AI
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <ul
              className="hidden md:flex items-center gap-8 text-sm font-medium"
              style={{ pointerEvents: "auto" }}
            >
              {["Features", "About", "Reviews", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    style={{ pointerEvents: "auto" }} // ✅ Force clickable
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-neon-cyan transition-colors relative group"
                      style={{ pointerEvents: "auto", zIndex: 10000 }} // ✅ Force clickable
                    >
                      {item}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-neon-cyan"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                        style={{ pointerEvents: "none" }} // ✅ Don't block parent
                      />
                    </a>
                  </motion.li>
                )
              )}
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                style={{ pointerEvents: "auto" }} // ✅ Force clickable
              >
                <Link
                  href="/home"
                  style={{ pointerEvents: "auto", zIndex: 10000 }} // ✅ Force clickable
                >
                  <motion.button
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink font-bold hover:cursor-pointer"
                    {...scaleOnHover}
                    // style={{ pointerEvents: "auto", zIndex: 10000 }} 
                  >
                    Try Now
                  </motion.button>
                </Link>
              </motion.li>
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-neon-cyan"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              style={{ pointerEvents: "auto", zIndex: 10000 }} // ✅ Force clickable
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mt-4 mb-6 text-gradient"
            {...fadeInUp}
          >
            Master Your Typing Speed with{" "}
            <motion.span
              className="text-neon-pink"
              animate={{
                textShadow: [
                  "0 0 20px #FF1493",
                  "0 0 40px #FF1493",
                  "0 0 20px #FF1493",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AI Power
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Experience the ultimate typing test with real-time AI feedback,
            performance analysis, and personalized suggestions to boost your
            speed and accuracy like never before.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href={"/home"}>
              <motion.button
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue font-bold text-white text-lg group hover:cursor-pointer"
                {...scaleOnHover}
                whileHover={{
                  boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
                }}
              >
                <Zap className="w-5 h-5" />
                Start Typing Test
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </Link>
            {/* <motion.button 
              className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all text-lg"
              {...scaleOnHover}
            >
              <Eye className="w-5 h-5" />
              Watch Demo
            </motion.button> */}
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: Users,
                value: "25K+",
                label: "Active Users",
                color: "text-neon-cyan",
              },
              {
                icon: TrendingUp,
                value: "95%",
                label: "Improvement Rate",
                color: "text-neon-green",
              },
              {
                icon: Brain,
                value: "AI",
                label: "Powered",
                color: "text-neon-purple",
              },
              {
                icon: Award,
                value: "4.9",
                label: "User Rating",
                color: "text-neon-pink",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass neon-border rounded-xl p-4"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="container mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gradient mb-4"
            {...fadeInUp}
          >
            Powerful Features
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Everything you need to become a typing master with cutting-edge AI
            technology
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Zap,
              title: "Real-Time Analytics",
              description:
                "Monitor your WPM, accuracy, and errors live as you type with instant visual feedback.",
              gradient: "from-neon-cyan to-neon-blue",
            },
            {
              icon: Brain,
              title: "AI-Powered Feedback",
              description:
                "Get personalized suggestions, grammar corrections, and improvement tips powered by AI.",
              gradient: "from-neon-green to-neon-cyan",
            },
            {
              icon: Clock,
              title: "Continuous Practice",
              description:
                "Practice with unlimited text that continues until time expires, building endurance.",
              gradient: "from-neon-purple to-neon-pink",
            },
            {
              icon: BarChart3,
              title: "Performance Tracking",
              description:
                "Track your progress over time with detailed analytics and performance breakdowns.",
              gradient: "from-neon-pink to-neon-purple",
            },
            {
              icon: Target,
              title: "Smart Corrections",
              description:
                "Identify and correct grammar mistakes with detailed explanations for learning.",
              gradient: "from-neon-blue to-neon-cyan",
            },
            {
              icon: Sparkles,
              title: "Beautiful Interface",
              description:
                "Enjoy a stunning neon-themed interface with smooth animations and responsive design.",
              gradient: "from-neon-green to-neon-blue",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="glass neon-border rounded-xl p-8 text-center group"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="container mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gradient mb-8"
            {...fadeInUp}
          >
            About the Developer
          </motion.h2>

          <motion.div
            className="glass1 neon-border rounded-2xl p-8 md:p-12 "
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              boxShadow: "0 0 50px rgba(0, 245, 255, 0.2)",
            }}
          >
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple mx-auto mb-8 flex items-center justify-center z-100"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-4xl">👨‍💻</span>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi! I&apos;m a passionate full-stack developer who loves creating
              innovative web applications. This typing test app combines my
              expertise in React, TypeScript, AI integration, and modern UI/UX
              design to help people improve their typing skills in an engaging
              way.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 z-100"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.a
                href="https://instagram.com/ahaan.tsx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 group z-100"
                variants={fadeInLeft}
                {...scaleOnHover}
                whileHover={{
                  boxShadow: "0 0 30px rgba(255, 20, 147, 0.5)",
                }}
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </motion.a>

              <motion.a
                href="mdshahnawazm474@gmail.com"
                className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all z-100"
                variants={fadeInRight}
                {...scaleOnHover}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">
                Tech Stack
              </h3>
              <motion.div
                className="flex flex-wrap justify-center gap-4 "
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "AI Integration",
                  "Tailwind CSS",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/50 text-sm z-50"
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(0, 245, 255, 0.1)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        id="reviews"
        className="container mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gradient mb-4"
            {...fadeInUp}
          >
            What Users Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join thousands of satisfied users who improved their typing skills
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: "John Smith",
              role: "Software Developer",
              review:
                "This app completely transformed my typing speed! The AI feedback is incredibly helpful, and I went from 35 WPM to 65 WPM in just two weeks.",
              avatar: "👨",
              gradient: "from-neon-cyan to-neon-blue",
            },
            {
              name: "Sarah Johnson",
              role: "Content Writer",
              review:
                "The grammar correction feature is amazing! It not only improved my typing speed but also helped me write better. The UI is absolutely beautiful too.",
              avatar: "👩",
              gradient: "from-neon-green to-neon-cyan",
            },
            {
              name: "Mike Chen",
              role: "Student",
              review:
                "Perfect for students! The real-time feedback keeps me motivated, and the continuous text feature helps build stamina. Highly recommend!",
              avatar: "👨",
              gradient: "from-neon-purple to-neon-pink",
            },
            {
              name: "Emma Davis",
              role: "Virtual Assistant",
              review:
                "As a VA, typing speed is crucial for me. This app helped me reach 80+ WPM with 98% accuracy. The AI suggestions are spot-on!",
              avatar: "👩",
              gradient: "from-neon-pink to-neon-purple",
            },
            {
              name: "David Wilson",
              role: "Data Analyst",
              review:
                "Love the detailed performance analysis! The progress tracking motivates me to practice daily. Best typing app I've ever used.",
              avatar: "👨",
              gradient: "from-neon-blue to-neon-cyan",
            },
            {
              name: "Lisa Brown",
              role: "Teacher",
              review:
                "I recommend this to all my students! The educational value is incredible, and the neon theme makes learning fun and engaging.",
              avatar: "👩",
              gradient: "from-neon-green to-neon-blue",
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              className="glass neon-border rounded-xl p-6"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center mr-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xl">{review.avatar}</span>
                </motion.div>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                </div>
              </div>
              <motion.div
                className="flex mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </motion.div>
              <p className="text-gray-300 leading-relaxed">&quot;{review.review}&quot;</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="container mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gradient mb-8"
            {...fadeInUp}
          >
            Get In Touch
          </motion.h2>

          <motion.div
            className="glass neon-border rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Have questions, feedback, or want to collaborate? I&apos;d love to hear
              from you!
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.a
                href="https://instagram.com/ahaan.tsx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600"
                variants={fadeInLeft}
                {...scaleOnHover}
                whileHover={{
                  boxShadow: "0 0 40px rgba(255, 20, 147, 0.5)",
                }}
              >
                <Instagram className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">Instagram</div>
                  <div className="text-sm opacity-80">@Ahaan.tsx</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:your.email@example.com"
                className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all"
                variants={fadeInRight}
                {...scaleOnHover}
              >
                <Mail className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">Email</div>
                  <div className="text-sm opacity-80">
                    mdshahnawazm474@gmail.com
                  </div>
                </div>
              </motion.a>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3.5"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.a
                href="https://x.com/Ahankhan474"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600"
                variants={fadeInLeft}
                {...scaleOnHover}
                whileHover={{
                  boxShadow: "0 0 40px rgba(255, 20, 147, 0.5)",
                }}
              >
                <Twitter className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">X</div>
                  <div className="text-sm opacity-80">@Ahankhan474</div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/MdShahnawaz474"
                className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-neon-cyan text-neon-cyan bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 transition-all"
                variants={fadeInRight}
                {...scaleOnHover}
              >
                <GithubIcon className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">Github</div>
                  <div className="text-sm opacity-80">@MdShahnawaz474</div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="border-t border-neon-purple/30 bg-dark-900/80 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div className="mb-4 md:mb-0" {...fadeInLeft}>
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap className="text-neon-cyan w-6 h-6" />
                </motion.div>
                <span className="text-xl font-bold text-gradient">
                  Typing Speed AI
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Made with{" "}
                <motion.span
                  className="text-pink-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ♥
                </motion.span>{" "}
                by a passionate developer
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {["Features", "About", "Reviews", "Contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-cyan text-sm transition-colors"
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-700 mt-6 pt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-gray-400 text-sm">
              &copy; 2025 Typing Speed AI. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;
