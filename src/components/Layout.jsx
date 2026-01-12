// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SocialMediaBar from "./Socialmediabar";

const Layout = () => {
  return (
    <div>
      {/* Social Media Sidebar */}
      <SocialMediaBar />

      {/* Page Content */}
      <div className="ml-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
