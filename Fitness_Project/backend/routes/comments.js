const express = require("express");
const Comment = require("../models/Comment");

const router = express.Router();

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching comments" });
  }
});

// Create a new comment
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newComment = new Comment({ name, email, message });
    await newComment.save();
    res.status(201).json({ message: "Comment created" });
  } catch (err) {
    res.status(500).json({ message: "Error saving comment" });
  }
});

// Delete a comment by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Comment.findByIdAndDelete(id);
    res.status(200).json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting comment" });
  }
});

module.exports = router;
