const router = require("express").Router();
const UserModel = require('../models/User.model')
const validateToken = require('../middleware/validateToken.middleware')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/user/me", validateToken, (req, res, next) => {
  UserModel.findById(req.user._id).then((user) => {
    res.json(user)
  })
});

module.exports = router;
