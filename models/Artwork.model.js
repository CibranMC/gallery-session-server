const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Types = mongoose.Schema.Types
const model = mongoose.model

const artworkSchema = new Schema(
    {
        artistName: {
            type: Types.ObjetctId,
            ref: "Artist",
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        year: {
            type: Number,
            required: true,
        },
        technique: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        isSold: false

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ArtworkModel = model('Artwork', artworkSchema)

module.exports = ArtworkModel