
import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutForm from "./WorkoutForm";
import './workouts.css';



const WorkoutList = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/workouts");
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
      } catch (error) {
        console.error("Failed to fetch workouts:", error);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="workout-list-container">
      <h2>Workout Tracker</h2>
      <div className="workouts-section">
        {workouts && workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        ) : (
          <p>No workouts available. Start by adding one below!</p>
        )}
      </div>

      

      {/* Add Workout Form */}
      <div className="add-workout-form">
        {/* <h3>Add a New Workout</h3> */}
        <WorkoutForm />
      </div>
    </div>
  );
};

export default WorkoutList;


