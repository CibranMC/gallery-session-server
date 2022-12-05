const artworkModel = require('../models/Artwork.model')

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

module.exports = { getAll }