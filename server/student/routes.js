const router = require('express').Router()
const controller = require('./controller')

router.post('/register-student', controller.registerStudent)
router.post('/login-student', controller.loginStudent)
router.post(
  '/register-course-for-me/:student_id',
  controller.registerCourseForMe
)
module.exports = router
