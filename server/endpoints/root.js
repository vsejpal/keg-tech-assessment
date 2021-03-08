const { apiErr, apiResponse } = require('./handler')
const { inDocker } = require('../utils/inDocker')

const apiRoot = (app, config) => (req, res) => {
  try {
    return apiResponse(
      req,
      res,
      {
        uuid: config.uuid,
        inDocker: inDocker(),
      },
      200
    )
  }
  catch (err) {
    return apiErr(req, res, err, 400)
  }
}

module.exports = (app, config) => {
  // Catch all route, should come last after all others
  app.get('/*', apiRoot(app, config))

  return app
}
