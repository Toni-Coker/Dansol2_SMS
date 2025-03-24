import React, { useState } from "react";
import "./Dashboard.css";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaHome, FaChartBar, FaBook, FaFileAlt, FaRobot } from "react-icons/fa"; // Example icons
import { MdAccountCircle, MdLogout } from "react-icons/md";

const Dashboard = () => {
  const location = useLocation(); // Get current route for active styling
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    {
      name: "Result Analysis",
      path: "/dashboard/results",
      icon: <FaChartBar />,
    },
    {
      name: "Past Questions",
      path: "/dashboard/past-questions",
      icon: <FaFileAlt />,
    },
    { name: "E-Notes", path: "/dashboard/e-notes", icon: <FaBook /> },
    { name: "AI ChatBot", path: "/dashboard/chatbot", icon: <FaRobot /> },
    { name: "Account", path: "/dashboard/account", icon: <MdAccountCircle /> },
    { name: "Log Out", path: "/dashboard/logout", icon: <MdLogout /> },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="general">
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
      <Outlet />
    </div>
  );
};

export default Dashboard;
