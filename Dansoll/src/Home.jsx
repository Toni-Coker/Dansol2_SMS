import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(() => {
    // Retrieve saved activeIndex from localStorage or default to 0 (Student)
    return parseInt(localStorage.getItem("activeIndex")) || 0;
  });

  // Effect to update activeIndex based on URL
  useEffect(() => {
    const pathToIndex = {
      "/student-login": 0,
      "/parent-login": 1,
      "/teacher-login": 2,
      "/admin-login": 3,
    };
    setActiveIndex(pathToIndex[location.pathname] ?? 0);
  }, [location.pathname]);

  // Save activeIndex when it changes
  useEffect(() => {
    localStorage.setItem("activeIndex", activeIndex);
  }, [activeIndex]);

  return (
    <div>
      <div className="home">
        <section className="hero">
          <h1>Log In to see your dashboard</h1>
          <div className="btn-field">
            <Link to="/student-login" style={{ textDecoration: "none" }}>
              <button
                style={{ backgroundColor: activeIndex === 0 ? "black" : "" }}
                onClick={() => setActiveIndex(0)}
              >
                Student
              </button>
            </Link>
            <Link to="/parent-login" style={{ textDecoration: "none" }}>
              <button
                style={{ backgroundColor: activeIndex === 1 ? "black" : "" }}
                onClick={() => setActiveIndex(1)}
              >
                Parent
              </button>
            </Link>
            <Link to="/teacher-login" style={{ textDecoration: "none" }}>
              <button
                style={{ backgroundColor: activeIndex === 2 ? "black" : "" }}
                onClick={() => setActiveIndex(2)}
              >
                Teacher
              </button>
            </Link>
            <Link to="/admin-login" style={{ textDecoration: "none" }}>
              <button
                style={{ backgroundColor: activeIndex === 3 ? "black" : "" }}
                onClick={() => setActiveIndex(3)}
              >
                Admin
              </button>
            </Link>
          </div>
        </section>
        <section className="login-field">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Home;
