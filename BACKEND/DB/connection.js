const mongoose = require('mongoose')

const connection = () => {
    return mongoose.connect(process.env.MONGO_URI)
}

module.exports = connection;