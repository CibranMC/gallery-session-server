const router = require('express').Router()
const { GALLERIST, USER } = require('../const/user.const')
const rolesValidation = require('../middleware/roles.middleware')

const fileUploader = require('../config/cloudinary.config');

const {
    getAll,
    virtualGallery,
    virtualGalleryAll,
    create,
    uploadImage,
    getOne,
    updateOne,
    deleteOne
} = require('../controller/artworks.controller')

// ---- GET ----
router.get('/', getAll)

router.get('/virtual-gallery/:id', virtualGallery)
router.get('/virtual-gallery', virtualGalleryAll)

router.get('/:id', getOne)

// ---- POST ----
router.post('/uploadimage', fileUploader.single('imageArtworkUrl'), uploadImage)

router.post('/', create)

//---- PUT ----
router.put('/:id', updateOne)

//---- DELETE ----
router.delete('/:id', deleteOne)


module.exports = router