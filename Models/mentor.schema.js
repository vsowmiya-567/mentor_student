import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    mentorname:{
        type:String
    },
    mentorId:{
        type:mongoose.Types.ObjectId
    },
    students:{
        type:[]
    }
})
const mentor = mongoose.model('mentor',mentorSchema)

export default mentor;