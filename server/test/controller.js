const _ = require('lodash')
const Test = require('./model')

const setTest = (req, res) => {
  const testObject = new Test(req.body)
  testObject
    .save()
    .then(data => {
      res.send({
        status: true,
        data
      })
    })
    .catch(err => res.send(err))
}

const updateTest = (req, res) => {
  const { studentId } = req.params
  console.log(studentId)
  // Test.findOne({ studentId }).then(data => res.send(data))
  Test.findOneAndUpdate(
    { studentId },
    { $push: { tests: req.body } },
    { new: true }
  )
    .then(data => {
      res.send(data)
    })
    .catch(err => res.send(err))
}

module.exports = {
  setTest,
  updateTest
}
