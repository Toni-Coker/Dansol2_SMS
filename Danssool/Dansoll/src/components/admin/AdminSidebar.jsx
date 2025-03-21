import React from "react";
import "./AdminSidebar.css";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation(); // Get current route for active styling

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Manage Students", path: "/admin/students" },
    { name: "Manage Teachers", path: "/admin/teachers" },
    { name: "Class Reports", path: "/admin/reports" },
    { name: "Attendance", path: "/admin/attendance" },
    { name: "Finance", path: "/admin/finance" },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
