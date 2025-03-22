import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Foot from "./Foot";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
import Navs from "./Navs";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navs /> {/* Navbar at the top */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Foot /> {/* Footer at the bottom */}
      </Router>
    </div>
  );
};

export default App;
