import {catchAsyncError} from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/error.js';
import {Application} from '../models/applicationSchema.js';
import {Job} from '../models/jobSchema.js';
import cloudinary from 'cloudinary';

export const employerGetAllApplications=catchAsyncError(async(req,res,next)=>{
    const {role}=req.user;
    if(role==="Job Seeker"){
        return next(new ErrorHandler("Job Seeker is not allowed to access these resources",400));
    }
    const {_id}=req.user;
    const applications = await Application.find({'employerID.user':_id});
    res.status(200).json({
        success:true,
        applications
    })
})

export const jobSeekerGetAllApplications=catchAsyncError(async(req,res,next)=>{
    const {role}=req.user;
    if(role==="Employer"){
        return next(new ErrorHandler("Employer is not allowed to access these resources",400));
    }
    const {_id}=req.user;
    const applications = await Application.find({'applicantID.user':_id});
    res.status(200).json({
        success:true,
        applications
    })
})

export const jobSeekerDeleteApllication=catchAsyncError(async(req,res,next)=>{
    const {role}=req.user;
    if(role==="Employer"){
        return next(new ErrorHandler("Employer is not allowed to access these resources",400));
    }
    const {id}=req.params;
    const application=await Application.findById(id);
    if(!application){
        return next(new ErrorHandler("Oops, application not found!",404));
    }
    await application.deleteOne();
    res.status(200).json({
        success:true,
        message:"Application deleted successfully!"
    })
})

export const postApplication=catchAsyncError(async(req,res,next)=>{
    const {role}=req.user;
    if(role==="Employer"){
        return next(new ErrorHandler("Employer is not allowed to access these resources",400));
    }
    if(!req.files || Object.keys(req.files).length===0){
        return next(new ErrorHandler("Resume file required!"));
    }
    const {resume}=req.files;
    const allowedFormats=["image/png","image/jpeg","image/webp"];
    if(!allowedFormats.includes(resume.mimetype)){
        return next(new ErrorHandler("Invalid file type.Please provide your email in png/jpg/webp format!",400));
    }
    const cloudinaryResponse=await cloudinary.uploader.upload(
        resume.tempFilePath
    );
    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.error("Console Error: ", cloudinaryResponse.error || "Unknown Cloudinary Error");
        return next(new ErrorHandler("Failed to upload resume!",500));
    }
    const {name,email,coverLetter,phone,address,jobID}=req.body;
    const applicantID={
        user:req.user._id,
        role:"Job Seeker"
    };
    if(!jobID){
        return next(new ErrorHandler("Job not found!",404));
    }
    const jobDetails=await Job.findById(jobID);
    if(!jobDetails){
        return next(new ErrorHandler("Job not found!",404));
    }

    const employerID={
        user:jobDetails.postedBy,
        role:"Employer"
    }
    if(!name || !email || !coverLetter ||!phone||!address||!resume||!applicantID||!employerID){
        return next(new ErrorHandler("Please fill all the fields!",400));
    }
    const application=await Application.create({
        name ,email ,coverLetter,phone,address,applicantID,employerID,
        resume:{
            public_id:cloudinaryResponse.public_id,
            url:cloudinaryResponse.secure_url,
        }
    })
    res.status(200).json({
        success:true,
        message:"Application Posted successfully!",
        application
    })
})