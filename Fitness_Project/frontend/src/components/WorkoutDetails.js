import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

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

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{new Date(workout.createdAt).toLocaleDateString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default WorkoutDetails;
