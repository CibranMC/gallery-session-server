const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');
const { signJwt } = require('../utils/jwt.util');
const SALT = 10;



const MESSAGE_ERROR_EMAIL = 'Email ya está en uso.';
const MESSAGE_ERROR_LOGIN = 'Email o contraseña no es correcto.';



const RegisterController = (req, res, next) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then((user) => {
            if (user) {
                throw new Error(MESSAGE_ERROR_EMAIL);
            }
            const saltBcrypt = bcrypt.genSaltSync(SALT);
            const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);

            return UserModel.create({ email, password: hashBcrypt });
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            if (err.message === MESSAGE_ERROR_EMAIL) {
                res.status(400).json({ errorMessage: err.message });
            }
            next(err);
        });
};

const LoginController = (req, res, next) => {
    const { email, password } = req.body;

    UserModel.findOne({ email })
        .then((user) => {
            console.log(user)
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ token: signJwt(user._id.toString(), user.email, user.role) });
            } else {
                res.status(400).json(MESSAGE_ERROR_LOGIN);
            }
        })
        .catch(next);
};

const CartController = (req, res, next) => {

    console.log(req.body)
    const { cart: { imageArtworkUrl, _id } } = req.body


    const userProfileId = req.user._id

    UserModel
        .findById(userProfileId)
        .then((user) => {
            const validateId = user.cart.filter((element) => element.artworkId === _id)
            console.log(_id)
            if (validateId.length === 0) {
                console.log('entra')
                return UserModel
                    .findByIdAndUpdate(userProfileId, { $push: { cart: { imageArtworkUrl, artworkId: _id } } }, { new: true })
            }
        })
        .then((res) => {
            res.sendStatus(200);
        })
        .catch(next)

}

module.exports = {
    RegisterController,
    LoginController,
    CartController
};