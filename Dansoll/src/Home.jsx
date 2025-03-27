import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Hero from "./components/Hero";
import { auth } from "./firebase"; // Import Firebase Auth
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true); // State to prevent flickering

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard"); // Redirect only if user is logged in
      }
      setCheckingAuth(false); // Set to false once auth check is complete
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [navigate]);

  if (checkingAuth) return null; // Prevent rendering Home until auth check is done

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
