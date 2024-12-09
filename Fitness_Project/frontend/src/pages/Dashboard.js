

import React, { useState, useEffect, useContext } from "react";
import { fetchExercises, addExercise, deleteExercise } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: "",
  });
  const { username } = useContext(AuthContext);

  const loadExercises = async () => {
    try {
      const { data } = await fetchExercises();
      setExercises(data);
    } catch (err) {
      console.error("Failed to fetch exercises:", err);
    }
  };

  useEffect(() => {
    loadExercises();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExercise(formData);
    loadExercises();
  };

  const handleDelete = async (id) => {
    await deleteExercise(id);
    loadExercises();
  };

  return (
    <div className="dashboard-container">
      <video autoPlay loop muted className="background-video">
        <source
          src="https://cdn.pixabay.com/video/2023/01/27/148208-793717949_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <h1>Welcome, {username || "Guest"}!</h1>

        <form onSubmit={handleSubmit} className="exercise-form">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Duration (mins)"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <button type="submit">Add Exercise</button>
        </form>

        <h2>Dashboard</h2>
        <table className="exercise-table">
          <thead>
            <tr>
              <th>Users</th>
              <th>Activity</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise) => (
              <tr key={exercise._id}>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(exercise._id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;







