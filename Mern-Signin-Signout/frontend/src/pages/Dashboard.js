
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Not authorized. Please login.");
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.get(`/auth/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data); // Store user data in state
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) return <p>Loading user data...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
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

export default Dashboard;
