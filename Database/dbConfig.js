import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async(req,res)=>{
    try {
        const mongoURL = process.env.MONGODBCONNECTIONSTRING
        const connection = mongoose.connect(mongoURL)
        console.log("connected to the mongoDB");
        return connection;
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;