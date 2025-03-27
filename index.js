const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config()

const app = express();

app.get("/,", (req, res) => {
    res.send("Welcome to foodIsta food order API");
})

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})