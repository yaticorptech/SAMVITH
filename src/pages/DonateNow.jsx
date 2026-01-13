import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import DonationBank from "../assets/images/donate1.png";
import SamvithLogo from "../assets/images/logo.jpeg";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx3qF0-qBmeov_tO2qWvQ0IZL6zeW3oIiOWv-iQ-bsBDFioMUk0tB-owUtO_s4fRZMrpQ/exec";

/* ================= VALIDATIONS ================= */
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
    receipt: null,
  });

  const [loading, setLoading] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "receipt") {
      setFormData({ ...formData, receipt: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATIONS
    if (!formData.name.trim()) {
      return Swal.fire("Invalid Name", "Please enter your name.", "warning");
    }

    if (!isValidEmail(formData.email)) {
      return Swal.fire("Invalid Email", "Enter a valid email.", "warning");
    }

    if (!isValidIndianPhone(formData.phone)) {
      return Swal.fire(
        "Invalid Phone",
        "Phone must be in +91XXXXXXXXXX format.",
        "warning"
      );
    }

    if (!isValidAmount(formData.amount)) {
      return Swal.fire(
        "Invalid Amount",
        "Donation amount must be ₹1 or more.",
        "warning"
      );
    }

    if (!formData.transactionId.trim()) {
      return Swal.fire(
        "Missing Transaction ID",
        "Please enter transaction ID.",
        "warning"
      );
    }

    if (!formData.receipt) {
      return Swal.fire(
        "Receipt Required",
        "Please upload payment screenshot/receipt.",
        "warning"
      );
    }

    const payload = new FormData();
    Object.keys(formData).forEach((key) => {
      payload.append(key, formData[key]);
    });

    setLoading(true);

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: payload,
      });

      const result = await res.json();

      if (result.status === "success") {
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });

        Swal.fire({
          title: "Thank You!",
          text:
            "Your donation has been submitted successfully. Our team will verify it shortly.",
          icon: "success",
          timer: 4000,
          showConfirmButton: false,
        }).then(() => navigate("/"));

        setFormData({
          name: "",
          phone: "+91",
          address: "",
          email: "",
          amount: "",
          transactionId: "",
          receipt: null,
        });
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      Swal.fire("Error", "Upload failed. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4 sm:px-10">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <motion.img
          src={SamvithLogo}
          alt="Samvith Logo"
          className="w-32 h-32 mx-auto rounded-full mb-6"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <form className="space-y-5" onSubmit={handleSubmit}>
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
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <img
            src={DonationBank}
            alt="Donation Bank Details"
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

          <input
            type="file"
            name="receipt"
            accept="image/*,.pdf"
            required
            onChange={handleChange}
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
            {loading ? "Submitting..." : "Donate"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default DonateNow;
