import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Dashboard Content */}
      <div className="admin-dashboard">
        {/* Welcome Section */}
        <div className="welcome-card">
          <h2>Welcome back, Admin</h2>
          <p>Manage students, teachers, and school operations efficiently.</p>
        </div>

        {/* Widgets Section */}
        <div className="admin-widgets">
          <div className="widget">
            <h3>Manage Students</h3>
            <p>View and update student records.</p>
          </div>
          <div className="widget">
            <h3>Manage Teachers</h3>
            <p>Assign teachers and view their details.</p>
          </div>
          <div className="widget">
            <h3>Class Reports</h3>
            <p>Monitor student performance and grades.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
