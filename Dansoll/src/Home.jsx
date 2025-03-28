import React from "react";
import "./Home.css";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div>
      <Hero /> {/* This will always show, no redirects */}
    </div>
  );
};

export default Home;
