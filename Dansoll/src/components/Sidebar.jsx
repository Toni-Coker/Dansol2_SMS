import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChartBar, FaBook, FaFileAlt, FaRobot } from "react-icons/fa"; // Example icons

const Sidebar = () => {
    const location = useLocation(); // Get current route for active styling

    const menuItems = [
      { name: "Dashboard", path: "/student", icon: <FaHome /> },
      { name: "Result Analysis", path: "/admin/results", icon: <FaChartBar /> },
      { name: "Past Questions", path: "/admin/past-questions", icon: <FaFileAlt /> },
      { name: "E-Notes", path: "/admin/e-notes", icon: <FaBook /> },
      { name: "AI ChatBot", path: "/admin/chatbot", icon: <FaRobot /> }
    ];
  
    return (
      <div className="sidebar">
        <h2 className="sidebar-title">Student Hub</h2>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
              <Link to={item.path}>
                {item.icon} {/* Placeholder for icons */}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Sidebar;
