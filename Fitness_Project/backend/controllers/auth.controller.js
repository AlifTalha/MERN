

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

// Register User
exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ message: "User registered successfully." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login User
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) throw new Error("Invalid credentials.");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials.");

    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Login successful", token, username: user.username }); // Include username in the response
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
