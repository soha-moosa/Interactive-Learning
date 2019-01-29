const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://soha-moosa:interactivelearning123@ds213715.mlab.com:13715/interactive-learning',
  { useNewUrlParser: true },
  err => {
    if (err) {
      throw new Error(
        `Error occured while connecting database: ${JSON.stringify(
          err,
          undefined,
          2
        )}`
      )
    }
    console.log('database connected [mlap-cloud-hosting]')
  }
)
