// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Trustee from "./pages/Trustee";
import Contact from "./pages/Contact";
import WhatWeDo from "./pages/WhatWeDo";  // ✅ What We Do overview
import Education from "./pages/Education"; // ✅ NEW Education page
// import WomenEmpowerment from "./pages/WomenEmpowerment";
import SocialMediaBar from "./components/Socialmediabar"; 
// import Agriculture from "./pages/Agriculture";
import Scholarship from "./pages/Scholarship";
// import FreeAICard from "./pages/FreeAICard";
import DonateNow from "./pages/DonateNow"; // ✅ Import DonateNow page
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SuccessModal from "./components/SuccessModal";
import NewsBlogs from "./pages/NewsBlogs";
import Volunteer from "./pages/Volunteer";

<Route path="/volunteer" element={<Volunteer />} />


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        {/* Navbar */}
        <Navbar />

        {/* Social Media Sidebar */}
        <SocialMediaBar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/wedo" element={<WhatWeDo />} /> 
            <Route path="/education" element={<Education />} /> {/* ✅ Added route */}
            {/* <Route path="/women-empowerment" element={<WomenEmpowerment />} /> */}
            {/* <Route path="/agriculture" element={<Agriculture />} /> */}
            <Route path="/Scholarship" element={<Scholarship />} />
            {/* <Route path="/FreeAICard" element={<FreeAICard />} /> */}
            {/* <Route path="/trustee" element={<Trustee />} /> */}
            <Route path="/news-blogs" element={<NewsBlogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate-now" element={<DonateNow />} /> {/* ✅ Donate Now route */}
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SuccessModal" element={<SuccessModal/>}/>
            <Route path="/Volunteer" element={<Volunteer />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
