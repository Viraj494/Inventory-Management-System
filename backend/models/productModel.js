// models/productModel.js
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },
        description: {
            type: String,
            required: [true, "Please enter product description"],
        },
        price: {
            type: Number,
            required: [true, "Please enter product price"],
        },
        quantity: {
            type: Number,
            required: [true, "Please enter product quantity"],
            default: 0,
        },
        image: {
            type: String,
            required: false,
            default: "https://via.placeholder.com/150",
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
