const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Test = new Schema({
  studentId: String,
  courseId: String,
  tests: [
    {
      testTitle: String,
      testScore: Number,
      totalMarks: Number,
      status: String
    }
  ]
})

module.exports = new mongoose.model('Test', Test)
