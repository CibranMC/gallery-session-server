const { isValidObjectId } = require('mongoose');
const artworkModel = require('../models/Artwork.model');
const fileUploader = require('../config/cloudinary.config');


const getAll = (req, res, next) => {
    const { offset = 0, limit = 15 } = req.query;
    let artworks;
    artworkModel
        .find()
        .limit(limit)
        .skip(limit * offset)
        .sort({ createdAt: -1 })
        .lean()
        .then((artworksData) => {
            artworks = artworksData;
            return artworkModel.countDocuments();
        })
        .then((countArtwork) => {
            res
                .status(200)
                .json({
                    results: artworks,
                    page: +offset,
                    maxPage: Math.floor(countArtwork / +limit),
                });
        })
        .catch(next);
};

const uploadImage = (req, res, next) => {

    const { id } = req.params

    artworkModel
        .findByIdAndUpdate(id, { imageArtworkUrl: req.file.path })
        .then(() => {
            res.json({ fileUrl: req.file.path })
        })
        .catch(next)
}

const create = (req, res, next) => {

    const { artistName, name, description, year, technique, price, imageArtworkUrl } = req.body;

    artworkModel
        .create({ artistName, name, description, year, technique, price, imageArtworkUrl })
        .then(() => {

            res.sendStatus(201);
        })
        .catch(next);
};


const getOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }

        artworkModel
            .findById(id)
            .then((artwork) => {
                res.status(200).json(artwork);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

const virtualGallery = (req, res, next) => {
    try {
        const { id } = req.params;

        artworkModel
            .findOne({ _id: id })
            .select('imageArtworkUrl')
            .then((artwork) => {
                res.status(200).json({
                    artwork: ['https://res.cloudinary.com/dsrq8rd4m/image/upload/v1670503364/Gallery/kzxxduvl2e9uxxip5jfr.jpg', 'https://res.cloudinary.com/dsrq8rd4m/image/upload/v1670503420/Gallery/vodsbla8b1c2grfccixg.jpg', 'https://res.cloudinary.com/dsrq8rd4m/image/upload/v1670852135/Gallery/w6frhyldyfalhuswmkpf.jpg']
                })
            }
            )
    }
    catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
}
const virtualGalleryAll = (req, res, next) => {
    try {
        const { id } = req.params;

        artworkModel
            .find({ imageArtworkUrl: { $exists: true } })
            .select('imageArtworkUrl')
            .then((artworks) => {
                res.status(200).json({
                    artwork: artworks.map((artwork) => artwork.imageArtworkUrl)
                })
            }
            )
    }
    catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
}

const updateOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        const { artistName, name, description, year, technique, price, imageArtworkUrl } = req.body;

        artworkModel
            .findByIdAndUpdate(id, {
                artistName, name, description, year, technique, price, imageArtworkUrl: req.file.path
            })
            .then(() => {
                res.sendStatus(204);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

const deleteOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        artworkModel
            .findByIdAndDelete(id)
            .then(() => {
                res.sendStatus(204);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

module.exports = {
    getAll,
    create,
    uploadImage,
    virtualGallery,
    virtualGalleryAll,
    getOne,
    updateOne,
    deleteOne,
};