const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    background: {type: String, required: true},
    featuredImage: {type: String, required: true},
    float: {type: String, required: true},
    content: {type: String, required: true},
    learnLink: {type: String, default: '#'}  
});

module.exports = mongoose.model('Category', categorySchema);