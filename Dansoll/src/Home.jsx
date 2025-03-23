import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Home.css"; // Home page styling

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loginPaths = ["/student-login", "/parent-login", "/teacher-login", "/admin-login"];

  // Get active index from localStorage or default to 0 (Student)
  const [activeIndex, setActiveIndex] = useState(() => {
    return localStorage.getItem("activeIndex") ? Number(localStorage.getItem("activeIndex")) : 0;
  });

  // Redirect to Student Login only on first load if not on any login page
  useEffect(() => {
    if (!loginPaths.includes(location.pathname)) {
      navigate("/student-login", { replace: true });
      setActiveIndex(0);
    }
  }, [location.pathname, navigate]);

  // Save activeIndex to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("activeIndex", activeIndex);
  }, [activeIndex]);

  return (
    <div>
      <div className="home">
        <section className="hero">
          <h1>Log In to see your dashboard</h1>
          <div className="btn-field">
            {["Student", "Parent", "Teacher", "Admin"].map((role, index) => (
              <Link to={`/${role.toLowerCase()}-login`} key={index} style={{ textDecoration: "none" }}>
                <button
                  style={{ backgroundColor: activeIndex === index ? "black" : "" }}
                  onClick={() => setActiveIndex(index)}
                >
                  {role}
                </button>
              </Link>
            ))}
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
