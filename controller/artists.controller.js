const { isValidObjectId } = require('mongoose');
const artistModel = require('../models/Artist.model');
const fileUploader = require('../config/cloudinary.config');

const getAll = (req, res, next) => {
    const { offset = 0, limit = 15 } = req.query;
    let artists;
    artistModel
        .find()
        .limit(limit)
        .skip(limit * offset)
        .sort({ createdAt: -1 })
        .lean()
        .then((artistsData) => {
            artists = artistsData;
            return artistModel.countDocuments();
        })
        .then((countArtist) => {
            res
                .status(200)
                .json({
                    results: artists,
                    page: +offset,
                    maxPage: Math.floor(countArtist / +limit),
                });
        })
        .catch(next);
};

const create = (req, res, next) => {
    const { nameArt, lastName, userName, imageUrl, description } = req.params;

    artistModel
        .create({ nameArt, lastName, userName, imageUrl, description })
        .then(() => {
            console.log(req.params)
            res.sendStatus(201);
        })
        .catch(next);
};

const uploadImage = (req, res, next) => {
    const { id } = req.params
    const { imageUrl } = req.body
    artistModel
        .findByIdAndUpdate(id, { imageUrl: req.file.path })
        .then(() => {
            res.json({ fileUrl: req.file.path })
        })
        .catch(next)
}


const getOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        artistModel
            .findById(id)
            .then((artist) => {
                res.status(200).json(artist);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
};

const updateOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        const { nameArt, lastName, userName, imageUrl, description } = req.body;

        artistModel
            .findByIdAndUpdate(id, {
                nameArt, lastName, userName, imageUrl: req.file.path, description
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
        artistModel
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
    getOne,
    updateOne,
    deleteOne,
};