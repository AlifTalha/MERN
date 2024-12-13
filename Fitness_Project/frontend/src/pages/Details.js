import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchExerciseById } from "../utils/api"; // Create this API utility function
import "./Details.css";


const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const loadExercise = async () => {
      try {
        const { data } = await fetchExerciseById(id); // Fetch exercise details by ID
        setExercise(data);
      } catch (err) {
        console.error("Error fetching exercise details:", err);
      }
    };
    loadExercise();
  }, [id]);

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1>User Details</h1>
      <p><strong>Username:</strong> {exercise.username}</p>
      <p><strong>Description:</strong> {exercise.description}</p>
      <p><strong>Duration:</strong> {exercise.duration} minutes</p>
      <p><strong>Date:</strong> {exercise.date.split("T")[0]}</p>
      <button onClick={() => navigate("/")}>Back to Dashboard</button>
    </div>
  );
};

export default Details;
