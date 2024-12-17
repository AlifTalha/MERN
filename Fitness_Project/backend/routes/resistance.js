

const express = require("express");
const router = express.Router();
const {
  createResistance,
  getResistanceById,
  deleteResistance,
} = require("../controllers/resistance-controller");
const protect = require("../middleware/auth.middleware");

router.post("/", protect, createResistance); // Create resistance
router.get("/:id", protect, getResistanceById); // Get resistance by ID
router.delete("/:id", protect, deleteResistance); // Delete resistance by ID





module.exports = router;
