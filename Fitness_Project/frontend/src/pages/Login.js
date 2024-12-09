


// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../utils/api";
// import { AuthContext } from "../context/AuthContext";
// import "./Login.css";

// const Login = () => {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await loginUser(formData);
//       login(data.token, data.username); // Pass token and username to AuthContext
//       navigate("/dashboard");
//     } catch (err) {
//       console.error(err.response.data.error);
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "50px auto",
//         padding: "20px",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         backgroundColor: "white",
//         boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={formData.username}
//           onChange={(e) =>
//             setFormData({ ...formData, username: e.target.value })
//           }
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={(e) =>
//             setFormData({ ...formData, password: e.target.value })
//           }
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             padding: "10px",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await loginUser(formData);
//       login(data.token, data.username); // Pass token and username to AuthContext
//       navigate("/dashboard");
//     } catch (err) {
//       console.error(err.response.data.error);
//     }
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(formData);
      login(data.token, data.username); // Ensure data.username exists in API response
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data?.error || "Login failed");
    }
  };
  

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
