import express from 'express'
import { createMentors,getMentors,updateMentors,oneMentors,showAllStudents } from "../Controllers/mentor.controller.js";

const router = express.Router()

router.post("/create/mentor",createMentors)
router.get("/get/mentor",getMentors)
router.put("/student_to/mentor",updateMentors)
router.put("/assign/multipe_student",oneMentors)
router.get("/show_allstudent",showAllStudents)

export default router;