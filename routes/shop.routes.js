const router = require("express").Router();
const { getAll } = require('../controller/shop.controller')

router.get('/', getAll)

module.exports = router;