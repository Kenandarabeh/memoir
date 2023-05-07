import User from '../models/User.js'
import bcrpt from "bcryptjs"
import createError from "../error.js";
import Jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {

    try {
        const self = bcrpt.genSaltSync(10);
        const hash = bcrpt.hashSync(req.body.password, self);
        const newUser = new User({ ...req.body, password: hash })
        console.log(newUser)
        await newUser.save().then(() => {
            res.status(200).send("the cuser has ben created")

        })
    } catch (err) {
        next(err)
    }





};
export const signin = async (req, res, next) => {

    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return next(createError(404, "user not found!"))

        const isCorrect = await bcrpt.compare(req.body.password, user.password)
        if (!isCorrect) return next(createError(400, "wrong credentials !"))



        var token = Jwt.sign({ id: user._id }, process.env.Jwt)
        const { password, ...others } = user._doc;

        res.cookie('access_token', token, {
        }).status(200).json(others);
        console.log(token)

    } catch (err) {
        next(err)
    }





};