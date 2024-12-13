

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth APIs
export const registerUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);

// Exercise APIs
export const fetchExercises = () => API.get("/exercises/");
export const addExercise = (exerciseData) => API.post("/exercises/add", exerciseData);

// Updated to use PUT for updates
// export const updateExercise = (id, exerciseData) => API.put(`/exercises/${id}`, exerciseData);


export const updateExercise = (id, exerciseData) => API.put(`/exercises/update/${id}`, exerciseData);

export const deleteExercise = (id) => API.delete(`/exercises/${id}`);
export const fetchExerciseById = (id) => API.get(`/exercises/${id}`);
