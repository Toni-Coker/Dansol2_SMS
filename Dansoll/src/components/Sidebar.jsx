import React, { useState } from "react";
import './Sidebar.css'
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChartBar, FaBook, FaFileAlt, FaRobot } from "react-icons/fa"; // Example icons
import { MdAccountCircle, MdLogout } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation(); // Get current route for active styling
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/student", icon: <FaHome /> },
    { name: "Result Analysis", path: "/admin/results", icon: <FaChartBar /> },
    {
      name: "Past Questions",
      path: "/admin/past-questions",
      icon: <FaFileAlt />,
    },
    { name: "E-Notes", path: "/admin/e-notes", icon: <FaBook /> },
    { name: "AI ChatBot", path: "/admin/chatbot", icon: <FaRobot /> },
    { name: "Account", path: "/admin/account", icon: <MdAccountCircle /> },
    { name: "Log Out", path: "/admin/logout", icon: <MdLogout /> },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && <h2 className="sidebar-title">Student Hub</h2>}
        <button className="collapse-btn" onClick={toggleSidebar}>
          {collapsed ? ">>" : "<<"}
        </button>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`sidebar-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <Link to={item.path}>
              <div className="icon">{item.icon}</div>
              {!collapsed && <span className="menu-text">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
