// src/pages/Volunteer.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaHandsHelping } from "react-icons/fa";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyhRiBJskqD9n98LlAhSI9SLGwdpiKU2x-WSoZ2AdfpRF9ul1xHwYH4lOkzOvWLnAigMw/exec";

/* ================= VALIDATORS ================= */
const validators = {
  name: (v) => (!v ? "Name is required" : ""),
  email: (v) =>
    !v
      ? "Email is required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? "Enter a valid email"
      : "",
  phone: (v) =>
    !v
      ? "Phone number is required"
      : !/^[0-9+\-\s]{8,15}$/.test(v)
      ? "Enter a valid phone number"
      : "",
  skills: (v) =>
    !v ? "Please tell us how you can help" : "",
};

const Volunteer = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ================= HANDLE CHANGE (LIVE VALIDATION) ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validators[name](value) }));
  };

  const isFormValid =
    Object.values(form).every((v) => v.trim() !== "") &&
    Object.values(errors).every((e) => !e);

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setLoading(true);

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: fd,
      });

      const result = JSON.parse(await res.text());

      if (result.status === "success") {
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });

        Swal.fire({
          title: "🎉 Thank You!",
          html: `
            <div style="font-size:1.2rem; line-height:1.6; color:#374151;">
              <p>Your volunteer application has been <b>successfully submitted</b>!</p>
              <p>🤝 We truly appreciate your support.</p>
              <p style="font-weight:600; color:#4f46e5;">
                Redirecting to homepage...
              </p>
            </div>
          `,
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        }).then(() => navigate("/"));

        setForm({ name: "", email: "", phone: "", skills: "" });
        setErrors({});
      } else {
        throw new Error();
      }
    } catch {
      Swal.fire("Error", "Failed to submit application", "error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-16 px-4 sm:px-10">
      {/* Header */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          Volunteer With Us
        </h1>
        <p className="text-gray-700 text-lg mt-4">
          Your time & skills can change lives 💙
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10 relative"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="pl-10 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="pl-10 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <FaPhone className="absolute top-3 left-3 text-gray-400" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="pl-10 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Skills */}
          <div>
            <div className="relative">
              <FaHandsHelping className="absolute top-3 left-3 text-gray-400" />
              <textarea
                name="skills"
                rows="4"
                value={form.skills}
                onChange={handleChange}
                placeholder="How would you like to help?"
                className="pl-10 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {errors.skills && (
              <p className="text-sm text-red-500 mt-1">{errors.skills}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-xl font-semibold text-white ${
              !isFormValid || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Volunteer;
