import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navs from "./Navs";
import OverallAdmin from "./components/admin/OverallAdmin";
import OverallStudent from "./components/student/OverallStudent";
import OverallTeacher from "./components/teacher/OverallTeacher";
import OverallParent from "./components/parent/OverallParent";
import AdminLogin from "./components/admin/AdminLogin";
import ParentLogin from "./components/parent/ParentLogin";
import TeacherLogin from "./components/teacher/TeacherLogin";
import StudentLogin from "./components/student/StudentLogin";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navs /> {/* Navbar at the top */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="student-login" element={<StudentLogin />}/>
              <Route path="parent-login" element={<ParentLogin />} />
              <Route path="teacher-login" element={<TeacherLogin />} />
              <Route path="admin-login" element={<AdminLogin />} />
            </Route>
            <Route path="/admin" element={<OverallAdmin />} />
            <Route path="/student" element={<OverallStudent />} />
            <Route path="/teacher" element={<OverallTeacher />} />
            <Route path="/parent" element={<OverallParent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
