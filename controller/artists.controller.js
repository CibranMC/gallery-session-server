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
    const { name, lastName, userName, imageUrl, description, email, phoneNumber } = req.body;

    artistModel
        .create({ name, lastName, userName, imageUrl: req.file.path, description, email, phoneNumber })
        .then(() => {
            res.json({ fileUrl: req.file.path })
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
        const { name, lastName, userName, imageUrl, description, email, phoneNumber } = req.body;

        artistModel
            .findByIdAndUpdate(id, {
                name, lastName, userName, imageUrl: req.file.path, description, email, phoneNumber
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
    getOne,
    updateOne,
    deleteOne,
};