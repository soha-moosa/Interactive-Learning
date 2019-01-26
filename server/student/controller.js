const Student = require('./model')

function registerStudent(req, res) {
  const student = new Student(req.body)
  student
    .save()
    .then(student => {
      res.status(200).send({
        ...student._doc
      })
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
      res.status(200).send({
        ...student._doc
      })
    })
    .catch(err => {
      res.status(500).send({
        err
      })
    })
}
module.exports = {
  registerStudent,
  loginStudent
}
