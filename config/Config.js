const { version } = require('../package.json')

const config = {
  serviceName: 'Backend Assignment for SCG',
  serverPort: process.env.PORT || 3000,
  version,
  googleMapAPIKey: process.env.GOOGLE_MAP_API_KEY,
}

module.exports = config
