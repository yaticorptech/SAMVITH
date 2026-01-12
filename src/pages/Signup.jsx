// src/pages/Signup.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import SuccessModal from "../components/SuccessModal";
import SignupIllustration from "../assets/images/logo.png"; // Use a unique illustration

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-peach-50 via-yellow-50 to-pink-50 relative overflow-hidden px-6 py-12">

      {/* Floating shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full opacity-40 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-200 rounded-full opacity-40 animate-blob animation-delay-2000"></div>

      {showSuccess && <SuccessModal message="Account Created!" redirectTo="/login" />}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="flex flex-col md:flex-row bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full"
      >
       {/* Left Illustration */}
<div className="flex w-full md:w-1/2 bg-gradient-to-tr from-peach-300 via-yellow-200 to-pink-200 items-center justify-center p-6">
  <img
    src={SignupIllustration}
    alt="Signup Illustration"
    className="w-48 sm:w-64 md:w-full h-auto object-contain animate-float"
  />
</div>


        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 relative">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-transparent mb-4"
          >
            Join the Movement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 mb-8"
          >
            Sign up for our upcoming workshop and be part of the change.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { icon: User, name: "name", placeholder: "Full Name", color: "text-orange-400" },
              { icon: Mail, name: "email", placeholder: "Email Address", color: "text-pink-400" },
              { icon: Lock, name: "password", placeholder: "Password", color: "text-red-400", type: "password" },
            ].map(({ icon: Icon, name, placeholder, color, type }) => (
              <motion.div
                key={name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <Icon className={`absolute left-3 top-3 ${color}`} size={22} />
                <input
                  type={type || "text"}
                  name={name}
                  placeholder={placeholder}
                  value={form[name]}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:ring-4 focus:ring-orange-300 focus:outline-none shadow-sm hover:shadow-md transition-all duration-300"
                />
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 99, 71, 0.7)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Sign Up
            </motion.button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
