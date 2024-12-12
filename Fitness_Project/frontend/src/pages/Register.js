
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/api";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (!formData.username) {
      setErrorMessage("Please enter a valid username.");
      return;
    }
    if (!formData.password) {
      setErrorMessage("Please enter a valid password.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      await registerUser({ username: formData.username, password: formData.password });
      setSuccessMessage("Registration successful. Redirecting to login page...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setErrorMessage(err.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="register-page">
      {/* Background video */}
      <video className="background-video" autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/3129595/3129595-sd_640_360_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="register-container">
        <h2>Register</h2>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
