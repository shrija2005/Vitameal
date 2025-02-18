import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // To programmatically navigate

const LandingPage = () => {
  const navigate = useNavigate();

  const handleContinueWithoutMail = () => {
    // Redirect to Home page directly
    navigate("/home");
  };

  return (
    <div className="landing-page">
      <h1>Welcome to VitaMeal 🍲</h1>
      <p>Your AI-powered personalized diet planner.</p>
      
      {/* Buttons for Sign In, Sign Up, and Continue Without Mail */}
      <Button variant="primary" onClick={() => navigate("/signin")}>Sign In</Button>
      <Button variant="secondary" onClick={() => navigate("/signup")}>Sign Up</Button>
      <Button variant="light" onClick={handleContinueWithoutMail}>
        Continue Without Mail
      </Button>
    </div>
  );
};

export default LandingPage;
