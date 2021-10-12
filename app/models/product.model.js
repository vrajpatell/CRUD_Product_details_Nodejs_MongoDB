const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    title: String,
    color: String,
    price: String,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);