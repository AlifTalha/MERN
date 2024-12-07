import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/register", formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <input
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "../api/axiosInstance";

// const Register = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("/auth/register", formData);
//       alert(data.message); // Notify user of successful registration
//       navigate("/login"); // Redirect to the login page
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="phoneNumber"
//           placeholder="Phone Number"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
