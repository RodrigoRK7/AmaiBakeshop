const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: Buffer,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;