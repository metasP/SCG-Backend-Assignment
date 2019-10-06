// scg route
const SCGRoute = require('./scg')

module.exports = (server) => {
  server.use('/scg/', SCGRoute)
}
