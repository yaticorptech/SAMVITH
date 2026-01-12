// src/pages/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
import handshakeImage from "../assets/images/ab1.png";
import handshakeImage2 from "../assets/images/ab2.png";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const AboutPage = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* ------------------ Background Effects ------------------ */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 opacity-30 animate-pulse -z-20"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-30 animate-bounce-slow -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl opacity-30 animate-bounce-slow -z-10"></div>

      {/* ------------------ Heading ------------------ */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-4 drop-shadow-lg tracking-wide">
          Why Choose{" "}
          <span className="text-indigo-700 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Samvith?
          </span>
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
          With a commitment to <span className="text-pink-600 font-semibold">excellence</span>,{" "}
          <span className="text-purple-600 font-semibold">innovation</span>, and{" "}
          <span className="text-indigo-600 font-semibold">values</span>, we work
          to uplift communities and create opportunities that empower individuals
          to grow, collaborate, and succeed.
        </p>
      </motion.div>

      {/* ------------------ Mission Section ------------------ */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Mission Text */}
        <motion.div
          className="relative bg-white/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full backdrop-blur-sm border border-gray-100"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center md:text-left relative z-10">
            Our Mission
          </h2>

          <motion.ul
            className="list-disc list-inside space-y-4 text-gray-700 text-lg leading-relaxed flex-1 relative z-10"
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Empower Young Minds:",
                desc: "Provide affordable, lifetime access to cutting-edge AI and skill-based learning through our U-Skill AI Card, available at just ₹499.",
              },
              {
                title: "Bridge Education Gaps:",
                desc: "Make quality training in English, regional languages, and technology accessible to underprivileged students so they can transform their dreams into skills and sustainable livelihoods.",
              },
              // {
              //   title: "Champion Women Empowerment:",
              //   desc: "Support women to upskill, gain digital literacy, and pursue entrepreneurial or income-generating activities.",
              // },
              // {
              //   title: "Strengthen Agriculture Communities:",
              //   desc: "Introduce farmers and rural youth to AI-driven tools and modern agricultural practices, improving productivity and resilience.",
              // },
              {
                title: "Build Awareness:",
                desc: "Run community awareness programs on education, skill development, and empowerment so that technology becomes an enabler, not a barrier.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={textVariant}
                className="leading-relaxed hover:translate-x-2 transition-transform duration-300"
              >
                <span className="font-semibold text-indigo-600">{item.title}</span>{" "}
                {item.desc}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Mission Image */}
        <motion.div
          className="relative bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden flex h-full backdrop-blur-sm border border-gray-100"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="hidden md:block relative w-full h-full">
            <motion.img
              src={handshakeImage}
              alt="Mission 1"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src={handshakeImage2}
              alt="Mission 2"
              className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
          <div className="block md:hidden w-full">
            <img src={handshakeImage} alt="Mission 1" className="w-full h-60 object-cover" />
            <img src={handshakeImage2} alt="Mission 2" className="w-full h-60 object-cover" />
          </div>
        </motion.div>
      </div>

      {/* ------------------ Vision Section ------------------ */}
      <div className="relative z-10 max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Vision Image */}
        <motion.div
          className="relative bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden flex h-full order-2 md:order-1 backdrop-blur-sm border border-gray-100"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="hidden md:block relative w-full h-full">
            <motion.img
              src={handshakeImage}
              alt="Vision 1"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src={handshakeImage2}
              alt="Vision 2"
              className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
          <div className="block md:hidden w-full">
            <img src={handshakeImage} alt="Vision 1" className="w-full h-60 object-cover" />
            <img src={handshakeImage2} alt="Vision 2" className="w-full h-60 object-cover" />
          </div>
        </motion.div>

        {/* Vision Text */}
        <motion.div
          className="relative bg-white/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full order-1 md:order-2 backdrop-blur-sm border border-gray-100"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center md:text-left">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To create a future where every individual—especially children,
            women, and farmers—can access quality learning, technology, and
            opportunities, regardless of their financial or social background.
          </p>
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">
            Vision for Change
          </h3>
          <motion.ul
            className="list-disc list-inside space-y-4 text-gray-700 text-lg leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "In today’s rapidly evolving world, education must go beyond textbooks and rote learning. While premier boards such as ICSE are progressively integrating Artificial Intelligence (AI), government schools still lag behind, especially in skill-based education.",
              "Our vision is to bridge this gap by introducing AI-driven, skill-based learning modules in government schools. Leveraging AI tools for personalised learning, real-time assessment, and hands-on development, we can transform classrooms into innovation hubs.",
              "When every child—regardless of their background—has access to modern, AI-enabled education, we unlock a generation of confident, future-ready citizens who can contribute meaningfully to society and the economy.",
            ].map((point, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={textVariant}
                className="hover:translate-x-2 transition-transform duration-300"
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
