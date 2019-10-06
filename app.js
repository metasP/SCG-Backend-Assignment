const express = require('express')
const Config = require('./config/Config')
const server = express()

/**
 * for health check
 */
server.get('/', function (req, res) {
  res.send(`${Config.serviceName} - Version: ${Config.version}`)
})

/** ==================== include route =========================== **/
require('./src/main/routes/routes')(server)

/** ==================== Start listening =========================== **/
server.listen(Config.serverPort)
console.log(Config.serviceName, '-', 'Started at port: ', Config.serverPort)

module.exports = server
