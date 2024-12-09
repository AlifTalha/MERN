const router = require("express").Router();
const exerciseController = require("../controllers/exercise.controller");
const protect = require("../middleware/auth.middleware");

router.get("/", protect, exerciseController.getAllExercises);
router.post("/add", protect, exerciseController.addExercise);
router.get("/:id", protect, exerciseController.getExerciseById);
router.post("/update/:id", protect, exerciseController.updateExercise);
router.delete("/:id", protect, exerciseController.deleteExercise);

module.exports = router;
