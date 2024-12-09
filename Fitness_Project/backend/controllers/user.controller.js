const User = require("../models/user.model");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add a new user
exports.addUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });

  try {
    await newUser.save();
    res.json("User added!");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
 