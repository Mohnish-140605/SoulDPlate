const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const Product = require('../models/Product');

// GET products by category
router.get('/:category', protect, async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
