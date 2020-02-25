module.exports = (req, res) => {
    if (!req.user) {
        return req.status(401).send({error: 'You must be logged in'});
    }

    next();
};