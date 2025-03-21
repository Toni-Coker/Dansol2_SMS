import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overlay">
      <div className="container"> {/* New container for proper layout */}
        <div className="head">
          <div className="header">
            <h1 className="heading">Dansol High School App</h1>
          </div>
        </div>

        <div className="Login">
          <div className="primary-buttons">
            <Link to={"/login"}>
              <button>Log in as Student</button>
            </Link>
            <Link to={"/login"}>
              <button>Log in as Parent</button>
            </Link>
            <Link to={"/login"}>
              <button>Log in as Teacher</button>
            </Link>
            <Link to={"/login"}>
              <button>Log in as Accountant</button>
            </Link>
          </div>
          <div className="secondary-button">
            <Link to={"/login"}>
              <button>Log in as Admin</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
