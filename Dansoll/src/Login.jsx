import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is already logged in
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setError("Account already logged in. Please log out first.");
    }
  }, []);

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }

    // Prevent login if the user is already logged in
    if (localStorage.getItem("user")) {
      setError("Account already logged in. Please log out first.");
      return;
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Store user data (username & email)
      const userData = { username, email: user.email };
      localStorage.setItem("user", JSON.stringify(userData));

      console.log("Google Sign-In Successful", userData);
      navigate("/dashboard/home"); // Redirect to Account Page
    } catch (err) {
      setError("Google Sign-In Failed");
    }
  };

  return (
    <div className="Log">
      <div className="home">
        <div className="login-container">
          <div className="header">
            <h1 className="heading">Log In</h1>
          </div>
          <div className="login-field">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              disabled={!!localStorage.getItem("user")}
            />
            <button
              className="google-button"
              onClick={handleGoogleSignIn}
              disabled={!!localStorage.getItem("user")}
            >
              Sign in with Google
            </button>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
