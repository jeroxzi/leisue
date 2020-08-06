const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        reuired: true,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now
    }

});

mongoose.modelNames.exports = mongoose.model('User',userSchema)