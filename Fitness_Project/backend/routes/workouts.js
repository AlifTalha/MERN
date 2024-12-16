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

//Update a workouts
router.patch('/:id', updateWorkout)

module.exports=router