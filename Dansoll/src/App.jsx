import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import DashBoardd from "./components/DashBoardd";
import AccountHome from "./components/Account/AccountHome";
import PastQuestions from "./components/Past-Questions/PastQuestion";
import Enotes from "./components/E-Notes/Enotes";
import Chat from "./components/Chatbot/Chat";
import DashboardHome from "./components/Dashboard/DashboardHome";
import ProtectedRoute from "./ProtectedRoute"; // Import Protected Route

const App = () => {
  return (
    <div className="app-container">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protect Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoardd />}>
              <Route path="home" element={<DashboardHome />} />
              <Route path="past-questions" element={<PastQuestions />} />
              <Route path="e-notes" element={<Enotes />} />
              <Route path="chatbot" element={<Chat />} />
              <Route path="account" element={<AccountHome />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

// Wrap App with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;