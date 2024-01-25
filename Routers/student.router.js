import express from 'express'
import { createStudents,getAllStudents,updateStudent,assignMentorToStudent,oneStudentMentor,previousMentors } from '../Controllers/student.controller.js'; 

const router = express.Router()

router.post("/create/student",createStudents)
router.get("/get/students",getAllStudents)
router.get("/mentor/students",updateStudent)
router.put("/assign_mentor_to_students",assignMentorToStudent)
router.put("/student/mentor",oneStudentMentor)
router.get("/previous_mentor",previousMentors)

export default router;