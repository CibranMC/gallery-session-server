const router = require('express').Router()

const {
    getAll,
    create,
    getOne,
    updateOne,
    deleteOne
} = require('../controller/artworks.controller')

// ---- GET ----
router.get('/', getAll)

router.get('/:id', getOne)

// ---- POST ----
router.post('/', create)

//---- PUT ----
router.put('/:id', updateOne)

//---- DELETE ----
router.delete('/:id', deleteOne)


module.exports = router