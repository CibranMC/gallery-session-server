
const jwt = require('jsonwebtoken')


const signJwt = (idUser, email, role) => {
    return jwt.sign({ email, role }, 'SECRET', { expiresIn: '7d', subject: idUser })
}

const verifyJwt = (token) => {
    return jwt.verify(token, 'SECRET')
}

module.exports = {
    signJwt,
    verifyJwt
}