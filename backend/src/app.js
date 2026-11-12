const express = require("express");
const app = express();

const healthRoutes = require("./Routes/healthRoutes");
const authRoutes = require("./Routes/authRoutes");
const adminRoutes = require("./Routes/adminRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Ecommerce API is running!" });
});

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
