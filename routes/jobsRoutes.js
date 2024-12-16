import express from 'express'

import { createJob,deleteJob,updateJob,getAllJob,showStats } from "../DB/controllers/jobsController.js";

const router = express.Router();

router.route('/').post(createJob).get(getAllJob)
router.route('/Stat').get(showStats)
router.route('/:id').delete(deleteJob)
router.route('/updateJob').patch(updateJob)






export default router