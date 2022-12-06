const { isValidObjectId } = require('mongoose');
const artworkModel = require('../models/Artwork.model');

const getAll = (req, res, next) => {
    const { offset = 0, limit = 8 } = req.query;
    let artists;
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
                    results: artists,
                    page: +offset,
                    maxPage: Math.floor(countArtwork / +limit),
                });
        })
        .catch(next);
};

const create = (req, res, next) => {
    const { artistName, name, description, year, technique, price } = req.body;

    artworkModel
        .create({ artistName, name, description, year, technique, price })
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

const updateOne = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        const { artistName, name, description, year, technique, price } = req.body;

        artistModel
            .findByIdAndUpdate(id, {
                artistName, name, description, year, technique, price
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
    getOne,
    updateOne,
    deleteOne,
};