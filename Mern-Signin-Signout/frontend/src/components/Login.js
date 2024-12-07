
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Send login request
      const { data } = await axios.post("/auth/signin", formData);

      // Save token and user details in local storage or state
      localStorage.setItem("token", data.token); // Store the JWT token
      setUser(data.user); // Set user information
      setLoading(false);

      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard or another page
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      {loading && <p>Loading user data...</p>}

      {user && (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default Login;












