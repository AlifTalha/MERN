import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext"; // Import WorkoutContext


export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkoutsContext must be used within a WorkoutProvider");
  }
  return context;

  
};
