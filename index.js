import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';
import mentorRouter from './Routers/mentor.router.js';
import studentRouter from './Routers/student.router.js';
dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
res.status(200).json({message:"hello"})
})
connectDB()
app.use('/api',mentorRouter)
app.use('/api',studentRouter)
app.listen(port,()=>{
    console.log("app is listen");
})