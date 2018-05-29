const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    heroImage: {type: String, required: true},
    button: {type: Boolean, default: false} 
});

module.exports = mongoose.model('Hero', heroSchema);