import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Foot from "./Foot";
import Login from "./components/Login";
import Navs from "./Navs";
import OverallAdmin from "./components/admin/OverallAdmin";
import OverallStudent from "./components/accountant/OverallAccountant"
import OverallTeacher from "./components/accountant/OverallTeacher"
import OverallParent from "./components/accountant/OverallParent"
import AdminLogin from "./components/admin/AdminLogin"
import ParentLogin from "./components/admin/ParentLogin"
import TeacherLogin from "./components/admin/TeacherLogin"
import StudentLogin from "./components/admin/StudentLogin"

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navs /> {/* Navbar at the top */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<OverallAdmin />} />
            <Route path="/student" element={<OverallStudent />} />
            <Route path="/teacher" element={<OverallTeacher />} />
            <Route path="/parent" element={<OverallParent />} />
            <Route path="/login" element={<Login />}>
              <Route path="student" element={<StudentLogin />} />
              <Route path="parent" element={<ParentLogin />} />
              <Route path="teacher" element={<TeacherLogin/>} />
              <Route path="admin" element={<AdminLogin />} />
            </Route>
          </Routes>
        </div>
        <Foot /> {/* Footer at the bottom */}
      </Router>
    </div>
  );
};

export default App;
