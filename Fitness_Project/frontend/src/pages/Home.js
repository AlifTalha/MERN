
import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const navigate = useNavigate();

  // Live clock effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>Welcome to Your Fitness Dashboard</h1>
        <p className="live-clock">Live Time: {time}</p>
      </header>

      {/* Workout Cards Section */}
      <section className="workout-cards">
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMH1MVcbZwIo10cO3mmLVEdTl1TYE7R4bcA&s" alt="Weight Training" />
          <h2>Weight Training</h2>
          <h4>5 Sets 10 Reps</h4>
        </div>
        <div className="card">
          <img src="https://hips.hearstapps.com/hmg-prod/images/exercise-with-weights-royalty-free-image-587204700-1547584208.jpg?crop=0.668xw:1.00xh;0.107xw,0&resize=1200:*" alt="Dumbbell Workout" />
          <h3>Dumbbell Workout</h3>
          <h4>6 Sets 10 Reps</h4>
        </div>
        <div className="card">
          <img src="https://i.ytimg.com/vi/7EHSN5T-ZQE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYEftgBRP_473KTOErDvu7D8s7FQ" alt="Heavy Bag Hit" />
          <h2>Heavy Bag Hit</h2>
          <h4>30 Minutes</h4>
        </div>
        <div className="card">
          <img src="https://live.staticflickr.com/3455/3781459842_7c56e225e9_b.jpg" alt="Calories" />
          <h2>1780 Kcal</h2>
          <h4>6 Meals a Day</h4>
        </div>
      </section>

      {/* Weekly Summary and Food Charts */}
      <section className="summary-food-section">
        <div className="weekly-summary">
          <h3>Weekly Summary</h3>
          <div className="chart">
            {/* Dummy bar graph */}
            <div className="bar" style={{ height: "60%" }}><span>Sat</span></div>
            <div className="bar" style={{ height: "70%" }}><span>Sun</span></div>
            <div className="bar active" style={{ height: "90%" }}><span>Tue</span></div>
            <div className="bar" style={{ height: "100%" }}><span>Wed</span></div>
            <div className="bar" style={{ height: "80%" }}><span>Thu</span></div>
          </div>
        </div>
        <div className="food-chart">
  <h3>Food</h3>
  <div className="line-chart">
    {/* Adding a graph image */}
    <img
      src="https://knowledge.carolina.com/wp-content/uploads/2021/08/graph_3068300.jpg" 
      alt="Food Chart"
      className="graph-image"
    />
    {/* <span className="calorie-point">236 kcal</span> */}
  </div>
</div>

      </section>

      {/* Scheduled Section */}
      <section className="scheduled">
        <h3>Scheduled</h3>
        <div className="scheduled-items">
          <div className="scheduled-card">
            <span className="badge workout">WORKOUT</span>
            <h3>Body Workout</h3>
            <h3>7 Apr</h3>
          </div>
          <div className="scheduled-card">
            <span className="badge cardio">CARDIO</span>
            <h3>Running Challenge</h3>
            <h3>100 Days</h3>
          </div>
          <div className="scheduled-card">
            <span className="badge food">FOOD</span>
            <h3>High Protein Diet</h3>
            <h3>120 Cal</h3>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <footer className="navigation-buttons">
        <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </footer>
    </div>
  );
};

export default Home;
