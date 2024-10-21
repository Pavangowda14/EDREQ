import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    classNo: {
        type: Number,
        enum: [6, 7, 8, 9, 10, 11, 12],
        required: false,
    },
    role:{
        type:String,
        enum: ['student', 'teacher', 'admin'],
        default: 'student',
    },
    coursesEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required: false,
    }],

},{timestamps:true});

export const User= mongoose.model("User",userSchema);