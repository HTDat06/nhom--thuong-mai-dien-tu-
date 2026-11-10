
const express = require("express");
const app = express();

const healthRoutes = require("./Routes/healthRoutes");

app.use(express.json());

// Kiểm tra server
app.get("/", (req, res) => {
    res.json({
        message: "Ecommerce API is running!"
    });
});

// Kiểm tra database
app.use("/api/health", healthRoutes);

module.exports = app;
