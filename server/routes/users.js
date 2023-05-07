import express from "express";
import { getUser, deleteUser, update, getByCategori,search, random } from '../controllers/user.js';
import verifyToken from "../verifyToken.js";
const router = express.Router();

//update user
router.put('/:id', verifyToken, update)


//delete user
router.delete('/delete/:id', verifyToken, deleteUser)

//get a user
router.get('/find/:id', verifyToken, getUser)


router.get("/category",getByCategori)



router.get("/search",search)

router.get("/random",random)

export default router;


// {
//     "firstName":"ahmed4",
//     "lastName":"kenanda",
//     "email":"ahmed4@gmail.com",
//     "password":"ahmed20092009",
//     "role":"teacher",
//     "teacherInfo":{
//         "Branded":"informatique",
//         "description":"iam so stuped"
        
//     }
// }






