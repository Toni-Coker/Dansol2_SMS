import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaBook, FaRobot } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "./DashboardHome.css";

const DashboardHome = () => {
  // Retrieve stored user data
  const userData = JSON.parse(localStorage.getItem("user")) || {};
  const userName = userData.username || "Guest";

  const sections = [
    {
      name: "Past Questions",
      path: "/dashboard/past-questions",
      icon: <FaFileAlt />,
    },
    { name: "E-Notes", path: "/dashboard/e-notes", icon: <FaBook /> },
    { name: "AI ChatBot", path: "/dashboard/chatbot", icon: <FaRobot /> },
    { name: "Account", path: "/dashboard/account", icon: <MdAccountCircle /> },
  ];

  return (
    <div className="dashboard-home">
      <header className="welcome-header">
        <h1 className="account-title">Welcome, {userName} 👋</h1>
        <p>
          Explore your student hub and get started with your learning resources.
        </p>
      </header>

      <div className="dashboard-grid">
        {sections.map((section) => (
          <Link key={section.name} to={section.path} className="dashboard-card">
            <div className="icon">{section.icon}</div>
            <h2>{section.name}</h2>
            <p>Access {section.name.toLowerCase()} easily.</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
