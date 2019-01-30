const router = require('express').Router()
const controller = require('./controller')

router.post('/setTest', controller.setTest)
router.post('/updateTest/:studentId', controller.updateTest)

module.exports = router
