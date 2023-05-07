import Course from '../models/Course.js'
import createError from "../error.js";
export const addCourse = async (req, res, next) => {

    const newCource = new Course({ userId: req.user.id, ...req.body })
    try {
        const savedCourse = await newCource.save()
        res.status(200).json(savedCourse)




    } catch (err) {
        next(err)




    }

}
//delete
export const deleteCourse = async (req, res, next) => {

    try {
        const course = await Course.findById(req.params.id)
        if (!course) return next(createError(404, "course not found!"))
        if (req.user.id === Course.userId) {
            await Course.findByIdAndUpdate(req.params.id)
            res.status(200).json("the Course has been delated")
        } else {
            return next(createError(404, "you can delete only your course!"))
        }


    } catch (err) {
        next(err)




    }

}
// update
export const updateCourse = async (req, res, next) => {

    try {
        const course = await Course.findById(req.params.id)
        if (!course) return next(createError(404, "course not found!"))
        if (req.user.id === Course.userId) {
            const updatedCourse = await Course.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedCourse)
        } else {
            return next(createError(404, "you can update only your course!"))
        }


    } catch (err) {
        next(err)

    }

}
//get
export const getCourse = async (req, res, next) => {

    try {
        const course = await Course.findById(req.params.id)
        res.status(200).json(course)


    } catch (err) {
        next(err)




    }

}




//search 









