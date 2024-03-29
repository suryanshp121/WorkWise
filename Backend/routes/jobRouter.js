import express from "express";
import {deleteJob, getAllJobs, getMyJobs, getSingleJob, postJobs, updateJob} from '../controllers/jobController.js';
import {isAuthorized} from '../middlewares/auth.js';

const router=express.Router();
router.get('/getall',getAllJobs);
router.post('/post',isAuthorized,postJobs);
router.get('/getmyjobs',isAuthorized,getMyJobs);
router.get('/:id',isAuthorized,getSingleJob);
router.put('/update/:id',isAuthorized,updateJob);
router.delete('/delete/:id',isAuthorized,deleteJob);

export default router;