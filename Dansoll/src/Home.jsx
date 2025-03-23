import React from "react";
import hero from './assets/hero-image.jpg'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="hero">
          <div className="img">
            <img src={hero} alt="Student Hub" />
          </div>
          <div className="text">
            <h1>
              Unlock your full academic potential with the new Dansol High
              School Student Hub
            </h1>
            <p>
              A platform designed to provide seamless access to educational
              materials, performance tracking, and AI-powered assistance.
            </p>
            <button>Get Started</button>
          </div>
        </div>

        {/* Access to E-Notes and Past Questions */}
        <div className="hero">
          <div className="text">
            <h1>Access E-Notes and Past Questions Anytime</h1>
            <p>
              Gain unlimited access to a vast collection of e-notes and past
              exam questions to enhance your learning and preparation for exams.
            </p>
          </div>
          <div className="img">
            <img src="" alt="E-Notes and Past Questions" />
          </div>
        </div>

        {/* Result Analysis Section */}
        <div className="hero">
          <div className="img">
            <img src="" alt="Result Analysis" />
          </div>
          <div className="text">
            <h1>Detailed Result Analysis to Track Your Progress</h1>
            <p>
              View in-depth analysis of your academic performance, identify weak
              points, and take steps to improve your grades effectively.
            </p>
          </div>
        </div>

        {/* AI Chatbot Section */}
        <div className="hero">
          <div className="text">
            <h1>Get Assistance from Our AI Chatbot</h1>
            <p>
              Need help with your studies? Our AI chatbot is here to provide
              instant answers, explanations, and guidance for all subjects.
            </p>
          </div>
          <div className="img">
            <img src="" alt="AI Chatbot" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
