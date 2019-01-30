const express = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

const studentRoutes = require('./student/routes')
const courseRoutes = require('./course/routes')
const tesrRoutes = require('./test/routes')

express.use(cors())
require('./db.connection.js')

express.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
express.use(bodyParser.json({ limit: '50mb' }))

// Routes
express.use('/student', studentRoutes)
express.use('/course', courseRoutes)
express.use('/test', tesrRoutes)
express.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
