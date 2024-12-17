const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts )

//GET single workouts
router.get('/:id', getWorkout)


//Post a workouts
router.post('/', createWorkout)

//Delete a workouts
router.delete('/:id',deleteWorkout )

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { title, load, reps } = req.body;

  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      id,
      { title, load, reps },
      { new: true }
    ); // Return the updated document

    if (!updatedWorkout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Update a workouts
router.patch('/:id', updateWorkout)

module.exports=router