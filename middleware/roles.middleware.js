const rolesValidation = (roles) => (req, res, next) => {


    const userProfileId = req.user
    if (userProfileId && roles.includes(userProfileId.role)) {
        next();
    } else {
        res.render('not-found');
    }
};

module.exports = rolesValidation