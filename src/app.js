const express = require("express");
const app = express();
require("./db/conn.js");
const StudentList = require("./models/students.js")
const port = process.env.PORT || 8000;

app.use(express.json()); //identifies incoming data as an JSON Object

app.get("/",(req,res)=>{
      res.send("Hello Your localhost is ready to perform wonders in your backend development journey.");
});

app.post("/student",async(req,res)=>{
    
     try{
        const User = new StudentList(req.body);
        const createdUser = await User.save();
        res.status(201).send(createdUser);
     }
     catch(err){
         res.status(400).send(err);
     }
   
})

app.listen(port,()=>{
       console.log(`Your connection has now been setup at port ${port}`);
});