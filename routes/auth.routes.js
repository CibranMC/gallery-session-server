const router = require('express').Router()
const UserModel = require('../models/User.model')
const validateToken = require('../middleware/validateToken.middleware')
const { RegisterController, LoginController } = require('../controller/auth.controller')

router.get("/me", validateToken, (req, res, next) => {
    UserModel.findById(req.user._id).then((user) => {
        res.json(user)
    })
});

router.post('/register', RegisterController)
router.post('/login', LoginController)


module.exports = router;
