import express from "express";
import { signup, signin } from '../controllers/auth.js';
const router = express.Router();



//Create A user

router.post('/signup', signup)





//signier
router.post('/signin', signin)




export default router;

