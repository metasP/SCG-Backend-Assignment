const express = require('express')
const config = require('./config/Config')
const server = express()

/**
 * for health check
 */
server.get('/', function (req, res) {
  res.send(`${config.serviceName} - Version: ${config.version}`)
})

/** ==================== include route =========================== **/
require('./src/main/routes/routes')(server)

/** ==================== Start listening =========================== **/
server.listen(config.serverPort)
console.log(config.serviceName, '-', 'Started at port: ', config.serverPort)

module.exports = server
