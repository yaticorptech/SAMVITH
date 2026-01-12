// src/pages/Education.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import sampleImage1 from "../assets/images/education4.png";
import sampleImage2 from "../assets/images/educarion 5.png";
import sampleImage3 from "../assets/images/edu 6.png";

const programs = [
  {
    id: 1,
    title: "Programs for Children",
    description:
      "We organize fun, engaging, and educational programs to support holistic growth for children.",
    icon: <Users size={40} className="text-indigo-600" />,
    color: "from-pink-100 to-pink-50",
  },
  {
    id: 2,
    title: "Literacy Drives",
    description:
      "Our literacy campaigns aim to spread education in rural and underprivileged communities.",
    icon: <BookOpen size={40} className="text-green-600" />,
    color: "from-green-100 to-green-50",
  },
  {
    id: 3,
    title: "Scholarships",
    description:
      "We provide scholarships to deserving students, helping them achieve their academic dreams.",
    icon: <GraduationCap size={40} className="text-purple-600" />,
    color: "from-purple-100 to-purple-50",
  },
];

const images = [sampleImage1, sampleImage2, sampleImage3];

const impactHighlights = [
  { title: "500+ Students Benefited", icon: <Users className="w-10 h-10 text-indigo-600" /> },
  { title: "120+ Literacy Camps", icon: <BookOpen className="w-10 h-10 text-green-600" /> },
  { title: "80+ Scholarships", icon: <GraduationCap className="w-10 h-10 text-purple-600" /> },
];

// Program Card
const ProgramCard = ({ program, index }) => (
  <motion.div
    className={`relative rounded-3xl shadow-lg p-8 flex flex-col items-center text-center overflow-hidden bg-gradient-to-br ${program.color}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 rounded-3xl pointer-events-none"
      whileHover={{ rotate: 3, scale: 1.1, opacity: 0.2 }}
    />
    <motion.div
      className="mb-6 z-10"
      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {program.icon}
    </motion.div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3 z-10">{program.title}</h3>
    <p className="text-gray-700 leading-relaxed z-10">{program.description}</p>
  </motion.div>
);

const Education = () => {
  const [quantity, setQuantity] = useState(15);
  const pricePerCard = 499;
  const total = quantity * pricePerCard;

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4">
          Education Initiatives
        </h1>
        <p className="text-lg text-gray-600">
          Empowering communities through{" "}
          <span className="font-semibold">Programs for Children</span>,{" "}
          <span className="font-semibold">Literacy Drives</span>, and{" "}
          <span className="font-semibold">Scholarships</span>.
        </p>
      </motion.div>

      {/* Programs Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {programs.map((program, index) => (
          <ProgramCard key={program.id} program={program} index={index} />
        ))}
      </div>

      {/* Continuous Auto-sliding Images */}
      <div className="overflow-hidden relative mb-16">
        <motion.div
          className="flex gap-6 sm:gap-8 lg:gap-10"
          style={{ whiteSpace: "nowrap" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
        >
          {[...images, ...images].map((img, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-full sm:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-lg relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`Education ${idx + 1}`}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover transition duration-500 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 via-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Impact Highlights */}
      <div className="max-w-8xl mx-auto mb-18">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Impact Highlights
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
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

      {/* Donation Section */}


    <section className="relative w-full mt-24 overflow-hidden">
  {/* Parallax Floating Layers with Peach Colors */}
  {/* Layer 1 */}
  <motion.div
    className="absolute top-0 left-0 w-[120%] h-72 bg-gradient-to-r from-[#FFD2B3] via-[#FFBFA1] to-[#FFC9A3] opacity-30 blur-3xl"
    animate={{ x: [0, -50, 0], y: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
  />
  {/* Layer 2 */}
  <motion.div
    className="absolute top-32 left-0 w-[110%] h-64 bg-gradient-to-r from-[#FFC9A3] via-[#FFBFA1] to-[#FFD2B3] opacity-20 blur-2xl"
    animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
  />
  {/* Layer 3 */}
  <motion.div
    className="absolute top-56 left-0 w-[130%] h-80 bg-gradient-to-r from-[#FFBFA1] via-[#FFD2B3] to-[#FFC9A3] opacity-15 blur-3xl"
    animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
    transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
  />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 sm:px-12 py-20 text-center">
    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
      Support Education – Donate AI Cards
    </h2>
    <p className="text-lg sm:text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
      Every card you donate empowers students with opportunities for growth, learning, and success.
    </p>

    {/* Counter */}
    <div className="flex justify-center items-center gap-10 mb-16">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        className="bg-indigo-600 text-white font-bold text-3xl px-6 py-4 rounded-full shadow-lg hover:bg-indigo-700"
      >
        –
      </motion.button>
      <motion.span
        key={quantity}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-5xl font-extrabold text-indigo-700"
      >
        {quantity}
      </motion.span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setQuantity((q) => q + 1)}
        className="bg-indigo-600 text-white font-bold text-3xl px-6 py-4 rounded-full shadow-lg hover:bg-indigo-700"
      >
        +
      </motion.button>
    </div>

    {/* Donation total */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 relative w-48 h-48 flex items-center justify-center"
    >
      <svg className="absolute inset-0 w-full h-full">
        <motion.circle
          cx="96"
          cy="96"
          r="88"
          stroke="url(#gradientStroke)"
          strokeWidth="12"
          fill="none"
          strokeDasharray="552"
          strokeDashoffset={552 - (quantity / 20) * 552}
          initial={{ strokeDashoffset: 552 }}
          animate={{ strokeDashoffset: 552 - (quantity / 20) * 552 }}
          transition={{ duration: 0.6 }}
        />
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7F50" />
            <stop offset="50%" stopColor="#FF9966" />
            <stop offset="100%" stopColor="#FFB366" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-4xl font-bold text-indigo-700">₹{total}</span>
    </motion.div>

    {/* Donate Button */}
    <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/donate-now", { state: { amount: total } })}
  className="relative inline-flex items-center gap-4 bg-gradient-to-r from-[#FF9966] via-[#FFB366] to-[#FFD2B3] text-white font-semibold text-2xl px-12 py-5 rounded-3xl shadow-2xl overflow-hidden"
  animate={{ boxShadow: ["0 0 20px rgba(255,182,102,0.4)", "0 0 35px rgba(255,182,102,0.6)", "0 0 20px rgba(255,182,102,0.4)"] }}
  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
>
  <CreditCard /> Proceed to Donate
  <motion.span
    className="absolute inset-0 bg-white/20"
    initial={{ x: "-100%" }}
    animate={{ x: "100%" }}
    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
  />
</motion.button>

  </div>
</section>








    </div>
  );
};

export default Education;
