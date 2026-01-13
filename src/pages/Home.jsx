// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Leaf,
  GraduationCap,
  IdCard,
  Target,
  Heart,
} from "lucide-react";

// ✅ Images
import Hero1 from "../assets/images/swas1.jpeg";
import Hero2 from "../assets/images/ai1.png";
import Hero3 from "../assets/images/ai2.png";

import MissionImage from "../assets/images/vision1.jpeg";
import vhome from "../assets/images/mission1.jpeg";
import samvithLogo from "../assets/images/logo.png";
import YatiLogo from "../assets/images/Yaticorp.png";
import RamakrishnaLogo from "../assets/images/Ramakrishna.png";
import FarmersLogo from "../assets/images/Southcc.jpeg";
import IndiaMap from "../assets/images/INDIA.jpg";

const logos = Array(15).fill(samvithLogo);

// ✅ Glimpse Data
const glimpseData = [
  {
    title: "Education",
    description:
      "Empowering children and youth through access to quality education and resources.",
    link: "/education",
    icon: <BookOpen className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10" />,
  },
  // {
  //   title: "Women Empowerment",
  //   description:
  //     "Supporting women with opportunities, skills, and resources for a brighter future.",
  //   link: "/women-empowerment",
  //   icon: <Users className="text-pink-500 w-8 h-8 sm:w-10 sm:h-10" />,
  // },
  // {
  //   title: "Agriculture",
  //   description:
  //     "Enhancing rural livelihoods through sustainable agricultural practices.",
  //   link: "/agriculture",
  //   icon: <Leaf className="text-green-500 w-8 h-8 sm:w-10 sm:h-10" />,
  // },
  {
    title: "Scholarship / Check Eligibility",
    description:
      "Providing financial aid and opportunities for deserving students.",
    link: "/scholarship",
    icon: <GraduationCap className="text-yellow-500 w-8 h-8 sm:w-10 sm:h-10" />,
  },
  // {
  //   title: "Free AI Card",
  //   description:
  //     "Ensuring access to healthcare and services through AI-powered identity cards.",
  //   link: "/free-ai-card",
  //   icon: <IdCard className="text-purple-500 w-8 h-8 sm:w-10 sm:h-10" />,
  // },
];

