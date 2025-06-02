const express = require("express");

const router = express.Router();

// Example route to get all orders
router.get("/", (req, res) => {
  res.json({ message: "List of orders" });
});

// Example route to create a new order
router.post("/", (req, res) => {
  const { userId, items, totalAmount } = req.body;
  // Simulate saving to the database
  res.status(201).json({ message: "Order created", data: { userId, items, totalAmount } });
});

module.exports = router;