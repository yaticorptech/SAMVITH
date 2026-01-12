// src/pages/Volunteer.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Heart, GraduationCap, Handshake } from "lucide-react";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import volunteerBg from "../assets/images/Volunteer.png";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxEE0AcNXT13B3f5Snec0V-oBpMGwhf_j252lmI2Jdc86H41YOI1V9Myhi2oyfoVx1K3w/exec";
const SHEET_DATA_URL =
  "https://script.google.com/macros/s/AKfycbxEE0AcNXT13B3f5Snec0V-oBpMGwhf_j252lmI2Jdc86H41YOI1V9Myhi2oyfoVx1K3w/exec?action=read";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
  });
  const [loading, setLoading] = useState(false);
  const [existingData, setExistingData] = useState([]);

  useEffect(() => {
    const fetchExistingData = async () => {
      try {
        const res = await fetch(SHEET_DATA_URL);
        const data = await res.json();
        if (Array.isArray(data)) setExistingData(data);
      } catch (error) {
        console.error("Error fetching existing volunteers:", error);
      }
    };
    fetchExistingData();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const duplicate = existingData.find(
        (entry) =>
          entry.phone?.replace(/\D/g, "") === formData.phone.replace(/\D/g, "")
      );

      if (duplicate) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate Entry",
          text: "This phone number is already registered as a volunteer.",
          confirmButtonColor: "#f59e0b",
        });
        setLoading(false);
        return;
      }

      const form = new URLSearchParams(formData);
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: form,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      const text = await res.text();
      const result = JSON.parse(text);

      if (result.status === "success") {
        confetti({ particleCount: 180, spread: 70, origin: { y: 0.6 } });
        Swal.fire({
          title: "🎉 Thank You!",
          text: "Your volunteer application has been submitted successfully!",
          icon: "success",
          confirmButtonColor: "#4f46e5",
        });
        setFormData({ name: "", email: "", phone: "", skills: "" });
        setExistingData([...existingData, formData]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to submit application. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ Hero Section */}
      <section
        className="relative text-white h-[85vh] w-full flex flex-col justify-center items-center px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${volunteerBg})`,
        }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join Us as a Volunteer
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Make a real difference — share your skills, your time, and your heart
          to build a better world. 🌍
        </motion.p>
      </section>

      {/* ✅ Why Volunteer Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 text-center bg-gradient-to-b from-indigo-50 to-purple-100">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-indigo-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Volunteer?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Users className="w-14 h-14 text-green-600 mx-auto" />,
              title: "Empower Communities",
              desc: "Help uplift underprivileged groups through kindness.",
            },
            {
              icon: <Handshake className="w-14 h-14 text-indigo-600 mx-auto" />,
              title: "Build Connections",
              desc: "Collaborate and grow with passionate people.",
            },
            {
              icon: <GraduationCap className="w-14 h-14 text-pink-600 mx-auto" />,
              title: "Learn & Grow",
              desc: "Develop leadership, teamwork, and empathy.",
            },
            {
              icon: <Heart className="w-14 h-14 text-red-600 mx-auto" />,
              title: "Spread Love",
              desc: "Small acts can create a lifetime of change.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Volunteer Form Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-32 bg-gradient-to-r from-indigo-50 to-purple-50">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center text-indigo-700 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Become a Volunteer 💫
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl space-y-6 border border-indigo-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            { label: "Full Name", type: "text", name: "name", placeholder: "Enter your full name" },
            { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
            { label: "Phone Number", type: "text", name: "phone", placeholder: "Enter your phone number" },
          ].map((input, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }}>
              <label className="block text-gray-700 font-semibold mb-2">{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                placeholder={input.placeholder}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
              />
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-700 font-semibold mb-2">Skills / Interests</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Tell us how you'd like to contribute"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full text-white py-3 rounded-lg font-semibold transition-all shadow-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
};

export default Volunteer;
