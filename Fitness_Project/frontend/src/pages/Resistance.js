

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Resistance.css";

const ResistanceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    sets: "",
    reps: "",
    date: "",
  });
  const [resistances, setResistances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch resistances on component mount
  useEffect(() => {
    const fetchResistances = async () => {
      try {
        const response = await axios.get("http://localhost:5000/resistance", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setResistances(response.data);
      } catch (error) {
        console.error("Error fetching resistances:", error);
      }
    };
    fetchResistances();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/resistance",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setMessage(response.data.message || "Resistance exercise added successfully!");

      // Update the resistance list permanently
      setResistances((prevResistances) => [response.data.resistance, ...prevResistances]);

      // Reset the form
      setFormData({
        name: "",
        weight: "",
        sets: "",
        reps: "",
        date: "",
      });
    } catch (error) {
      console.error("Error adding resistance exercise:", error);
      setMessage(
        error.response?.data?.error || "Failed to add resistance exercise."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resistance-page">
      <div className="resistance-form">
        <h2>Add Resistance Exercise</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Exercise Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Weight (kg):</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Sets:</label>
            <input
              type="number"
              name="sets"
              value={formData.sets}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Reps:</label>
            <input
              type="number"
              name="reps"
              value={formData.reps}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Add Exercise"}
          </button>
        </form>
      </div>

      <div className="resistance-list">
  <h2>Resistance Exercises</h2>
  {resistances.length === 0 ? (
    <p>No resistance exercises found.</p>
  ) : (
    <ul>
      {resistances.map((resistance) => (
        <li key={resistance._id}>
          <h3>{resistance.name}</h3>
          <p>Weight: {resistance.weight} kg</p>
          <p>Sets: {resistance.sets}</p>
          <p>Reps: {resistance.reps}</p>
          <p>Date: {new Date(resistance.date).toLocaleDateString()}</p>
          <p>Added by: {resistance.userId?.name || "Unknown User"}</p>
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
};

export default ResistanceForm;








