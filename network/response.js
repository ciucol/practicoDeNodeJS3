exports.sucess = (req, res, status, message) => {
  console.log(message)
  const statusCode = status || 200
  const statusMessage = message || ''
  res.status(statusCode).json({
    error: '', statusCode, body: statusMessage
  })
}

exports.error = (req, res, status, e, message) => {
  const statusCode = status || 500
  const statusMessage = message || 'Internal server error'
  console.error(message)
  res.status(statusCode).json({
    error: e, statusCode, body: statusMessage
  })
}
