module.exports = (app) => {
    app.use("/", require('./index.routes'))
    app.use('/auth', require('./auth.routes'))
    app.use('/artists', require('./artists.routes'))
    app.use('/artworks', require('./artworks.routes'))
    app.use('/shop', require('./shop.routes'))
}