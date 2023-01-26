const mongoose = require("mongoose");

mongoose.set('strictQuery' , false);

mongoose.connect("mongodb://localhost:27017/students_api").then(()=>console.log("Connection is Successfull")).catch((err)=>console.log("Invalid Connection"));