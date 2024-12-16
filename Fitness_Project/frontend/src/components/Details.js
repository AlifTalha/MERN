import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/exercises/${id}`);
        const data = await response.json();
        if (response.ok) {
          setExercise(data);
        }
      } catch (err) {
        console.error("Failed to fetch exercise details:", err);
      }
    };

    fetchDetails();
  }, [id]);

  if (!exercise) return <p>Loading...</p>;

  return (
    <div>
      <h2>{exercise.username}</h2>
      <p>{exercise.description}</p>
      <p>{exercise.duration} mins</p>
      <p>{exercise.date.split("T")[0]}</p>
    </div>
  );
};

export default Details;
