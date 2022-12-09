const router = require('express').Router()

const fileUploader = require('../config/cloudinary.config');

const {
    getAll,
    create,
    uploadImage,
    getOne,
    updateOne,
    deleteOne
} = require('../controller/artists.controller')

// ---- GET ----
router.get('/', getAll)

router.get('/:id', getOne)

// ---- POST ----
router.post('/', create)

router.post('/uploadimage', fileUploader.single('imageUrl'), uploadImage)

//---- PUT ----
router.put('/:id', updateOne)

//---- DELETE ----
router.delete('/:id', deleteOne)


module.exports = router