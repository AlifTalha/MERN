
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

  const backgroundImageStyle = {
    backgroundImage: "url('https://source.unsplash.com/1600x900/?fitness')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "20px",
    color: "#fff",
  };

  const usernameStyle = {
    color: "red",
  };

  return (
    <div style={backgroundImageStyle}>
      <h1>
        Welcome, <span style={usernameStyle}>{username || "Guest"}</span>!
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          style={{ display: "block", margin: "10px 0", padding: "10px" }}
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          style={{ display: "block", margin: "10px 0", padding: "10px" }}
        />
        <input
          type="number"
          placeholder="Duration (mins)"
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
          style={{ display: "block", margin: "10px 0", padding: "10px" }}
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })}
          style={{ display: "block", margin: "10px 0", padding: "10px" }}
        />
        <button
          type="submit"
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add Exercise
        </button>
      </form>

      <ul>
        {exercises.map((exercise) => (
          <li
            key={exercise._id}
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {exercise.username} - {exercise.description} ({exercise.duration}{" "}
            mins)
            <button
              onClick={() => handleDelete(exercise._id)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;





// import React, { useState, useEffect, useContext } from "react";
// import { fetchExercises, addExercise, deleteExercise } from "../utils/api";
// import { AuthContext } from "../context/AuthContext";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [exercises, setExercises] = useState([]);
//   const [formData, setFormData] = useState({
//     description: "",
//     duration: 0,
//     date: "",
//   });
//   const { username } = useContext(AuthContext); // Access username from AuthContext

//   // Load exercises from the server
//   const loadExercises = async () => {
//     try {
//       const { data } = await fetchExercises();
//       setExercises(data);
//     } catch (err) {
//       console.error("Failed to fetch exercises:", err);
//     }
//   };

//   useEffect(() => {
//     loadExercises();
//   }, []);

//   // Handle adding a new exercise
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Include the username from AuthContext
//       await addExercise({ ...formData, username });
//       loadExercises();
//       // Reset form fields
//       setFormData({ description: "", duration: 0, date: "" });
//     } catch (err) {
//       console.error("Failed to add exercise:", err);
//     }
//   };

//   // Handle deleting an exercise
//   const handleDelete = async (id) => {
//     try {
//       await deleteExercise(id);
//       loadExercises();
//     } catch (err) {
//       console.error("Failed to delete exercise:", err);
//     }
//   };

//   // Styling for the dashboard
//   const backgroundImageStyle = {
//     backgroundImage: "url('https://source.unsplash.com/1600x900/?fitness')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     minHeight: "100vh",
//     padding: "20px",
//     color: "#fff",
//   };

//   const usernameStyle = {
//     color: "red",
//   };

//   return (
//     <div style={backgroundImageStyle}>
//       <h1>
//         Welcome, <span style={usernameStyle}>{username || "Guest"}</span>!
//       </h1>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           background: "rgba(0, 0, 0, 0.7)",
//           padding: "20px",
//           borderRadius: "8px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Description"
//           value={formData.description}
//           onChange={(e) =>
//             setFormData({ ...formData, description: e.target.value })
//           }
//           style={{ display: "block", margin: "10px 0", padding: "10px" }}
//         />
//         <input
//           type="number"
//           placeholder="Duration (mins)"
//           value={formData.duration}
//           onChange={(e) =>
//             setFormData({ ...formData, duration: e.target.value })
//           }
//           style={{ display: "block", margin: "10px 0", padding: "10px" }}
//         />
//         <input
//           type="date"
//           value={formData.date}
//           onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//           style={{ display: "block", margin: "10px 0", padding: "10px" }}
//         />
//         <button
//           type="submit"
//           style={{
//             display: "block",
//             margin: "10px 0",
//             padding: "10px",
//             backgroundColor: "#28a745",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//           }}
//         >
//           Add Exercise
//         </button>
//       </form>

//       <ul>
//         {exercises.map((exercise) => (
//           <li
//             key={exercise._id}
//             style={{
//               background: "rgba(0, 0, 0, 0.7)",
//               margin: "10px 0",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             {exercise.username} - {exercise.description} ({exercise.duration}{" "}
//             mins)
//             <button
//               onClick={() => handleDelete(exercise._id)}
//               style={{
//                 marginLeft: "10px",
//                 backgroundColor: "#dc3545",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "4px",
//                 padding: "5px 10px",
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
