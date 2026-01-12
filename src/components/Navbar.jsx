// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import LogoImg from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const linkClass = "hover:text-indigo-600 transition-colors duration-200";
  const activeClass = "text-indigo-600 font-semibold";

  return (
    <nav className="bg-neutral-200 shadow-md sticky top-0 z-50">
      <div className="mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex items-center h-20 sm:h-24 md:h-28 lg:h-32">
          {/* Logo */}
          <div className="flex-shrink-0 py-2 sm:py-0">
            <NavLink to="/">
              <img
                src={LogoImg}
                alt="Samvith Logo"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              />
            </NavLink>
          </div>

          {/* Desktop Menu (lg and above) */}
          <ul className="hidden lg:flex space-x-6 text-base xl:text-lg font-medium text-gray-800 mx-auto">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
                About Us
              </NavLink>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-indigo-600">
                What We Do <ChevronDown size={16} />
              </button>
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 invisible group-hover:visible text-sm">
                <li><NavLink to="/education" className="block px-4 py-2 hover:bg-gray-100">Education</NavLink></li>
                <li><NavLink to="/women-empowerment" className="block px-4 py-2 hover:bg-gray-100">Women Empowerment</NavLink></li>
                <li><NavLink to="/agriculture" className="block px-4 py-2 hover:bg-gray-100">Agriculture</NavLink></li>
                <li><NavLink to="/Scholarship" className="block px-4 py-2 hover:bg-gray-100">Scholarship</NavLink></li>
                <li><NavLink to="/FreeAICard" className="block px-4 py-2 hover:bg-gray-100">Free AI Card</NavLink></li>
              </ul>
            </li>
            {/* <li>
              <NavLink to="/trustee" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
                Trustees
              </NavLink>
            </li> */}
            {/* ✅ New Section Added */}
            <li>
              <NavLink to="/news-blogs" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
                News & Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Desktop Buttons (lg and above) */}
          <div className="hidden lg:flex space-x-3 ml-6">
            <NavLink
              to="/donate-now"
              className="px-3 py-2 rounded-lg text-white text-sm xl:text-base font-semibold bg-gradient-to-r from-yellow-500 to-orange-600 hover:opacity-90"
            >
              Donate Now
            </NavLink>
            <NavLink
              to="/volunteer"
              className="px-3 py-2 rounded-lg text-white text-sm xl:text-base font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90"
            >
              Volunteer
            </NavLink>
          </div>

          {/* Mobile Toggle (up to lg) */}
          <div className="lg:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (up to lg) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-3 bg-neutral-200 rounded-b-lg p-3 text-gray-800 text-base shadow-md">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              About Us
            </NavLink>
          </li>

          {/* Mobile Dropdown */}
          <li>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full hover:text-indigo-600"
            >
              What We Do{" "}
              <ChevronDown
                size={16}
                className={`transform transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {dropdownOpen && (
              <ul className="mt-2 ml-3 space-y-1 text-sm">
                <li><NavLink to="/education" onClick={() => setIsOpen(false)} className={linkClass}>Education</NavLink></li>
                <li><NavLink to="/women-empowerment" onClick={() => setIsOpen(false)} className={linkClass}>Women Empowerment</NavLink></li>
                <li><NavLink to="/agriculture" onClick={() => setIsOpen(false)} className={linkClass}>Agriculture</NavLink></li>
                <li><NavLink to="/Scholarship" onClick={() => setIsOpen(false)} className={linkClass}>Scholarship</NavLink></li>
                <li><NavLink to="/FreeAICard" onClick={() => setIsOpen(false)} className={linkClass}>Free AI Card</NavLink></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/trustee" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              Trust
            </NavLink>
          </li>
          {/* ✅ Mobile News & Blogs */}
          <li>
            <NavLink to="/news-blogs" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              News & Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : linkClass)}>
              Contact Us
            </NavLink>
          </li>

          {/* Mobile Buttons */}
          <li>
            <NavLink
              to="/donate-now"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-3 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-yellow-500 to-orange-600 hover:opacity-90"
            >
              Donate Now
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/volunteer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-3 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90"
            >
              Volunteer
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