const Home = () => {
  const heroImages = [Hero1, Hero2, Hero3];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [showModal, setShowModal] = useState(false);

  /**
   * NOTE: splash screen removed.
   * Keep a short delay to show the CTA modal after mount (previous behavior showed it after splash).
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500); // short delay after mount
    return () => clearTimeout(timer);
  }, []);

  // Karnataka markers positioned relative to the map container (percentages)
  const markers = [
    { name: "Bengaluru", top: "60%", left: "48%", sold: 120 },
    { name: "Mysuru", top: "68%", left: "44%", sold: 45 },
    { name: "Hubli", top: "52%", left: "35%", sold: 30 },
    { name: "Mangaluru", top: "72%", left: "38%", sold: 20 },
    { name: "Udupi", top: "69%", left: "37%", sold: 15 },
  ];

  return (
    <>
      {/* --------------------------
          Main page content (splash removed)
          -------------------------- */}
      {/* ✅ Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        {/* Slider Images */}
        {heroImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentHero === index ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          />
        ))}

        {/* elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10"></div>

        {/* content shifted UP */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-16 pb-64 flex flex-col items-center text-center gap-7 z-10">
          <h1 className="font-extrabold leading-tight text-white">
            <span className="block text-[clamp(1.9rem,5vw,3.1rem)]">
              Transforming Lives, Building a Better
            </span>
            <span className="block text-[clamp(2.4rem,6vw,4.4rem)] text-yellow-400">
              Tomorrow
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Together we can turn hope into Reality. Support our Mission and be
            part of someone’s Success Story.
          </p>

          <Link
            to="/donate-now"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-10 py-4 rounded-xl shadow-xl transition"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* ✅ Logo Slider
      <div className="w-full bg-white overflow-hidden py-6">
        <div className="flex w-max animate-scroll gap-12 sm:gap-16">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Samvith Logo"
              className="h-20 sm:h-28 w-auto object-contain"
            />
          ))}
        </div>
      </div> */}

      {/* ✅ Glimpse Section */}
      <div className="bg-[#fdfaf5] py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Our expertise across multiple practice areas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center gap-10 max-w-4xl mx-auto">
            {glimpseData.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-10 shadow-xl flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-yellow-100 to-white flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🌍 ULTRA PREMIUM VISION & MISSION */}
      <div className="relative py-28 bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 overflow-hidden">
        {/* Floating Glow Background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400/30 rounded-full blur-[140px]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-14 items-center mb-24"
          >
            <img
              src={vhome}
              className="rounded-3xl shadow-2xl hover:scale-105 transition"
            />

            <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-2xl border border-orange-200">
              <span className="absolute -top-6 left-10 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg font-bold tracking-wide">
                OUR VISION
              </span>
              <h3 className="text-3xl font-extrabold mb-4">
                The Change We Imagine
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a sustainable and inclusive society where every
                individual has access to education, healthcare and opportunities
                for a better future.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-2xl border border-pink-200 order-2 md:order-1">
              <span className="absolute -top-6 left-10 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full shadow-lg font-bold tracking-wide">
                OUR MISSION
              </span>
              <h3 className="text-3xl font-extrabold mb-4">
                The Change We Drive
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To ignite hope and opportunity by giving affordable access to
                Al-powered learning, bridging education gaps, empowering women,
                and introducing farmers to modern tools - so that technology and
                skills become a right, not a privilege, and entire communities
                can rise together.
              </p>
            </div>

            <img
              src={MissionImage}
              className="rounded-3xl shadow-2xl hover:scale-105 transition order-1 md:order-2"
            />
          </motion.div>
        </div>
      </div>

      {/* ✅ Partners Section */}
      {/* <div className="bg-gradient-to-r from-yellow-50 to-pink-30 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-gray-900">
          Supporting Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
          <div className="flex items-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src={YatiLogo}
              alt="Education Partner"
              className="h-20 sm:h-24 md:h-32 w-auto object-contain"
            />
          </div>
          <div className="flex items-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src={RamakrishnaLogo}
              alt="Women Empowerment Partner"
              className="h-20 sm:h-24 md:h-32 w-auto object-contain"
            />
          </div>
          <div className="flex items-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src={FarmersLogo}
              alt="Agriculture Partner"
              className="h-20 sm:h-24 md:h-32 w-auto object-contain"
            />
          </div>
        </div>
      </div> */}

      {/* ✅ Stats Section with Equal Map & Cards (with Karnataka markers) */}
      <div className="bg-gradient-to-r from-yellow-50 to-pink-50 py-20 px-6 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-8">
          Where We Stand, Where We Serve
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 📍 Map */}
          <div className="relative w-full h-[450px]">
            <div className="w-full h-full rounded-3xl shadow-2xl overflow-visible bg-white/80 backdrop-blur-md p-4 flex items-center justify-center">
              {/* Map wrapper is relative so markers are positioned against it */}
              <div className="relative w-full h-full">
                <img
                  src={IndiaMap}
                  alt="India Karnataka Presence"
                  className="rounded-xl w-full h-full object-contain"
                />

                {/* --- Markers (Karnataka) --- */}
                {markers.map((loc, idx) => (
                  <div
                    key={idx}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto"
                    style={{ top: loc.top, left: loc.left }}
                  >
                    <div className="relative group">
                      {/* Pulsing ring */}
                      <span className="absolute -inset-0 inline-flex w-8 h-8 rounded-full bg-red-400 opacity-60 animate-ping"></span>

                      {/* Core marker with number */}
                      <div className="relative z-10 bg-gradient-to-tr from-red-500 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg transition-transform transform group-hover:scale-110">
                        {loc.sold}
                      </div>

                      {/* Tooltip: shows on hover */}
                      <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-white text-xs text-gray-800 px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
                          <strong className="block text-sm">{loc.name}</strong>
                          <span className="block text-[11px] text-gray-600">
                            {loc.sold} units
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* small label under marker */}
                    <span className="mt-2 text-xs font-semibold text-gray-800 bg-white/90 px-2 py-0.5 rounded-lg shadow">
                      {loc.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 📊 Stats */}
          <div className="grid grid-cols-2 gap-6 h-[450px] auto-rows-fr">
            {[
              {
                value: "50+",
                label: "Villages Reached",
                icon: Target,
                color: "from-yellow-500 to-orange-500",
                bg: "bg-gradient-to-r from-yellow-500 to-orange-500",
                symbol: (
                  <motion.svg
                    className="absolute w-32 h-32 opacity-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 60,
                      ease: "linear",
                    }}
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </motion.svg>
                ),
              },
              {
                value: "10k+",
                label: "Lives Impacted",
                icon: Heart,
                color: "from-pink-500 to-red-500",
                bg: "bg-gradient-to-r from-pink-500 to-red-500",
                symbol: (
                  <motion.svg
                    className="absolute w-32 h-32 opacity-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </motion.svg>
                ),
              },
              // {
              //   value: "200+",
              //   label: "Women Empowered",
              //   icon: Users,
              //   color: "from-green-500 to-emerald-500",
              //   bg: "bg-gradient-to-r from-green-500 to-emerald-500",
              //   symbol: (
              //     <motion.svg
              //       className="absolute w-32 h-32 opacity-10"
              //       fill="currentColor"
              //       viewBox="0 0 24 24"
              //       animate={{ rotate: [0, 5, 0, -5, 0] }}
              //       transition={{
              //         repeat: Infinity,
              //         duration: 6,
              //         ease: "easeInOut",
              //       }}
              //     >
              //       <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.03 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              //     </motion.svg>
              //   ),
              // },
              {
                value: "500+",
                label: "Students Supported",
                icon: GraduationCap,
                color: "from-blue-500 to-indigo-500",
                bg: "bg-gradient-to-r from-blue-500 to-indigo-500",
                symbol: (
                  <motion.svg
                    className="absolute w-32 h-32 opacity-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM12 12l-8-4 8-4 8 4-8 4z" />
                  </motion.svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                className={`relative flex flex-col justify-center items-center rounded-2xl shadow-xl text-center bg-white/80 backdrop-blur-md border border-gray-100 hover:shadow-2xl transform transition hover:-translate-y-1 hover:scale-105 p-6 ${
                  item.label === "Students Supported"
                    ? "col-span-2 mx-auto w-[60%]"
                    : ""
                }`}
              >
                {/* Animated Background Symbol */}
                {item.symbol}

                {/* Floating Glow */}
                <motion.div
                  className={`absolute w-20 h-20 rounded-full ${item.bg} opacity-30 blur-2xl z-0`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                />

                {/* Sparkles */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
                  {[...Array(5)].map((_, idx) => (
                    <motion.span
                      key={idx}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                      initial={{ scale: 0, x: 0, y: 0, opacity: 0.7 }}
                      animate={{
                        x: [0, Math.random() * 40 - 20, 0],
                        y: [0, Math.random() * 40 - 20, 0],
                        scale: [0, 1, 0],
                        opacity: [0.7, 1, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2 + Math.random() * 2,
                        ease: "easeInOut",
                        delay: Math.random(),
                      }}
                    />
                  ))}
                </div>

                {/* Icon with circle background */}
                <div
                  className={`relative w-16 h-16 flex items-center justify-center rounded-full ${item.bg} shadow-md mb-4 transform transition hover:scale-110 z-20`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className={`text-3xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${item.color} z-20`}
                >
                  {item.value}
                </h3>
                <p className="text-gray-700 font-medium z-20">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Donation Slabs */}
      <div className="relative py-28 px-6 lg:px-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-orange-400/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-400/30 rounded-full blur-[160px]" />

        <div className="relative text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Donate Education for Students 🚀
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg">
            Every contribution empowers students with future-ready AI skills.
            Your support fuels learning, innovation, and brighter opportunities.
            🌟
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
          {[
            {
              amount: "₹1,000",
              text: "Support one student’s learning journey",
              value: 1000,
              glow: "from-orange-400 to-pink-400",
            },
            {
              amount: "₹5,000",
              text: "Help multiple students access resources",
              value: 5000,
              glow: "from-yellow-400 to-orange-400",
            },
            {
              amount: "₹10,000",
              text: "Empower a small group of students",
              value: 10000,
              glow: "from-pink-500 to-red-500",
            },
            {
              amount: "₹25,000",
              text: "Fund learning for an entire classroom",
              value: 25000,
              glow: "from-indigo-500 to-purple-500",
            },
            {
              amount: "₹50,000",
              text: "Transform a batch of students into innovators",
              value: 50000,
              glow: "from-emerald-500 to-teal-500",
            },
          ].map((card, i) => (
            <Link to="/donate-now" state={{ amount: card.value }} key={i}>
              <div className="group cursor-pointer relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition transform hover:-translate-y-3 hover:scale-105 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${card.glow} opacity-10 blur-2xl`}
                />

                <h3 className="text-4xl font-extrabold text-orange-600 mb-3 text-center">
                  {card.amount}
                </h3>

                <p className="text-gray-700 text-center">{card.text}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="relative mt-16 text-center text-lg font-semibold text-pink-600">
          🌱 Small steps create big change. Start your impact today!
        </p>
      </div>

      {/* ✅ CTA Modal Pop-up (still present; opens after mount) */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50, y: 50 }}
          transition={{ duration: 1.0, type: "spring" }}
          className="fixed bottom-4 right-4 z-50"
        >
          <motion.div className="relative bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-orange-300">
            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-gray-500 text-2xl font-bold hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-center text-orange-600">
              Almost There!
            </h2>

            {/* Message */}
            <p className="mb-6 text-gray-600 text-center">
              Sign up now for our upcoming workshop and be part of the positive
              change.
            </p>

            {/* CTA button */}
            <div className="text-center">
              <Link
                to="/Signup"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-6 py-3 
                     rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                onClick={() => setShowModal(false)}
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Home;
