import React from "react";
import './Hero.css'
import dansol from "../assets/dansol_logo-removebg-preview.png";

const Hero = () => {
  return (
    <div>
      <div class="hero">
        <img src={dansol} alt="" />
        <h1 class="mainh1">Dansol High School Student Hub</h1>
        <em>School in a nutshell</em>
      </div>
    </div>
  );
};

export default Hero;
