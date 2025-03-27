import React from "react";
import './Hero.css'
import { Link } from "react-router-dom";
import dansol from "../assets/dansol_logo-removebg-preview.png";

const Hero = () => {
  return (
    <div>
      <div class="heroed">
        <img src={dansol} alt="" />
        <h1 class="mainh1">Dansol High School Student Hub</h1>
        <em>School in a nutshell</em>
        <Link to={'/login'} ><button className="login">Get Started</button></Link>
      </div>
    </div>
  );
};

export default Hero;
