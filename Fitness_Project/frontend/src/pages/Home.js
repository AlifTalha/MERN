//talha

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [quote, setQuote] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // State for live clock
  const navigate = useNavigate();

  
  const generateQuote = useCallback(() => {
    const motivationalQuotes = [
      "The secret of getting ahead is getting started.",
      "The difference between try and triumph is a little umph.",
      "Success is the sum of small efforts, repeated day in and day out.",
      "Fitness is not about being better than someone else. It’s about being better than you used to be.",
      "Don’t limit your challenges. Challenge your limits.",
    ];
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setQuote(motivationalQuotes[randomIndex]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer); 
  }, []);

  useEffect(() => {
    generateQuote(); 
  }, [generateQuote]);

  return (
    <div className="home-container">
      {/* Video Background */}
      <video autoPlay loop muted className="background-video">
        <source
          src="https://videos.pexels.com/video-files/6390166/6390166-sd_640_360_25fps.mp4" // Example video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <h1>Welcome to the Fitness Tracker!</h1>

        {/* Live Clock */}
        <p className="live-clock">Current Time: {time}</p>

        <p className="quote">{quote}</p>
        <button className="generate-quote-btn" onClick={generateQuote}>
          Get Inspired!
        </button>
        <div className="navigation-buttons">
          <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
        {/* <Footer /> */}
      </div>
    

    </div>
    
  );
};

export default Home;
