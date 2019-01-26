const router = require('express').Router()
const controller = require('./controller')

router.post('/register-student', controller.registerStudent)
router.post('/login-student', controller.loginStudent)
module.exports = router
