import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Navs from "./Navs";
import Login from "./Login";
import Dashboard from "./components/Dashboard";
import AccountHome from "./components/Account/AccountHome";
import PastQuestions from "./components/Past-Questions/PastQuestion";
import Enotes from "./components/E-Notes/Enotes";
import Chat from "./components/Chatbot/Chat";

const App = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="app-container">
      {/* Conditionally render Navs except on the home page */}
      {location.pathname !== "/" && <Navs />} 
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="results" element={<Dashboard />} />
            <Route path="past-questions" element={<PastQuestions />} />
            <Route path="e-notes" element={<Enotes />} />
            <Route path="chatbot" element={<Chat />} />
            <Route path="account" element={<AccountHome />} />
          </Route>
          <Route path="logout" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

// Wrap App with Router to provide routing context
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
