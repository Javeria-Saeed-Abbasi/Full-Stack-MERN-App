const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const mqtt = require("mqtt");
const morgan = require("morgan");
const connectDB = require('./config/db');

//dotenv file;
dotenv.config();

//MONGO DB configuration;
connectDB();

//REST OBJECT;
const app = express();

//Middlewares;
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
// app.get('', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Welcome to full stack app"
//     })
// })
app.use("/api/v1/auth", require("./routes/userRoutes"));


//PORT
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

//Listen
app.listen(3001, () => {
    console.log(`Server Running at ${PORT}`.bgGreen.white);
})