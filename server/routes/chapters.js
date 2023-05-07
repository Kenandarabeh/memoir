import express from "express";
import { addChapter, updateChapter, deleteChapter, getChapters } from '../controllers/chapter.js';
const router = express.Router();
import verifyToken from "../verifyToken.js";

router.post("/:CourseId", verifyToken, addChapter)




router.get("/getChapter/:CourseId", verifyToken, getChapters)





router.delete("/delete/:ChapterId/:CourseId", verifyToken, deleteChapter)



router.put('/updateChapter/:id/:ChapterId/:CourseId', verifyToken, updateChapter)


export default router;

