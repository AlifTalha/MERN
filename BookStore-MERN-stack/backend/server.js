require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// route
// app.get('/', (req,res) => {
//     res.json({mssg: 'Welcome to the app'})

// })

app.use('/api/workouts',workoutRoutes)


//Connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB Listeneing  port number',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
        

//listen for request 
