import React from "react";
import "./Navs.css"; 
import dansol from './assets/dansol_logo-removebg-preview.png'

const Navs = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={dansol} alt="Dansol Logo" />
      </div>

      {/* Title */}
      <h1 className="title">Dansol High School App</h1>
    </nav>
  );
};

export default Navs;
