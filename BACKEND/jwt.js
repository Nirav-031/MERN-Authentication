const jwt = require('jsonwebtoken');

exports.createTocken= (payload) => {
    return jwt.sign(payload,process.env.SECRET)
}
exports.verifyTocken = (payload) => {
    return jwt.verify(payload,process.env.SECRET)
}
