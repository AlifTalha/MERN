import React, { useState } from 'react';
import { addExercise } from '../utils/api';

const ExerciseForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addExercise({ name, description });
      setName('');
      setDescription('');
      alert('Exercise added!');
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Exercise Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
