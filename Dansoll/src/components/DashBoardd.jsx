import React from "react";
import "./Dashboard.css";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaBook, FaFileAlt, FaRobot, FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const DashBoardd = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard Home", path: "/dashboard/home", icon: <FaHome /> },
    { name: "Past Questions", path: "/dashboard/past-questions", icon: <FaFileAlt /> },
    { name: "E-Notes", path: "/dashboard/e-notes", icon: <FaBook /> },
    { name: "AI ChatBot", path: "/dashboard/chatbot", icon: <FaRobot /> },
    { name: "Account", path: "/dashboard/account", icon: <MdAccountCircle /> },
  ];

  return (
    <div className="general">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Student Hub</h2>
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.name} className={`sidebar-item ${location.pathname === item.path ? "active" : ""}`}>
              <Link to={item.path}>
                <div className="icon">{item.icon}</div>
                <span className="menu-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default DashBoardd;
