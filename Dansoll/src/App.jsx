import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Foot from "./Foot";
import Login from "./components/Login";
import Navs from "./Navs";
import OverallAdmin from "./components/admin/OverallAdmin";
import OverallAccountant from "./components/accountant/OverallAccountant"


const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navs /> {/* Navbar at the top */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<OverallAdmin />} />
            <Route path="/accountant" element={<OverallAccountant />} />
            <Route path="/student" element={<OverallAdmin />} />
            <Route path="/teacher" element={<OverallAdmin />} />
            <Route path="/parent" element={<OverallAdmin />} />
            <Route path="/login" element={<Login />}>
              <Route path="student" element={<Upcoming />} />
              <Route path="parent" element={<Popular />} />
              <Route path="staff" element={<Upcoming />} />
              <Route path="accountant" element={<Upcoming />} />
              <Route path="admin" element={<Popular />} />
            </Route>
          </Routes>
        </div>
        <Foot /> {/* Footer at the bottom */}
      </Router>
    </div>
  );
};

export default App;
