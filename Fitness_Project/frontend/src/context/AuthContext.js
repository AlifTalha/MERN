


import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [username, setUsername] = useState(localStorage.getItem("username") || "Guest"); // Default to "Guest"

  const login = (newToken, newUsername) => {
    setToken(newToken);
    setUsername(newUsername);
    localStorage.setItem("token", newToken);
    localStorage.setItem("username", newUsername); // Save username in localStorage
  };

  const logout = () => {
    setToken(null);
    setUsername("Guest");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const [username, setUsername] = useState(localStorage.getItem("username") || null);

//   const login = (newToken, newUsername) => {
//     setToken(newToken);
//     setUsername(newUsername);
//     localStorage.setItem("token", newToken);
//     localStorage.setItem("username", newUsername);
//   };

//   const logout = () => {
//     setToken(null);
//     setUsername(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//   };

//   return (
//     <AuthContext.Provider value={{ token, username, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
