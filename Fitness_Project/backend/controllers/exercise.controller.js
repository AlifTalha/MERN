// const Exercise = require("../models/exercise.model");

// // Get all exercises
// exports.getAllExercises = async (req, res) => {
//   try {
//     const exercises = await Exercise.find();
//     res.json(exercises);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Add a new exercise
// exports.addExercise = async (req, res) => {
//   const { username, description, duration, date } = req.body;
//   const newExercise = new Exercise({ username, description, duration, date });

//   try {
//     await newExercise.save();
//     res.json("Exercise added!");
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get exercise by ID
// exports.getExerciseById = async (req, res) => {
//   try {
//     const exercise = await Exercise.findById(req.params.id);
//     res.json(exercise);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update exercise by ID
// exports.updateExercise = async (req, res) => {
//   try {
//     const exercise = await Exercise.findById(req.params.id);
//     if (!exercise) throw new Error("Exercise not found");

//     const { username, description, duration, date } = req.body;
//     exercise.username = username;
//     exercise.description = description;
//     exercise.duration = duration;
//     exercise.date = date;

//     await exercise.save();
//     res.json("Exercise updated!");
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete exercise by ID
// exports.deleteExercise = async (req, res) => {
//   try {
//     await Exercise.findByIdAndDelete(req.params.id);
//     res.json("Exercise deleted.");
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };


const Exercise = require("../models/exercise.model");

// Get all exercises
exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add a new exercise
exports.addExercise = async (req, res) => {
  const { username, description, duration, date } = req.body;
  const newExercise = new Exercise({ username, description, duration, date });

  try {
    await newExercise.save();
    res.json("Exercise added!");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get exercise by ID
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update exercise by ID
exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) throw new Error("Exercise not found");

    const { username, description, duration, date } = req.body;
    exercise.username = username || exercise.username;
    exercise.description = description || exercise.description;
    exercise.duration = duration || exercise.duration;
    exercise.date = date || exercise.date;

    await exercise.save();
    res.json({ message: "Exercise updated!", exercise });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete exercise by ID
exports.deleteExercise = async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json("Exercise deleted.");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
