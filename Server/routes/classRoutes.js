const express = require("express");

const router = express.Router();

// Example route to get all live classes
router.get("/", (req, res) => {
  res.json({ message: "List of live classes" });
});

// Example route to create a new live class
router.post("/", (req, res) => {
  const { title, date, description } = req.body;
  // Simulate saving to the database
  res.status(201).json({ message: "Live class created", data: { title, date, description } });
});

module.exports = router;