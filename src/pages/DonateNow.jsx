// src/pages/Donate.jsx
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
  FaMoneyBillWave,
  FaReceipt,
} from "react-icons/fa";
import DonationBank from "../assets/images/donate1.png";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyhRiBJskqD9n98LlAhSI9SLGwdpiKU2x-WSoZ2AdfpRF9ul1xHwYH4lOkzOvWLnAigMw/exec";

/* ================= VALIDATORS ================= */
const validators = {
  name: (v) => (!v ? "Name is required" : ""),
  phone: (v) =>
    !v
      ? "Phone number is required"
      : !/^[0-9+\-\s]{8,15}$/.test(v)
      ? "Enter a valid phone number"
      : "",
  email: (v) =>
    !v
      ? "Email is required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? "Enter a valid email"
      : "",
  address: (v) => (!v ? "Address is required" : ""),
  amount: (v) =>
    !v
      ? "Amount is required"
      : Number(v) < 1
      ? "Amount must be ₹1 or more"
      : "",
  transactionId: (v) =>
    !v ? "Transaction ID is required" : "",
  receiptUrl: (v) =>
    !v
      ? "Receipt link is required"
      : !v.includes("drive.google.com")
      ? "Paste a valid Google Drive link"
      : "",
};

const Donate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    formType: "donation",
    name: "",
    phone: "",
    email: "",
    address: "",
    amount: "",
    transactionId: "",
    receiptUrl: "",
  });

  const [errors, setErrors] = useState({});

  /* ================= LIVE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validators[name](value) }));
  };

  const isFormValid =
    Object.values(form).every((v) => v.toString().trim() !== "") &&
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
        confetti({ particleCount: 220, spread: 90, origin: { y: 0.6 } });

        Swal.fire({
          title: "🎉 Thank You!",
          html: `
            <div style="font-size:1.2rem; line-height:1.6; color:#374151;">
              <p>Your donation has been <b>successfully submitted</b>!</p>
              <p>❤️ Your support makes a real difference.</p>
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

        setForm({
          formType: "donation",
          name: "",
          phone: "",
          email: "",
          address: "",
          amount: "",
          transactionId: "",
          receiptUrl: "",
        });
        setErrors({});
      } else {
        throw new Error(result.message);
      }
    } catch {
      Swal.fire("Error", "Donation submission failed", "error");
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
          Donate Now
        </h1>
        <p className="text-gray-700 text-lg mt-4">
          Your contribution helps us change lives ❤️
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10 relative"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <Input icon={FaUser} name="name" placeholder="Full Name" form={form} errors={errors} onChange={handleChange} />

          {/* Phone */}
          <Input icon={FaPhone} name="phone" placeholder="Phone Number" form={form} errors={errors} onChange={handleChange} />

          {/* Email */}
          <Input icon={FaEnvelope} name="email" placeholder="Email Address" form={form} errors={errors} onChange={handleChange} />

          {/* Address */}
          <Textarea icon={FaMapMarkerAlt} name="address" placeholder="Address" form={form} errors={errors} onChange={handleChange} />

          {/* Amount */}
          <Input icon={FaMoneyBillWave} name="amount" placeholder="Donation Amount (₹)" type="number" form={form} errors={errors} onChange={handleChange} />

          {/* Transaction ID */}
          <Input icon={FaReceipt} name="transactionId" placeholder="Transaction ID" form={form} errors={errors} onChange={handleChange} />

          <img src={DonationBank} alt="Bank" className="mx-auto w-64 rounded-xl shadow-md" />

          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noreferrer"
            className="block text-center text-indigo-600 font-semibold underline"
          >
            📤 Upload receipt to Google Drive
          </a>

          <p className="text-sm text-gray-500 text-center">
            Upload → Set access to “Anyone with link (Viewer)” → Paste link below
          </p>

          <Input icon={FaReceipt} name="receiptUrl" placeholder="Paste Google Drive receipt link" form={form} errors={errors} onChange={handleChange} />

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-xl font-semibold text-white ${
              !isFormValid || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90"
            }`}
          >
            {loading ? "Submitting..." : "Submit Donation"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

/* ================= REUSABLE INPUTS ================= */
const Input = ({ icon: Icon, name, placeholder, form, errors, onChange, type = "text" }) => (
  <div>
    <div className="relative">
      <Icon className="absolute top-3 left-3 text-gray-400" />
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
      />
    </div>
    {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
  </div>
);

const Textarea = ({ icon: Icon, name, placeholder, form, errors, onChange }) => (
  <div>
    <div className="relative">
      <Icon className="absolute top-3 left-3 text-gray-400" />
      <textarea
        rows="2"
        name={name}
        value={form[name]}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400"
      />
    </div>
    {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
  </div>
);

export default Donate;
