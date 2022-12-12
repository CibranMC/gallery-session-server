const router = require('express').Router()
const GALLERIST = require('../const/user.const')
const fileUploader = require('../config/cloudinary.config');

const {
    getAll,
    create,
    uploadImage,
    getOne,
    updateOne,
    deleteOne
} = require('../controller/artworks.controller')

// ---- GET ----
router.get('/', getAll)

router.get('/:id', getOne)

// ---- POST ----
router.post('/uploadimage', fileUploader.single('imageArtworkUrl'), uploadImage)

router.post('/', create)

//---- PUT ----
router.put('/:id', updateOne)

//---- DELETE ----
router.delete('/:id', deleteOne)


module.exports = router