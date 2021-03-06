const _ = require('lodash')
const Student = require('./model')

function registerStudent(req, res) {
  const student = new Student(req.body)
  student
    .save()
    .then(student => {
      if (_.isEmpty(student)) {
        res.status(404).send({
          message: 'Some error occured!'
        })
      } else {
        res.status(200).send({
          ...student._doc
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        err
      })
    })
}

const loginStudent = (req, res) => {
  const { email, password } = req.body
  Student.findOne({
    email,
    password
  })
    .then(student => {
      if (_.isEmpty(student)) {
        res.status(404).send({
          message: 'No user found!'
        })
      } else {
        res.status(200).send({
          ...student._doc
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        err
      })
    })
}

const registerCourseForMe = (req, res) => {
  const { student_id } = req.params
  const course = req.body

  Student.findByIdAndUpdate(
    {
      _id: student_id
    },
    {
      $push: {
        courses: course
      }
    },
    {
      new: true
    }
  )
    .then(student => {
      res.status(200).send({
        message: 'success',
        ...student._doc
      })
    })
    .catch(err => {
      res.status(500).send({
        err
      })
    })
}

const updateTestStatus = (req, res) => {
  const { _id } = req.params
  if (req.body.testType === 'HTML') {
    Student.findOne({ _id }).then(student => {
      if (student) {
        student.courses[2].obtainedMarks += 2
        Student.update()
        // marks = Number(marks) + 2
        // student.courses[0].obtainedMarks = marks
        // console.log((student.courses[0].obtainedMarks = marks))
        res.send(student.courses[2])
      }
    })
  } else if (req.body.testType === 'CSS') {
  } else if (req.body.testType === 'JS') {
  } else {
    // res.send({
    //   status: 'NONE TEST!'
    // })
  }
}

module.exports = {
  registerStudent,
  loginStudent,
  registerCourseForMe,
  updateTestStatus
}
