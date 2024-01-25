import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentname: {
        type:String
    },
    ismentor:{
        type:Boolean,
        default:false
    },
    previous_Mentor:{
        type:mongoose.Types.ObjectId
    }
    
})

const student = mongoose.model('student',studentSchema)

export default student;