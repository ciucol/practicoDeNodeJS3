const express = require('express')

const { api } = require('../config')
const port = api.port
const host = api.host

const networkUser = require('./components/user/network')

const app = express()
app.use(express.json())

app.use('/api/user', networkUser)

app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`)
})
