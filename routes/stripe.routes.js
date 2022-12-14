const express = require('express')
const router = express.Router()
const { Payment } = require('../controller/stripe.controller')

router.post('/', Payment)

module.exports = router