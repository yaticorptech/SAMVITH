// src/pages/Agriculture.jsx
import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Leaf, BarChart, Lightbulb } from "lucide-react";
import farmingImage1 from "../assets/images/farming 1.webp";
import farmingImage2 from "../assets/images/farming 2.webp";
import farmingImage3 from "../assets/images/farming 3.png";

const content = [
  {
    title: "Sustainable Farming",
    description:
      "Promoting eco-friendly, sustainable farming practices that preserve soil and resources.",
  },
  {
    title: "Access to Technology",
    description:
      "Providing farmers with modern agricultural technology to improve yield and efficiency.",
  },
  {
    title: "Financial Literacy",
    description:
      "Educating farmers on financial management, credit access, and investment for growth.",
  },
];

const images = [farmingImage1, farmingImage2, farmingImage3];

const impactHighlights = [
  { title: "1000+ Farmers Supported", icon: <Users className="w-10 h-10 text-green-600" /> },
  { title: "500+ Acres Covered", icon: <Leaf className="w-10 h-10 text-lime-500" /> },
  { title: "150+ Workshops", icon: <Lightbulb className="w-10 h-10 text-yellow-500" /> },
  { title: "Community Outreach", icon: <Globe className="w-10 h-10 text-teal-500" /> },
  { title: "Yield Improvement", icon: <BarChart className="w-10 h-10 text-indigo-600" /> },
];

const Agriculture = () => {
  return (
    <div className="bg-gradient-to-b from-white via-green-50 to-green-100 min-h-screen py-16 px-4 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-4 leading-tight">
          Agriculture Initiatives
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600">
          Supporting farmers through{" "}
          <span className="font-semibold">Sustainable Farming</span>,{" "}
          <span className="font-semibold">Technology Access</span>, and{" "}
          <span className="font-semibold">Financial Literacy</span>.
        </p>
      </div>

      {/* Top Hover Cards */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {content.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
              y: -5,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-semibold text-green-700 mb-3"
              whileHover={{ color: "#16a34a" }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom Continuous Image Slider */}
      <div className="overflow-hidden relative mb-16">
        <motion.div
          className="flex gap-4 sm:gap-6 lg:gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
        >
          {[...images, ...images].map((img, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-full sm:w-72 lg:w-96 rounded-2xl overflow-hidden shadow-lg relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`Agriculture ${idx + 1}`}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover transition duration-500 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 via-lime-400/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Impact Highlights */}
      <div className="max-w-8xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Impact Highlights
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {impactHighlights.map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-4">{impact.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{impact.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
