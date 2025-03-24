import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navs from "./Navs";
import Login from "./Login";
import Dashboard from "./components/Dashboard";
import AccountHome from "./components/Account/AccountHome";
import PastQuestions from "./components/Past-Questions/PastQuestion";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navs /> {/* Navbar at the top */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="results" element={<Login />} />
              <Route path="past-questions" element={<PastQuestions />} />
              <Route path="e-notes" element={<Login />} />
              <Route path="chatbot" element={<Login />} />
              <Route path="account" element={<AccountHome />} />
            </Route>
            <Route path="logout" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
