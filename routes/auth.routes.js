const router = require('express').Router()
const UserModel = require('../models/User.model')
const validateToken = require('../middleware/validateToken.middleware')
const { RegisterController, LoginController, CartController } = require('../controller/auth.controller')


router.get("/", validateToken, (req, res, next) => {
    UserModel.findById(req.user._id).then((user) => {
        res.json(user)
    })
});

router.get('/profile', validateToken, CartController)
router.post('/register', RegisterController)
router.post('/login', LoginController)
router.post('/:id', validateToken, CartController)


module.exports = router;
