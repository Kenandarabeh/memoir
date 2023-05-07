import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import courseRoutes from './routes/courses.js'
import chapterRoutes from './routes/chapters.js'
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser'

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {


        console.log('Connected to mongoDB');
    }).catch(err => {
        throw err;
    });

};



app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/course", courseRoutes)
app.use("/api/chapter", chapterRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Somethin went wrong!";
    return res.status(status).json({

        success: false,
        Status: status,
        message: message


    })

})











app.listen(8800, () => {
    connect()
    console.log('connected to server 8800');
});













