import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./home.css"; // Home page styling

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
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
  );
};

export default Home;
