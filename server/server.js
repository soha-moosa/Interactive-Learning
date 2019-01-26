const express = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

express.use(cors())
require('./db.connection.js')

express.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
express.use(bodyParser.json({ limit: '50mb' }))

// Routes
express.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
