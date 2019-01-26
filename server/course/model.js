const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
  courseName: String,
  TakenBy: Number,
  enrolledStudents: {
    type: Array
  }
  // TESTS: [TEST]
})

module.exports = new mongoose.model('Course', Course)
