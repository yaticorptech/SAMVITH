// src/components/SocialMediaBar.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialMediaBar = () => {
  return (
    <div>
      {/* Desktop / Laptop View (vertical left sidebar) */}
      <div className="hidden md:flex flex-col fixed top-1/3 left-0 space-y-3 z-50">
        <a
          href="https://www.facebook.com/share/1CijnMKuVU/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-3 rounded-r-lg shadow-lg hover:bg-blue-700 transition"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://x.com/Samvith_F55158"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white p-3 rounded-r-lg shadow-lg hover:bg-sky-600 transition"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://www.instagram.com/samvith_foundation?igsh=MWQxY2RhenhkbDZycw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-3 rounded-r-lg shadow-lg hover:bg-pink-600 transition"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white p-3 rounded-r-lg shadow-lg hover:bg-blue-800 transition"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white p-3 rounded-r-lg shadow-lg hover:bg-red-700 transition"
        >
          <FaYoutube size={18} />
        </a>
      </div>

      {/* Mobile View (bottom horizontal bar) */}
      <div className="flex md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full px-4 py-2 space-x-4 z-50">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:scale-110 transition">
          <FaTwitter size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition">
          <FaInstagram size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:scale-110 transition">
          <FaYoutube size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaBar;
