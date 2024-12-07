import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/auth/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Registered Users</h2>
      {users.map((user) => (
        <div key={user._id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
