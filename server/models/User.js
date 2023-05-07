import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher'], default: 'student' },
    studentInfo: {
        Birthday_date: String,
        degree_specialty: String,
    },
    teacherInfo: {
        Branded: String,
        description: String,
        courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
    },
    image: {
        type: String,
        required: true
    },



}, { timestamps: true });
export default mongoose.model("User", UserSchema);


// "firstName":"kenadnarabeh",
// "lastName":"kenadnarabeh",
// "email":"test@gmail.com",
// "password":"kenadnarabeh",
// "role":"student"

















