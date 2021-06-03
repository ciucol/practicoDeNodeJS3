const express = require('express')
const router = express.Router()
const response = require('../../../network/response')
const controller = require('./index')

router.get('/', list)
router.get('/:id', getUser)
router.post('/', upsert)

function list (req, res) {
  if (!req.body.id) {
    controller
      .list(req.body.table)
      .then(list => response.sucess(req, res, 200, list))
      .catch(e => response.error(req, res, 404, e, 'Not connected'))
  } else {
    controller.get(req.body.table)
  }
}

function getUser (req, res) {
  controller
    .get(parseInt(req.params.id))
    .then(user => response.sucess(req, res, 200, user))
    .catch(e => response.error(req, res, 404, e, 'Not connected'))
}

function upsert (req, res) {
  controller
    .upsert(req.body)
    .then(user => response.sucess(req, res, 200, user))
    .catch(e => response.error(req, res, 404, e, 'Not created'))
}

module.exports = router
