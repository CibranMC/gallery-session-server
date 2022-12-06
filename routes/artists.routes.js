const router = require('express').Router()

const fileUploader = require('../config/cloudinary.config');

const {
    getAll,
    create,
    getOne,
    updateOne,
    deleteOne
} = require('../controller/artists.controller')

// ---- GET ----
router.get('/', getAll)

router.get('/:id', getOne)

// ---- POST ----
router.post('/', fileUploader.single('image'), create)

//---- PUT ----
router.put('/:id', updateOne)

//---- DELETE ----
router.delete('/:id', deleteOne)


module.exports = router