require('dotenv').config()

module.exports = {
  api: {
    port: process.env.API_PORT || 3010,
    host: process.env.API_HOST || 'localhost'
  }
}
