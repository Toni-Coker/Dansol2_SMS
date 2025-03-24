import React from "react";
import hero from "./assets/hero-image.jpg";
import results from "./assets/results.jpg";
import enotes from "./assets/Enotes.webp";
import ai from "./assets/AI.webp";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="hero" id="right">
          <div className="img">
            <img src={hero} alt="Student using the Hub" />
          </div>
          <div className="text">
            <h1>Unlock Your Full Academic Potential</h1>
            <p>
              Dansol High School Student Hub provides seamless access to educational
              materials, performance tracking, and AI-powered assistance.
            </p>
            <Link to={'/login'} ><button className="login">Get Started</button></Link>
          </div>
        </div>

        <div className="hero" id="left">
          <div className="text">
            <h1>Access E-Notes and Past Questions</h1>
            <p>
              Gain unlimited access to a vast collection of e-notes and past
              exam questions to enhance your learning and preparation for exams.
            </p>
          </div>
          <div className="img">
            <img src={enotes} alt="E-Notes and Past Questions Access" />
          </div>
        </div>

        <div className="hero" id="right">
          <div className="img">
            <img src={results} alt="Student Checking Results" />
          </div>
          <div className="text">
            <h1>Detailed Result Analysis</h1>
            <p>
              View in-depth analysis of your academic performance, identify weak
              points, and take steps to improve your grades effectively.
            </p>
          </div>
        </div>

        <div className="hero" id="left">
          <div className="text">
            <h1>AI-Powered Assistance</h1>
            <p>
              Need help with your studies? Our AI chatbot is here to provide
              instant answers, explanations, and guidance for all subjects.
            </p>
          </div>
          <div className="img">
            <img src={ai} alt="AI Chatbot for Learning Assistance" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
