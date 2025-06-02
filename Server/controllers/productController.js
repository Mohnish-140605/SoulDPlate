const Product = require('../models/Product');
const Class = require('../models/Class');

exports.getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  if (category === 'Classes') {
    const classes = await Class.find();
    return res.json(classes);
  }
  const products = await Product.find({ category });
  res.json(products);
};