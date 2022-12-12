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
            if (user) {
                const comparePassword = bcrypt.compareSync(password, user.password);
                if (comparePassword) {
                    res.status(200).json({ message: 'login' });
                }
                res.status(400).json(MESSAGE_ERROR_LOGIN);
            }
            res.status(400).json(MESSAGE_ERROR_LOGIN);

            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ token: signJwt(user._id.toString(), user.email, user.role) });
            } else {
                res.status(400).json(MESSAGE_ERROR_LOGIN);
            }
        })
        .catch(next);
};

module.exports = {
    RegisterController,
    LoginController,
};