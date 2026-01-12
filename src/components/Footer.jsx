// src/components/Footer.jsx
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-400/60 text-gray-800 py-10 overflow-hidden">
      {/* Decorative background blur shapes */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Footer container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
          {/* Logo + About */}
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <img
              src={logo}
              alt="Samvith Logo"
              className="w-40 sm:w-48 object-contain"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Samvith Foundation
            </h2>
            <p className="text-gray-700 text-base leading-snug max-w-xs">
              Empowering communities with trust, values, and education —
              transforming lives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start space-y-2">
  <h3 className="text-base font-semibold text-indigo-700 uppercase tracking-wide">
    Quick Links
  </h3>
  <ul className="space-y-1 text-gray-700 font-medium text-base">
    {[
      { name: "Home", to: "/" },
      { name: "About Us", to: "/about" },
      // { name: "Trustees", to: "/trustee" },
      { name: "Contact", to: "/contact" },
      { name: "News & Blogs", to: "/news-blogs" }
    ].map((link) => (
      <li key={link.name}>
        <Link
          to={link.to}
          className="hover:text-indigo-600 transition-colors duration-300"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


          {/* Contact & Social */}
          <div className="flex flex-col items-center sm:items-start lg:items-end space-y-3">
            <h3 className="text-base font-semibold text-indigo-700 uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="flex flex-col items-center sm:items-start lg:items-end text-base space-y-1">
              <a
                href="mailto:contact@samvithfoundation.com"
                className="inline-flex items-center gap-2 hover:text-indigo-600 transition duration-300"
              >
                <Mail size={16} /> contact@samvithfoundation.com
              </a>
              <a
                href="tel:+918951355158"
                className="inline-flex items-center gap-2 hover:text-indigo-600 transition duration-300"
              >
                <Phone size={16} /> +91 89513 55158
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-2">
              {[
                { icon: <Facebook size={18} />, color: "#1877F2" },
                { icon: <Twitter size={18} />, color: "#1DA1F2" },
                {
                  icon: <Instagram size={18} />,
                  color:
                    "radial-gradient(circle at 30% 30%, #fdf497, #fd5949, #d6249f, #285AEB)",
                },
                { icon: <Linkedin size={18} />, color: "#0077B5" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-full hover:scale-110 transition-transform shadow-md"
                  style={{ background: social.color }}
                >
                  {React.cloneElement(social.icon, { className: "text-white" })}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-black-700 text-sm">
          © {new Date().getFullYear()} Samvith Foundation — All Rights Reserved
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full shadow-md transition-transform hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
