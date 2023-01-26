const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true,
        minlength : 3
    },
    email:{
        type: String,
        required: true,
        unique: [true,"Email ID already in use"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email ID");
            }
        }
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type : Number,
        unique: true,
        required: true,
        minlength: 10,
    }
})

const StudentList = new mongoose.model('StudentList',studentSchema);

module.exports = StudentList;