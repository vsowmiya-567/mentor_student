import student from "../Models/student.schema.js"
import mongoose from "mongoose"

// create Student-post
export const createStudents = async(req,res)=>{
    try {
        const createStudents = new student(req.body)
        await createStudents.save()
        res.status(200).json({message:`mentor ${createStudents.studentname} created successfully`,
        data:createStudents})
    } catch (error) {
        res.status(500).json({error:"Error in create students"})
    }
}

// get all students
export const getAllStudents = async(req,res)=>{
    try {
        const getAllStudent =await student.find()
        res.status(200).json({message: "all students details",
        data:getAllStudent})
    } catch (error) {
        res.status(500).json({error:"Error in get students detail"})
 
    }
}

// student who has a mentor should not be shown in List
export const updateStudent = async(req,res)=>{
    try {
        let updateStudents = await student.findOne({_id:new mongoose.Types.ObjectId (req.body.studentId)})
        if(updateStudents.ismentor){
        return res.status(500).json({message:"Mentor Already Assigned For This Student"})
        }
        res.status(200).json({message:"Mentor not assigned for this student",data:updateStudents})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Error in get mentor detail in Students Details"})

    }
}

// Assign Mentor for particular Student
export const assignMentorToStudent = async(req,res)=>{
    try {
        const assignMentor = await student.findOneAndUpdate({_id:req.body.studentId},{$set:{mentor:req.body.mentorId}},{new:true})
        res.status(200).json({message:"Mentor assigned to student successfully",data:assignMentor})
        
        
    } catch (error) {
       res.status(500).json({error:"Error in Assign mentor to student"}) 
    }
}

// One Student and Assign one Mentor
export const oneStudentMentor = async(req,res)=>{
    try {
    let assignStudentMentor = await student.findOneAndUpdate({_id:req.body.studentId},{$set:{mentor:req.body.mentorId}},{new:true})
    res.status(200).json({message:"student assigned to mentor successfully",data:assignStudentMentor})
    } catch (error) {
       res.status(500).json({error:"Error in assign one student mentor"}) 
    }
}

// show the previously assigned mentor for a particular student-get
export const previousMentors = async (req, res) => {
    try {
            const previousMentor  = await student.findOne({ _id:req.body.studentId},{ismentor:0})
            res.status(200).json({message:"previous mentor details",data:previousMentor})
         }
    catch (error) {
        res.status(500).json({ error: "Error in get previous mentor details" })
    }
}
