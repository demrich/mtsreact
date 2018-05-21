const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    name:  {type: String, required: true},
    price:  {type: Number, required: true},
    cartLink:  {type: String, required: true},
    imageURL:  {type: String || ""},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category' }

});

module.exports = mongoose.model('Product', productSchema);