// src/pages/Trustee.jsx
import React from "react";
import { motion } from "framer-motion";

// Import images
import handshake1 from "../assets/images/Bhoomika.jpeg";
// import handshake2 from "../assets/images/Kripa_123.png";
import handshake3 from "../assets/images/yathifinaltrust.png"; // Yatheesha

const trustees = [
  {
    name: "Yatheesha K S",
    role: "President",
    image: handshake3,
  },
  {
    name: "Kripa Prabhu K",
    role: "Treasurer",
    image: handshake2,
  },
  {
    name: "Bhoomika Poojary",
    role: "Secretary",
    image: handshake1,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

const Trustee = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-16 text-center">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-16 
                   bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                   bg-clip-text text-transparent"
      >
        Our Trustees
      </motion.h1>

      {/* Trustees Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row justify-center items-center gap-12"
      >
        {trustees.map((trustee, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="flex flex-col items-center"
          >
            {/* Circular Image with Glow */}
            <motion.div
              whileHover={{
                boxShadow: "0 0 30px rgba(99, 102, 241, 0.6)", // Indigo glow
              }}
              transition={{ duration: 0.3 }}
              className="relative rounded-full"
            >
              <img
                src={trustee.image}
                alt={trustee.name}
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 
                           rounded-full object-cover border-4 border-indigo-500 
                           transition-transform duration-500 hover:scale-110"
              />

              {/* Role Badge */}
              <span
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 
                           text-xs font-bold px-3 py-1 rounded-full shadow-md
                           bg-indigo-500 text-white"
              >
                {trustee.role}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="mt-6 text-2xl font-semibold text-gray-800"
            >
              {trustee.name}
            </motion.h2>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Trustee;
