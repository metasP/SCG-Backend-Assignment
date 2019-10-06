const { version } = require('../package.json')

const Config = {
  serviceName: 'Backend Assignment for SCG',
  serverPort: process.env.PORT || 3000,
  version,
}

module.exports = Config
