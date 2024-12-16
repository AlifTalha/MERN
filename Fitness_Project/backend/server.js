
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const commentsRouter = require("./routes/comments");
const resistanceRouter = require("./routes/resistance");

const workoutRoutes = require('./routes/workouts')
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)


app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/comments", commentsRouter);
app.use("/resistance", resistanceRouter); // Use the resistance route

// Default route
app.get("/", (req, res) => {
  res.send("Hello to Fitness Tracker API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
