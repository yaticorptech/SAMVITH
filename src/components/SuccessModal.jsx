// src/components/SuccessModal.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ message = "Success!", redirectTo = "/", delay = 2000, showConfetti = true }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectTo);
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate, redirectTo, delay]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {showConfetti && <Confetti recycle={false} numberOfPieces={150} />}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="bg-white rounded-xl p-8 shadow-2xl text-center max-w-sm mx-4"
      >
        <h2 className="text-2xl font-bold mb-2 text-green-600">{message}</h2>
        <p className="text-gray-600">Redirecting...</p>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
