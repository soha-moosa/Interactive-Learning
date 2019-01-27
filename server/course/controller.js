const Course = require('./model')

const registerCourse = (req, res) => {
  const course = new Course(req.body)
  course
    .save()
    .then(course => {
      res.status(200).send({
        ...course._doc
      })
    })
    .catch(err => {
      res.status(500).send({
        err
      })
    })
}

const getAllCourses = (req, res) => {
  Course.find()
    .then(allCourses => {
      console.log(allCourses)
      res.send(allCourses)
    })
    .catch(err => {
      res.status(200).send({
        err
      })
    })
}

module.exports = {
  getAllCourses,
  registerCourse
}
