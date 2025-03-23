import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation(); // Get current route for active styling

    const menuItems = [
      { name: "Dashboard", path: "/student" },
      { name: "Result Analysis", path: "/admin/results" },
      { name: "Past Questions", path: "/admin/past-questions" },
      { name: "E-Notes", path: "/admin/e-notes" },
      { name: "AI ChatBot", path: "/admin/chatbot" }
    ];
  
    return (
      <div className="sidebar">
        <h2 className="sidebar-title">Student Hub</h2>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Sidebar
