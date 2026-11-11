
const express = require("express");
const app = express();

const healthRoutes = require("./Routes/healthRoutes");
const authRoutes = require("./Routes/authRoutes");

app.use(express.json());

// Trang kiểm tra server
app.get("/", (req, res) => {
  res.json({
    message: "Ecommerce API is running!"
  });
});

// Kiểm tra database
app.use("/api/health", healthRoutes);

// API xác thực
app.use("/api/auth", authRoutes);

module.exports = app;
