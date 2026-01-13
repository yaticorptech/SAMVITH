import React, { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import DonationBank from "../assets/images/donate1.png";
import SamvithLogo from "../assets/images/logo.jpeg";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzMYHOoMXDTKw8Hj-JjapohqfK7-hRXa1140TeYIlLY8Yp6S9kAf7UUKzpP4c-jl9_Gig/exec";

/* ================= VALIDATIONS ================= */
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidIndianPhone = (phone) =>
  /^\+91\d{10}$/.test(phone);

const DonateNow = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "+91",
    address: "",
    email: "",
    amount: "",
    transactionId: "",
    receiptUrl: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ================= SUBMIT VALIDATION ================= */
  const handleSubmit = (e) => {
    if (!form.name.trim()) {
      e.preventDefault();
      return Swal.fire("Invalid Name", "Please enter your name.", "warning");
    }

    if (!isValidEmail(form.email)) {
      e.preventDefault();
      return Swal.fire("Invalid Email", "Enter a valid email.", "warning");
    }

    if (!isValidIndianPhone(form.phone)) {
      e.preventDefault();
      return Swal.fire(
        "Invalid Phone",
        "Phone must be in +91XXXXXXXXXX format.",
        "warning"
      );
    }

    if (!form.amount || Number(form.amount) < 1) {
      e.preventDefault();
      return Swal.fire(
        "Invalid Amount",
        "Donation amount must be ₹1 or more.",
        "warning"
      );
    }

    if (!form.receiptUrl.includes("drive.google.com")) {
      e.preventDefault();
      return Swal.fire(
        "Invalid Receipt Link",
        "Please paste a valid Google Drive file link.",
        "warning"
      );
    }

    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we submit your donation",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4 sm:px-10">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">

        {/* Background blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-40" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full blur-2xl opacity-40" />

        {/* Logo */}
        <div className="relative text-center mb-6">
          <motion.img
            src={SamvithLogo}
            alt="Samvith Logo"
            className="w-32 h-32 object-contain mx-auto rounded-full"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* FORM (SAFE GAS SUBMIT) */}
        <form
          action={GOOGLE_SCRIPT_URL}
          method="POST"
          onSubmit={handleSubmit}
          className="relative z-10 space-y-5"
        >
          {[
            { name: "name", placeholder: "Full Name", type: "text" },
            { name: "phone", placeholder: "+91XXXXXXXXXX", type: "tel" },
            { name: "email", placeholder: "Email Address", type: "email" },
            { name: "address", placeholder: "Address", type: "text" },
            { name: "amount", placeholder: "Donation Amount (₹)", type: "number", min: 1 },
            { name: "transactionId", placeholder: "Transaction ID", type: "text" },
          ].map((field, i) => (
            <input
              key={i}
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              min={field.min}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3
                         focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          ))}

          {/* Bank Details */}
          <img
            src={DonationBank}
            alt="Bank Details"
            className="mx-auto w-64 rounded-xl shadow-md"
          />

          {/* Upload Instructions */}
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-indigo-600 font-semibold underline"
          >
            📤 Upload receipt to your Google Drive
          </a>

          <p className="text-sm text-gray-500 text-center">
            Upload receipt → Get link → Set access to “Anyone with link (Viewer)” → Paste below
          </p>

          {/* Receipt Link */}
          <input
            type="url"
            name="receiptUrl"
            placeholder="Paste Google Drive receipt link here"
            value={form.receiptUrl}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3
                       focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 rounded-xl text-white font-bold
                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                       shadow-lg"
          >
            Submit Donation
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default DonateNow;
