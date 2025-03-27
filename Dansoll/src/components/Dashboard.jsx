import React, { useState } from "react";
import "./Dashboard.css";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaBook, FaFileAlt, FaRobot } from "react-icons/fa";
import { MdAccountCircle, MdLogout } from "react-icons/md";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    navigate("/login"); // Redirect to login page
  };

  const menuItems = [
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
    <div className="general">
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          {!collapsed && <h2 className="sidebar-title">Student Hub</h2>}

        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`sidebar-item ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={item.onClick ? item.onClick : null} // Only add onClick for Log Out
            >
              <Link to={item.path}>
                <div className="icon">{item.icon}</div>
                {!collapsed && <span className="menu-text">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
