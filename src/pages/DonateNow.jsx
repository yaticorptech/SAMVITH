import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import DonationBank from "../assets/images/donate1.png";
import SamvithLogo from "../assets/images/logo.jpeg";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxStJfg1LyPCFaXI0qfz_tai27CIkNPb_qowLAsE7s5Kt8qEiOGEgq-LOuLzT09-hbiJQ/exec";

/* ================= VALIDATION HELPERS ================= */
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidIndianPhone = (phone) =>
  /^\+91\d{10}$/.test(phone);

const isValidAmount = (amount) =>
  !isNaN(amount) && Number(amount) >= 1;

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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* ===== CLIENT-SIDE VALIDATION ===== */
    if (!formData.name.trim()) {
      return Swal.fire("Invalid Name", "Please enter your name.", "warning");
    }

    if (!isValidEmail(formData.email)) {
      return Swal.fire(
        "Invalid Email",
        "Please enter a valid email address.",
        "warning"
      );
    }

    if (!isValidIndianPhone(formData.phone)) {
      return Swal.fire(
        "Invalid Phone Number",
        "Phone number must be in format +91XXXXXXXXXX.",
        "warning"
      );
    }

    if (!isValidAmount(formData.amount)) {
      return Swal.fire(
        "Invalid Amount",
        "Please enter a valid donation amount (₹1 or more).",
        "warning"
      );
    }

    if (!formData.transactionId.trim()) {
      return Swal.fire(
        "Missing Transaction ID",
        "Please enter your transaction ID.",
        "warning"
      );
    }

    setLoading(true);

    /* ===== SUBMIT TO GOOGLE SHEET ===== */
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });

      Swal.fire({
        title: "Thank You!",
        html: `
          <p style="font-size:1.1rem;">
            Your donation of ₹${formData.amount} was successful!
          </p>
          <p>Transaction ID: <b>${formData.transactionId}</b></p>
          <p>You are making a real difference 💙</p>
          <p>Redirecting to homepage...</p>
        `,
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didClose: () => navigate("/"),
      });

      setFormData({
        name: "",
        phone: "+91",
        address: "",
        email: "",
        amount: "",
        transactionId: "",
      });
    } catch (error) {
      Swal.fire(
        "Error",
        "Something went wrong while saving your donation.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4 sm:px-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
          Donate Now
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
          Support our initiatives and empower communities.
          <span className="text-blue-600 font-semibold"> Your impact matters!</span>
        </p>
      </div>

      {/* Card */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <motion.img
          src={SamvithLogo}
          alt="Samvith Logo"
          className="w-32 h-32 mx-auto rounded-full mb-6"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="\+91\d{10}"
            placeholder="+911234567890"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount (₹)"
            value={formData.amount}
            onChange={handleChange}
            min="1"
            step="1"
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <img
            src={DonationBank}
            alt="Bank Details"
            className="mx-auto w-64 rounded-xl shadow-md"
          />

          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl text-white font-bold ${
              loading
                ? "bg-gray-400"
                : "bg-gradient-to-r from-blue-500 to-purple-600"
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
