const router = require('express').Router()
const controller = require('./controller')

router.post('/register-course', controller.registerCourse)
router.get('/all-courses', controller.getAllCourses)

module.exports = router
