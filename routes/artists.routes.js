const router = require('express').Router()

const {
    getAll
} = require('../controller/artists.controller')

router.get('/', getAll)


module.exports = router