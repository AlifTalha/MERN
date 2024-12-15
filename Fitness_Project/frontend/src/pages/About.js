
import React from "react";
import "./About.css";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div className="about-page">
      {/* Background Image */}
      <div className="background-image">
        <div className="content-overlay">
          {/* Vision Section */}
          <div className="vision-section">
          <h2 style={{ color: 'yellow' }}>My Vision</h2>
            <p>
            Health Click Away believes that millions of lives can transform with the use of the latest innovations in health and technology. Therefore, we strive to bring the power of Artificial Intelligence into the hands of every individual, making healthy living more comfortable and accessible than ever before.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <h2 style={{ color: 'Blue' }}>About Us</h2>
        <p>
          Welcome to the Fitness Tracker! This platform is designed to help you
          track your fitness journey with ease. Stay motivated, track your
          activities, and achieve your fitness goals effortlessly.
          Obesity is fast becoming the #1 health crisis on the planet. From being a killing machine on its own to paving the way for a wide range of life-threatening health problems — including diabetes and heart disease — excess weight is affecting the lives of millions in more ways than we can imagine. We are not talking about the numbers because a simple Google search will pull
           up hundreds of data and stats to prove how big of a problem is it really. At the same time, it is true that the road to a healthier life isn’t a smooth one.
        </p>
        <p>
          <strong>Created by:</strong> Alif Hossain Talha
        </p>
      </div>

      {/* Two Vertical Divs */}
      <div className="info-section">
        <div className="info-box">
          <h3>How Do We Do It?</h3>
          <p>
            By combining innovative tools with user-friendly interfaces, we
            provide the perfect environment to track and monitor your progress.
          </p>
        </div>
        <div className="info-box">
          <h3>Achieve More Than Just Weight Loss</h3>
          <p>
            From improved endurance to better mental health, our tracker helps
            you reach beyond the numbers on the scale.
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <h3>Connect with me:</h3>
        <a
          href="https://www.linkedin.com/in/aliftalha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/AlifTalha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.facebook.com/alifhossaintalha19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
          />
        </a>
      </div>
      <Footer />

    </div>
  );
};

export default About;
