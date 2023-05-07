import User from '../models/User.js'
import bcrpt from "bcryptjs"
import createError from "../error.js";
import Jwt from "jsonwebtoken";



export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        //todo
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedUser)


        } catch (err) {
            next(err)


        }
    } else {
        return next(createError(403, "you can update only you account"))
    }


}
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        //todo
        try {
            await User.findByIdAndRemove(req.params.id)

            res.status(200).json("user has ben delete")


        } catch (err) {
            next(err)


        }
    } else {
        return next(createError(403, "you can update only you account"))
    }


}
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)



    }

}






//search
export const getByCategori = async (req, res, next) => {
    const catg = req.query.catg
    try {
        const users = await User.find({ 'teacherInfo.Branded': catg })
        console.log(users)
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }


}

export const search = async (req, res, next) => {

    const name = req.query.name
    try {
        const users = await User.find({ firstName: { $regex: name, $options: 'i' } })
        console.log(users)
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }



}
export const random = async (req, res, next) => {
    try {
        const users = await User.aggregate([{ $sample: { size: 40 } }]);
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};













