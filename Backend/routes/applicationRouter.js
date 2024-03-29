import express from "express";
import {employerGetAllApplications,jobSeekerGetAllApplications,jobSeekerDeleteApllication, postApplication} from '../controllers/applicationController.js';
import {isAuthorized} from '../middlewares/auth.js'

const router=express.Router();
router.get("/employer/getall",isAuthorized,employerGetAllApplications);
router.get("/jobseeker/getall",isAuthorized,jobSeekerGetAllApplications);
router.delete("/delete/:id",isAuthorized,jobSeekerDeleteApllication);
router.post('/post',isAuthorized,postApplication);

export default router;