// src/pages/WhatWeDo.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const scholarships = [
  {
    title: "Dr. A.P.J. Abdul Kalam Genius Scholarship",
    target: "Up to PUC Students",
    amount: "₹50,000",
    bg: "bg-blue-50",
    icon: "🎓",
  },
  {
    title: "Vikram Sarabhai Excellence Scholarship",
    target: "PUC and Degree Students",
    amount: "₹75,000",
    bg: "bg-yellow-50",
    icon: "⭐",
  },
  {
    title: "C.V. Raman Visionary Scholarship",
    target: "PG, Engineering, MBBS, and Other Students",
    amount: "₹75,000",
    bg: "bg-orange-50",
    icon: "📘",
  },
  {
    title: "Chanakya The Brilliance Scholarship",
    target: "Competitive Exam Attendees",
    amount: "₹1,00,000",
    bg: "bg-purple-50",
    icon: "🏆",
  },
];

const WhoCanRegister = [
  { role: "Farmers", count: 5, desc: "to embrace modern techniques and digital tools", icon: "🌾", bg: "bg-green-50" },
  { role: "Students", count: 15, desc: "to improve career readiness and digital literacy", icon: "🎓", bg: "bg-blue-50" },
  { role: "Job Seekers", count: 10, desc: "to enhance employability through job-focused training", icon: "💼", bg: "bg-yellow-50" },
  { role: "Police Personnel", count: 5, desc: "to strengthen communication and tech skills", icon: "👮‍♂️", bg: "bg-purple-50" },
  { role: "Journalists / News Reporters", count: 5, desc: "to support ethical and impactful reporting", icon: "📰", bg: "bg-pink-50" },
];

const floatVariants = {
  floatUpDown: {
    y: ["0%", "-10%", "0%"],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-teal-50 min-h-screen relative overflow-hidden">

      {/* Decorative Background Shapes */}
      <motion.div
        variants={floatVariants}
        animate="floatUpDown"
        className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        variants={floatVariants}
        animate="floatUpDown"
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"
      />

      {/* SCHOLARSHIP SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative text-4xl sm:text-5xl font-extrabold mb-10 
                     bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                     bg-clip-text text-transparent cursor-pointer 
                     transition-transform duration-300 hover:scale-105 inline-block"
        >
          🎓 Scholarship Opportunities
          <span className="absolute left-1/2 -bottom-3 w-24 h-1 
                           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                           rounded-full transform -translate-x-1/2 opacity-80 
                           transition-all duration-500 hover:w-40 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]">
          </span>
        </motion.h2>

        <div className="overflow-hidden relative w-full h-10 mt-6">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute whitespace-nowrap text-lg sm:text-xl font-semibold 
                       bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                       bg-clip-text text-transparent"
          >
            Unlock your true potential with scholarships that reward brilliance, fuel your dreams, and light the path to a brighter tomorrow. 🌟
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 relative">
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={index}
              className={`${scholarship.bg} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Floating Icon */}
              <motion.div
                variants={floatVariants}
                animate="floatUpDown"
                className="absolute -top-5 -right-5 text-4xl opacity-20"
              >
                {scholarship.icon}
              </motion.div>

              <div className="flex items-center mb-3 justify-center">
                <span className="text-4xl mr-3">{scholarship.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800">{scholarship.title}</h3>
              </div>
              <p className="text-gray-600 text-lg mb-2">
                <span className="font-medium">Eligibility:</span> {scholarship.target}
              </p>
              <p className="text-gray-800 text-xl font-semibold">
                Amount: {scholarship.amount}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO CAN REGISTER SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 text-center bg-gradient-to-r from-green-50 via-white to-cyan-50 rounded-3xl my-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-10 
                     bg-gradient-to-r from-green-600 via-teal-500 to-cyan-500 
                     bg-clip-text text-transparent cursor-pointer 
                     transition-transform duration-300 hover:scale-105 inline-block"
        >
          📝 Who Can Register
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
        >
          For each constituency in Karnataka, we are selecting <strong>40 individuals</strong> from diverse backgrounds who will be trained, upskilled, and empowered to make a real impact in their communities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {WhoCanRegister.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.bg} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Floating Icon */}
              <motion.div
                variants={floatVariants}
                animate="floatUpDown"
                className="absolute -top-5 -right-5 text-3xl opacity-20"
              >
                {item.icon}
              </motion.div>

              <div className="flex items-center mb-3 justify-center">
                <span className="text-3xl mr-3">{item.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800">{item.role}</h3>
              </div>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">{item.count} Selected</span>
              </p>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mt-8"
        >
          If you belong to any of the above categories and are passionate about learning — you are eligible!
        </motion.p>
      </section>

      {/* WOMEN EMPOWERMENT SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-white via-purple-50 to-pink-50 rounded-3xl my-10 shadow-inner">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=80&w=700"
            alt="Women Empowerment"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Empowering Karnataka: Free Education for 10000+ Lives
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are on a mission to transform 10,000 lives across Karnataka by providing completely free skill-based education and digital learning.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default WhatWeDo;
