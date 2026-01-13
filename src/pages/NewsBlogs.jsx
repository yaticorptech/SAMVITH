// src/pages/NewsBlogs.jsx
import React from "react";
import { motion } from "framer-motion";

import ai1 from "../assets/images/swas2.jpeg";
import ai2 from "../assets/images/swas1.jpeg";
import ai3 from "../assets/images/swas3.png";

const NewsBlogs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-10 sm:p-14 border border-indigo-100"
        >
          {/* Decorative Gradient Blob */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-indigo-400/30 to-pink-400/30 rounded-full blur-3xl"></div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
            Introducing AI Education at Swastika International School
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-[1.05rem]">
            <p>
              At Samvith Foundation, we believe that education should grow along
              with the world students are preparing to step into. With this
              belief at the heart of our work, the Foundation supported the
              introduction of Artificial Intelligence (AI) education at Swastika
              International School by sponsoring 50% of the overall
              implementation cost.
            </p>

            <p>
              Today’s students will grow up in a world where technology plays a
              central role in every field. By bringing AI education into the
              classroom, this initiative helps students understand how
              technology works, how problems can be approached logically, and
              how ideas can be transformed into real-world solutions.
            </p>

            <p className="font-medium text-indigo-700">
              More importantly, it encourages curiosity, creativity, and
              confidence—skills that go far beyond textbooks.
            </p>

            <p>
              Samvith Foundation’s contribution was aimed at ensuring that
              access to advanced learning is not limited by resources.
              Introducing AI at the school level allows students to explore
              modern concepts early, helping them feel comfortable with
              technology rather than intimidated by it.
            </p>

            <p>
              This early exposure can spark interest, inspire innovation, and
              open doors to future opportunities.
            </p>

            <p>
              This initiative reflects the Foundation’s continued commitment to
              empowering young learners and supporting institutions that are
              willing to embrace change. By investing in future-ready education
              today, Samvith Foundation hopes to play a small but meaningful
              role in shaping a generation that is thoughtful, skilled, and
              prepared for the challenges of tomorrow.
            </p>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* Big Image */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-2xl p-4 flex">
            <div className="rounded-2xl overflow-hidden bg-gray-50 w-full flex items-center justify-center">
              <img
                src={ai1}
                alt="AI Classroom"
                className="max-h-[32rem] w-auto object-contain transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Stack */}
          <div className="flex flex-col gap-8">
            {[ai2, ai3].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-[2rem] shadow-xl p-4 flex-1 flex"
              >
                <div className="rounded-xl overflow-hidden bg-gray-50 w-full flex items-center justify-center">
                  <img
                    src={img}
                    alt={`AI Activity ${i}`}
                    className="max-h-[15rem] w-auto object-contain transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsBlogs;
