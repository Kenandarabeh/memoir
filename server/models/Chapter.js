import mongoose from "mongoose";
const ChapterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    src: { type: String, required: true },
    CourseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
}, { timestamps: true });


export default mongoose.model("Chapter", ChapterSchema);
