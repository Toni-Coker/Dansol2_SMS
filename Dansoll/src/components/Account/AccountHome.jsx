import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./AccountHome.css";
import { useNavigate } from "react-router-dom";

const AccountHome = () => {
  const navigate = useNavigate();

  // Retrieve stored user data
  const userData = JSON.parse(localStorage.getItem("user")) || {};

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="account-container">
      <h2 className="account-title">
        <FaUserCircle className="account-icon" />
        {userData.username || "Guest"}
      </h2>
      <div className="account-details">
        <p>
          <strong>Email:</strong> {userData.email || "No Email"}
        </p>
        <p>
          <strong>Username:</strong> {userData.username || "No Username"}
        </p>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default AccountHome;
