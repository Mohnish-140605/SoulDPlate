require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const classRoutes = require("./routes/classRoutes");
const orderRoutes = require("./routes/orderRoutes"); // Import orderRoutes
const aiRoutes = require("./routes/aiRoutes");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

// Get MongoDB URI from .env or fallback to local connection
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://mohnishgdg:Mohnish%402005@souldplate.mvfu1r1.mongodb.net/souldplate?retryWrites=true&w=majority&appName=SoulDPlate";
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/orders", orderRoutes); // Use orderRoutes
app.use("/api/ai", aiRoutes);
app.use("/api/email", emailRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
