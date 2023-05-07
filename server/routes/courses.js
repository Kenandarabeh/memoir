import express from "express";
import { addCourse, deleteCourse, updateCourse, getCourse } from '../controllers/course.js';
import verifyToken from "../verifyToken.js";
const router = express.Router();

//newcourse
router.post('/', verifyToken, addCourse)


//update user
router.delete('/delete/:id', verifyToken, deleteCourse)


//delete user
router.put('/:id', verifyToken, updateCourse)

//get a user
router.get('/find/:id', verifyToken, getCourse)






export default router;

