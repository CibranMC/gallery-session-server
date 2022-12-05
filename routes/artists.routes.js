const router = require('express').Router()

const {
    getAll,
    create,
    getOne,
    updateOne,
} = require('../controller/artists.controller')

// ---- GET ----
router.get('/', getAll)

router.get('/:id', getOne)

// ---- POST ----
router.post('/', create)

router.post('/', delete)


//---- PUT ----
router.put('/:id', updateOne)

module.exports = router