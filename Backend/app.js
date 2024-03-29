import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import jobRouter from "./routes/jobRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import {dbConnection}  from "./database/dbConnection.js";
import { errorMiddleWare } from "./middlewares/error.js";
const app=express();

//Environment variables configuration
dotenv.config({path:"./config/config.env"});

//Connection with frontend
app.use(
    cors({
        origin:[process.env.FRONTEND_URL],
        methods:["GET","POST","DELETE","PUT"],
        credentials:true
    })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/temp/"
    })
);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/application",applicationRouter);
app.use("/api/v1/job",jobRouter);

app.get('/',(req,res,next)=>{
    return res.status(200).json({
        success:true,
        message:"Hello World"
    })
})
dbConnection();

app.use(errorMiddleWare);
export default app;