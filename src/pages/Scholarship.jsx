// src/pages/Scholarship.jsx
import React from "react";
import { motion } from "framer-motion";

// Import your images
import img1 from "../assets/images/Sch 1.jpeg";
import img2 from "../assets/images/Sch 2.jpeg";
import img3 from "../assets/images/Sch 3.jpeg";
import img4 from "../assets/images/Sch 4.jpeg";

const scholarships = [
  {
    title: "Dr. A.P.J. Abdul Kalam Genius Scholarship",
    target: "Up to PUC Students",
    amount: "₹50,000",
    color: "from-pink-100 to-pink-50",
  },
  {
    title: "Vikram Sarabhai Excellence Scholarship",
    target: "PUC and Degree Students",
    amount: "₹75,000",
    color: "from-indigo-100 to-indigo-50",
  },
  {
    title: "C.V. Raman Visionary Scholarship",
    target: "PG, Engineering, MBBS, and Other Students",
    amount: "₹75,000",
    color: "from-green-100 to-green-50",
  },
  {
    title: "Chanakya The Brilliance Scholarship",
    target: "Competitive Exam Attendees",
    amount: "₹1,00,000",
    color: "from-yellow-100 to-yellow-50",
  },
];

const Scholarship = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-8 lg:px-20">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Scholarship Opportunities for Students
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          Explore exclusive scholarships designed to support students across Karnataka.
        </p>
      </motion.div>

      {/* Scholarship Cards */}
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {scholarships.map((sch, idx) => (
          <motion.div
            key={idx}
            className={`bg-gradient-to-br ${sch.color} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col justify-between w-full`}
            whileHover={{ scale: 1.07, y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              {sch.target}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {sch.title}
            </p>
            <div className="text-xl sm:text-2xl font-bold text-indigo-700">
              {sch.amount}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empowering Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-green-700 mb-4">
          Empowering Karnataka: Free Education for 10,000+ Lives
        </h2>
        <p className="text-base sm:text-lg text-gray-700">
          We are on a mission to transform 10,000 lives across Karnataka by
          providing{" "}
          <span className="font-semibold">completely free skill-based education</span>{" "}
          and <span className="font-semibold">digital learning</span>.
        </p>
      </motion.div>

      {/* Bottom Image Slider */}
      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[img1, img2, img3, img4, img1, img2, img3, img4].map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 sm:w-80 lg:w-96">
              <img
                src={img}
                alt={`scholarship-img-${idx}`}
                className="rounded-xl shadow-lg object-cover w-full h-48 sm:h-60 lg:h-72"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Scholarship;
