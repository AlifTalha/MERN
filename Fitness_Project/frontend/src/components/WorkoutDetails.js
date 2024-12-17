
import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: workout.title,
    load: workout.load,
    reps: workout.reps,
  });

  // Handle Delete
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/workouts/${workout._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const json = await response.json();
        dispatch({ type: "DELETE_WORKOUT", payload: json });
      }
    } catch (error) {
      console.error("Failed to delete workout:", error);
    }
  };

  // Handle Edit/Save
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/workouts/${workout._id}`, {
        method: "PUT", // Correct method for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData), // Send updated data
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "UPDATE_WORKOUT", payload: json }); // Update the state
        setIsEditing(false); // Close the form
      } else {
        console.error("Update failed:", json);
      }
    } catch (error) {
      console.error("Failed to update workout:", error);
    }
  };

  return (
    <div className="workout-details">
      {isEditing ? (
        // Form to edit the workout
        <form onSubmit={handleEditSubmit}>
          <label>Title:</label>
          <input
            type="text"
            value={editData.title}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <label>Load (kg):</label>
          <input
            type="number"
            value={editData.load}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, load: e.target.value }))
            }
          />
          <label>Reps:</label>
          <input
            type="number"
            value={editData.reps}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, reps: e.target.value }))
            }
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h4>{workout.title}</h4>
          <p>
            <strong>Load (kg): </strong>
            {workout.load}
          </p>
          <p>
            <strong>Reps: </strong>
            {workout.reps}
          </p>
          <p>{new Date(workout.createdAt).toLocaleDateString()}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default WorkoutDetails;
