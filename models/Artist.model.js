const { Schema, model } = require('mongoose')

const artistSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        UserName: {
            type: String,
            trim: true,
        },
        imageUrl: String,
        contact: {
            email: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: Number
            }
        }
    },
    {
        timestamps: true,
    }
)

const ArtistModel = model('Artist', artistSchema)

module.exports = ArtistModel