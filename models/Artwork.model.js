const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Types = mongoose.Schema.Types
const model = mongoose.model

const artworkSchema = new Schema(
    {
        artistName: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        year: {
            type: Number,
        },
        technique: {
            type: String,
        },
        price: {
            type: String,
        },
        // TO DO: isSold: false
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ArtworkModel = model('Artwork', artworkSchema)

module.exports = ArtworkModel