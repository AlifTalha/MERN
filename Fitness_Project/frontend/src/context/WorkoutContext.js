
import { createContext, useReducer, useContext } from "react";

// Create the context
const WorkoutContext = createContext();



export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    case "UPDATE_WORKOUT":
      return {
        workouts: state.workouts.map((workout) =>
          workout._id === action.payload._id ? action.payload : workout
        ),
      };
    default:
      return state;
  }
};





// WorkoutProvider component for managing state
export const WorkoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: [] });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// Export the context and the custom hook
export { WorkoutContext };

// Custom hook for accessing the WorkoutContext
export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error(
      "useWorkoutsContext must be used within a WorkoutProvider"
    );
  }
  return context;
};
