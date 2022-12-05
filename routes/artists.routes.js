const router = require('express').Router()

const {
    getAll,
    create,
    getOne,
} = require('../controller/artists.controller')

// ---- GET ----
router.get('/', getAll)

router.get('/:id', getOne)

// ---- POST ----
router.post('/', create)

module.exports = router