



// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const { token, logout } = useContext(AuthContext);

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       {token ? (
//         <>
//           <Link to="/dashboard">Dashboard</Link>
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <>
//           <Link to="/login">Login</Link>
//           <Link to="/register">Register</Link>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const context = useContext(AuthContext);

  if (!context) {
    console.error("AuthContext is not available.");
    return null; // Prevents rendering if context is undefined
  }

  const { token, logout } = context;

  return (
    <nav>
      <Link to="/">Home</Link>
      {token ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
