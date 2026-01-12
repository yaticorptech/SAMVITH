// src/pages/Contact.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCommentDots,
} from "react-icons/fa";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzgLClMlrcBITlDHevIpc_pGevQjSDo4nyP6okLVGMwyafHg7xMXvGDcDGinsQzJ_0c/exec"; // ⬅️ Replace with your Google Apps Script Web App URL

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    feedback: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => form.append(key, formData[key]));

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      const text = await res.text();
      console.log("Raw response from server:", text);

      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        throw new Error("Invalid JSON response from Google Script");
      }

      if (result.status === "success") {
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });

        Swal.fire({
          title: "🎉 Thank You!",
          html: `
            <div style="font-size: 1.2rem; line-height: 1.6; color: #374151;">
              <p>Your feedback has been <b>successfully submitted</b>!</p>
              <p>💡 We truly value your input.</p>
              <p style="font-weight: 600; color: #4f46e5;">Redirecting to homepage...</p>
            </div>
          `,
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          position: "center",
        }).then(() => {
          navigate("/");
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          feedback: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to submit your feedback. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-16 px-4 sm:px-10">
      {/* Header */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
          We’d love to hear from you 💌. Share your thoughts below —{" "}
          <span className="text-indigo-600 font-semibold">your feedback matters!</span>
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden"
      >
        {/* Floating Background Effects */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply blur-2xl opacity-40 animate-pulse"></div>

        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
            <textarea
              name="address"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
              className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Feedback */}
          <div className="relative">
            <FaCommentDots className="absolute top-3 left-3 text-gray-400" />
            <textarea
              name="feedback"
              rows="4"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Your Feedback"
              className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
