import mentor from "../Models/mentor.schema.js";


// createMentors
export const createMentors = async(req,res)=>{
    try {
        const createMentor = new mentor(req.body)
        await createMentor.save()
        res.status(200).json({message:`mentor ${createMentor.mentorname} created successfully`,
        data:createMentor})
    } catch (error) {
        res.status(500).json({error:"Error in create mentor"})
    }
}

// get all Mentors
export const getMentors = async(req,res)=>{
    try {
        const getMentor = await mentor.find()
        res.status(200).json({message:"all mentors details",
        data:getMentor})
    } catch (error) {
        res.status(500).json({error:"Error in get mentor"})
    }
}


// assign student to mentor  
export const updateMentors = async(req,res)=>{
    try {
        let updateMentor = await mentor.findOneAndUpdate({_id:req.body.mentorId},{$set:{students:req.body.student}},{new:true})
        res.status(200).json({message:"student assignes to mentor",data:updateMentor})
        
    } catch (error) {
        res.status(500).json({error:"Error in assign student to mentor"})

    }
}

// one mentor and Add multiple Student
export const oneMentors = async(req,res)=>{
    try {
        let oneMentor = await mentor.findOneAndUpdate({_id:req.body.mentorId},{$set:{students:req.body.student}},{new:true})
        // oneMentor.save()
        res.status(200).json({message:"Multiple student assignes to one mentor",data:oneMentor})
    } catch (error) {
        res.status(500).json({error:"Error in assign multipe student to one mentor"})

    }
}

// show all students for a particular mentor
export const showAllStudents = async (req,res)=>{
    try {
        const showAllStudents = await mentor.findOne({_id:req.body.mentorId})
        res.status(200).json({message:"students for a particular mentor",data:showAllStudents})
    } catch (error) {
        res.status(500).json({error:"Error in get All Students for a particular Mentor"})

    }
}


// // show all students for a particular mentor
// export const showAllStudents = async (req,res)=>{
//     try {
//         const mentorId = req.params.id 
//         const showAllStudents = await mentor.findById({_id:mentorId})
//         res.status(200).json({message:"students for a particular mentor",data:showAllStudents})
//     } catch (error) {
//         res.status(500).json({error:"Error in get All Students for a particular Mentor"})

//     }
// }




