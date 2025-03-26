import React from "react";
import "./Navs.css";
import { Link } from "react-router-dom";
import dansol from "./assets/dansol_logo-removebg-preview.png";

const Navs = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={dansol} alt="Dansol Logo" />
      </div>

      <h1 className="title">Dansol High Student Hub</h1>
    </nav>
  );
};

export default Navs;
