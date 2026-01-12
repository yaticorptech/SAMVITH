// src/pages/Donate.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import DonationBank from "../assets/images/donatecard.jpeg";
import SamvithLogo from "../assets/images/logo.jpeg";

const GOOGLE_SCRIPT_URL ="https://script.google.com/macros/s/AKfycbxStJfg1LyPCFaXI0qfz_tai27CIkNPb_qowLAsE7s5Kt8qEiOGEgq-LOuLzT09-hbiJQ/exec";

const DonateNow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialAmount = location.state?.amount || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "+91",
    address: "",
    email: "",
    amount: initialAmount,
    transactionId: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        // Confetti animation
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });

        // SweetAlert2 popup
        Swal.fire({
          title: "Thank You!",
          html: `
            <p style="font-size:1.1rem;">Your donation of ₹${formData.amount} was successful!</p>
            <p>Transaction ID: <b>${formData.transactionId}</b></p>
            <p>You are making a real difference!</p>
            <p>Redirecting to homepage...</p>
          `,
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didClose: () => navigate("/"),
        });

        // Reset form
        setFormData({
          name: "",
          phone: "+91",
          address: "",
          email: "",
          amount: "",
          transactionId: "",
        });
      } catch (error) {
        console.error("Error:", error);
        Swal.fire(
          "Oops!",
          "Something went wrong while saving your donation.",
          "error"
        );
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4 sm:px-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
          Donate Now
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
          Support our initiatives and empower communities. Your contribution
          makes a
          <span className="text-blue-600 font-semibold"> huge impact!</span>
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
        {/* Logo */}
        <div className="relative text-center">
          <motion.img
            src={SamvithLogo}
            alt="Samvith Logo"
            className="w-32 h-32 object-contain mx-auto rounded-full"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          />
        </div>

        <form className="relative space-y-6 mt-8" onSubmit={handleSubmit}>
          {[
            { label: "Name", type: "text", name: "name" },
            {
              label: "Phone (+91)",
              type: "tel",
              name: "phone",
              pattern: "\\+91\\d{10}",
            },
            { label: "Address", type: "text", name: "address" },
            { label: "Email", type: "email", name: "email" },
            { label: "Amount (₹)", type: "number", name: "amount", min: 1 },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-gray-700 mb-2 font-medium">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                pattern={field.pattern}
                min={field.min}
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />
            </div>
          ))}

          {/* Bank Details */}
          <div className="text-center mt-4">
            <img
              src={DonationBank}
              alt="Donation Bank Details"
              className="mx-auto w-64 h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Transaction ID */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Transaction ID
            </label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              required
              placeholder="Enter your transaction ID"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          {/* Donate Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : "Donate"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default DonateNow;
