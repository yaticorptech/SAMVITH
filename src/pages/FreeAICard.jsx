// src/pages/FreeAICard.jsx
import React from "react";
import { motion } from "framer-motion";

// Hero / Left Image
import FreeAIImg from "../assets/images/FreeAI1.jpg";

// Gallery Images
import Gallery1 from "../assets/images/FreeAI2.jpg";
import Gallery2 from "../assets/images/FreeAI3.jpg";
import Gallery3 from "../assets/images/FreeAI4.jpg";
import Gallery4 from "../assets/images/FreeAI5.jpg";
import Gallery5 from "../assets/images/FreeAI6.png";

// Lucide Icons (or you can replace with custom SVGs)
import { Users, Briefcase, Shield, PenTool, BookOpen } from "lucide-react";

const FreeAICard = () => {
  const registrationCategories = [
    "5 Farmers – to embrace modern techniques and digital tools",
    "15 Students – to improve career readiness and digital literacy",
    "10 Job Seekers – to enhance employability through job-focused training",
    "5 Police Personnel – to strengthen communication and tech skills",
    "5 Journalists / News Reporters – to support ethical and impactful reporting",
  ];

  const learningTopics = [
    "Soft Skills & Personality Development",
    "Digital Literacy & Online Tools",
    "Career & Business Guidance",
    "Agriculture & Market Awareness (for farmers)",
    "Resume Building & Job Preparation (for job seekers)",
    "Student Mentoring & Future Planning",
  ];

  const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];

  // Eligibility cards
  const eligibility = [
    {
      icon: <Users className="w-10 h-10 text-indigo-600" />,
      title: "Farmers",
      desc: "Adopt modern techniques & digital tools.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      title: "Students",
      desc: "Improve career readiness & digital literacy.",
    },
    {
      icon: <PenTool className="w-10 h-10 text-pink-600" />,
      title: "Journalists",
      desc: "Support ethical & impactful reporting.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-yellow-600" />,
      title: "Job Seekers",
      desc: "Enhance employability & job-focused training.",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Police Personnel",
      desc: "Strengthen communication & tech skills.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-500/30 animate-gradient-slow pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Empowering Karnataka: Free Education for 10000+ Lives
          </h1>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto mb-8">
            Transform <strong>10,000 lives</strong> across Karnataka with free
            skill-based education and digital learning supported by NGOs like JCI,
            Rotary, Rotaract, Lions Club, and more.
          </p>
          <button className="bg-white text-blue-700 font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition transform">
            Register Now
          </button>
        </div>
      </div>

      {/* Who Can Register */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left Image */}
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
            <img
              src={FreeAIImg}
              alt="Free AI Education"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-purple-500/30 opacity-0 group-hover:opacity-80 transition duration-700"></div>
          </div>

          {/* Right Content */}
          <div className="bg-white rounded-3xl shadow-xl p-10 transition hover:shadow-2xl hover:scale-[1.03] flex flex-col justify-center border border-gray-100 hover:border-blue-300 relative group">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Who Can Register?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For <strong>each constituency in Karnataka</strong>, we are selecting{" "}
              <strong>40 individuals</strong> from diverse backgrounds to upskill
              and empower their communities.
            </p>
            <ul className="space-y-4 text-gray-700">
              {registrationCategories.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start transition duration-300 transform hover:translate-x-3 hover:text-blue-600"
                >
                  <span className="text-blue-600 font-bold mr-2">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-800 font-medium">
              Passionate about learning?{" "}
              <span className="text-blue-600 font-bold">You are eligible!</span>
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 rounded-3xl transition duration-700 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* What Will You Learn */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What Will You Learn?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningTopics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition transform relative group overflow-hidden"
            >
              <p className="text-gray-800 text-lg font-medium z-10 relative">
                {topic}
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 opacity-0 group-hover:opacity-70 transition duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-lg font-medium text-gray-900">
          All sessions in English & Kannada, with 24/7 online access,
          certification, daily notes, and assignments.
        </p>
      </div>

      {/* Eligibility Section */}
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-indigo-700 mb-4">
          Who Can Register?
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          For each constituency in Karnataka,{" "}
          <span className="font-semibold">40 individuals</span> will be selected.
        </p>
      </motion.div>

      {/* Eligibility Diamond Layout */}
      <div className="flex flex-col items-center gap-8 sm:gap-10 mb-16">
        {/* Top row (2 cards) */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {eligibility.slice(0, 2).map((item, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-lg text-center w-full sm:w-80 lg:w-96 overflow-hidden group"
              whileHover={{ y: -8, rotate: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-pink-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
              <div className="relative z-10 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="relative z-10 text-lg sm:text-xl font-semibold text-indigo-600 mb-2">
                {item.title}
              </h3>
              <p className="relative z-10 text-sm sm:text-base text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Middle card */}
        <motion.div
          className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-lg text-center w-full sm:w-80 lg:w-96 overflow-hidden group"
          whileHover={{ y: -8, rotate: -1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
          <div className="relative z-10 flex justify-center mb-4">
            {eligibility[2].icon}
          </div>
          <h3 className="relative z-10 text-lg sm:text-xl font-semibold text-indigo-600 mb-2">
            {eligibility[2].title}
          </h3>
          <p className="relative z-10 text-sm sm:text-base text-gray-600">
            {eligibility[2].desc}
          </p>
        </motion.div>

        {/* Bottom row (2 cards) */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {eligibility.slice(3).map((item, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-lg text-center w-full sm:w-80 lg:w-96 overflow-hidden group"
              whileHover={{ y: -8, rotate: -1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-pink-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
              <div className="relative z-10 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="relative z-10 text-lg sm:text-xl font-semibold text-indigo-600 mb-2">
                {item.title}
              </h3>
              <p className="relative z-10 text-sm sm:text-base text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Highlights Horizontal Slide */}
      <div className="max-w-full overflow-hidden py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Highlights
        </h2>
  <div className="relative w-full overflow-hidden">
  <motion.div
    className="flex gap-6"
    style={{ x: 0 }}
    animate={{ x: ["0%", "-50%"] }} // move half width because we duplicated images
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    }}
  >
    {[...galleryImages, ...galleryImages].map((img, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 w-52 h-52 rounded-3xl shadow-lg overflow-hidden relative group hover:scale-105 hover:brightness-110 transition duration-500"
      >
        <img
          src={img}
          alt={`Highlight ${idx + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/30 to-purple-400/30 opacity-0 group-hover:opacity-60 transition duration-500 rounded-3xl pointer-events-none"></div>
      </div>
    ))}
  </motion.div>
</div>

      </div>
    </div>
  );
};

export default FreeAICard;
