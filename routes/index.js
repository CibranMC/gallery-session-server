module.exports = (app) => {
    app.use("/", require('./index.routes'))
    app.use('/artists', require('./artists.routes'))
}