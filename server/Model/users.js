const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    lastLogin: {
        type:Date,
        required:true,
        default:Date.now
    }
});


module.exports = mongoose.model('users', userSchema);