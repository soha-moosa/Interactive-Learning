const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: String,
  age: Number,
  instituteName: String,
  courses: [
    {
      courseId: String,
      obtainedMarks: Number,
      totalMarks: Number,
      progress: Number
    }
  ]
})

module.exports = new mongoose.model('Student', Student)
