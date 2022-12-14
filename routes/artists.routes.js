const router = require('express').Router()
const { GALLERIST, USER } = require('../const/user.const')
const rolesValidation = require('../middleware/roles.middleware')
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
router.post('/uploadimage', fileUploader.single('imageUrl'), uploadImage)

router.post('/', rolesValidation(GALLERIST), create)

//---- PUT ----
router.put('/:id', updateOne)

//---- DELETE ----
router.delete('/:id', deleteOne)


module.exports = router