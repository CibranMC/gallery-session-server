const { Schema, model } = require('mongoose')

const artistSchema = new Schema(
    {
        nameArt: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        userName: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        imageUrl: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ArtistModel = model('Artist', artistSchema)

module.exports = ArtistModel