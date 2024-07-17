//init app 
const express = require("express");
const app = express();

//Middleware
app.use(express.json());

// connect DataBase
const mongoose = require('mongoose');
mongoose
  .connect("mongodb+srv://amal:VYuIrzoBOYRXYttG@cluster0.0n2ca6d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

//Router
const userRouter = require('./src/routes/userRoute');
app.use("/",userRouter);

// listenning port
app.listen(5500,()=>{
    console.log("server listening at port 5500");
})