
// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { fetchExercises, addExercise, updateExercise, deleteExercise } from "../utils/api";
// import { AuthContext } from "../context/AuthContext";
// import "./Dashboard.css";


// const Dashboard = () => {
//   const [exercises, setExercises] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [formData, setFormData] = useState({
//     username: "",
//     description: "",
//     duration: 0,
//     date: "",
//   });
//   const { username } = useContext(AuthContext);


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

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedFormData = {
//       ...formData,
//       date: formData.date || exercises.find((ex) => ex._id === editId)?.date,
//     };

//     try {
//       if (isEditing) {
//         await updateExercise(editId, updatedFormData);
//         setIsEditing(false);
//         setEditId(null);
//       } else {
//         await addExercise(updatedFormData);
//       }

//       setFormData({
//         username: "",
//         description: "",
//         duration: 0,
//         date: "",
//       });

//       loadExercises();
//     } catch (err) {
//       console.error("Error saving exercise:", err);
//     }
//   };

//   const handleEdit = (exercise) => {
//     setIsEditing(true);
//     setEditId(exercise._id);
//     setFormData({
//       username: exercise.username,
//       description: exercise.description,
//       duration: exercise.duration,
//       date: exercise.date.split("T")[0],
//     });
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this information?");
//     if (!confirmDelete) return; // If "No" is clicked, exit the function

//     try {
//       await deleteExercise(id);
//       loadExercises();
//     } catch (err) {
//       console.error("Error deleting exercise:", err);
//     }
//   };

//   const filteredExercises = exercises.filter((exercise) =>
//     exercise.username.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="dashboard-container">
//       <video autoPlay loop muted className="background-video">
//         <source
//           src="https://videos.pexels.com/video-files/3191421/3191421-sd_960_506_25fps.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       <div className="content-overlay">
//         <h1>Welcome, {username || "Guest"}!</h1>

//         {/* Exercise Form */}
//         <form onSubmit={handleSubmit} className="exercise-form">
//           <input
//             type="text"
//             placeholder="Username"
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             value={formData.description}
//             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//             required
//           />
//           <input
//             type="number"
//             placeholder="Duration (mins)"
//             value={formData.duration}
//             onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//             required
//           />
//           <input
//             type="date"
//             value={formData.date}
//             onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//             required
//           />
//           <button type="submit">{isEditing ? "Update Exercise" : "Add Exercise"}</button>
//         </form>

//         {/* Dashboard Title and Search Input */}
//         <div className="dashboard-header">
//           <h2>Dashboard</h2>
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         {/* Exercise Table */}
//         <table className="exercise-table">
//           <thead>
//             <tr>
//               <th>Users</th>
//               <th>Activity</th>
//               <th>Duration</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredExercises.map((exercise) => (
//               <tr key={exercise._id}>
//                 <td>{exercise.username}</td>
//                 <td>{exercise.description}</td>
//                 <td>{exercise.duration}</td>
//                 <td>{exercise.date.split("T")[0]}</td>
//                 <td>
//                   <button
//                     className="edit-button"
//                     onClick={() => handleEdit(exercise)}
//                   >
//                     EDIT
//                   </button>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDelete(exercise._id)}
//                   >
//                     DELETE
//                   </button>
//                   <Link to={`/details/${exercise._id}`}>
//                     <button className="details-button">DETAILS</button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;







import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { fetchExercises, addExercise, updateExercise, deleteExercise } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const [exercises, setExercises] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: "",
  });
  const { username } = useContext(AuthContext);

  const loadExercises = useCallback(async () => {
    try {
      const { data } = await fetchExercises();
      setExercises(data);
    } catch (err) {
      console.error("Failed to fetch exercises:", err);
    }
  }, []);

  useEffect(() => {
    loadExercises();
  }, [loadExercises]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      date: formData.date || exercises.find((ex) => ex._id === editId)?.date,
    };

    try {
      if (isEditing) {
        await updateExercise(editId, updatedFormData);
        setIsEditing(false);
        setEditId(null);
      } else {
        await addExercise(updatedFormData);
      }

      setFormData({
        username: "",
        description: "",
        duration: 0,
        date: "",
      });

      loadExercises();
    } catch (err) {
      console.error("Error saving exercise:", err);
    }
  };

  const handleEdit = (exercise) => {
    setIsEditing(true);
    setEditId(exercise._id);
    setFormData({
      username: exercise.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date.split("T")[0],
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this information?");
    if (!confirmDelete) return;

    try {
      await deleteExercise(id);
      loadExercises();
    } catch (err) {
      console.error("Error deleting exercise:", err);
    }
  };

  const filteredExercises = exercises.filter((exercise) =>
    exercise.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <video autoPlay loop muted className="background-video">
        <source
          src="https://videos.pexels.com/video-files/3191421/3191421-sd_960_506_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <div className="dashboard-header">
          {/* Show Workout option only if the user is logged in */}
          {username !== "Guest" && (
            <div className="workout-option">
              <Link to="/workouts">
                <button className="workout-button">Workout</button>
              </Link>
            </div>
          )}
          <h1>Dashboard</h1>
        </div>

        {/* Exercise Form */}
        <form onSubmit={handleSubmit} className="exercise-form">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Duration (mins)"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            required
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
          <button type="submit">{isEditing ? "Update Exercise" : "Add Exercise"}</button>
        </form>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        {/* Exercise Table */}
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
            {filteredExercises.map((exercise) => (
              <tr key={exercise._id}>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date.split("T")[0]}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(exercise)}
                  >
                    EDIT
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(exercise._id)}
                  >
                    DELETE
                  </button>
                  <Link to={`/details/${exercise._id}`}>
                    <button className="details-button">DETAILS</button>
                  </Link>
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
