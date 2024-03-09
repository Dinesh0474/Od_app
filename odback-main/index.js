const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const students = require("./views/students");
const staffs = require("./views/staffs");
const tadmin = require("./views/tadmin");

const PORT = process.env.PORT || 8000;

async function connectdb() {
    try {
        mongoose.set('strictQuery',false)
        const conn = await mongoose.connect(process.env.MONGO_URI, {});
        console.log("Connected to the MongoDB database");
    } catch (error) {
        console.error("Error connecting to the MongoDB database:", error);
    }
}

connectdb();
app.use(express.json());
app.use(cors());
app.use("/api/students", students);
app.use("/api/tadmin", tadmin);
app.use("/api/public", staffs);

app.get("/",(req,res)=>{
    res.json("Hello")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = app;