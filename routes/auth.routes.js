const router = require('express').Router()

const { RegisterController, LoginController } = require('../controller/auth.controller')

router.post('/register', RegisterController)
router.post('/login', LoginController)

module.exports = router;
