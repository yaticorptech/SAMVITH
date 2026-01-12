// src/pages/NewsBlogs.jsx
import React from "react";
import { motion } from "framer-motion";

// Import sample images (replace with real ones later)
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const blogPosts = [
  {
    id: 1,
    title: "Empowering Education in Rural Areas",
    description:
      "Our recent initiative focuses on providing quality education to underprivileged children in rural communities. Volunteers and donors played a key role in making this possible.",
    image: blog1,
    date: "September 20, 2025",
  },
  {
    id: 2,
    title: "Women Empowerment Workshop",
    description:
      "A successful workshop was held to encourage women entrepreneurs. The session included skill-building, mentorship, and financial guidance.",
    image: blog2,
    date: "October 2, 2025",
  },
  {
    id: 3,
    title: "Green Agriculture Drive",
    description:
      "Our team launched a new campaign for sustainable farming methods. Farmers were trained on organic practices and eco-friendly irrigation systems.",
    image: blog3,
    date: "October 3, 2025",
  },
];

const NewsBlogs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading with Gradient + Accent Line */}
        <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block"
>
  News & Blogs
</motion.h1>


        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-600 mt-6 mb-12 max-w-2xl mx-auto"
        >
          Stay updated with the latest initiatives, success stories, and upcoming events at{" "}
          <span className="font-semibold text-indigo-600">Samvith Foundation</span>.
        </motion.p>

        {/* Blog Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/80 backdrop-blur-lg border border-gray-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {post.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>
                <button className="mt-2 text-indigo-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBlogs;
