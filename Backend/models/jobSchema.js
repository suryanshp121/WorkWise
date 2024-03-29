import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide job title"],
        minLength:[3,"Job Title must contain atleast 3 characters"],
        maxLength:[50,"Job Title cannot exceed 50 characters"],
    },
    description:{
        type:String,
        required:[true,"Please provide job description"],
        minLength:[50,"Job description must contain atleast 50 characters"],
        maxLength:[750,"Job description cannot exceed 350 characters"],
    },
    category:{
        type:String,
        required:[true,"Job Category is required!"]
    },
    country:{
        type:String,
        required:[true,"Job Country is required!"]
    },
    city:{
        type:String,
        required:[true,"Job City is required!"]
    },
    location:{
        type:String,
        required:[true,"Please provide exact job location!"],
        minLength:[30,"Job location must contain atleast 50 characters."],
    },
    fixedSalary:{
        type:Number,
        minLength:[4,"Fixed Salary must contain atleast 4 digits."],
        maxLength:[9,"Fixed Salary cannot exceed 9 digits."],
    },
    salaryFrom:{
        type:Number,
        minLength:[4,"Salary from must contain atleast 4 digits."],
        maxLength:[9,"Salary from cannot exceed 9 digits."],
    },
    salaryTo:{
        type:Number,
        minLength:[4,"Salary to must contain atleast 4 digits."],
        maxLength:[9,"Salary to cannot exceed 9 digits."],
    },
    expired:{
        type:Boolean,
        default:false,
    },
    jobPostedOn:{
        type:Date,
        default:Date.now,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    }
})
export const Job=mongoose.model("Job",jobSchema);