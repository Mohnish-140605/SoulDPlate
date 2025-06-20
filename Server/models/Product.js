const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
  image: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
