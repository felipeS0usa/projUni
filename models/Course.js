const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: false
    },
    passingScore: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

module.exports = {
    Course,
    courseSchema
}