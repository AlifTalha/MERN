import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/auth",
});

export const registerUser = async (userData) => {
  const response = await API.post("/register", userData);
  return response.data;
};

export const signInUser = async (credentials) => {
  const response = await API.post("/signin", credentials);
  return response.data;
};

export const getUserDetails = async (userId) => {
  const response = await API.get(`/user/${userId}`);
  return response.data;
};
