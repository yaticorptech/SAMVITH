// src/pages/Login.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import SuccessModal from "../components/SuccessModal";
import LoginIllustration from "../assets/images/logo.png"; // Replace with your login illustration

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    setShowSuccess(true);
  };

  const inputs = [
    {
      icon: Mail,
      name: "email",
      placeholder: "Your Email Address",
      color: "text-pink-500",
    },
    {
      icon: Lock,
      name: "password",
      placeholder: "Enter Your Password",
      color: "text-yellow-500",
      type: "password",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-yellow-50 to-orange-100 relative overflow-hidden px-6 py-12">
      {/* Floating background shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>

      {showSuccess && (
        <SuccessModal
          message="Welcome Back!"
          redirectTo="/"
          showConfetti={false}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="flex flex-col md:flex-row bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full"
      >
        {/* Left Illustration */}
        {/* Left Illustration */}
<div className="flex w-full md:w-1/2 bg-gradient-to-tr from-pink-200 via-yellow-100 to-orange-100 items-center justify-center p-6">
  <img
    src={LoginIllustration}
    alt="Login Illustration"
    className="w-40 sm:w-56 md:w-3/4 h-auto object-contain animate-float"
  />
</div>


        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent mb-4"
          >
            Welcome Back
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 mb-8"
          >
            Login to continue your journey.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {inputs.map(({ icon: Icon, name, placeholder, color, type }) => (
              <motion.div
                key={name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
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
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-300 focus:outline-none shadow-sm hover:shadow-md transition-all duration-300"
                />
              </motion.div>
            ))}

            <motion.button
              whileHover={{
                scale: 1.05,
                background:
                  "linear-gradient(to right, #f472b6, #f59e0b, #ef4444)",
              }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-600 via-yellow-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Login
            </motion.button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-pink-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
