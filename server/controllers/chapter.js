import Chapter from "../models/Chapter.js"
import Course from "../models/Course.js"
import createError from "../error.js"



// addcourse
export const addChapter = async (req, res, next) => {
    const newChapter = new Chapter({ ...req.body, CourseId: req.params.CourseId })
    try {
        const course = await Course.findById(req.params.CourseId)
        if (!course) return createError(401, "course not found !")
        const savedChapter = await newChapter.save()
        res.status(201).send(savedChapter)

    }
    catch (err) {

        next(err)
    }


}






//update
export const updateChapter = async (req, res, next) => {

    try {
        const chapter = await Chapter.findById(req.params.ChapterId)
        const course = await Course.findById(req.params.CourseId)
        if ((req.user.id === course.userId) && (course.id === chapter.CourseId)) {

            const apdatedChpter = await chapter.updateOne(...req.body)
            res.status(200).send(apdatedChpter)
        }
        else {
            return next(createError(404, "you can update only your chapter!"))
        }
    }
    catch (err) {

        next(err)
    }


}








//delete

export const deleteChapter = async (req, res, next) => {

    try {
        const chapter = await Chapter.findById(req.params.ChapterId)
        const course = await Course.findById(req.params.CourseId)
        console.log(course)
        if ((req.user.id === course.userId) && (course.chapterId === chapter.CourseId)) {

            const deleteChpter = await Chapter.findByIdAndDelete(...req.body)
            res.status(200).json("The chpter has been deleted.")
        }
        else {
            return next(createError(401, "you can delete only your chapter!"))
        }
    }
    catch (err) {
        next(err)
    }


}







//get 
export const getChapters = async (req, res, next) => {

    try {
        const chapters = await Chapter.find({ CourseId: req.params.CourseId })
        res.status(200).json(chapters)
    }
    catch (err) {

        next(err)
    }


}