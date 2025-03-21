import React from "react";
import './Login.css'

const Login = () => {
  return (
    <div className="overlay">
      <div className="login-container">
        <div className="header">
          <h1 className="heading">Log In</h1>
        </div>
        <div className="login-field">
          <form>
            <label htmlFor="school-id">School ID</label>
            <input type="text" id="school-id" placeholder="Input ID here" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Input Password here" />
            <button type="submit" className="login-button">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;