

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous errors
    setSuccessMessage(""); // Clear any previous success message

    if (!formData.username) {
      setErrorMessage("Please enter a valid username.");
      return;
    }

    if (!formData.password) {
      setErrorMessage("Please enter a valid password.");
      return;
    }

    try {
      const { data } = await loginUser(formData); // Assuming the API returns { token, username }
      login(data.token, data.username); // Pass both token and username to the context
      setSuccessMessage("Successfully logged in!");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect after 2 seconds
    } catch (err) {
      setErrorMessage(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <video className="background-video" autoPlay muted loop>
        <source
          src="https://videos.pexels.com/video-files/3175515/3175515-sd_640_360_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="login-container">
        <h2>Login</h2>

        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
