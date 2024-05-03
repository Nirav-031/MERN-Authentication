const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    emailVerification: {
        type: Boolean,
        default:0
    }
}, { timestamps: true })


const User = mongoose.model('User', userSchema);

module.exports = User;