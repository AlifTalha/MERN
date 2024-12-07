const dotenv = require("dotenv");
dotenv.config(); 

const mongoose = require("./config/db");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
