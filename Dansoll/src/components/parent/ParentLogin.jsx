import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"; // Login page styling

const ParentLogin = () => {
  return (
    <div className="login-container">
      <div className="header">
        <h1 className="heading">Log In</h1>
      </div>
      <div className="login-field">
        <form>
          <label htmlFor="school-id">School ID</label>
          <input type="text" id="school-id" placeholder="Input ID here" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Input Password here"
          />
          <Link to="/parent">
            <button className="login-button" type="submit">
              Log In
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ParentLogin;
