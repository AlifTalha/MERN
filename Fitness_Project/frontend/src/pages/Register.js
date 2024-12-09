
// import React, { useState } from "react";
// import { registerUser } from "../utils/api";


// const Register = () => {
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser(formData);
//       alert("Registration successful. Please log in.");
//     } catch (err) {
//       console.error(err.response.data.error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={formData.username}
//         onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { registerUser } from "../utils/api";
import "./Login.css"; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Registration successful. Please log in.");
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
