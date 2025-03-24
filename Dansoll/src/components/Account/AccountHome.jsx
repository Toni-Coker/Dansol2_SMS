import React from "react";
import { FaUserCircle } from "react-icons/fa";
import './AccountHome.css'

const AccountHome = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    username: "johndoe",
    password: "********", // Masked for security
  };

  return (
    <div className="account-container">
      <h2 className="account-title">
        <FaUserCircle className="account-icon" />
        {user.name}
      </h2>
      <div className="account-details">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Password:</strong> {user.password}
        </p>
      </div>
      <button className="logout-btn">Log Out</button>
    </div>
  );
};

export default AccountHome;
