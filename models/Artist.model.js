const { Schema, model } = require('mongoose')

const artistSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: true,
        },
        lastName: {
            type: String,
            trim: true,
            unique: true,
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
        email: {
            type: String,
        },
        phoneNumber: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

const ArtistModel = model('Artist', artistSchema)

module.exports = ArtistModel