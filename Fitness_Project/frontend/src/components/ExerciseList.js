import React, { useEffect, useState } from 'react';
import { getExercises } from '../utils/api';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const data = await getExercises();
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    }
    fetchExercises();
  }, []);

  return (
    <div>
      <h2>Exercise List</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
